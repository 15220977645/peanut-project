<template>
  <div class="box news-box">
    <HeadTitle name="营养比例金字塔" icon="TrophicPyramid-icon.svg" />
    <div class="pyramid-block">
      <div class="choice-age">
        <div
          v-for="i in 4"
          :key="i"
          :class="{ activeLevel: choseLevel === valueList[`ageGroup${i}`].age }"
          @click="handleCarousel(i)"
        >
          {{ valueList[`ageGroup${i}`].age }}
        </div>
      </div>
      <el-carousel
        ref="carousel"
        indicator-position="none"
        :interval="5000"
        @change="handleChoseLevel"
      >
        <el-carousel-item v-for="item in 4" :key="item">
          <div class="content">
            <div class="level">
              <!-- <div class="pyramid-title">{{ valueList[`ageGroup${item}`].age }}岁学龄儿童平衡膳食宝塔</div> -->
              <div class="level-block" @click="clickLevel">
                <div v-for="levelI in 6" :key="levelI" class="level-box">
                  <img
                    :id="levelI"
                    :src="requireImg(`fullScreen/foodSafe/level${levelI}.png`)"
                    :class="{ 'hover-level': hoverLevel === levelI }"
                    alt=""
                  />
                  <transition name="el-zoom-in-left">
                    <div
                      v-if="true"
                      class="right-value"
                      :class="{ 'active-level': levelI === hoverLevel }"
                    >
                      <div
                        v-for="(value, index) in trophicPyramidData[
                          `level${levelI}`
                        ]"
                        :key="index"
                        class="value"
                      >
                        <span> {{ value.name }}: </span>
                        <span>
                          {{ valueList[`ageGroup${item}`][levelI][index] }}
                        </span>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup>
import HeadTitle from "./headTitle.vue";
import { requireImg } from "@/utils/requireImg";
const hoverLevel = ref(null);
const choseLevel = ref("幼儿园");
// 金字塔数据模板
const trophicPyramidData = reactive({
  level1: [
    { name: "盐", value: "" },
    { name: "油", value: "" }
  ],
  level2: [
    { name: "大豆", value: "" },
    { name: "坚果", value: "" },
    { name: "奶及奶制品", value: "" }
  ],
  level3: [
    { name: "畜禽肉", value: "" },
    { name: "水产类", value: "" },
    { name: "蛋类", value: "" }
  ],
  level4: [
    { name: "蔬菜类", value: "" },
    { name: "水果类", value: "" }
  ],
  level5: [
    { name: "谷类", value: "" },
    { name: "薯类", value: "" }
  ],
  level6: [{ name: "水", value: "" }]
});
const carousel = ref();
const valueList = reactive({
  // 幼儿园
  ageGroup1: {
    age: "幼儿园",
    1: ["<3g/天", "20~25g/天"],
    2: ["15~20g/周", "适量", "350~500g/天"],
    3: ["50~75g/天", "25~30g/天", "50g/天"],
    4: ["150~300g/天", "150~250g/天"],
    5: ["100~150g", "适量"],
    6: ["700~800ml/天"]
  },
  // 6~10岁
  ageGroup2: {
    age: "1~3年级",
    1: ["<4g/天", "20-25g/天"],
    2: ["105g/周", "50g/周", "300g/天"],
    3: ["40g/天", "40g/天", "25~40g/天"],
    4: ["300g/天", "150~200g/天"],
    5: ["150~200g/天", "20~25g/天"],
    6: ["800~1000ml/天"]
  },
  // 11~13岁
  ageGroup3: {
    age: "4~6年级",
    1: ["<5g/天", "25~30g/天"],
    2: ["105g/周", "50~70g/周", "300g/天"],
    3: ["50g/天", "50g/天", "40~50g/天"],
    4: ["400~450g/天", "200~300g/天"],
    5: ["225~250g/天", "25~50g/天"],
    6: ["1100~1300ml/天"]
  },
  // 14~17岁
  ageGroup4: {
    age: "初中",
    1: ["<5g/天", "25~30g/天"],
    2: ["105~175g/周", "50~70g/周", "300g/天"],
    3: ["50~75g/天", "50~75g/天", "50g/天"],
    4: ["450~500g/天", "300~350g/天"],
    5: ["250~300g/天", "50~100g/天"],
    6: ["1200~1400ml/天"]
  }
});

/* 点击层级 */
function clickLevel(e) {
  const level = Number(e.target.id);
  hoverLevel.value = level === hoverLevel.value ? null : level;
}
/* 更换走马灯 */
function handleCarousel(i) {
  choseLevel.value = valueList[`ageGroup${i}`].age;
  carousel.value.setActiveItem(i - 1);
}
/* 处理年龄选择节点 */
function handleChoseLevel(i) {
  choseLevel.value = valueList[`ageGroup${i + 1}`].age;
}
</script>

<style lang="scss" scoped>
:deep {
  // .el-carousel__arrow{
  //   display: none;
  // }
  .el-carousel,
  .el-carousel__container {
    width: 100%;
    height: 100%;

    .el-carousel__arrow {
      width: 1.875rem;
      height: 1.875rem;
      font-size: 0.7292rem;
    }
  }
}

.news-box {
  padding-bottom: 0.7813rem;
}

.pyramid-block {
  position: relative;
  display: flex;
  height: calc(100% - 1.6666rem);
  font-size: 0.625rem;
  color: #aec9ff;
  background-color: rgba(#9cc4ff, 0.06);

  .choice-age {
    z-index: 3;

    div {
      width: 3.4375rem;
      min-width: max-content;
      padding: 0.4167rem 0.5208rem;
      margin-bottom: 0.5208rem;
      color: #95abde;
      text-align: center;
      cursor: pointer;
      background-color: rgba(#9cc4ff, 0.2);
      opacity: 0.3;
    }

    .activeLevel {
      opacity: 1;
    }

    .carousel-open {
      padding: 0.2083rem;
      font-size: 1.0417rem;
    }
  }

  .content {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    height: 100%;

    .level {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      margin-left: 0.625rem;

      .pyramid-title {
        position: relative;
        display: flex;
        align-items: center;
        margin-top: 0.5208rem;
        font-size: 0.6771rem;

        &::before {
          position: absolute;
          top: 50%;
          left: -1.0417rem;
          width: 0.5208rem;
          height: 0.5208rem;
          content: "";
          background-color: #5284ff;
          border: 0.1042rem #fff solid;
          border-radius: 50%;
          transform: translate(0, -50%);
        }
      }

      .level-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;

        .level-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          img {
            position: relative;
            width: 8.8542rem;
            cursor: pointer;
            transition: all 0.3s;

            &::after {
              position: absolute;
              top: 50%;
              right: 0.5208rem;
              width: 0.5208rem;
              height: 0.0521rem;
              content: "";
              background-color: #8ca2ff;
              transform: translate(0, -50%);
            }
          }

          .hover-level {
            z-index: 1;
            transform: scale(1.15);
          }

          &:not(:last-child) {
            margin-bottom: 0.3125rem;
          }

          .right-value {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: inherit;
            height: 100%;
            margin: 0 0.5rem;

            .value {
              display: flex;
              justify-content: space-between;
              letter-spacing: 0.0521rem;

              span:first-child {
                letter-spacing: 0.1042rem;
              }
            }
          }

          .active-level {
            color: #68e4ff;
          }
        }
      }
    }
  }
}

@media (device-width <= 100vw) and (device-height <= 100vh) {
  img {
    width: 10.9375rem !important;
  }
}
</style>
