<template>
  <div class="select-year-range">
    <el-popover
      ref="dateBidScreen"
      :teleported="false"
      placement="bottom"
      popper-class="year-popover"
      trigger="click"
      @hide="handleChoiceMonth"
    >
      <div class="triangle-icon" />
      <div class="select-content-box">
        <div class="content-area">
          <!-- 年份 -->
          <div class="year-block">
            <div class="cursor" @click="reduceYear">
              <el-icon><DArrowLeft color="#fff" /></el-icon>
            </div>
            <div>{{ yearMap[0] }}年 - {{ yearMap[yearMap.length - 1] }}年</div>
            <div class="cursor t-r" @click="addYear">
              <el-icon><DArrowRight color="#fff" /></el-icon>
            </div>
          </div>
          <!-- 年份 -->
          <div class="year-list">
            <div v-for="item in yearMap" :key="item" class="year-item">
              <div :class="setClass(item, 1)" @click="choiceYear(item)">
                <div :class="setClass(item, 2)" class="item-block">
                  {{ item }}年
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <template #reference>
        <div class="year-input">
          <div>{{ showTime }}</div>
          <el-icon><CaretBottom /></el-icon>
        </div>
      </template>
    </el-popover>
  </div>
</template>
<script setup>
import { Bus } from "./bus";

const props = defineProps({
  busName: {
    type: String,
    default: ""
  },
  // single: 单选, multiple: 多选, yearRange: 范围选
  choiceType: {
    type: String,
    default: "single"
  },
  // 回显方式
  showType: {
    type: String,
    default: "*年*月至"
  }
});

const choseYear = ref([]);
const showTime = ref("");
const yearMap = ref([]);

/* 初始化 */
function init() {
  const nowYear = new Date().getFullYear();
  yearMap.value[0] = nowYear - (nowYear % 10);
  let i = 1;
  while (i <= 9) {
    yearMap.value.push(yearMap.value[0] + i);
    i++;
  }
  choseYear.value = [nowYear];
  showTime.value = `${nowYear}年`;
}
/* 设置class */
function setClass(y, rank) {
  const nowYear = new Date().getFullYear();
  if (y > nowYear) return "no-active_item";
  if (!choseYear.value[0]) return;
  let classText = "";
  if (props.choiceType !== "yearRange") {
    if (rank === 1 && choseYear.value.includes(y))
      classText = "item-start item-content item-end";
    if (rank === 2 && choseYear.value.includes(y)) classText = "item-active";
  } else {
    if (choseYear.value.length === 1 && choseYear.value.includes(y)) {
      if (rank === 1 && choseYear.value.includes(y))
        classText = "item-start item-content item-end";
      if (rank === 2 && choseYear.value.includes(y)) classText = "item-active";
      return classText;
    }
    if (choseYear.value[1]) {
      // 待维护
      console.log(y, choseYear.value[0], choseYear.value[1]);
      // if (y < choseYear.value[0] || y > choseYear.value[1]) return
      // if (choseYear.value[0] > choseYear.value[1]) choseYear.value = [choseYear.value[1], choseYear.value[0]]
      // if (rank === 1) {
      //   if (y === choseYear.value[1]) classText = 'item-content item-end'
      //   if (choseYear.value[0] === y) classText = 'item-start item-content'
      //   if (choseYear.value[0] === y && choseYear.value[1] === y) classText = 'item-start item-content item-end'
      //   if (y > choseYear.value[0] && y < choseYear.value[1]) classText = 'item-content'
      // }
      // if (rank === 2) {
      //   if (choseYear.value[0] === y || choseYear.value[1] === y) classText = 'item-active'
      // }
    }
  }
  return classText;
}
/* 左上角年份减少 */
function reduceYear() {
  for (const i in yearMap.value) {
    yearMap.value[i] = yearMap.value[i] - 10;
  }
  setClass();
}
/* 右上角年份增加 */
function addYear() {
  for (const i in yearMap.value) {
    yearMap.value[i] = yearMap.value[i] + 10;
  }
  setClass();
}
/* 提交选择年份 */
function handleChoiceMonth() {
  if (props.choiceType === "single") showTime.value = `${choseYear.value[0]}年`;
  Bus.emit(props.busName, { choseYear: choseYear.value });
}
/* 选择年份 */
function choiceYear(target) {
  if (props.choiceType === "single") choseYear.value = [target];
  if (props.choiceType === "multiple") {
    const choseYear = choseYear.value;
    if (choseYear.includes(target))
      choseYear.value.splice(
        choseYear.findIndex(item => {
          return item === target;
        }),
        1
      );
    else choseYear.value.push(target);
  }
  if (props.choiceType === "yearRange") {
    let choseYear = choseYear.value;
    if (choseYear.length > 1) choseYear = [];
    choseYear.push(target);
    choseYear.value = choseYear;
  }
}
init();
</script>
<style lang="scss">
.year-popover {
  width: 17.1875rem !important;
  padding: 1.0417rem !important;
  background: linear-gradient(0deg, #002d5b, #010a25) !important;
  border: none !important;
  border-radius: 0.3125rem !important;
  box-shadow: 0 0 1.3021rem #2877b1 !important;

  .el-popper__arrow {
    display: none;
  }

  .triangle-icon {
    position: absolute;
    top: -0.5208rem;
    left: 2.6042rem;
    width: 0;
    height: 0;
    border-right: 0.7813rem solid transparent;
    border-bottom: 0.5208rem solid #010a25;
    border-left: 0.7813rem solid transparent;
  }

  .select-content-box {
    .year-block {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      margin-bottom: 1.3021rem;
      color: #fff;
      font: {
        size: 0.8854rem;
        family: pingfangsc-semibold;
        weight: 600;
      }

      .cursor {
        cursor: pointer;
      }
    }
  }

  .year-list {
    display: flex;
    flex-wrap: wrap;

    .year-item {
      width: 25%;
      margin: 0.5208rem 0;

      > div {
        padding: 0.2604rem;
      }

      .item-block {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.875rem;
        padding: 0;
        margin: 0;
        color: #fff;
        cursor: pointer;
      }
    }

    .item-content {
      background-color: #092843;

      .item-block {
        color: #19f5fe !important;
      }
    }

    .item-start {
      border-top-left-radius: 0.9375rem;
      border-bottom-left-radius: 0.9375rem;
    }

    .item-end {
      border-top-right-radius: 0.9375rem;
      border-bottom-right-radius: 0.9375rem;
    }

    .item-active {
      color: #19f5fe !important;
      background-color: #1c5f70;
      border-radius: 0.9375rem;
    }

    .no-active_item {
      pointer-events: none;

      > div {
        color: rgba($color: #fff, $alpha: 20%) !important;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.year-input {
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  width: 18.2292rem;
  height: 2.2917rem;
  padding-left: 1.3021rem;
  color: #19f5fe;
  letter-spacing: 0.0521rem;
  cursor: pointer;
  font: {
    size: 1.3542rem;
    family: pingfang sc;
    weight: 500;
  }

  > div {
    z-index: 1;
    min-width: fit-content;
  }

  .choice-icon {
    z-index: 1;
    margin-left: 0.2604rem;
    font-size: 1.3542rem;
    color: #19f5fe;
  }
}
</style>
