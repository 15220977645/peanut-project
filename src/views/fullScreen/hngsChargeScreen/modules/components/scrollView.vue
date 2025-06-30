<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from "vue";

interface Props {
  parentDom: string;
  openAnimation: boolean;
}
const props = defineProps<Props>();

const timer = ref();
const scrollInfo = ref();
const scrollStatus = ref(false);
const showDom = ref();
const nextDomIndex = ref(1);
const scrollHeight = ref(0);
const screenWidth = ref(document.body.clientWidth);

/* 初始化动画 */
function initAnimation() {
  const scrollBlock = document.getElementsByClassName(props.parentDom)[0];
  showDom.value = scrollBlock.getElementsByClassName("scroll-block")[0];
  const showHeight = showDom.value?.offsetHeight;
  const scrollH = scrollInfo.value.offsetHeight;
  scrollHeight.value = scrollH;
  if (scrollH > showHeight) {
    setTimeout(() => {
      scrollStatus.value = true;
      timer.value = setInterval(scrollAnimate, 300);
    }, 2000);
  }
}
/* 鼠标控制动画 */
function mouseCtrlAnim(status: boolean) {
  scrollStatus.value = status;
}
/* 动画滚动 */
async function scrollAnimate() {
  if (scrollStatus.value) {
    await nextTick();
    const scrollDoms = showDom.value.getElementsByClassName("scroll-info")[0];
    const scrollList = scrollDoms?.children;
    const showHeight = showDom.value?.offsetHeight;
    if (showHeight - scrollHeight.value > scrollDoms?.offsetTop) {
      if (scrollList.length > 1) changeNextDomTop();
      else addSecondDom();
    }
    let top = scrollDoms?.offsetTop;
    top -= screenWidth.value * (10 / 1920);
    scrollDoms.style.top = `${top}px`;
  }
}
/* 添加第二节点 */
function addSecondDom() {
  const scrollDoms = showDom.value.getElementsByClassName("scroll-info")[0];
  const scrollFirst = scrollDoms.getElementsByClassName("scroll0")[0];
  const divClone = scrollFirst.cloneNode(true);
  scrollDoms.appendChild(divClone);
  const scrollSecond = scrollDoms.getElementsByClassName("scroll0")[1];
  scrollSecond.classList.add("scroll1");
  scrollSecond.classList.remove("scroll0");
  nextDomIndex.value = 0;
  scrollHeight.value = scrollFirst?.offsetHeight * 2;
}
/* 动态改变下一节点偏移量 */
function changeNextDomTop() {
  const i = nextDomIndex.value;
  const scrollDoms = showDom.value.getElementsByClassName("scroll-info")[0];
  const changDom = showDom.value.getElementsByClassName(`scroll${i}`)[0];
  const multiplePx =
    Math.round(Math.abs(scrollDoms?.offsetTop) / (changDom?.offsetHeight * 2)) *
    2;
  changDom.style.top = `${changDom?.offsetHeight * multiplePx}px`;
  nextDomIndex.value = Number(!i);
  scrollHeight.value += changDom?.offsetHeight;
}

watch(
  () => props.openAnimation,
  newVal => {
    if (newVal) initAnimation();
  }
);

onBeforeUnmount(() => {
  clearInterval(timer.value);
});
</script>

<template>
  <div class="container-block">
    <!-- 显示区 -->
    <div
      class="scroll-block"
      @mouseenter="mouseCtrlAnim(false)"
      @mouseout="mouseCtrlAnim(true)"
    >
      <!-- 滚动层 -->
      <div ref="scrollInfo" class="scroll-info">
        <!-- 包裹遍历节点 -->
        <div class="scroll0">
          <slot />
        </div>
        <!-- 第二组遍历节点：无限循环滑动 -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scroll-block {
  position: relative;
  height: 100%;
  overflow: hidden;

  .scroll-info {
    position: relative;
    top: 0;
    display: flex;
    flex-direction: column;
    transition: all 0.3s linear 0s;

    > div {
      position: relative;
      padding-bottom: 2.6042rem;
    }
  }

  div,
  span,
  img {
    pointer-events: none;
  }
}
</style>
