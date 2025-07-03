<template>
  <div v-loading="waitMap" class="chinaMap">
    <div
      v-show="showCity !== '中国'"
      class="back-map-btn"
      title="返回全国地图"
      @click="backMap"
    >
      <i class="el-icon-refresh-right" /> 返回全国
    </div>
    <div id="crmChina" ref="ChinaBox" class="china" />
    <img
      v-show="showCity === '中国' && !waitMap"
      :src="requireImg('fullScreen/foodSafe/Islands.svg')"
      alt=""
      class="islands"
    />
  </div>
</template>
<script setup>
import { requireImg } from "@/utils/requireImg";
import * as echarts from "echarts";
import chinaLonLat from "@/utils/chinaLonLat.ts";
import branchIcon from "@/assets/fullScreen/foodSafe/ChinaMap-branch.png";

const activeDistribution = ref(0);
const screenWidth = ref(document.body.clientWidth);
const pointData = reactive({
  branchPoint: []
});
const showIcon = ref(branchIcon);
const waitMap = ref(false);
const showPoint = ref([]);
const chart = ref(null);
const mapJson = ref([]);
const areaMapList = ref([
  {
    id: 0,
    regiontype: 0,
    companyName: "****有限公司",
    longitude: "113.210725",
    latitude: "23.159769"
  },
  {
    id: 1,
    regiontype: 0,
    companyName: "******公司",
    longitude: "111.8",
    latitude: "37.12"
  },
  {
    id: 2,
    regiontype: 0,
    companyName: "******公司",
    longitude: "123.953",
    latitude: "47.3481"
  },
  {
    id: 3,
    regiontype: 0,
    companyName: "****公司",
    longitude: "93.585122",
    latitude: "42.771191"
  }
]);
const companyData = ref([
  { province: "广东省", city: "广州市" },
  { province: "新疆", city: "哈密市" },
  { province: "黑龙江", city: "齐齐哈尔市" },
  { province: "山西省", city: "吕梁市" }
]);
const showCity = ref("中国");
const showCityCode = ref(100000); // 中国 --> 地理编码100000

watch(
  () => showCity,
  newV => {
    const arr = ["branch", "DC", "cold"];
    if (newV === "中国")
      showPoint.value = pointData[`${arr[activeDistribution.value]}Point`];
    else
      showPoint.value = showPoint.value.filter(
        item => item.province.indexOf(newV) > -1
      );
  }
);

/* 初始化 */
function init() {
  handlePointProvince();
}
/* 处理地图某一区域 */
function handleRegions() {
  const NHlands = {
    name: "南海诸岛",
    itemStyle: {
      // 隐藏地图
      normal: {
        opacity: 0 // 为 0 时不绘制该图形
      }
    },
    label: {
      show: false, // 隐藏文字
      emphasis: {
        show: false
      }
    }
  };
  let setSpecialArea = [];
  companyData.value.forEach(company => {
    setSpecialArea.push({
      name: company.province
        ?.replace("省", "")
        .replace("自治区", "")
        .replace("市", "")
        .replace("特别行政区", ""),
      itemStyle: { normal: { areaColor: "#5284ff" } }
    });
    setSpecialArea.push({
      name: company.city,
      itemStyle: { normal: { areaColor: "#5284ff" } }
    });
  });
  setSpecialArea = [...setSpecialArea, NHlands];
  return setSpecialArea;
}
/* 处理数据，区分情况 */
async function handlerAreaMapList() {
  areaMapList.value.forEach(item => {
    const index = item.regiontype;
    const lot = Number(item.longitude);
    const lat = Number(item.latitude);
    if (index === 0)
      pointData.branchPoint.push({
        name: "",
        value: [lot, lat],
        province: item.province,
        companyName: item.companyName
      });
  });
  showPoint.value = pointData.branchPoint;
  await nextTick();
  getAMapGeo(showCityCode.value);
}
/* 高德获取地区边界geoJson */
function getAMapGeo(areaCode) {
  waitMap.value = true;
  if (areaCode === 100000) showCity.value = "中国";
  const map = new AMap.Map("map", {
    resizeEnable: true,
    center: [116.30946, 39.937629],
    zoom: 5
  });
  AMapUI.loadUI(["geo/DistrictExplorer"], DistrictExplorer => {
    const districtExplorer = (window.districtExplorer = new DistrictExplorer({
      eventSupport: true, // 打开事件支持
      map: map
    }));
    districtExplorer.loadAreaNode(areaCode, function (error, areaNode) {
      if (error) {
        console.error(error);
        return;
      }

      const Json = areaNode.getSubFeatures();
      // if (Json.length > 0 && Json[0].properties.level === 'district') parentJson = Json
      // 说明当前是区县
      // 这里还有个问题就是获取mapData数据，这里调用getMapData方法又会重新生成一次value值
      // 其实应该为之前的数据，不过这只是测试数据，用的随机数，实际项目肯定会调接口
      waitMap.value = false;
      if (Json.length === 0) {
        Message.warning("正在维护该地区的地图资源");
        return;
      }
      const json = { features: Json };
      zoomAnimation();
      if (areaCode === 100000) mapJson.value = Json;
      initChart(json);
    });
  });
}
/* 用高德api根据经纬度获取省份 */
function handlePointProvince() {
  const pointList = areaMapList.value.map(item => {
    return [item.longitude, item.latitude];
  });
  let geoCoder = null;
  AMap.plugin("AMap.Geocoder", () => {
    geoCoder = new AMap.Geocoder({
      city: "全国", // 城市设为北京，默认：“全国”
      radius: 1000 // 范围，默认：500
    });
    geoCoder.getAddress(pointList, function (status, result) {
      if (status === "complete" && result.regeocodes.length) {
        for (let i = 0; i < result.regeocodes.length; i += 1) {
          areaMapList.value[i].province =
            result.regeocodes[i].addressComponent.province;
          areaMapList.value[i].city =
            result.regeocodes[i].addressComponent.city;
        }
        handlerAreaMapList();
      } else console.log(result);
    });
  });
  // 调用高德批量逆地理编码Api
}
/* 初始化图形 */
async function initChart(mapJson) {
  await nextTick();
  const getElement = document.getElementById("crmChina");
  if (!getElement) return;
  if (chart.value) chart.value.dispose();
  if (showCity.value === "中国") echarts.registerMap("中国", mapJson);
  else echarts.registerMap("Map", mapJson);
  chart.value = echarts.init(getElement);
  chart.value.setOption({
    tooltip: {
      padding: 0,
      borderColor: "#4266de",
      backgroundColor: "rgba(15, 16, 37, .9)",
      textStyle: {
        color: "#fff"
      },
      formatter: params => {
        let companyTipText = "";
        if (params.componentSubType === "map") {
          const areaName = params.name;
          const areaIndex = companyData.value.findIndex(
            item => item.province?.includes(areaName) || item?.city === areaName
          );
          if (areaIndex < 0) {
            // 遍历匹配是否为省级单位
            if (
              chinaLonLat.logLatData.findIndex(item => {
                return item.name === areaName;
              }) > 0 ||
              areaName === "台湾"
            ) {
              return `<div class="echart-tootip">${areaName}</div>`;
            } else return '<div class="echart-tootip">点击返回中国地图</div>';
          }
          companyTipText = `<div><span>地区</span>: ${areaName}</div>`;
        } else {
          companyTipText = `<div><span>公司名称</span>: ${params.data.companyName}</div>`;
        }
        return `
                <div class="echart-tootip">
                  ${companyTipText}
                  <div><span>服务区县数</span>: ${12}个</div>
                  <div><span>服务学校数量</span>: ${134}所</div>
                  <div><span>服务学生数量</span>: ${167}个</div>
                  <div><span>食材供应数量</span>: ${54335}斤</div>
                </div>
                `;
      }
    },
    geo: {
      // 中国地图
      show: true,
      map: showCity.value === "中国" ? "china" : "Map",
      roam: false, // 放大缩小
      zoom: showCity.value === "中国" ? 2 : 0.5,
      top: "middle",
      label: {
        show: false,
        color: "#fff",
        fontSize: 12 * (screenWidth.value / 1920),
        fontFamily: "PingFangSC-Regular"
      },
      itemStyle: {
        areaColor: "#182554",
        borderColor: "#4266de",
        borderWidth: 1 * (screenWidth.value / 1920)
      },
      select: {
        itemStyle: {
          areaColor: "#68e4ff"
        },
        label: {
          color: "#fff",
          textBorderColor: "#5284ff",
          textShadowColor: "#5284ff",
          textBorderWidth: 2
        }
      },
      // 隐藏南海诸岛
      regions: handleRegions()
    },
    series: [
      {
        name: "地图",
        type: "map",
        geoIndex: 0,
        data: []
      },
      {
        name: "散点",
        type: "scatter",
        coordinateSystem: "geo",
        data: showPoint.value,
        symbol: `image://${showIcon.value}`,
        symbolSize: 30 * (screenWidth.value / 1920),
        itemStyle: {
          opacity: 1
        },
        emphasis: {
          scale: 1.5 // 设置缩放比的大小
        }
      }
    ]
  });
  // 点击前解绑，防止点击事件触发多次
  chart.value.on("click", param => {
    if (param.seriesName === "散点") return;
    let adcode = null;
    const cityObj = mapJson.features.find(
      item => item.properties.name.indexOf(param.name) > -1
    );
    if (cityObj) adcode = cityObj.properties.adcode;
    if (cityObj.properties.level !== "province") {
      const index = -1;
      if (index < 0) adcode = 100000;
      else return;
    }
    if (param.name !== "台湾") showCity.value = param.name;
    showCityCode.value = adcode;
    getAMapGeo(adcode);
  });
}
/* 控制zoom，实现下钻动画 */
function zoomAnimation() {
  const multiple = 0.9;
  const defaultStart = multiple / 1.5;
  var count = null; // 作用域问题需用var
  const zoom = per => {
    if (!count) count = per;
    count = count + per;
    chart.value.setOption({ geo: { zoom: count } });
    if (count <= 0.9)
      window.requestAnimationFrame(() => {
        zoom(defaultStart);
      });
  };
  window.requestAnimationFrame(() => {
    zoom(defaultStart);
  });
}
/* 点击返回地图按钮 */
function backMap() {
  getAMapGeo(100000);
  showCity.value = "中国";
}
onMounted(() => {
  waitMap.value = true;
  init();
  window.addEventListener("resize", function () {
    chart.value?.resize();
    screenWidth.value = document.body.clientWidth;
    getAMapGeo(showCityCode.value);
  });
});
</script>

<style lang="scss" scoped>
:deep {
  .el-loading-mask {
    background-color: transparent;
  }

  .echart-tootip {
    padding: 0.2604rem;
    font-size: 0.7292rem;
    line-height: 0.5208rem;

    div {
      padding: 0.2604rem;

      span {
        display: inline-block;
        width: 4.4792rem;
        margin-right: 0.0521rem;
        text-align-last: justify;
      }
    }
  }
}

.chinaMap {
  position: relative;
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  margin-bottom: 1.5625rem;

  .distribution {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 9.1rem;
    height: fit-content;
    background-color: #212964;
    border-radius: 0.4167rem;

    .branch-office {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      padding: 0.7813rem;
      font-size: 0.625rem;
      color: #fff;
      cursor: pointer;

      img {
        width: 0.9375rem;
        height: 0.9375rem;
        margin-right: 0.2604rem;
        pointer-events: none;
      }

      &:first-child {
        border-radius: 0.4167rem 0.4167rem 0 0;
      }

      &:last-child {
        border-radius: 0 0 0.4167rem 0.4167rem;
      }
    }

    .active {
      background-color: #2f3e91;
    }
  }

  .back-map-btn {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: fit-content;
    padding: 0.3125rem;
    font-size: 0.625rem;
    color: #4266de;
    cursor: pointer;
    background-color: #182554;
    border: 0.0521rem solid #4266de;
    border-radius: 0.2604rem;
  }

  .china {
    width: 40.1042rem;
  }

  .islands {
    position: absolute;
    bottom: 3%;
    left: calc(80% + 5vh);
    width: 3.2813rem;
  }
}
</style>
