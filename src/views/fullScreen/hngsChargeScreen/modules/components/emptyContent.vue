<template>
  <div class="empty-content">
    <img src="@/assets/fullScreen/hngsChargeScreen//empty.png" alt="" />
    <span>暂无数据</span>
  </div>
</template>

<style scoped lang="scss">
.empty-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0.8333rem 0.8333rem;
  font-size: 0.8333rem;
  background: linear-gradient(186deg, #fff 0%, #ade2ff 100%);
  border-radius: 0.2083rem;

  img {
    width: 5.2083rem;
    min-width: 100px;
    mask: linear-gradient(to top, transparent, black 39%);
  }

  span {
    color: rgba(#031114, 0.7);
    transform: translateY(-0.5rem);
  }
}
</style>
