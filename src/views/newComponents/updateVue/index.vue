<template>
  <div class="container">
    <el-tabs v-model="activeTab" type="border-card" @tab-change="changeTab">
      <el-tab-pane name="data" label="重构data" />
      <el-tab-pane name="method" label="重构method" />
      <!-- <el-tab-pane name="file" label="重构文件(例)" /> -->
    </el-tabs>
    <div class="edit">
      <div class="btn">
        <el-button type="primary" @click="handleUpdate">转换</el-button>
        <span class="tip"
          >注意：{{ activeTab === "data" ? tips[0] : tips[1] }}</span
        >
      </div>
      <div class="edit-block">
        <el-input
          type="textarea"
          v-model="dataText"
          :placeholder="
            activeTab === 'data'
              ? '请输入data输出的数据对象'
              : '请输入method对象'
          "
          autosize
        />
        <div class="date-result" v-html="updateDateResult"></div>
      </div>
    </div>
  </div>
</template>

<script setup name="UpdateVue">
import { ElMessage } from "element-plus";

const dataText = ref("");
const activeTab = ref("data");
const updateDateResult = ref("");
const tips = ref([
  "data中不能有注释, 不可以有简写方式",
  "methods内部的每个方法前都要有块注释(/**/)，且每个方法内部不能用该注释方式，若需要注释请改用行注释(//)"
]);

/* 切换tab */
function changeTab() {
  dataText.value = "";
  updateDateResult.value = "";
}

/* 改写data中的属性 */
function getDataContent(text) {
  let textContent = text;
  textContent = textContent.replace(/(\w*):/gs, '"$1":').replace(/'/gs, '"');
  const dataObj = JSON.parse(textContent);
  const dataProps = Object.keys(dataObj);
  let dataContent = "";
  dataProps.forEach(item => {
    dataContent +=
      `const ${item} = ref(${JSON.stringify(dataObj[item])})` + "\n";
  });
  return dataContent;
}
/* 改写Method */
function getMethodContent(text) {
  let methodsContent = "";
  // 1. 去除换行并去除异步this调用
  methodsContent = text.replace(/\n/gs, "");
  methodsContent = methodsContent.replace(/const\s*that\s*=\s*this/gs, "");
  methodsContent = methodsContent.replace(/await th[ia][st]\./gs, "await ");
  // 去除每个方法结尾处的逗号并换行
  methodsContent = methodsContent.replace(/},\s*\/\*/gs, "\n}\n/*");
  // 异步方法添加function关键字
  const asyncFunReg = new RegExp(`\\*/\\s*async`, "gs");
  methodsContent = methodsContent.replace(asyncFunReg, `*/\nasync function`);
  // 普通方法添加function关键字
  const normalFunReg = new RegExp(`\\*/\\s*\\w*\\(`, "gs");
  const normalFunNames = methodsContent.match(normalFunReg);
  if (!normalFunNames) return;
  normalFunNames.forEach(funName => {
    funName = funName.replace("*/", "").replace("\n", "").replace("(", "");
    methodsContent = methodsContent.replace(
      `th[ia][st].${funName}()`,
      `${funName}()`
    );
    const itemFunReg = new RegExp(`\\*/\\s*${funName}\\(`, "gs");
    methodsContent = methodsContent.replace(
      itemFunReg,
      `*/\nfunction ${funName}(`
    );
  });
  // 函数命名格式化成箭头函数
  methodsContent = methodsContent.replaceAll(
    /async\s*function\s*(\w+)\((.{0,}?)\)\s*\{/gs,
    "const $1 = async ($2) => {\n"
  );
  methodsContent = methodsContent.replaceAll(
    /function\s*(\w+)\((.{0,}?)\)\s*\{/gs,
    "const $1 = ($2) => {\n"
  );
  // methodsContent = methodsContent.replace(/}\s*}$/gs, "");
  // this.*-->*.value
  methodsContent = methodsContent.replace(/this\.\$message\./gs, "ElMessage.");
  methodsContent = methodsContent.replace(/th[ia][st]\.(\w*)/gs, "$1.value");
  methodsContent = methodsContent.replace("{", "").slice(0, -1);
  methodsContent = methodsContent.replace(/;/gs, ";\n");
  return methodsContent;
}

/* 重构 */
function handleUpdate() {
  if (!dataText.value) return ElMessage.warning("请输入需要转换的数据");
  let result = "";
  if (activeTab.value === "data") result = getDataContent(dataText.value);
  else if (activeTab.value === "method")
    result = getMethodContent(dataText.value);
  else if (activeTab.value === "file") result = getDataContent(dataText.value);
  updateDateResult.value = result.replace(/\n/gs, "<br>");
}
</script>

<style lang="scss" scoped>
:deep {
  .el-tabs__content {
    padding: 0;
  }

  .el-textarea__inner {
    min-height: 100px !important;
    max-height: 500px !important;
  }
}

.container {
  max-width: calc(100% - 30px);
  margin: 15px;

  .btn {
    display: flex;
    flex-direction: column;

    .el-button {
      width: 4.1667rem;
    }

    .tip {
      position: relative;
      padding-left: 8px;
      margin-top: 15px;
      font-size: 0.8333rem;
      color: gray;

      &::before {
        position: absolute;
        top: 0;
        left: 0;
        color: red;
        content: "*";
      }
    }
  }

  .edit {
    padding: 15px;
    background-color: #fff;
  }

  .edit-block {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-top: 0.7813rem;

    & > div {
      width: 50%;
    }

    .date-result {
      display: flex;
      flex-direction: column;
      margin-left: 0.7813rem;
      font-size: 1rem;
    }
  }
}
</style>
