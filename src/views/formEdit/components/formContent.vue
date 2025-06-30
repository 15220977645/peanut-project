<template>
  <div v-loading="loadData" class="form-content-container">
    <el-form ref="form" :model="formData" :disabled="disabled" class="form-box">
      <div v-for="(item, index) in formAttribute" :key="index">
        <el-form-item
          :label="item.label"
          :prop="item.name"
          :style="{ width: item.rowWidth || '50%' }"
          :rules="item.rules"
          :class="{ 'line-item': item.domData.key === 7 }"
        >
          <!--文本框-->
          <el-input
            v-if="[0, 1].includes(item.domData.key)"
            v-model="formData[item.name]"
            :type="item.domData.key === 1 ? 'textarea' : 'text'"
            :placeholder="item.placeholder"
            :disabled="handleInputDisabled(item)"
            :title="handleInputDisabled(item) ? '该字段已被关联' : ''"
            :autosize="{ minRows: 1, maxRows: 2 }"
            clearable
          />
          <!--数字框-->
          <el-input
            v-else-if="item.domData.key === 2"
            v-model="formData[item.name]"
            :placeholder="item.placeholder"
            :disabled="handleInputDisabled(item)"
            :title="handleInputDisabled(item) ? '该字段已被关联' : ''"
            :min="item.minNum"
            :max="item.maxNum"
            type="number"
            clearable
            @input="val => handleNumberInput(val, item)"
            @blur="handleDecimalPlaces(formData[item.name], item)"
          />
          <!--日期-->
          <el-date-picker
            v-else-if="item.domData.key === 3"
            v-model="formData[item.name]"
            :placeholder="item.placeholder"
            :type="item.dateType"
            :value-format="'yyyy-MM-dd HH:mm:ss'"
            clearable
          />
          <!--单选框-->
          <el-radio-group
            v-else-if="item.domData.key === 4"
            v-model="formData[item.name]"
            @change="val => handleChoiceLabel(val, item.name, item.option)"
          >
            <el-radio
              v-for="(item, i) in item.option"
              :key="i"
              :label="item.value"
              border
              >{{ item.label }}</el-radio
            >
          </el-radio-group>
          <!--复选框-->
          <el-checkbox-group
            v-else-if="
              item.domData.key === 5 && Array.isArray(formData[item.name])
            "
            v-model="formData[item.name]"
            @change="val => handleChoiceLabel(val, item.name, item.option)"
          >
            <el-checkbox
              v-for="(item, i) in item.option"
              :key="i"
              :label="item.value"
              border
              >{{ item.label }}</el-checkbox
            >
          </el-checkbox-group>
          <!--下拉单选框-->
          <el-select
            v-else-if="item.domData.key === 6"
            v-model="formData[item.name]"
            :placeholder="item.placeholder"
            clearable
            @change="val => handleSelChange(val, item, handleSelOption(item))"
          >
            <el-option
              v-for="(item, i) in handleSelOption(item)"
              :key="i"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <!-- 分割线 -->
          <hr v-else-if="item.domData.key === 7" :class="item.lineClass" />
          <!-- 图片 -->
          <!--<UploadImgOss
            v-else-if="item.domData.key === 8"
            :ref="`Upload-${item.name}`"
            :file-list="formData[item.name]"
            @getFileList="
              (file, status, ref) => getFileList(file, status, ref, item.name)
            "
          /> -->
          <!-- 附件 -->
          <!-- <UploadFileOss
            v-else-if="item.domData.key === 9"
            :ref="`Upload-${item.name}`"
            :file-list="formData[item.name]"
            @getFileList="
              (file, status, ref) => getFileList(file, status, ref, item.name)
            "
          /> -->
          <!-- 公司 -->
          <el-select
            v-else-if="item.domData.key === 10 && item.isCompany"
            v-model="formData[item.name]"
            :placeholder="item.placeholder"
            filterable
            clearable
            @change="
              val =>
                handleChoiceLabel(val, item.name, totalList.companyList, 'id')
            "
          >
            <el-option
              v-for="(item, i) in totalList.companyList"
              :key="i"
              :label="item.label"
              :value="item.id"
            />
          </el-select>
          <!-- 部门 -->
          <el-select
            v-else-if="item.domData.key === 10 && !item.isCompany"
            v-model="formData[item.name]"
            :placeholder="item.placeholder"
            :remote-method="val => getTarSelOption('orgUnit', val, 'search')"
            filterable
            clearable
            remote
            @clear="formData[item.name] = null"
            @focus="getTarSelOption('orgUnit', '', 'focus')"
            @change="
              val =>
                handleChoiceLabel(val, item.name, totalList.orgUnitList, 'id')
            "
          >
            <el-option
              v-for="(item, i) in totalList.orgUnitList"
              :key="i"
              :label="item.label"
              :value="item.id"
            />
          </el-select>
          <!-- 用户 -->
          <el-select
            v-else-if="item.domData.key === 11"
            v-model="formData[item.name]"
            :placeholder="item.placeholder"
            :remote-method="val => getTarSelOption('user', val, 'search')"
            filterable
            clearable
            remote
            @focus="getTarSelOption('user', '', 'focus')"
            @clear="formData[item.name] = null"
            @change="
              val => handleChoiceLabel(val, item.name, totalList.userList, 'id')
            "
          >
            <el-option
              v-for="(item, i) in totalList.userList"
              :key="i"
              :label="item.label"
              :value="item.id"
            />
          </el-select>
          <!-- 关联数据 -->
          <div v-else-if="item.domData.key === 12" class="associated-content">
            <el-select
              v-model="formData[item.name]"
              :placeholder="item.placeholder"
              :remote-method="
                val =>
                  getTarSelOption('associatedData', val, 'search', [], item)
              "
              :class="`${item.name}-sel`"
              filterable
              clearable
              remote
              @focus="getTarSelOption('associatedData', '', 'focus', [], item)"
              @clear="formData[item.name] = null"
              @change="
                val =>
                  handleChoiceLabel(
                    val,
                    item.name,
                    totalList.associatedDataList,
                    'id'
                  )
              "
            >
              <el-option
                v-for="(item, i) in totalList.associatedDataList"
                :key="i"
                :label="item.label"
                :value="item.id"
              />
            </el-select>
            <el-button @click="openAssociatedData(item)">查看</el-button>
          </div>
          <!-- 子表单 -->
          <div
            v-else-if="
              item.domData.key === 13 &&
              Array.isArray(formAttribute[index].value)
            "
          >
            <ChildFormTable
              :ref="el => handleChildForm(el, item.name)"
              :class-name="item.name"
              :table-config-data="formAttribute[index].value"
              :child-table-data="formData[item.name]"
              :disabled="disabled"
              @handleNumInput="handleNumInput"
              @getChildForm="data => getChildForm(item.name, data)"
            />
          </div>
          <!-- 科目 -->
          <el-select
            v-else-if="item.domData.key === 14"
            v-model="formData[item.name]"
            :placeholder="item.placeholder"
            :remote-method="val => getTarSelOption('subject', val, 'search')"
            filterable
            clearable
            remote
            @focus="getTarSelOption('subject', '', 'focus')"
            @clear="formData[item.name] = null"
            @change="
              val => handleSelChange(val, item, totalList.subjectList, 'id')
            "
          >
            <el-option
              v-for="(item, i) in totalList.subjectList"
              :key="i"
              :label="item.label"
              :value="item.id"
            />
          </el-select>
          <!-- 客户 -->
          <el-select
            v-else-if="item.domData.key === 15"
            v-model="formData[item.name]"
            :placeholder="item.placeholder"
            :remote-method="val => getTarSelOption('customer', val, 'search')"
            filterable
            clearable
            remote
            @focus="getTarSelOption('customer', '', 'focus')"
            @clear="formData[item.name] = null"
            @change="
              val =>
                handleChoiceLabel(val, item.name, totalList.customerList, 'id')
            "
          >
            <el-option
              v-for="(item, i) in totalList.customerList"
              :key="i"
              :label="item.label"
              :value="item.id"
            />
          </el-select>
          <!-- 商品 -->
          <el-select
            v-else-if="item.domData.key === 16"
            v-model="formData[item.name]"
            :placeholder="item.placeholder"
            :remote-method="val => getTarSelOption('goods', val, 'search')"
            filterable
            clearable
            remote
            @focus="getTarSelOption('goods', '', 'focus')"
            @clear="formData[item.name] = null"
            @change="
              val =>
                handleChoiceLabel(val, item.name, totalList.goodsList, 'id')
            "
          >
            <el-option
              v-for="(item, i) in totalList.goodsList"
              :key="i"
              :label="item.label"
              :value="item.id"
            />
          </el-select>
          <!-- 供应商 -->
          <el-select
            v-else-if="item.domData.key === 17 && !item.isCompany"
            v-model="formData[item.name]"
            :placeholder="item.placeholder"
            :remote-method="val => getTarSelOption('supplier', val, 'search')"
            filterable
            clearable
            remote
            @focus="getTarSelOption('supplier', '', 'focus')"
            @clear="formData[item.name] = null"
            @change="
              val =>
                handleChoiceLabel(val, item.name, totalList.supplierList, 'id')
            "
          >
            <el-option
              v-for="(item, i) in totalList.supplierList"
              :key="i"
              :label="item.label"
              :value="item.id"
            />
          </el-select>
          <!-- 银行信息 -->
          <el-select
            v-else-if="item.domData.key === 18"
            v-model="formData[item.name]"
            :placeholder="item.placeholder"
            :remote-method="val => getTarSelOption('bankInfo', val, 'search')"
            filterable
            clearable
            remote
            @focus="getTarSelOption('bankInfo', '', 'focus')"
            @clear="formData[item.name] = null"
            @change="
              val =>
                handleChoiceLabel(val, item.name, totalList.bankInfoList, 'id')
            "
          >
            <el-option
              v-for="(item, i) in totalList.bankInfoList"
              :key="i"
              :label="item.label"
              :value="item.id"
            />
          </el-select>
          <!-- 期间 -->
          <el-select
            v-else-if="item.domData.key === 19"
            v-model="formData[item.name]"
            :placeholder="item.placeholder"
            :remote-method="val => getTarSelOption('period', val, 'search')"
            filterable
            clearable
            remote
            @focus="getTarSelOption('period', '', 'focus')"
            @clear="formData[item.name] = null"
            @change="
              val =>
                handleChoiceLabel(val, item.name, totalList.periodList, 'id')
            "
          >
            <el-option
              v-for="(item, i) in totalList.periodList"
              :key="i"
              :label="item.label"
              :value="item.id"
            />
          </el-select>
          <!-- 所属项目 -->
          <el-select
            v-else-if="item.domData.key === 20"
            v-model="formData[item.name]"
            :placeholder="item.placeholder"
            :remote-method="
              val => getTarSelOption('belongProject', val, 'search')
            "
            filterable
            clearable
            remote
            @focus="getTarSelOption('belongProject', '', 'focus')"
            @clear="formData[item.name] = null"
            @change="
              val =>
                handleChoiceLabel(
                  val,
                  item.name,
                  totalList.belongProjectList,
                  'id'
                )
            "
          >
            <el-option
              v-for="(item, i) in totalList.belongProjectList"
              :key="i"
              :label="item.label"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
      </div>
    </el-form>
    <el-drawer
      v-if="associatedDrawer"
      :title="`查看关联单据：${associatedDrawerTitle}`"
      v-model:visible="associatedDrawer"
      :wrapper-closable="false"
      :modal="false"
      size="90%"
      class="associated-drawer"
    >
      <div class="form-container">
        <AssociatedContent :associated-id="associatedId" />
      </div>
      <div class="drawer-footer">
        <el-button @click="associatedDrawer = false">关闭</el-button>
      </div>
    </el-drawer>
  </div>
</template>
<script setup>
import { ElMessage } from "element-plus";
import handleForm from "./handleForm.ts";
import ChildFormTable from "./childFormTable.vue";
// import UploadImgOss from "@/components/UploadImgFile/requestOSS";
// import UploadFileOss from "@/components/UploadImgFile/uploadFileOSS";
import AssociatedContent from "./associatedContent.vue";
import { ref, reactive, watch, computed, nextTick } from "vue";

const props = defineProps({
  // 表单结构
  formConfigData: {
    type: Array,
    default: () => []
  },
  // 表单数据
  formPropData: {
    type: Object,
    default: () => {}
  },
  // 是否可编辑
  disabled: {
    type: Boolean,
    default: false
  }
});

const childFormDom = ref([]);
const form = ref();
const loadData = ref(false);
const formAttribute = ref([]);
const formData = ref({});
const associatedDrawer = ref(false);
const associatedId = ref(null);
const associatedDrawerTitle = ref("");
let selLevelData = [];
const selectMateData = [
  { key: 10, type: "orgUnit" },
  { key: 11, type: "user" },
  { key: 12, type: "associatedData" },
  { key: 14, type: "subject" },
  { key: 15, type: "customer" },
  { key: 16, type: "goods" },
  { key: 17, type: "supplier" },
  { key: 18, type: "bankInfo" },
  { key: 19, type: "period" },
  { key: 20, type: "belongProject" }
];
const totalList = reactive({
  companyList: [],
  orgUnitList: [],
  userList: [],
  associatedDataList: [],
  subjectList: [],
  customerList: [],
  goodsList: [],
  supplierList: [],
  bankInfoList: [],
  periodList: [],
  belongProjectList: []
});
const mateSubjectChild = [];
const defaultChn = [];

/* 禁用状态 */
const handleInputDisabled = computed(() => tar => {
  for (const item of formAttribute.value) {
    // 数字字段中文大写
    if (item.inputParams && item.inputParams.chn === tar.name) {
      defaultChn.push({
        name: tar.name,
        value: handleForm.arabicNumeralsTurnCn(item.defaultVale)
      });
      return true;
    }
    // 检索子表单中的数字字段的汇总属性
    if (item.key === 13) {
      for (const childProp of item.fields) {
        if (childProp.key === 2) {
          for (const numProp of childProp.attribute) {
            if ([20, 21].includes(numProp.key)) {
              let status = false;
              status = [numProp.value, numProp[numProp.vModel]].includes(
                tar.name
              );
              if (status) {
                return true;
              }
            }
          }
        }
      }
    }
  }
  return false;
});

/* 处理下拉选项(上下级关系) */
const handleSelOption = computed(() => obj => {
  const parentLevel = selLevelData.find(item => item.child === obj.name);
  if (parentLevel) {
    return obj.option.filter(
      item => item.parentVModel === formData.value[parentLevel.parent]
    );
  } else return obj.option;
});

/**
 * 数据监听
 */
watch(
  () => props.formConfigData,
  newV => {
    init(newV);
  },
  { deep: true, immediate: true }
);

/* 初始化 */
async function init(data) {
  loadData.value = true;
  let handleResult = handleForm.handleRespForm(data);
  handleResult = handleForm.handleFormConfig(handleResult);
  formAttribute.value = handleResult.formAttribute;
  await nextTick();
  selLevelData = handleResult.selLevelData;
  handleChildForm();
  handleChildSubjectMate();
  handleSelectRequest();
  if (!props.formPropData || !Object.keys(props.formPropData)[0])
    formData.value = handleResult.formData;
  else formData.value = props.formPropData;
  handleDefaultRemoteSel();
  defaultChn.forEach(item => {
    formData.value[item.name] = item.value;
  });
  form.value.resetFields();
  loadData.value = false;
}

/* 处理默认选中的远程搜索 */
function handleDefaultRemoteSel() {
  for (const prop of Object.keys(formData.value)) {
    const selectMateType = selectMateData.map(item => item.type);
    let specialSel = "";
    for (const selProp of selectMateType) {
      specialSel = prop.includes(selProp) ? selProp : "";
      if (specialSel) break;
    }
    if (
      !specialSel ||
      totalList[`${specialSel}List`].find(
        item => item.id === formData.value[prop.replace("~label", "")]
      )
    )
      continue;
    if (prop.includes("~label") && formData.value[prop]) {
      totalList[`${specialSel}List`].push({
        label: formData.value[prop],
        id: formData.value[prop.replace("~label", "")]
      });
    }
  }
}

/* 可选字段添加中文键值 */
function handleChoiceLabel(val, name, list, valKey, labelKey) {
  if (Array.isArray(val)) {
    const tarSelArr = list.filter(item =>
      val.includes(item[valKey || "value"])
    );
    if (!tarSelArr[0]) formData.value[`${name}~label`] = "";
    else
      formData.value[`${name}~label`] = tarSelArr
        .map(item => item[labelKey || "label"])
        .join(",");
  } else {
    const tarSelObj = list.find(item => item[valKey || "value"] === val);
    if (!tarSelObj) formData.value[`${name}~label`] = "";
    else formData.value[`${name}~label`] = tarSelObj[labelKey || "label"];
  }
}

/* 实例化子表单 */
function handleChildForm(el, name) {
  const tarChildForm = { name, el };
  if (childFormDom.value.findIndex(item => item.name === name) < 0) {
    if (el && name) childFormDom.value.push(tarChildForm);
  }
}

/* 上级下拉及上级科目 */
function handleSelChange(val, obj, list, valKey, labelKey) {
  handleChoiceLabel(val, obj.name, list, valKey, labelKey);
  if (obj.key === 14) {
    mateSubjectChild.forEach(item => {
      if (item.parentSubject === obj.name) {
        const tarChildDom = childFormDom.value.find(
          tarChild => tarChild.name === item.childForm
        ).el;
        tarChildDom.clearSubject(item);
      }
    });
  }
  for (const item of selLevelData) {
    if (item.parent === obj.name) {
      formData.value[item.child] = "";
      formData.value[`${item.child}~label`] = "";
      return;
    }
  }
}

/* 获取子表单上级科目匹配数据 */
function handleChildSubjectMate() {
  formAttribute.value.forEach(item => {
    if (item.key === 13) {
      item.fields.forEach(childProp => {
        if (childProp.key === 14) {
          for (const tarProp of childProp.attribute) {
            if (
              tarProp.key === 14 &&
              (tarProp.value || tarProp[tarProp.vModel])
            ) {
              const subjectMate = {
                childForm: item.name,
                childSubject: childProp.vModel
              };
              subjectMate[tarProp.vModel] =
                tarProp.value || tarProp[tarProp.vModel];
              mateSubjectChild.push(subjectMate);
              break;
            }
          }
        }
      });
    }
  });
}

/* 获取子表单结果 */
function getChildForm(name, data) {
  formData.value[name] = data;
}

/* 子表单数字框输入 */
function handleNumInput(val, tarObj) {
  let tarChildForm = null;
  // 找出关联字段
  const sumObjName = {
    chn: "",
    number: ""
  };
  tarObj.attribute.forEach(item => {
    if (item.key === 20) sumObjName.chn = item.value || item[item.vModel];
    if (item.key === 21) sumObjName.number = item.value || item[item.vModel];
  });
  if (!sumObjName.chn && !sumObjName.number) return;
  // 找到对应的子表单字段
  for (const item of formAttribute.value) {
    if (item.key === 13) {
      const childProp = Object.keys(formData.value[item.name][0]);
      if (childProp.includes(tarObj.vModel)) {
        tarChildForm = item.vModel;
        break;
      }
    }
  }
  // 计算汇总
  let tarNumSum = 0;
  let decimalPlaces = null;
  formData.value[tarChildForm].forEach(item => {
    const tarVal = item[tarObj.vModel];
    if (
      tarVal.split(".")[1] &&
      tarVal.split(".")[1].length > Number(decimalPlaces)
    )
      decimalPlaces = tarVal.split(".")[1].length;
    tarNumSum += Number(tarVal);
  });
  if (decimalPlaces) tarNumSum = tarNumSum.toFixed(decimalPlaces);
  formData.value[sumObjName.chn] = handleForm.arabicNumeralsTurnCn(tarNumSum);
  formData.value[sumObjName.number] = tarNumSum;
}

/* 获取表单 */
function getFormData() {
  let data = null;
  form.value.validate(valid => {
    if (valid) {
      const saveChild = handleChildRequired();
      if (saveChild) data = formData.value;
    } else ElMessage.warning("请完善必填信息");
  });
  if (data) {
    Object.keys(data).forEach(formProp => {
      if (formProp.includes("childForm")) {
        data[formProp] = data[formProp].filter(item => {
          let haveData = false;
          for (const childProp of Object.keys(item)) {
            if (item[childProp] || item[childProp] === 0) {
              haveData = true;
              break;
            }
          }
          return haveData;
        });
      }
    });
  }
  return data;
}

/* 校验各个子表单必填 */
function handleChildRequired() {
  const childForm = Object.keys(formData.value).filter(item =>
    item.includes("childForm")
  );
  for (const child of childForm) {
    const tarChildDom = childFormDom.value.find(
      tarChild => tarChild.name === child
    ).el;
    if (!tarChildDom.handleRequired()) {
      const tarChild = formAttribute.value.find(item => item.name === child);
      ElMessage.warning(`请完善${tarChild.label}必填信息`);
      return false;
    }
  }
  return true;
}

/* 数字框输入事件 */
function handleNumberInput(val, obj) {
  if (!obj.inputParams || !obj.inputParams.chn) return;
  formData.value[obj.inputParams.chn] = handleForm.arabicNumeralsTurnCn(
    Number(val)
  );
}

/* 处理小数位 */
function handleDecimalPlaces(val, obj) {
  let decimalPlaces = null;
  if (obj.decimalPlaces !== null) decimalPlaces = obj.decimalPlaces;
  if (decimalPlaces !== null && val.includes(".")) {
    if (val.split(".")[1].length > decimalPlaces) {
      formData.value[obj.name] = Number(val).toFixed(decimalPlaces);
      handleNumberInput(formData.value[obj.name], obj);
    }
  }
  if (val < obj.minNum) formData.value[obj.name] = obj.minNum;
  if (val > obj.maxNum) formData.value[obj.name] = obj.maxNum;
}

/* 图片、附件更改事件 */
// function getFileList(data, status, ref, name) {
//   let fileList = [...formData.value[name]];
//   if (status === "add") {
//     fileList.push({
//       fileName: data.fileName,
//       path: data.path,
//       domain: data.domain
//     });
//   } else fileList = fileList.filter(item => item.path !== data.path);
//   formData.value[name] = fileList;
// }

/* 根据存在的下拉字段选择请求接口 */
function handleSelectRequest() {
  for (const item of formAttribute.value) {
    const isSpecialSel = selectMateData.find(
      tarSel => tarSel.key === item.domData.key
    );
    if (isSpecialSel !== undefined) {
      const tarType = selectMateData.find(
        itemSel => itemSel.key === item.domData.key
      ).type;
      if (item.domData.key === 10) {
        if (item.isCompany) {
          getCompanyData();
          if (item.currentUser) {
            formData.value[item.vModel] = JSON.parse(
              sessionStorage.getItem("userInfo")
            ).companyId;
            formData.value[`${item.vModel}~label`] = totalList.companyList.find(
              compI => compI.id === formData.value[item.vModel]
            ).label;
          }
        } else {
          getTarSelOption(tarType, "", "", item.value);
          if (item.currentUser) {
            formData.value[item.vModel] = JSON.parse(
              sessionStorage.getItem("userInfo")
            ).orgUnit.id;
            formData.value[`${item.vModel}~label`] = JSON.parse(
              sessionStorage.getItem("userInfo")
            ).orgUnit.unitName;
          }
        }
      } else getTarSelOption(tarType, "", "", item.value);
    }
  }
}

/* 获取公司数据(不需要分页) */
function getCompanyData() {
  totalList.companyList = [];
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

/* 查看关联数据表 */
function openAssociatedData(obj) {
  if (!formData.value[obj.name]) {
    ElMessage.warning("请选择关联数据");
    return;
  }
  associatedId.value = formData.value[obj.name];
  associatedDrawerTitle.value = formData.value[`${obj.name}~label`];
  associatedDrawer.value = true;
}

defineExpose({
  getFormData
});
</script>
<style lang="scss" scoped>
/* 垂直居中不换行 */
:deep {
  .el-checkbox-group,
  .el-radio-group {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
  }

  .el-checkbox,
  .el-radio {
    display: flex;
    align-items: center;
    padding: 7px 20px 7px 10px;
    margin-bottom: 5px;
    margin-left: 0 !important;
  }

  .el-form {
    .el-form-item {
      display: flex;
      flex-direction: column;

      .el-form-item__label {
        justify-content: flex-start;
        font-weight: normal;
        color: rgba($color: #000, $alpha: 85%);
      }
    }

    .line-item {
      .el-form-item__content {
        width: 80.5%;
      }
    }

    .el-input__inner {
      text-align: left;
    }

    .el-input,
    .el-select,
    .el-textarea {
      width: 350px;
    }

    .associated-content {
      .el-input,
      .el-select {
        width: 270px;
      }
    }

    .is-disabled input {
      color: #606266;
      background-color: #fff;
    }

    .el-icon- {
      transition: all 0.3s;

      &::before {
        content: "\E6E1";
      }
    }

    .is-focus .el-icon- {
      rotate: -180deg;
    }
  }
}

.el-form {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;

  .line-item {
    display: flex;
    flex-direction: unset !important;
    flex-wrap: nowrap;
    align-items: center;
    width: 100% !important;
    font-size: 12px;
    color: #dcdfe6;

    hr {
      border-color: #dcdfe6;
      border-bottom: none;
    }
  }
}

.associated-content {
  display: flex;
  flex-wrap: nowrap;

  .el-button {
    margin-left: 10px;
  }
}

.drawer-footer {
  padding: 10px;
  text-align: right;
  border-top: 1px solid #dcdfe6;
}

.form-box {
  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;
  }
}
</style>
