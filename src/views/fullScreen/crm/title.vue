<template>
  <div class="title-container">
    {{ name }}
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: ""
  }
});
</script>

<style lang="scss" scoped>
.title-container {
  display: flex;
  align-items: center;
  height: 2.3958rem;
  padding-left: 1.3021rem;
  color: #19f5fe;
  font: {
    size: 1.3542rem;
    family: pingfang sc;
    weight: 500;
  }
  background: {
    image: url("http://images.visfarm.com/crm/img/title-bg.png");
    size: cover;
    repeat: no-repeat;
  }
}
</style>
