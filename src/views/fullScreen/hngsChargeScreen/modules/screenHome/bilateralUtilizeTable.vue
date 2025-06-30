<script setup lang="ts">
import { inject, onMounted, ref } from "vue";
import * as screenData from "../screenData";
import Title from "../components/title.vue";
import EmptyContent from "../components/emptyContent.vue";

const tableList = ref<any>([]);
const loading = ref(true);
const openPlatform: Function | undefined = inject("openPlatform");

/* 初始化 */
async function init() {
  loading.value = false;
  const resData = screenData.sortBilateralServiceAreaByUtilizationDiffData;
  if (!resData) return;
  for (const item of resData) {
    item.list.sort((a: any, b: any) => -(b.way - a.way));
  }
  tableList.value = resData;
}

/* 通信平台，实现平台跳转 */
function handlePlatformTo() {
  if (openPlatform)
    openPlatform(
      true,
      "/StatisticalAnalysisReport/serviceAreaUtilizationAnalysis?date=nowMonth"
    );
}

onMounted(() => {
  init();
});
</script>

<template>
  <div
    class="bilateral-utilize-block module"
    title="跳转至服务区利用率分析"
    @click="handlePlatformTo"
  >
    <Title title="本月双边服务区利用率对比" />
    <div
      v-if="!loading && tableList[0]"
      class="bilateral-utilize-table content-bg"
    >
      <div class="legend">
        <div class="legend-item up-legend">
          <div class="icon up-station-color"></div>
          上行站场
        </div>
        <div class="legend-item down-legend">
          <div class="icon down-station-color"></div>
          下行站场
        </div>
      </div>
      <div class="table-content">
        <div v-for="(item, i) in tableList" :key="i" class="table-item">
          <div class="station-name" :title="item.name">{{ item.name }}</div>
          <ElTooltip
            effect="dark"
            placement="top"
            popper-class="info-tooltip"
            class="info-tooltip"
          >
            <template #content>
              <div class="tooltip-content">
                <div v-for="(barItem, barI) in item.list" :key="barI">
                  {{ barItem.name }}: {{ barItem.powerRate }}%
                </div>
              </div>
            </template>
            <div class="progress-box">
              <div class="progress-bar">
                <div
                  v-for="(barItem, barI) in item.list"
                  :key="barI"
                  class="progress-item"
                >
                  <div
                    :style="{
                      width: `${
                        Number(barItem.powerRate) > 0 &&
                        Number(barItem.powerRate) < 1
                          ? '1'
                          : Number(barItem.powerRate)
                      }%`
                    }"
                    :class="
                      barItem.way === 1
                        ? 'up-station-color'
                        : 'down-station-color'
                    "
                    class="item-bars"
                  ></div>
                </div>
              </div>
              <div class="progress-info">
                {{
                  `上行:${item.list[0].powerRate || "0.00"}% / 下行:${
                    item.list[1].powerRate || "0.00"
                  }%`
                }}
              </div>
            </div>
          </ElTooltip>
        </div>
      </div>
    </div>
    <div v-else-if="loading" class="loading">加载中，请稍等...</div>
    <EmptyContent v-else-if="!tableList[0]" class="empty-content" />
  </div>
</template>

<style scoped lang="scss">
:deep {
  .table-component {
    .td-0 {
      width: 80% !important;
    }

    .td-1 {
      width: 20% !important;
    }
  }

  .title-container {
    pointer-events: none;
  }
}

.bilateral-utilize-block {
  margin: 0.5208rem 0 0 !important;
  cursor: pointer;
}

.tooltip-content {
  font-size: 0.7292rem;
}

.up-station-color {
  background: linear-gradient(90deg, rgb(97 204 244 / 50%) 0%, #61ccf4 100%);
}

.down-station-color {
  background: linear-gradient(90deg, rgb(255 193 0 / 50%) 0%, #ffc100 100%);
}

.bilateral-utilize-table {
  display: flex;
  // height: calc(100% - 4.6875rem);
  flex: 1;
  flex-direction: column;
  margin: 0 0.8333rem 0.8333rem;
  overflow: auto;
  font-size: 0.8333rem;
  color: #031114;

  .legend,
  .legend-item {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }

  .legend {
    margin: 0.7813rem 0;

    .legend-item {
      margin-left: 2.0833rem;

      .icon {
        width: 0.8333rem;
        height: 0.8333rem;
        margin-right: 0.7813rem;
        border-radius: 50%;
      }
    }
  }

  .table-content {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0 0.8333rem;
    margin: 0 0.8333rem;
    overflow: auto;

    .table-item {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      margin-bottom: 1.35rem;

      .station-name {
        width: 30%;
        margin-right: 1.25rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .progress-box {
        display: flex;
        flex: 1;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        .progress-bar {
          display: flex;
          flex-direction: column;
          width: 30%;

          .progress-item {
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: space-between;
            font-size: 0.625rem;

            &:not(:last-child) {
              margin-bottom: 0.1042rem;
            }
          }

          .item-bars {
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            height: 0.3646rem;
            font-size: 0.7292rem;
            color: #fff;
            border-radius: 0 0.5208rem 0.5208rem 0;
          }
        }

        .progress-info {
          font-size: 0.625rem;
        }
      }
    }
  }
}
</style>
