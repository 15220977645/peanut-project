<template>
  <div class="signage-container">
    <div class="module-head">本月物流看板</div>
    <div class="signage-table">
      <ul class="table-header">
        <li>订单编号</li>
        <li>线路名称</li>
        <li>打卡人</li>
        <li>提交时间</li>
      </ul>
      <Vue3SeamlessScroll
        v-if="signageData[0]"
        v-model="animateUp"
        class="warp table-block"
        :list="signageData"
        hover
        :limitScrollNum="11"
        :step="0.3"
      >
        <ul v-for="(item, i) in signageData" :key="i" class="table-info">
          <li>{{ item.orderNo }}</li>
          <li>{{ item.rpName }}</li>
          <li>{{ item.driverName }}</li>
          <li>
            {{ item.submitTime?.split(" ")[0] }}<br />{{
              item.submitTime?.split(" ")[1]
            }}
          </li>
        </ul>
      </Vue3SeamlessScroll>
      <div v-else class="empty-box">
        <img src="/src/assets/fullScreen/megoFood/empty.svg?url" alt="" />
        <span>暂无数据</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";

interface orderType {
  orderNo: string;
  rpName: string;
  driverName: string;
  submitTime: string;
}

const signageData = ref<orderType[]>([]);
const animateUp = ref(true);

function initData() {
  let i = 0;
  while (i < 20) {
    signageData.value.push({
      orderNo: `DD${(Math.random() * 10000).toFixed(0)}-${(
        Math.random() * 1000000
      ).toFixed(0)}`,
      rpName: "*****供应商-*****客户",
      driverName: "李四",
      submitTime: "2023-11-12"
    });
    i++;
  }
}

initData();
</script>

<style lang="scss" scoped>
:deep {
  .table-block {
    overflow: hidden;

    & > div > div:last-child {
      border-top: 0.0521vw solid #062543;
    }
  }
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.signage-table {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  font-size: 0.7292vw;
  border-collapse: collapse;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;

    &:not(:last-child) {
      border-bottom: 0.0521vw solid #062543;
    }

    li {
      // white-space: nowrap;
      display: -webkit-box;
      padding: 0.55vw 0;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    li:first-child {
      width: 33.33%;
      min-width: 33.33%;
      padding-left: 0.7813vw;
    }

    li:nth-child(2) {
      width: 28.17%;
      min-width: 28.17%;
      padding: 0 0.7292vw;
    }

    li:nth-child(3) {
      width: 19%;
      padding: 0 0.7292vw;
    }

    li:nth-child(4) {
      width: 19.5%;
      min-width: fit-content;
      padding-right: 0.7813vw;
    }
  }

  .table-header {
    background-color: #093759;
    border-radius: 1.0417vw;

    li {
      word-break: keep-all;
    }

    li:nth-child(4) {
      padding-right: 1.8229vw;
    }
  }

  .table-block {
    overflow: hidden;
  }

  .table-info {
    display: flex;
    flex-wrap: nowrap;
  }
}
</style>
