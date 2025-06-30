<template>
  <div>
    <div class="form-tips">
      {{
        `配置规则：\n
      1. 输入法需要切换为英文；\n
      2. 第一个输入符号必须为“=”；\n
      3. 当输入：“=” “+” “-” “*” “/” “(” 时，系统会唤出子表单相关数字字段`
      }}
    </div>
    <el-row style="position: relative; line-height: 1">
      <div
        v-if="
          ['=', '+', '-', '*', '/', '(', ')'].includes(
            inputVal[inputVal.length - 1]
          )
        "
        :style="`top: 40px;left: ${formulaWidth}px`"
        class="choose_item"
      >
        <div class="search-item">
          <el-input
            v-model="filterValue"
            size="mini"
            suffix-icon="el-icon-search"
            placeholder="搜索"
          />
        </div>
        <div
          v-for="(item, index) in propFilter"
          :key="index"
          class="item"
          @click="handlePop('formulaText', item.value)"
        >
          <span>{{ item.label }}</span>
        </div>
      </div>
      <el-input
        id="formulaText"
        v-model="inputVal"
        :class="{ 'error-input': !!checkState }"
        maxlength="300"
        show-word-limit
        placeholder="请输入内容"
        @input="handleInput"
      />
      <span v-show="!!checkState" class="error-tip">{{ checkState }}</span>
    </el-row>
  </div>
</template>

<script setup>
import { checkCalcExpressionValid, checkPopList } from "@/utils/formula";

const props = defineProps({
  propList: {
    type: Array,
    default: () => []
  },
  type: {
    type: Number,
    default: 0
  },
  formulaValue: {
    type: String,
    default: ""
  }
});
const emits = defineEmits(["sendInputResult"]);
const inputVal = ref("=");
const valResult = ref([]);
const formulaWidth = ref(1);
const formulaList = ref(["=", "+", "-", "*", "/", "(", ")"]);
const filterValue = ref("");
const checkState = ref(null);

const propFilter = computed(() => {
  return props.propList.filter(item => item.label.match(this.filterValue));
});

watch(
  formulaValue.value,
  newV => {
    const valueList = newV
      .split(/([\=\+\-\*\/\(\)])/)
      .filter(calculation => calculation.trim() !== "");
    valueList.forEach((valItem, i) => {
      const isValueKey = this.propList.find(item => item.value === valItem);
      if (isValueKey) valueList[i] = isValueKey.label;
    });
    inputVal.value = valueList.join("") || "=";
  },
  { deep: true, immediate: true }
);

watch(inputVal, newV => {
  // 设置结果
  const inputProps = inputVal.value
    .split(/([\=\+\-\*\/\(\)])/)
    .filter(calculation => calculation.trim() !== "");
  const propLen = inputProps.filter(
    item => !["=", "+", "-", "*", "/", "(", ")"].includes(item)
  );
  valResult.value.splice(propLen.length);
  let newCheckState = checkCalcExpressionValid(newV);
  if (!newCheckState) newCheckState = checkPopList(this.propList, newV);
  checkState.value = newCheckState;
  emits("sendInputResult", inputVal.value, valResult.value, checkState.value);
});
/* 输入 */
function handleInput(value) {
  const elInput = document.getElementById("formulaText");
  let endPos = elInput.selectionEnd;
  const reg = /^[0-9.]*$/;
  const newValue = value.substr(endPos - 1, 1);
  // 判断删除还是输入
  if (value.length > formulaValue.value.length) {
    // 输入
    if (formulaList.value.indexOf(newValue) === -1 && !reg.test(newValue))
      return;
    if (newValue === "(") {
      value = value.slice(0, endPos) + ")" + value.slice(endPos);
      elInput.value = value;
      elInput.focus();
      elInput.selectionStart = endPos;
      elInput.selectionEnd = endPos;
    }
  } else {
    // 删除
    const formulaList = value.split(/[-+*\/\=()∑]/);
    const isNum = /^[0-9]+.?[0-9]*$/;
    if (formulaValue.value.substr(endPos, 1) === ")") {
      const index = value.lastIndexOf("(", endPos);
      value = value.slice(0, index) + value.slice(endPos);
    } else {
      try {
        formulaList.forEach(item => {
          if (
            propList.value.findIndex(({ name }) => item === name) === -1 &&
            item &&
            !isNum.test(item)
          ) {
            // 获取删除变量后的焦点
            for (let i = endPos; i <= value.length; i++) {
              if (
                formulaList.value.indexOf(value.slice(i, i + 1)) !== -1 ||
                value.slice(i, i + 1) === ""
              ) {
                endPos = i;
                break;
              }
            }
            value = value.slice(0, endPos - item.length) + value.slice(endPos);
            elInput.value = value;
            elInput.focus();
            elInput.selectionStart = endPos - item.length;
            elInput.selectionEnd = endPos - item.length;
            throw new Error();
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
  formulaWidth.value = getTextWidth.value(
    value.substr(0, endPos - 1),
    "bold 12pt arial"
  );
}
/* */
function getTextWidth(text, font) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  const { width } = context.measureText(text);
  return width > 700 ? 700 : width;
}
/* */
function handlePop(id, insertTxt) {
  const tarLabel = propList.value.find(item => item.value === insertTxt).label;
  const elInput = document.getElementById(id);
  const startPos = elInput.selectionStart;
  const endPos = elInput.selectionEnd;
  if (startPos === undefined || endPos === undefined) return;
  const txt = elInput.value;
  const result = txt.substring(0, startPos) + tarLabel + txt.substring(endPos);
  elInput.value = result;
  elInput.focus();
  elInput.selectionStart = startPos + tarLabel.length;
  elInput.selectionEnd = startPos + tarLabel.length;
  valResult.value.push(insertTxt);
  inputVal.value = result;
}
</script>

<style lang="scss" scoped>
:deep {
  .el-input__inner {
    padding-right: 60px;
  }

  .error-input {
    .el-input__inner {
      border-color: #ff3b30;
    }
  }
}

.form-tips {
  position: relative;
  padding-left: 8px;
  margin-bottom: 20px;
  font-size: 13px;
  line-height: 1;
  color: rgb(0 0 0 / 65%);
  white-space: pre-line;

  &::before {
    position: absolute;
    top: 14px;
    left: -0;
    color: #ff3b30;
    content: "*";
  }
}

.choose_item {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 160px;
  max-height: 190px;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;

  .search-item {
    padding: 8px;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 18px;
    cursor: pointer;

    &:hover {
      background-color: #edf0f4;
    }

    span {
      font-size: 14px;
      color: #757a90;
    }
  }
}

.error-tip {
  font-size: 12px;
  color: #ff3b30;
}
</style>
