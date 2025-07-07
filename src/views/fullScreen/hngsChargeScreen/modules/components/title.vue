<script setup lang="ts">
import { inject, onMounted, ref } from "vue";

const fullScreenDom = ref();

interface Props {
  title: string;
  path?: {
    label: string;
    path: string;
  };
}

const openPlatform: Function | undefined = inject("openPlatform");
const props = defineProps<Props>();

/* 通信平台，实现平台跳转 */
function handlePlatformTo() {
  if (openPlatform && props.path?.path) openPlatform(true, props.path?.path);
}

onMounted(() => {
  fullScreenDom.value = document.getElementById("fullScreenDom");
});
</script>

<template>
  <div
    class="title-container"
    :title="path?.path ? `跳转至${path?.label}` : ''"
    @click="handlePlatformTo"
  >
    <div class="l" :style="{ cursor: path ? 'pointer' : 'default' }">
      <!-- <img src="@/assets/fullScreen/hngsChargeScreen//title-l-icon.svg" alt="" /> -->
      <span class="light-font">{{ title }}</span>
    </div>
    <img
      class="r-img"
      src="@/assets/fullScreen/hngsChargeScreen/title-r-icon.svg?url"
      alt=""
    />
  </div>
</template>

<style lang="scss" scoped>
.light-font {
  font-size: 1.2rem;
  font-weight: bold;
  color: transparent;
  text-align: center;
  background: linear-gradient(180deg, #fff 35%, #2db3ff 100%);
  background-clip: text;
}

.title-container {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.7813rem;
  margin-bottom: 0.7813rem;
  background-image: url("@/assets/fullScreen/hngsChargeScreen/title-bg.svg");
  background-repeat: no-repeat;
  background-position-y: -0.2604rem;
  background-size: 100% 100%;

  .l {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-left: 3.6458rem;

    img {
      width: 1.6rem;
    }
  }

  .r-img {
    position: absolute;
    top: 50%;
    right: 0.5208rem;
    width: 3.65rem;
    transform: translateY(-50%);
  }

  .r-more-icon {
    top: 44%;
    right: 0.1042rem;
    width: 2.6042rem;
    cursor: pointer;
  }
}
</style>
