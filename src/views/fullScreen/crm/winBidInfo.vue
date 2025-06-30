<template>
  <div class="box bid-box">
    <Title name="中标喜讯" />
    <div class="bid-table">
      <ul class="table-header">
        <li class="city-td">省份/城市</li>
        <li class="money-td lifting-colum">
          金额(万)
          <div class="lifting-btn">
            <el-icon
              :class="{ 'light-icon': liftStatus === '-money' }"
              @click="liftMoney(-1)"
              ><CaretTop
            /></el-icon>
            <el-icon
              :class="{ 'light-icon': liftStatus === 'money' }"
              @click="liftMoney(1)"
              ><CaretBottom
            /></el-icon>
          </div>
        </li>
        <li class="bidSpecialist-td">投标专员</li>
        <li class="announceTime-td lifting-colum">
          中标日期
          <div class="lifting-btn">
            <el-icon
              :class="{ 'light-icon': liftStatus === '-date' }"
              @click="liftDate(-1)"
              ><CaretTop
            /></el-icon>
            <el-icon
              :class="{ 'light-icon': liftStatus === 'date' }"
              @click="liftDate(1)"
              ><CaretBottom
            /></el-icon>
          </div>
        </li>
        <li class="projectName-td">项目名称</li>
      </ul>
      <div
        v-loading="liftDataStatus"
        v-if="winBidList.length > 0"
        class="table-body"
      >
        <div :class="animateUp ? 'animate-up' : ''" class="table-block">
          <ul v-for="(item, i) in showBidList" :key="i" class="table-info" lazy>
            <li class="city-td">
              {{
                centralCity.includes(item.provinces)
                  ? item.city
                  : `${item.provinces}省${item.city}`
              }}
            </li>
            <li class="money-td">
              {{
                Number(item.bidAmount)
                  ? Number(item.bidAmount).toFixed(0)
                  : "***"
              }}
            </li>
            <li class="bidSpecialist-td">
              {{ item.bidSpecialist ? item.bidSpecialist : "--" }}
            </li>
            <li class="announceTime-td">
              {{ item.announceTime ? item.announceTime : "--" }}
            </li>
            <li class="projectName-td">
              {{ item.projectName ? item.projectName : "--" }}
            </li>
          </ul>
        </div>
      </div>
      <div v-else class="empty-box">
        <emptyData />
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "./title.vue";
import emptyData from "./emptyData.vue";

const centralCity = ref(["北京", "天津", "重庆", "上海"]);
const winBidList = ref([]);
const showBidList = ref([]);
const animateUp = ref(false);
const timer = ref(null);
const liftDataStatus = ref(false);
const scrollIndex = ref(10);
const liftStatus = ref("date");

/* 初始化 */
async function init() {
  getTenderInfo();
  liftDate(1);
  if (winBidList.value.length <= 0) return;
  liftDataStatus.value = true;
  setTimeout(() => {
    liftStatus.value = "date";
    showBidList.value = winBidList.value.slice(0, 10);
    liftDataStatus.value = false;
    scrollIndex.value = 10;
    initInterval();
  }, 1500);
}

/* 获取数据 */
function getTenderInfo() {
  let i = 0;
  while (i < 20) {
    let tarObj = {};
    if (i % 2 === 0) {
      tarObj = {
        provinces: "广东省",
        city: "广州市",
        bidAmount: Math.random() * 10000,
        bidSpecialist: "同事甲",
        announceTime: "2023-11-01",
        projectName: "秘密计划"
      };
    } else {
      tarObj = {
        provinces: "广东省",
        city: "佛山市",
        bidAmount: Math.random() * 10000,
        bidSpecialist: "同事乙",
        announceTime: "2023-11-11",
        projectName: "秘密计划"
      };
    }
    winBidList.value.push(tarObj);
    i++;
  }
}
/* 金钱排序 */
function liftMoney(type) {
  if (type === 1)
    winBidList.value.sort((a, b) => {
      return Number(b.bidAmount) - Number(a.bidAmount);
    });
  if (type === -1)
    winBidList.value.sort((a, b) => {
      return Number(a.bidAmount) - Number(b.bidAmount);
    });
  liftStatus.value = `${type}`.replace("1", "money");
}
/* 日期排序 */
function liftDate(type) {
  if (type === 1)
    winBidList.value.sort((a, b) => {
      return (
        new Date(b.announceTime).getTime() - new Date(a.announceTime).getTime()
      );
    });
  if (type === -1)
    winBidList.value.sort((a, b) => {
      return (
        new Date(a.announceTime).getTime() - new Date(b.announceTime).getTime()
      );
    });
  liftStatus.value = `${type}`.replace("1", "date");
}
/* 动画初始化 */
async function initInterval() {
  await nextTick();
  const winBidDom = document.querySelector(".bid-box .bid-table");
  const bodyDomHeight =
    winBidDom.getElementsByClassName("table-body")[0].offsetHeight;
  const blockHeight =
    winBidDom.getElementsByClassName("table-block")[0].offsetHeight;
  clearInterval(timer.value);
  timer.value = null;
  if (blockHeight > bodyDomHeight)
    timer.value = setInterval(scrollAnimate, 1500);
}
/* 动态获取第一个li高度 */
async function setLiHeight() {
  const root = document.querySelector(":root");
  await nextTick();
  const infoHeight =
    document.getElementsByClassName("table-info")[0].offsetHeight;
  root.style.setProperty("--info-height", 0 - infoHeight + "px");
}
/* 动画滚动 */
function scrollAnimate() {
  setLiHeight();
  animateUp.value = true;
  setTimeout(() => {
    if (scrollIndex.value < winBidList.value.length)
      showBidList.value.push(winBidList.value[scrollIndex.value]);
    else showBidList.value.push(showBidList.value[0]);
    showBidList.value.shift();
    scrollIndex.value++;
    animateUp.value = false;
  }, 1000);
}
watch(
  () => winBidList.value,
  () => {
    clearInterval(timer.value);
    timer.value = null;
    showBidList.value = [];
    liftDataStatus.value = true;
    setTimeout(() => {
      if (winBidList.value.length < 1) return;
      showBidList.value = winBidList.value.slice(0, 10);
      liftDataStatus.value = false;
      scrollIndex.value = 10;
      initInterval();
    }, 1500);
  },
  { deep: true }
);

init();
onBeforeUnmount(() => {
  clearInterval(timer.value);
});
</script>

<style lang="scss" scoped>
:deep {
  .el-loading-mask {
    background-color: transparent !important;
  }
}

.foodList {
  flex: 1 1 auto;
  overflow: auto;
}

.bid-table {
  position: relative;
  flex: 1 1 auto;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 2.2917rem);
  overflow: hidden;
  font-size: 0.8333rem;
  border-collapse: collapse;

  ul {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    border-radius: 0.4167rem;

    li {
      display: inline-block;
      justify-content: flex-start !important;
      padding: 0.5208rem;
      line-height: 0.8333rem;
    }
  }

  .table-header {
    li {
      color: #00e3fb;
      text-align: left;
    }
  }

  .table-body {
    height: calc(100% - 1.7708rem) !important;
    overflow: hidden;
    background-color: rgb(0 108 255 / 8%);

    li:not(.name) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    li {
      color: #fff;
    }

    .table-info {
      display: flex;
      flex-wrap: nowrap;
    }
  }

  .city-td {
    width: 30%;
    min-width: 8.3333rem;
    max-width: 8.3333rem;
  }

  .money-td {
    min-width: 5.7292rem;
    max-width: 5.7292rem;
  }

  .bidSpecialist-td {
    display: flex;
    justify-content: center !important;
    min-width: 4.9479rem;
    max-width: 4.9479rem;
  }

  .announceTime-td {
    justify-content: center !important;
    min-width: 6.25rem;
    max-width: 6.25rem;
  }

  .lifting-colum {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    .lifting-btn {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 0.2604rem;

      .el-icon:first-child {
        height: 0.5208rem;
      }

      .el-icon {
        color: rgba($color: #19f5fe, $alpha: 20%);
        cursor: pointer;
      }

      .light-icon {
        color: #19f5fe !important;
      }
    }
  }

  .animate-up {
    transition: all 1s linear;
    transform: translateY(var(--info-height));
  }
}

.empty-box {
  height: calc(100% - 1.7708rem) !important;
}
</style>
