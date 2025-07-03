<!-- eslint-disable no-useless-return -->
<script setup lang="ts">
import * as echarts from "echarts";
import {
  computed,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch
} from "vue";
import redIcon from "@/assets/fullScreen/hngsChargeScreen/map-red-icon.svg";
import yellowIcon from "@/assets/fullScreen/hngsChargeScreen/map-yellow-icon.png";
import blueIcon from "@/assets/fullScreen/hngsChargeScreen/map-blue-icon.png";
import redCircularIcon from "@/assets/fullScreen/hngsChargeScreen/map-red-circular-icon.svg";
import yellowCircularIcon from "@/assets/fullScreen/hngsChargeScreen/map-yellow-circular-icon.svg";
import blueCircularIcon from "@/assets/fullScreen/hngsChargeScreen/map-blue-circular-icon.svg";
import redIconBg from "@/assets/fullScreen/hngsChargeScreen/map-red-bg.svg";
import yellowIconBg from "@/assets/fullScreen/hngsChargeScreen/map-yellow-bg.svg";
import blueIconBg from "@/assets/fullScreen/hngsChargeScreen/map-blue-bg.svg";
import redCircularIconBg from "@/assets/fullScreen/hngsChargeScreen/map-red-circular-bg.svg";
import yellowCircularIconBg from "@/assets/fullScreen/hngsChargeScreen/map-yellow-circular-bg.svg";
import blueCircularIconBg from "@/assets/fullScreen/hngsChargeScreen/map-blue-circular-bg.svg";
import huNanJSON from "./430000.json";
import MapDialog from "./mapDialog.vue";

type point = {
  lon: number;
  lat: number;
  name: string;
  [unknown: string]: any;
};

interface Props {
  pointData:
    | any
    | {
        redStation: point[];
        yellowStation: point[];
        blueStation: point[];
      };
  textList: string[];
  mapDomId: string;
  selTypeChn: string;
  screenState?: boolean; // 开启全屏
  numIcon?: boolean; // 数字图标
  pointInfoFactory?: (...args: any) => string; // 点信息Dom
  pointInfoAsync?: any; // 标记点击异步方法
  asyncParamsEnums?: string[]; // 异步方法请求参数数组，索引对应点数据字段顺序
  parentDom?: any; // 父级dom
}
const props = defineProps<Props>();
const iconBg: { [unknown: string]: string } = {
  redIcon,
  yellowIcon,
  blueIcon,
  redCircularIcon,
  yellowCircularIcon,
  blueCircularIcon,
  redCircularIconBg,
  yellowCircularIconBg,
  blueCircularIconBg,
  redIconBg,
  yellowIconBg,
  blueIconBg
};
let chart: any = null;
let screenWidth = document.body.clientWidth;
const selTypeChn = ref(props.selTypeChn);
const pointList = ref<any>([]);
const pointListBup = ref<any>([]);
const fullScreenStatue = ref(false);
const tarClickPoint = ref<any>(null);
const openMonitor: Function | undefined = inject("openMonitor");
const funPropsObj = ref<any>({});
const isClickServer = ref(false);
const loadRender = ref(false);
const openPlatform: Function | undefined = inject("openPlatform");
const tarMapJson: any = huNanJSON;
const selOrg = ref<any>([
  { label: "全部", id: "org-all", value: true, count: "" },
  { label: "新能源", id: "org-energy", value: false, count: "" },
  { label: "服务区", id: "org-service", value: false, count: "" }
]);
const selBelong = ref<any>([
  { label: "全部", id: "belong-all", value: true, count: "" },
  { label: "线上站", id: "belong-online", value: false, count: "" },
  { label: "线下站", id: "belong-offline", value: false, count: "" }
]);
const selRate = ref<any>({
  red: true,
  yellow: true,
  blue: true
});
const otherData: any = inject("otherData");
let timer: any;

watch(
  props.pointData,
  async newV => {
    if (
      pointListBup.value[0] &&
      JSON.stringify(pointListBup.value) === JSON.stringify(newV)
    )
      return;
    loadRender.value = true;
    tarClickPoint.value = null;
    pointListBup.value = newV;
    pointList.value = JSON.parse(JSON.stringify(newV)); // 深拷贝
    countDate();
    filterLegendSel();
    await nextTick();
    chart?.resize();
    screenWidth = document.body.clientWidth;
    init();
  },
  { deep: true, immediate: true }
);

/* 计算占比数据 */
const legendVal = computed(() => (i: number) => {
  const tar = ["red", "yellow", "blue"][i];
  const list = pointList.value;
  const totalPoints =
    list.redStation.length +
    list.yellowStation.length +
    list.blueStation.length;
  const tarLength = list[`${tar}Station`].length;
  return `${tarLength}座/${
    totalPoints && tarLength ? ((tarLength / totalPoints) * 100).toFixed(2) : 0
  }%`;
});

/* 初始化 */
function init() {
  initChart(tarMapJson);
}

/* 添加地图散点点击事件 */
function addMapClickEvent() {
  const tarParentDom = props.parentDom || document;
  // 添加点击工具方法
  const clickTool = async (domName: string, url?: string, fun?: Function) => {
    const tarDoms = tarParentDom.getElementsByClassName(domName);
    if (!tarDoms || !tarDoms[0]) return;
    await nextTick();
    tarDoms[0].classList.add("map-info-pointer");
    tarDoms[0].addEventListener("click", () => {
      if (fun) fun();
      else if (openPlatform) openPlatform(true, url);
    });
  };
  // 添加监控点击
  const clickMonitor = async () => {
    clickTool("map-monitor-info", "", () => {
      if (openMonitor) openMonitor(tarClickPoint.value.stationId);
    });
  };
  // 添加站名点击
  const clickStationName = async () => {
    const tarStationId =
      funPropsObj.value.stationId || tarClickPoint.value.stationId;
    clickTool(
      "info-station-name",
      `/chargestation/view?stationId=${tarStationId}`
    );
  };
  // 添加离线相关点击
  const clickOfflineInfo = async () => {
    clickTool(
      "info-offline",
      `/ChargeDevice/eVChargeIndex?stationName=${tarClickPoint.value.stationName}&deviceState=4`
    );
  };
  // 添加充电服务相关点击
  const clickChargingService = async () => {
    clickTool(
      "info-charging-service",
      `/monitorchargeservice/evChargeIndex?chargingDate=today&stationId=${tarClickPoint.value.stationId}`
    );
  };
  setTimeout(async () => {
    clickMonitor();
    clickStationName();
    clickOfflineInfo();
    clickChargingService();
  }, 500);
}

/* 处理点数据至散点图可用 */
function handlePoint(list: point[]) {
  const newList = list?.map(item => {
    return {
      name: "",
      value: [item.lon, item.lat, item]
    };
  });
  return newList;
}

/* 输出散点图标记 */
function choiceIcon(color: string) {
  let numIconOption = {};
  const zlevel = ["blue", "yellow", "red"].indexOf(color) + 1;
  if (!props.numIcon) {
    numIconOption = {
      name: "散点",
      type: "scatter",
      coordinateSystem: "geo",
      zlevel, // 设置层级
      data: handlePoint(pointList.value[`${color}Station`]),
      symbol: (params: any) => {
        if (params[2].credentialNo === "91430000MA4R61XH3C")
          return `image://${iconBg[`${color}CircularIcon`]}`;
        return `image://${iconBg[`${color}Icon`]}`;
      },
      symbolSize: 24 * (screenWidth / 1920),
      itemStyle: {
        opacity: 1
      }
    };
    return numIconOption;
  }
  numIconOption = {
    name: "散点",
    type: "scatter",
    zlevel,
    coordinateSystem: "geo",
    data: handlePoint(pointList.value[`${color}Station`]),
    symbol: (params: any) => {
      if (params[2].credentialNo === "91430000MA4R61XH3C")
        return `image://${iconBg[`${color}CircularIconBg`]}`;
      return `image://${iconBg[`${color}IconBg`]}`;
    },
    symbolSize: 24 * (screenWidth / 1920),
    itemStyle: {
      opacity: 1
    },
    label: {
      show: true,
      formatter(params: any) {
        return params.value[2].offlineCount;
      },
      color: "#fff",
      fontSize: 12 * (screenWidth / 1920)
    }
  };
  return numIconOption;
}

/* 初始化图形 */
function initChart(mapJsonData: any) {
  const getElement = document.getElementById(props.mapDomId);
  if (!getElement) return;
  if (chart) {
    chart.dispose();
    chart = null;
  }
  echarts.registerMap("Map", mapJsonData);
  chart = echarts.init(getElement);
  chart.setOption({
    tooltip: {
      show: "none",
      triggerOn: "click",
      confine: true,
      padding: [2 * (screenWidth / 1920), 5 * (screenWidth / 1920)],
      borderColor: "#A5FDF9",
      backgroundColor: "rgba(15, 16, 37, .9)",
      trigger: "item",
      alwaysShowContent: Boolean(tarClickPoint.value),
      showDelay: 0,
      enterable: true,
      textStyle: {
        color: "#fff",
        fontSize: 14 * (screenWidth / 1920)
      },
      formatter: (params: any, ticket: any, callback: any) => {
        if (params.componentSubType === "map") return "";
        if (
          props.pointInfoFactory &&
          props.asyncParamsEnums &&
          tarClickPoint.value
        ) {
          if (isClickServer.value) return "";
          isClickServer.value = true;
          const reqParam: any = {};
          for (const key of props.asyncParamsEnums) {
            reqParam[key] = params.value[2][key];
          }
          props.pointInfoAsync(reqParam).then((res: any) => {
            setTimeout(() => {
              isClickServer.value = false;
            }, 50);
            const resData = res.error.response?.data?.data;
            funPropsObj.value = { ...params.value[2], ...resData };
            tarClickPoint.value = funPropsObj.value;
            if (props.pointInfoFactory)
              callback(ticket, props.pointInfoFactory(funPropsObj.value));
            addMapClickEvent();
          });
        }
        if (props.pointInfoFactory && tarClickPoint.value) {
          setTimeout(() => {
            isClickServer.value = false;
          }, 50);
          return props.pointInfoFactory(params.value[2]);
        }
        return params.value[2].stationName;
      }
    },
    geo: [
      {
        // 地图
        show: true,
        map: "Map",
        aspectScale: 1,
        roam: true, // 放大缩小
        zoom: 1.2,
        center: [111.714024, 27.351052],
        label: {
          show: true,
          color: "#fff",
          fontSize: 12 * (screenWidth / 1920),
          fontFamily: "PingFangSC-Regular"
        },
        itemStyle: {
          areaColor: "#3595d5",
          borderColor: "#b8eeff",
          borderWidth: 1 * (screenWidth / 1920),
          shadowColor: "#b8eeff",
          shadowBlur: 3 * (screenWidth / 1920),
          shadowOffsetY: 5 * (screenWidth / 1920)
        },
        emphasis: {
          label: {
            color: "#fff"
          },
          itemStyle: {
            areaColor: "#3595d5",
            borderColor: "#b8eeff"
          }
        },
        select: {
          itemStyle: {
            areaColor: "#3595d5"
          },
          label: {
            color: "#fff"
          }
        }
        // 隐藏南海诸岛
      }
    ],
    series: [
      {
        name: "地图",
        type: "map",
        geoIndex: 0,
        position: "center",
        data: []
      },
      selRate.value.blue &&
        pointList.value.blueStation[0] &&
        choiceIcon("blue"),
      selRate.value.yellow &&
        pointList.value.yellowStation[0] &&
        choiceIcon("yellow"),
      selRate.value.red && pointList.value.redStation[0] && choiceIcon("red")
    ]
  });
  // 监听空白处，清除固定提示框
  chart.getZr().on("click", () => {
    tarClickPoint.value = null;
  });
  // 监听点击事件，固定提示框
  chart.on("click", async (params: any) => {
    if (params.componentSubType === "scatter") {
      if (isClickServer.value) return;
      tarClickPoint.value = params.value[2];
      chart.dispatchAction({
        type: "showTip",
        seriesIndex: params.seriesIndex,
        dataIndex: params.dataIndex
      });
      // eslint-disable-next-line no-plusplus
      addMapClickEvent();
    } else {
      tarClickPoint.value = null;
      isClickServer.value = false;
      funPropsObj.value = {};
      chart.dispatchAction({ type: "hideTip" });
    }
  });
  // 监听鼠标移动
  chart.on("mousemove", (params: any) => {
    if (!tarClickPoint.value || !Object.keys(tarClickPoint.value)[0]) {
      if (params.componentSubType === "scatter") {
        chart.dispatchAction({
          type: "showTip",
          seriesIndex: params.seriesIndex,
          dataIndex: params.dataIndex
        });
      }
    }
  });
  setTimeout(() => {
    loadRender.value = false;
  }, 2000);
}

/* 统计数据数量 */
function countDate() {
  const ory: number[] = [0, 0, 0];
  const belong: number[] = [0, 0, 0];
  ["red", "yellow", "blue"].forEach(item => {
    ory[0] = pointListBup.value[`${item}Station`].length + ory[0];
    belong[0] = pointListBup.value[`${item}Station`].length + belong[0];
    // eslint-disable-next-line @typescript-eslint/no-shadow
    pointListBup.value[`${item}Station`].forEach((item: any) => {
      if (item.credentialNo !== "91430000MA4R61XH3C") ory[1] = 1 + ory[1];
      else ory[2] = 1 + ory[2];
      if (item.stationChannelType === 1) belong[1] = 1 + belong[1];
      else belong[2] = 1 + belong[2];
    });
  });
  const handleNumList = (fromList: number[], toList: any[]) => {
    fromList.forEach((item: number, i: number) => {
      toList[i].count = item;
    });
  };
  handleNumList(ory, selOrg.value);
  handleNumList(belong, selBelong.value);
}

/* 过滤数据工具 */
function filterPointList(fun: (item: any) => boolean, filterList?: any) {
  const colorList = ["red", "yellow", "blue"];
  const list = JSON.parse(JSON.stringify(pointList.value));
  colorList.forEach((color: string) => {
    const tarFilterList = filterList || pointListBup.value;
    list[`${color}Station`] = tarFilterList[`${color}Station`].filter(
      (item: any) => {
        return fun(item);
      }
    );
  });
  return list;
}

/* 筛选数据 */
function filterLegendSel() {
  let filterList = JSON.parse(JSON.stringify(pointListBup.value));
  // 处理运营商
  const handleOrg = () => {
    if (selOrg.value[0].value) return;
    filterList = filterPointList((item: any) => {
      return selOrg.value[1].value
        ? item.credentialNo !== "91430000MA4R61XH3C"
        : item.credentialNo === "91430000MA4R61XH3C";
    }, filterList);
  };
  // 处理电站归属
  const handleBelong = () => {
    if (selBelong.value[0].value) return;
    filterList = filterPointList((item: any) => {
      return item.stationChannelType === (selBelong.value[1].value ? 1 : 2);
    }, filterList);
  };
  handleOrg();
  handleBelong();
  pointList.value = filterList;
}

/* 点击图例 */
function clickLegend(e: any) {
  if (!e.target.id) return;
  if (e.target.id.includes("rate")) {
    const list = ["red", "yellow", "blue"];
    const tar = list[Number(e.target.id.split("-")[1])];
    selRate.value[tar] = !selRate.value[tar];
  } else {
    const tarSel = e.target.id;
    const isOrgSel = tarSel.includes("org");
    // 重置状态并返回索引
    const clearActiveSel = (list: any[], id?: "") => {
      const tarI = list.findIndex((item: any) => item.id === id);
      // eslint-disable-next-line guard-for-in
      for (const i in list) {
        const item = list[i];
        item.value = false;
      }
      return tarI;
    };
    if (isOrgSel) {
      const tarI = clearActiveSel(selOrg.value, tarSel);
      selOrg.value[tarI].value = !selOrg.value[tarI].value;
    } else {
      const tarI = clearActiveSel(selBelong.value, tarSel);
      selBelong.value[tarI].value = !selBelong.value[tarI].value;
    }
  }
  filterLegendSel();
  initChart(tarMapJson);
}

onMounted(async () => {
  window.addEventListener("resize", () => {
    chart?.resize();
    screenWidth = document.body.clientWidth;
    initChart(tarMapJson);
  });
});

onBeforeUnmount(() => {
  clearInterval(timer);
  timer = undefined;
});
</script>

<template>
  <div
    class="china-map"
    :title="loadRender ? '绘制新数据中，请稍等...' : ''"
    :class="{ 'load-render-map': loadRender }"
  >
    <div
      v-if="screenState"
      class="full-screen-btn"
      title="全屏"
      @click="fullScreenStatue = true"
    >
      <img
        :src="'src/assets/fullScreen/hngsChargeScreen/fullscreen.svg'"
        alt=""
      />
    </div>
    <div class="legend" @click="clickLegend">
      <div v-for="(item, i) in ['org', 'station']" :key="i" class="sel-item">
        <span class="sel-label"
          >{{ item === "org" ? "运营商筛选" : "电站归属筛选" }}：</span
        >
        <div class="sel-btns">
          <div
            v-for="(selItem, selI) in item === 'org' ? selOrg : selBelong"
            :key="selI"
          >
            <div
              :id="selItem.id"
              :class="[selItem.value ? 'active-sel' : 'no-active-sel']"
              class="sel-btn"
            >
              {{ selItem.label }}
            </div>
            <span>
              {{ selItem.count }}
              {{
                ["全部", "新能源", "线上站"].includes(selItem.label)
                  ? `(${otherData.countCryptoStation || 0})`
                  : ""
              }}
            </span>
          </div>
        </div>
      </div>
      <div class="sel-item rate-sel">
        <span class="sel-label">电站{{ selTypeChn }}筛选：</span>
        <div class="rate-btns">
          <div v-for="(item, i) in textList" :key="i" :class="`item-${i}`">
            <div
              :id="`rate-${i}`"
              :class="[
                { 'no-active-sel': !selRate[['red', 'yellow', 'blue'][i]] }
              ]"
              class="rate-btn"
            >
              {{ item }}
            </div>
            <div class="legend-text">
              {{ legendVal(i) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :id="mapDomId" class="china" />
    <MapDialog
      v-if="screenState"
      :visible="fullScreenStatue"
      :point-data="pointData"
      :text-list="textList"
      :map-dom-id="mapDomId"
      :num-icon="numIcon"
      :point-info-factory="pointInfoFactory"
      @close-map-dialog="fullScreenStatue = false"
    />
  </div>
</template>

<style lang="scss" scoped>
:deep {
  .point-info > div {
    padding-left: 0.2604rem;
  }

  .map-info-pointer {
    cursor: pointer;
    border-left: transparent solid 0.0521rem;

    &:hover {
      border-color: #fff;
    }
  }

  .info-offline {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    > div {
      width: 100%;
    }
  }
}

.load-render-map div {
  pointer-events: none !important;
}

.full-screen-btn {
  position: absolute;
  top: 1.0417rem;
  right: 1.0417rem;
  z-index: 1;
  padding: 0.2604rem;
  cursor: pointer;
  border-radius: 0.5208rem;

  &:hover {
    background-color: rgba($color: #000, $alpha: 50%);
  }

  img {
    width: 1.5625rem;
  }
}

.legend {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-width: 10.4167rem;
  padding: 0.5208rem;
  font-size: 0.625rem;
  color: #fff;
  background-color: rgba($color: #000, $alpha: 40%);
  border-radius: 0.8333rem;

  .sel-item {
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
      margin-bottom: 0.5208rem;
    }

    .sel-label {
      margin-bottom: 0.4167rem;
    }

    .sel-btns {
      display: flex;
      flex-wrap: nowrap;

      .sel-btn {
        padding: 0.2604rem 0.5208rem;
        cursor: pointer;
        background-color: #fff;
        border-radius: 1.5625rem;
      }

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        span {
          margin-top: 0.1042rem;
          font-size: 0.5729rem;
        }

        &:not(:last-child) {
          margin-right: 0.5208rem;
        }
      }

      .active-sel {
        background: linear-gradient(90deg, #8bdef7 0%, #3595d5 70%);
      }
    }
  }

  .rate-sel {
    .rate-btns {
      display: flex;
      flex-direction: column;

      & > div {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        text-align: center;

        &:not(:last-child) {
          margin-bottom: 0.5208rem;
        }

        .rate-btn {
          width: 5.2083rem;
          min-width: fit-content;
          padding: 0.2604rem;
          margin-right: 0.5208rem;
          cursor: pointer;
          border-radius: 1.5625rem;
        }

        .legend-text {
          white-space: nowrap;
        }
      }

      .item-0 .rate-btn {
        background: linear-gradient(90deg, #f08b78 0%, #ec5959 100%);
      }

      .item-1 .rate-btn {
        background: linear-gradient(90deg, #f3b643 0%, #e28e36 100%);
      }

      .item-2 .rate-btn {
        background: linear-gradient(90deg, #24e1f7 0%, #1998de 120%);
      }
    }
  }

  .no-active-sel {
    background: linear-gradient(90deg, #a9a9a9 0%, #808080 100%) !important;
  }
}

.china-map {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  margin-bottom: 1.0417rem;

  .china {
    width: 100%;
    height: 100%;
  }
}
</style>
