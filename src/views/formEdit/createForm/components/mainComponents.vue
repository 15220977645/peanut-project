<template>
  <div class="dom-container">
    <div
      v-for="(item, index) in formDomData"
      :key="`${item.type}-${index}`"
      :class="{
        'active-item':
          activeKey === `${item.type}-${index}` && formType === 'create'
      }"
      class="form-item"
      draggable="true"
      @click="changeActive(`${item.type}-${index}`)"
      @dragstart="drag($event, index)"
      @drop="drop($event, index)"
      @dragover="allowDrop($event)"
    >
      <el-popover
        v-if="activeKey === `${item.type}-${index}` && formType === 'create'"
        v-model:visible="delPopover"
        placement="top-end"
        popper-class="del-popover"
        trigger="click"
        width="200"
      >
        <span style="font-size: 1vw">确定删除？</span>
        <div style="text-align: end">
          <el-button link size="small" @click="delPopover = false"
            >取消</el-button
          >
          <el-button
            link
            size="small"
            type="primary"
            @click="delFormItem(`${item.type}-${index}`)"
            >确定</el-button
          >
        </div>
        <template #reference>
          <el-button class="del-btn" :icon="Delete" />
        </template>
      </el-popover>
      <span :class="[{ 'required-item': item.required }, 'item-label']">{{
        item.type === "line" ? item.label : item.label || item.text
      }}</span>
      <!--文本框-->
      <el-input
        v-if="['text', 'textArea', 'number'].includes(item.type)"
        v-model="item.value"
        :placeholder="item.placeholder"
        v-bind="item.props"
      />
      <!--日期-->
      <el-date-picker
        v-else-if="item.type === 'date'"
        v-model="item.value"
        :placeholder="item.placeholder"
        :type="item.props.type ? item.props.type : 'date'"
        v-bind="item.props"
      />
      <!--单选框-->
      <el-radio-group
        v-else-if="item.type === 'radio'"
        v-model="item.value"
        v-bind="item.props"
      >
        <el-radio
          v-for="(item, i) in item.options"
          :key="i"
          :label="item.value"
          border
          >{{ item.label }}</el-radio
        >
      </el-radio-group>
      <!--复选框-->
      <el-checkbox-group
        v-else-if="item.type === 'checkbox'"
        v-model="item.value"
        v-bind="item.props"
      >
        <el-checkbox
          v-for="(item, i) in item.options"
          :key="i"
          :label="item.value"
          border
          >{{ item.label }}</el-checkbox
        >
      </el-checkbox-group>
      <!--下拉单选框-->
      <el-select
        v-else-if="item.type === 'select'"
        v-model="item.value"
        :placeholder="item.placeholder || '请选择'"
        v-bind="item.props"
      >
        <el-option
          v-for="(item, i) in item.options"
          :key="i"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <!--下拉复选选框-->
      <!-- <el-select
        v-else-if="item.type === 'select' && item.props.multiple"
        v-model="item.value"
        :placeholder="item.placeholder || '请选择'"
        v-bind="item.props"

      >
        <el-option v-for="(item, i) in item.attributeOptions" :key="i" :label="item.label" :value="item.value" />
      </el-select> -->
      <!--分割线-->
      <hr
        v-else-if="item.type === 'line'"
        :class="item.lineClass || 'changeLineSolid'"
      />
      <!--------------------------- 增强字段 --------------------------->
      <!--图片-->
      <div v-else-if="item.type === 'image'" class="image-block">
        <i class="el-icon-plus" />
        <span>点击上传</span>
      </div>
      <!--文件-->
      <el-button
        v-else-if="item.type === 'file'"
        style="width: 100px; pointer-events: none"
        type="primary"
      >
        点击上传
      </el-button>
      <!--部门-->
      <el-select
        v-else-if="item.type === 'orgUnit'"
        v-model="item.value"
        :placeholder="item.placeholder || '部门'"
      >
        <el-option
          v-for="(item, i) in []"
          :key="i"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <!--用户-->
      <el-select
        v-else-if="item.type === 'user'"
        v-model="item.value"
        :placeholder="item.placeholder || '用户'"
      >
        <el-option
          v-for="(item, i) in []"
          :key="i"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <!--数据关联-->
      <div v-else-if="item.type === 'associatedData'" class="associated-data">
        <el-input v-model="item.value" placeholder="选择数据" />
        <el-button size="small">查看</el-button>
      </div>
      <!--子表-->
      <div
        v-else-if="item.type === 'childForm'"
        :tar-key="`${item.type}-${index}`"
        class="child-form-container"
      >
        <div
          v-if="item.value[0]"
          class="table"
          @click.stop="e => handleActiveItem(e, item, index)"
        >
          <div
            v-for="(childItem, i) in item.value"
            :id="`${childItem.type}-${i}`"
            :key="`${childItem.type}-${i}`"
            :class="[
              'child-item',
              {
                'active-child-item':
                  `${item.type}-${index}` === activeKey &&
                  activeChildKey === `${childItem.type}-${i}`
              }
            ]"
          >
            <div class="thead">
              <div :class="['th', { 'required-th': propRequired(childItem) }]">
                {{
                  childItem.attribute[0].value ||
                  childItem.attribute[0].label ||
                  childItem.text
                }}
              </div>
            </div>
            <div class="tbody">
              <div class="tr">
                <el-input
                  v-model="childItem.value"
                  :placeholder="propPlaceholder(childItem)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--科目-->
      <el-select
        v-else-if="item.type === 'subject'"
        v-model="item.value"
        :placeholder="item.placeholder || '科目'"
      >
        <el-option
          v-for="(item, i) in []"
          :key="i"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <!--客户-->
      <el-select
        v-else-if="item.type === 'customer'"
        v-model="item.value"
        :placeholder="item.placeholder || '客户'"
      >
        <el-option
          v-for="(item, i) in []"
          :key="i"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <!--商品-->
      <el-select
        v-else-if="item.type === 'goods'"
        v-model="item.value"
        :placeholder="item.placeholder || '商品'"
      >
        <el-option
          v-for="(item, i) in []"
          :key="i"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <!--供应商-->
      <el-select
        v-else-if="item.type === 'supplier'"
        v-model="item.value"
        :placeholder="item.placeholder || '供应商'"
      >
        <el-option
          v-for="(item, i) in []"
          :key="i"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <!--银行信息-->
      <el-select
        v-else-if="item.type === 'bankInfo'"
        v-model="item.value"
        :placeholder="item.placeholder || '银行信息'"
      >
        <el-option
          v-for="(item, i) in []"
          :key="i"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <!--期间-->
      <el-select
        v-else-if="item.type === 'period'"
        v-model="item.value"
        :placeholder="item.placeholder || '期间选择'"
      >
        <el-option
          v-for="(item, i) in []"
          :key="i"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <!--所属项目-->
      <el-select
        v-else-if="item.type === 'belongProject'"
        v-model="item.value"
        :placeholder="item.placeholder || '所属项目'"
      >
        <el-option
          v-for="(item, i) in []"
          :key="i"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>
<script setup>
import { Bus } from "./bus";
import formConfig from "../../components/formConfig";
import { Delete } from "@element-plus/icons-vue";

const props = defineProps({
  formData: {
    type: Array,
    default: () => []
  },
  formType: {
    type: String,
    default: "create"
  }
});
const formDomData = ref([]);
const activeKey = ref("");
const activeChildKey = ref("");
const delPopover = ref(false);

/* 子表单属性必填 */
const propRequired = computed(() => obj => {
  let status = false;
  for (const item of obj.attribute) {
    if (item.key === 3 && item[item.vModel]) {
      status = item[item.vModel];
      return status;
    }
  }
  return status;
});
/* 子表单属性提示 */
const propPlaceholder = computed(() => obj => {
  let placeholder = obj.placeholder || "";
  for (const item of obj.attribute) {
    if (item.key === 1 && item[item.vModel]) {
      placeholder = item[item.vModel];
      return placeholder;
    }
  }
  return placeholder;
});

/**
 * 数据监听
 */
watch(
  () => props.formData,
  newV => {
    if (newV) {
      formDomData.value = handleEchoNowProp(newV);
    }
  },
  { deep: true, immediate: true }
);

/* 初始化 */
function init() {
  listenAddModule();
  listenChangeItem();
  listenChildChange();
  listenChildSetProp();
}

/* 更换注焦item */
function changeActive(key) {
  activeKey.value = key;
  activeChildKey.value = "";
  const index = Number(key.split("-")[1]);
  Bus.emit("activeItem", [index, formDomData.value[index]]);
}

/* 被触发设置子表单字段 */
function listenChildSetProp() {
  Bus.on("handleChildSetProp", index => {
    const activeI = Number(activeKey.value.split("-")[1]);
    activeChildKey.value = `${formDomData.value[activeI].value[index].type}-${index}`;
  });
}

/* 回显数据处理属性 */
function handleEchoNowProp(list) {
  list.forEach(item => {
    if (item.attribute) {
      item.attribute.forEach(itemProp => {
        if (itemProp.isEchoNow)
          item[itemProp.vModel] = itemProp.value || itemProp[itemProp.vModel];
      });
    }
  });
  return list;
}

/* 处理属性值需立即回显 */
function listenChangeItem() {
  Bus.on("handleChangeItem", async data => {
    const domData = JSON.parse(JSON.stringify(formDomData.value));
    domData[data.index][data.vModel] = data.value;
    if (data.propKey === 19) domData[data.index].value = data.value;
    const active = activeKey.value;
    formDomData.value = domData;
    await nextTick();
    activeKey.value = active;
  });
}

/* 监听表单添加 */
function listenAddModule() {
  Bus.on("addModule", data => {
    handleAddForm(data);
  });
}

/* 处理添加模块数据 */
function handleAddForm(data) {
  const addTar = formConfig.formDomConfig.find(item => item.key === data.key);
  const addProp = {
    ...addTar,
    vModel: `${addTar.type}~${
      formDomData.value.length
    }~${new Date().getTime()}`,
    key: data.key,
    value: [5, 8, 9, 13].includes(data.key) ? [] : ""
  };
  if (data.key === 13) addProp.fields = [];
  formDomData.value.push(addProp);
  activeKey.value = `${addTar.type}-${formDomData.value.length - 1}`;
  activeChildKey.value = "";
  Bus.emit("activeItem", formDomData.value.length - 1);
  Bus.emit("changeForm", [formDomData.value, null]);
}

/* 子表单字段更改 */
function listenChildChange() {
  Bus.on("changeChildForm", dataArr => {
    const data = dataArr[0];
    const index = dataArr[1];
    const type = dataArr[2];
    const activeIndex = Number(activeKey.value.split("-")[1]);
    let tarProp = [...formDomData.value[activeIndex].value];
    if (!data) {
      const tarChildProp = formDomData.value[activeIndex].value[index];
      tarProp.splice(index, 1);
      if (type === "del") activeChildKey.value = "";
      else tarProp.splice(index + (type === "down" ? 1 : -1), 0, tarChildProp);
      tarProp = tarProp.filter(item => item);
      formDomData.value[activeIndex].value = tarProp;
      return;
    }
    tarProp[index] = data;
    // activeChildKey.value = `${data.type}-${index}`
    formDomData.value[activeIndex].value = tarProp;
  });
}

/* 聚焦子表单字段 */
function handleActiveItem(e, obj, i) {
  if (!e.target.id) return;
  changeActive(`${obj.type}-${i}`);
  const data = obj.value[e.target.id.split("-")[1]];
  activeChildKey.value = e.target.id;
  const activeI = Number(activeChildKey.value.replace(/.*-(\d*)$/g, "$1"));
  Bus.emit("activeChildItem", [data, activeI]);
}

/* 删除item */
function delFormItem(key) {
  const index = key.split("-")[1];
  const domData = formDomData.value;
  formDomData.value.splice(index, 1);
  if (domData[index])
    activeKey.value = activeKey.value.replace(
      /\w*-/,
      `${domData[index].type}-`
    );
  else {
    if (domData.length - 1 < 0) activeKey.value = null;
    else
      activeKey.value = `${domData[domData.length - 1].type}-${
        domData.length - 1
      }`;
  }
  delPopover.value = false;
  Bus.emit("changeForm", [formDomData.value, index]);
}

/* 触发拖拽 */
function drag(event, index) {
  event.dataTransfer.setData("index", index);
}

/* 拖拽 */
function drop(event, index) {
  event.preventDefault();
  const activeIndex = Number(activeKey.value.split("-")[1]);
  const startIndex = parseInt(event.dataTransfer.getData("index"));
  const currentIndex = parseInt(index);
  const domData = JSON.parse(JSON.stringify(formDomData.value));
  const startTar = JSON.parse(JSON.stringify(formDomData.value[startIndex]));
  const currentTar = JSON.parse(
    JSON.stringify(formDomData.value[currentIndex])
  );
  startTar.vModel = startTar.vModel.replace(/~\d*~/, `~${currentIndex}~`);
  currentTar.vModel = currentTar.vModel.replace(/~\d*~/, `~${startIndex}~`);
  domData.splice(startIndex, 1);
  domData.splice(currentIndex, 0, startTar);
  formDomData.value = domData;
  const dropData = { startIndex, currentIndex };
  if (activeIndex === startIndex)
    activeKey.value = `${activeKey.value.split("-")[0]}-${currentIndex}`;
  else {
    if (
      (startIndex > activeIndex && currentIndex <= activeIndex) ||
      (startIndex < activeIndex && currentIndex >= activeIndex)
    ) {
      const i = startIndex < activeIndex ? activeIndex - 1 : activeIndex + 1;
      activeKey.value = `${activeKey.value.split("-")[0]}-${i}`;
    }
  }
  Bus.emit("handleDrop", dropData);
}

/* 结束拖拽 */
function allowDrop(event) {
  event.preventDefault();
}

onMounted(() => {
  init();
});

onBeforeUnmount(() => {
  Bus.off("addModule");
  Bus.off("handleChangeItem");
  Bus.off("changeChildForm");
  Bus.off("handleChildSetProp");
});
</script>
<style lang="scss" scoped>
:deep {
  .el-input__inner {
    text-align: left;
  }

  .el-checkbox-group {
    padding: 0;
  }

  .el-divider {
    margin-top: 24px;
  }

  .el-input__suffix {
    span,
    i {
      pointer-events: none;
    }
  }

  .upload-img__file {
    font-size: 14px;
  }

  .el-radio,
  .el-checkbox {
    margin-bottom: 5px;
    margin-left: 0 !important;
  }

  .el-input--prefix {
    width: 400px !important;
    pointer-events: none;
  }
}

.dom-container {
  width: 100%;
  padding-bottom: 30px;
}

.form-item {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px 10px 20px;
  border-left: 5px solid transparent;
  transition: all 0.3s;

  & > div {
    pointer-events: none;
  }

  .el-input,
  .el-select {
    max-width: 400px !important;
  }

  .el-textarea {
    max-width: 400px;
  }

  .item-label {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: bold;
  }
}

.image-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  height: 90px;
  padding-top: 26px;
  font-size: 28px;
  color: #8c939d;
  background-color: #fbfdff;
  border: 1px #c0ccda dashed;
  border-radius: 5px;

  span {
    margin-top: 10px;
    font-size: 14px;
    color: #333;
  }
}

.associated-data {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  .el-input {
    width: 330px;
    margin-right: 10px;
  }
}

.active-item {
  background-color: #ecf5ff;
  border-color: #4a79e4;
}

.required-item {
  position: relative;
  padding-left: 8px;

  &::before {
    position: absolute;
    left: 0;
    color: #f56c6c;
    content: "*";
  }
}

.del-btn {
  position: absolute;
  right: 60px;
  bottom: -15px;
  z-index: 10;
  width: 30px;
  height: 30px;
  padding: 0;
  font-size: 1vw;
  text-align: center;
  cursor: pointer;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 3px #aaa;

  &:hover {
    color: #409eff;
  }
}

.child-form-container {
  min-height: 100px;
  overflow: auto;
  pointer-events: all !important;

  .table {
    display: flex;
    flex-wrap: nowrap;
    width: fit-content;
    font-size: 12px;

    .child-item {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      border: 1px solid #d0d0d0;

      &:not(:last-child) {
        border-right: none;
      }

      .thead {
        border-bottom: 1px solid #d0d0d0;

        & > div {
          padding: 10px 5px;
        }
      }

      .tbody > div {
        padding: 5px;
      }

      .thead,
      .tbody {
        display: flex;
        flex-wrap: nowrap;
        pointer-events: none;

        & > div {
          width: 130px;
        }
      }
    }

    .required-th {
      position: relative;
      padding-left: 12px !important;

      &::before {
        position: absolute;
        left: 5px;
        color: #f56c6c;
        content: "*";
      }
    }

    .child-item:hover,
    .active-child-item {
      background: linear-gradient(90deg, #4a79e4 50%, transparent 0) repeat-x,
        linear-gradient(90deg, #4a79e4 50%, transparent 0) repeat-x,
        linear-gradient(0deg, #4a79e4 50%, transparent 0) repeat-y,
        linear-gradient(0deg, #4a79e4 50%, transparent 0) repeat-y;
      background-position: 0 0, 0 100%, 0 0, 100% 0;
      background-size: 6px 1px, 6px 1px, 1px 6px, 1px 6px;
    }

    .active-child-item {
      @keyframes linear-gradient-move {
        100% {
          background-position: 4px 0, -4px 100%, 0 -4px, 100% 4px;
        }
      }

      animation: linear-gradient-move 0.3s infinite linear;
    }
  }
}

.changeLineNone {
  border-style: none;
}

.changeLineDashed {
  border-style: dashed;
}

.changeLineSolid {
  border-style: solid;
}
</style>
