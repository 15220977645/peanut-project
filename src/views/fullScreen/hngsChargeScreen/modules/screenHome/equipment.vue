<script setup lang="ts">
import { inject, nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import * as echarts from "echarts";
import equipmentOption from "../components/equipmentOption";
import Title from "../components/title.vue";
import "echarts-liquidfill/src/liquidFill.js"; // 在需要水滴图的页面js引入

const usageNum = ref(0);
const power = ref(0);
const loading = ref(true);
let usageRate = [0, 0];
let loadRate = [0, 0];
const chart: any = {
  usageChart: null,
  loadChart: null
};
const reloadStatus = ref(false);
const openPlatform: Function | undefined = inject("openPlatform");
let timer: any;

/* 初始化 */
async function init() {
  await loadInterfaceUseStatisticForCustom();
  timer = setInterval(loadInterfaceUseStatisticForCustom, 1000 * 15);
}

/* 通信平台，实现平台跳转 */
function handlePlatformTo() {
  if (openPlatform)
    openPlatform(true, "/StatisticalAnalysis/deviceRealtimeMonitor?state=3");
}

/* 查询充电站，并统计充电站的实时枪状态 */
async function loadInterfaceUseStatisticForCustom() {
  const resData = {
    interfaceUseCount: 108,
    interfaceFreeCount: 1276,
    interfaceChargingCount: 85,
    interfaceCount: 1398,
    devicePower: 86222,
    operatingPower: 4074.71
  };
  usageNum.value = resData?.interfaceChargingCount || 0;
  power.value = Number((resData?.operatingPower || 0).toFixed(2)) || 0;
  const usage =
    Number(
      (resData?.interfaceChargingCount / resData?.interfaceCount).toFixed(2)
    ) || 0;
  const load =
    Number((resData?.operatingPower / resData?.devicePower).toFixed(2)) || 0;
  usageRate = [usage, usage];
  loadRate = [load, load];
  loading.value = false;
  await nextTick();
  initChart();
}

/* 初始化图形 */
function initChart() {
  const chartParams = [
    { label: "使用率", value: usageRate },
    { label: "负荷率", value: loadRate }
  ];
  const equipmentDom = document.getElementsByClassName(
    "equipment-container"
  )[0];
  const handleChart = (
    name: string,
    param: { label: string; value: number[] }
  ) => {
    const fullScreenDom = document.getElementById("fullScreenDom");
    if (chart[name]) chart[name].dispose();
    chart[name] = null;
    const getElement = equipmentDom?.querySelector(
      `#equipment-${name.replace("Chart", "")}`
    ) as HTMLElement;
    if (!getElement || !fullScreenDom) return;
    chart[name] = echarts.init(getElement);
    chart[name].setOption(equipmentOption([param]));
  };
  handleChart("usageChart", chartParams[0]);
  handleChart("loadChart", chartParams[1]);
}

onMounted(() => {
  init();
  window.addEventListener("resize", async () => {
    reloadStatus.value = true;
    setTimeout(async () => {
      reloadStatus.value = false;
      await nextTick();
      initChart();
    }, 300);
  });
});

onBeforeUnmount(() => {
  const handleDisposeChart = (name: string) => {
    let item = chart[name];
    if (!item) {
      return;
    }
    item.dispose();
    item = null;
  };
  handleDisposeChart("usageChart");
  handleDisposeChart("loadChart");
  clearInterval(timer);
  timer = undefined;
});
</script>

<template>
  <div
    class="equipment-container module"
    title="跳转至站枪实时监控"
    @click="handlePlatformTo"
  >
    <Title title="实时设备使用情况"></Title>
    <div v-if="!loading" class="content-bg chart-block">
      <div class="charts">
        <div v-if="!reloadStatus" id="equipment-usage" class="content"></div>
        <div v-if="!reloadStatus" id="equipment-load" class="content"></div>
      </div>
      <div class="bottom-title">
        <div class="usage">
          正在充电枪数：
          <span class="bottom-num">{{ usageNum }}</span>
          把
        </div>
        <div class="load">
          实时功率：
          <span class="bottom-num">{{ power }}</span>
          kW
        </div>
      </div>
    </div>
    <div v-else class="loading">加载中，请稍等...</div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.title-container) {
  pointer-events: none;
}

.equipment-container {
  display: flex;
  flex-direction: column;
  padding-bottom: 0.8333rem;
  cursor: pointer;
}

.chart-block {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0.8333rem;
  margin: 0 0.8333rem;
  // cursor: pointer;
  .charts {
    display: flex;
    flex: 1;
    flex-wrap: nowrap;
    pointer-events: none;

    & > div {
      width: 50%;
      height: 100%;
    }
  }

  .bottom-title {
    z-index: 1;
    display: flex;
    flex-wrap: nowrap;
    font-size: 0.7292rem;
    color: #031114;
    transform: translateY(-8%);

    & > div {
      width: 100%;
      text-align: center;
    }

    .bottom-num {
      font-size: 1.0417rem;
      font-weight: bold;
      color: #3a6cff;
    }
  }
}
</style>
