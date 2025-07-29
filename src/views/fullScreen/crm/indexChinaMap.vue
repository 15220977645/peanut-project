<template>
  <div class="chinaMap">
    <div class="bid-money_block">
      <div class="bid-title">{{ bidAmountText }}</div>
      <div class="money-type">
        <div
          v-for="(item, index) in monthBidData"
          :key="index"
          class="type-item"
        >
          <div :style="'background-color:' + item.color" />
          <div class="money-val">{{ item.val }}</div>
        </div>
      </div>
    </div>
    <div id="foodChina" ref="ChinaBox" class="china" />
    <img
      src="http://images.visfarm.com/crm/img/Islands.svg"
      alt=""
      class="islands"
    />
    <img
      src="http://images.visfarm.com/crm/img/map-lamp-holder.png"
      alt=""
      class="map-lamp"
    />
  </div>
</template>

<script setup>
import ChinaLonLat from "@/utils/chinaLonLat.ts";
import * as echarts from "echarts";
import "@/utils/china.js";
import { Bus } from "./components/bus";
import chinaJSON from "@/utils/mapJson/china-no-islands.json"; // 官方JSON地图数据

const bidAmountText = ref("月中标金额");
const monthBidData = ref([
  { type: 0, color: "#FB497C", val: "2000万以上" },
  { type: 1, color: "#FFC760", val: "1000-2000万" },
  { type: 2, color: "#6FE621", val: "500-1000万" },
  { type: 3, color: "#4FCCFF", val: "300-500万" },
  { type: 4, color: "#8B77FF", val: "300万以下" }
]);
const showTimeText = ref("");
const screenWidth = ref(document.body.clientWidth);
const monthGap = ref(1);
const chart = ref();
const pointsData = ref([]);

/* 初始化 */
async function init() {
  const nowYear = new Date().getFullYear();
  const nowMonth = new Date().getMonth() + 1;
  showTimeText.value = `${nowYear}年${nowMonth}月`;
  ChinaLonLat.logLatData.forEach(item => {
    pointsData.value.push({
      ...item,
      count: (Math.random() * 10).toFixed(0),
      totalAmount: (Math.random() * 1000).toFixed(0)
    });
  });
  await nextTick();
  initChart();
}
/* 初始化图形 */
function initChart() {
  const getElement = document.getElementById("foodChina");
  if (!getElement) return;
  if (chart.value) chart.value.dispose();
  echarts.registerMap("china", chinaJSON);
  // 注册地图
  chart.value = echarts.init(getElement);
  chart.value.setOption({
    tooltip: {
      show: true
    },
    geo: {
      // 中国地图
      show: true,
      map: "china",
      roam: false, // 放大缩小
      zoom: 1.2,
      top: "8%",
      left: "25%",
      right: "25%",
      bottom: "23%",
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, .8)",
        borderColor: "#56acd4",
        textStyle: {
          color: "#303133"
        },
        formatter: param => {
          if (param.componentType === "series") {
            const data = param.data;
            return `<div style="font-size: .8333rem; line-height: 1.0417rem; border-radius: .4167rem;">
                          <div>${data.name}</div>
                          <div>${showTimeText.value}中标数：${data.count}</div>
                          <div>${showTimeText.value}中标金额：${Number(
              data.totalAmount
            ).toFixed(2)}万</div>
                        </div>
                      `;
          } else {
            return "";
          }
        }
      },
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          areaColor: "#061e59",
          borderColor: "#56acd4"
        },
        emphasis: {
          areaColor: "#3b538b"
        }
      },
      // 隐藏南海诸岛
      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            // 隐藏地图
            normal: {
              opacity: 0 // 为 0 时不绘制该图形
            }
          },
          label: {
            show: false // 隐藏文字
          }
        }
      ]
    },
    series: [
      {
        // 水波纹
        type: "effectScatter",
        coordinateSystem: "geo",
        data: pointsData.value,
        showEffectOn: "render",
        rippleEffect: {
          period: 5, // 动画时间，值越小速度越快
          scale: 5 * (screenWidth.value / 1920), // 波纹圆环最大限制，值越大波纹越大
          brushType: "fill" // 波纹绘制方式 stroke, fill
        },
        label: {
          formatter: "{b}",
          position: "right",
          show: true,
          textStyle: {
            color: "#fff",
            fontSize: 14 * (screenWidth.value / 1920)
          },
          emphasis: {
            textStyle: {
              fontSize: 18 * (screenWidth.value / 1920)
            }
          }
        },
        itemStyle: {
          color: param => {
            const amount = Number(param.data.totalAmount);
            if (amount > monthGap.value * 2000) return "#FB497C";
            else if (
              amount >= monthGap.value * 1000 &&
              amount < monthGap.value * 2000
            )
              return "#FFC760";
            else if (
              amount >= monthGap.value * 500 &&
              amount < monthGap.value * 1000
            )
              return "#6FE621";
            else if (
              amount >= monthGap.value * 300 &&
              amount < monthGap.value * 500
            )
              return "#4FCCFF";
            else return "#8B77FF";
          }
        },
        zlevel: 1
      }
    ]
  });
}

/* 监听日期更改 */
function listenStageData() {
  Bus.on("getStageDataTime", data => {
    const startMonth = data.useData.startTime.replace(/\d{0,4}-/, "");
    const endMonth = data.useData.endTime.replace(/\d{0,4}-/, "");
    monthGap.value = Number(endMonth) - Number(startMonth) + 1;
    monthGap.value = monthGap.value > 0 ? monthGap.value : 1;
    showTimeText.value = data.showTime;
    if (monthGap.value - 1 > 0) {
      monthBidData.value = [
        { type: 0, color: "#FB497C", val: `${monthGap.value * 2000}万以上` },
        {
          type: 1,
          color: "#FFC760",
          val: `${monthGap.value * 1000}-${monthGap.value * 2000}万`
        },
        {
          type: 2,
          color: "#6FE621",
          val: `${monthGap.value * 500}-${monthGap.value * 1000}万`
        },
        {
          type: 3,
          color: "#4FCCFF",
          val: `${monthGap.value * 300}-${monthGap.value * 500}万`
        },
        { type: 4, color: "#8B77FF", val: `${monthGap.value * 300}万以下` }
      ];
    }
    if (data.useData.startTime === data.useData.endTime)
      bidAmountText.value = "月中标金额";
    else if (Number(startMonth) === 1 && Number(endMonth) === 12)
      bidAmountText.value = "年中标金额";
    else bidAmountText.value = "季中标金额";
    initChart();
  });
}
onMounted(() => {
  listenStageData();
  init();
  window.addEventListener("resize", function () {
    chart.value.resize();
    screenWidth.value = document.body.clientWidth;
    initChart();
  });
});
</script>

<style lang="scss" scoped>
.chinaMap {
  position: relative;
  flex: 1;
  padding-top: 1.0417rem;

  .bid-money_block {
    position: absolute;
    bottom: 11%;
    left: 0;
    display: flex;
    flex-direction: column;
    padding: 1.0417rem 3.0208rem 1.0417rem 1.0417rem;
    background-color: rgb(0 108 255 / 20%);

    .bid-title {
      margin-bottom: 0.9375rem;
      font-size: 1.0417rem;
      color: #fff;
    }

    .money-type {
      display: flex;
      flex-direction: column;

      .type-item {
        display: flex;
        align-items: center;

        > div:first-child {
          width: 0.625rem;
          height: 1.5625rem;
          margin-right: 0.5208rem;
        }

        .money-val {
          font-size: 0.7292rem;
          color: #fff;
        }
      }
    }
  }

  .china {
    height: 100%;
  }

  .map-lamp {
    position: absolute;
    bottom: -8%;
    left: 50%;
    z-index: -1;
    width: 42.9167rem;
    height: 25rem;
    transform: translateX(-50%);
  }

  /* width / height = 7 / 10 */
  .islands {
    position: absolute;
    right: 18%;
    bottom: 18%;
    width: 3.6458rem;
    height: 5.2083rem;
  }
}
</style>
