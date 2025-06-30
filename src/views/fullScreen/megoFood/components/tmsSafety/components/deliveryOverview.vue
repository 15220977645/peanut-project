<template>
  <div class="overview-container">
    <div class="module-head">送达概况</div>
    <OverView :data="overViewData" />
  </div>
</template>

<script setup lang="ts">
import OverView from "../../OverView.vue";

const overViewData = ref([
  { label: "今日送达率", quantity: 20, unit: "%" },
  { label: "今日及时送达率", quantity: 10, unit: "%" },
  { label: "昨日送达率", quantity: 40, unit: "%" },
  { label: "昨日及时送达率", quantity: 30, unit: "%" }
]);
</script>
