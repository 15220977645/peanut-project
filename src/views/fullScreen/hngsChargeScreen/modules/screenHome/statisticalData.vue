<script setup lang="ts">
import { inject, onBeforeUnmount, ref } from "vue";
import CenterData from "../components/centerData.vue";

const openPlatform: Function | undefined = inject("openPlatform");
const activeTab = ref(0);
let timer: any;
const centerListBup: any[] = [
  {
    title: "年度总营收",
    key: "chargeOrderIncome",
    num: "0.00",
    unit: "元",
    platformTitle: "收入情况分析",
    platformUrl: `/StatisticalAnalysisReport/incomeSituationAnalysis?date=nowYear`
  },
  {
    title: "年度总充电量",
    key: "chargeTotalBattery",
    num: 0,
    unit: "度",
    platformTitle: "收入情况分析",
    platformUrl: `/StatisticalAnalysisReport/incomeSituationAnalysis?date=nowYear`,
    slot: true
  },
  {
    title: "年度总订单数",
    key: "chargeServiceCount",
    num: 0,
    unit: "次",
    platformTitle: "收入情况分析",
    platformUrl: `/StatisticalAnalysisReport/incomeSituationAnalysis?date=nowYear`,
    show: false
  },
  {
    title: "年度平均利用率",
    key: "powerRate",
    num: 0,
    unit: "%",
    platformTitle: "充电站利用率分析",
    platformUrl: `/StatisticalAnalysisReport/stationUtilizationAnalysis?date=nowYear`
  },
  {
    title: "总用户数",
    key: "memberCount",
    num: 0,
    unit: "个",
    platformTitle: "会员信息",
    platformUrl: "/tenantMember/index"
  },
  {
    title: "服务区对数",
    key: "serviceAreaSummary",
    num: 0,
    unit: "对",
    platformTitle: "服务区管理",
    platformUrl: `/RoadLineManagement/serviceAreaManage`,
    singleNumKey: "singleServiceAreaSummary",
    singleNum: "0",
    singleNumShow: true
  },
  {
    title: "电站总数",
    key: "stationCount",
    num: 0,
    unit: "座",
    platformTitle: "站场资产统计",
    platformUrl: `/StatisticalAnalysis/stationAssetsStatEvChargeIndex?operateState=1&deviceOperateState=1`,
    offlineNumKey: "offLineStationCount",
    offlineNumShow: true,
    offlineNum: "0",
    encryptionStationKey: "countCryptoStation",
    encryptionStationShow: false,
    encryptionStationNum: "0"
  },
  {
    title: "总桩数",
    key: "deviceCount",
    num: 0,
    unit: "台",
    platformTitle: "站场资产统计",
    platformUrl: `/StatisticalAnalysis/stationAssetsStatEvChargeIndex?operateState=1&deviceOperateState=1`,
    offlineNumKey: "offLineDeviceCount",
    offlineNumShow: true,
    offlineNum: "0"
  },
  {
    title: "总枪数",
    key: "interfaceCount",
    num: 0,
    unit: "把",
    platformTitle: "站场资产统计",
    platformUrl: `/StatisticalAnalysis/stationAssetsStatEvChargeIndex?operateState=1&deviceOperateState=1`,
    offlineNumKey: "offLineInterfaceCount",
    offlineNumShow: true,
    offlineNum: "0"
  }
];
const centerList = ref<any[]>(JSON.parse(JSON.stringify(centerListBup)));
const tabs = ref([
  { label: "全部", value: 0 },
  { label: "线上", value: 1 },
  { label: "线下", value: 2 }
]);
const changeOtherData: any = inject("changeOtherData");

/* 通信平台，实现平台跳转 */
function handlePlatformTo(obj: any) {
  const platformUrl = obj.platformUrl.includes("?")
    ? `${obj.platformUrl}&stationChannelType=${activeTab.value}`
    : `${obj.platformUrl}?stationChannelType=${activeTab.value}`;
  if (openPlatform && obj.platformUrl) openPlatform(true, platformUrl);
}

/* 初始化 */
async function init() {
  await annualSummaryAndRealTimeStatistics();
  timer = setInterval(annualSummaryAndRealTimeStatistics, 1000 * 60);
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

/* 年度汇总(除服务区对数) */
async function annualSummaryAndRealTimeStatistics() {
  const resData = {
    memberCount: 682186,
    memberNewCount: 527737,
    stationCount: 269,
    parkinglotCount: 628,
    deviceCount: 714,
    interfaceCount: 1398,
    offLineStationCount: 23,
    offLineDeviceCount: 84,
    offLineInterfaceCount: 148,
    chargeOrderIncome: 49884523450,
    chargeTotalBattery: 31571535004,
    chargeOrderCount: 1348328,
    chargeServiceCount: 1440090,
    serviceAreaSummary: 123,
    singleServiceAreaSummary: 1,
    countCryptoStation: 34,
    powerRate: 11.88
  };
  if (!resData) return;
  centerList.value = JSON.parse(JSON.stringify(centerListBup));
  resData.chargeOrderIncome /= 1000;
  resData.chargeTotalBattery /= 1000;
  // eslint-disable-next-line guard-for-in
  for (const i in centerList.value) {
    const item = centerList.value[i];
    item.num = resData[item.key] || 0;
    if (item.singleNumKey) item.singleNum = resData[item.singleNumKey] || 0;
    if (item.encryptionStationKey) {
      item.encryptionStationShow = activeTab.value === 1;
      item.encryptionStationNum = resData[item.encryptionStationKey] || 0;
      changeOtherData("countCryptoStation", item.encryptionStationNum);
    }
    if (item.offlineNumKey) {
      item.offlineNumShow = activeTab.value === 0;
      item.offlineNum = resData[item.offlineNumKey] || 0;
    }
    if (Number(i) <= 5) {
      centerList.value[i] = formatVal(centerList.value[i]);
    }
  }
}

/* 点击tab */
function choseTab(value: number) {
  activeTab.value = value;
  annualSummaryAndRealTimeStatistics();
}

onBeforeUnmount(() => {
  clearInterval(timer);
  timer = undefined;
});

init();
</script>

<template>
  <div class="statistical-data">
    <div class="tabs">
      <div
        v-for="(item, i) in tabs"
        :key="i"
        class="tab"
        :class="{ 'active-tab': item.value === activeTab }"
        @click="choseTab(item.value)"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="content">
      <div class="charge-total-count">
        <div
          v-for="(item, i) in centerList.slice(0, 3)"
          :key="i"
          :title="`跳转至${item.platformTitle}`"
          @click="handlePlatformTo(item)"
        >
          <div class="title-unit">
            {{ item.title }}
            <span class="unit">（{{ item.unit }}）</span>
          </div>
          <div class="num">{{ item.num }}</div>
        </div>
      </div>
      <CenterData
        :list="centerList.slice(3)"
        :item-number="3"
        :station-channel-type="activeTab"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep {
  .center-data {
    flex: 1;
    margin-top: 0;

    .item {
      padding: 1.0417rem 0.5208rem 0.5208rem;

      .num {
        font-size: 1.6667rem;
      }
    }
  }
}

.statistical-data {
  .tabs {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 0.7813rem;

    .tab {
      width: 7.8125rem;
      padding: 0.4167rem;
      margin-right: 1.0417rem;
      font-size: 0.8333rem;
      color: #3a6cff;
      text-align: center;
      cursor: pointer;
      background-color: #fff;
      border-radius: 0.4167rem;
    }

    .active-tab {
      font-weight: bold;
      color: #fff;
      background: linear-gradient(to bottom, #1949b4 0%, #aee3ff 100%);
    }
  }

  .content {
    display: flex;
    flex-wrap: nowrap;
    margin-right: 0.6225rem;

    .charge-total-count {
      display: flex;
      flex-direction: column;
      width: 9.8958rem;
      padding: 0.7813rem;
      margin-right: 0.6225rem;
      margin-bottom: 0.8333rem;
      cursor: pointer;
      background: linear-gradient(0deg, #ade2ff 0%, #fff 100%);
      border-radius: 0.2083rem;

      & > div {
        display: flex;
        flex-direction: column;
        height: calc(100% / 3);
      }

      .title-unit {
        display: flex;
        flex-wrap: nowrap;
        align-items: baseline;
        justify-content: space-between;
        font-size: 0.7292rem;
        color: #031114;

        .unit {
          font-size: 0.5208rem;
        }
      }

      .num {
        display: flex;
        flex: 1;
        align-items: center;
        font-size: 1.0417rem;
        font-weight: bold;
        color: #3a6cff;
      }
    }
  }
}
</style>
