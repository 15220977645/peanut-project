// 使用命令：node + src/相对路径
// 待优化：computer、$emit
// 强制性要求：
// 1. data中不能有注释, 不可以有简写方式
// 2. methods内部的每个方法前都要有块注释(/**/)，且每个方法内部不能用该注释方式，若需要注释请改用行注释(//)
// 3. watch与计算属性每个监听属性前都要有块注释(/**/)作为正则的分割标识
// 建议要求：
// 1. 每行末尾带有(;)分号结尾

/* 封装获取某属性或生命周期的内容 */
function getCyclePropCode(text, prop) {
  const cycleProps = [
    "data\\(\\)\\s*{\\s*return",
    "watch:",
    "computed:",
    "methods:",
    "created\\(\\)",
    "beforeMount\\(\\)",
    "mounted\\(\\)",
    "beforeUpdate\\(\\)",
    "updated\\(\\)",
    "beforeDestroy\\(\\)",
    "destroyed\\(\\)",
    "activated\\(\\)",
    "deactivated\\(\\)"
  ];
  let propTar = "";
  for (const tar of cycleProps) {
    if (tar.includes(prop)) {
      propTar = tar;
      break;
    }
  }
  let propExecStatus = false;
  let propFunContent = "";
  // 添加脚本存在的属性并根据位置排序
  const orderProp = [];
  cycleProps.forEach(item => {
    if (text.indexOf(item.replace(/\\s\*/g, " ").replace(/\\/g, "")) > -1) {
      const index = text.indexOf(item.replace(/\\/g, ""));
      orderProp.push({ index: index, prop: item });
    }
  });
  orderProp.sort((a, b) => {
    return a.index - b.index;
  });
  orderProp.unshift({ index: 1, prop: cycleProps[0] });
  // 查看属性内部的代码块(针对不为最后一个的属性)
  for (const tar of orderProp) {
    const tarProp = tar.prop;
    if (tarProp === propTar) continue;
    const propReg = new RegExp(
      `},\\s*${propTar}\\s*{.*},\\s*${tarProp}\\s*{`,
      "gs"
    );
    const propExec = propReg.exec(text);
    if (propExec) {
      const execResult = propExec;
      propExecStatus = true;
      const replaceFrontReg = new RegExp(`},\\s*${propTar}\\s*{`, "gs");
      const replaceAfterReg = new RegExp(`},\\s*${tarProp}\\s*{`, "gs");
      propFunContent = execResult["0"]
        .replace(replaceFrontReg, "")
        .replace(replaceAfterReg, "");
      propFunContent = propFunContent.replace(/\s{4,}/gs, "\n");
      break;
    }
  }
  // 查看最后一个属性的内部代码块
  if (!propExecStatus) {
    const lastPropReg = new RegExp(`},\\s*${propTar}\\s*{.*}\\s*}*\\s*}`, "gs");
    const lastPropExec = lastPropReg.exec(text);
    if (lastPropExec) {
      const execResult = lastPropExec;
      const replaceFrontReg = new RegExp(`},\\s*${propTar}\\s*{`, "gs");
      propExecStatus = true;
      propFunContent = execResult["0"]
        .replace(replaceFrontReg, "")
        .replace(/\s{4,}/gs, "\n");
    }
  }
  return { propExecStatus, propFunContent };
}

/* 改写data中的属性 */
function getDataContent(text) {
  const dataResult = getCyclePropCode(text, "data");
  let textContent = "{" + dataResult.propFunContent.replace(/;/g, "");
  textContent = textContent.replace(/(\w*):/gs, '"$1":').replace(/'/gs, '"');
  const dataObj = JSON.parse(textContent);
  const dataProps = Object.keys(dataObj);
  let dataContent = "";
  dataProps.forEach(item => {
    dataContent += `const ${item} = ref(${JSON.stringify(dataObj[item]).replace(
      /"/gs,
      "'"
    )})\n`;
    text = text.replace(
      new RegExp(`const\\s${item}\\s*=\\s*this\\.${item}`, "gs"),
      ""
    );
    text = text.replace(new RegExp(`${item}\\.`, "gs"), `${item}.value.`);
    text = text.replace(
      new RegExp(`th[ia][st]\\.${item}\\.`, "gs"),
      `${item}.value.`
    );
    text = text.replace(
      new RegExp(`th[ia][st]\\.${item}\\s+`, "gs"),
      `${item}.value `
    );
    text = text.replace(
      new RegExp(`th[ia][st]\\.${item}(?![a-z|A-Z|]|[0-9])`, "gs"),
      `${item}.value`
    );
  });
  text = text.replace(/\.value\.value/gs, ".value");
  // 添加$refs属性
  const refsReg = /\$refs[\.\[][']?(\w*)[']?[\]]?/gs;
  if (text.match(refsReg)) {
    const refProps = [...text.match(refsReg)];
    if (refProps) {
      const refPropList = Array.from(new Set(refProps));
      refPropList.forEach(item => {
        const refProp = item.replace("$refs", "").replace(/[\.\[\]']/g, "");
        dataContent = `const ${refProp} = ref()\n` + dataContent;
      });
    }
  }
  return { dataContent, text };
}

/* 改写watch内容 */
function getWatchContent(text) {
  let watchContent = "";
  const watchResult = getCyclePropCode(text, "watch");
  if (watchResult.propExecStatus && watchResult.propFunContent) {
    watchContent = watchResult.propFunContent
      .replace(/\n/gs, "")
      .replace(/},[/]\*/gs, ")\n/*");
    const propReg = new RegExp(
      `\\*/\\s*(\\w*):\\s*{\\s*(async)?\\s*handler`,
      "gs"
    );
    const propsArr = watchContent.match(propReg)?.map(item => {
      return item.replace(propReg, "$1");
    });
    propsArr?.forEach(item => {
      const watchItemReg = `${item}:\\s*{handler\\(\\w*(,)?(\\s)?(\\w*)?\\)\\s*{`;
      const replaceText = `\nwatch(() => ${item}.value, (newV, oldV) => {\n`;
      watchContent = watchContent.replace(
        new RegExp(watchItemReg, "gs"),
        replaceText
      );
      watchContent = watchContent.replace(
        /},\s*deep:\s*true\s*}/gs,
        "\n}, { deep: true }"
      );
      watchContent = watchContent.replace(
        /},\s*immediate:\s*true\s*}/gs,
        "\n}, { immediate: true }"
      );
      watchContent = watchContent.replace(
        /},\s*deep:\s*true,\s*immediate:true\s*}/gs,
        "\n}, { deep: true, immediate: true }"
      );
    });
  }
  if (watchContent)
    watchContent = `${watchContent.replace(/th[ia][st]\./gs, "")})`.replace(
      /}\s*\)$/,
      "})"
    );
  return watchContent;
}

/* 改写方法内容 */
function getMethodsContent(text) {
  const methodsData = getCyclePropCode(text, "methods");
  let methodsContent = "";
  if (methodsData.propExecStatus && methodsData.propFunContent) {
    // 去除每个方法结尾处的逗号并换行
    methodsContent = methodsData.propFunContent.replace(
      /},\s*\/\*/gs,
      "\n}\n/*"
    );
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
    methodsContent = methodsContent.replace(/}\s*}$/gs, "");
  }
  return methodsContent;
}

/* 改写生命周期并处理相关引入 */
function handleLifeProps(text) {
  let vueImportProps = "ref";
  let jsFooterCode = "";
  const lifeCycleProps = [
    ["beforeMount", "onBeforeMount"],
    ["mounted", "onMounted"],
    ["beforeUpdate", "onBeforeUpdate"],
    ["updated", "onUpdated"],
    ["beforeDestroy", "onBeforeUnmount"],
    ["destroyed", "onUnmounted"],
    ["activated", "onActivated"],
    ["deactivated", "onDeactivated"]
  ];
  lifeCycleProps.forEach(item => {
    const itemContent = getCyclePropCode(text, item[0]);
    const content = itemContent.propFunContent
      .replace("\n", "")
      .replace(/\s/gs, "");
    if (itemContent.propExecStatus && content) {
      vueImportProps += `, ${item[1]}`;
      jsFooterCode += `
        ${item[1]}(() => {
          ${itemContent.propFunContent}
        })
      `;
    }
  });
  return { vueImportProps, jsFooterCode };
}

/* 改写其他 */
function handleOther(
  text,
  jsHeadCode,
  vueImportProps,
  methodsCode,
  watchCode,
  jsFooterCode
) {
  // 批量替换的规则
  const replaceRegList = [
    { reg: /\$nextTick/gs, text: "nextTick" },
    { reg: /\$refs[\[][']?(\w*)[']?[\]][\.]?/gs, text: "$1.value." },
    { reg: /th[ia][st]\.\$message/gs, text: "ElMessage" },
    { reg: /th[ia][st]\.\$notify\(/gs, text: "ElNotification(" },
    { reg: /th[ia][st]\.\$confirm\(/gs, text: "ElMessageBox.confirm(" }
  ];
  // 补充watch引入
  if (watchCode) vueImportProps += ", watch";
  // 处理nextTick
  if (text.includes("$nextTick")) vueImportProps += ", nextTick";
  // 处理elementUi引入
  const elComponentsText = [];
  const elComponents = [
    { old: "$message", new: "ElMessage" },
    { old: "$confirm", new: "ElMessageBox" },
    { old: "$notify", new: "ElNotification" }
  ];
  elComponents.forEach(item => {
    if (text.includes(item.old)) elComponentsText.push(item.new);
  });
  if (elComponentsText[0]) {
    jsHeadCode += `\nimport { ${elComponentsText.join(
      ", "
    )} } from 'element-plus'\n`;
  }
  // 批量替换
  replaceRegList.forEach(item => {
    methodsCode = methodsCode.replace(item.reg, item.text);
    watchCode = watchCode.replace(item.reg, item.text);
    jsFooterCode = jsFooterCode.replace(item.reg, item.text);
  });

  return { vueImportProps, jsHeadCode, methodsCode, watchCode, jsFooterCode };
}

/* 总处理 */
function handleVueJs(jsText) {
  let text = "";

  // 1. 去除换行并去除异步this调用
  text = jsText.replace(/\n/gs, "");
  text = text.replace(/const\s*that\s*=\s*this/gs, "");
  text = text.replace(/await th[ia][st]\./gs, "await ");

  // 2. 存储html代码与样式代码
  const htmlCode = /<template>.*<\/template>/gs.exec(text)["0"];
  const styleExec = /<style.*/gs.exec(text);
  const styleCode = styleExec ? "\n" + styleExec["0"] : "";
  text = text.replace(/<style.*/gs, "");

  // 3. 抽离变量，改写声明
  const dataText = /<script.*/gs.exec(text)["0"];
  const dataResult = getDataContent(dataText);
  let dataCode = dataResult.dataContent;
  text = dataResult.text;

  // 4. 处理计算属性

  // 5. 处理watch监听属性
  let watchCode = getWatchContent(text);

  // 6. 获取Methods处理后的代码文本
  let methodsCode = getMethodsContent(text);

  // 7. 改写生命周期并添加相关引入(除created)
  const handleResult = handleLifeProps(text);
  const vueImportProps = handleResult.vueImportProps;
  let jsFooterCode = handleResult.jsFooterCode;

  // 8. 添加原created执行的代码块
  const createdContent = getCyclePropCode(text, "created");
  if (createdContent.propExecStatus && createdContent.propFunContent) {
    jsFooterCode += `${createdContent.propFunContent}`;
  }
  jsFooterCode += "\n</script>";

  // 9. 添加setup
  const importText = `import { ref } from 'vue'`;
  const reg = /export\s*default.*data\(\)\s*{\s*/gs;
  const nameReg = /name: '\w*'/gs;
  const exportExec = reg.exec(text);
  const nameExec = nameReg.exec(exportExec["0"]);
  if (nameExec) {
    const setupName = nameExec["0"].replace(": ", "=").replace(/[']/gs, '"');
    text = text.replace(
      "<script>",
      `<script setup ${setupName}>\n${importText}`
    );
  } else text = text.replace("<script>", `<script setup>\n${importText}`);
  text = text.replace(/import\s/gs, "\nimport ");

  // 10. 删除vue2至export以后的代码
  let jsHeadCode = text.replace(/export\s*default.*/gs, "");

  // 11. 其他处理
  const otherResult = handleOther(
    text,
    jsHeadCode,
    vueImportProps,
    methodsCode,
    watchCode,
    jsFooterCode
  );
  jsHeadCode = otherResult.jsHeadCode;
  methodsCode = otherResult.methodsCode;
  watchCode = otherResult.watchCode;
  jsFooterCode = otherResult.jsFooterCode;
  jsHeadCode = jsHeadCode.replace(
    /(import {).*(} from 'vue')/gs,
    `$1 ${otherResult.vueImportProps} $2`
  );

  // 12. 处理props值
  let propsContent = "";
  if (/props:\s*{.*},\s*data\(\)\s*{\s*return\s*{/gs.exec(text)) {
    propsContent = /props:\s*{.*},\s*data\(\)\s*{\s*return\s*{/gs.exec(text)[
      "0"
    ];
    propsContent = propsContent.replace(
      /props:\s*{/gs,
      "const props = defineProps({"
    );
    propsContent = propsContent.replace(
      /},\s*data\(\)\s*{\s*return\s*{/gs,
      "})\n"
    );
    propsContent = propsContent.replace(/\s{4,}/gs, "\n");
    propsContent = propsContent.replace(/\s*}\)/gs, "\n})");
    const thisProp = text.match(/th[ia][st]\.\w*/gs);
    thisProp.forEach(item => {
      let prop = item.replace(/th[ia][st]\./g, "");
      prop = prop.replace(/\s/gs, "");
      if (prop && propsContent.includes(prop)) {
        watchCode = watchCode.replace(
          new RegExp(`=> ${prop}`),
          `=> props.${prop}`
        );
        watchCode = watchCode.replace(
          new RegExp(`th[ia][st]\\.${prop}`, "gs"),
          `props.${prop}`
        );
        methodsCode = methodsCode.replace(
          new RegExp(`th[ia][st]\\.${prop}`, "gs"),
          `props.${prop}`
        );
        jsFooterCode = jsFooterCode.replace(
          new RegExp(`th[ia][st]\\.${prop}`, "gs"),
          `props.${prop}`
        );
      }
    });
  }
  const propsCode = propsContent;

  // 13. 处理路由
  const importRouter = text.includes(".$router.") ? "useRouter" : "";
  const importRoute = text.includes(".$route.") ? "useRoute" : "";
  if (importRouter || importRoute) {
    jsHeadCode += `
      \nimport { ${importRouter}${
      importRouter && importRoute ? `, ${importRoute}` : importRoute
    } } from 'vue-router'\n
    `;
    jsHeadCode += `${propsContent ? "\n" + propsContent : ""}`;
    jsHeadCode += `${importRouter ? "\nconst router = useRouter()\n" : ""}`;
    jsHeadCode += `${importRouter ? `` : "\n"}${
      importRoute ? "const route = useRoute()" : ""
    }`;
    methodsCode = methodsCode.replace(/th[ia][st]\.\$router/gs, "router");
    methodsCode = methodsCode.replace(/th[ia][st]\.\$route/gs, "route");
    jsFooterCode = jsFooterCode.replace(/th[ia][st]\.\$router/gs, "router");
    jsFooterCode = jsFooterCode.replace(/th[ia][st]\.\$route/gs, "route");
  }

  // 14. 拼凑并输出代码
  dataCode = "\n" + dataCode;
  watchCode = "\n" + watchCode;
  let resultText = `
     ${htmlCode}\n\n${jsHeadCode}${propsCode}${dataCode}${watchCode}
     ${methodsCode}${jsFooterCode}\n${styleCode}
  `;
  resultText = resultText.replace(/th[ia][st]\./gs, "");
  return resultText;
}

const fs = require("fs");
const path = require("path");
// 要读取的文件夹路径
const folderPath = "src/views/exampleUpdateVue";
/* 读取文件夹中的所有文件 */
fs.readdir(folderPath, (err, files) => {
  if (err) throw err;
  // 遍历每个文件名并输出对应的文件路径
  files.forEach(file => {
    const vue2CodePath = path.join(folderPath, file);
    // 读取Vue2代码文件
    fs.readFile(vue2CodePath, "utf8", (err, data) => {
      if (err) throw err;
      // 替换代码
      const vue3Code = handleVueJs(data);
      // 获取最后一个斜杠的位置
      const lastIndex = vue2CodePath.lastIndexOf("\\");
      // 获取斜杠后面的字符并转换为大写
      const newChar = vue2CodePath.charAt(lastIndex + 1).toUpperCase();
      // 创建的文件的完整路径和文件名
      const vue3CodePath = `${vue2CodePath.substring(
        0,
        lastIndex + 1
      )}new${newChar}${vue2CodePath.substring(lastIndex + 2)}`;
      // 写入Vue3代码文件
      fs.writeFile(vue3CodePath, vue3Code, err => {
        if (err) throw err;
      });
    });
  });
});
