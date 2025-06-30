<template>
  <div class="box news-box">
    <Title :name="titleName" />
    <!-- 显示区 -->
    <div
      v-if="noticeInfo.length > 0"
      class="notice-block"
      @mouseenter="mouseCtrlAnim(false)"
      @mouseout="mouseCtrlAnim(true)"
    >
      <!-- 滚动层 -->
      <div class="scroll-notice">
        <!-- 包裹遍历节点、 -->
        <div class="scroll0">
          <div v-for="(item, index) in noticeInfo" :key="index">
            <!-- 判断每组信息是否需要显示 -->
            <div
              v-if="item.fileList.length > 0 || item.richText !== ''"
              class="notice-info"
            >
              <!-- <div class="info-head">
                <div><span class="point" />{{ item.title }}</div>
                <div>{{ item.publishTime }}</div>
              </div> -->
              <div class="info-content">
                <div class="imgs">
                  <img
                    v-for="(imgs, iIndex) in item.fileList"
                    :key="iIndex"
                    :src="imgs.url"
                    alt=""
                  />
                </div>
                <div class="rich-text" v-html="item.content" />
              </div>
            </div>
          </div>
        </div>
        <!-- 第二组遍历节点：无限循环滑动 -->
      </div>
    </div>
    <div v-else class="empty-box">
      <emptyData />
    </div>
  </div>
</template>

<script setup>
import Title from "./title.vue";
import emptyData from "./emptyData.vue";

const noticeInfo = ref([]);
const titleName = ref("公告展示");
const timer = ref(null);
const scrollStatus = ref(false);
const showDom = ref(null);
const nextDomIndex = ref(0);
const scrollHeight = ref(0);

/* 初始化 */
async function init() {
  if (noticeInfo.value[0]) {
    handlerDevelopInfo();
    initAnimation();
  }
}
/* 初始化动画 */
function initAnimation() {
  const newsBoxDom = document.getElementsByClassName("news-box")[0];
  showDom.value = newsBoxDom.getElementsByClassName("notice-block")[0];
  const showHeight = showDom.value.offsetHeight;
  scrollHeight.value =
    newsBoxDom.getElementsByClassName("scroll-notice")[0].offsetHeight;
  if (scrollHeight.value > showHeight) {
    setTimeout(() => {
      scrollStatus.value = true;
      timer.value = setInterval(scrollAnimate, 300);
    }, 2000);
  }
}
/* 处理为显示数据 */
function handlerDevelopInfo() {
  noticeInfo.value.forEach(item => {
    const fileList = [];
    if (item.content) {
      item.content = item.content.replace(
        /<img [^>]*src=['"]([^'"]+)[^>]*>/g,
        function (match, capture) {
          fileList.push({ url: capture });
          return "";
        }
      );
    }
    item.fileList = fileList;
  });
}
/* 鼠标控制动画 */
function mouseCtrlAnim(status) {
  scrollStatus.value = status;
}
/* 动画滚动 */
async function scrollAnimate() {
  if (scrollStatus.value) {
    await nextTick();
    const scrollDoms = showDom.value.getElementsByClassName("scroll-notice")[0];
    const scrollList = scrollDoms.children;
    const showHeight = showDom.value.offsetHeight;
    if (showHeight - scrollHeight.value > scrollDoms.offsetTop) {
      if (scrollList.length > 1) changeNextDomTop();
      else addSecondDom();
    }
    let top = scrollDoms.offsetTop;
    top = top - 10;
    scrollDoms.style.top = `${top}px`;
  }
}
/* 添加第二节点 */
function addSecondDom() {
  const scrollDoms = showDom.value.getElementsByClassName("scroll-notice")[0];
  const scrollFirst = scrollDoms.getElementsByClassName("scroll0")[0];
  const divClone = scrollFirst.cloneNode(true);
  scrollDoms.appendChild(divClone);
  const scrollSecond = scrollDoms.getElementsByClassName("scroll0")[1];
  scrollSecond.classList.add("scroll1");
  scrollSecond.classList.remove("scroll0");
  nextDomIndex.value = 0;
  scrollHeight.value = scrollFirst.offsetHeight * 2;
}
/* 动态改变下一节点偏移量 */
function changeNextDomTop() {
  const i = nextDomIndex.value;
  const scrollDoms = showDom.value.getElementsByClassName("scroll-notice")[0];
  const changDom = showDom.value.getElementsByClassName(`scroll${i}`)[0];
  const multiplePx =
    Math.round(Math.abs(scrollDoms.offsetTop) / (changDom.offsetHeight * 2)) *
    2;
  changDom.style.top = `${changDom.offsetHeight * multiplePx}px`;
  nextDomIndex.value = Number(!i);
  scrollHeight.value = scrollHeight.value + changDom.offsetHeight;
}

onMounted(() => {
  init();
});

onBeforeUnmount(() => {
  clearInterval(timer.value);
});
</script>

<style lang="scss" scoped>
:deep {
  h1 {
    line-height: 2rem;
  }
}

.notice-block {
  position: relative;
  height: calc(100% - 2.2917rem);
  padding: 0 1.3021rem;
  overflow: hidden;
  line-height: 1.2rem;
  background-color: rgb(0 108 255 / 8%);

  .scroll-notice {
    position: relative;
    top: 0;
    display: flex;
    flex-direction: column;
    transition: all 0.3s linear 0s;

    > div {
      position: relative;
      padding-bottom: 5.2083rem;
    }
  }

  div,
  span,
  img {
    pointer-events: none;
  }

  .notice-info {
    display: flex;
    flex-direction: column;
    // .info-head{
    //   display: flex;
    //   flex-wrap: nowrap;
    //   justify-content: space-between;
    //   color: #fff;
    //   font-size: .7292rem;
    //   background-color: rgba($color: #4E6BFF, $alpha: .1);
    //   padding: .7813rem;
    //   border-radius: .4167rem;
    //   margin-bottom: 1rem;
    //   .point{
    //     display: inline-block;
    //     width: .3646rem;
    //     height: .3646rem;
    //     border-radius: 50%;
    //     background-color: #fff;
    //     margin-right: .5208rem;
    //   }
    // }
    .info-content {
      display: flex;
      flex-direction: column;
      font-size: 0.7292rem;

      .imgs {
        position: relative;
        display: flex;
        flex-wrap: wrap;

        img {
          width: calc((100% - 3%) / 4);
          height: auto;
          margin-bottom: 1%;

          &:not(:nth-child(4n)) {
            margin-right: 1%;
          }
        }
      }

      .rich-text {
        color: #fff;
      }
    }
  }
}
</style>
