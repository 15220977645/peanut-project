import { h as handleForm } from "./handleForm-CWr9CBwp.js";
import {
  _ as _export_sfc,
  r as ref,
  B as reactive,
  z as computed,
  L as watch,
  h as resolveComponent,
  c as createElementBlock,
  o as openBlock,
  b as createVNode,
  w as withCtx,
  g as createBlock,
  v as createCommentVNode,
  u as unref,
  a as createBaseVNode,
  aY as delete_default,
  t as toDisplayString,
  F as Fragment,
  k as renderList,
  y as normalizeClass,
  O as mergeProps,
  i as createTextVNode,
  b2 as ElMessageBox
} from "./index-D6DS3gmo.js";
import "./formConfig-jyKkspzO.js";
const _hoisted_1 = { class: "child-table-container" },
  _hoisted_2 = ["onMouseenter"],
  _hoisted_3 = { key: 1 },
  _sfc_main = {
    __name: "childFormTable",
    props: {
      tableConfigData: { type: Array, default: () => [] },
      childTableData: { type: Array, default: () => [] },
      className: { type: String, default: "" },
      disabled: { type: Boolean, default: !1 }
    },
    emits: ["getChildForm", "handleNumInput"],
    setup(__props, { expose: __expose, emit: __emit }) {
      const emits = __emit,
        props = __props,
        childClass = ref(props.className),
        hoverRowI = ref(null),
        tableConfigData = ref(props.tableConfigData),
        tableData = ref({ data: [] }),
        selectMateData = [
          { key: 14, type: "subject" },
          { key: 15, type: "customer" },
          { key: 16, type: "goods" },
          { key: 17, type: "supplier" },
          { key: 18, type: "bankInfo" },
          { key: 19, type: "period" }
        ],
        totalList = reactive({
          subjectList: [],
          customerList: [],
          goodsList: [],
          supplierList: [],
          bankInfoList: [],
          periodList: []
        }),
        calculationList = [],
        selParentMate = [],
        defaultPropVal = [],
        tarChildOpt = computed(() => (o, l) => {
          const t = selParentMate.find(r => r.child === l.vModel);
          let n = [];
          for (const r of l.attribute)
            if (r.key === 10) {
              n = r.value || r.options;
              break;
            }
          return t ? n.filter(r => r.parentVModel === o[t.parent]) : n;
        }),
        tarVal = computed(() => (o, l) => getTarVal(o, l)),
        handleInputDisabled = computed(() => o => {
          for (const l of tableConfigData.value)
            if (l.key === 2) {
              for (const t of l.attribute)
                if (t.key === 6 && (t.value === o.vModel || t.chn === o.vModel))
                  return !0;
            }
          return !1;
        });
      watch(
        () => props.tableConfigData,
        async o => {
          (tableConfigData.value = o),
            tableConfigData.value.forEach(l => {
              if ([0, 1, 2, 6].includes(l.key)) {
                for (const t of l.attribute)
                  if (t.key === 2 && (t.value || t[t.vModel])) {
                    defaultPropVal.push({
                      vModel: l.vModel,
                      defaultVal: t.value || t[t.vModel]
                    });
                    break;
                  }
              }
              if (l.key === 6) {
                for (const t of l.attribute)
                  if (t.key === 9 && (t.value || t[t.vModel])) {
                    selParentMate.push({
                      parent: t.value || t[t.vModel],
                      child: l.vModel
                    });
                    break;
                  }
              }
            }),
            handleSelectRequest();
        },
        { deep: !0, immediate: !0 }
      ),
        watch(
          () => tableData.value.data,
          o => {
            emits("getChildForm", o);
          },
          { deep: !0 }
        ),
        watch(
          () => props.childTableData,
          async o => {
            JSON.stringify(o) !== JSON.stringify(tableData.value.data) &&
              ((tableData.value.data = [...o]), handleDefaultRemoteSel());
          },
          { deep: !0 }
        );
      function getTarVal(o, l) {
        let t = [];
        for (const n of props.tableConfigData[o].attribute)
          if (n.vModel === l) {
            const r = n.value || n[n.vModel];
            if (
              (l === "calculation" &&
                r &&
                ((t = r
                  .split(/([\=\+\-\*\/\(\)])/)
                  .filter(c => c.trim() !== "")),
                calculationList.find(c => c.calculation === r) ||
                  calculationList.push({
                    tarProp: props.tableConfigData[o],
                    calculation: r
                  })),
              !t[0])
            )
              return r;
          }
        if (t[0])
          return (
            t.forEach((n, r) => {
              if (!["=", "+", "-", "*", "/", "(", ")"].includes(n)) {
                const c = props.tableConfigData.find(s => s.vModel === n);
                t[r] =
                  c.attribute[0].value || c.attribute[0][c.attribute[0].vModel];
              }
            }),
            t.join("")
          );
      }
      function handleDefaultRemoteSel() {
        tableData.value.data.forEach(o => {
          for (const l of Object.keys(o)) {
            const t = selectMateData.map(r => r.type);
            let n = "";
            for (const r of t) if (((n = l.includes(r) ? r : ""), n)) break;
            !n ||
              totalList[`${n}List`].find(
                r => r.id === o[l.replace("~label", "")]
              ) ||
              (l.includes("~label") &&
                o[l] &&
                totalList[`${n}List`].push({
                  label: o[l],
                  id: o[l.replace("~label", "")]
                }));
          }
        });
      }
      function handleChildSel(o, l, t, n) {
        handleChoiceLabel(o, t, l.vModel, n);
        for (const r of selParentMate)
          if (r.parent === l.vModel) {
            (tableData.value.data[t][r.child] = ""),
              (tableData.value.data[t][`${r.child}~label`] = "");
            break;
          }
      }
      function handleChoiceLabel(o, l, t, n, r, c) {
        const s = n.find(f => f[r || "value"] === o);
        s
          ? (tableData.value.data[l][`${t}~label`] = s.label)
          : (tableData.value.data[l][`${t}~label`] = "");
      }
      function clearSubject(o) {
        tableData.value.data.forEach(l => {
          (l[o.childSubject] = ""), (l[`${o.childSubject}~label`] = "");
        });
      }
      function handleRequired() {
        const l = document
          .getElementsByClassName(childClass.value)[0]
          .getElementsByClassName("required-input");
        return Array.from(l).length === 0;
      }
      function handleNumberInput(o, l, t) {
        handleCalculation(o, l, t),
          handleChn(o, l, t),
          emits("handleNumInput", o, l, t);
      }
      function handleCalculation(val, tarObj, rowI) {
        calculationList.forEach(item => {
          const calculationProps = String(item.calculation)
              .split(/([\=\+\-\*\/\(\)])/)
              .filter(o => o.trim() !== ""),
            calculationVal = [...calculationProps];
          if (calculationVal.includes(tarObj.vModel)) {
            let decimalPlaces = 0;
            for (const o of tableConfigData.value) {
              const l = [];
              calculationProps.forEach((t, n) => {
                t === o.vModel && l.push(n);
              }),
                l.forEach(t => {
                  if (o.key === 2 && t >= 0) {
                    calculationVal[t] =
                      Number(tableData.value.data[rowI][o.vModel]) || 0;
                    const n = String(calculationVal[t]).split(".");
                    n[1] &&
                      decimalPlaces < n[1].length &&
                      (decimalPlaces = n[1].length);
                  }
                });
            }
            (tableData.value.data[rowI][item.tarProp.vModel] = eval(
              calculationVal.join("").replace("=", "")
            ).toFixed(decimalPlaces)),
              handleNumberInput(
                tableData.value.data[rowI][item.tarProp.vModel],
                item.tarProp,
                rowI
              );
          }
        });
      }
      function handleDecimalPlaces(o, l, t, n, r) {
        let c = null;
        for (const s of l.attribute)
          if (s.key === 5 && (s.value !== null || s[s.vModel] !== null)) {
            c = s.value || s[s.vModel];
            break;
          }
        c !== null &&
          o.includes(".") &&
          o.split(".")[1].length > c &&
          ((tableData.value.data[t][l.vModel] = Number(o).toFixed(c)),
          emits("handleNumInput", o, l, t)),
          o < n && (tableData.value.data[t][l.vModel] = String(n)),
          o > r && (tableData.value.data[t][l.vModel] = String(n)),
          handleCalculation(o, l, t);
      }
      function handleChn(o, l, t) {
        let n = null;
        for (const r of l.attribute)
          if (r.key === 6 && (r.value || r[r.vModel])) {
            n = r.value || r[r.vModel];
            break;
          }
        n &&
          (tableData.value.data[t][n] = handleForm.arabicNumeralsTurnCn(
            Number(o)
          ));
      }
      function handleSelectRequest() {
        for (const o of props.tableConfigData)
          if (selectMateData.find(t => t.key === o.key) !== void 0) {
            const t = selectMateData.find(n => n.key === o.key).type;
            getTarSelOption(t, "", "", o.value);
          }
      }
      function getTarSelOption(o, l, t, n, r) {
        totalList[`${o}List`] || (totalList[`${o}List`] = []),
          Number((totalList[`${o}List`].length / 100).toFixed(0)) + 1,
          !(t === "focus" && totalList[`${o}List`][0]) &&
            (t === "search" && (totalList[`${o}List`] = []),
            selectMateData.find(c => c.type === o).type,
            (totalList[`${o}List`] = handleUnique([])));
      }
      function handleUnique(o) {
        const l = new Map();
        return o.filter(t => !l.has(t.id) && l.set(t.id, 1));
      }
      function addTable() {
        const o = {};
        props.tableConfigData.forEach(l => {
          const t = defaultPropVal.find(n => n.vModel === l.vModel);
          t ? (o[l.vModel] = t.defaultVal) : (o[l.vModel] = "");
        }),
          tableData.value.data.push(o);
      }
      function delTable(o) {
        ElMessageBox.confirm("确定要删除该条数据吗?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            tableData.value.data.splice(o, 1);
          })
          .catch(() => {});
      }
      return (
        __expose({ clearSubject, handleRequired }),
        (o, l) => {
          const t = resolveComponent("el-button"),
            n = resolveComponent("el-table-column"),
            r = resolveComponent("el-input"),
            c = resolveComponent("el-option"),
            s = resolveComponent("el-select"),
            f = resolveComponent("el-date-picker"),
            h = resolveComponent("el-form-item"),
            b = resolveComponent("el-table"),
            v = resolveComponent("el-form");
          return (
            openBlock(),
            createElementBlock("div", _hoisted_1, [
              createVNode(
                v,
                {
                  ref: "childTableForm",
                  model: unref(tableData),
                  disabled: __props.disabled,
                  class: normalizeClass(unref(childClass))
                },
                {
                  default: withCtx(() => [
                    createVNode(
                      b,
                      {
                        data: unref(tableData).data,
                        fit: "",
                        border: "",
                        class: "child-table"
                      },
                      {
                        default: withCtx(() => [
                          createVNode(
                            n,
                            {
                              label: "序号",
                              width: "50px",
                              align: "center",
                              fixed: "left"
                            },
                            {
                              default: withCtx(({ $index: a }) => [
                                createBaseVNode(
                                  "div",
                                  {
                                    onMouseenter: u =>
                                      (hoverRowI.value = a + 1),
                                    onMouseleave:
                                      l[0] ||
                                      (l[0] = u => (hoverRowI.value = null))
                                  },
                                  [
                                    unref(hoverRowI) === a + 1 &&
                                    !__props.disabled
                                      ? (openBlock(),
                                        createBlock(
                                          t,
                                          {
                                            key: 0,
                                            icon: unref(delete_default),
                                            type: "danger",
                                            circle: "",
                                            size: "small",
                                            title: "删除",
                                            onClick: u => delTable(a)
                                          },
                                          null,
                                          8,
                                          ["icon", "onClick"]
                                        ))
                                      : (openBlock(),
                                        createElementBlock(
                                          "span",
                                          _hoisted_3,
                                          toDisplayString(a + 1),
                                          1
                                        ))
                                  ],
                                  40,
                                  _hoisted_2
                                )
                              ]),
                              _: 1
                            }
                          ),
                          (openBlock(!0),
                          createElementBlock(
                            Fragment,
                            null,
                            renderList(
                              unref(tableConfigData),
                              (a, u) => (
                                openBlock(),
                                createBlock(
                                  n,
                                  {
                                    key: u,
                                    label:
                                      a.attribute[0].value ||
                                      a.attribute[0].label,
                                    prop: a.vModel,
                                    "label-class-name": unref(tarVal)(
                                      u,
                                      "required"
                                    )
                                      ? "required-col"
                                      : "",
                                    "min-width": "160px"
                                  },
                                  {
                                    default: withCtx(
                                      ({ row: d, $index: p }) => [
                                        createVNode(
                                          h,
                                          {
                                            prop: `${a[a.vModel]}`,
                                            class: normalizeClass({
                                              "required-input":
                                                unref(tarVal)(u, "required") &&
                                                !unref(tableData).data[p][
                                                  a.vModel
                                                ]
                                            })
                                          },
                                          {
                                            default: withCtx(() => [
                                              [0, 1].includes(a.key)
                                                ? (openBlock(),
                                                  createBlock(
                                                    r,
                                                    mergeProps(
                                                      {
                                                        key: 0,
                                                        modelValue: d[a.vModel],
                                                        "onUpdate:modelValue":
                                                          e =>
                                                            (d[a.vModel] = e),
                                                        placeholder:
                                                          unref(tarVal)(
                                                            u,
                                                            "placeholder"
                                                          ) || a.placeholder,
                                                        disabled:
                                                          unref(
                                                            handleInputDisabled
                                                          )(a),
                                                        title: unref(
                                                          handleInputDisabled
                                                        )(a)
                                                          ? "该字段已被关联"
                                                          : "",
                                                        ref_for: !0
                                                      },
                                                      a.props
                                                    ),
                                                    null,
                                                    16,
                                                    [
                                                      "modelValue",
                                                      "onUpdate:modelValue",
                                                      "placeholder",
                                                      "disabled",
                                                      "title"
                                                    ]
                                                  ))
                                                : createCommentVNode("", !0),
                                              [2].includes(a.key)
                                                ? (openBlock(),
                                                  createBlock(
                                                    r,
                                                    mergeProps(
                                                      {
                                                        key: 1,
                                                        modelValue: d[a.vModel],
                                                        "onUpdate:modelValue":
                                                          e =>
                                                            (d[a.vModel] = e),
                                                        placeholder: unref(
                                                          tarVal
                                                        )(u, "calculation")
                                                          ? "自动计算"
                                                          : unref(tarVal)(
                                                              u,
                                                              "placeholder"
                                                            ) || a.placeholder,
                                                        disabled: !!unref(
                                                          tarVal
                                                        )(u, "calculation"),
                                                        title: unref(
                                                          handleInputDisabled
                                                        )(a)
                                                          ? "该字段已被关联"
                                                          : unref(tarVal)(
                                                              u,
                                                              "calculation"
                                                            ),
                                                        min: unref(tarVal)(
                                                          u,
                                                          "minNum"
                                                        ),
                                                        max: unref(tarVal)(
                                                          u,
                                                          "maxNum"
                                                        ),
                                                        ref_for: !0
                                                      },
                                                      a.props,
                                                      {
                                                        onInput: e =>
                                                          handleNumberInput(
                                                            e,
                                                            a,
                                                            p
                                                          ),
                                                        onBlur: e =>
                                                          handleDecimalPlaces(
                                                            d[a.vModel],
                                                            a,
                                                            p,
                                                            unref(tarVal)(
                                                              u,
                                                              "minNum"
                                                            ),
                                                            unref(tarVal)(
                                                              u,
                                                              "maxNum"
                                                            )
                                                          )
                                                      }
                                                    ),
                                                    null,
                                                    16,
                                                    [
                                                      "modelValue",
                                                      "onUpdate:modelValue",
                                                      "placeholder",
                                                      "disabled",
                                                      "title",
                                                      "min",
                                                      "max",
                                                      "onInput",
                                                      "onBlur"
                                                    ]
                                                  ))
                                                : createCommentVNode("", !0),
                                              a.key === 6
                                                ? (openBlock(),
                                                  createBlock(
                                                    s,
                                                    {
                                                      key: 2,
                                                      modelValue: d[a.vModel],
                                                      "onUpdate:modelValue":
                                                        e => (d[a.vModel] = e),
                                                      placeholder:
                                                        unref(tarVal)(
                                                          u,
                                                          "placeholder"
                                                        ) || a.placeholder,
                                                      onChange: e =>
                                                        handleChildSel(
                                                          e,
                                                          a,
                                                          p,
                                                          unref(tarChildOpt)(
                                                            d,
                                                            a
                                                          )
                                                        )
                                                    },
                                                    {
                                                      default: withCtx(() => [
                                                        (openBlock(!0),
                                                        createElementBlock(
                                                          Fragment,
                                                          null,
                                                          renderList(
                                                            unref(tarChildOpt)(
                                                              d,
                                                              a
                                                            ),
                                                            (e, i) => (
                                                              openBlock(),
                                                              createBlock(
                                                                c,
                                                                {
                                                                  key: i,
                                                                  label:
                                                                    e.label,
                                                                  value: e.value
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "label",
                                                                  "value"
                                                                ]
                                                              )
                                                            )
                                                          ),
                                                          128
                                                        ))
                                                      ]),
                                                      _: 2
                                                    },
                                                    1032,
                                                    [
                                                      "modelValue",
                                                      "onUpdate:modelValue",
                                                      "placeholder",
                                                      "onChange"
                                                    ]
                                                  ))
                                                : a.key === 3
                                                ? (openBlock(),
                                                  createBlock(
                                                    f,
                                                    mergeProps(
                                                      {
                                                        key: 3,
                                                        modelValue: d[a.vModel],
                                                        "onUpdate:modelValue":
                                                          e =>
                                                            (d[a.vModel] = e),
                                                        placeholder:
                                                          unref(tarVal)(
                                                            u,
                                                            "placeholder"
                                                          ) || a.placeholder,
                                                        "value-format":
                                                          "yyyy-MM-dd hh:mm:ss",
                                                        ref_for: !0
                                                      },
                                                      a.props,
                                                      { clearable: "" }
                                                    ),
                                                    null,
                                                    16,
                                                    [
                                                      "modelValue",
                                                      "onUpdate:modelValue",
                                                      "placeholder"
                                                    ]
                                                  ))
                                                : a.key === 14
                                                ? (openBlock(),
                                                  createBlock(
                                                    s,
                                                    {
                                                      key: 4,
                                                      modelValue: d[a.vModel],
                                                      "onUpdate:modelValue":
                                                        e => (d[a.vModel] = e),
                                                      placeholder:
                                                        unref(tarVal)(
                                                          u,
                                                          "placeholder"
                                                        ) || a.placeholder,
                                                      "remote-method": e =>
                                                        getTarSelOption(
                                                          "subject",
                                                          e,
                                                          "search"
                                                        ),
                                                      filterable: "",
                                                      clearable: "",
                                                      remote: "",
                                                      onFocus:
                                                        l[1] ||
                                                        (l[1] = e =>
                                                          getTarSelOption(
                                                            "subject",
                                                            "",
                                                            "focus"
                                                          )),
                                                      onClear: e =>
                                                        (d[a.vModel] = null),
                                                      onChange: e =>
                                                        handleChoiceLabel(
                                                          e,
                                                          p,
                                                          a.vModel,
                                                          unref(totalList)
                                                            .subjectList,
                                                          "id"
                                                        )
                                                    },
                                                    {
                                                      default: withCtx(() => [
                                                        (openBlock(!0),
                                                        createElementBlock(
                                                          Fragment,
                                                          null,
                                                          renderList(
                                                            unref(totalList)
                                                              .subjectList,
                                                            (e, i) => (
                                                              openBlock(),
                                                              createBlock(
                                                                c,
                                                                {
                                                                  key: i,
                                                                  label:
                                                                    e.label,
                                                                  value: e.id
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "label",
                                                                  "value"
                                                                ]
                                                              )
                                                            )
                                                          ),
                                                          128
                                                        ))
                                                      ]),
                                                      _: 2
                                                    },
                                                    1032,
                                                    [
                                                      "modelValue",
                                                      "onUpdate:modelValue",
                                                      "placeholder",
                                                      "remote-method",
                                                      "onClear",
                                                      "onChange"
                                                    ]
                                                  ))
                                                : a.key === 15
                                                ? (openBlock(),
                                                  createBlock(
                                                    s,
                                                    {
                                                      key: 5,
                                                      modelValue: d[a.vModel],
                                                      "onUpdate:modelValue":
                                                        e => (d[a.vModel] = e),
                                                      placeholder:
                                                        unref(tarVal)(
                                                          u,
                                                          "placeholder"
                                                        ) || a.placeholder,
                                                      "remote-method": e =>
                                                        getTarSelOption(
                                                          "customer",
                                                          e,
                                                          "search"
                                                        ),
                                                      filterable: "",
                                                      clearable: "",
                                                      remote: "",
                                                      onFocus:
                                                        l[2] ||
                                                        (l[2] = e =>
                                                          getTarSelOption(
                                                            "customer",
                                                            "",
                                                            "focus"
                                                          )),
                                                      onClear: e =>
                                                        (d[a.vModel] = null),
                                                      onChange: e =>
                                                        handleChoiceLabel(
                                                          e,
                                                          p,
                                                          a.vModel,
                                                          unref(totalList)
                                                            .customerList,
                                                          "id"
                                                        )
                                                    },
                                                    {
                                                      default: withCtx(() => [
                                                        (openBlock(!0),
                                                        createElementBlock(
                                                          Fragment,
                                                          null,
                                                          renderList(
                                                            unref(totalList)
                                                              .customerList,
                                                            (e, i) => (
                                                              openBlock(),
                                                              createBlock(
                                                                c,
                                                                {
                                                                  key: i,
                                                                  label:
                                                                    e.label,
                                                                  value: e.id
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "label",
                                                                  "value"
                                                                ]
                                                              )
                                                            )
                                                          ),
                                                          128
                                                        ))
                                                      ]),
                                                      _: 2
                                                    },
                                                    1032,
                                                    [
                                                      "modelValue",
                                                      "onUpdate:modelValue",
                                                      "placeholder",
                                                      "remote-method",
                                                      "onClear",
                                                      "onChange"
                                                    ]
                                                  ))
                                                : a.key === 16
                                                ? (openBlock(),
                                                  createBlock(
                                                    s,
                                                    {
                                                      key: 6,
                                                      modelValue: d[a.vModel],
                                                      "onUpdate:modelValue":
                                                        e => (d[a.vModel] = e),
                                                      placeholder:
                                                        unref(tarVal)(
                                                          u,
                                                          "placeholder"
                                                        ) || a.placeholder,
                                                      "remote-method": e =>
                                                        getTarSelOption(
                                                          "goods",
                                                          e,
                                                          "search"
                                                        ),
                                                      filterable: "",
                                                      clearable: "",
                                                      remote: "",
                                                      onFocus:
                                                        l[3] ||
                                                        (l[3] = e =>
                                                          getTarSelOption(
                                                            "goods",
                                                            "",
                                                            "focus"
                                                          )),
                                                      onClear: e =>
                                                        (d[a.vModel] = null),
                                                      onChange: e =>
                                                        handleChoiceLabel(
                                                          e,
                                                          p,
                                                          a.vModel,
                                                          unref(totalList)
                                                            .goodsList,
                                                          "id"
                                                        )
                                                    },
                                                    {
                                                      default: withCtx(() => [
                                                        (openBlock(!0),
                                                        createElementBlock(
                                                          Fragment,
                                                          null,
                                                          renderList(
                                                            unref(totalList)
                                                              .goodsList,
                                                            (e, i) => (
                                                              openBlock(),
                                                              createBlock(
                                                                c,
                                                                {
                                                                  key: i,
                                                                  label:
                                                                    e.label,
                                                                  value: e.id
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "label",
                                                                  "value"
                                                                ]
                                                              )
                                                            )
                                                          ),
                                                          128
                                                        ))
                                                      ]),
                                                      _: 2
                                                    },
                                                    1032,
                                                    [
                                                      "modelValue",
                                                      "onUpdate:modelValue",
                                                      "placeholder",
                                                      "remote-method",
                                                      "onClear",
                                                      "onChange"
                                                    ]
                                                  ))
                                                : a.key === 17 && !a.isCompany
                                                ? (openBlock(),
                                                  createBlock(
                                                    s,
                                                    {
                                                      key: 7,
                                                      modelValue: d[a.vModel],
                                                      "onUpdate:modelValue":
                                                        e => (d[a.vModel] = e),
                                                      placeholder:
                                                        unref(tarVal)(
                                                          u,
                                                          "placeholder"
                                                        ) || a.placeholder,
                                                      "remote-method": e =>
                                                        getTarSelOption(
                                                          "supplier",
                                                          e,
                                                          "search"
                                                        ),
                                                      filterable: "",
                                                      clearable: "",
                                                      remote: "",
                                                      onFocus:
                                                        l[4] ||
                                                        (l[4] = e =>
                                                          getTarSelOption(
                                                            "supplier",
                                                            "",
                                                            "focus"
                                                          )),
                                                      onClear: e =>
                                                        (d[a.vModel] = null),
                                                      onChange: e =>
                                                        handleChoiceLabel(
                                                          e,
                                                          p,
                                                          a.vModel,
                                                          unref(totalList)
                                                            .supplierList,
                                                          "id"
                                                        )
                                                    },
                                                    {
                                                      default: withCtx(() => [
                                                        (openBlock(!0),
                                                        createElementBlock(
                                                          Fragment,
                                                          null,
                                                          renderList(
                                                            unref(totalList)
                                                              .supplierList,
                                                            (e, i) => (
                                                              openBlock(),
                                                              createBlock(
                                                                c,
                                                                {
                                                                  key: i,
                                                                  label:
                                                                    e.label,
                                                                  value: e.id
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "label",
                                                                  "value"
                                                                ]
                                                              )
                                                            )
                                                          ),
                                                          128
                                                        ))
                                                      ]),
                                                      _: 2
                                                    },
                                                    1032,
                                                    [
                                                      "modelValue",
                                                      "onUpdate:modelValue",
                                                      "placeholder",
                                                      "remote-method",
                                                      "onClear",
                                                      "onChange"
                                                    ]
                                                  ))
                                                : a.key === 18
                                                ? (openBlock(),
                                                  createBlock(
                                                    s,
                                                    {
                                                      key: 8,
                                                      modelValue: d[a.vModel],
                                                      "onUpdate:modelValue":
                                                        e => (d[a.vModel] = e),
                                                      placeholder:
                                                        unref(tarVal)(
                                                          u,
                                                          "placeholder"
                                                        ) || a.placeholder,
                                                      "remote-method": e =>
                                                        getTarSelOption(
                                                          "bankInfo",
                                                          e,
                                                          "search"
                                                        ),
                                                      filterable: "",
                                                      clearable: "",
                                                      remote: "",
                                                      onFocus:
                                                        l[5] ||
                                                        (l[5] = e =>
                                                          getTarSelOption(
                                                            "bankInfo",
                                                            "",
                                                            "focus"
                                                          )),
                                                      onClear: e =>
                                                        (d[a.vModel] = null),
                                                      onChange: e =>
                                                        handleChoiceLabel(
                                                          e,
                                                          p,
                                                          a.vModel,
                                                          unref(totalList)
                                                            .bankInfoList,
                                                          "id"
                                                        )
                                                    },
                                                    {
                                                      default: withCtx(() => [
                                                        (openBlock(!0),
                                                        createElementBlock(
                                                          Fragment,
                                                          null,
                                                          renderList(
                                                            unref(totalList)
                                                              .bankInfoList,
                                                            (e, i) => (
                                                              openBlock(),
                                                              createBlock(
                                                                c,
                                                                {
                                                                  key: i,
                                                                  label:
                                                                    e.label,
                                                                  value: e.id
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "label",
                                                                  "value"
                                                                ]
                                                              )
                                                            )
                                                          ),
                                                          128
                                                        ))
                                                      ]),
                                                      _: 2
                                                    },
                                                    1032,
                                                    [
                                                      "modelValue",
                                                      "onUpdate:modelValue",
                                                      "placeholder",
                                                      "remote-method",
                                                      "onClear",
                                                      "onChange"
                                                    ]
                                                  ))
                                                : a.key === 19
                                                ? (openBlock(),
                                                  createBlock(
                                                    s,
                                                    {
                                                      key: 9,
                                                      modelValue: d[a.vModel],
                                                      "onUpdate:modelValue":
                                                        e => (d[a.vModel] = e),
                                                      placeholder:
                                                        unref(tarVal)(
                                                          u,
                                                          "placeholder"
                                                        ) || a.placeholder,
                                                      filterable: "",
                                                      clearable: "",
                                                      remote: "",
                                                      onFocus:
                                                        l[6] ||
                                                        (l[6] = e =>
                                                          getTarSelOption(
                                                            "period",
                                                            "",
                                                            "focus"
                                                          )),
                                                      onClear: e =>
                                                        (d[a.vModel] = null),
                                                      onChange: e =>
                                                        handleChoiceLabel(
                                                          e,
                                                          p,
                                                          a.vModel,
                                                          unref(totalList)
                                                            .periodList,
                                                          "id"
                                                        )
                                                    },
                                                    {
                                                      default: withCtx(() => [
                                                        (openBlock(!0),
                                                        createElementBlock(
                                                          Fragment,
                                                          null,
                                                          renderList(
                                                            unref(totalList)
                                                              .periodList,
                                                            (e, i) => (
                                                              openBlock(),
                                                              createBlock(
                                                                c,
                                                                {
                                                                  key: i,
                                                                  label:
                                                                    e.label,
                                                                  value: e.id
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "label",
                                                                  "value"
                                                                ]
                                                              )
                                                            )
                                                          ),
                                                          128
                                                        ))
                                                      ]),
                                                      _: 2
                                                    },
                                                    1032,
                                                    [
                                                      "modelValue",
                                                      "onUpdate:modelValue",
                                                      "placeholder",
                                                      "onClear",
                                                      "onChange"
                                                    ]
                                                  ))
                                                : createCommentVNode("", !0)
                                            ]),
                                            _: 2
                                          },
                                          1032,
                                          ["prop", "class"]
                                        )
                                      ]
                                    ),
                                    _: 2
                                  },
                                  1032,
                                  ["label", "prop", "label-class-name"]
                                )
                              )
                            ),
                            128
                          ))
                        ]),
                        _: 1
                      },
                      8,
                      ["data"]
                    ),
                    __props.disabled
                      ? createCommentVNode("", !0)
                      : (openBlock(),
                        createBlock(
                          t,
                          {
                            key: 0,
                            size: "small",
                            type: "primary",
                            onClick: addTable
                          },
                          {
                            default: withCtx(
                              () =>
                                l[7] || (l[7] = [createTextVNode("+ 添加数据")])
                            ),
                            _: 1
                          }
                        ))
                  ]),
                  _: 1
                },
                8,
                ["model", "disabled", "class"]
              )
            ])
          );
        }
      );
    }
  },
  ChildFormTable = _export_sfc(_sfc_main, [["__scopeId", "data-v-6bbe56dc"]]);
export { ChildFormTable as default };
