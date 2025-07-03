<template>
  <div class="flex overview">
    <img
      class="border-img upper-left"
      src="@/assets/fullScreen/megoFood/upper-left.png"
    />
    <img
      class="border-img upper-right"
      src="@/assets/fullScreen/megoFood/upper-right.png"
    />
    <img
      class="border-img lower-left"
      src="@/assets/fullScreen/megoFood/lower-left.png"
    />
    <img
      class="border-img lower-right"
      src="@/assets/fullScreen/megoFood/lower-right.png"
    />
    <div
      :class="['flex', 'view-item', 'view-item' + index]"
      v-for="(item, index) in props.data"
      :key="index"
    >
      <img
        class="assets"
        :src="requireImg(`fullScreen/megoFood/overview-1.png`)"
      />
      <div class="flex-column text">
        <div class="label">{{ item.label }}</div>
        <div>
          <span class="quantity">{{ item.quantity }}</span>
          <span class="unit">
            {{ item.unit }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { requireImg } from "@/utils/requireImg";
console.log(requireImg(`fullScreen/megoFood/overview-1.png`));
const props = defineProps(["data"]);
</script>

<style scoped lang="scss">
.overview {
  position: relative;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 0 0.8333rem;
  border: 0.0521rem solid #062543;

  .view-item {
    box-sizing: border-box;
    flex: 0 0 50%;
  }

  .view-item0,
  .view-item1 {
    padding-bottom: 0.6771rem;
    margin-top: 0.6771rem;
    border-bottom: 0.0521rem solid #062543;
  }

  .view-item0,
  .view-item2 {
    border-right: 0.0521rem solid #062543;
  }

  .view-item2,
  .view-item3 {
    padding-top: 0.6771rem;
  }

  .view-item1,
  .view-item3 {
    padding-left: 0.8333rem;
  }
}

// .view-item2,
// .view-item3 {
// 	padding-top: 0.4688rem;
// }
.border-img {
  position: absolute;
  width: 0.7813rem;
  height: 0.7813rem;
}

.upper-left {
  top: -0.0521rem;
  left: -0.0521rem;
}

.upper-right {
  top: -0.0521rem;
  right: -0.0521rem;
}

.lower-left {
  bottom: -0.0521rem;
  left: -0.0521rem;
}

.lower-right {
  right: -0.0521rem;
  bottom: -0.0521rem;
}

.text {
  margin-left: 0.625rem;
}

.assets {
  width: 3.0208rem;
  height: 2.9167rem;
}

.label {
  font-size: 0.6771rem;
  color: #84a5c4;
  white-space: nowrap;
}

.quantity {
  font-size: 1.8229rem;
  line-height: 2.7604rem;
  color: #afe0fe;
}

.unit {
  font-size: 0.7292rem;
  color: #84a5c4;
}
</style>
