<template>
  <div class="left-container">
    <div class="field-title">基础字段</div>
    <ul class="field-list" @click="addModule">
      <li v-for="item in formConfig.basicLiData" :id="item.key" :key="item.key">
        <img :src="requireImg(`svg/f-${item.iconType}.svg`)" alt="" />
        {{ item.text }}
      </li>
    </ul>
    <div class="field-title">增强字段</div>
    <ul class="field-list" @click="addModule">
      <li
        v-for="item in formConfig.enhanceLiData"
        :id="item.key"
        :key="item.key"
      >
        <img :src="requireImg(`svg/f-text.svg`)" alt="" />
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { Bus } from "./bus";
import { requireImg } from "@/utils/requireImg";
import formConfig from "../../components/formConfig";

/* 添加模块 */
function addModule(e) {
  if (!e.target.id) return;
  const type = Number(e.target.id);
  const moduleList = [...formConfig.basicLiData, ...formConfig.enhanceLiData];
  for (const item of moduleList) {
    if (item.key === type) {
      Bus.emit("addModule", item);
      break;
    }
  }
}
</script>
<style lang="scss" scoped>
.left-container {
  padding: 10px;
  font-size: 14px;

  .field-title {
    font-weight: bold;
  }

  .field-list {
    display: flex;
    flex-wrap: wrap;
    margin: 15px 0;

    & > li {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      width: calc(50% - 10px);
      padding: 10px 8px;
      margin-right: 10px;
      margin-bottom: 10px;
      text-align: center;
      cursor: pointer;
      border: 0.0521rem solid #e0e0e0;

      &:hover {
        border-color: #3a71a8;
      }

      img {
        width: 16px;
        height: 16px;
        margin-right: 5px;
        pointer-events: none;
      }
    }
  }
}
</style>
