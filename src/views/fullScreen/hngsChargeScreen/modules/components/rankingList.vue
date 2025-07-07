<script setup lang="ts">
import { requireImg } from "@/utils/requireImg";

interface listType {
  rising: any;
  unit: string;
  name: string;
  scale: number | string;
}
interface Props {
  list: listType[];
  noBg?: boolean;
  itemRoute?: boolean;
  clickFun?: () => void;
}

const props = defineProps<Props>();

const emits = defineEmits(["handleClickItem"]);

/* 点击某一条 */
function handleClickItem(data: any) {
  emits("handleClickItem", data);
  if (props.clickFun) props.clickFun();
}

const barWidth = (num: any) => {
  const number = Number(num);
  if (number < 1 && number > 0) return 1;
  if (number > 100) return 100;
  return number;
};
</script>

<template>
  <div class="ranking-container">
    <div
      v-for="(item, i) in list"
      :key="i"
      :title="itemRoute ? `跳转至相关数据明细` : ''"
      class="item"
      @click.stop="handleClickItem(item)"
    >
      <div class="rank-info">
        <div class="no-title" :class="[i < 3 ? `no-${i}` : '']">
          No.{{ i + 1 }}
        </div>
        <div class="name" :title="item.name">{{ item.name }}</div>
        <div class="value-bg">
          <div
            :style="{ width: `${barWidth(item.scale)}%` }"
            class="value-bar"
          ></div>
          <img src="" alt="" />
        </div>
        <div
          v-if="item.unit"
          class="num unit animation-font"
          :class="{ 'no-bg': noBg }"
        >
          <div class="animation-content">{{ item.unit }}</div>
        </div>
        <div v-else class="num">{{ item.scale }}%</div>
        <div v-if="item.rising || item.rising === 0" class="ranking">
          <div :class="{ 'red-down': item.rising < 0 }">
            {{ item.rising >= 0 ? `+${item.rising || 0}` : item.rising }}
          </div>
          <img
            :src="
              item.rising >= 0
                ? requireImg('fullScreen/hngsChargeScreen/ranking-up.svg')
                : requireImg('fullScreen/hngsChargeScreen/ranking-down.svg')
            "
            class="ranking-icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ranking-container {
  display: flex;
  flex-direction: column;

  .item {
    display: flex;
    flex-wrap: nowrap;

    .rank-info {
      display: flex;
      flex: 1;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    &:not(:last-child) {
      margin-bottom: 1.35rem;
    }

    .no-title {
      position: relative;
      width: 13%;
      padding: 0.2rem 0.4rem;
      font-size: 0.63rem;
      color: #031114;
      text-align: center;
      background: rgba(#3a6cff, 0.3);
      border-radius: 0.1rem;

      &::before {
        position: absolute;
        top: 20%;
        left: 0;
        width: 0.1rem;
        min-width: 2px;
        height: 60%;
        content: "";
        background: #3a6cff;
      }
    }

    .no-0 {
      background-color: rgba(#f9ce37, 0.3);

      &::before {
        background-color: #f9ce37;
      }
    }

    .no-1 {
      background-color: rgba(#54ddff, 0.3);

      &::before {
        background-color: #54ddff;
      }
    }

    .name {
      width: 25%;
      margin: 0 3.5%;
      overflow: hidden;
      font-size: 0.8333rem;
      color: #031114;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .value-bg {
      flex: 1;
      height: 0.63rem;

      .value-bar {
        position: relative;
        height: 100%;
        // background: linear-gradient(270deg, #77ceff 0%, rgba(0, 124, 141, 0) 100%);
        background: linear-gradient(
          90deg,
          rgb(29 99 185 / 50%) 0%,
          #1958ab 100%
        );
        border-radius: 0 0.31rem 0.31rem 0;
        // &::after {
        //   content: '';
        //   width: 1.25rem;
        //   height: 1.25rem;
        //   position: absolute;
        //   right: -0.625rem;
        //   top: -50%;
        //   background-image: url('@/assets/fullScreen/hngsChargeScreen/rank-icon.png');
        //   background-size: cover;
        // }
      }
    }

    .num {
      // margin-left: 4%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16%;
      padding: 0.1rem 0.42rem;
      font-size: 0.73rem;
      color: #3a6cff;
    }

    .unit {
      width: 15%;
      overflow: hidden;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .no-bg {
      background-image: none !important;
    }

    .ranking {
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-end;
      width: 8%;
      font-size: 0.8333rem;
      color: #20b881;
    }

    .red-down {
      color: #eb686a;
    }

    .ranking-icon {
      width: 0.2083rem;
      margin-left: 0.1563rem;
      object-fit: contain;
    }
  }
}
</style>
