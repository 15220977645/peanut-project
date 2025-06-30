<!-- eslint-disable guard-for-in -->
<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted, ref } from "vue";
import ManageData from "./screenHome/manageData.vue";
import ChargingTop from "./screenHome/chargingTop.vue";
import Equipment from "./screenHome/equipment.vue";
import StatisticalData from "./screenHome/statisticalData.vue";
import Order from "./screenHome/order.vue";
import BilateralUtilizeTable from "./screenHome/bilateralUtilizeTable.vue";
import Map from "./components/map.vue";
import { handleSlideFont } from "./components/commonFun";

const pointData: any = inject("pointData");

const manageDataListBup: any[] = [
  {
    name: "收入总金额",
    num: "0.00",
    unit: "元",
    img: "fullScreen/hngsChargeScreen/manage-money.png",
    platformTitle: "充电服务监控",
    platformUrl: "/monitorchargeservice/evChargeIndex?tab=0&date=today"
  },
  {
    name: "充电量",
    num: 0,
    unit: "度",
    img: "fullScreen/hngsChargeScreen/manage-ele.png",
    platformTitle: "充电服务监控",
    platformUrl: "/monitorchargeservice/evChargeIndex?tab=0&date=today"
  },
  {
    name: "订单次数",
    num: 0,
    unit: "次",
    img: "fullScreen/hngsChargeScreen/manage-order.png",
    platformTitle: "充电服务监控",
    platformUrl: "/monitorchargeservice/evChargeIndex?tab=0&date=today"
  },
  {
    name: "服务费收入",
    num: "0.00",
    unit: "元",
    img: "fullScreen/hngsChargeScreen/manage-service.png",
    platformTitle: "充电服务监控",
    platformUrl: "/monitorchargeservice/evChargeIndex?tab=0&date=today"
  },
  {
    name: "新增用户数",
    num: 0,
    unit: "个",
    img: "fullScreen/hngsChargeScreen/manage-user.png",
    platformTitle: "会员信息",
    platformUrl: "/tenantMember/index?date=today"
  }
];
const manageDataList = ref<any[]>(
  JSON.parse(JSON.stringify(manageDataListBup))
);
const mapTextList = ["使用率100%", "使用率50~100%", "使用率≤50%"];
const screenHomeRef = ref();
let timer: any;

/* 初始化 */
async function init() {
  await loadTodayStatisticForCustom();
  timer = setInterval(loadTodayStatisticForCustom, 1000 * 15);
}

/* 格式化数额单位 */
const formatVal = (obj: any) => {
  const tarObj = JSON.parse(JSON.stringify(obj));
  if (Number(tarObj.num) > 100000000 && !tarObj.unit.includes("亿")) {
    tarObj.num = Number(
      (Number(tarObj.num) / 100000000).toFixed(2)
    ).toLocaleString();
    tarObj.unit = `亿${tarObj.unit}`;
  } else if (Number(tarObj.num) > 10000 && !tarObj.unit.includes("万")) {
    tarObj.num = Number(
      (Number(tarObj.num) / 10000).toFixed(2)
    ).toLocaleString();
    tarObj.unit = `万${tarObj.unit}`;
  }
  return tarObj;
};
/* 地图点信息元素 */
function pointInfoFactory(params: any) {
  const chnKeys = [
    { label: "站场电枪总数", unit: "把", key: "interfaceCount" },
    { label: "充电中", unit: "把", key: "interfaceChargingCount" },
    { label: "空闲", unit: "把", key: "interfaceFreeCount" },
    { label: "占用", unit: "把", key: "interfaceStandyCount" },
    { label: "故障", unit: "把", key: "interfaceTroubleCount" },
    { label: "离线", unit: "把", key: "interfaceOfflineCount" },
    { label: "使用率", unit: "%", key: "interfaceUseRate" }
  ];
  let itemInfoDom = "";
  chnKeys.forEach(item => {
    itemInfoDom += `<div class="info-item ${
      item.key === "interfaceChargingCount" ? "info-charging-service" : ""
    }">${item.label}: ${params[item.key]}${item.unit}</div>`;
  });
  const monitorDom = `<div class="info-item map-monitor-info" title="点击打开监控视频">
      实时视频监控：
      <img src="${"fullScreen/hngsChargeScreen/map-monitor-icon.svg"}" width="${
    (document.body.clientWidth / 1920) * 20
  }" alt="" />
    </div>`;
  return `<div class="point-info">
    <div class="info-station-name" title="跳转至该站详情">${params.name}</div>
    ${itemInfoDom}
    ${params.hasVideoMonitor ? monitorDom : ""}
  </div>`;
}

/* 加载商家当天的数据 */
async function loadTodayStatisticForCustom() {
  const resData = {
    total_battery: 45630386,
    service_count: 1944,
    total_money: 50687610,
    total_ele_money: 18399360,
    total_service_money: 32288250,
    member_new_count: 385
  };
  if (!resData) return;
  manageDataList.value = JSON.parse(JSON.stringify(manageDataListBup));
  manageDataList.value[0].num = resData?.total_money
    ? (resData?.total_money / 1000).toFixed(2)
    : "0.00";
  manageDataList.value[1].num = resData?.total_battery
    ? (resData?.total_battery / 1000).toFixed(2)
    : 0;
  manageDataList.value[2].num = resData?.service_count || 0;
  manageDataList.value[3].num = resData?.total_service_money
    ? (resData?.total_service_money / 1000).toFixed(2)
    : "0.00";
  manageDataList.value[4].num = resData?.member_new_count || 0;
  for (const i in manageDataList.value) {
    manageDataList.value[i] = formatVal(manageDataList.value[i]);
  }
  handleSlideFont();
}

onMounted(() => {
  init();
});

onBeforeUnmount(() => {
  clearInterval(timer);
  timer = undefined;
});
</script>

<template>
  <div ref="screenHomeRef" class="screen-home">
    <div class="left">
      <ManageData :list="manageDataList" class="manage-data" />
      <ChargingTop class="charging-top" />
    </div>
    <div class="middle">
      <StatisticalData />

      <Map
        :point-data="pointData"
        :text-list="mapTextList"
        :point-info-factory="pointInfoFactory"
        :parent-dom="screenHomeRef"
        sel-type-chn="使用率"
        screen-state
        map-dom-id="home-map"
      />

      <!-- <GaoDMap /> -->
    </div>
    <div class="right">
      <Equipment />
      <Order />
      <BilateralUtilizeTable class="bilateral-utilize-table" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.screen-home {
  .left,
  .right {
    display: flex;
    flex-basis: 26%;
    flex-direction: column;
  }

  .right {
    flex-basis: 26%;
    max-width: 26%;
  }

  .manage-data {
    height: 50%;
  }

  .charging-top {
    flex: 1;
    overflow: hidden;
  }

  .right > div {
    height: calc(100% / 3);
  }

  .middle {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin: 0 1.04rem 3rem;
  }

  .bilateral-utilize-table {
    flex: 1;
    overflow: hidden;
  }
}
</style>
