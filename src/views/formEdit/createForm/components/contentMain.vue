<template>
  <div class="content-main-container">
    <div class="content-main-header">
      <el-button class="preview-btn" @click="preview">
        <img :src="requireImg(`svg/preview.svg`)" alt="" /> <span>预览</span>
      </el-button>
      <!-- <el-button type="primary" @click="saveForm">保存</el-button> -->
    </div>
    <div class="formEditor-ruler-top" />
    <div class="content-main-body formEditor bg">
      <formDomContainer :form-data="formConfigData" />
    </div>
    <!--预览列表-->
    <el-drawer
      v-model="previewDrawer"
      :title="`表名：${previewForm.name || ''}`"
      class="preview-drawer"
    >
      <previewFormDom
        form-type="preview"
        :form-config-data="previewForm.formAttributes"
        :form-prop-data="{}"
      />
      <template #footer>
        <div class="drawer-footer">
          <el-button type="primary" @click="previewDrawer = false"
            >确 定</el-button
          >
          <el-button plain @click="previewDrawer = false">取 消</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>
<script setup>
import { ElMessage } from "element-plus";
import formDomContainer from "./mainComponents.vue";
import previewFormDom from "../../components/formContent.vue";
import { requireImg } from "@/utils/requireImg";
import { Bus } from "./bus";

const previewForm = ref({
  name: "",
  formAttributes: []
});
const previewDrawer = ref(false);
const formConfigData = ref([]);
let formId = null;

/* 初始化 */
function init() {
  listenFormData();
}

/* 预览 */
function preview() {
  Bus.emit("getFormData", "preview");
}

/* 接收表单数据 */
function listenFormData() {
  Bus.on("sendFormData", formData => {
    if (formData.useType === "preview") {
      previewForm.value = {
        name: formData.name,
        formAttributes: formData.fields
      };
      previewDrawer.value = true;
    } else {
      const isCanSave = handleSaveBefore(formData);
      if (!isCanSave) return;
      const data = JSON.parse(JSON.stringify(formData));
      data.id = formId;
    }
  });
}

/* 保存前处理 */
function handleSaveBefore(data) {
  let isCanSave = true;
  for (const tarItem of data.fields) {
    if (tarItem.key === 12 && !tarItem.associatedId) {
      isCanSave = false;
      ElMessage.warning("请选择关联表");
      return isCanSave;
    }
  }
  if (!data.name) {
    ElMessage.warning("请输入表单名称");
    isCanSave = false;
    return isCanSave;
  }
  if ([null, "", undefined].includes(data.formClassId)) {
    ElMessage.warning("请选择表单分类");
    isCanSave = false;
    return isCanSave;
  }
  return isCanSave;
}

/* 保存 */
// function saveForm() {
//   Bus.emit("getFormData", "save");
// }

onMounted(() => {
  init();
});

onBeforeUnmount(() => {
  Bus.off("sendFormData");
});
</script>
<style lang="scss" scoped>
:deep {
  .preview-drawer {
    width: 80vw !important;

    .form-item,
    .form-item > div {
      pointer-events: none !important;
    }

    .el-input,
    .el-select,
    .el-textarea {
      width: 250px;
      pointer-events: all !important;
    }

    .child-form-container {
      .el-input,
      .el-select,
      .el-textarea {
        width: unset;
      }

      .item:hover {
        background-image: none;
      }
    }
  }

  .el-drawer__footer {
    padding: 0.7813rem !important;
    border-top: 0.0521rem solid #e0e0e0;
  }
}

.formEditor-ruler-top {
  flex: 0 0 20px;
  height: 20px;
  background: url("https://oa-test.visfarm.com/static/img/formtop.1a4fd5a.svg")
    no-repeat 20px bottom;
  background-color: #f9f9f9;
  border-top: 0.0521rem solid #e0e0e0;
}

.formEditor.bg {
  display: flex;
  padding-left: 20px;
  background: url("https://oa-test.visfarm.com/static/img/formleft.9ce6546.svg")
      no-repeat 0 0,
    url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+PGcgb3BhY2l0eT0iLjA0Ij48cGF0aCBkPSJNLjUgOS41aDk5TS41IDE5LjVoOTlNLjUgMjkuNWg5OU0uNSAzOS41aDk5TS41IDU5LjVoOTlNLjUgNjkuNWg5OU0uNSA3OS41aDk5TS41IDg5LjVoOTlNOS41LS41djEwME0xOS41LS41djEwME0yOS41LS41djEwME0zOS41LS41djEwME01OS41LS41djEwME02OS41LS41djEwME03OS41LS41djEwME04OS41LS41djEwMCIvPjwvZz48ZyBvcGFjaXR5PSIuMDciPjxwYXRoIGQ9Ik0uNSA0OS41aDk5TS41IDk5LjVoOTlNNDkuNS0uNXYxMDBNOTkuNS0uNXYxMDAiLz48L2c+PC9nPjwvc3ZnPg==")
      repeat 20px 0;
  background-attachment: local;
  box-shadow: inset 15px 10px 20px rgb(0 0 0 / 3%);
}

.content-main-container {
  display: flex;
  flex-direction: column;
  height: 100%;

  .content-main-body {
    flex: 1;
    overflow: auto;
  }
}

.content-main-header {
  margin: 0.5208rem;
  text-align: right;

  .preview-btn {
    border: none;

    img {
      width: 0.8333rem;
      margin-right: 0.2604rem;
    }

    &:hover {
      background-color: #fff;
    }
  }
}
</style>
