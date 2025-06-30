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
  max-width: calc(100% - 30px);
}
</style>
