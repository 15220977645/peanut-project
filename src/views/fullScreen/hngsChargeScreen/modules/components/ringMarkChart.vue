<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import * as echarts from "echarts";
import getOption from "./ringMarkOption";

interface Props {
  rate: number;
  rateChn: string;
  noShowCenterLabel?: boolean;
  numSize?: number;
  labelSize?: number;
}

let chart: any = null;
const props = defineProps<Props>();
const ringMark = ref();

watch(
  props,
  () => {
    if (chart) {
      chart.resize();
      chart.dispose();
      chart = null;
    }
    init();
  },
  { deep: true }
);

/* 初始化 */
async function init() {
  initChart();
}

/* 初始化图形 */
function initChart() {
  const getElement = ringMark.value;
  if (!getElement) return;
  if (chart) chart.dispose();
  chart = echarts.init(getElement);
  chart.setOption(
    getOption(
      props.rate,
      props.rateChn,
      props.noShowCenterLabel,
      props.numSize,
      props.labelSize
    )
  );
}

onMounted(() => {
  init();
  window.addEventListener("resize", () => {
    if (!chart) return;
    chart.resize();
    chart.dispose();
    chart = null;
    initChart();
  });
});

onBeforeUnmount(() => {
  if (!chart) {
    return;
  }
  chart.dispose();
  chart = null;
});
</script>

<template>
  <div class="ring-mark-chart">
    <div ref="ringMark" class="content"></div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  height: 100%;
}
</style>
