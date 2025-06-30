<template>
  <div class="child-table-container">
    <el-form
      ref="childTableForm"
      :model="tableData"
      :disabled="disabled"
      :class="childClass"
    >
      <el-table :data="tableData.data" fit border class="child-table">
        <el-table-column label="序号" width="50px" align="center" fixed="left">
          <template v-slot="{ $index }">
            <div
              @mouseenter="hoverRowI = $index + 1"
              @mouseleave="hoverRowI = null"
            >
              <el-button
                v-if="hoverRowI === $index + 1 && !disabled"
                :icon="Delete"
                type="danger"
                circle
                size="small"
                title="删除"
                @click="delTable($index)"
              />
              <span v-else>{{ $index + 1 }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-for="(item, propI) in tableConfigData"
          :key="propI"
          :label="item.attribute[0].value || item.attribute[0].label"
          :prop="item.vModel"
          :label-class-name="tarVal(propI, 'required') ? 'required-col' : ''"
          min-width="160px"
        >
          <template v-slot="{ row, $index }">
            <el-form-item
              :prop="`${item[item.vModel]}`"
              :class="{
                'required-input':
                  tarVal(propI, 'required') &&
                  !tableData.data[$index][item.vModel]
              }"
            >
              <!-- 单行文本, 多行文本 -->
              <el-input
                v-if="[0, 1].includes(item.key)"
                v-model="row[item.vModel]"
                :placeholder="tarVal(propI, 'placeholder') || item.placeholder"
                :disabled="handleInputDisabled(item)"
                :title="handleInputDisabled(item) ? '该字段已被关联' : ''"
                v-bind="item.props"
              />
              <!-- 数字 -->
              <el-input
                v-if="[2].includes(item.key)"
                v-model="row[item.vModel]"
                :placeholder="
                  !!tarVal(propI, 'calculation')
                    ? '自动计算'
                    : tarVal(propI, 'placeholder') || item.placeholder
                "
                :disabled="!!tarVal(propI, 'calculation')"
                :title="
                  handleInputDisabled(item)
                    ? '该字段已被关联'
                    : tarVal(propI, 'calculation')
                "
                :min="tarVal(propI, 'minNum')"
                :max="tarVal(propI, 'maxNum')"
                v-bind="item.props"
                @input="val => handleNumberInput(val, item, $index)"
                @blur="
                  handleDecimalPlaces(
                    row[item.vModel],
                    item,
                    $index,
                    tarVal(propI, 'minNum'),
                    tarVal(propI, 'maxNum')
                  )
                "
              />
              <!-- 普通下拉 -->
              <el-select
                v-if="item.key === 6"
                v-model="row[item.vModel]"
                :placeholder="tarVal(propI, 'placeholder') || item.placeholder"
                @change="
                  val =>
                    handleChildSel(val, item, $index, tarChildOpt(row, item))
                "
              >
                <el-option
                  v-for="(optionItem, index) in tarChildOpt(row, item)"
                  :key="index"
                  :label="optionItem.label"
                  :value="optionItem.value"
                />
              </el-select>
              <!--日期-->
              <el-date-picker
                v-else-if="item.key === 3"
                v-model="row[item.vModel]"
                :placeholder="tarVal(propI, 'placeholder') || item.placeholder"
                :value-format="'yyyy-MM-dd hh:mm:ss'"
                v-bind="item.props"
                clearable
              />
              <!-- 科目 -->
              <el-select
                v-else-if="item.key === 14"
                v-model="row[item.vModel]"
                :placeholder="tarVal(propI, 'placeholder') || item.placeholder"
                :remote-method="
                  val => getTarSelOption('subject', val, 'search')
                "
                filterable
                clearable
                remote
                @focus="getTarSelOption('subject', '', 'focus')"
                @clear="row[item.vModel] = null"
                @change="
                  val =>
                    handleChoiceLabel(
                      val,
                      $index,
                      item.vModel,
                      totalList.subjectList,
                      'id'
                    )
                "
              >
                <el-option
                  v-for="(listItem, i) in totalList.subjectList"
                  :key="i"
                  :label="listItem.label"
                  :value="listItem.id"
                />
              </el-select>
              <!-- 客户 -->
              <el-select
                v-else-if="item.key === 15"
                v-model="row[item.vModel]"
                :placeholder="tarVal(propI, 'placeholder') || item.placeholder"
                :remote-method="
                  val => getTarSelOption('customer', val, 'search')
                "
                filterable
                clearable
                remote
                @focus="getTarSelOption('customer', '', 'focus')"
                @clear="row[item.vModel] = null"
                @change="
                  val =>
                    handleChoiceLabel(
                      val,
                      $index,
                      item.vModel,
                      totalList.customerList,
                      'id'
                    )
                "
              >
                <el-option
                  v-for="(listItem, i) in totalList.customerList"
                  :key="i"
                  :label="listItem.label"
                  :value="listItem.id"
                />
              </el-select>
              <!-- 商品 -->
              <el-select
                v-else-if="item.key === 16"
                v-model="row[item.vModel]"
                :placeholder="tarVal(propI, 'placeholder') || item.placeholder"
                :remote-method="val => getTarSelOption('goods', val, 'search')"
                filterable
                clearable
                remote
                @focus="getTarSelOption('goods', '', 'focus')"
                @clear="row[item.vModel] = null"
                @change="
                  val =>
                    handleChoiceLabel(
                      val,
                      $index,
                      item.vModel,
                      totalList.goodsList,
                      'id'
                    )
                "
              >
                <el-option
                  v-for="(listItem, i) in totalList.goodsList"
                  :key="i"
                  :label="listItem.label"
                  :value="listItem.id"
                />
              </el-select>
              <!-- 供应商 -->
              <el-select
                v-else-if="item.key === 17 && !item.isCompany"
                v-model="row[item.vModel]"
                :placeholder="tarVal(propI, 'placeholder') || item.placeholder"
                :remote-method="
                  val => getTarSelOption('supplier', val, 'search')
                "
                filterable
                clearable
                remote
                @focus="getTarSelOption('supplier', '', 'focus')"
                @clear="row[item.vModel] = null"
                @change="
                  val =>
                    handleChoiceLabel(
                      val,
                      $index,
                      item.vModel,
                      totalList.supplierList,
                      'id'
                    )
                "
              >
                <el-option
                  v-for="(listItem, i) in totalList.supplierList"
                  :key="i"
                  :label="listItem.label"
                  :value="listItem.id"
                />
              </el-select>
              <!-- 银行信息 -->
              <el-select
                v-else-if="item.key === 18"
                v-model="row[item.vModel]"
                :placeholder="tarVal(propI, 'placeholder') || item.placeholder"
                :remote-method="
                  val => getTarSelOption('bankInfo', val, 'search')
                "
                filterable
                clearable
                remote
                @focus="getTarSelOption('bankInfo', '', 'focus')"
                @clear="row[item.vModel] = null"
                @change="
                  val =>
                    handleChoiceLabel(
                      val,
                      $index,
                      item.vModel,
                      totalList.bankInfoList,
                      'id'
                    )
                "
              >
                <el-option
                  v-for="(listItem, i) in totalList.bankInfoList"
                  :key="i"
                  :label="listItem.label"
                  :value="listItem.id"
                />
              </el-select>
              <!-- 期间 -->
              <el-select
                v-else-if="item.key === 19"
                v-model="row[item.vModel]"
                :placeholder="tarVal(propI, 'placeholder') || item.placeholder"
                filterable
                clearable
                remote
                @focus="getTarSelOption('period', '', 'focus')"
                @clear="row[item.vModel] = null"
                @change="
                  val =>
                    handleChoiceLabel(
                      val,
                      $index,
                      item.vModel,
                      totalList.periodList,
                      'id'
                    )
                "
              >
                <el-option
                  v-for="(listItem, i) in totalList.periodList"
                  :key="i"
                  :label="listItem.label"
                  :value="listItem.id"
                />
              </el-select>
            </el-form-item>
          </template>
        </el-table-column>
      </el-table>
      <el-button v-if="!disabled" size="small" type="primary" @click="addTable"
        >+ 添加数据</el-button
      >
    </el-form>
  </div>
</template>
<script setup>
import handleForm from "./handleForm.ts";
import { ElMessageBox } from "element-plus";
import { Delete } from "@element-plus/icons-vue";

const emits = defineEmits(["getChildForm", "handleNumInput"]);
const props = defineProps({
  // 子表单结构
  tableConfigData: {
    type: Array,
    default: () => []
  },
  // 子表单数据
  childTableData: {
    type: Array,
    default: () => []
  },
  // 类名(子表单唯一类名)
  className: {
    type: String,
    default: ""
  },
  // 是否可编辑
  disabled: {
    type: Boolean,
    default: false
  }
});

const childClass = ref(props.className);
const hoverRowI = ref(null);
const tableConfigData = ref(props.tableConfigData);
const tableData = ref({
  data: []
});
const selectMateData = [
  { key: 14, type: "subject" },
  { key: 15, type: "customer" },
  { key: 16, type: "goods" },
  { key: 17, type: "supplier" },
  { key: 18, type: "bankInfo" },
  { key: 19, type: "period" }
];
const totalList = reactive({
  subjectList: [],
  customerList: [],
  goodsList: [],
  supplierList: [],
  bankInfoList: [],
  periodList: []
});
const calculationList = [];
const selParentMate = [];
const defaultPropVal = [];

/* 获取子级下拉 */
const tarChildOpt = computed(() => (row, obj) => {
  const parentLevel = selParentMate.find(item => item.child === obj.vModel);
  let options = [];
  for (const tarAttr of obj.attribute) {
    if (tarAttr.key === 10) {
      options = tarAttr.value || tarAttr.options;
      break;
    }
  }
  if (parentLevel)
    return options.filter(
      item => item.parentVModel === row[parentLevel.parent]
    );
  else return options;
});

/* 获取某属性值 */
const tarVal = computed(() => (index, vModel) => {
  return getTarVal(index, vModel);
});

/* 单行文本禁用状态 */
const handleInputDisabled = computed(() => tar => {
  for (const item of tableConfigData.value) {
    if (item.key === 2) {
      for (const tarProp of item.attribute) {
        if (
          tarProp.key === 6 &&
          (tarProp.value === tar.vModel || tarProp.chn === tar.vModel)
        ) {
          return true;
        }
      }
    }
  }
  return false;
});

/**
 * 数据监听
 */
watch(
  () => props.tableConfigData,
  async newV => {
    tableConfigData.value = newV;
    tableConfigData.value.forEach(item => {
      if ([0, 1, 2, 6].includes(item.key)) {
        for (const tarProp of item.attribute) {
          if (tarProp.key === 2 && (tarProp.value || tarProp[tarProp.vModel])) {
            defaultPropVal.push({
              vModel: item.vModel,
              defaultVal: tarProp.value || tarProp[tarProp.vModel]
            });
            break;
          }
        }
      }
      if (item.key === 6) {
        for (const tarProp of item.attribute) {
          if (tarProp.key === 9 && (tarProp.value || tarProp[tarProp.vModel])) {
            selParentMate.push({
              parent: tarProp.value || tarProp[tarProp.vModel],
              child: item.vModel
            });
            break;
          }
        }
      }
    });
    handleSelectRequest();
  },
  { deep: true, immediate: true }
);
watch(
  () => tableData.value.data,
  newV => {
    emits("getChildForm", newV);
  },
  { deep: true }
);
watch(
  () => props.childTableData,
  async newV => {
    if (JSON.stringify(newV) === JSON.stringify(tableData.value.data)) return;
    tableData.value.data = [...newV];
    handleDefaultRemoteSel();
  },
  { deep: true }
);

/* 获取目标值 */
function getTarVal(index, vModel) {
  let calculationProp = [];
  for (const tarProp of props.tableConfigData[index].attribute) {
    if (tarProp.vModel === vModel) {
      const tarPropVal = tarProp.value || tarProp[tarProp.vModel];
      if (vModel === "calculation" && tarPropVal) {
        calculationProp = tarPropVal
          .split(/([\=\+\-\*\/\(\)])/)
          .filter(calculation => calculation.trim() !== "");
        if (!calculationList.find(item => item.calculation === tarPropVal)) {
          calculationList.push({
            tarProp: props.tableConfigData[index],
            calculation: tarPropVal
          });
        }
      }
      if (!calculationProp[0]) return tarPropVal;
    }
  }
  if (calculationProp[0]) {
    calculationProp.forEach((item, index) => {
      if (!["=", "+", "-", "*", "/", "(", ")"].includes(item)) {
        const tarProp = props.tableConfigData.find(
          tarProp => tarProp.vModel === item
        );
        calculationProp[index] =
          tarProp.attribute[0].value ||
          tarProp.attribute[0][tarProp.attribute[0].vModel];
      }
    });
    return calculationProp.join("");
  }
}

/* 处理默认选中的远程搜索 */
function handleDefaultRemoteSel() {
  tableData.value.data.forEach(row => {
    for (const prop of Object.keys(row)) {
      const selectMateType = selectMateData.map(item => item.type);
      let specialSel = "";
      for (const selProp of selectMateType) {
        specialSel = prop.includes(selProp) ? selProp : "";
        if (specialSel) break;
      }
      if (
        !specialSel ||
        totalList[`${specialSel}List`].find(
          item => item.id === row[prop.replace("~label", "")]
        )
      )
        continue;
      if (prop.includes("~label") && row[prop]) {
        totalList[`${specialSel}List`].push({
          label: row[prop],
          id: row[prop.replace("~label", "")]
        });
      }
    }
  });
}

/* 处理父级下拉 */
function handleChildSel(val, obj, rowI, list) {
  handleChoiceLabel(val, rowI, obj.vModel, list);
  for (const itemSel of selParentMate) {
    if (itemSel.parent === obj.vModel) {
      tableData.value.data[rowI][itemSel.child] = "";
      tableData.value.data[rowI][`${itemSel.child}~label`] = "";
      break;
    }
  }
}

/* 可选字段添加中文键值 */
function handleChoiceLabel(val, rowI, name, list, valKey, labelKey) {
  const tarSelObj = list.find(item => item[valKey || "value"] === val);
  if (tarSelObj)
    tableData.value.data[rowI][`${name}~label`] =
      tarSelObj[labelKey || "label"];
  else tableData.value.data[rowI][`${name}~label`] = "";
}

/* 清空上级科目 */
function clearSubject(obj) {
  tableData.value.data.forEach(item => {
    item[obj.childSubject] = "";
    item[`${obj.childSubject}~label`] = "";
  });
}

/* 检验必填 */
function handleRequired() {
  const childForm = document.getElementsByClassName(childClass.value)[0];
  const requiredDom = childForm.getElementsByClassName("required-input");
  return Array.from(requiredDom).length === 0;
}

/* 数字框输入 */
function handleNumberInput(val, tarObj, rowI) {
  handleCalculation(val, tarObj, rowI);
  handleChn(val, tarObj, rowI);
  emits("handleNumInput", val, tarObj, rowI);
}

/* 处理公式计算 */
function handleCalculation(val, tarObj, rowI) {
  calculationList.forEach(item => {
    const calculationProps = String(item.calculation)
      .split(/([\=\+\-\*\/\(\)])/)
      .filter(calculation => calculation.trim() !== "");
    const calculationVal = [...calculationProps];
    if (calculationVal.includes(tarObj.vModel)) {
      let decimalPlaces = 0;
      for (const childProp of tableConfigData.value) {
        const childPropTarI = [];
        calculationProps.forEach((tarProp, propI) => {
          if (tarProp === childProp.vModel) childPropTarI.push(propI);
        });
        childPropTarI.forEach(tarI => {
          if (childProp.key === 2 && tarI >= 0) {
            calculationVal[tarI] =
              Number(tableData.value.data[rowI][childProp.vModel]) || 0;
            const valPointList = String(calculationVal[tarI]).split(".");
            if (valPointList[1] && decimalPlaces < valPointList[1].length) {
              decimalPlaces = valPointList[1].length;
            }
          }
        });
      }
      tableData.value.data[rowI][item.tarProp.vModel] = eval(
        calculationVal.join("").replace("=", "")
      ).toFixed(decimalPlaces);
      handleNumberInput(
        tableData.value.data[rowI][item.tarProp.vModel],
        item.tarProp,
        rowI
      );
    }
  });
}

/* 处理小数位 */
function handleDecimalPlaces(val, tarObj, rowI, min, max) {
  let decimalPlaces = null;
  for (const item of tarObj.attribute) {
    if (item.key === 5 && (item.value !== null || item[item.vModel] !== null)) {
      decimalPlaces = item.value || item[item.vModel];
      break;
    }
  }
  if (decimalPlaces !== null && val.includes(".")) {
    if (val.split(".")[1].length > decimalPlaces) {
      tableData.value.data[rowI][tarObj.vModel] =
        Number(val).toFixed(decimalPlaces);
      emits("handleNumInput", val, tarObj, rowI);
    }
  }
  if (val < min) tableData.value.data[rowI][tarObj.vModel] = String(min);
  if (val > max) tableData.value.data[rowI][tarObj.vModel] = String(min);
  handleCalculation(val, tarObj, rowI);
}

/* 处理中文大写 */
function handleChn(val, tarObj, i) {
  let chn = null;
  for (const item of tarObj.attribute) {
    if (item.key === 6 && (item.value || item[item.vModel])) {
      chn = item.value || item[item.vModel];
      break;
    }
  }
  if (chn)
    tableData.value.data[i][chn] = handleForm.arabicNumeralsTurnCn(Number(val));
}

/* 根据存在的下拉字段选择请求接口 */
function handleSelectRequest() {
  for (const item of props.tableConfigData) {
    const isSpecialSel = selectMateData.find(tarSel => tarSel.key === item.key);
    if (isSpecialSel !== undefined) {
      const tarType = selectMateData.find(
        itemSel => itemSel.key === item.key
      ).type;
      getTarSelOption(tarType, "", "", item.value);
    }
  }
}

/* 获取目标下拉分页数据 */
function getTarSelOption(type, name, status, ids, obj) {
  if (!totalList[`${type}List`]) totalList[`${type}List`] = [];
  let queryPage =
    Number((totalList[`${type}List`].length / 100).toFixed(0)) + 1;
  if (status === "focus" && totalList[`${type}List`][0]) {
    if (obj && obj.name.includes("associatedData")) queryPage = 1;
    else return;
  }
  if (status === "search") {
    totalList[`${type}List`] = [];
    queryPage = 1;
  }
  const tarType = selectMateData.find(item => item.type === type).type;
  const queryInfo = {
    ids: ids || [],
    name,
    fieldType: tarType,
    size: 100,
    page: queryPage
  };
  if (obj && obj.name.includes("associatedData"))
    queryInfo.quoteFormId = obj.associatedId;
  totalList[`${type}List`] = handleUnique([]);
}

/* 下拉数据去重 */
function handleUnique(list) {
  const res = new Map();
  return list.filter(a => !res.has(a.id) && res.set(a.id, 1));
}

/* 添加数据 */
function addTable() {
  const newTableData = {};
  props.tableConfigData.forEach(item => {
    const haveDefaultVal = defaultPropVal.find(
      prop => prop.vModel === item.vModel
    );
    if (!haveDefaultVal) newTableData[item.vModel] = "";
    else newTableData[item.vModel] = haveDefaultVal.defaultVal;
  });
  tableData.value.data.push(newTableData);
}

/* 删除表格 */
function delTable(i) {
  ElMessageBox.confirm("确定要删除该条数据吗?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  })
    .then(() => {
      tableData.value.data.splice(i, 1);
    })
    .catch(() => {
      return;
    });
}

defineExpose({
  clearSubject,
  handleRequired
});
</script>
<style lang="scss" scoped>
:deep {
  .el-table__header,
  .el-table__empty-block {
    width: 100% !important;
  }

  .el-form-item,
  .el-select {
    width: 100% !important;
  }

  .cell {
    padding: 10px;
  }

  .el-table__cell:first-child .cell {
    justify-content: center;
  }

  .required-col .cell {
    position: relative;
    padding-left: 23px !important;

    &::before {
      position: absolute;
      left: 15px;
      color: #f56c6c;
      content: "*";
    }
  }

  .required-input .el-input__inner {
    border-color: #f56c6c;
  }
}
</style>
