<template>
  <div class="select-month-range">
    <el-popover
      ref="dateBidScreen"
      :teleported="false"
      placement="bottom"
      popper-class="month-popover"
      trigger="click"
      @hide="handleChoiceMonth"
    >
      <div class="triangle-icon" />
      <div class="select-content-box">
        <div class="content-area">
          <!-- 年份 -->
          <div class="month-block">
            <div class="cursor" @click="reduceYear">
              <el-icon><DArrowLeft color="#fff" /></el-icon>
            </div>
            <div>{{ year }}年</div>
            <div class="cursor t-r" @click="addYear">
              <el-icon><DArrowRight color="#fff" /></el-icon>
            </div>
          </div>
          <!-- 月份 -->
          <div class="month-list">
            <div v-for="(item, i) in monthMap" :key="i" class="month-item">
              <div :class="setClass(item, 1)" @click="choiceMonth(item)">
                <div :class="setClass(item, 2)" class="item-block">
                  {{ Number(item) }}月
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <template #reference>
        <div class="month-input">
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
  // single: 单选, multiple: 多选, monthRange: 范围选
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

const year = ref(null);
const useData = ref({
  startTime: "",
  endTime: ""
});
const choseMonth = ref([]);
const showTime = ref("");
const monthMap = ref([
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"
]);
/* 初始化 */
function init() {
  const nowYear = new Date().getFullYear();
  const nowMonth = new Date().getMonth() + 1;
  const nowTime = `${nowYear}年${nowMonth}月`;
  year.value = nowYear;
  choseMonth.value = [`${nowYear}-${nowMonth > 9 ? nowMonth : "0" + nowMonth}`];
  useData.value = {
    startTime: `${nowYear}-${nowMonth > 9 ? nowMonth : "0" + nowMonth}`,
    endTime: `${nowYear}-${nowMonth > 9 ? nowMonth : "0" + nowMonth}`
  };
  showTime.value = nowTime;
}
/* 设置class */
function setClass(m, rank) {
  const itemTime = new Date(year.value, m).getTime();
  const nowTime = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1
  ).getTime();
  const lastIndex = choseMonth.value[choseMonth.value.length - 1];
  if (rank === 1 && itemTime > nowTime) return "no-active_item";
  if (!choseMonth.value[0]) return;
  let classText = "";
  if (props.choiceType !== "monthRange") {
    if (rank === 1 && choseMonth.includes(`${year.value}-${m}`))
      classText = "item-start item-content item-end";
    if (rank === 2 && choseMonth.includes(`${year.value}-${m}`))
      classText = "item-active";
  } else {
    const startYear = Number(choseMonth.value[0].replace(/-.*/, ""));
    const startMonth = Number(choseMonth.value[0].replace(/\d{0,4}-/, ""));
    let startTime = new Date(startYear, startMonth).getTime();
    let endTime = "";
    if (choseMonth.value.length === 1) endTime = startTime;
    else {
      const endYear = Number(choseMonth.value[1].replace(/-.*/, ""));
      const endMonth = Number(lastIndex.replace(/\d{0,4}-/, ""));
      endTime = new Date(endYear, endMonth).getTime();
    }
    if (props.choiceType === "monthRange" && startTime > endTime) {
      const bus = startTime;
      startTime = endTime;
      endTime = bus;
      choseMonth.value = [choseMonth.value[1], choseMonth.value[0]];
    }
    if (rank === 1) {
      if (endTime === itemTime) classText = "item-content item-end";
      if (startTime === itemTime) classText = "item-start item-content";
      if (startTime === itemTime && endTime === itemTime)
        classText = "item-start item-content item-end";
      if (itemTime > startTime && itemTime < endTime)
        classText = "item-content";
    }
    if (rank === 2) {
      if (startTime === itemTime || endTime === itemTime)
        classText = "item-active";
    }
  }
  return classText;
}
/* 左上角年份减少 */
function reduceYear() {
  year.value--;
  setClass();
}
/* 右上角年份增加 */
function addYear() {
  year.value++;
  setClass();
}
/* 提交选择月份 */
function handleChoiceMonth() {
  if (!choseMonth.value[0]) return;
  const startMonth = choseMonth.value[0];
  const startMonthText = `${startMonth.replace(/-.*/, "")}年${Number(
    startMonth.replace(/\d{0,4}-/, "")
  )}月`;
  if (
    choseMonth.value.length === 1 ||
    choseMonth.value[0] === choseMonth.value[1]
  ) {
    useData.value = {
      startTime: startMonth,
      endTime: startMonth
    };
    showTime.value = startMonthText;
  } else {
    useData.value = {
      startTime: startMonth,
      endTime: choseMonth.value[1]
    };

    switch (props.showType) {
      case "*年*月至":
        showTime.value = `${startMonthText}至${choseMonth.value[1].replace(
          /-.*/,
          ""
        )}年${Number(choseMonth.value[1].replace(/\d{0,4}-/, ""))}月`;
        break;
      case "*年*月-":
        showTime.value = `${startMonthText} - ${choseMonth.value[1].replace(
          /-.*/,
          ""
        )}年${Number(choseMonth.value[1].replace(/\d{0,4}-/, ""))}月`;
        break;
      default:
        showTime.value = `${startMonthText}至${choseMonth.value[1].replace(
          /-.*/,
          ""
        )}年${Number(choseMonth.value[1].replace(/\d{0,4}-/, ""))}月`;
        break;
    }
  }
  Bus.emit(props.busName, {
    useData: useData.value,
    showTime: showTime.value
  });
}
/* 选择月份 */
function choiceMonth(item) {
  if (props.choiceType === "single")
    choseMonth.value = [`${year.value}-${item}`];
  if (props.choiceType === "multiple") {
    const clickDate = `${year.value}-${item}`;
    if (choseMonth.value.includes(clickDate))
      choseMonth.value.splice(
        choseMonth.value.findIndex(item => {
          return item === clickDate;
        }),
        1
      );
    else choseMonth.value.push(clickDate);
  }
  if (props.choiceType === "monthRange") {
    if (choseMonth.value.length > 1) choseMonth.value = [];
    choseMonth.value.push(`${year.value}-${item}`);
  }
}

onMounted(() => {
  if (props.busName === "getStageDataTime") {
    setInterval(() => {
      Bus.emit(props.busName, {
        useData: useData.value,
        showTime: showTime.value
      });
    }, 1000 * 60 * 60 * 30);
  }
});
init();
</script>
<style lang="scss">
.month-popover {
  width: 13.0208rem !important;
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
    .month-block {
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

  .month-list {
    display: flex;
    flex-wrap: wrap;

    .month-item {
      width: 33.33%;
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
.month-input {
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
