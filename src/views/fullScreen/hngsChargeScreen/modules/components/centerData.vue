<script setup lang="ts">
import { inject, watch } from "vue";
import { handleSlideFont } from "./commonFun";

interface Props {
  list: any[];
  itemNumber: number;
  rateVisible?: boolean;
  stationChannelType?: number;
}
const props = defineProps<Props>();
const openPlatform: Function | undefined = inject("openPlatform");

watch(props.list, newVal => {
  if (newVal) handleSlideFont();
});

/* 通信平台，实现平台跳转 */
function handlePlatformTo(obj: any) {
  if (props.stationChannelType)
    obj.platformUrl = obj.platformUrl.includes("?")
      ? `${obj.platformUrl}&stationChannelType=${props.stationChannelType}`
      : `${obj.platformUrl}?stationChannelType=${props.stationChannelType}`;
  if (openPlatform && obj.platformUrl) openPlatform(true, obj.platformUrl);
}
</script>

<template>
  <div class="center-data">
    <template v-for="(item, i) in list">
      <div
        v-if="![false].includes(item.show) && !item.slot"
        :key="i"
        class="item"
        :class="`item-${itemNumber}`"
        :style="{ cursor: item.platformUrl ? 'pointer' : '' }"
        :title="item.platformTitle ? `跳转至${item.platformTitle}` : ''"
        @click="handlePlatformTo(item)"
      >
        <div class="title-unit">
          <div class="title" :title="item.title">{{ item.title }}</div>
          <div class="unit">({{ item.unit }})</div>
        </div>
        <div class="num">
          <div class="animation-font">
            <div class="animation-content">
              {{ item.num?.toLocaleString() }}
            </div>
          </div>
          <div v-if="item.offlineNumShow" class="r-b-text">
            含线下{{ item.offlineNum }}{{ item.unit }}
          </div>
          <div v-if="item.singleNumShow" class="r-b-text">
            +单边：{{ item.singleNum }}
          </div>
          <div v-if="item.encryptionStationShow" class="r-b-text">
            +{{ item.encryptionStationNum }}座加密站
          </div>
        </div>
        <template v-if="rateVisible">
          <div
            v-if="
              ['', null, undefined].includes(item.yearRateShow) ||
              item.yearRateShow
            "
            :class="[
              { 'red-down': item.yearRate && item.yearRate < 0 },
              { 'green-down': item.yearRate && item.yearRate > 0 }
            ]"
            class="rate"
          >
            <div class="rate-title">同口径环比</div>
            <span v-if="item.yearRate"
              >{{
                item.yearRate > 0 ? `+${item.yearRate}` : item.yearRate
              }}%</span
            >
            <span v-else>{{ item.yearRate === 0 ? "0%" : "-" }}</span>
          </div>
          <div
            :class="[
              { 'red-down': item.quarterRate && item.quarterRate < 0 },
              { 'green-down': item.quarterRate && item.quarterRate > 0 }
            ]"
            class="rate"
          >
            <div class="rate-title">环比</div>
            <span v-if="item.quarterRate"
              >{{
                item.quarterRate > 0
                  ? `+${item.quarterRate}`
                  : item.quarterRate
              }}%</span
            >
            <span v-else>{{ item.quarterRate === 0 ? "0%" : "-" }}</span>
          </div>
        </template>
      </div>
      <slot v-if="item.slot" :name="`item-${i}`" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.center-data {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;

  .item {
    padding: 0.7813rem;
    margin-bottom: 0.8333rem;
    background: linear-gradient(0deg, #ade2ff 0%, #fff 100%);
    border-radius: 0.2083rem;

    .title-unit {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;

      .title {
        font-size: 0.7292rem;
        color: #031114;
      }

      .unit {
        font-size: 0.5208rem;
        color: #031114;
      }
    }

    .num {
      display: flex;
      flex-wrap: nowrap;
      align-items: baseline;
      justify-content: space-between;
      overflow: hidden;
      overflow: auto;
      font-size: 1.75rem;
      font-weight: bold;
      color: #3a6cff;
      text-overflow: ellipsis;
      white-space: nowrap;

      .animation-font {
        flex: 1;
      }

      .r-b-text {
        margin-left: 0.2604rem;
        font-size: 0.7292rem;
        font-weight: normal;
      }
    }

    .rate {
      display: flex;
      flex-wrap: nowrap;
      align-items: baseline;
      justify-content: space-between;
      font-size: 0.7292rem;
      color: #031114;

      span:first-child {
        margin-left: 0.8333rem;
      }

      &:not(:last-child) {
        margin-top: 0.4167rem;
      }

      .rate-title {
        width: fit-content;
      }
    }

    .green-down {
      color: #20b881;
    }

    .red-down {
      color: #eb686a;
    }
  }

  .item-3 {
    width: calc(100% / 3 - 0.415rem);

    &:not(:nth-child(3n)) {
      margin-right: 0.6225rem;
    }
  }

  .item-4 {
    width: calc(25% - 0.4669rem);

    &:not(:nth-child(4n)) {
      margin-right: 0.6225rem;
    }
  }

  .item-5 {
    width: calc(20% - 0.498rem);

    &:not(:nth-child(5n)) {
      margin-right: 0.6225rem;
    }
  }
}
</style>
