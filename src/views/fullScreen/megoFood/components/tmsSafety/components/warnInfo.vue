<template>
  <div class="warn-container">
    <div class="module-head">
      当前预警信息<span>（{{ warnNum }}条）</span>
    </div>
    <div class="warn-table">
      <ul class="table-header">
        <li>组织</li>
        <li>运单</li>
        <li>客户</li>
        <li>车辆</li>
        <li>司机</li>
      </ul>
      <Vue3SeamlessScroll
        v-if="warnInfoData[0]"
        v-model="animateUp"
        class="warp table-block"
        :list="warnInfoData"
        hover
        :limitScrollNum="20"
        :step="0.3"
      >
        <ul v-for="(item, i) in warnInfoData" :key="i" class="table-info">
          <li>{{ item.unitName }}</li>
          <li>{{ item.trackingNumber }}</li>
          <li>{{ item.cusName }}</li>
          <li>{{ item.carNo }}</li>
          <li>{{ item.driverName }}</li>
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
// import { PropType } from "vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";

type warnType = {
  unitName: string;
  trackingNumber: string;
  cusName: string;
  carNo: string;
  driverName: string;
};

const warnInfoData = ref<warnType[]>([]);
const warnNum = ref(25);
const animateUp = ref(true);

function initData() {
  let i = 0;
  while (i < warnNum.value) {
    warnInfoData.value.push({
      unitName: "*******有限公司",
      trackingNumber: `YD${(Math.random() * 10000).toFixed(0)}-${(
        Math.random() * 100000000
      ).toFixed(0)}`,
      cusName: "****供应商",
      carNo: "粤X88888",
      driverName: "张三"
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
}

.module-head span {
  color: #fd487d;
}

.warn-table {
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
      width: 25%;
      min-width: 25%;
      padding: 0.55vw 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    li:first-child {
      padding-left: 0.7813vw;
    }

    li:nth-child(4),
    li:nth-child(5) {
      width: 10%;
      min-width: 10%;
    }
  }

  .table-header {
    background-color: #093759;
    border-radius: 1.0417vw;

    li {
      word-break: keep-all;
    }
  }

  .table-info {
    display: flex;
    flex-wrap: nowrap;

    li:nth-child(4) {
      color: #fd487d;
    }
  }
}
</style>
