<script setup lang="ts">
import { inject, watch } from "vue";
import { handleSlideFont } from "../components/commonFun";
import Title from "../components/title.vue";
import { requireImg } from "@/utils/requireImg";

interface Props {
  list: any[];
}

const openPlatform: Function | undefined = inject("openPlatform");
const props = defineProps<Props>();

/* 通信平台，实现平台跳转 */
function handlePlatformTo(obj: any) {
  if (openPlatform && obj.platformUrl) openPlatform(true, obj.platformUrl);
}

watch(
  props.list,
  newVal => {
    if (newVal) {
      handleSlideFont();
    }
  },
  { immediate: true, deep: true }
);
</script>

<template>
  <div class="manage-data-container module">
    <Title title="今日核心经营数据"></Title>
    <div class="content">
      <div
        v-for="(item, i) in list"
        :key="i"
        class="item content-bg"
        :class="`item-${i}`"
        :title="`跳转至${item.platformTitle}`"
        @click="handlePlatformTo(item)"
      >
        <img :src="requireImg(item.img)" class="img" />
        <div class="info">
          <div class="name">{{ item.name }}（{{ item.unit }}）</div>
          <div class="num animation-font">
            <div class="animation-content">
              {{ item.num?.toLocaleString() }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.manage-data-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content {
  position: relative;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  padding: 0 0.8333rem;
  overflow: auto;

  & > div {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    width: calc(50% - 0.315rem);
    margin-bottom: 0.8333rem;
    cursor: pointer;

    img {
      width: 2.6042rem;
      margin: 0 0.8333rem;
      object-fit: contain;
    }

    .info {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
    }

    .name {
      font-size: 0.625rem;
      color: #031114;
      word-break: keep-all;
    }

    .num {
      font-size: 1.67rem;
      font-weight: bold;
      color: #3a6cff;
    }

    &:nth-child(even) {
      margin-right: 0.63rem;
    }
  }

  .item-0 {
    width: 100%;

    .num {
      font-size: 1.87rem;
    }

    img {
      width: 4.1667rem;
      margin-right: 1rem;
    }
  }
}
</style>
