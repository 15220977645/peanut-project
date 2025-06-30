<script setup lang="ts">
import { inject, nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import * as echarts from "echarts";
import orderOption from "../components/orderOption";
import Title from "../components/title.vue";

let chart: any = null;
const data = ref([]);
const loading = ref(true);
const openPlatform: Function | undefined = inject("openPlatform");
let timer: any;

/* 初始化 */
async function init() {
  await loadServiceCountTrendStatisticByHour();
  timer = setInterval(loadServiceCountTrendStatisticByHour, 1000 * 60);
}

/* 通信平台，实现平台跳转 */
function handlePlatformTo(url: string) {
  if (openPlatform) openPlatform(true, url);
}

/* 汇总今日每小时的服务次数 */
async function loadServiceCountTrendStatisticByHour() {
  const resData = [
    {
      dateTime: "00:00",
      serviceCount: 287,
      createTime: 1747152000
    },
    {
      dateTime: "01:00",
      serviceCount: 188,
      createTime: 1747155600
    },
    {
      dateTime: "02:00",
      serviceCount: 166,
      createTime: 1747159200
    },
    {
      dateTime: "03:00",
      serviceCount: 139,
      createTime: 1747162800
    },
    {
      dateTime: "04:00",
      serviceCount: 122,
      createTime: 1747166400
    },
    {
      dateTime: "05:00",
      serviceCount: 115,
      createTime: 1747170000
    },
    {
      dateTime: "06:00",
      serviceCount: 149,
      createTime: 1747173600
    },
    {
      dateTime: "07:00",
      serviceCount: 132,
      createTime: 1747177200
    },
    {
      dateTime: "08:00",
      serviceCount: 151,
      createTime: 1747180800
    }
  ];
  let backupData = [];
  backupData = resData?.map((item: any) => {
    return {
      name: item.dateTime,
      value: item.serviceCount || 0
    };
  });
  if (JSON.stringify(data.value) !== JSON.stringify(backupData))
    data.value = backupData;
  loading.value = false;
  await nextTick();
  initChart();
}

/* 初始化图形 */
function initChart() {
  if (chart) chart.dispose();
  chart = null;
  const getElement = document.getElementById("order");
  if (!getElement) return;
  chart = echarts.init(getElement);
  chart.setOption(orderOption(data.value));
  // 点击图形
  chart.on("click", (params: any) => {
    if (params.componentType === "series") {
      const xyParams = { name: params.name, value: params.value };
      handlePlatformTo(
        `/monitorchargeservice/evChargeIndex?tab=0&date=${xyParams.name}`
      );
    }
  });
}

onMounted(() => {
  init();
  window.addEventListener("resize", () => {
    initChart();
  });
});

onBeforeUnmount(() => {
  if (!chart) {
    return;
  }
  chart.dispose();
  chart = null;
  clearInterval(timer);
  timer = undefined;
});
</script>

<template>
  <div class="order-container module">
    <Title title="今日分时订单情况"></Title>
    <div v-if="!loading" class="content-bg chart-block">
      <div class="unit">单位：次</div>
      <div id="order" class="content"></div>
    </div>
    <div v-else class="loading">加载中，请稍等...</div>
  </div>
</template>

<style lang="scss" scoped>
.order-container {
  display: flex;
  flex-direction: column;
  color: #031114;
}

.chart-block {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0.8333rem;
  margin: 0 0.8333rem 0.8333rem;

  .unit {
    margin-bottom: 0.2604rem;
    font-size: 0.625rem;
  }

  .content {
    flex: 1;
  }
}
</style>
