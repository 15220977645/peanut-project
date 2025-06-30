<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import Map from "./map.vue";

type point = {
  lon: number;
  lat: number;
  name: string;
  [unknown: string]: any;
};

interface Props {
  pointData: {
    redStation: point[];
    yellowStation: point[];
    blueStation: point[];
  };
  visible: boolean;
  textList: string[];
  mapDomId: string;
  numIcon?: boolean;
  pointInfoFactory?: (...args: any) => string;
}
const mapDialogRef = ref<any>(null);
const emit = defineEmits(["closeMapDialog"]);
const props = defineProps<Props>();
const dialogVisible = ref(false);
const fullScreenDom = ref();
watch(
  () => props.visible,
  val => {
    dialogVisible.value = val;
  },
  { deep: true }
);
onMounted(() => {
  fullScreenDom.value = document.getElementById("fullScreenDom");
});

/* 关闭弹窗 */
function closeDialog() {
  emit("closeMapDialog");
}
</script>

<template>
  <div class="map-dialog-block">
    <ElDialog
      v-model="dialogVisible"
      width="80vw"
      top="5vh"
      :append-to="fullScreenDom"
      destroy-on-close
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      class="map-dialog"
    >
      <div ref="mapDialogRef" class="dialog-map-content">
        <div class="close-icon" title="关闭全屏" @click="closeDialog">
          <img
            :src="'src/assets/fullScreen/hngsChargeScreen/close.svg'"
            alt=""
          />
        </div>
        <Map
          :selTypeChn="''"
          :point-data="pointData"
          :text-list="textList"
          :map-dom-id="`dialog-${mapDomId}`"
          :num-icon="numIcon"
          :parent-dom="mapDialogRef"
          :point-info-factory="pointInfoFactory"
        />
      </div>
    </ElDialog>
  </div>
</template>

<style scoped lang="scss">
:deep {
  .el-dialog__header {
    display: none;
  }

  .legend {
    bottom: 3%;
  }
}

.close-icon {
  position: absolute;
  top: 1.0417rem;
  right: 1.0417rem;
  z-index: 1;
  width: 1.5625rem;
  cursor: pointer;
}

.dialog-map-content {
  position: relative;
  height: 85vh;
  padding: 1.5625rem;
}
</style>
