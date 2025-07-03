<template>
  <div ref="fullScreenDom" id="screenData" class="screenData">
    <el-alert
      v-if="!isFullStatus"
      title="您的大屏目前处于缩放状态，页面可能会出现错乱现象，建议点击大屏标题全屏展示"
      type="error"
    />
    <div class="container">
      <div class="title-box">
        <header>
          <div class="lehe-logo"></div>

          <div class="title" title="点击切换分辨率" @click="mapFullScreen">
            **监控大屏
          </div>

          <div class="dateTime">
            {{ nowDate }}
          </div>
        </header>
      </div>
      <div class="content-box">
        <div class="left">
          <!-- 实时监控视频 -->
          <FullScreen class="full-screen" />
          <!--食安看板-->
          <FoodSafe class="full-safe" />
          <!--助推乡村振兴发展农业产业-->
          <DevelopInfo class="develop-info" />
        </div>
        <div class="middle">
          <!-- 数字数据 -->
          <AllNumData class="all-num-data" />
          <!--中国地图-->
          <ChinaMap class="china-map" />
        </div>
        <div class="right">
          <!-- 本地农产品供应 -->
          <indexLocalSupplier class="index-local-supplier" />
          <!--营养比例金字塔-->
          <indexTrophicPyramid class="index-trophic-pyramid" />
          <!--物流配送地图-->
          <LogisticsMap class="logistics-map" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="FoodFullScreen">
import FullScreen from "./components/indexFullScreen.vue";
import AllNumData from "./components/indexAllNumData.vue";
import FoodSafe from "./components/indexFoodSafe.vue";
import DevelopInfo from "./components/indexDevelopInfo.vue";
import indexTrophicPyramid from "./components/indexTrophicPyramid.vue";
import indexLocalSupplier from "./components/indexLocalSupplier.vue";
import LogisticsMap from "./components/indexMap.vue";
import ChinaMap from "./components/indexChinaMap.vue";
import dateFormat from "@/utils/dateFormat";

const fullScreenDom = ref();
const nowDate = ref("");
const isFullStatus = ref(false);
const availPx = ref({
  width: screen.availWidth,
  height: screen.availHeight
});
const screenDom = ref(null);

/* 判断是否全屏 */
function handleScreen() {
  screenDom.value = document.getElementById("screenData");
  const displayWidth = screenDom.value?.offsetWidth;
  const displayHeight = screenDom.value?.offsetHeight;
  if (
    displayWidth + 10 >= availPx.value.width &&
    displayHeight + 10 >= availPx.value.height
  ) {
    isFullStatus.value = true;
  } else isFullStatus.value = false;
}
/* 实时更新时间 */
function updateTime() {
  getNowDate();
  setTimeout(updateTime, 1000);
}
/* 获取当前时间 */
function getNowDate() {
  const date = dateFormat.formatYMD(new Date());
  const time = new Date().toTimeString().slice(0, 9);
  const dayList = ["日", "一", "二", "三", "四", "五", "六"];
  const dayIndex = new Date().getDay();
  const day = `星期${dayList[dayIndex]}`;
  nowDate.value = date + "\t" + day + "\t" + time;
}
/* 是否全屏显示 */
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
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
    else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
  }
  isFullStatus.value = !isFullStatus.value;
}

updateTime();

onMounted(() => {
  handleScreen();
  window.addEventListener("resize", () => {
    handleScreen();
  });
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", {});
});
</script>

<style lang="scss" scoped>
$img: "~@/icons/count";

:deep {
  .empty-box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100% - 1.6666rem);
  }
}

.screenData {
  position: relative;
  height: 100vh;
  margin: 0 !important;
  line-height: 1;
  background: {
    color: #0d0c1b;
    image: url("@/assets/fullScreen/foodSafe/bg.jpg");
    size: cover;
    repeat: no-repeat;
  }

  .el-alert--error {
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 999;
    width: 27.0833rem;
    font-size: 0.8333rem;
    color: #fff;
    background-color: rgb(0 0 0 / 60%);
    transform: translate(-50%, 0);
  }

  .container {
    display: flex;
    flex-direction: column;
    max-width: 100% !important;
    height: 100%;
    padding: 0 2.0833rem 1.5625rem;

    .title-box {
      width: 100%;

      header {
        position: relative;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 4rem;

        > div {
          width: 33.33%;
        }

        .lehe-logo {
          margin-top: 3.5156rem;

          img {
            width: 6.25rem;
          }
        }

        .title {
          margin-top: 1.5625rem;
          color: transparent;
          text-align: center;
          cursor: pointer;
          background: linear-gradient(
            2deg,
            rgb(146 184 255 / 83%) 0%,
            rgb(232 254 255 / 100%) 55.957%,
            rgb(172 207 255 / 83%) 100%
          );
          background-clip: text;
          font: {
            weight: bold;
            family: pingfang sc;
            size: 2.8646rem;
          }
        }

        .dateTime {
          margin-top: 2.6042rem;
          font-size: 0.8333rem;
          color: #fff;
          text-align: right;
          opacity: 0.8;
        }
      }
    }

    .content-box {
      display: flex;
      flex: 1;
      justify-content: space-between;
      height: calc(100vh - 4rem);
      padding-top: 4rem;

      .left,
      .middle,
      .right {
        display: flex;
        flex-direction: column;
      }

      .left {
        flex-basis: 25%;
        width: 25%;
        min-width: 25%;
        padding-bottom: 1.5625rem;

        .full-screen {
          height: 30%;
        }

        .full-safe {
          height: 40.5%;
          padding: 0.5208rem 0;
        }

        .develop-info {
          height: 29.5%;
        }
      }

      .middle {
        box-sizing: border-box;
        display: flex;
        flex-basis: 48%;
        flex-direction: column;
        width: 48%;
        min-width: 48%;
        padding-left: 3rem;
      }

      .right {
        flex-basis: 27%;
        width: 27%;
        min-width: 27%;
        padding-bottom: 1.5625rem;

        .index-local-supplier {
          height: 30%;
        }

        .index-trophic-pyramid {
          height: 40.5%;
          padding: 0.5208rem 0;
        }

        .logistics-map {
          height: 29.5%;
        }
      }
    }
  }
}
</style>
