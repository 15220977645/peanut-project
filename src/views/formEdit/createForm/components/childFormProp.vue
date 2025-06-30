<template>
  <div class="child-prop-container">
    <el-table :data="formList" class="child-attributes-table">
      <el-table-column label="字段">
        <template v-slot="{ row, $index }">
          <el-select
            v-model="row.key"
            filterable
            @change="val => handleChangeChild(val, row, $index)"
          >
            <el-option
              v-for="(item, i) in formProp"
              :key="i"
              :label="item.text"
              :value="item.key"
            />
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="150px">
        <template v-slot="{ $index }">
          <div class="child-control">
            <el-button
              v-show="$index !== formList.length - 1"
              :icon="SortDown"
              circle
              size="small"
              title="下移"
              @click="changeOrder($index, 'down')"
            />
            <el-button
              v-show="$index !== 0"
              :icon="SortUp"
              circle
              size="small"
              title="上移"
              @click="changeOrder($index, 'up')"
            />
            <el-button
              :icon="Setting"
              circle
              size="small"
              title="设置"
              @click="setProp($index)"
            />
            <el-button
              :icon="Delete"
              type="danger"
              circle
              size="small"
              title="上移"
              @click="delProp($index)"
            />
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-button size="small" type="primary" @click="addChildProp"
      >+ 添加字段</el-button
    >
  </div>
</template>
<script setup>
import formConfig from "../../components/formConfig.ts";
import { SortDown, SortUp, Setting, Delete } from "@element-plus/icons-vue";
import { Bus } from "./bus";

const props = defineProps({
  propIndex: {
    type: Number,
    default: null
  },
  propList: {
    type: Array,
    default: () => []
  }
});

const emits = defineEmits(["handleChangeChild"]);
const formList = ref([]);
const formProp = ref([
  { key: 0, text: "单行文本" },
  { key: 1, text: "多行文本" },
  { key: 2, text: "数字" },
  { key: 3, text: "日期时间" },
  { key: 6, text: "下拉单选框" },
  // { key: 8, text: '图片' },
  { key: 14, text: "科目" },
  { key: 15, text: "客户" },
  { key: 16, text: "商品" },
  { key: 17, text: "供应商" },
  { key: 18, text: "银行信息" },
  { key: 19, text: "期间" }
]);

/**
 * 数据监听
 */
watch(
  () => props.propList,
  newV => {
    formList.value = newV.map(item => {
      return { key: item.key, text: item.text };
    });
  },
  { deep: true, immediate: true }
);

/* 更改表单属性 */
function handleChangeChild(val, row, $index) {
  const tarDom = JSON.parse(
    JSON.stringify(formConfig.formDomConfig.find(item => item.key === val))
  );
  const attribute = [];
  tarDom.itemProp.forEach(item => {
    for (const tarProp of JSON.parse(JSON.stringify(formConfig.propItemData))) {
      if (item === tarProp.key && ![11, 12].includes(item)) {
        tarProp[tarProp.vModel] = tarProp.value;
        if (tarProp.key === 0) tarProp[tarProp.vModel] = tarDom.text;
        if (tarProp.key === 1) tarProp[tarProp.vModel] = tarDom.placeholder;
        if (tarProp.key === 2 && tarDom.key === 2) tarProp[tarProp.vModel] = 0;
        attribute.push(tarProp);
        break;
      }
    }
  });
  tarDom.attribute = attribute;
  tarDom.vModel = `${tarDom.type}~${$index}~${new Date().getTime()}`;
  // 利用对象的引用属性特性，使右边字段属性改变时，展示区能同步改变
  emits("handleChangeChild", tarDom, $index);
  Bus.emit("changeChildForm", [tarDom, $index]);
}
/* 更改字段顺序 */
function changeOrder(index, type) {
  const tarItem = formList.value[index];
  const changIndex = index + (type === "down" ? 1 : -1);
  formList.value.splice(index, 1);
  formList.value.splice(changIndex, 0, tarItem);
  if (
    ![null, "", undefined].includes(formList.value[index].key) &&
    ![null, "", undefined].includes(formList.value[changIndex].key)
  ) {
    let childPropIndex = index;
    for (let i = 0; i < index; i++) {
      if ([null, "", undefined].includes(formList.value[i].key))
        childPropIndex -= 1;
    }
    emits("handleChangeChild", null, childPropIndex, type);
    Bus.emit("changeChildForm", [null, childPropIndex, type]);
  }
}

/* 添加字段 */
function addChildProp() {
  formList.value.push({});
}

/* 设置字段 */
function setProp(index) {
  Bus.emit("activeChildItem", [null, index]);
  Bus.emit("handleChildSetProp", index);
}
/* 删除字段 */
function delProp(index) {
  if (![null, "", undefined].includes(formList.value[index].key)) {
    emits("handleChangeChild", null, index, "del");
  }
  formList.value.splice(index, 1);
  Bus.emit("changeChildForm", [null, index, "del"]);
}
</script>
<style lang="scss" scoped>
:deep {
  .child-attributes-table {
    .el-select {
      padding: 5px 0;
    }

    .cell {
      padding: 0 5px;
    }
  }

  .child-control {
    .el-button {
      padding: 5px;
      margin-right: 5px;
      margin-left: 0;
      font-size: 13px;
      border: none;

      &:hover {
        color: #fff;
        background-color: #4a79e4;
      }
    }

    .el-button--danger {
      color: #606266;
      background-color: #fff;
      border-color: #dcdfe6;

      &:hover {
        background-color: #f56c6c;
      }
    }
  }

  .is-center .cell {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center !important;
  }
}
</style>
