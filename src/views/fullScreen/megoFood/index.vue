<template>
  <div ref="fullScreenDom" class="flex flex-col screen-container">
    <el-alert
      v-if="!isFullStatus"
      title="您的大屏目前处于缩放状态，页面可能会出现错乱现象，建议点击大屏标题全屏展示"
      type="error"
    />
    <div class="relative flex items-center justify-center screen-head">
      <transition-group name="rotate" tag="div" class="z-10 flex">
        <div class="z-10 flex flex-col text-center tab" @click="mapFullScreen">
          <span class="tab-active">物流大屏</span>
        </div>
      </transition-group>
    </div>

    <div class="flex flex-col screen-main">
      <div class="flex" style="justify-content: end">
        <div class="flex items-end text-[#7BA2C0] z-10">
          <!-- <img :src="logoUrl" /> -->
          <div class="flex items-center mt-[8px]">
            <span class="date">{{ dateState.time }}</span>
            <span>{{ dateState.date }}</span>
          </div>
        </div>
      </div>

      <div class="flex-1 overflow-hidden screen-content">
        <TmsSafety />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TmsSafety from "./components/tmsSafety/index.vue";

// #region tab
// tab大屏轮询定时器

const fullScreenDom = ref();
const isFullStatus = ref(false);

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

// 日期定时器
let nowDateTimer = undefined;

const dateState = reactive({
  time: "",
  date: ""
});

/* 设置系统时间 */
function handleSystemDate() {
  const dateList = new Date().toLocaleDateString().split("/");
  const add0 = num => {
    if (num >= 10) return num;
    else return "0" + num;
  };
  const dayMate = {
    0: "日",
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六"
  };
  const date =
    dateList[0] + "年" + add0(dateList[1]) + "月" + add0(dateList[2]) + "日";
  const day = "星期" + dayMate[new Date().getDay()];
  dateState.time = new Date().toTimeString().slice(0, 9);
  dateState.date = date + " " + day;
}

const init = () => {
  // 开启定时器
  nowDateTimer = setInterval(handleSystemDate, 1000);
};

init();

onBeforeUnmount(() => {
  // 清空时间定时器
  clearInterval(nowDateTimer);
  nowDateTimer = undefined;
});
</script>

<style lang="scss" scoped>
$text-color: #25cefd;
$bg-color: #03122f;

.screen-container {
  height: 100vh;
  font-size: 0.7292rem;
  color: $text-color;
  background-color: $bg-color;

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

  .header-img {
    height: 13.4375rem;
  }

  .tab ~ .tab {
    margin-left: 4.6875rem;
  }

  .screen-head {
    position: relative;
    padding-top: 1.3021rem;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100vh;
      pointer-events: none;
      content: "";
      background-image: url("@/assets/fullScreen/megoFood/header_bg.png");
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  .tab {
    padding-bottom: 1.0417rem;
    font-size: 1.0417rem;
    font-weight: 600;
    line-height: 1.4583rem;
    color: #cbe1f6;
    text-shadow: 0 0.2083rem 0.3125rem rgb(0 0 0 / 60%);
    cursor: pointer;
    background-color: linear-gradient(180deg, #fff 0%, rgb(0 0 0 / 0%) 100%);
  }

  .tab-active {
    margin-bottom: 0.1042rem;
    font-size: 1.8229rem;
    line-height: 2.5521rem;
    color: #fff;
    text-shadow: 0 0 transparent;
    background: linear-gradient(180deg, #fff 0%, #ffbd34 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .tab-inactive {
    padding: 0.625rem 0 1.6146rem;
  }

  .sub_title {
    font-size: 0.7292rem;
    font-weight: 400;
    line-height: 1.0417rem;
    color: #64dae3;
    text-shadow: 0 0.2083rem 0.3125rem rgb(0 0 0 / 60%);
  }

  .screen-main {
    @apply absolute left-0 right-0 top-0 bottom-0;

    padding: 1.875rem 2.0833rem 2.0833rem;
  }

  .date {
    margin-right: 0.7813rem;
    font-size: 1.1458rem;
    font-weight: normal;
    line-height: 1.3542rem;
  }

  .date,
  .date + span {
    z-index: 4;
  }

  .search {
    margin-bottom: 0.7813rem;
    background: #093658;
    border-radius: 1.1979rem;
  }

  .org-title {
    display: flex;
    align-items: center;
    max-width: 15.625rem;
    margin-right: 0.5208rem;
    font-size: 0.9375rem;
    line-height: 1.3021rem;
    color: $text-color !important;
  }

  .screen-content {
    margin-top: 0.7292rem;
    transition: transform 0.3s ease;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.rotate-enter-active,
.rotate-leave-active {
  transition: transform 0.5s;
}

.rotate-enter {
  transform: rotate(0);
}

.rotate-leave-to {
  transform: rotate(360deg);
}
</style>

<style lang="scss">
$text-color: #25cefd;
$bg-color: #03122f;

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.org-container {
  top: 7.7083rem;

  .el-input__wrapper {
    width: 18.2292rem;
    height: 0.7292rem;
    padding: 0.0521rem 1.25rem;
    margin-bottom: 0.7813rem;
    line-height: 1.1458rem;
    background-color: #093658;
    border-radius: 1.1979rem;
    box-shadow: 0 0 0 0.0521rem transparent inset !important;
  }

  .org-container-dropdown {
    max-height: 29.2708rem;
    padding: 0.7813rem;
    overflow: hidden;
  }

  .el-input__wrapper.is-focus {
    box-shadow: 0 0 0 0.0521rem $text-color inset !important;
  }

  .org-dropdown-item:hover {
    color: $text-color;
    background-color: rgba($bg-color, 0.5);
  }

  &.el-popper.is-light {
    width: 19.7917rem;
    background-color: $bg-color !important;
    border: none;
    border-radius: 0.625rem;
    box-shadow: 0 0 1.0417rem 0 rgb(37 206 253 / 70%);
  }

  &.el-popper.is-light .el-popper__arrow::before {
    background: $bg-color !important;
    border-color: $bg-color;
  }

  .org-dropdown-item {
    font-size: 0.8333rem;
    font-weight: 400;
    line-height: 2.0833rem;
    color: #84a5c4;
    cursor: pointer;
  }
}

.screen-loading {
  .circular {
    width: 5.2083rem !important;
    height: 5.2083rem !important;
  }
}
</style>
