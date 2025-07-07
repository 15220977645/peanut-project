<script setup lang="ts" name="hngsChargeScreen">
import { computed, onBeforeUnmount, onMounted, provide, ref, watch } from "vue";
import * as screenData from "./modules/screenData";
import ScreenHome from "./modules/screenHome.vue";
import { requireImg } from "@/utils/requireImg";

const content = ref();
const fullScreenDom = ref();
const isFullStatus = ref(false);
const date = ref("");
const week = ref("");
const time = ref("");
const bottomText = ref("实时充电地图");
const tabIndex = ref(0);
const mountedStatus = ref(false);
// 公共数据
const pointData = ref<any>({
  redStation: [],
  yellowStation: [],
  blueStation: []
});
const roadList = ref([]);
const stationList = ref([]);
const realDate = ref({});
// 弹窗平台
const dialogPlatform = ref(false);
const dialogMonitor = ref(false);
const platformUrl = ref("");
const isClickServer = ref(false);
const screenDialogState = ref(false);
const timers: any[] = [undefined, undefined];
const otherData: any = ref({});
// 监控数据
const monitorData = ref([]);
provide(
  "pointData",
  computed(() => pointData.value)
);
provide(
  "roadList",
  computed(() => roadList.value)
);
provide(
  "stationList",
  computed(() => stationList.value)
);
provide(
  "realDate",
  computed(() => realDate.value)
);
provide(
  "otherData",
  computed(() => otherData.value)
);
provide("changeOtherData", (key: string, value: any) => {
  otherData.value[key] = value;
});
provide("openPlatform", openPlatform);
provide("openMonitor", openMonitor);

/* 初始化 */
function init() {
  updateTime();
  setTimeout(() => {
    mountedStatus.value = true;
  }, 1000);
  // 以下为公共数据
  loadTopTenRoadPowerUseRateStatisticForCustom();
  loadTopTenMasterChargeStationPowerUseRateStatisticForCustom();
  loadRealTimeDataOperationZoneStatistic();
  loadStationInterfaceStatisticForCustom();
  timers[0] = setInterval(loadRealTimeDataOperationZoneStatistic, 1000 * 60);
  timers[1] = setInterval(loadStationInterfaceStatisticForCustom, 1000 * 60);
}

/* 查询充电站，并统计充电站的实时枪状态 */
function loadStationInterfaceStatisticForCustom() {
  const resData = screenData.loadStationInterfaceStatisticForCustomData;
  if (!resData) return;
  pointData.value.redStation = [];
  pointData.value.yellowStation = [];
  pointData.value.blueStation = [];
  resData.forEach((item: any) => {
    if (![null, undefined].includes(item.interfaceUseRate)) {
      const pointInfo = {
        ...item,
        lon: item.addressLng,
        lat: item.addressLat,
        stationName: item.name
      };
      if (item.interfaceUseRate === 100)
        pointData.value.redStation.push(pointInfo);
      else if (item.interfaceUseRate <= 50)
        pointData.value.blueStation.push(pointInfo);
      else pointData.value.yellowStation.push(pointInfo);
    }
  });
}

/* 高速路的功率利用率分析 */
function loadTopTenRoadPowerUseRateStatisticForCustom() {
  const resData = [
    {
      chargeBattery: 0,
      chargeIncome: 0,
      chargeInterfaceCount: 20592,
      chargeServiceCount: 355266,
      chargeTotalBattery: 7268263110,
      chargeTotalPower: 1235520,
      day: 234,
      params: {},
      powerRate: 24.51,
      ranking: 1,
      rising: 0,
      roadId: 83,
      roadName: "武深高速",
      totalMoney: 11425530960
    },
    {
      chargeBattery: 0,
      chargeIncome: 0,
      chargeInterfaceCount: 1248,
      chargeServiceCount: 19758,
      chargeTotalBattery: 394347072,
      chargeTotalPower: 74880,
      day: 78,
      params: {},
      powerRate: 21.94,
      ranking: 2,
      rising: 4,
      roadId: 89,
      roadName: "张花高速",
      totalMoney: 618819600
    },
    {
      chargeBattery: 0,
      chargeIncome: 0,
      chargeInterfaceCount: 9464,
      chargeServiceCount: 134148,
      chargeTotalBattery: 2978848054,
      chargeTotalPower: 567840,
      day: 182,
      params: {},
      powerRate: 21.86,
      ranking: 3,
      rising: -1,
      roadId: 85,
      roadName: "泉南高速",
      totalMoney: 4666890900
    },
    {
      chargeBattery: 0,
      chargeIncome: 0,
      chargeInterfaceCount: 4160,
      chargeServiceCount: 91336,
      chargeTotalBattery: 1593774432,
      chargeTotalPower: 324480,
      day: 104,
      params: {},
      powerRate: 20.47,
      ranking: 4,
      rising: -1,
      roadId: 73,
      roadName: "长张高速",
      totalMoney: 2528498240
    },
    {
      chargeBattery: 0,
      chargeIncome: 0,
      chargeInterfaceCount: 3120,
      chargeServiceCount: 46000,
      chargeTotalBattery: 916898920,
      chargeTotalPower: 187200,
      day: 130,
      params: {},
      powerRate: 20.41,
      ranking: 5,
      rising: 0,
      roadId: 94,
      roadName: "平洞高速",
      totalMoney: 1461138800
    },
    {
      chargeBattery: 0,
      chargeIncome: 0,
      chargeInterfaceCount: 11648,
      chargeServiceCount: 142982,
      chargeTotalBattery: 3149002360,
      chargeTotalPower: 698880,
      day: 182,
      params: {},
      powerRate: 18.77,
      ranking: 6,
      rising: 2,
      roadId: 82,
      roadName: "杭瑞高速",
      totalMoney: 4945236660
    },
    {
      chargeBattery: 0,
      chargeIncome: 0,
      chargeInterfaceCount: 5824,
      chargeServiceCount: 67130,
      chargeTotalBattery: 1503732230,
      chargeTotalPower: 349440,
      day: 182,
      params: {},
      powerRate: 17.93,
      ranking: 7,
      rising: 6,
      roadId: 88,
      roadName: "龙吉高速",
      totalMoney: 2369342920
    },
    {
      chargeBattery: 0,
      chargeIncome: 0,
      chargeInterfaceCount: 7488,
      chargeServiceCount: 84456,
      chargeTotalBattery: 1900021320,
      chargeTotalPower: 449280,
      day: 156,
      params: {},
      powerRate: 17.62,
      ranking: 8,
      rising: 2,
      roadId: 71,
      roadName: "华常高速",
      totalMoney: 3045610920
    },
    {
      chargeBattery: 0,
      chargeIncome: 0,
      chargeInterfaceCount: 28600,
      chargeServiceCount: 397220,
      chargeTotalBattery: 7216480960,
      chargeTotalPower: 1716000,
      day: 260,
      params: {},
      powerRate: 17.52,
      ranking: 9,
      rising: -5,
      roadId: 72,
      roadName: "沪昆高速",
      totalMoney: 11255036600
    },
    {
      chargeBattery: 0,
      chargeIncome: 0,
      chargeInterfaceCount: 32500,
      chargeServiceCount: 448700,
      chargeTotalBattery: 8190626950,
      chargeTotalPower: 1989000,
      day: 325,
      params: {},
      powerRate: 17.16,
      ranking: 10,
      rising: -3,
      roadId: 74,
      roadName: "京港澳高速",
      totalMoney: 12781534250
    }
  ];
  // eslint-disable-next-line array-callback-return, consistent-return
  roadList.value = resData?.map((item: any, i: number) => {
    if (i < 10) {
      return {
        ...item,
        name: item.roadName,
        scale: item.powerRate.toFixed(2) || "0.00",
        ranking: item.rising
      };
    }
  });
}

/* 充电站功率利用率分析 */
function loadTopTenMasterChargeStationPowerUseRateStatisticForCustom() {
  const resData = [
    {
      chargeBattery: 0,
      chargeIncome: 0,
      masterStationId: 82156,
      params: {},
      powerRate: 43.7443,
      ranking: 1,
      rising: 0,
      stationChannelType: 2,
      stationName: "武深-炎陵A-深圳方向"
    },
    {
      chargeBattery: 0,
      chargeIncome: 0,
      masterStationId: 82158,
      params: {},
      powerRate: 40.7704,
      ranking: 2,
      rising: 1,
      stationChannelType: 2,
      stationName: "武深-桂东A-深圳方向"
    },
    {
      chargeBattery: 0,
      chargeIncome: 0,
      masterStationId: 82223,
      params: {},
      powerRate: 39.0243,
      ranking: 3,
      rising: -1,
      stationChannelType: 2,
      stationName: "长张-热市A-张家界方向"
    },
    {
      chargeBattery: 0,
      chargeIncome: 0,
      masterStationId: 82368,
      params: {},
      powerRate: 37.03,
      ranking: 4,
      rising: 2,
      stationChannelType: 2,
      stationName: "张花-茅岩河A-花垣方向"
    },
    {
      chargeBattery: 0,
      chargeIncome: 0,
      masterStationId: 82225,
      params: {},
      powerRate: 35.8151,
      ranking: 5,
      rising: -1,
      stationChannelType: 2,
      stationName: "长张-慈利A-张家界方向"
    },
    {
      chargeBattery: 0,
      chargeIncome: 0,
      masterStationId: 82181,
      params: {},
      powerRate: 34.0781,
      ranking: 6,
      rising: 1,
      stationChannelType: 2,
      stationName: "许广-宜章西A-广州方向"
    },
    {
      chargeBattery: 0,
      chargeIncome: 0,
      masterStationId: 82163,
      params: {},
      powerRate: 32.7922,
      ranking: 7,
      rising: 18,
      stationChannelType: 2,
      stationName: "武深-汝城南A-深圳方向"
    },
    {
      chargeBattery: 0,
      chargeIncome: 0,
      masterStationId: 82256,
      params: {},
      powerRate: 32.011,
      ranking: 8,
      rising: 19,
      stationChannelType: 2,
      stationName: "龙吉-农车B-龙山方向"
    },
    {
      chargeBattery: 0,
      chargeIncome: 0,
      masterStationId: 82171,
      params: {},
      powerRate: 31.6184,
      ranking: 9,
      rising: 5,
      stationChannelType: 2,
      stationName: "许广-岳阳A-广州方向"
    },
    {
      chargeBattery: 0,
      chargeIncome: 0,
      masterStationId: 82209,
      params: {},
      powerRate: 31.0269,
      ranking: 10,
      rising: -2,
      stationChannelType: 2,
      stationName: "杭瑞-沅陵A-瑞丽方向"
    }
  ];
  stationList.value = resData?.map((item: any) => {
    return {
      ...item,
      name: item.stationName,
      scale: item.powerRate.toFixed(2) || "0.00"
    };
  });
}

/* 获取运营/运维实时数据 */
function loadRealTimeDataOperationZoneStatistic() {
  const resData = {
    interface_standy_count: 25,
    interface_normal_count: 1379,
    station_debugger_count: 11,
    interface_charging_count: 85,
    interface_offline_count: 11,
    station_normal_count: 303,
    interface_empty_count: 1269,
    interface_trouble_rate: 0.57,
    device_pause_count: 2,
    interface_trouble_count: 8,
    interface_offline_rate: 0.79,
    station_pause_count: 1,
    interface_count: 1398
  };
  realDate.value = resData;
}

/* 全屏状态改变时的回调函数 */
function onFullScreenChange() {
  isFullStatus.value = Boolean(
    document.fullscreenElement ||
      document.msFullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement
  );
}

/* 初始化时添加事件监听器 */
document.addEventListener("fullscreenchange", onFullScreenChange);
document.addEventListener("mozfullscreenchange", onFullScreenChange);
document.addEventListener("webkitfullscreenchange", onFullScreenChange);
document.addEventListener("msfullscreenchange", onFullScreenChange);

/* 全屏显示函数 */
async function mapFullScreen() {
  if (!isFullStatus.value) {
    const isCanFullscreen =
      document.fullScreenElement ||
      document.msFullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      false;
    if (isCanFullscreen) {
      if (document.exitFullscreen) await document.exitFullscreen();
      else if (document.mozCancelFullScreen)
        await document.mozCancelFullScreen();
      else if (document.webkitCancelFullScreen)
        await document.webkitCancelFullScreen();
      else if (document.msExitFullscreen) await document.msExitFullscreen();
    }
    if (fullScreenDom.value.requestFullscreen)
      fullScreenDom.value.requestFullscreen();
    else if (fullScreenDom.value.mozRequestFullScreen)
      fullScreenDom.value.mozRequestFullScreen();
    else if (fullScreenDom.value.webkitRequestFullscreen)
      fullScreenDom.value.webkitRequestFullscreen();
    else if (fullScreenDom.value.msRequestFullscreen)
      fullScreenDom.value.msRequestFullscreen();
  } else if (document.exitFullscreen) document.exitFullscreen();
  else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
  else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
  else if (document.msExitFullscreen) document.msExitFullscreen();
}

/* 实时更新时间 */
function updateTime() {
  handleDateTime();
  setTimeout(updateTime, 1000);
}

/* 处理时间 */
function handleDateTime() {
  const nowDate = new Date();
  const add0 = (num: number) => {
    return num > 9 ? num : `0${num}`;
  };
  date.value = `${nowDate.getFullYear()}.${add0(nowDate.getMonth() + 1)}.${add0(
    nowDate.getDate()
  )}`;
  const dayList = ["日", "一", "二", "三", "四", "五", "六"];
  const dayIndex = nowDate.getDay();
  week.value = `星期${dayList[dayIndex]}`;
  time.value = new Date().toTimeString().slice(0, 9);
}

/* 切换tab */
function changeTab(e: Event): void {
  if (e.target && (e.target as HTMLElement).id !== "") {
    tabIndex.value = Number((e.target as HTMLElement).id);
    const idMateText = [
      "实时充电地图",
      "各电站本月累计利用率",
      "全省电站实时离线情况"
    ];
    bottomText.value = idMateText[tabIndex.value];
  }
}

/* 工具-打开平台iframe */
function openPlatform(state: boolean, url: string) {
  const tarOrigin = window.location.origin;
  platformUrl.value = `${tarOrigin}${url}`;
  sessionStorage.setItem("platformUrl", url);
  dialogPlatform.value = state;
}

/* 打开监控 */
function openMonitor() {
  if (isClickServer.value) return;
  isClickServer.value = true;
  dialogMonitor.value = true;
}

/* 关闭跳转弹窗，清缓存 */
function clearPlatformUrlStorage() {
  sessionStorage.removeItem("platformUrl");
  screenDialogState.value = false;
}

/* 按键事件 */
function handleKeydown(e: KeyboardEvent) {
  if (e.key === "F11") {
    e.preventDefault();
    mapFullScreen();
  }
}
watch(
  dialogMonitor,
  newV => {
    if (!newV) isClickServer.value = false;
  },
  { deep: true, immediate: true }
);
onMounted(() => {
  init();
  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("message", (e: any) => {
    if (e.data.data.type === "bomcDialogPage") {
      console.log("e.data.data", e.data.data);
    }
  });
});
onBeforeUnmount(() => {
  document.removeEventListener("fullscreenchange", onFullScreenChange);
  document.removeEventListener("mozfullscreenchange", onFullScreenChange);
  document.removeEventListener("webkitfullscreenchange", onFullScreenChange);
  document.removeEventListener("msfullscreenchange", onFullScreenChange);
  window.removeEventListener("keydown", handleKeydown);
  clearInterval(timers[0]);
  clearInterval(timers[1]);
  timers[0] = undefined;
  timers[1] = undefined;
});
</script>

<template>
  <div id="fullScreenDom" ref="fullScreenDom" class="screen-container bg-img">
    <div class="head bg-img">
      <div class="tab" @click="changeTab">
        <div
          id="0"
          :class="{ active: tabIndex === 0 }"
          class="bg-img light-font"
        >
          首页
        </div>
        <div
          id="1"
          :class="{ active: tabIndex === 1 }"
          class="bg-img light-font"
        >
          运营专区
        </div>
        <div
          id="2"
          :class="{ active: tabIndex === 2 }"
          class="bg-img light-font"
        >
          运维专区
        </div>
      </div>
      <div
        class="title light-font"
        :title="
          isFullStatus ? '点击退出全屏' : '若展示不理想，可点击切换全屏展示'
        "
        @click="mapFullScreen"
      >
        湖南高速新能源充电数据大屏
      </div>
      <div class="time">
        {{ date }}
        <span>{{ week }}</span>
        <span class="bold-time">{{ time }}</span>
      </div>
    </div>
    <div ref="content" class="content">
      <ScreenHome />
    </div>
    <div class="bottom">
      <span class="light-font">{{ bottomText }}</span>
    </div>
    <ElDialog
      v-model="dialogPlatform"
      :append-to="fullScreenDom"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :class="{ 'full-screen-dialog': screenDialogState }"
      width="80vw"
      top="2vh"
      destroy-on-close
      class="screen-dialog platform-dialog"
      @close="clearPlatformUrlStorage"
    >
      <template #header>
        <div class="platform-head">
          <div
            :title="screenDialogState ? '退出全屏' : '全屏'"
            @click="screenDialogState = !screenDialogState"
          >
            <img
              :src="
                !screenDialogState
                  ? requireImg('fullScreen/hngsChargeScreen/fullscreen.svg')
                  : requireImg(
                      'fullScreen/hngsChargeScreen/exit-fullscreen.svg'
                    )
              "
              class="fullscreen-icon"
            />
          </div>
          <div title="关闭" @click="dialogPlatform = false">
            <img
              src="@/assets/fullScreen/hngsChargeScreen/close.svg"
              class="close-icon"
            />
          </div>
        </div>
      </template>
      <div class="platform-content">
        <iframe :src="platformUrl"></iframe>
      </div>
    </ElDialog>
    <ElDialog
      v-model="dialogMonitor"
      width="67vw"
      top="5vh"
      :append-to="fullScreenDom"
      destroy-on-close
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      class="screen-dialog"
    >
      <template #header="{ titleId }">
        <h4 :id="titleId" class="title">查看监控</h4>
        <div
          v-if="
            monitorData != undefined &&
            monitorData != null &&
            monitorData.length > 0
          "
          class="monitor-box"
        >
          <iframe
            v-for="(item, i) in monitorData"
            :key="i"
            class="monitor-iframe"
            :src="item"
            allowfullscreen
          ></iframe>
        </div>
        <div v-else class="data-none">暂无监控视频</div>
      </template>
    </ElDialog>
  </div>
</template>

<style scoped lang="scss">
@keyframes slide-font {
  0% {
    transform: translateX(20%);
  }

  50% {
    transform: translateX(-90%);
  }

  100% {
    transform: translateX(20%);
  }
}

:deep {
  .map-dialog {
    background-color: #6997c2;
    background-image: url("@/assets/fullScreen/hngsChargeScreen/bg.png");
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: 106% 100%;
    border-radius: 0.7813rem;

    .el-dialog__header {
      display: none;
    }
  }

  .el-overlay-dialog {
    overflow-y: hidden;
  }

  .el-dialog__header {
    padding: 0;

    .el-dialog__headerbtn {
      font-size: 1.25rem;
    }
  }

  .screen-dialog {
    display: flex;
    flex-direction: column;
    padding-top: 0.5208rem !important;

    .el-dialog__body {
      flex: 1;

      .platform-content {
        height: 100%;

        iframe {
          width: 100%;
          height: 100%;
          min-height: 85vh;
        }
      }
    }
  }

  .platform-dialog {
    .platform-head {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: flex-end;
      padding-bottom: 0.5208rem;

      .close-icon,
      .fullscreen-icon {
        padding: 0.2604rem;
        margin-left: 0.7813rem;
        font-size: 1.4063rem;
        color: #3d3d3d;
        cursor: pointer;
        border-radius: 0.4167rem;

        &:hover {
          color: #fff;
          background-color: rgba($color: #000, $alpha: 70%);
        }
      }
    }
  }

  .full-screen-dialog {
    width: 100vw !important;
    height: 100vh !important;
    margin: 0 !important;
  }
}

:deep(::-webkit-scrollbar) {
  width: 0;
}

:deep(.loading) {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0 0.8333rem 0.8333rem;
  font-size: 1rem;
  color: rgba(#031114, 0.7);
  background: linear-gradient(186deg, #fff 0%, #ade2ff 100%);
  border-radius: 0.2083rem;
}

:deep(.charging-rank) {
  padding: 0.8333rem;
}

:deep(.light-font) {
  font-weight: bold;
  color: transparent;
  background: linear-gradient(180deg, #fff 35%, #ade2ff 100%);
  background-clip: text;
}

:deep(.module) {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  background: linear-gradient(180deg, #17349b 0%, #58aaf1 19%, #3468b7 132%);
  box-shadow: inset 0 0 1.5625rem 0 rgb(0 170 255 / 21%);

  &::after {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0.5rem;
    content: "";
    background-image: url("@/assets/fullScreen/hngsChargeScreen/module-border.png");
    background-repeat: no-repeat;
    background-size: contain;
  }
}

:deep(.content-bg) {
  background: linear-gradient(186deg, #fff 0%, #ade2ff 100%);
  border-radius: 0.2083rem;
}

:deep(.display-flex) {
  display: flex;
}

:deep(.align-items-center) {
  align-items: center;
}

:deep(.flex-wrap-nowrap) {
  flex-wrap: nowrap;
}

:deep(.animation-font) {
  position: relative;
  overflow: hidden;
  white-space: nowrap;

  .animation-content {
    width: fit-content;
    padding-left: 0%; /* 初始位置 */
  }

  .go-animation {
    animation: slide-font 12s linear infinite; /* 应用动画 */
  }
}

:deep(.text-overflow) {
  overflow: hidden; /* 隐藏溢出的内容 */
  text-overflow: ellipsis; /* 添加省略号 */
  white-space: nowrap; /* 防止文本换行 */
}

.bg-img {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.screen-container {
  display: flex;
  flex-direction: column;
  width: 100% !important;
  height: 100%;
  overflow: hidden;
  font-size: 1vw !important;
  background-color: #6997c2;
  background-image: url("@/assets/fullScreen/hngsChargeScreen/bg.png");
  background-repeat: no-repeat;
  background-size: cover;

  .head {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    height: 5.5rem;
    background-image: url("@/assets/fullScreen/hngsChargeScreen/head.png");
    background-position: center;

    > div {
      width: 33.33%;
    }

    .title {
      margin-top: 0.2604rem;
      text-align: center;
      cursor: pointer;
      font: {
        size: 2.5rem;
      }
    }

    .tab {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      padding: 0 2.08rem;
      margin-top: 2.03rem;
      font-size: 0.94rem;

      > div {
        position: relative;
        width: 7.34rem;
        height: 2.29rem;
        line-height: 2.29rem;
        color: #fff;
        text-align: center;
        cursor: pointer;
        background: linear-gradient(
          180deg,
          #0f277d 0%,
          #58aaf1 47%,
          #9dadfe 100%
        );
        box-shadow: inset 0 0 30px 0 rgb(0 170 255 / 21%);
        opacity: 0.7;

        &:not(:last-child) {
          margin-right: 1rem;
        }

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          content: "";
          background-image: url("@/assets/fullScreen/hngsChargeScreen/tab-bg.svg");
          background-repeat: no-repeat;
          background-size: cover;
        }
      }

      .active {
        opacity: 1;

        &::after {
          position: absolute;
          top: -0.625rem;
          left: 50%;
          width: 0.73rem;
          height: 3.4896rem;
          content: "";
          background-image: url("@/assets/fullScreen/hngsChargeScreen/active-tab-icon.svg");
          background-size: cover;
          opacity: 1;
          transform: translateX(-50%);
        }
      }
    }

    .time {
      display: flex;
      align-items: baseline;
      justify-content: flex-end;
      margin: 2.97rem 2.08rem 0 0;
      font-size: 0.7rem;
      color: #fff;

      span {
        margin: 0 1.09rem 0 0.83rem;
      }

      .bold-time {
        margin: 0;
        font-size: 1.56rem;
      }
    }
  }

  .content {
    display: flex;
    flex-wrap: nowrap;
    width: 300%;
    height: calc(100% - 5.2897rem);
    transition: 0.3s all;
    transform: translateX(0);
    will-change: transform;

    & > div {
      position: relative;
      display: flex;
      width: 33.33%;
      height: 100%;
      padding: 0.57rem 2.0833rem;
      overflow: hidden;

      &::before,
      &::after {
        position: absolute;
        top: 50%;
        width: 1.1458rem;
        height: 30.78rem;
        content: "";
        background-image: url("@/assets/fullScreen/hngsChargeScreen/content-l-r.png");
        background-size: cover;
        transform: translateY(-50%);
      }

      &::before {
        left: 0;
      }

      &::after {
        top: 18%;
        right: 0;

        /* 对于IE9及以下版本，需要使用以下属性 */
        filter: "FlipH";
        filter: fliph;
        transform: scaleX(-1);
      }
    }
  }

  .operate-content {
    transform: translateX(-33.333%);
  }

  .maintenance-content {
    transform: translateX(-66.666%);
  }

  .bottom {
    position: absolute;
    bottom: 0;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54.4rem;
    height: 3.24rem;
    font-size: 1.56rem;
    background-image: url("@/assets/fullScreen/hngsChargeScreen/bottom-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    transform: translateX(-50%);
  }
}

.title {
  font-size: 16px;
  font-weight: bold;
}

.monitor-box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 80vh;
  padding-top: 1rem;
  overflow-y: auto;

  .monitor-iframe {
    width: 31rem;
    height: 25rem;
    margin: 0.5rem;
  }
}

.monitor-box::-webkit-scrollbar {
  width: 10px; /* 对于垂直滚动条，设置宽度 */
  height: 10px; /* 对于水平滚动条，设置高度 */
}

.monitor-box::-webkit-scrollbar-track {
  background-color: #f1f1f1;
  border-radius: 10px;
}

/* 滚动条的滑块 */
.monitor-box::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 10px;
}

.data-none {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  font-size: 20px;
  font-weight: bold;
}
</style>
<style>
.map-monitor-info {
  display: flex;
  flex-wrap: nowrap;
}
</style>
