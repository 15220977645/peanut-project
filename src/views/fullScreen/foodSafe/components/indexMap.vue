<template>
  <div class="box">
    <HeadTitle icon="LogisticsMap-icon.svg" name="易流云车辆信息看板" />
    <div class="info-block">
      <div class="yl-info-img">
        <img src="@/assets/fullScreen/foodSafe/ylyCatInfo1.png" alt="" />
        <div class="right-img">
          <img src="@/assets/fullScreen/foodSafe/ylyCatInfo2.png" alt="" />
          <img src="@/assets/fullScreen/foodSafe/ylyCatInfo3.png" alt="" />
        </div>
      </div>
      <div class="toYlPage">点击图片查看不同详情</div>
    </div>
  </div>
</template>

<script setup>
import HeadTitle from "./headTitle.vue";
</script>

<style lang="scss" scoped>
.info-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 1.5625rem);
  padding: 0.7813rem 0.7813rem 0;
  cursor: pointer;
  background-color: rgba(#9cc4ff, 0.06);

  .yl-info-img {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    width: 100%;
    height: 78%;

    img {
      height: 100%;
      transition: 0.3s all;
      object-fit: contain;

      &:hover {
        transform: scale(1.1);
      }
    }

    .right-img {
      display: flex;
      flex-direction: column;

      img {
        width: 7.2917rem;
        height: 50%;
        padding-left: 0.2604rem;
        object-fit: cover;

        &:not(:last-child) {
          padding-bottom: 0.2604rem;
        }
      }
    }
  }

  .toYlPage {
    display: flex;
    align-items: center;
    height: inherit;
    font-size: 0.8333rem;
    color: #aec9ff;
    text-align: center;
  }
}
</style>
