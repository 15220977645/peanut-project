const options = [
  { label: "选项1", value: 0 },
  { label: "选项2", value: 1 },
  { label: "选项3", value: 2 }
];

const formatOptions = [
  { label: "无", value: "" },
  {
    label: "手机号码",
    value:
      "^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])d{8}$"
  },
  { label: "邮箱", value: "^[w-]+(.[w-]+)*@[w-]+(.[w-]+)+$" },
  {
    label: "身份证号码",
    value:
      "^[1-9]d{5}(18|19|20)d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)d{3}[0-9Xx]$"
  },
  { label: "邮政编码", value: "[1-9]d{5}(?!d)" }
];

const lineOptions = [
  { label: "无", value: "changeLineNone" },
  { label: "虚线", value: "changeLineDashed" },
  { label: "实线", value: "changeLineSolid" }
];

const basicLiData = [
  { key: 0, iconType: "text", text: "单行文本" },
  { key: 1, iconType: "texts", text: "多行文本" },
  { key: 2, iconType: "number", text: "数字" },
  { key: 3, iconType: "date", text: "日期时间" },
  { key: 4, iconType: "radio", text: "单选按钮组" },
  { key: 5, iconType: "checkbox", text: "复选按钮组" },
  { key: 6, iconType: "select", text: "下拉单选框" },
  // { key: 7, iconType: 'selected', text: '下拉复选框' },
  { key: 7, iconType: "line", text: "分割线" }
];

const enhanceLiData = [
  { key: 8, text: "图片" },
  { key: 9, text: "附件" },
  { key: 10, text: "部门" },
  { key: 11, text: "用户" },
  { key: 12, text: "关联数据" },
  { key: 13, text: "子表单" },
  { key: 14, text: "科目" },
  { key: 15, text: "客户" },
  { key: 16, text: "商品" },
  { key: 17, text: "供应商" },
  { key: 18, text: "银行信息" },
  { key: 19, text: "期间" },
  { key: 20, text: "所属项目" }
];

const formDomConfig = [
  {
    key: 0,
    text: "单行文本",
    type: "text",
    placeholder: "请输入内容",
    itemProp: [0, 1, 2, 3, 4, 11, 12]
  },
  {
    key: 1,
    text: "多行文本",
    type: "textArea",
    placeholder: "请输入内容",
    props: { type: "textarea", row: 2 },
    itemProp: [0, 1, 2, 3, 11, 12]
  },
  {
    key: 2,
    text: "数字",
    type: "number",
    placeholder: "请输入内容",
    props: { type: "number" },
    itemProp: [0, 1, 2, 3, 24, 25, 5, 6, 11, 12, 20, 21, 22]
  },
  {
    key: 3,
    text: "日期时间",
    type: "date",
    placeholder: "请选择",
    props: { type: "date" },
    itemProp: [0, 1, 3, 7, 11, 12]
  },
  {
    key: 4,
    text: "单选按钮组",
    type: "radio",
    placeholder: "",
    options: options,
    props: {},
    itemProp: [0, 2, 3, 10, 12]
  },
  {
    key: 5,
    text: "复选按钮组",
    type: "checkbox",
    placeholder: "",
    options: options,
    value: [],
    props: {},
    itemProp: [0, 3, 10, 11, 12]
  },
  {
    key: 6,
    text: "下拉单选框",
    type: "select",
    placeholder: "请选择",
    options: options,
    props: {},
    itemProp: [0, 1, 2, 3, 9, 10, 11, 12]
  },
  // { text: '下拉复选框', el: 'select', placeholder: '', attributeOptions: [], props: { multiple: true }},
  {
    key: 7,
    text: "分割线",
    type: "line",
    props: {},
    class: "",
    itemProp: [0, 8, 12]
  },
  { key: 8, text: "图片", type: "image", props: {}, itemProp: [0, 3, 12] },
  { key: 9, text: "附件", type: "file", props: {}, itemProp: [0, 3, 12] },
  {
    key: 10,
    text: "部门",
    type: "orgUnit",
    placeholder: "请选择",
    props: {},
    itemProp: [0, 1, 23, 3, 13, 11, 12]
  },
  {
    key: 11,
    text: "用户",
    type: "user",
    placeholder: "请选择",
    props: {},
    itemProp: [0, 1, 3, 11, 12]
  },
  {
    key: 12,
    text: "关联数据",
    type: "associatedData",
    itemProp: [0, 1, 3, 18, 12]
  },
  { key: 13, text: "子表单", type: "childForm", itemProp: [0, 11, 19] },
  {
    key: 14,
    text: "科目",
    type: "subject",
    placeholder: "请选择",
    props: {},
    itemProp: [0, 1, 3, 11, 12]
  },
  {
    key: 15,
    text: "客户",
    type: "customer",
    placeholder: "请选择",
    props: {},
    itemProp: [0, 1, 3, 15, 16, 17, 11, 12]
  },
  {
    key: 16,
    text: "商品",
    type: "goods",
    placeholder: "请选择",
    props: {},
    itemProp: [0, 1, 3, 11, 12]
  },
  {
    key: 17,
    text: "供应商",
    type: "supplier",
    placeholder: "请选择",
    props: {},
    itemProp: [0, 1, 3, 11, 12]
  },
  {
    key: 18,
    text: "银行信息",
    type: "bankInfo",
    placeholder: "请选择",
    props: {},
    itemProp: [0, 1, 3, 11, 12]
  },
  {
    key: 19,
    text: "期间",
    type: "period",
    props: {},
    placeholder: "请选择",
    itemProp: [0, 1, 3, 11, 12]
  },
  {
    key: 20,
    text: "所属项目",
    type: "belongProject",
    placeholder: "请选择",
    props: {},
    itemProp: [0, 1, 3, 11, 12]
  }
];

// vModel: 传给后端的属性名; value: 前端渲染统一字段
// 数字字段中文大写的option与所有单行文本框关联
const propItemData = [
  {
    key: 0,
    title: "标题",
    vModel: "label",
    value: "",
    elType: "input",
    isEchoNow: true
  },
  {
    key: 1,
    title: "提示信息",
    vModel: "placeholder",
    value: "",
    elType: "input",
    isEchoNow: true
  },
  {
    key: 2,
    title: "字段默认值",
    vModel: "defaultValue",
    value: "",
    elType: "variable"
  },
  {
    key: 3,
    title: "校验",
    vModel: "required",
    value: false,
    checkboxLabel: "是否必填",
    elType: "checkbox",
    isEchoNow: true
  },
  {
    key: 4,
    title: "格式",
    vModel: "format",
    value: "",
    elType: "select",
    options: formatOptions
  },
  {
    key: 5,
    title: "小数保留位数",
    vModel: "decimalPlaces",
    value: 2,
    elType: "inputNumber"
  },
  {
    key: 6,
    title: "数字字段中文大写",
    vModel: "chn",
    value: "",
    elType: "select",
    options: []
  },
  {
    key: 7,
    title: "时间格式",
    vModel: "isTime",
    value: false,
    checkboxLabel: "是否显示时间",
    elType: "checkbox"
  },
  {
    key: 8,
    title: "线型",
    vModel: "lineClass",
    value: "changeLineSolid",
    elType: "radioGroup",
    options: lineOptions,
    isEchoNow: true
  },
  {
    key: 9,
    title: "上级选项",
    vModel: "parentVModel",
    value: "",
    elType: "select",
    options: []
  },
  {
    key: 10,
    title: "选项设置",
    vModel: "options",
    value: options,
    elType: "option-config",
    isEchoNow: true
  },
  {
    key: 11,
    title: "流程配置",
    vModel: "processDeploy",
    value: "",
    elType: "input"
  },
  {
    key: 12,
    title: "页面布局",
    vModel: "layout",
    value: "",
    elType: "select",
    options: [
      { label: "一行", value: 0 },
      { label: "半行", value: 1 }
    ]
  },
  {
    key: 13,
    title: "是否为分公司",
    vModel: "isCompany",
    value: false,
    checkboxLabel: "是",
    elType: "checkbox"
  },
  {
    key: 14,
    title: "设置上级科目",
    vModel: "parentSubject",
    value: "",
    elType: "select",
    options: []
  },
  {
    key: 15,
    title: "发票抬头",
    vModel: "invoiceVModel",
    value: "",
    elType: "select",
    options: []
  },
  {
    key: 16,
    title: "公司税号",
    vModel: "taxVModel",
    value: "",
    elType: "select",
    options: []
  },
  {
    key: 17,
    title: "银行账号",
    vModel: "accountVModel",
    value: "",
    elType: "select",
    options: []
  },
  {
    key: 18,
    title: "关联表",
    vModel: "associatedId",
    value: "",
    elType: "select",
    options: []
  },
  { key: 19, title: "子表单", vModel: "fields", value: [], elType: "" },
  {
    key: 20,
    title: "子表单数字字段汇总中文大写",
    vModel: "subChn",
    value: "",
    elType: "select",
    options: []
  },
  {
    key: 21,
    title: "子表单数字字段汇总小写",
    vModel: "subNumber",
    value: "",
    elType: "select",
    options: []
  },
  { key: 22, title: "运算公式", vModel: "calculation", value: "", elType: "" },
  {
    key: 23,
    title: "字段默认值",
    vModel: "currentUser",
    value: false,
    checkboxLabel: "当前用户",
    elType: "checkbox"
  },
  {
    key: 24,
    title: "最小值",
    vModel: "minNum",
    value: 0,
    elType: "inputNumber"
  },
  {
    key: 25,
    title: "最大值",
    vModel: "maxNum",
    value: 9999999,
    elType: "inputNumber"
  }
];

export default {
  options,
  basicLiData,
  enhanceLiData,
  formDomConfig,
  propItemData
};
