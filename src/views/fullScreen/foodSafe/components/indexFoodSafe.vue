<template>
  <div class="box foodBox">
    <HeadTitle icon="FoodSafe-icon.svg" name="食安看板" />
    <div class="foodTable">
      <ul class="tableHeader">
        <li>企业名称</li>
        <li>检测时间</li>
        <li>查验合格率</li>
        <li>检测人</li>
      </ul>
      <div v-if="qualityList.length > 0" class="table-body">
        <div :class="animateUp ? 'animate-up' : ''" class="table-block">
          <ul v-for="i in 10" :key="i" class="table-info">
            <li>{{ qualityList[0].companyName }}</li>
            <li>{{ qualityList[0].detectionDate }}</li>
            <li class="percent-pass">
              {{ qualityList[0].percentPass }}
            </li>
            <li>{{ qualityList[0].detectionUser }}</li>
          </ul>
        </div>
      </div>
      <div v-else class="empty-box">
        <EmptyData />
      </div>
    </div>
  </div>
</template>

<script setup>
import HeadTitle from "./headTitle.vue";
import EmptyData from "./emptyData.vue";

const qualityList = ref([
  {
    companyName: "广州******公司",
    detectionDate: "2023.11.10",
    percentPass: "50%",
    detectionUser: "本人"
  }
]);
const animateUp = ref(false);
const timer = ref(null);

/* 初始化 */
async function init() {
  setLiHeight();
  initInterval();
}
/* 动画初始化 */
function initInterval() {
  const foodSafeDom = document.querySelector(".foodBox .foodTable");
  const tableHead = foodSafeDom.querySelector(".tableHeader");
  const bodyDomHeight =
    foodSafeDom.getElementsByClassName("table-body")[0]?.offsetHeight;
  if (bodyDomHeight > foodSafeDom?.offsetHeight - tableHead?.offsetHeight)
    timer.value = setInterval(scrollAnimate, 1500);
}
/* 动态获取第一个li高度 */
function setLiHeight() {
  const root = document.querySelector(":root");
  const infoHeight =
    document.getElementsByClassName("table-info")[0]?.offsetHeight;
  root.style.setProperty("--info-height", 0 - infoHeight + "px");
}
/* 动画滚动 */
function scrollAnimate() {
  animateUp.value = true;
  setLiHeight();
  setTimeout(() => {
    qualityList.value.push(qualityList.value[0]);
    qualityList.value.shift();
    animateUp.value = false;
  }, 1000);
}

onMounted(() => {
  init();
});

onBeforeUnmount(() => {
  clearInterval(timer.value);
});
</script>

<style lang="scss" scoped>
.foodList {
  flex: 1 1 auto;
  overflow: auto;
}

.foodTable {
  position: relative;
  flex: 1 1 auto;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 1.6666rem);
  overflow: hidden;
  font-size: 0.7292rem;
  border-collapse: collapse;
  background-color: rgba(#9cc4ff, 0.06);
  border-top-left-radius: 0.4167rem;
  border-top-right-radius: 0.4167rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    border-radius: 0.4167rem;

    li {
      min-width: fit-content;
      padding: 0.7813rem 0;
      line-height: 1rem;
      color: #fff;

      &:first-child {
        justify-content: flex-start !important;
        width: 5.2083rem !important;
        min-width: 100px;
        padding-left: 0.7813rem;
      }

      &:nth-child(2),
      &:nth-child(4) {
        width: 3.6458rem;
      }

      &:nth-child(3),
      &:last-child {
        width: 2.9167rem;
      }

      &:last-child {
        min-width: 85px;
        padding-right: 0.7813rem;
      }
    }
  }

  .tableHeader {
    background-color: rgba($color: #4e6bff, $alpha: 10%);

    li {
      text-align: center;
    }

    li:first-child {
      padding-left: 0.7813rem;
      text-align: left;
    }
  }

  .table-body {
    // max-height: 13.375rem;
    // height: 200px;
    overflow: hidden;

    li:not(.name) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    li {
      color: #aec9ff;
    }

    .percent-pass {
      color: #ff718b;
    }

    .table-info {
      display: flex;
      flex-wrap: nowrap;
      color: #aec9ff;
    }
  }

  .animate-up {
    transition: all 1s ease-in-out;
    transform: translateY(var(--info-height));
  }
}
</style>
