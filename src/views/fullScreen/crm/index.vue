<template>
  <div ref="fullScreenDom" id="screenData" class="screenData">
    <el-alert
      v-if="!isFullStatus"
      title="您的大屏目前处于缩放状态，页面可能会出现错乱现象，建议点击大屏标题全屏展示"
      type="error"
    />
    <div class="container">
      <div class="head">
        <img src="http://images.visfarm.com/crm/img/head-left.png" alt="" />
        <div class="title" @click="mapFullScreen">**投标部数据监控</div>
        <img src="http://images.visfarm.com/crm/img/head-right.png" alt="" />
      </div>
      <el-carousel :autoplay="false" trigger="click">
        <el-carousel-item>
          <div class="content">
            <div class="l">
              <stageData class="stage-data" />
              <indexChinaMap class="china-map" />
            </div>
            <div class="r">
              <noticeDisplay class="notice-display" />
              <canteenInfo class="canteen-info" />
              <winBidInfo class="win-bid-info" />
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <tableAchievement />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup name="CrmFullScreen">
import { ref, onMounted, onBeforeUnmount } from "vue";
import stageData from "./stageData.vue";
import indexChinaMap from "./indexChinaMap.vue";
import noticeDisplay from "./noticeDisplay.vue";
import canteenInfo from "./canteenInfo.vue";
import winBidInfo from "./winBidInfo.vue";
import tableAchievement from "./tableAchievement.vue";

const isFullStatus = ref(false);
const availPx = ref({
  width: screen.availWidth,
  height: screen.availHeight
});
const screenDom = ref(null);
const fullScreenDom = ref();

/* 判断是否全屏 */
function handleScreen() {
  screenDom.value = document.getElementById("screenData");
  if (screenDom.value) {
    const displayWidth = screenDom.value?.offsetWidth;
    const displayHeight = screenDom.value?.offsetHeight;
    if (
      displayWidth + 10 >= availPx.value.width &&
      displayHeight + 10 >= availPx.value.height
    ) {
      isFullStatus.value = true;
    } else isFullStatus.value = false;
  }
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
:deep {
  .empty-box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100% - 2.2917rem);
    background-color: rgb(0 108 255 / 8%);
  }

  .el-carousel__container {
    height: calc(100vh - 5.7292rem);
  }

  .el-carousel__indicators {
    display: none;
  }

  .el-carousel__arrow {
    display: inline-block !important;
    width: 2.6042rem;
    height: 2.6042rem;
    font-size: 1.5625rem;
    color: #091231;
    background-color: rgba($color: #276888, $alpha: 50%);
    opacity: 1 !important;
    transform: unset !important;

    i {
      font-weight: bolder;
    }
  }
}

.screenData {
  height: 100vh;
  margin: 0 !important;
  line-height: 1;
  transform: translateX(-1px);
  background: {
    position: top;
    color: #030324;
    image: url("http://images.visfarm.com/crm/img/bg.png");
    size: cover;
    repeat: no-repeat;
  }

  .el-alert--error {
    position: fixed;
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

    .head {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.3021rem 0.7292rem 1.4583rem;
      background: linear-gradient(0deg, #002d5b, #010a25);
      border: 1px solid #000;
      box-shadow: 0 -0.3646rem 1.1979rem #19f5fe;

      img {
        width: 30%;
        height: 1.4063rem;
        object-fit: contain;
      }

      .title {
        position: relative;
        height: 105%;
        text-shadow: 0 0 0.3125rem #19f5fe;
        cursor: pointer;
        font: {
          weight: bold;
          family: pingfang sc;
          size: 2.5521rem;
        }

        &::after {
          position: absolute;
          top: 0;
          display: block;
          width: 100%;
          height: 100%;
          text-shadow: none;
          content: "**投标部数据监控";
          background-image: linear-gradient(0deg, #19f5fe 0%, #fff 80%);
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }

    .content {
      display: flex;
      flex-wrap: nowrap;
      height: calc(100vh - 5.3125rem);
      padding: 1.5625rem 1.5625rem 1.0417rem;
      background-color: transparent;

      > div {
        display: flex;
        flex-direction: column;
      }

      .l {
        width: 63.5%;
        min-width: 63.5%;
      }

      .r {
        width: 36.5%;
        min-width: 36.5%;

        .notice-display {
          height: calc(28% - 1.0417rem);
          margin-bottom: 1.0417rem;
        }

        .canteen-info {
          height: calc(36% - 1.0417rem);
          margin-bottom: 1.0417rem;
        }

        .win-bid-info {
          height: 36%;
        }
      }
    }
  }
}
</style>
