import {
  _ as ge,
  r as N,
  B as Me,
  z as S,
  e as Ce,
  f as Ue,
  h,
  c as y,
  o as t,
  b as i,
  w as r,
  F as k,
  k as m,
  g as p,
  i as F,
  v as M,
  aX as x,
  t as Ie,
  a as P,
  u as L,
  aY as ee,
  aZ as Ne
} from "./index-D6DS3gmo.js";
import { f as Fe } from "./formConfig-jyKkspzO.js";
import { h as Oe } from "./handleForm-CWr9CBwp.js";
import Se from "./childFormProp-DilzIh0d.js";
import { B as g } from "./bus-Cmz_HPxy.js";
const Pe = { class: "tab-container" },
  we = { key: 0, class: "option-field" },
  De = { class: "options-select" },
  Ee = { class: "options-input" },
  Je = { key: 1, class: "child-field" },
  Te = { key: 0 },
  $e = { class: "options-select" },
  Ae = { class: "options-input" },
  Le = { key: 10 },
  Be = {
    __name: "contentRight",
    setup(ze) {
      const le = N({}),
        T = N("formProp"),
        ae = N([]),
        oe = N([]),
        te = N(!1),
        ue = N({
          name: [
            { required: !0, message: "请输入表单名称", trigger: "change" }
          ],
          formClassId: [
            { required: !0, message: "请输入表单分类", trigger: "blur" }
          ]
        }),
        s = N(null),
        _ = N(null),
        d = Me({
          name: "",
          formClassId: null,
          type: "",
          externalUuid: "",
          layout: "",
          description: "",
          fields: []
        }),
        J = N(!1),
        $ = S(() => n => {
          const a = JSON.parse(JSON.stringify(d));
          let o = (n === "child" ? a.fields[s.value].fields : a.fields).map(
            u => {
              if (u.type === "text")
                return {
                  label: u.attribute[0].value || "单行文本",
                  value: u.vModel
                };
            }
          );
          return (o = o.filter(u => u)), o;
        }),
        B = S(() => n => {
          const a = d.fields[s.value],
            f = n === "child" ? a.fields[_.value].attribute : a.attribute;
          for (const o of f) if (o.key === 10) return o.value;
          return [];
        }),
        ne = S(() => n => {
          const a = JSON.parse(JSON.stringify(d));
          let o = (n === "child" ? a.fields[s.value].fields : a.fields).map(
            u => {
              if (u.type === "number")
                return {
                  label: u.attribute[0].value || "数字",
                  value: u.vModel
                };
            }
          );
          return (o = o.filter(u => u)), o;
        }),
        de = S(
          () => n =>
            !!d.fields[s.value].fields[_.value].attribute[n - 1].parentVModel
        ),
        z = S(() => n => H("select", "下拉单选框", n)),
        R = S(() => n => H("subject", "科目", n)),
        q = S(() => (n, a) => {
          let f = [],
            o = [];
          if (
            (a === "child"
              ? ((f = d.fields[s.value].fields[_.value].attribute),
                (o = d.fields[s.value].fields))
              : ((f = d.fields[s.value].attribute), (o = d.fields)),
            !f[n - 1])
          )
            return [];
          const u = f[n - 1].parentVModel,
            c = o.find(I => I.vModel === u);
          if (!c) return [];
          let V = [];
          for (const I of c.attribute) I.vModel === "options" && (V = I.value);
          return V;
        });
      function re() {
        fe(), Ve(), ie(), ve(), ce();
      }
      function se(n) {
        return n;
      }
      function H(n, a, f) {
        let o = [],
          u = null;
        f === "child"
          ? ((o = d.fields[s.value].fields), (u = o[_.value]))
          : ((o = d.fields), (u = o[s.value]));
        let c = o.map(V => {
          const I = { label: V.attribute[0].value || a, value: V.vModel };
          if (V.type === n && u.vModel !== V.vModel) return I;
        });
        return (c = c.filter(V => V)), c;
      }
      function fe() {
        g.on("changeForm", n => {
          const a = n[0],
            f = n[1],
            o = [];
          let u = null;
          f
            ? (d.fields.splice(f, 1),
              f >= 0 && f < d.fields.length - 1
                ? (u = f)
                : f >= d.fields.length - 1
                ? (u = d.fields.length - 1)
                : (u = null))
            : (a[a.length - 1].itemProp.forEach(c => {
                if (![20, 21, 22].includes(c)) {
                  const V = JSON.parse(JSON.stringify(Fe.propItemData[c]));
                  (V[V.vModel] = V.value),
                    V.vModel === "label" &&
                      (V.label =
                        a[a.length - 1].key === 7 ? "" : a[a.length - 1].text),
                    V.vModel === "placeholder" &&
                      (V.placeholder = a[a.length - 1].placeholder),
                    V.vModel === "layout" && (V.layout = d.layout),
                    c === 2 &&
                      (a[a.length - 1].key === 5 && (V.defaultValue = []),
                      a[a.length - 1].key === 2 && (V.defaultValue = 0)),
                    o.push(V);
                }
              }),
              d.fields.push({ ...a[a.length - 1], attribute: o }),
              (u = d.fields.length - 1)),
            K(u);
        });
      }
      function pe() {
        J.value = !0;
      }
      function ve() {
        g.on("handleDrop", n => {
          const a = JSON.parse(JSON.stringify(d.fields)),
            f = JSON.parse(JSON.stringify(d.fields[n.startIndex]));
          if (
            (a.splice(n.startIndex, 1),
            a.splice(n.currentIndex, 0, f),
            (d.fields = a),
            s.value === n.startIndex)
          )
            s.value = n.currentIndex;
          else {
            const o = n.startIndex < s.value ? s.value - 1 : s.value + 1;
            s.value = o;
          }
        });
      }
      function ie() {
        g.on("getFormData", n => {
          d.useType = n;
          const a = JSON.parse(JSON.stringify(d));
          (a.fields = Oe.handleFormResult(a.fields)), g.emit("sendFormData", a);
        });
      }
      function ce() {
        g.on("activeChildItem", n => {
          const a = n[1];
          _.value = a;
        });
      }
      function be(n, a, f) {
        const o = { ...d.fields[s.value] };
        if (!n) {
          const u = o.value[a];
          o.value.splice(a, 1),
            f !== "del" && o.value.splice(a + (f === "down" ? 1 : -1), 0, u),
            (o.value = o.value.filter(c => c)),
            (o.fields = o.value),
            (d.fields[s.value] = o);
          return;
        }
        (o.value[a] = n),
          (o.value = o.value.filter(u => u)),
          (o.fields[a] = o.value[a]),
          (d.fields[s.value] = o);
      }
      function w(n, a, f) {
        const o = d.fields[s.value],
          u = o.fields[_.value].attribute;
        (u[a].value = n),
          f &&
            (o.fields[_.value],
            _.value,
            u[a].key,
            u[a].title,
            u[a].vModel,
            u[a].value,
            g.emit("handleChangeItem", {
              index: s.value,
              propKey: 19,
              value: o.fields,
              vModel: "fields"
            }));
      }
      function ye() {
        g.emit("activeItem", [s.value]);
      }
      function Ve() {
        g.on("activeItem", n => {
          K(n[0]), (_.value = null);
        });
      }
      function K(n) {
        s.value !== n &&
          ((s.value = n < 0 ? null : n),
          (T.value = n < 0 ? "formProp" : "itemProp"));
      }
      function U(n, a, f) {
        const o = d.fields[s.value].attribute;
        if (((o[a].value = n), (o[a][o[a].vModel] = n), f)) {
          const u = {
            index: s.value,
            propKey: o[a].key,
            title: o[a].title,
            vModel: o[a].vModel,
            value: o[a].value
          };
          (u[u.vModel] = u.value), g.emit("handleChangeItem", u);
        }
      }
      function j(n, a) {
        let f = null;
        a === "child"
          ? (f = d.fields[s.value].fields[_.value].attribute)
          : (f = d.fields[s.value].attribute);
        const o = f[n].value.length + 1;
        f[n].value.push({ label: `选项${o}`, value: o }),
          f[n].value.forEach((u, c) => {
            u.value = c;
          }),
          a === "child" ? w(f[n].value, n, !1) : U(f[n].value, n, !0);
      }
      function G(n, a, f) {
        let o = null;
        (o = d.fields[s.value].attribute),
          d.fields[s.value].attribute[n].value.splice(a, 1);
        for (const u of d.fields[s.value].attribute)
          if (u.key === 2) {
            Array.isArray(u.defaultValue)
              ? u.defaultValue.splice(a, 1)
              : (u.defaultValue = ""),
              (u.value = u.defaultValue);
            break;
          }
        return U(d.fields[s.value].attribute[n].value, n, !0), o;
      }
      function X(n, a, f, o) {
        let u = null;
        o === "child"
          ? (u = d.fields[s.value].fields[_.value].attribute[a])
          : (u = d.fields[s.value].attribute[a]),
          (u.value[f].label = n),
          o !== "child" && U(u.value, a, !0);
      }
      function ke() {}
      function me(n) {
        const a = JSON.parse(JSON.stringify(d.fields));
        a.forEach(f => {
          for (const o of f.attribute)
            o.key === 12 && ((o.layout = n), (o.value = n));
        }),
          (d.fields = a);
      }
      return (
        Ce(() => {
          re();
        }),
        Ue(() => {
          g.off("changeForm"),
            g.off("activeItem"),
            g.off("handleDrop"),
            g.off("activeChildItem"),
            g.off("getFormData");
        }),
        (n, a) => {
          const f = h("el-input"),
            o = h("el-form-item"),
            u = h("el-option"),
            c = h("el-select"),
            V = h("el-radio-button"),
            I = h("el-radio-group"),
            A = h("el-form"),
            Y = h("el-tab-pane"),
            Z = h("el-input-number"),
            Q = h("el-checkbox"),
            D = h("el-tooltip"),
            O = h("el-button"),
            E = h("el-table-column"),
            W = h("el-table"),
            _e = h("el-dialog"),
            he = h("el-tabs");
          return (
            t(),
            y("div", Pe, [
              i(
                he,
                {
                  modelValue: T.value,
                  "onUpdate:modelValue": a[8] || (a[8] = e => (T.value = e)),
                  stretch: ""
                },
                {
                  default: r(() => [
                    i(
                      Y,
                      { label: "表单属性", name: "formProp" },
                      {
                        default: r(() => [
                          i(
                            A,
                            {
                              ref: "form",
                              model: d,
                              "label-position": "top",
                              rules: ue.value
                            },
                            {
                              default: r(() => [
                                i(
                                  o,
                                  { label: "表单名称", prop: "name" },
                                  {
                                    default: r(() => [
                                      i(
                                        f,
                                        {
                                          modelValue: d.name,
                                          "onUpdate:modelValue":
                                            a[0] || (a[0] = e => (d.name = e)),
                                          placeholder: "表单名称"
                                        },
                                        null,
                                        8,
                                        ["modelValue"]
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                i(
                                  o,
                                  {
                                    label: "表单分类",
                                    prop: "formClassId",
                                    class: "form-item"
                                  },
                                  {
                                    default: r(() => [
                                      i(
                                        c,
                                        {
                                          modelValue: d.formClassId,
                                          "onUpdate:modelValue":
                                            a[1] ||
                                            (a[1] = e => (d.formClassId = e)),
                                          placeholder: "请选择"
                                        },
                                        {
                                          default: r(() => [
                                            (t(!0),
                                            y(
                                              k,
                                              null,
                                              m(
                                                ae.value,
                                                (e, b) => (
                                                  t(),
                                                  p(
                                                    u,
                                                    {
                                                      key: b,
                                                      label: e.name,
                                                      value: e.id
                                                    },
                                                    null,
                                                    8,
                                                    ["label", "value"]
                                                  )
                                                )
                                              ),
                                              128
                                            ))
                                          ]),
                                          _: 1
                                        },
                                        8,
                                        ["modelValue"]
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                i(
                                  o,
                                  { label: "表单类型", class: "form-item" },
                                  {
                                    default: r(() => [
                                      i(
                                        c,
                                        {
                                          modelValue: d.type,
                                          "onUpdate:modelValue":
                                            a[2] || (a[2] = e => (d.type = e)),
                                          placeholder: "请选择"
                                        },
                                        {
                                          default: r(() => [
                                            (t(!0),
                                            y(
                                              k,
                                              null,
                                              m(
                                                le.value.typeEnums,
                                                (e, b) => (
                                                  t(),
                                                  p(
                                                    u,
                                                    {
                                                      key: b,
                                                      label: e,
                                                      value: Number(b)
                                                    },
                                                    null,
                                                    8,
                                                    ["label", "value"]
                                                  )
                                                )
                                              ),
                                              128
                                            ))
                                          ]),
                                          _: 1
                                        },
                                        8,
                                        ["modelValue"]
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                i(
                                  o,
                                  { label: "排列方式" },
                                  {
                                    default: r(() => [
                                      i(
                                        I,
                                        {
                                          modelValue: d.layout,
                                          "onUpdate:modelValue":
                                            a[3] ||
                                            (a[3] = e => (d.layout = e)),
                                          onChange: me
                                        },
                                        {
                                          default: r(() => [
                                            i(
                                              V,
                                              { label: 0 },
                                              {
                                                default: r(
                                                  () =>
                                                    a[9] || (a[9] = [F("单列")])
                                                ),
                                                _: 1
                                              }
                                            ),
                                            i(
                                              V,
                                              { label: 1 },
                                              {
                                                default: r(
                                                  () =>
                                                    a[10] ||
                                                    (a[10] = [F("双列")])
                                                ),
                                                _: 1
                                              }
                                            )
                                          ]),
                                          _: 1
                                        },
                                        8,
                                        ["modelValue"]
                                      )
                                    ]),
                                    _: 1
                                  }
                                ),
                                i(
                                  o,
                                  { label: "表单描述" },
                                  {
                                    default: r(() => [
                                      i(
                                        f,
                                        {
                                          modelValue: d.description,
                                          "onUpdate:modelValue":
                                            a[4] ||
                                            (a[4] = e => (d.description = e)),
                                          autosize: {
                                            minRows: 10,
                                            maxRows: 10
                                          },
                                          type: "textarea",
                                          placeholder: "请输入内容"
                                        },
                                        null,
                                        8,
                                        ["modelValue"]
                                      )
                                    ]),
                                    _: 1
                                  }
                                )
                              ]),
                              _: 1
                            },
                            8,
                            ["model", "rules"]
                          )
                        ]),
                        _: 1
                      }
                    ),
                    i(
                      Y,
                      { label: "字段属性", name: "itemProp" },
                      {
                        default: r(() => [
                          s.value !== null && _.value === null
                            ? (t(),
                              p(
                                A,
                                {
                                  key: 0,
                                  ref: "itemForm",
                                  "label-position": "top"
                                },
                                {
                                  default: r(() => [
                                    (t(!0),
                                    y(
                                      k,
                                      null,
                                      m(
                                        d.fields[s.value].attribute,
                                        (e, b) => (
                                          t(),
                                          y(
                                            k,
                                            null,
                                            [
                                              [20, 21, 22].includes(e.key)
                                                ? M("", !0)
                                                : (t(),
                                                  p(
                                                    o,
                                                    {
                                                      key: `${e.vModel}-${e.key}`,
                                                      label: e.title
                                                    },
                                                    x(
                                                      {
                                                        default: r(() => [
                                                          e.elType ===
                                                            "input" ||
                                                          ([0, 1].includes(
                                                            d.fields[s.value]
                                                              .key
                                                          ) &&
                                                            e.key === 2)
                                                            ? (t(),
                                                              p(
                                                                f,
                                                                {
                                                                  key: 0,
                                                                  modelValue:
                                                                    e[e.vModel],
                                                                  "onUpdate:modelValue":
                                                                    l =>
                                                                      (e[
                                                                        e.vModel
                                                                      ] = l),
                                                                  placeholder:
                                                                    "请输入",
                                                                  onInput: l =>
                                                                    U(
                                                                      l,
                                                                      b,
                                                                      e.isEchoNow
                                                                    )
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "modelValue",
                                                                  "onUpdate:modelValue",
                                                                  "onInput"
                                                                ]
                                                              ))
                                                            : e.elType ===
                                                                "inputNumber" ||
                                                              ([2].includes(
                                                                d.fields[
                                                                  s.value
                                                                ].key
                                                              ) &&
                                                                e.key === 2)
                                                            ? (t(),
                                                              p(
                                                                Z,
                                                                {
                                                                  key: 1,
                                                                  modelValue:
                                                                    e[e.vModel],
                                                                  "onUpdate:modelValue":
                                                                    l =>
                                                                      (e[
                                                                        e.vModel
                                                                      ] = l),
                                                                  min: [
                                                                    5
                                                                  ].includes(
                                                                    e.key
                                                                  )
                                                                    ? 0
                                                                    : -9999999,
                                                                  max: 9999999,
                                                                  "controls-position":
                                                                    "right",
                                                                  "step-strictly":
                                                                    "",
                                                                  placeholder:
                                                                    "请输入",
                                                                  onInput: l =>
                                                                    U(
                                                                      l,
                                                                      b,
                                                                      e.isEchoNow
                                                                    )
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "modelValue",
                                                                  "onUpdate:modelValue",
                                                                  "min",
                                                                  "onInput"
                                                                ]
                                                              ))
                                                            : [
                                                                4, 5, 6
                                                              ].includes(
                                                                d.fields[
                                                                  s.value
                                                                ].key
                                                              ) && e.key === 2
                                                            ? (t(),
                                                              p(
                                                                c,
                                                                {
                                                                  key: 2,
                                                                  modelValue:
                                                                    e[e.vModel],
                                                                  "onUpdate:modelValue":
                                                                    l =>
                                                                      (e[
                                                                        e.vModel
                                                                      ] = l),
                                                                  multiple:
                                                                    d.fields[
                                                                      s.value
                                                                    ].key === 5,
                                                                  clearable: "",
                                                                  onChange: l =>
                                                                    U(
                                                                      l,
                                                                      b,
                                                                      e.isEchoNow
                                                                    )
                                                                },
                                                                {
                                                                  default: r(
                                                                    () => [
                                                                      (t(!0),
                                                                      y(
                                                                        k,
                                                                        null,
                                                                        m(
                                                                          B.value(
                                                                            ""
                                                                          ),
                                                                          (
                                                                            l,
                                                                            v
                                                                          ) => (
                                                                            t(),
                                                                            p(
                                                                              u,
                                                                              {
                                                                                key: v,
                                                                                label:
                                                                                  l.label,
                                                                                value:
                                                                                  l.value
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
                                                                    ]
                                                                  ),
                                                                  _: 2
                                                                },
                                                                1032,
                                                                [
                                                                  "modelValue",
                                                                  "onUpdate:modelValue",
                                                                  "multiple",
                                                                  "onChange"
                                                                ]
                                                              ))
                                                            : [4, 12].includes(
                                                                e.key
                                                              ) &&
                                                              e.elType ===
                                                                "select"
                                                            ? (t(),
                                                              p(
                                                                c,
                                                                {
                                                                  key: 3,
                                                                  modelValue:
                                                                    e[e.vModel],
                                                                  "onUpdate:modelValue":
                                                                    l =>
                                                                      (e[
                                                                        e.vModel
                                                                      ] = l),
                                                                  onChange: l =>
                                                                    U(
                                                                      l,
                                                                      b,
                                                                      e.isEchoNow
                                                                    )
                                                                },
                                                                {
                                                                  default: r(
                                                                    () => [
                                                                      (t(!0),
                                                                      y(
                                                                        k,
                                                                        null,
                                                                        m(
                                                                          e.options,
                                                                          (
                                                                            l,
                                                                            v
                                                                          ) => (
                                                                            t(),
                                                                            p(
                                                                              u,
                                                                              {
                                                                                key: v,
                                                                                label:
                                                                                  l.label,
                                                                                value:
                                                                                  l.value
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
                                                                    ]
                                                                  ),
                                                                  _: 2
                                                                },
                                                                1032,
                                                                [
                                                                  "modelValue",
                                                                  "onUpdate:modelValue",
                                                                  "onChange"
                                                                ]
                                                              ))
                                                            : e.elType ===
                                                              "checkbox"
                                                            ? (t(),
                                                              p(
                                                                Q,
                                                                {
                                                                  key: 4,
                                                                  modelValue:
                                                                    e[e.vModel],
                                                                  "onUpdate:modelValue":
                                                                    l =>
                                                                      (e[
                                                                        e.vModel
                                                                      ] = l),
                                                                  label:
                                                                    e.checkboxLabel,
                                                                  onChange: l =>
                                                                    U(
                                                                      l,
                                                                      b,
                                                                      e.isEchoNow
                                                                    )
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "modelValue",
                                                                  "onUpdate:modelValue",
                                                                  "label",
                                                                  "onChange"
                                                                ]
                                                              ))
                                                            : e.elType ===
                                                              "radioGroup"
                                                            ? (t(),
                                                              p(
                                                                I,
                                                                {
                                                                  key: 5,
                                                                  modelValue:
                                                                    e[e.vModel],
                                                                  "onUpdate:modelValue":
                                                                    l =>
                                                                      (e[
                                                                        e.vModel
                                                                      ] = l),
                                                                  onChange: l =>
                                                                    U(
                                                                      l,
                                                                      b,
                                                                      e.isEchoNow
                                                                    )
                                                                },
                                                                {
                                                                  default: r(
                                                                    () => [
                                                                      (t(!0),
                                                                      y(
                                                                        k,
                                                                        null,
                                                                        m(
                                                                          e.options,
                                                                          (
                                                                            l,
                                                                            v
                                                                          ) => (
                                                                            t(),
                                                                            p(
                                                                              V,
                                                                              {
                                                                                key: v,
                                                                                label:
                                                                                  l.value
                                                                              },
                                                                              {
                                                                                default:
                                                                                  r(
                                                                                    () => [
                                                                                      F(
                                                                                        Ie(
                                                                                          l.label
                                                                                        ),
                                                                                        1
                                                                                      )
                                                                                    ]
                                                                                  ),
                                                                                _: 2
                                                                              },
                                                                              1032,
                                                                              [
                                                                                "label"
                                                                              ]
                                                                            )
                                                                          )
                                                                        ),
                                                                        128
                                                                      ))
                                                                    ]
                                                                  ),
                                                                  _: 2
                                                                },
                                                                1032,
                                                                [
                                                                  "modelValue",
                                                                  "onUpdate:modelValue",
                                                                  "onChange"
                                                                ]
                                                              ))
                                                            : [
                                                                6, 15, 16, 17
                                                              ].includes(e.key)
                                                            ? (t(),
                                                              p(
                                                                D,
                                                                {
                                                                  key: 6,
                                                                  class: "item",
                                                                  effect:
                                                                    "dark",
                                                                  content:
                                                                    "请注意对应组件是否已被使用",
                                                                  placement:
                                                                    "top-start"
                                                                },
                                                                {
                                                                  default: r(
                                                                    () => [
                                                                      i(
                                                                        c,
                                                                        {
                                                                          modelValue:
                                                                            e[
                                                                              e
                                                                                .vModel
                                                                            ],
                                                                          "onUpdate:modelValue":
                                                                            l =>
                                                                              (e[
                                                                                e.vModel
                                                                              ] =
                                                                                l)
                                                                        },
                                                                        {
                                                                          default:
                                                                            r(
                                                                              () => [
                                                                                (t(
                                                                                  !0
                                                                                ),
                                                                                y(
                                                                                  k,
                                                                                  null,
                                                                                  m(
                                                                                    $.value(),
                                                                                    (
                                                                                      l,
                                                                                      v
                                                                                    ) => (
                                                                                      t(),
                                                                                      p(
                                                                                        u,
                                                                                        {
                                                                                          key: v,
                                                                                          label:
                                                                                            l.label,
                                                                                          value:
                                                                                            l.value
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
                                                                              ]
                                                                            ),
                                                                          _: 2
                                                                        },
                                                                        1032,
                                                                        [
                                                                          "modelValue",
                                                                          "onUpdate:modelValue"
                                                                        ]
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _: 2
                                                                },
                                                                1024
                                                              ))
                                                            : e.key === 9
                                                            ? (t(),
                                                              p(
                                                                D,
                                                                {
                                                                  key: 7,
                                                                  class: "item",
                                                                  effect:
                                                                    "dark",
                                                                  content:
                                                                    "请注意其他下拉组件的层级关系，防止关系闭环",
                                                                  placement:
                                                                    "top-start"
                                                                },
                                                                {
                                                                  default: r(
                                                                    () => [
                                                                      i(
                                                                        c,
                                                                        {
                                                                          modelValue:
                                                                            e[
                                                                              e
                                                                                .vModel
                                                                            ],
                                                                          "onUpdate:modelValue":
                                                                            l =>
                                                                              (e[
                                                                                e.vModel
                                                                              ] =
                                                                                l),
                                                                          clearable:
                                                                            "",
                                                                          filterable:
                                                                            ""
                                                                        },
                                                                        {
                                                                          default:
                                                                            r(
                                                                              () => [
                                                                                (t(
                                                                                  !0
                                                                                ),
                                                                                y(
                                                                                  k,
                                                                                  null,
                                                                                  m(
                                                                                    z.value(),
                                                                                    (
                                                                                      l,
                                                                                      v
                                                                                    ) => (
                                                                                      t(),
                                                                                      p(
                                                                                        u,
                                                                                        {
                                                                                          key: v,
                                                                                          label:
                                                                                            l.label,
                                                                                          value:
                                                                                            l.value
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
                                                                              ]
                                                                            ),
                                                                          _: 2
                                                                        },
                                                                        1032,
                                                                        [
                                                                          "modelValue",
                                                                          "onUpdate:modelValue"
                                                                        ]
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _: 2
                                                                },
                                                                1024
                                                              ))
                                                            : e.key === 14
                                                            ? (t(),
                                                              p(
                                                                c,
                                                                {
                                                                  key: 8,
                                                                  modelValue:
                                                                    e[e.vModel],
                                                                  "onUpdate:modelValue":
                                                                    l =>
                                                                      (e[
                                                                        e.vModel
                                                                      ] = l)
                                                                },
                                                                {
                                                                  default: r(
                                                                    () => [
                                                                      (t(!0),
                                                                      y(
                                                                        k,
                                                                        null,
                                                                        m(
                                                                          R.value(),
                                                                          (
                                                                            l,
                                                                            v
                                                                          ) => (
                                                                            t(),
                                                                            p(
                                                                              u,
                                                                              {
                                                                                key: v,
                                                                                label:
                                                                                  l.label,
                                                                                value:
                                                                                  l.value
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
                                                                    ]
                                                                  ),
                                                                  _: 2
                                                                },
                                                                1032,
                                                                [
                                                                  "modelValue",
                                                                  "onUpdate:modelValue"
                                                                ]
                                                              ))
                                                            : e.key === 18
                                                            ? (t(),
                                                              p(
                                                                c,
                                                                {
                                                                  key: 9,
                                                                  modelValue:
                                                                    e[e.vModel],
                                                                  "onUpdate:modelValue":
                                                                    l =>
                                                                      (e[
                                                                        e.vModel
                                                                      ] = l),
                                                                  loading:
                                                                    te.value,
                                                                  "remote-method":
                                                                    se,
                                                                  filterable:
                                                                    "",
                                                                  clearable: "",
                                                                  remote: "",
                                                                  placeholder:
                                                                    "请选择",
                                                                  onFocus:
                                                                    a[5] ||
                                                                    (a[5] = l =>
                                                                      "")
                                                                },
                                                                {
                                                                  default: r(
                                                                    () => [
                                                                      (t(!0),
                                                                      y(
                                                                        k,
                                                                        null,
                                                                        m(
                                                                          oe.value,
                                                                          (
                                                                            l,
                                                                            v
                                                                          ) => (
                                                                            t(),
                                                                            p(
                                                                              u,
                                                                              {
                                                                                key: v,
                                                                                label:
                                                                                  l.name,
                                                                                value:
                                                                                  l.id
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
                                                                    ]
                                                                  ),
                                                                  _: 2
                                                                },
                                                                1032,
                                                                [
                                                                  "modelValue",
                                                                  "onUpdate:modelValue",
                                                                  "loading"
                                                                ]
                                                              ))
                                                            : M("", !0)
                                                        ]),
                                                        _: 2
                                                      },
                                                      [
                                                        [10, 19].includes(e.key)
                                                          ? {
                                                              name: "default",
                                                              fn: r(() => [
                                                                e.key === 10
                                                                  ? (t(),
                                                                    y(
                                                                      "div",
                                                                      we,
                                                                      [
                                                                        i(
                                                                          W,
                                                                          {
                                                                            data: e.value,
                                                                            class:
                                                                              "options-table"
                                                                          },
                                                                          {
                                                                            default:
                                                                              r(
                                                                                () => [
                                                                                  i(
                                                                                    E,
                                                                                    {
                                                                                      label:
                                                                                        "",
                                                                                      width:
                                                                                        "40px",
                                                                                      align:
                                                                                        "center"
                                                                                    },
                                                                                    {
                                                                                      default:
                                                                                        r(
                                                                                          ({
                                                                                            $index:
                                                                                              l
                                                                                          }) => [
                                                                                            P(
                                                                                              "div",
                                                                                              null,
                                                                                              [
                                                                                                i(
                                                                                                  O,
                                                                                                  {
                                                                                                    icon: L(
                                                                                                      ee
                                                                                                    ),
                                                                                                    type: "danger",
                                                                                                    circle:
                                                                                                      "",
                                                                                                    size: "small",
                                                                                                    title:
                                                                                                      "删除",
                                                                                                    onClick:
                                                                                                      v =>
                                                                                                        G(
                                                                                                          b,
                                                                                                          l
                                                                                                        )
                                                                                                  },
                                                                                                  null,
                                                                                                  8,
                                                                                                  [
                                                                                                    "icon",
                                                                                                    "onClick"
                                                                                                  ]
                                                                                                )
                                                                                              ]
                                                                                            )
                                                                                          ]
                                                                                        ),
                                                                                      _: 2
                                                                                    },
                                                                                    1024
                                                                                  ),
                                                                                  d
                                                                                    .fields[
                                                                                    s
                                                                                      .value
                                                                                  ]
                                                                                    .attribute[
                                                                                    b -
                                                                                      1
                                                                                  ]
                                                                                    .parentVModel
                                                                                    ? (t(),
                                                                                      p(
                                                                                        E,
                                                                                        {
                                                                                          key: 0,
                                                                                          label:
                                                                                            "上级选项"
                                                                                        },
                                                                                        {
                                                                                          default:
                                                                                            r(
                                                                                              ({
                                                                                                row: l
                                                                                              }) => [
                                                                                                P(
                                                                                                  "div",
                                                                                                  De,
                                                                                                  [
                                                                                                    i(
                                                                                                      c,
                                                                                                      {
                                                                                                        modelValue:
                                                                                                          l.parentVModel,
                                                                                                        "onUpdate:modelValue":
                                                                                                          v =>
                                                                                                            (l.parentVModel =
                                                                                                              v),
                                                                                                        clearable:
                                                                                                          "",
                                                                                                        filterable:
                                                                                                          ""
                                                                                                      },
                                                                                                      {
                                                                                                        default:
                                                                                                          r(
                                                                                                            () => [
                                                                                                              (t(
                                                                                                                !0
                                                                                                              ),
                                                                                                              y(
                                                                                                                k,
                                                                                                                null,
                                                                                                                m(
                                                                                                                  q.value(
                                                                                                                    b
                                                                                                                  ),
                                                                                                                  (
                                                                                                                    v,
                                                                                                                    C
                                                                                                                  ) => (
                                                                                                                    t(),
                                                                                                                    p(
                                                                                                                      u,
                                                                                                                      {
                                                                                                                        key: C,
                                                                                                                        label:
                                                                                                                          v.label,
                                                                                                                        value:
                                                                                                                          v.value
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
                                                                                                            ]
                                                                                                          ),
                                                                                                        _: 2
                                                                                                      },
                                                                                                      1032,
                                                                                                      [
                                                                                                        "modelValue",
                                                                                                        "onUpdate:modelValue"
                                                                                                      ]
                                                                                                    )
                                                                                                  ]
                                                                                                )
                                                                                              ]
                                                                                            ),
                                                                                          _: 2
                                                                                        },
                                                                                        1024
                                                                                      ))
                                                                                    : M(
                                                                                        "",
                                                                                        !0
                                                                                      ),
                                                                                  i(
                                                                                    E,
                                                                                    {
                                                                                      label:
                                                                                        "选项"
                                                                                    },
                                                                                    {
                                                                                      default:
                                                                                        r(
                                                                                          ({
                                                                                            row: l,
                                                                                            $index:
                                                                                              v
                                                                                          }) => [
                                                                                            P(
                                                                                              "div",
                                                                                              Ee,
                                                                                              [
                                                                                                i(
                                                                                                  f,
                                                                                                  {
                                                                                                    modelValue:
                                                                                                      l.label,
                                                                                                    "onUpdate:modelValue":
                                                                                                      C =>
                                                                                                        (l.label =
                                                                                                          C),
                                                                                                    onInput:
                                                                                                      C =>
                                                                                                        X(
                                                                                                          C,
                                                                                                          b,
                                                                                                          v
                                                                                                        )
                                                                                                  },
                                                                                                  null,
                                                                                                  8,
                                                                                                  [
                                                                                                    "modelValue",
                                                                                                    "onUpdate:modelValue",
                                                                                                    "onInput"
                                                                                                  ]
                                                                                                )
                                                                                              ]
                                                                                            )
                                                                                          ]
                                                                                        ),
                                                                                      _: 2
                                                                                    },
                                                                                    1024
                                                                                  )
                                                                                ]
                                                                              ),
                                                                            _: 2
                                                                          },
                                                                          1032,
                                                                          [
                                                                            "data"
                                                                          ]
                                                                        ),
                                                                        i(
                                                                          O,
                                                                          {
                                                                            size: "small",
                                                                            type: "primary",
                                                                            onClick:
                                                                              l =>
                                                                                j(
                                                                                  b
                                                                                )
                                                                          },
                                                                          {
                                                                            default:
                                                                              r(
                                                                                () =>
                                                                                  a[11] ||
                                                                                  (a[11] =
                                                                                    [
                                                                                      F(
                                                                                        "+ 添加选项"
                                                                                      )
                                                                                    ])
                                                                              ),
                                                                            _: 2
                                                                          },
                                                                          1032,
                                                                          [
                                                                            "onClick"
                                                                          ]
                                                                        )
                                                                      ]
                                                                    ))
                                                                  : M("", !0),
                                                                e.key === 19
                                                                  ? (t(),
                                                                    y(
                                                                      "div",
                                                                      Je,
                                                                      [
                                                                        i(
                                                                          Se,
                                                                          {
                                                                            ref_for:
                                                                              !0,
                                                                            ref: `childProp-${b}`,
                                                                            "prop-index":
                                                                              b,
                                                                            "prop-list":
                                                                              d
                                                                                .fields[
                                                                                s
                                                                                  .value
                                                                              ]
                                                                                .fields,
                                                                            onHandleChangeChild:
                                                                              be
                                                                          },
                                                                          null,
                                                                          8,
                                                                          [
                                                                            "prop-index",
                                                                            "prop-list"
                                                                          ]
                                                                        )
                                                                      ]
                                                                    ))
                                                                  : M("", !0)
                                                              ]),
                                                              key: "0"
                                                            }
                                                          : void 0
                                                      ]
                                                    ),
                                                    1032,
                                                    ["label"]
                                                  ))
                                            ],
                                            64
                                          )
                                        )
                                      ),
                                      256
                                    ))
                                  ]),
                                  _: 1
                                },
                                512
                              ))
                            : M("", !0),
                          s.value !== null &&
                          _.value !== null &&
                          d.fields[s.value].key === 13
                            ? (t(),
                              p(
                                A,
                                {
                                  key: 1,
                                  ref: "itemForm",
                                  "label-position": "top"
                                },
                                {
                                  default: r(() => [
                                    (t(!0),
                                    y(
                                      k,
                                      null,
                                      m(
                                        d.fields[s.value].fields[_.value]
                                          .attribute,
                                        (e, b) => (
                                          t(),
                                          y(
                                            k,
                                            null,
                                            [
                                              [11, 12].includes(e.key)
                                                ? M("", !0)
                                                : (t(),
                                                  p(
                                                    o,
                                                    {
                                                      key: `${e.vModel}-${e.key}`,
                                                      label: e.title
                                                    },
                                                    x(
                                                      {
                                                        default: r(() => [
                                                          e.elType ===
                                                            "input" ||
                                                          ([0, 1].includes(
                                                            d.fields[s.value]
                                                              .fields[_.value]
                                                              .key
                                                          ) &&
                                                            e.key === 2)
                                                            ? (t(),
                                                              p(
                                                                f,
                                                                {
                                                                  key: 0,
                                                                  modelValue:
                                                                    e[e.vModel],
                                                                  "onUpdate:modelValue":
                                                                    l =>
                                                                      (e[
                                                                        e.vModel
                                                                      ] = l),
                                                                  placeholder:
                                                                    "请输入",
                                                                  onInput: l =>
                                                                    w(
                                                                      l,
                                                                      b,
                                                                      e.isEchoNow
                                                                    )
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "modelValue",
                                                                  "onUpdate:modelValue",
                                                                  "onInput"
                                                                ]
                                                              ))
                                                            : e.elType ===
                                                                "inputNumber" ||
                                                              ([2].includes(
                                                                d.fields[
                                                                  s.value
                                                                ].fields[
                                                                  _.value
                                                                ].key
                                                              ) &&
                                                                e.key === 2)
                                                            ? (t(),
                                                              p(
                                                                Z,
                                                                {
                                                                  key: 1,
                                                                  modelValue:
                                                                    e[e.vModel],
                                                                  "onUpdate:modelValue":
                                                                    l =>
                                                                      (e[
                                                                        e.vModel
                                                                      ] = l),
                                                                  "controls-position":
                                                                    "right",
                                                                  "step-strictly":
                                                                    "",
                                                                  placeholder:
                                                                    "请输入",
                                                                  onInput: l =>
                                                                    w(
                                                                      l,
                                                                      b,
                                                                      e.isEchoNow
                                                                    )
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "modelValue",
                                                                  "onUpdate:modelValue",
                                                                  "onInput"
                                                                ]
                                                              ))
                                                            : [6].includes(
                                                                d.fields[
                                                                  s.value
                                                                ].fields[
                                                                  _.value
                                                                ].key
                                                              ) && e.key === 2
                                                            ? (t(),
                                                              p(
                                                                c,
                                                                {
                                                                  key: 2,
                                                                  modelValue:
                                                                    e[e.vModel],
                                                                  "onUpdate:modelValue":
                                                                    l =>
                                                                      (e[
                                                                        e.vModel
                                                                      ] = l),
                                                                  multiple:
                                                                    d.fields[
                                                                      s.value
                                                                    ].fields[
                                                                      _.value
                                                                    ].key === 5,
                                                                  clearable: "",
                                                                  onChange: l =>
                                                                    w(
                                                                      l,
                                                                      b,
                                                                      e.isEchoNow
                                                                    )
                                                                },
                                                                {
                                                                  default: r(
                                                                    () => [
                                                                      (t(!0),
                                                                      y(
                                                                        k,
                                                                        null,
                                                                        m(
                                                                          B.value(
                                                                            "child"
                                                                          ),
                                                                          (
                                                                            l,
                                                                            v
                                                                          ) => (
                                                                            t(),
                                                                            p(
                                                                              u,
                                                                              {
                                                                                key: v,
                                                                                label:
                                                                                  l.label,
                                                                                value:
                                                                                  l.value
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
                                                                    ]
                                                                  ),
                                                                  _: 2
                                                                },
                                                                1032,
                                                                [
                                                                  "modelValue",
                                                                  "onUpdate:modelValue",
                                                                  "multiple",
                                                                  "onChange"
                                                                ]
                                                              ))
                                                            : [4].includes(
                                                                e.key
                                                              ) &&
                                                              e.elType ===
                                                                "select"
                                                            ? (t(),
                                                              p(
                                                                c,
                                                                {
                                                                  key: 3,
                                                                  modelValue:
                                                                    e[e.vModel],
                                                                  "onUpdate:modelValue":
                                                                    l =>
                                                                      (e[
                                                                        e.vModel
                                                                      ] = l),
                                                                  clearable: "",
                                                                  onChange: l =>
                                                                    w(
                                                                      l,
                                                                      b,
                                                                      e.isEchoNow
                                                                    )
                                                                },
                                                                {
                                                                  default: r(
                                                                    () => [
                                                                      (t(!0),
                                                                      y(
                                                                        k,
                                                                        null,
                                                                        m(
                                                                          e.options,
                                                                          (
                                                                            l,
                                                                            v
                                                                          ) => (
                                                                            t(),
                                                                            p(
                                                                              u,
                                                                              {
                                                                                key: v,
                                                                                label:
                                                                                  l.label,
                                                                                value:
                                                                                  l.value
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
                                                                    ]
                                                                  ),
                                                                  _: 2
                                                                },
                                                                1032,
                                                                [
                                                                  "modelValue",
                                                                  "onUpdate:modelValue",
                                                                  "onChange"
                                                                ]
                                                              ))
                                                            : e.elType ===
                                                              "checkbox"
                                                            ? (t(),
                                                              p(
                                                                Q,
                                                                {
                                                                  key: 4,
                                                                  modelValue:
                                                                    e[e.vModel],
                                                                  "onUpdate:modelValue":
                                                                    l =>
                                                                      (e[
                                                                        e.vModel
                                                                      ] = l),
                                                                  label:
                                                                    e.checkboxLabel,
                                                                  onChange: l =>
                                                                    w(
                                                                      l,
                                                                      b,
                                                                      e.isEchoNow
                                                                    )
                                                                },
                                                                null,
                                                                8,
                                                                [
                                                                  "modelValue",
                                                                  "onUpdate:modelValue",
                                                                  "label",
                                                                  "onChange"
                                                                ]
                                                              ))
                                                            : [
                                                                6, 15, 16, 17
                                                              ].includes(e.key)
                                                            ? (t(),
                                                              p(
                                                                D,
                                                                {
                                                                  key: 5,
                                                                  class: "item",
                                                                  effect:
                                                                    "dark",
                                                                  content:
                                                                    "请注意对应组件是否已被使用",
                                                                  placement:
                                                                    "top-start"
                                                                },
                                                                {
                                                                  default: r(
                                                                    () => [
                                                                      i(
                                                                        c,
                                                                        {
                                                                          modelValue:
                                                                            e[
                                                                              e
                                                                                .vModel
                                                                            ],
                                                                          "onUpdate:modelValue":
                                                                            l =>
                                                                              (e[
                                                                                e.vModel
                                                                              ] =
                                                                                l),
                                                                          clearable:
                                                                            ""
                                                                        },
                                                                        {
                                                                          default:
                                                                            r(
                                                                              () => [
                                                                                (t(
                                                                                  !0
                                                                                ),
                                                                                y(
                                                                                  k,
                                                                                  null,
                                                                                  m(
                                                                                    $.value(
                                                                                      "child"
                                                                                    ),
                                                                                    (
                                                                                      l,
                                                                                      v
                                                                                    ) => (
                                                                                      t(),
                                                                                      p(
                                                                                        u,
                                                                                        {
                                                                                          key: v,
                                                                                          label:
                                                                                            l.label,
                                                                                          value:
                                                                                            l.value
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
                                                                              ]
                                                                            ),
                                                                          _: 2
                                                                        },
                                                                        1032,
                                                                        [
                                                                          "modelValue",
                                                                          "onUpdate:modelValue"
                                                                        ]
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _: 2
                                                                },
                                                                1024
                                                              ))
                                                            : e.key === 9
                                                            ? (t(),
                                                              p(
                                                                D,
                                                                {
                                                                  key: 6,
                                                                  class: "item",
                                                                  effect:
                                                                    "dark",
                                                                  content:
                                                                    "请注意其他下拉组件的层级关系，防止关系闭环",
                                                                  placement:
                                                                    "top-start"
                                                                },
                                                                {
                                                                  default: r(
                                                                    () => [
                                                                      i(
                                                                        c,
                                                                        {
                                                                          modelValue:
                                                                            e[
                                                                              e
                                                                                .vModel
                                                                            ],
                                                                          "onUpdate:modelValue":
                                                                            l =>
                                                                              (e[
                                                                                e.vModel
                                                                              ] =
                                                                                l),
                                                                          clearable:
                                                                            "",
                                                                          filterable:
                                                                            ""
                                                                        },
                                                                        {
                                                                          default:
                                                                            r(
                                                                              () => [
                                                                                (t(
                                                                                  !0
                                                                                ),
                                                                                y(
                                                                                  k,
                                                                                  null,
                                                                                  m(
                                                                                    z.value(
                                                                                      "child"
                                                                                    ),
                                                                                    (
                                                                                      l,
                                                                                      v
                                                                                    ) => (
                                                                                      t(),
                                                                                      p(
                                                                                        u,
                                                                                        {
                                                                                          key: v,
                                                                                          label:
                                                                                            l.label,
                                                                                          value:
                                                                                            l.value
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
                                                                              ]
                                                                            ),
                                                                          _: 2
                                                                        },
                                                                        1032,
                                                                        [
                                                                          "modelValue",
                                                                          "onUpdate:modelValue"
                                                                        ]
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _: 2
                                                                },
                                                                1024
                                                              ))
                                                            : e.key === 14
                                                            ? (t(),
                                                              p(
                                                                c,
                                                                {
                                                                  key: 7,
                                                                  modelValue:
                                                                    e[e.vModel],
                                                                  "onUpdate:modelValue":
                                                                    l =>
                                                                      (e[
                                                                        e.vModel
                                                                      ] = l),
                                                                  clearable: ""
                                                                },
                                                                {
                                                                  default: r(
                                                                    () => [
                                                                      (t(!0),
                                                                      y(
                                                                        k,
                                                                        null,
                                                                        m(
                                                                          R.value(
                                                                            ""
                                                                          ),
                                                                          (
                                                                            l,
                                                                            v
                                                                          ) => (
                                                                            t(),
                                                                            p(
                                                                              u,
                                                                              {
                                                                                key: v,
                                                                                label:
                                                                                  l.label,
                                                                                value:
                                                                                  l.value
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
                                                                    ]
                                                                  ),
                                                                  _: 2
                                                                },
                                                                1032,
                                                                [
                                                                  "modelValue",
                                                                  "onUpdate:modelValue"
                                                                ]
                                                              ))
                                                            : [20].includes(
                                                                e.key
                                                              )
                                                            ? (t(),
                                                              p(
                                                                D,
                                                                {
                                                                  key: 8,
                                                                  class: "item",
                                                                  effect:
                                                                    "dark",
                                                                  content:
                                                                    "请注意对应组件是否已被使用",
                                                                  placement:
                                                                    "top-start"
                                                                },
                                                                {
                                                                  default: r(
                                                                    () => [
                                                                      i(
                                                                        c,
                                                                        {
                                                                          modelValue:
                                                                            e[
                                                                              e
                                                                                .vModel
                                                                            ],
                                                                          "onUpdate:modelValue":
                                                                            l =>
                                                                              (e[
                                                                                e.vModel
                                                                              ] =
                                                                                l),
                                                                          clearable:
                                                                            ""
                                                                        },
                                                                        {
                                                                          default:
                                                                            r(
                                                                              () => [
                                                                                (t(
                                                                                  !0
                                                                                ),
                                                                                y(
                                                                                  k,
                                                                                  null,
                                                                                  m(
                                                                                    $.value(),
                                                                                    (
                                                                                      l,
                                                                                      v
                                                                                    ) => (
                                                                                      t(),
                                                                                      p(
                                                                                        u,
                                                                                        {
                                                                                          key: v,
                                                                                          label:
                                                                                            l.label,
                                                                                          value:
                                                                                            l.value
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
                                                                              ]
                                                                            ),
                                                                          _: 2
                                                                        },
                                                                        1032,
                                                                        [
                                                                          "modelValue",
                                                                          "onUpdate:modelValue"
                                                                        ]
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _: 2
                                                                },
                                                                1024
                                                              ))
                                                            : [21].includes(
                                                                e.key
                                                              )
                                                            ? (t(),
                                                              p(
                                                                D,
                                                                {
                                                                  key: 9,
                                                                  class: "item",
                                                                  effect:
                                                                    "dark",
                                                                  content:
                                                                    "请注意对应组件是否已被使用",
                                                                  placement:
                                                                    "top-start"
                                                                },
                                                                {
                                                                  default: r(
                                                                    () => [
                                                                      i(
                                                                        c,
                                                                        {
                                                                          modelValue:
                                                                            e[
                                                                              e
                                                                                .vModel
                                                                            ],
                                                                          "onUpdate:modelValue":
                                                                            l =>
                                                                              (e[
                                                                                e.vModel
                                                                              ] =
                                                                                l),
                                                                          clearable:
                                                                            ""
                                                                        },
                                                                        {
                                                                          default:
                                                                            r(
                                                                              () => [
                                                                                (t(
                                                                                  !0
                                                                                ),
                                                                                y(
                                                                                  k,
                                                                                  null,
                                                                                  m(
                                                                                    ne.value(),
                                                                                    (
                                                                                      l,
                                                                                      v
                                                                                    ) => (
                                                                                      t(),
                                                                                      p(
                                                                                        u,
                                                                                        {
                                                                                          key: v,
                                                                                          label:
                                                                                            l.label,
                                                                                          value:
                                                                                            l.value
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
                                                                              ]
                                                                            ),
                                                                          _: 2
                                                                        },
                                                                        1032,
                                                                        [
                                                                          "modelValue",
                                                                          "onUpdate:modelValue"
                                                                        ]
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _: 2
                                                                },
                                                                1024
                                                              ))
                                                            : M("", !0),
                                                          e.key === 22
                                                            ? (t(),
                                                              y("div", Le, [
                                                                i(
                                                                  O,
                                                                  {
                                                                    type: "primary",
                                                                    onClick: pe
                                                                  },
                                                                  {
                                                                    default: r(
                                                                      () =>
                                                                        a[13] ||
                                                                        (a[13] =
                                                                          [
                                                                            F(
                                                                              "公式编辑"
                                                                            )
                                                                          ])
                                                                    ),
                                                                    _: 1
                                                                  }
                                                                ),
                                                                J.value
                                                                  ? (t(),
                                                                    p(
                                                                      _e,
                                                                      {
                                                                        key: 0,
                                                                        visible:
                                                                          J.value,
                                                                        "onUpdate:visible":
                                                                          a[7] ||
                                                                          (a[7] =
                                                                            l =>
                                                                              (J.value =
                                                                                l)),
                                                                        "close-on-click-modal":
                                                                          !1,
                                                                        title:
                                                                          "编辑运算公式",
                                                                        width:
                                                                          "500px"
                                                                      },
                                                                      {
                                                                        footer:
                                                                          r(
                                                                            () => [
                                                                              P(
                                                                                "div",
                                                                                null,
                                                                                [
                                                                                  i(
                                                                                    O,
                                                                                    {
                                                                                      onClick:
                                                                                        a[6] ||
                                                                                        (a[6] =
                                                                                          l =>
                                                                                            (J.value =
                                                                                              !1))
                                                                                    },
                                                                                    {
                                                                                      default:
                                                                                        r(
                                                                                          () =>
                                                                                            a[14] ||
                                                                                            (a[14] =
                                                                                              [
                                                                                                F(
                                                                                                  "取消"
                                                                                                )
                                                                                              ])
                                                                                        ),
                                                                                      _: 1
                                                                                    }
                                                                                  ),
                                                                                  i(
                                                                                    O,
                                                                                    {
                                                                                      type: "primary",
                                                                                      onClick:
                                                                                        ke
                                                                                    },
                                                                                    {
                                                                                      default:
                                                                                        r(
                                                                                          () =>
                                                                                            a[15] ||
                                                                                            (a[15] =
                                                                                              [
                                                                                                F(
                                                                                                  "确认"
                                                                                                )
                                                                                              ])
                                                                                        ),
                                                                                      _: 1
                                                                                    }
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ]
                                                                          ),
                                                                        _: 1
                                                                      },
                                                                      8,
                                                                      [
                                                                        "visible"
                                                                      ]
                                                                    ))
                                                                  : M("", !0)
                                                              ]))
                                                            : M("", !0)
                                                        ]),
                                                        _: 2
                                                      },
                                                      [
                                                        [10, 19].includes(e.key)
                                                          ? {
                                                              name: "default",
                                                              fn: r(() => [
                                                                e.key === 10
                                                                  ? (t(),
                                                                    y(
                                                                      "div",
                                                                      Te,
                                                                      [
                                                                        i(
                                                                          W,
                                                                          {
                                                                            data: e.value,
                                                                            class:
                                                                              "options-table"
                                                                          },
                                                                          {
                                                                            default:
                                                                              r(
                                                                                () => [
                                                                                  i(
                                                                                    E,
                                                                                    {
                                                                                      label:
                                                                                        "",
                                                                                      width:
                                                                                        "40px",
                                                                                      align:
                                                                                        "center"
                                                                                    },
                                                                                    {
                                                                                      default:
                                                                                        r(
                                                                                          ({
                                                                                            $index:
                                                                                              l
                                                                                          }) => [
                                                                                            P(
                                                                                              "div",
                                                                                              null,
                                                                                              [
                                                                                                i(
                                                                                                  O,
                                                                                                  {
                                                                                                    icon: L(
                                                                                                      ee
                                                                                                    ),
                                                                                                    type: "danger",
                                                                                                    circle:
                                                                                                      "",
                                                                                                    size: "small",
                                                                                                    title:
                                                                                                      "删除",
                                                                                                    onClick:
                                                                                                      v =>
                                                                                                        G(
                                                                                                          b,
                                                                                                          l
                                                                                                        )
                                                                                                  },
                                                                                                  null,
                                                                                                  8,
                                                                                                  [
                                                                                                    "icon",
                                                                                                    "onClick"
                                                                                                  ]
                                                                                                )
                                                                                              ]
                                                                                            )
                                                                                          ]
                                                                                        ),
                                                                                      _: 2
                                                                                    },
                                                                                    1024
                                                                                  ),
                                                                                  de.value(
                                                                                    b
                                                                                  )
                                                                                    ? (t(),
                                                                                      p(
                                                                                        E,
                                                                                        {
                                                                                          key: 0,
                                                                                          label:
                                                                                            "上级选项"
                                                                                        },
                                                                                        {
                                                                                          default:
                                                                                            r(
                                                                                              ({
                                                                                                row: l
                                                                                              }) => [
                                                                                                P(
                                                                                                  "div",
                                                                                                  $e,
                                                                                                  [
                                                                                                    i(
                                                                                                      c,
                                                                                                      {
                                                                                                        modelValue:
                                                                                                          l.parentVModel,
                                                                                                        "onUpdate:modelValue":
                                                                                                          v =>
                                                                                                            (l.parentVModel =
                                                                                                              v),
                                                                                                        clearable:
                                                                                                          "",
                                                                                                        filterable:
                                                                                                          ""
                                                                                                      },
                                                                                                      {
                                                                                                        default:
                                                                                                          r(
                                                                                                            () => [
                                                                                                              (t(
                                                                                                                !0
                                                                                                              ),
                                                                                                              y(
                                                                                                                k,
                                                                                                                null,
                                                                                                                m(
                                                                                                                  q.value(
                                                                                                                    b,
                                                                                                                    "child"
                                                                                                                  ),
                                                                                                                  (
                                                                                                                    v,
                                                                                                                    C
                                                                                                                  ) => (
                                                                                                                    t(),
                                                                                                                    p(
                                                                                                                      u,
                                                                                                                      {
                                                                                                                        key: C,
                                                                                                                        label:
                                                                                                                          v.label,
                                                                                                                        value:
                                                                                                                          v.value
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
                                                                                                            ]
                                                                                                          ),
                                                                                                        _: 2
                                                                                                      },
                                                                                                      1032,
                                                                                                      [
                                                                                                        "modelValue",
                                                                                                        "onUpdate:modelValue"
                                                                                                      ]
                                                                                                    )
                                                                                                  ]
                                                                                                )
                                                                                              ]
                                                                                            ),
                                                                                          _: 2
                                                                                        },
                                                                                        1024
                                                                                      ))
                                                                                    : M(
                                                                                        "",
                                                                                        !0
                                                                                      ),
                                                                                  i(
                                                                                    E,
                                                                                    {
                                                                                      label:
                                                                                        "选项"
                                                                                    },
                                                                                    {
                                                                                      default:
                                                                                        r(
                                                                                          ({
                                                                                            row: l,
                                                                                            $index:
                                                                                              v
                                                                                          }) => [
                                                                                            P(
                                                                                              "div",
                                                                                              Ae,
                                                                                              [
                                                                                                i(
                                                                                                  f,
                                                                                                  {
                                                                                                    modelValue:
                                                                                                      l.label,
                                                                                                    "onUpdate:modelValue":
                                                                                                      C =>
                                                                                                        (l.label =
                                                                                                          C),
                                                                                                    onInput:
                                                                                                      C =>
                                                                                                        X(
                                                                                                          C,
                                                                                                          b,
                                                                                                          v,
                                                                                                          "child"
                                                                                                        )
                                                                                                  },
                                                                                                  null,
                                                                                                  8,
                                                                                                  [
                                                                                                    "modelValue",
                                                                                                    "onUpdate:modelValue",
                                                                                                    "onInput"
                                                                                                  ]
                                                                                                )
                                                                                              ]
                                                                                            )
                                                                                          ]
                                                                                        ),
                                                                                      _: 2
                                                                                    },
                                                                                    1024
                                                                                  )
                                                                                ]
                                                                              ),
                                                                            _: 2
                                                                          },
                                                                          1032,
                                                                          [
                                                                            "data"
                                                                          ]
                                                                        ),
                                                                        i(
                                                                          O,
                                                                          {
                                                                            size: "small",
                                                                            type: "primary",
                                                                            onClick:
                                                                              l =>
                                                                                j(
                                                                                  b,
                                                                                  "child"
                                                                                )
                                                                          },
                                                                          {
                                                                            default:
                                                                              r(
                                                                                () =>
                                                                                  a[12] ||
                                                                                  (a[12] =
                                                                                    [
                                                                                      F(
                                                                                        "+ 添加选项"
                                                                                      )
                                                                                    ])
                                                                              ),
                                                                            _: 2
                                                                          },
                                                                          1032,
                                                                          [
                                                                            "onClick"
                                                                          ]
                                                                        )
                                                                      ]
                                                                    ))
                                                                  : M("", !0)
                                                              ]),
                                                              key: "0"
                                                            }
                                                          : void 0
                                                      ]
                                                    ),
                                                    1032,
                                                    ["label"]
                                                  ))
                                            ],
                                            64
                                          )
                                        )
                                      ),
                                      256
                                    )),
                                    i(
                                      O,
                                      {
                                        icon: L(Ne),
                                        class: "back-child-field",
                                        onClick: ye
                                      },
                                      {
                                        default: r(
                                          () =>
                                            a[16] || (a[16] = [F("返回子表单")])
                                        ),
                                        _: 1
                                      },
                                      8,
                                      ["icon"]
                                    )
                                  ]),
                                  _: 1
                                },
                                512
                              ))
                            : M("", !0)
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                },
                8,
                ["modelValue"]
              )
            ])
          );
        }
      );
    }
  },
  Ge = ge(Be, [["__scopeId", "data-v-4e23d054"]]);
export { Ge as default };
