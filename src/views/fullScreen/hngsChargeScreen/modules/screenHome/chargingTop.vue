<script setup lang="ts">
import { inject, nextTick, ref, watch } from "vue";
import Title from "../components/title.vue";
import RankingList from "../components/rankingList.vue";
// import ScrollView from '../components/scrollView.vue';
import EmptyContent from "../components/emptyContent.vue";

const stationList: any = inject("stationList");
const openAnimation = ref(false);
const list = ref([]);
const loading = ref(true);
const openPlatform: Function | undefined = inject("openPlatform");

watch(stationList, async newVal => {
  loading.value = false;
  if (newVal[0]) {
    list.value = newVal.slice(0, 10);
    await nextTick();
    openAnimation.value = true;
  }
});

/* 通信平台，实现平台跳转 */
function handlePlatformTo() {
  if (openPlatform)
    openPlatform(
      true,
      "/StatisticalAnalysisReport/stationUtilizationAnalysis?date=nowMonth"
    );
}
</script>

<template>
  <div
    class="charging-top-container module"
    title="跳转至充电站利用率分析"
    @click="handlePlatformTo"
  >
    <Title title="本月充电站平均利用率排名"></Title>
    <!--    <ScrollView-->
    <!--      v-if="!loading"-->
    <!--      :open-animation="openAnimation"-->
    <!--      parent-dom="charging-top-container"-->
    <!--      class="scroll-charging"-->
    <!--    >-->
    <RankingList
      v-if="!loading && list[0]"
      :list="list"
      class="charging-rank content-bg"
      :click-fun="handlePlatformTo"
    ></RankingList>
    <!--    </ScrollView>-->
    <div v-else-if="loading" class="loading">加载中，请稍等...</div>
    <EmptyContent v-else-if="!list[0]" class="empty-content"></EmptyContent>
  </div>
</template>

<style lang="scss" scoped>
:deep(.title-container) {
  pointer-events: none;
}

.charging-top-container {
  cursor: pointer;
}

.scroll-charging,
.loading {
  flex: 1;
  // height: calc(100% - 4.6875rem);
  overflow: hidden;
}

.charging-rank {
  // height: calc(100% - 4.6875rem);
  flex: 1;
  margin: 0 0.8333rem 0.8333rem;
  overflow: auto;
}
</style>
