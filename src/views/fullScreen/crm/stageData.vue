<template>
  <div class="bid-data-container">
    <div class="month-box">
      <MonthDate
        ref="monthDate"
        :bus-name="'getStageDataTime'"
        :choice-type="'monthRange'"
        class="month-range"
      />
    </div>
    <!--  -->
    <div class="data-box">
      <div
        v-for="(item, i) in dataList"
        :key="i"
        :class="{ 'empty-box': !item.show }"
        class="item-box"
      >
        <div class="data-item">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-num">{{ item.num }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MonthDate from "./components/monthDate.vue";
import { Bus } from "./components/bus";
const monthRange = ref([]);
const dataList = ref([
  {
    show: true,
    title: "年中标金额(亿)",
    num: 10,
    ratioList: [{ title: "年环比", val: "50%" }]
  },
  {
    show: true,
    title: "年中标率",
    num: 60,
    ratioList: [{ title: "年环比", val: "30%" }]
  },
  {
    show: true,
    title: "月中标金额(亿)",
    num: 10,
    ratioList: [
      { title: "月环比", val: "50%" },
      { title: "月同比", val: "30%" }
    ]
  },
  {
    show: true,
    title: "月中标率",
    num: 60,
    ratioList: [
      { title: "月环比", val: "50%" },
      { title: "月同比", val: "30%" }
    ]
  }
]);
Bus.on("getStageDataTime", data => {
  let bidAmountText = "月中标金额(亿)";
  let bidRatioText = "月中标率";
  let ringRatioText = "月环比";
  let sameRatioText = "月同比";
  if (data.useData.startTime !== data.useData.endTime) {
    monthRange.value = `${Number(
      data.useData.startTime.split("-")[1]
    )}-${Number(data.useData.endTime.split("-")[1])}月`;
    bidAmountText = `${monthRange.value}中标金额(亿)`;
    bidRatioText = `${monthRange.value}中标率`;
    ringRatioText = "季环比";
    sameRatioText = "季同比";
  }
  dataList.value[2].title = bidAmountText;
  dataList.value[3].title = bidRatioText;
  dataList.value[2].ratioList[0].title = ringRatioText;
  dataList.value[3].ratioList[0].title = ringRatioText;
  dataList.value[2].ratioList[1].title = sameRatioText;
  dataList.value[3].ratioList[1].title = sameRatioText;
});
</script>
<style lang="scss">
.month-range .month-popover {
  left: 2% !important;
}
</style>
<style lang="scss" scoped>
.bid-data-container {
  display: flex;
  flex-direction: column;

  .month-range {
    &::before {
      position: absolute;
      top: 1.5625rem;
      left: 1.6667rem;
      width: 300%;
      height: 100%;
      pointer-events: none;
      content: "";
      background: {
        image: url("http://images.visfarm.com/crm/img/title-bg.png");
        repeat: no-repeat;
      }
    }
  }

  .data-box {
    display: flex;
    flex-wrap: nowrap;
    margin-top: 1.5625rem;

    .item-box {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: calc((100% - 2.0417rem) / 4);
      height: 8.6979rem;
      background: linear-gradient(135deg, transparent 0.5208rem, #16d0fe 0) top
          left,
        linear-gradient(-135deg, transparent 0.5208rem, #16d0fe 0) top right,
        linear-gradient(-45deg, transparent 0.5208rem, #16d0fe 0) bottom right,
        linear-gradient(45deg, transparent 0.5208rem, #16d0fe 0) bottom left;
      background-repeat: no-repeat;
      background-size: 50% 50%;

      &:nth-child(2) {
        margin-right: 1.0417rem;
      }

      &::before,
      &::after {
        position: absolute;
        z-index: -1;
        width: 91%;
        height: 1rem;
        content: "";
        box-shadow: 0 0 0.7813rem #16d0fe;
      }

      &::before {
        top: 0;
      }

      &::after {
        bottom: 0.1042rem;
      }
    }

    .empty-box {
      display: none;
    }

    .data-item {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: calc(100% - 0.0625rem);
      height: 8.5938rem;
      padding: 1.3021rem 1.5625rem;
      background: linear-gradient(135deg, transparent 0.5208rem, #1c5f70 0) top
          left,
        linear-gradient(-135deg, transparent 0.5208rem, #1c5f70 0) top right,
        linear-gradient(-45deg, transparent 0.5208rem, #1c5f70 0) bottom right,
        linear-gradient(45deg, transparent 0.5208rem, #1c5f70 0) bottom left; /* 右上角 起点是透明 10px后具有颜色 填满剩余矩形 */

      background-repeat: no-repeat;
      background-size: 51% 51%;

      &:not(:last-child) {
        margin-right: 1.0417rem;
      }

      .item-title {
        font-size: 1.1458rem;
        color: #fff;
      }

      .item-num {
        margin: 1.0417rem 0 0.8854rem;
        font-size: 2.3958rem;
        color: #19f5fe;
      }

      .item-radios {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;

        .item-ratio_i {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          font-size: 0.7292rem;
          color: #fff;

          .item-rval {
            margin: 0 0.2604rem;
          }

          img {
            width: 0.7813rem;
            height: 0.7813rem;
          }
        }
      }
    }
  }
}
</style>
