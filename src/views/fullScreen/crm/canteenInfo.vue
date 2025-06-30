<template>
  <div class="box canteen-box">
    <Title icon="LocalSupplier-icon.svg" name="客户渠道" />
    <div v-if="!notData" id="canteen" class="charts" />
    <emptyData v-else class="empty-box" />
  </div>
</template>

<script setup>
import Title from "./title.vue";
import emptyData from "./emptyData.vue";
import * as echarts from "echarts";

const chart = ref(null);
let screenWidth = document.body.clientWidth;
const notData = ref(false);
const canteenData = ref([
  { name: "机关", value: 10 },
  { name: "学校", value: 20 },
  { name: "部队", value: 25 },
  { name: "银行", value: 20 },
  { name: "医院", value: 15 },
  { name: "企业", value: 35 },
  { name: "事业单位", value: 15 },
  { name: "其他", value: 5 }
]);

/* 初始化图形 */
async function initChart() {
  await nextTick();
  const getElement = document.getElementById("canteen");
  if (!getElement) return;
  if (chart.value) chart.value.dispose();
  chart.value = echarts.init(getElement);
  chart.value.setOption({
    legend: [
      {
        data: ["机关", "学校", "部队", "银行"],
        orient: "vertical",
        height: "80%",
        right: "25%",
        top: "middle",
        icon: "circle", // 圆点
        itemHeight: screenWidth * (12 / 1920), // 圆点大小
        itemWidth: screenWidth * (12 / 1920),
        itemGap: screenWidth * (20 / 1920),
        textStyle: {
          fontSize: screenWidth * (14 / 1920),
          color: "#AEC9FF"
        }
      },
      {
        data: ["医院", "企业", "事业单位", "其他"],
        orient: "vertical",
        height: "80%",
        right: "10%",
        top: "middle",
        icon: "circle", // 圆点
        itemHeight: screenWidth * (12 / 1920), // 圆点大小
        itemWidth: screenWidth * (12 / 1920),
        itemGap: screenWidth * (20 / 1920),
        textStyle: {
          fontSize: screenWidth * (14 / 1920),
          color: "#AEC9FF"
        }
      }
    ],
    series: [
      {
        name: "占比",
        type: "pie",
        radius: "70%",
        center: ["32%", "50%"],
        // selectedMode: 'single',
        data: canteenData.value,
        label: {
          // {b}代表显示的内容标题
          // {c}代表数据值
          // {d}代表占百分比
          formatter: "{d}%",
          borderWidth: screenWidth * (20 / 1920),
          borderRadius: screenWidth * (4 / 1920),
          fontSize: screenWidth * (14 / 1920),
          color: "#fff"
        },
        labelLine: {
          length: screenWidth * (8 / 1920),
          lineStyle: {
            width: screenWidth * (1 / 1920),
            color: "#8CA2FF"
          }
        },
        // legendFilter: function(name, data) {
        //   return data.value
        // },
        itemStyle: {
          shadowColor: "rgba(0, 0, 0, 0.4)",
          color: params => {
            const colorList = [
              ["#f1b6ff", "#f1b6ff"],
              ["#c8fe97", "#c8fe97"],
              ["#1b38a0", "#1b38a0"],
              ["#45b4fe", "#45b4fe"],
              ["#ff7e41", "#ff7e41"],
              ["#fdc8a2", "#fdc8a2"],
              ["#57c2c9", "#57c2c9"],
              ["#fff", "#fff"]
            ];
            const nameList = [
              "机关",
              "学校",
              "部队",
              "银行",
              "医院",
              "企业",
              "事业单位",
              "其他"
            ];
            const index = nameList.indexOf(params.name);
            // 这里的this.$echarts是项目中的echarts示例，改成对应的名字就好
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
  initChart();
  window.addEventListener("resize", function () {
    if (chart.value) chart.value.resize();
    screenWidth = document.body.clientWidth;
    initChart();
  });
});

onBeforeUnmount(() => {
  if (!chart.value) return;
  chart.value.dispose();
  chart.value = null;
});
</script>

<style lang="scss" scoped>
.charts {
  height: calc(100% - 2.2917rem);
  background-color: rgb(0 108 255 / 8%);
}
</style>
