<template>
  <div class="achievement-container">
    <div class="tab-head" @click="choiceTab">
      <div id="year" :class="{ active: activeTab === 'year' }" class="tab">
        年度
      </div>
      <div id="month" :class="{ active: activeTab === 'month' }" class="tab">
        月度
      </div>
      <YearSelect
        v-show="activeTab === 'year'"
        ref="yearDate"
        :bus-name="'getAchieveYear'"
      />
      <MonthSelect
        v-show="activeTab === 'month'"
        ref="monthDate"
        :show-type="'*年*月-'"
        :bus-name="'getAchieveMonth'"
        :choice-type="'monthRange'"
      />
    </div>
    <div
      :class="{ 'month-content': activeTab === 'month' }"
      class="table-content"
    >
      <div class="left">
        <div class="l-table-title">
          <img
            src="http://images.visfarm.com/crm/img/table-head-l.png"
            alt=""
          />
          <p>投标组{{ timeText }}数据<span>(单位:万元)</span></p>
          <img
            src="http://images.visfarm.com/crm/img/table-head-r.png"
            alt=""
          />
        </div>
        <div class="l-table">
          <ul class="table-head">
            <li class="ul-td">投标组</li>
            <li class="ul-td">
              {{ activeTab === "year" ? "年目标" : "目标金额" }}
              <div class="lifting-btn" @click="lChoseLiftStatus">
                <el-icon
                  id="-itemMoney"
                  :class="{ 'light-icon': lLiftStatus === '-itemMoney' }"
                  ><CaretTop
                /></el-icon>
                <el-icon
                  id="itemMoney"
                  :class="{ 'light-icon': lLiftStatus === 'itemMoney' }"
                  ><CaretBottom
                /></el-icon>
              </div>
            </li>
            <li class="ul-td">
              {{ activeTab === "year" ? "年中标金额" : "中标金额" }}
              <div class="lifting-btn" @click="lChoseLiftStatus">
                <el-icon
                  id="-bidAmount"
                  :class="{ 'light-icon': lLiftStatus === '-bidAmount' }"
                  ><CaretTop
                /></el-icon>
                <el-icon
                  id="bidAmount"
                  :class="{ 'light-icon': lLiftStatus === 'bidAmount' }"
                  ><CaretBottom
                /></el-icon>
              </div>
            </li>
            <li class="ul-td">
              {{ activeTab === "year" ? "年业绩达成率" : "业绩达成率" }}
              <div class="lifting-btn" @click="lChoseLiftStatus">
                <el-icon
                  id="-itemPercent"
                  :class="{ 'light-icon': lLiftStatus === '-itemPercent' }"
                  ><CaretTop
                /></el-icon>
                <el-icon
                  id="itemPercent"
                  :class="{ 'light-icon': lLiftStatus === 'itemPercent' }"
                  ><CaretBottom
                /></el-icon>
              </div>
            </li>
          </ul>
          <div v-loading="lWaitTable" class="table-body">
            <div @click="choseTender">
              <ul
                v-for="(item, index) in leftTableData"
                :key="index"
                :id="index"
                :class="{ 'active-ui': activeId === index }"
                class="body-tr"
              >
                <li class="ul-td">{{ item.tenderSection }}</li>
                <li class="ul-td">
                  {{
                    Number(Number(item.itemMoney).toFixed(0)).toLocaleString()
                  }}
                </li>
                <li class="ul-td">
                  {{ Number(item.bidAmount.toFixed(0)).toLocaleString() }}
                </li>
                <li class="ul-td">
                  <span :title="(item.itemPercent * 100).toFixed(1)"
                    >{{ (item.itemPercent * 100).toFixed(1) }}%</span
                  >
                  <el-progress
                    v-if="item.itemPercent !== null"
                    :color="yearAchieveColor"
                    :percentage="
                      item.itemPercent > 1
                        ? 100
                        : Number((item.itemPercent * 100).toFixed(1))
                    "
                    :define-back-color="'#000'"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="r-table-title">
          <img
            src="http://images.visfarm.com/crm/img/table-head-l.png"
            alt=""
          />
          <p>投标专员{{ timeText }}数据<span>(单位:万元)</span></p>
          <img
            src="http://images.visfarm.com/crm/img/table-head-r.png"
            alt=""
          />
        </div>
        <div :class="{ 'month-table': activeTab === 'month' }" class="r-table">
          <ul
            v-if="activeTab === 'year'"
            class="table-head"
            @click="rChoseLiftStatus"
          >
            <li class="ul-td">序号</li>
            <li class="ul-td">投标专员</li>
            <li class="ul-td">
              年基础目标
              <div class="lifting-btn">
                <el-icon
                  id="-itemMoney"
                  :class="{ 'light-icon': rLiftStatus === '-itemMoney' }"
                  ><CaretTop
                /></el-icon>
                <el-icon
                  id="itemMoney"
                  :class="{ 'light-icon': rLiftStatus === 'itemMoney' }"
                  ><CaretBottom
                /></el-icon>
              </div>
            </li>
            <li class="ul-td">
              年挑战目标
              <div class="lifting-btn">
                <el-icon
                  id="-challengeMoney"
                  :class="{ 'light-icon': rLiftStatus === '-challengeMoney' }"
                  ><CaretTop
                /></el-icon>
                <el-icon
                  id="challengeMoney"
                  :class="{ 'light-icon': rLiftStatus === 'challengeMoney' }"
                  ><CaretBottom
                /></el-icon>
              </div>
            </li>
            <li class="ul-td">
              挑战倍率
              <div class="lifting-btn">
                <el-icon
                  id="-challengeRatioPercent"
                  :class="{
                    'light-icon': rLiftStatus === '-challengeRatioPercent'
                  }"
                  ><CaretTop
                /></el-icon>
                <el-icon
                  id="challengeRatioPercent"
                  :class="{
                    'light-icon': rLiftStatus === 'challengeRatioPercent'
                  }"
                  ><CaretBottom
                /></el-icon>
              </div>
            </li>
            <li class="ul-td">
              年中标金额
              <div class="lifting-btn">
                <el-icon
                  id="-bidAmount"
                  :class="{ 'light-icon': rLiftStatus === '-bidAmount' }"
                  ><CaretTop
                /></el-icon>
                <el-icon
                  id="bidAmount"
                  :class="{ 'light-icon': rLiftStatus === 'bidAmount' }"
                  ><CaretBottom
                /></el-icon>
              </div>
            </li>
            <li class="ul-td">
              年基础目标达成率
              <div class="lifting-btn">
                <el-icon
                  id="-itemPercent"
                  :class="{ 'light-icon': rLiftStatus === '-itemPercent' }"
                  ><CaretTop
                /></el-icon>
                <el-icon
                  id="itemPercent"
                  :class="{ 'light-icon': rLiftStatus === 'itemPercent' }"
                  ><CaretBottom
                /></el-icon>
              </div>
            </li>
            <li class="ul-td">
              年挑战目标达成率
              <div class="lifting-btn">
                <el-icon
                  id="-challengePercent"
                  :class="{ 'light-icon': rLiftStatus === '-challengePercent' }"
                  ><CaretTop
                /></el-icon>
                <el-icon
                  id="challengePercent"
                  :class="{ 'light-icon': rLiftStatus === 'challengePercent' }"
                  ><CaretBottom
                /></el-icon>
              </div>
            </li>
          </ul>
          <ul v-else class="table-head" @click="rChoseLiftStatus">
            <li class="ul-td">序号</li>
            <li class="ul-td">投标专员</li>
            <li class="ul-td">
              基础目标
              <div class="lifting-btn">
                <el-icon
                  id="-itemMoney"
                  :class="{ 'light-icon': rLiftStatus === '-itemMoney' }"
                  ><CaretTop
                /></el-icon>
                <el-icon
                  id="itemMoney"
                  :class="{ 'light-icon': rLiftStatus === 'itemMoney' }"
                  ><CaretBottom
                /></el-icon>
              </div>
            </li>
            <li class="ul-td">
              中标金额
              <div class="lifting-btn">
                <el-icon
                  id="-bidAmount"
                  :class="{ 'light-icon': rLiftStatus === '-bidAmount' }"
                  ><CaretTop
                /></el-icon>
                <el-icon
                  id="bidAmount"
                  :class="{ 'light-icon': rLiftStatus === 'bidAmount' }"
                  ><CaretBottom
                /></el-icon>
              </div>
            </li>
            <li class="ul-td">
              业绩达成率
              <div class="lifting-btn">
                <el-icon
                  id="-itemPercent"
                  :class="{ 'light-icon': rLiftStatus === '-itemPercent' }"
                  ><CaretTop
                /></el-icon>
                <el-icon
                  id="itemPercent"
                  :class="{ 'light-icon': rLiftStatus === 'itemPercent' }"
                  ><CaretBottom
                /></el-icon>
              </div>
            </li>
          </ul>
          <div v-loading="rWaitTable" class="table-body">
            <div v-if="activeTab === 'year'">
              <ul
                v-for="(item, index) in rightTableData"
                :key="item.id"
                class="body-tr"
              >
                <li class="ul-td">{{ index + 1 }}</li>
                <li class="ul-td">{{ item.bidSpecialist }}</li>
                <li class="ul-td">
                  {{
                    Number(Number(item.itemMoney).toFixed(0)).toLocaleString()
                  }}
                </li>
                <li class="ul-td">
                  {{
                    Number(
                      Number(item.challengeMoney).toFixed(0)
                    ).toLocaleString()
                  }}
                </li>
                <li class="ul-td">
                  {{ Number(item.challengeRatioPercent).toFixed(1) }}
                </li>
                <li class="ul-td">
                  {{ Number(item.bidAmount.toFixed(0)).toLocaleString() }}
                </li>
                <li class="ul-td">
                  <span :title="(item.itemPercent * 100).toFixed(1)"
                    >{{ (item.itemPercent * 100).toFixed(1) }}%</span
                  >
                  <el-progress
                    v-if="item.itemPercent !== null"
                    :color="yearAchieveColor"
                    :percentage="
                      item.itemPercent > 1
                        ? 100
                        : Number((item.itemPercent * 100).toFixed(1))
                    "
                    :define-back-color="'#000'"
                  />
                </li>
                <li class="ul-td">
                  <span :title="(item.challengePercent * 100).toFixed(1)"
                    >{{ (item.challengePercent * 100).toFixed(1) }}%</span
                  >
                  <el-progress
                    v-if="item.challengePercent !== null"
                    :color="yearAchieveColor"
                    :percentage="
                      item.challengePercent > 1
                        ? 100
                        : Number((item.challengePercent * 100).toFixed(1))
                    "
                    :define-back-color="'#000'"
                  />
                </li>
              </ul>
            </div>
            <div v-else>
              <ul
                v-for="(item, index) in rightTableData"
                :key="item.id"
                class="body-tr"
              >
                <li class="ul-td">{{ index + 1 }}</li>
                <li class="ul-td">{{ item.bidSpecialist }}</li>
                <li class="ul-td">
                  {{
                    Number(Number(item.itemMoney).toFixed(0)).toLocaleString()
                  }}
                </li>
                <li class="ul-td">
                  {{ Number(item.bidAmount).toLocaleString() }}
                </li>
                <li class="ul-td">
                  <span :title="(item.itemPercent * 100).toFixed(1)"
                    >{{ (item.itemPercent * 100).toFixed(1) }}%</span
                  >
                  <el-progress
                    v-if="item.itemPercent !== null"
                    :color="yearAchieveColor"
                    :percentage="
                      item.itemPercent > 1
                        ? 100
                        : Number((item.itemPercent * 100).toFixed(1))
                    "
                    :define-back-color="'#000'"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import YearSelect from "./components/yearDate.vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MonthSelect from "./components/monthDate.vue";
import { Bus } from "./components/bus";
const activeTab = ref("year");
const bkYearText = ref(`${new Date().getFullYear()}年`);
const bkMonthText = ref(
  `${new Date().getFullYear()}年${new Date().getMonth() + 1}月`
);
const timeText = ref(`${new Date().getFullYear()}年`);
const leftTableData = ref([]);
const lWaitTable = ref(false);
const lLiftStatus = ref("itemPercent");
const rightTableData = ref([]);
const rWaitTable = ref(false);
const rLiftStatus = ref("itemPercent");
const activeId = ref(0);

/* 初始化 */
async function init() {
  initDate();
  lChoseLiftStatus({ target: { id: "itemPercent" } });
  rChoseLiftStatus({ target: { id: "itemPercent" } });
  Bus.on("getAchieveYear", async data => {
    if (activeTab.value === "year") {
      rightTableData.value = [];
      timeText.value = `${data.choseYear[0]}年`;
      bkYearText.value = `${data.choseYear[0]}年`;
    }
    initDate();
  });
  Bus.on("getAchieveMonth", async data => {
    if (activeTab.value === "month") {
      rightTableData.value = [];
      timeText.value = data.showTime.replace(/\s*/g, "").replace(/-.*年/, "-");
      bkMonthText.value = data.showTime
        .replace(/\s*/g, "")
        .replace(/-.*年/, "-");
    }
    initDate();
  });
}

/* 初始化数据 */
function initDate(type) {
  let i = 0;
  while (i < 50) {
    const leftObj = {
      tenderSection: "投标组" + (i + 1),
      itemMoney: Math.random() * 1000,
      bidAmount: Math.random() * 1000,
      itemPercent: Math.random()
    };
    const rightObj = {
      bidSpecialist: "投标专员" + (i + 1),
      itemMoney: Math.random() * 1000,
      challengeMoney: Math.random() * 10000,
      challengeRatioPercent: Math.random(),
      challengePercent: Math.random(),
      bidAmount: Math.random() * 1000,
      itemPercent: Math.random()
    };
    if (!type) {
      leftTableData.value.push(leftObj);
      rightTableData.value.push(rightObj);
    } else if (type === "right") rightTableData.value.push(rightObj);
    else if (type === "left") rightTableData.value.push(leftObj);
    i++;
  }
}
/* 选择年度 / 月度 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function choiceTab(e) {
  if (!e.target.id) return;
  activeTab.value = e.target.id;
  rightTableData.value = [];
  if (e.target.id === "month") {
    timeText.value = bkMonthText.value;
    let monthData = [];
    if (bkMonthText.value.includes("-"))
      monthData = bkMonthText.value.replace(/\s*/g, "").split("-");
    else monthData = [bkMonthText.value, bkMonthText.value];
    if (!monthData[1].includes("年"))
      monthData[1] = monthData[0].replace(/年.*/, `年${monthData[1]}`);
    monthData = monthData.map(item => {
      return handleMonthText(item.replace("年", "-").replace("月", ""));
    });
  } else {
    timeText.value = bkYearText.value;
  }
  leftTableData.value = [];
  rightTableData.value = [];
  initDate();
}
/* 处理文本转换成日期数据 */
function handleMonthText(text) {
  const timeData = text.split("-");
  timeData[1] = Number(timeData[1]) > 9 ? timeData[1] : `0${timeData[1]}`;
  return `${timeData[0]}-${timeData[1]}`;
}
/* 选择行投标组 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function choseTender(e) {
  if (!e.target.id) return;
  activeId.value = Number(e.target.id);
  let monthData = [];
  if (bkMonthText.value.includes("-"))
    monthData = bkMonthText.value.replace(/\s*/g, "").split("-");
  else monthData = [bkMonthText.value, bkMonthText.value];
  if (!monthData[1].includes("年"))
    monthData[1] = monthData[0].replace(/年.*/, `年${monthData[1]}`);
  monthData = monthData.map(item => {
    return handleMonthText(item.replace("年", "-").replace("月", ""));
  });
  rightTableData.value = [];
  initDate("right");
}
/* 左表格排序事件 */
function lChoseLiftStatus(e) {
  if (!e.target.id) return;
  const type = e.target.id;
  let totalObj = {};
  lLiftStatus.value = type;
  if (leftTableData.value[0].tenderSection === "总计") {
    totalObj = leftTableData.value[0];
    leftTableData.value.splice(0, 1);
  }
  if (!type.includes("-"))
    leftTableData.value.sort((a, b) => {
      return Number(b[type]) - Number(a[type]);
    });
  else
    leftTableData.value.sort((a, b) => {
      return (
        Number(a[type.replace("-", "")]) - Number(b[type.replace("-", "")])
      );
    });
  if (totalObj.tenderSection && totalObj.tenderSection === "总计")
    leftTableData.value.unshift(totalObj);
}
/* 右表格排序事件 */
function rChoseLiftStatus(e) {
  if (!e.target.id) return;
  const type = e.target.id;
  rLiftStatus.value = type;
  if (!type.includes("-"))
    rightTableData.value.sort((a, b) => {
      return Number(b[type]) - Number(a[type]);
    });
  else
    rightTableData.value.sort((a, b) => {
      return (
        Number(a[type.replace("-", "")]) - Number(b[type.replace("-", "")])
      );
    });
  rightTableData.value.sort((a, b) => {
    if (b["itemPercent"] === a["itemPercent"])
      return Number(b["bidAmount"]) - Number(a["bidAmount"]);
  });
}
/* 进度条判断 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function yearAchieveColor(percentage) {
  if (percentage < 90) return "#FB487C";
  if (percentage >= 90 && percentage < 100) return "#FFA415";
  if (percentage >= 100) return "#70E622";
  return "#000";
}

init();
</script>

<style lang="scss" scoped>
:deep {
  .el-loading-mask {
    background-color: transparent;
  }

  .el-loading-spinner .circular {
    width: 3.125rem;
    height: 3.125rem;
  }
  // .year-input,
  // .month-input {
  //   width: 100%;
  //   height: 100%;
  //   font-size: 0.9375rem;
  //   padding-left: 0.7813rem !important;
  // }
  // .year-input,
  // .month-input {
  //   .choice-icon {
  //     color: #16d0ff;
  //     font-size: 0.9375rem;
  //     position: absolute;
  //     right: 0.5208rem;
  //   }
  // }
  .year-popover,
  .month-popover {
    left: unset !important;
  }

  .el-progress__text {
    display: none;
  }

  .el-progress-bar__outer {
    background-color: #000;
  }

  .el-progress-bar {
    box-sizing: content-box;
    width: 4.1667rem;
    padding-right: 0;
    padding-left: 0.5208rem;
  }
}

.achievement-container {
  height: inherit;
  padding: 1.5625rem;

  .tab-head {
    display: flex;
    flex-wrap: nowrap;
    margin-top: 0.2604rem;

    .tab {
      height: fit-content;
      padding: 0.5208rem 1.8229rem;
      font-size: 1.25rem;
      color: #fff;
      cursor: pointer;
      background: linear-gradient(0deg, #28a2ff 48%, #005a9f 80%, #2fa5ff 102%);
      background-size: 0.0521rem 4.9479rem;
      border: #2fa5ff solid 1px;
      border-radius: 0.0521rem;
      box-shadow: 0 0 0.1563rem #28a2ff;
      opacity: 0.5;
    }

    .active {
      opacity: 1;
    }

    .select-year-range,
    .select-month-range {
      height: inherit;
      padding-right: 0.7813rem;
      margin-left: 1.0417rem;
      border: 1px solid #19f5fe;
    }
  }

  .month-content {
    > div {
      width: 50% !important;
    }
  }

  .table-content {
    display: flex;
    flex-wrap: nowrap;
    height: inherit;
    margin-top: 2.0833rem;

    > div {
      height: calc(100% - 3.9063rem);
    }

    .left {
      width: 40%;
      background-color: rgb(0 108 255 / 10%);
    }

    .right {
      width: 58%;
      margin-left: 2%;
      background-color: rgb(0 108 255 / 10%);
    }

    .l-table-title,
    .r-table-title {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px 0;
      font-size: 1.25rem;
      color: #19f5fe;
      background-image: url("http://images.visfarm.com/crm/img/table-title-bg.png");
      background-size: cover;

      img {
        height: 0.7813rem;
        margin: 0 1.0417rem;
      }

      p {
        margin: 0;

        span {
          margin-left: 0.2604rem;
          font-size: 0.8333rem;
        }
      }
    }

    .l-table,
    .r-table {
      height: calc(100% - 2.8125rem);
      padding: 1.0417rem;
      overflow: hidden;
      font-size: 0.8333rem;
      color: #19f5fe;

      ::-webkit-scrollbar {
        width: 0.3rem;
        height: 0.3rem;
        background-color: rgb(0 0 0 / 0%) !important;
      }

      /* 定义滑块颜色、内阴影及圆角 */
      ::-webkit-scrollbar-thumb {
        height: 2.5rem;
        background-color: #0a2149;
        border-radius: 0.15rem;
      }

      /* 定义两端按钮的样式 */
      ::-webkit-scrollbar-button {
        display: none;
      }

      /* 滚动条的轨道 */
      ::-webkit-scrollbar-track {
        width: 0.5208rem;
        height: 0.5208rem;
        background-color: rgb(0 0 0 / 0%) !important;
        border: solid 0 rgb(202 202 202 / 30%);
        border-radius: 0.5208rem;
      }

      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.7813rem;
        margin: 0;
        list-style: none;

        li:first-child {
          width: 25%;
        }

        li:nth-child(2) {
          width: 25%;
        }

        li:nth-child(3) {
          width: 24%;
        }

        li:nth-child(4) {
          display: flex;
          flex-wrap: nowrap;
          width: 26%;
        }

        li span {
          display: inline-block;
          width: 3.125rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      .active-ui {
        background: linear-gradient(0deg, #28a2ff, #005a9f 56%, #2fa5ff);
        border: #2fa5ff solid 1px;
        box-shadow: 0 0 0.1563rem #28a2ff;
      }

      .table-head {
        height: 2.9167rem;
        background-color: rgba($color: #276888, $alpha: 20%);

        .ul-td {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          word-break: keep-all;
        }
      }

      .table-body {
        height: inherit;
        max-height: calc(100% - 2.2917rem);
        overflow: auto;
        color: #fff;

        .body-tr:nth-child(odd) {
          background-color: rgba($color: #276888, $alpha: 0%);
        }

        .body-tr:nth-child(even) {
          background-color: rgba($color: #276888, $alpha: 20%);
        }
      }

      .lifting-btn {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 0.2604rem;
        transform: translateY(-0.1042rem);

        .el-icon:first-child {
          height: 0.5208rem;
        }

        .el-icon {
          color: rgba($color: #19f5fe, $alpha: 20%);
          cursor: pointer;

          svg {
            pointer-events: none;
          }
        }

        .light-icon {
          color: #19f5fe !important;
        }

        i {
          width: 1.25rem !important;
          height: 1.25rem !important;

          &:first-child {
            transform: translateY(0.4167rem);
          }

          &:last-child {
            transform: translateY(-0.2083rem);
          }
        }
      }
    }

    .l-table .table-body ul {
      cursor: pointer;

      li {
        pointer-events: none;

        span {
          pointer-events: auto;
        }
      }
    }

    .r-table {
      ul {
        li:nth-child(1) {
          width: 5%;
        }

        li:nth-child(2) {
          width: 11%;
        }

        li:nth-child(3),
        li:nth-child(4),
        li:nth-child(6) {
          width: 13%;
        }

        li:nth-child(5) {
          width: 10%;
          min-width: 100px;
        }

        li:nth-child(7),
        li:nth-child(8) {
          display: flex;
          flex-wrap: nowrap;
          width: 16%;
        }

        li:nth-child(7) {
          margin-right: 1%;
        }
      }
    }

    .month-table {
      ul > li {
        width: 22.5% !important;
      }

      ul li:first-child {
        width: 10% !important;
      }

      ul li:last-child {
        display: flex;
        flex-wrap: nowrap;
      }
    }
  }
}
</style>
