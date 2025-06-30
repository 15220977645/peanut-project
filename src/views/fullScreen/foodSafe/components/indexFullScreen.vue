<template>
  <div class="box fullScreen">
    <HeadTitle icon="FullScreen-icon.svg" name="监控视频" class="full-title" />
    <div v-if="foodMonitorList.length > 0" class="video">
      <ul>
        <li class="main-video">
          <video muted autoplay loop>
            <source
              src="https://www.runoob.com/try/demo_source/movie.mp4"
              type="video/mp4"
            />
          </video>
          <p>{{ foodMonitorList[0].name }}</p>
        </li>
        <div class="item-video">
          <li v-for="item in foodMonitorList.slice(1, 4)" :key="item.id">
            <video muted autoplay loop>
              <source
                src="https://www.runoob.com/try/demo_source/movie.mp4"
                type="video/mp4"
              />
            </video>
            <p>{{ item.name }}</p>
          </li>
        </div>
      </ul>
    </div>
    <div v-else class="empty-box">
      <EmptyData />
    </div>
  </div>
</template>

<script setup>
import HeadTitle from "./headTitle.vue";
import EmptyData from "./emptyData.vue";

const foodMonitorList = ref([
  {
    videoUrl: "http://47.106.100.245:8000/rtp/",
    name: "箱体存放区南",
    id: 85
  },
  {
    videoUrl: "http://47.106.100.245:8000/rtp/",
    name: "北边楼梯",
    id: 87
  },
  {
    videoUrl: "http://47.106.100.245:8000/rtp/",
    name: "蔬菜切配间西南",
    id: 88
  },
  {
    videoUrl: "http://47.106.100.245:8000/rtp/",
    name: "南参观通道东",
    id: 118
  }
]);
</script>

<style lang="scss" scoped>
.fullScreen {
  z-index: 1;
  width: 100%;
  margin: 0;
  color: #afe0fe;

  > div:not(.full-title) {
    background-color: rgba(#9cc4ff, 0.06);
  }

  .video {
    height: calc(100% - 1.6666rem);
  }

  ul {
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;

    li {
      position: relative;

      p {
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0;
        font-size: 0.625rem;
        color: #fff;
      }
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.4167rem;
    }

    .main-video {
      width: 75%;
      height: 100%;
      margin-right: 1%;

      p {
        padding: 0.2604rem 0.5208rem;
        background-color: #4e6bff;
        border-radius: 0 0.4167rem;
      }
    }

    .item-video {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 25%;

      li {
        height: 31%;
        margin-bottom: 1.5%;

        p {
          width: 100%;
          padding: 0.2604rem;
          text-align: center;
          background-color: rgba($color: #000, $alpha: 70%);
          border-radius: 0 0 0.4167rem 0.4167rem;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
