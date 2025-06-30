<template>
  <div class="subTitle">
    <div class="left">
      <img class="icon" :src="iconSrc" alt="" />
      {{ name }}
    </div>
  </div>
</template>

<script setup>
import { requireImg } from "@/utils/requireImg";
const props = defineProps({
  icon: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  moreName: {
    type: String,
    default: "更多"
  },
  morePath: {
    type: String,
    default: null
  },
  pathQuery: {
    type: Object,
    default: () => {}
  }
});

const iconSrc = ref(requireImg(`fullScreen/foodSafe/${props.icon}`));
</script>

<style lang="scss" scoped>
.subTitle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8333rem;
  font-size: 0.8333rem;
  font-weight: 500;
  color: rgb(175 224 254 / 100%);

  &.mb {
    margin-bottom: 0;
  }

  .left {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    color: #fff;

    &::after {
      position: absolute;
      top: -1.5625rem;
      left: -3.75rem;
      z-index: -1;
      width: 15.6875rem;
      padding-bottom: 5.5rem;
      pointer-events: none;
      content: "";
      background: {
        image: url("@/assets/fullScreen/foodSafe/title-light.png");
        repeat: no-repeat;
        size: contain;
      }
    }

    .icon {
      width: 0.9375rem;
      height: 0.9375rem;
      margin-right: 0.5208rem;
    }
  }

  .more {
    display: flex;
    align-items: center;
    font-size: 0.625rem;
    cursor: pointer;

    span {
      margin-right: 0.5208rem;
      color: #aec9ff;
      pointer-events: none;
      opacity: 0.8;
    }

    img {
      height: 0.5208rem;
    }

    &:hover {
      span {
        opacity: 1;
      }
    }
  }
}
</style>
