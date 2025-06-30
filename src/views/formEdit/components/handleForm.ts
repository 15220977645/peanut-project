import formConfig from "./formConfig";

/* 处理form数据，生成供后端保存的数据 */
function handleFormResult(fields) {
  if (!Array.isArray(fields)) return;
  const newFields = [];
  fields.forEach(prop => {
    const itemProp = <any>{
      key: prop.key,
      vModel: prop.vModel,
      type: prop.type
    };
    prop.attribute.forEach(tarAttr => {
      itemProp[tarAttr.vModel] = tarAttr[tarAttr.vModel] || tarAttr.value;
    });
    if (prop.key === 13) itemProp.fields = handleFormResult(prop.fields);
    newFields.push(itemProp);
  });
  return newFields;
}

/* 处理后端返回数据，生成回显所需数据 */
function handleRespForm(fields) {
  if (!Array.isArray(fields)) return;
  const newFields = [];
  fields.forEach(prop => {
    const tarProp = JSON.parse(
      JSON.stringify(
        formConfig.formDomConfig.find(propConfig => propConfig.key === prop.key)
      )
    );
    if (!tarProp) return;
    tarProp.vModel = prop.vModel;
    tarProp.value = [5, 8, 9].includes(tarProp.key) ? [] : "";
    const attribute = [];
    tarProp.itemProp.forEach(propKey => {
      const tarItemPropData = JSON.parse(
        JSON.stringify(
          formConfig.propItemData.find(tarItemP => tarItemP.key === propKey)
        )
      );
      if (tarItemPropData) {
        tarItemPropData.value = prop[tarItemPropData.vModel];
        tarItemPropData[tarItemPropData.vModel] = prop[tarItemPropData.vModel];
        attribute.push(tarItemPropData);
      }
    });
    tarProp.attribute = attribute;
    if (prop.key === 13) {
      tarProp.fields = handleRespForm(prop.fields);
      tarProp.value = handleRespForm(prop.fields);
    }
    newFields.push(tarProp);
  });
  return newFields;
}

/* 处理form数据，生成渲染数据 */
function handleFormConfig(attribute) {
  if (!Array.isArray(attribute)) return;
  // 界面渲染数据
  let formAttribute = null;
  // 表单绑定变量
  const formData = {};
  // 下拉及科目上下级关系数据-便于逻辑操作
  const selLevelData = [];
  formAttribute = attribute.map(item => {
    if (item.attribute && item.attribute[0]) {
      // 索引0为标题
      const tarProps = <any>{};
      tarProps.key = item.key;
      tarProps.name = item.vModel;
      tarProps.vModel = item.vModel;
      tarProps.domData = { ...item };
      delete tarProps.domData.itemProp;
      delete tarProps.domData.attribute;
      const inputType = [0, 1, 2].includes(item.key) ? "请输入" : "请选择";
      tarProps.label = item.attribute[0].label || item.attribute[0].value;
      tarProps.value = item.value;
      formData[item.vModel] = item.value;
      item.attribute.forEach(tarProp => {
        // console.log([23].includes(tarProp.key))

        const tarValue = tarProp[tarProp.vModel] || tarProp.value;
        // 条件tarValue为非必要参数
        if (tarProp.key === 1) tarProps.placeholder = tarProp.placeholder;
        else if (tarProp.key === 2) {
          tarProps.defaultVale = tarValue;
          formData[item.vModel] = tarValue;
        } else if ([3, 23].includes(tarProp.key)) {
          tarProps[tarProp.vModel] = !!tarValue;
          if (tarProp.key === 3) {
            const requiredRule = {
              required: true,
              message: `${inputType}${tarProps.label}`,
              trigger: "change"
            };
            if (tarProps.required) tarProps.rules = [requiredRule];
          }
        } else if (tarProp.key === 4 && tarValue) {
          const patternRule = {
            pattern: new RegExp(tarValue),
            message: `请输入正确的${tarProps.label}`,
            trigger: "change"
          };
          tarProps.rules.push(patternRule);
        } else if (tarProp.key === 5 && tarValue)
          tarProps.decimalPlaces = Number(tarValue);
        else if (tarProp.key === 6 && tarValue)
          tarProps.inputParams = { ...tarProp };
        else if (tarProp.key === 7)
          tarProps.dateType = tarValue ? "datetime" : "date";
        else if (tarProp.key === 8) tarProps.lineClass = tarValue;
        else if (tarProp.key === 9 && tarValue) {
          tarProps.parentSelect = tarValue;
          selLevelData.push({ parent: tarValue, child: item.vModel });
        } else if (tarProp.key === 10) tarProps.option = tarValue;
        else if (tarProp.key === 11 && tarValue)
          tarProps.processDeploy = tarValue;
        else if (tarProp.key === 12)
          tarProps.rowWidth = tarValue === 0 ? "100%" : "50%";
        else if (tarProp.key === 13 && tarValue) tarProps.isCompany = tarValue;
        else if (tarProp.key === 14 && tarValue) {
          tarProps.parentSubject = tarValue;
          selLevelData.push({ parent: tarValue, child: item.vModel });
        } else if (tarProp.key === 15 && tarValue)
          tarProps.invoiceVModel = tarValue;
        else if ([15, 16, 17, 18].includes(tarProp.key) && tarValue)
          tarProps[tarProp.vModel] = tarValue;
        else if (tarProp.key === 19) {
          tarProps.fields = handleRespForm(tarProp.value);
          tarProps.value = handleRespForm(tarProp.value);
          tarProps.rowWidth = "100%";
          formData[item.vModel] = [];
        } else if ([20, 21, 22].includes(tarProp.key) && tarValue)
          tarProps[tarProp.vModel] = tarValue;
        else if ([23].includes(tarProp.key)) {
          tarProps[tarProp.vModel] = tarValue;
        } else if ([24].includes(tarProp.key)) {
          tarProps.minNum = ["", undefined, null].includes(tarValue)
            ? -9999999
            : Number(tarValue);
        } else if ([25].includes(tarProp.key)) {
          tarProps.maxNum = ["", undefined, null].includes(tarValue)
            ? 9999999
            : Number(tarValue);
        }
      });
      return tarProps;
    }
  });
  return { formAttribute, formData, selLevelData };
}

/* 阿拉伯数字转中文金额 */
function arabicNumeralsTurnCn(num) {
  if (num === 0) return "￥零元整";
  let unit = "仟佰拾亿仟佰拾万仟佰拾元角分厘";
  let str = "";
  num += "000";
  const p = num.indexOf(".");
  if (p >= 0) num = num.substring(0, p) + num.substr(p + 1, 3);
  unit = unit.substring(unit.length - num.length);
  for (let i = 0; i < num.length; i++) {
    str += "零壹贰叁肆伍陆柒捌玖".charAt(num.charAt(i)) + unit.charAt(i);
  }
  return (
    "￥" +
    str
      .replace(/零(仟|佰|拾|角|分)/g, "零")
      .replace(/(零)+/g, "零")
      .replace(/零(万|亿|元)/g, "$1")
      .replace(/(亿)万|壹(拾)/g, "$1$2")
      .replace(/^元零?|零分/g, "")
      .replace(/^分零?|零厘/g, "")
      .replace(/元$/g, "元整")
  );
}

export default {
  handleFormResult,
  handleFormConfig,
  handleRespForm,
  arabicNumeralsTurnCn
};
