<template>
  <div class="container">
    {{ tip }}
  </div>
</template>

<script setup name="Other">
const tip = ref("敬请期待");
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
