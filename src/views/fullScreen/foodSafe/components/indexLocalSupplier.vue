<template>
  <div class="box">
    <headTitle icon="LocalSupplier-icon.svg" name="本地农产品供应比例" />
    <div id="local" class="charts" />
  </div>
</template>

<script setup>
import headTitle from "./headTitle.vue";
import * as echarts from "echarts";

const chart = ref(null);
const screenWidth = ref(document.body.clientWidth);
const screenHeight = ref(document.body.clientHeight);

/* 初始化 */
async function init() {
  initChart();
}
/* 请求本地供应接口 */
/* 初始化图形 */
function initChart() {
  const getElement = document.getElementById("local");
  const width = screenWidth.value;
  if (!getElement) return;

  chart.value = echarts.init(getElement);
  chart.value.setOption({
    tooltip: {
      trigger: "item",
      padding: width * (5 / 1920),
      textStyle: {
        fontSize: width * (14 / 1920)
        // color: '#AEC9FF'
      }
    },
    legend: {
      type: "scroll",
      orient: "vertical",
      right: "5%",
      top: "40%",
      icon: "circle", // 圆点
      // padding: [screenWidth * (5 / 1920), screenWidth * (5 / 1920)],
      itemHeight: width * (12 / 1920), // 圆点大小
      itemWidth: width * (12 / 1920),
      itemGap: width * (20 / 1920),
      textStyle: {
        fontSize: width * (12 / 1920),
        color: "#AEC9FF"
      }
    },
    series: [
      {
        name: "占比",
        type: "pie",
        // radius: '65%',
        radius: ["35%", "80%"],
        center: ["35%", "50%"],
        data: [
          {
            value: 50,
            name: "本地农产品供应"
          },
          {
            value: 30,
            name: "外地农产品供应"
          }
        ],
        label: {
          show: false,
          position: "center",
          // {b}代表显示的内容标题
          // {c}代表数据值
          // {d}代表占百分比
          formatter: "{d}%",
          // borderWidth: screenWidth * (20 / 1920),
          // borderRadius: screenWidth * (4 / 1920),
          fontSize: width * (14 / 1920),
          color: "#fff"
        },
        emphasis: {
          label: {
            show: true,
            fontWeight: "bold"
          }
        },
        labelLine: {
          length: width * (8 / 1920),
          lineStyle: {
            width: width * (1 / 1920),
            color: "#8CA2FF"
          }
        },
        itemStyle: {
          shadowColor: "rgba(0, 0, 0, 0.4)",
          // borderRadius: [0, 3, 3, 0],
          color: params => {
            const colorList = [
              ["#7394FF", "#7394FF"],
              ["#9FF3F8", "#9FF3F8"]
            ];
            const index = params.dataIndex;
            // 这里的$echarts是项目中的echarts示例，改成对应的名字就好
            return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: colorList[index][0]
              },
              {
                offset: 1,
                color: colorList[index][1]
              }
            ]);
          }
        }
      }
    ]
  });
}

onMounted(() => {
  init();
  window.addEventListener("resize", function () {
    chart.value?.resize();
    chart.value.dispose();
    chart.value = null;
    screenWidth.value = document.body.clientWidth;
    screenHeight.value = document.body.clientHeight;
    initChart();
  });
});

onBeforeUnmount(() => {
  if (!chart.value) {
    return;
  }
  chart.value.dispose();
  chart.value = null;
});
</script>

<style lang="scss" scoped>
.charts {
  height: calc(100% - 1.5625rem);
  background-color: rgba(#9cc4ff, 0.06);
}
</style>
