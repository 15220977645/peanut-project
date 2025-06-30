<template>
  <div class="container">
    <!-- 左边 -->
    <div class="content-left">
      <ContentLeft />
    </div>
    <!-- 主体 -->
    <div class="content-main">
      <ContentMain />
    </div>
    <!-- 右边 -->
    <div class="content-right">
      <ContentRight />
    </div>
  </div>
</template>
<script setup name="FormEdit">
import ContentLeft from "./components/contentLeft.vue";
import ContentMain from "./components/contentMain.vue";
import ContentRight from "./components/contentRight.vue";
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: nowrap;
  width: calc(100% - 30px);
  max-width: unset !important;
  height: calc(100vh - 116px);
  margin: 15px;
  background-color: #fff;

  .content-left {
    flex: 0 0 13.0208rem;
    min-width: 250px;
    overflow: auto;
  }

  .content-main {
    flex: 1;
    border-right: 0.0521rem solid #e0e0e0;
    border-left: 0.0521rem solid #e0e0e0;
  }

  .content-right {
    flex: 0 0 15.625rem;
    min-width: 300px;
    overflow: auto;
  }
}
</style>
