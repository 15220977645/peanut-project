<template>
  <div class="facts-container">
    <div class="module-head">
      今日物流实况
      <div class="car-link" style="font-size: 0.9375vw; font-weight: normal">
        粤A88888
        <el-icon style="margin-left: 0.2604vw"><CaretBottom /></el-icon>
      </div>
      <!-- <el-dropdown
        trigger="click"
        max-height="15.625vw"
        popper-class="facts-container car-dropdown"
      >
        <span
          class="car-link"
          style="font-size: 0.9375vw; font-weight: normal"
        >
          粤A88888
          <el-icon style="margin-left: 0.2604vw"><CaretBottom /></el-icon>
        </span>
        <template #dropdown>
          <div class="dropdown-block">
            <el-dropdown-item
              v-for="(item, i) in carData"
              :key="i"
              @click="selectEvent(item)"
              style="width: fit-content"
            >
              <span>{{ item.plateNo }}</span>
            </el-dropdown-item>
          </div>
        </template>
      </el-dropdown> -->
    </div>
    <div class="content">
      <div class="temperature-line">
        <div class="module-title">
          <img
            src="/src/assets/fullScreen/megoFood/tms/exclamation-icon.png"
            alt=""
          />
          <span>车辆动态温度</span>
        </div>
        <div
          v-if="temperatureData[0]"
          id="temperature-line-echart"
          class="line-echart"
        />
        <div v-else class="empty-box">
          <img src="/src/assets/fullScreen/megoFood/empty.svg" alt="" />
          <span>暂无数据</span>
        </div>
      </div>
      <div class="drive-video">
        <div class="module-title">
          <img
            src="/src/assets/fullScreen/megoFood/tms/exclamation-icon.png"
            alt=""
          />
          <span>车辆行驶视频</span>
        </div>
        <el-carousel
          v-if="videoData[0]"
          ref="carouselRef"
          trigger="click"
          :autoplay="autoCarousel"
          :interval="duration"
          indicator-position="outside"
          @change="handleChangeCarousel"
        >
          <el-carousel-item v-for="(item, index) of videoData" :key="item">
            <video
              :ref="handleVideoRef"
              v-if="playVideoI === index"
              :src="requireImg(item)"
              autoplay
              loop
              muted
              class="item-video"
            />
          </el-carousel-item>
        </el-carousel>
        <div v-else class="empty-video">
          <span>暂无数据</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { lineOption, resizeScale } from "./lineEchartOption";
import { requireImg } from "@/utils/requireImg";
import * as echarts from "echarts";

const carouselRef = ref();
const carData = ref(<any>[]);
const selCar = ref(<any>{});
let lineChart = <echarts.EChartsType | null>null;
const temperatureData = <any>ref([]);
const videoData = ref<any[]>([
  "fullScreen/megoFood/tms/video1.mp4",
  "fullScreen/megoFood/tms/video2.mp4"
]);
const duration = ref(3000);
const playVideoI = ref(0);
const autoCarousel = ref(true);
let videoTimer = <undefined | number>undefined;

/* 初始化 */
function init() {
  getCarInfos();
  getFactsData();
}

/* 获取车辆信息 */
function getCarInfos() {
  carData.value = [];
  selCar.value = carData.value[0];
}

/* 获取数据 */
async function getFactsData() {
  let i = 0;
  while (i < 10) {
    temperatureData.value.push({
      time: `${10 + i}:30`,
      temperature: 10 + Number((Math.random() * 10).toFixed(0))
    });
    i++;
  }
  temperatureData.value.unshift({
    time: `09:30`,
    temperature: 9
  });
  temperatureData.value.push({
    time: `21:30`,
    temperature: 21
  });
  lineOption.series[0].data = temperatureData.value.map(item => {
    return {
      name: item.time,
      value: [new Date(`2023/11/10 ${item.time}`), item.temperature]
    };
  });
  lineOption.xAxis.min = new Date(
    new Date(`2023/11/10 ${temperatureData.value[0].time}`).getTime() -
      1000 * 60 * 60
  );
  lineOption.xAxis.max = new Date(
    new Date(
      `2023/11/10 ${
        temperatureData.value[temperatureData.value.length - 1].time
      }`
    ).getTime() +
      1000 * 60 * 60
  );
  await nextTick();
  handleTempSore();
  onResizeEchart();
}

/* 切换走马灯 */
function handleChangeCarousel(newI) {
  playVideoI.value = newI;
  autoCarousel.value = false;
}

/* 处理视频实例 */
function handleVideoRef(el) {
  if (!el) return;
  el.addEventListener("loadeddata", () => {
    autoCarousel.value = true;
    if (duration.value !== el.duration * 1000)
      duration.value = el.duration * 1000;
  });
}

// /* 选择车辆 */
// function selectEvent(item) {
//   selCar.value = item;
//   getFactsData();
// }

/* 根据数据选出最大值跟最小值 */
function handleTempSore() {
  const tempData = [...temperatureData.value];
  tempData.sort((a, b) => {
    if (a.temperature > b.temperature) return 1;
    else if (a.temperature === b.temperature) return 0;
    else return -1;
  });
  lineOption.series[0].markPoint.data = [
    { type: "max", name: tempData.pop().name },
    { type: "min", name: tempData[0].name }
  ];
}

/* 初始化折线图 */
function initLineChart() {
  if (lineChart) lineChart.dispose();
  lineChart = null;
  const echartDom = document.getElementById("temperature-line-echart");
  if (!echartDom) return;
  lineChart = echarts.init(echartDom);
  lineChart.setOption(lineOption);
}

/* 重新渲染 */
function onResizeEchart() {
  if (temperatureData.value[0]) {
    lineChart?.resize();
    resizeScale();
    initLineChart();
  }
}

onMounted(() => {
  window.addEventListener("resize", onResizeEchart);
  init();
});

onBeforeUnmount(() => {
  clearTimeout(videoTimer);
  videoTimer = undefined;
  window.removeEventListener("resize", onResizeEchart);
});
</script>
<style lang="scss">
$text-color: #25cefd;
$bg-color: #03122f;

.facts-container.car-dropdown {
  background-color: $bg-color;
  transform: translateY(-0.5208vw);

  .el-icon {
    margin-left: 0.2604vw;
    color: #84a5c4;
  }

  .el-scrollbar__wrap {
    border-radius: 1.1979vw;
    // .el-dropdown-menu__item {
    //   background-color: $bg-color;
    //   color: #84a5c4;
    //   &:hover {
    //     background-color: unset;
    //   }
    //   span:hover {
    //     color: $text-color;
    //   }
    // }
  }

  &.el-popper.is-light {
    background-color: $bg-color;
    border: none;
    border-radius: 0.625vw;
    box-shadow: 0 0 1.0417vw 0 rgb(37 206 253 / 70%);
  }

  &.el-popper.is-light .el-popper__arrow::before {
    background: $bg-color;
    border-color: $bg-color;
  }
}
</style>
<style lang="scss" scoped>
:deep {
  .drive-video {
    .el-carousel {
      overflow: hidden;
    }

    .el-carousel__container {
      height: calc(100% - 3.2vh);
    }

    .el-carousel__indicator {
      .el-carousel__button {
        width: 0.5208vw;
        height: 0.2604vw;
        border-radius: 0.4167vw;
      }
    }

    .is-active .el-carousel__button {
      width: 1.1458vw;
      background-color: #ffc760;
    }
  }
}

.module-head {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.car-link {
  color: #d4eaff !important;

  .el-icon {
    color: rgb(212 234 255 / 20%);
  }
}

.content {
  flex: 1;

  & > div {
    display: flex;
    flex-direction: column;
    height: 50%;

    & > div:not(.module-title) {
      flex: 1;
    }

    .module-title {
      display: flex;
      flex-wrap: nowrap;
      margin-bottom: 0.8333vw;

      img {
        width: 1.1458vw;
        height: 1.1458vw;
        margin-right: 0.4167vw;
      }

      span {
        font-size: 0.8333vw;
        color: #b2daff;
      }
    }
  }

  .drive-video {
    margin-top: 0.5208vw;

    .item-video {
      width: 100%;
      height: 100%;
      background-color: #000;
    }
  }

  .empty-video {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 1.0417vw;
    color: #4d525d;
    background-color: #000;
  }
}
</style>
