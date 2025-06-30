<template>
  <div class="empty-container">
    <img
      :src="requireImg('fullScreen/foodSafe/empty-data.svg')"
      alt="暂无数据"
    />
    <span>暂无内容，敬请期待</span>
  </div>
</template>

<script setup>
import { requireImg } from "@/utils/requireImg";
</script>

<style lang="scss" scoped>
.empty-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 5rem;
    height: 3rem;
  }

  span {
    margin-top: 0.7rem;
    font-size: 0.8rem;
    color: #7e92bc;
  }
}
</style>
