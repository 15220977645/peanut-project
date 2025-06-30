<template>
  <div class="center-data-container">
    <div v-for="(item, index) in variousData" :key="index" class="data-item">
      <div class="item-head">
        <img :src="item.icon" alt="" />
        <div class="item-name">{{ item.name }}</div>
      </div>
      <div class="item-num">
        <ReNormalCountTo
          :duration="3000"
          :color="'#aec9ff'"
          :fontSize="'2.8646rem'"
          :startVal="0"
          :endVal="item.num"
        />
        {{ item.unit }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ReNormalCountTo } from "@/components/ReCountTo";
import { requireImg } from "@/utils/requireImg";
const variousData = ref([
  {
    icon: requireImg("fullScreen/foodSafe/AllNumData-schools.svg"),
    name: "服务区县数",
    num: 0,
    unit: "个"
  },
  {
    icon: requireImg("fullScreen/foodSafe/AllNumData-schools.svg"),
    name: "服务学校数量",
    num: 0,
    unit: "所"
  },
  {
    icon: requireImg("fullScreen/foodSafe/AllNumData-students.svg"),
    name: "服务学生数量",
    num: 0,
    unit: "人"
  },
  {
    icon: requireImg("fullScreen/foodSafe/AllNumData-food.svg"),
    name: "食材供应数量",
    num: 0,
    unit: "斤"
  }
]);
const totalData = ref([]);

/* 初始化 */
async function init() {
  getNumData();
  totalData.value.forEach((item, index) => {
    variousData.value[index].num = item;
  });
}
/* 获取数据 */
async function getNumData() {
  totalData.value[0] = 1000000;
  totalData.value[1] = 2918181;
  totalData.value[2] = 51418;
  totalData.value[3] = 2138;
}

onMounted(() => {
  window.addEventListener("resize", async () => {
    variousData.value.forEach(item => {
      item.num = 0;
    });
    await nextTick();
    init();
  });
});

init();
</script>

<style lang="scss" scoped>
:deep {
  .el-loading-mask {
    background-color: transparent;
  }

  .number {
    margin-right: 0.5208rem;
    font-size: 2.8646rem;
    transform: translateY(0.4167rem);
  }
}

.center-data-container {
  display: flex;
  flex-wrap: wrap;

  .data-item:nth-child(-n + 4) {
    margin-bottom: 1.8229rem;
  }

  > div {
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
    // margin-bottom: 2rem;
    > div {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;

      img {
        width: 1.4583rem;
        height: 1.4583rem;
      }

      .item-name {
        margin-left: 0.6771rem;
        color: #fff;
        font: {
          size: 1.0417rem;
          weight: bold;
        }
      }
    }

    .item-num {
      align-items: flex-end;
      margin-top: 0.2604rem;
      margin-left: 2.1rem;
      font-size: 1.0417rem;
      color: #aec9ff;
    }
  }
}
</style>
