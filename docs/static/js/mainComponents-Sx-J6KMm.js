import {
  _ as ae,
  r as T,
  z,
  L as oe,
  e as ue,
  f as te,
  h as m,
  c as d,
  o as t,
  F as i,
  k as h,
  y as S,
  u as $,
  g as s,
  v as B,
  a as U,
  w as p,
  b as y,
  i as x,
  aY as ne,
  a4 as re,
  t as F,
  O as w,
  ab as de,
  n as pe
} from "./index-DuV_pBtV.js";
import { B as b } from "./bus-BzRs4HHa.js";
import { f as se } from "./formConfig-jyKkspzO.js";
const ce = { class: "dom-container" },
  ve = ["onClick", "onDragstart", "onDrop"],
  fe = { style: { "text-align": "end" } },
  ye = { key: 7, class: "image-block" },
  ie = { key: 11, class: "associated-data" },
  he = ["tar-key"],
  be = ["onClick"],
  _e = ["id"],
  ke = { class: "thead" },
  Ve = { class: "tbody" },
  ge = { class: "tr" },
  me = {
    __name: "mainComponents",
    props: {
      formData: { type: Array, default: () => [] },
      formType: { type: String, default: "create" }
    },
    setup(I) {
      const E = I,
        r = T([]),
        c = T(""),
        C = T(""),
        M = T(!1),
        q = z(() => u => {
          let a = !1;
          for (const o of u.attribute)
            if (o.key === 3 && o[o.vModel]) return (a = o[o.vModel]), a;
          return a;
        }),
        A = z(() => u => {
          let a = u.placeholder || "";
          for (const o of u.attribute)
            if (o.key === 1 && o[o.vModel]) return (a = o[o.vModel]), a;
          return a;
        });
      oe(
        () => E.formData,
        u => {
          u && (r.value = R(u));
        },
        { deep: !0, immediate: !0 }
      );
      function K() {
        j(), Y(), H(), L();
      }
      function P(u) {
        (c.value = u), (C.value = "");
        const a = Number(u.split("-")[1]);
        b.emit("activeItem", [a, r.value[a]]);
      }
      function L() {
        b.on("handleChildSetProp", u => {
          const a = Number(c.value.split("-")[1]);
          C.value = `${r.value[a].value[u].type}-${u}`;
        });
      }
      function R(u) {
        return (
          u.forEach(a => {
            a.attribute &&
              a.attribute.forEach(o => {
                o.isEchoNow && (a[o.vModel] = o.value || o[o.vModel]);
              });
          }),
          u
        );
      }
      function Y() {
        b.on("handleChangeItem", async u => {
          const a = JSON.parse(JSON.stringify(r.value));
          (a[u.index][u.vModel] = u.value),
            u.propKey === 19 && (a[u.index].value = u.value);
          const o = c.value;
          (r.value = a), await pe(), (c.value = o);
        });
      }
      function j() {
        b.on("addModule", u => {
          G(u);
        });
      }
      function G(u) {
        const a = se.formDomConfig.find(f => f.key === u.key),
          o = {
            ...a,
            vModel: `${a.type}~${r.value.length}~${new Date().getTime()}`,
            key: u.key,
            value: [5, 8, 9, 13].includes(u.key) ? [] : ""
          };
        u.key === 13 && (o.fields = []),
          r.value.push(o),
          (c.value = `${a.type}-${r.value.length - 1}`),
          (C.value = ""),
          b.emit("activeItem", r.value.length - 1),
          b.emit("changeForm", [r.value, null]);
      }
      function H() {
        b.on("changeChildForm", u => {
          const a = u[0],
            o = u[1],
            f = u[2],
            v = Number(c.value.split("-")[1]);
          let _ = [...r.value[v].value];
          if (!a) {
            const D = r.value[v].value[o];
            _.splice(o, 1),
              f === "del"
                ? (C.value = "")
                : _.splice(o + (f === "down" ? 1 : -1), 0, D),
              (_ = _.filter(N => N)),
              (r.value[v].value = _);
            return;
          }
          (_[o] = a), (r.value[v].value = _);
        });
      }
      function Q(u, a, o) {
        if (!u.target.id) return;
        P(`${a.type}-${o}`);
        const f = a.value[u.target.id.split("-")[1]];
        C.value = u.target.id;
        const v = Number(C.value.replace(/.*-(\d*)$/g, "$1"));
        b.emit("activeChildItem", [f, v]);
      }
      function W(u) {
        const a = u.split("-")[1],
          o = r.value;
        r.value.splice(a, 1),
          o[a]
            ? (c.value = c.value.replace(/\w*-/, `${o[a].type}-`))
            : o.length - 1 < 0
            ? (c.value = null)
            : (c.value = `${o[o.length - 1].type}-${o.length - 1}`),
          (M.value = !1),
          b.emit("changeForm", [r.value, a]);
      }
      function X(u, a) {
        u.dataTransfer.setData("index", a);
      }
      function Z(u, a) {
        u.preventDefault();
        const o = Number(c.value.split("-")[1]),
          f = parseInt(u.dataTransfer.getData("index")),
          v = parseInt(a),
          _ = JSON.parse(JSON.stringify(r.value)),
          D = JSON.parse(JSON.stringify(r.value[f])),
          N = JSON.parse(JSON.stringify(r.value[v]));
        (D.vModel = D.vModel.replace(/~\d*~/, `~${v}~`)),
          (N.vModel = N.vModel.replace(/~\d*~/, `~${f}~`)),
          _.splice(f, 1),
          _.splice(v, 0, D),
          (r.value = _);
        const O = { startIndex: f, currentIndex: v };
        if (o === f) c.value = `${c.value.split("-")[0]}-${v}`;
        else if ((f > o && v <= o) || (f < o && v >= o)) {
          const J = f < o ? o - 1 : o + 1;
          c.value = `${c.value.split("-")[0]}-${J}`;
        }
        b.emit("handleDrop", O);
      }
      function ee(u) {
        u.preventDefault();
      }
      return (
        ue(() => {
          K();
        }),
        te(() => {
          b.off("addModule"),
            b.off("handleChangeItem"),
            b.off("changeChildForm"),
            b.off("handleChildSetProp");
        }),
        (u, a) => {
          const o = m("el-button"),
            f = m("el-popover"),
            v = m("el-input"),
            _ = m("el-date-picker"),
            D = m("el-radio"),
            N = m("el-radio-group"),
            O = m("el-checkbox"),
            J = m("el-checkbox-group"),
            k = m("el-option"),
            V = m("el-select");
          return (
            t(),
            d("div", ce, [
              (t(!0),
              d(
                i,
                null,
                h(
                  $(r),
                  (l, g) => (
                    t(),
                    d(
                      "div",
                      {
                        key: `${l.type}-${g}`,
                        class: S([
                          {
                            "active-item":
                              $(c) === `${l.type}-${g}` &&
                              I.formType === "create"
                          },
                          "form-item"
                        ]),
                        draggable: "true",
                        onClick: e => P(`${l.type}-${g}`),
                        onDragstart: e => X(e, g),
                        onDrop: e => Z(e, g),
                        onDragover: a[2] || (a[2] = e => ee(e))
                      },
                      [
                        $(c) === `${l.type}-${g}` && I.formType === "create"
                          ? (t(),
                            s(
                              f,
                              {
                                key: 0,
                                visible: $(M),
                                "onUpdate:visible":
                                  a[1] ||
                                  (a[1] = e => (re(M) ? (M.value = e) : null)),
                                placement: "top-end",
                                "popper-class": "del-popover",
                                trigger: "click",
                                width: "200"
                              },
                              {
                                reference: p(() => [
                                  y(
                                    o,
                                    { class: "del-btn", icon: $(ne) },
                                    null,
                                    8,
                                    ["icon"]
                                  )
                                ]),
                                default: p(() => [
                                  a[5] ||
                                    (a[5] = U(
                                      "span",
                                      { style: { "font-size": "1vw" } },
                                      "确定删除？",
                                      -1
                                    )),
                                  U("div", fe, [
                                    y(
                                      o,
                                      {
                                        link: "",
                                        size: "small",
                                        onClick:
                                          a[0] || (a[0] = e => (M.value = !1))
                                      },
                                      {
                                        default: p(
                                          () => a[3] || (a[3] = [x("取消")])
                                        ),
                                        _: 1
                                      }
                                    ),
                                    y(
                                      o,
                                      {
                                        link: "",
                                        size: "small",
                                        type: "primary",
                                        onClick: e => W(`${l.type}-${g}`)
                                      },
                                      {
                                        default: p(
                                          () => a[4] || (a[4] = [x("确定")])
                                        ),
                                        _: 2
                                      },
                                      1032,
                                      ["onClick"]
                                    )
                                  ])
                                ]),
                                _: 2
                              },
                              1032,
                              ["visible"]
                            ))
                          : B("", !0),
                        U(
                          "span",
                          {
                            class: S([
                              { "required-item": l.required },
                              "item-label"
                            ])
                          },
                          F(l.type === "line" ? l.label : l.label || l.text),
                          3
                        ),
                        ["text", "textArea", "number"].includes(l.type)
                          ? (t(),
                            s(
                              v,
                              w(
                                {
                                  key: 1,
                                  modelValue: l.value,
                                  "onUpdate:modelValue": e => (l.value = e),
                                  placeholder: l.placeholder,
                                  ref_for: !0
                                },
                                l.props
                              ),
                              null,
                              16,
                              [
                                "modelValue",
                                "onUpdate:modelValue",
                                "placeholder"
                              ]
                            ))
                          : l.type === "date"
                          ? (t(),
                            s(
                              _,
                              w(
                                {
                                  key: 2,
                                  modelValue: l.value,
                                  "onUpdate:modelValue": e => (l.value = e),
                                  placeholder: l.placeholder,
                                  type: l.props.type ? l.props.type : "date",
                                  ref_for: !0
                                },
                                l.props
                              ),
                              null,
                              16,
                              [
                                "modelValue",
                                "onUpdate:modelValue",
                                "placeholder",
                                "type"
                              ]
                            ))
                          : l.type === "radio"
                          ? (t(),
                            s(
                              N,
                              w(
                                {
                                  key: 3,
                                  modelValue: l.value,
                                  "onUpdate:modelValue": e => (l.value = e),
                                  ref_for: !0
                                },
                                l.props
                              ),
                              {
                                default: p(() => [
                                  (t(!0),
                                  d(
                                    i,
                                    null,
                                    h(
                                      l.options,
                                      (e, n) => (
                                        t(),
                                        s(
                                          D,
                                          {
                                            key: n,
                                            label: e.value,
                                            border: ""
                                          },
                                          {
                                            default: p(() => [
                                              x(F(e.label), 1)
                                            ]),
                                            _: 2
                                          },
                                          1032,
                                          ["label"]
                                        )
                                      )
                                    ),
                                    128
                                  ))
                                ]),
                                _: 2
                              },
                              1040,
                              ["modelValue", "onUpdate:modelValue"]
                            ))
                          : l.type === "checkbox"
                          ? (t(),
                            s(
                              J,
                              w(
                                {
                                  key: 4,
                                  modelValue: l.value,
                                  "onUpdate:modelValue": e => (l.value = e),
                                  ref_for: !0
                                },
                                l.props
                              ),
                              {
                                default: p(() => [
                                  (t(!0),
                                  d(
                                    i,
                                    null,
                                    h(
                                      l.options,
                                      (e, n) => (
                                        t(),
                                        s(
                                          O,
                                          {
                                            key: n,
                                            label: e.value,
                                            border: ""
                                          },
                                          {
                                            default: p(() => [
                                              x(F(e.label), 1)
                                            ]),
                                            _: 2
                                          },
                                          1032,
                                          ["label"]
                                        )
                                      )
                                    ),
                                    128
                                  ))
                                ]),
                                _: 2
                              },
                              1040,
                              ["modelValue", "onUpdate:modelValue"]
                            ))
                          : l.type === "select"
                          ? (t(),
                            s(
                              V,
                              w(
                                {
                                  key: 5,
                                  modelValue: l.value,
                                  "onUpdate:modelValue": e => (l.value = e),
                                  placeholder: l.placeholder || "请选择",
                                  ref_for: !0
                                },
                                l.props
                              ),
                              {
                                default: p(() => [
                                  (t(!0),
                                  d(
                                    i,
                                    null,
                                    h(
                                      l.options,
                                      (e, n) => (
                                        t(),
                                        s(
                                          k,
                                          {
                                            key: n,
                                            label: e.label,
                                            value: e.value
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
                                _: 2
                              },
                              1040,
                              [
                                "modelValue",
                                "onUpdate:modelValue",
                                "placeholder"
                              ]
                            ))
                          : l.type === "line"
                          ? (t(),
                            d(
                              "hr",
                              {
                                key: 6,
                                class: S(l.lineClass || "changeLineSolid")
                              },
                              null,
                              2
                            ))
                          : l.type === "image"
                          ? (t(),
                            d(
                              "div",
                              ye,
                              a[6] ||
                                (a[6] = [
                                  U("i", { class: "el-icon-plus" }, null, -1),
                                  U("span", null, "点击上传", -1)
                                ])
                            ))
                          : l.type === "file"
                          ? (t(),
                            s(
                              o,
                              {
                                key: 8,
                                style: {
                                  width: "100px",
                                  "pointer-events": "none"
                                },
                                type: "primary"
                              },
                              {
                                default: p(
                                  () => a[7] || (a[7] = [x(" 点击上传 ")])
                                ),
                                _: 1
                              }
                            ))
                          : l.type === "orgUnit"
                          ? (t(),
                            s(
                              V,
                              {
                                key: 9,
                                modelValue: l.value,
                                "onUpdate:modelValue": e => (l.value = e),
                                placeholder: l.placeholder || "部门"
                              },
                              {
                                default: p(() => [
                                  (t(),
                                  d(
                                    i,
                                    null,
                                    h([], (e, n) =>
                                      y(
                                        k,
                                        {
                                          key: n,
                                          label: e.label,
                                          value: e.value
                                        },
                                        null,
                                        8,
                                        ["label", "value"]
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 2
                              },
                              1032,
                              [
                                "modelValue",
                                "onUpdate:modelValue",
                                "placeholder"
                              ]
                            ))
                          : l.type === "user"
                          ? (t(),
                            s(
                              V,
                              {
                                key: 10,
                                modelValue: l.value,
                                "onUpdate:modelValue": e => (l.value = e),
                                placeholder: l.placeholder || "用户"
                              },
                              {
                                default: p(() => [
                                  (t(),
                                  d(
                                    i,
                                    null,
                                    h([], (e, n) =>
                                      y(
                                        k,
                                        {
                                          key: n,
                                          label: e.label,
                                          value: e.value
                                        },
                                        null,
                                        8,
                                        ["label", "value"]
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 2
                              },
                              1032,
                              [
                                "modelValue",
                                "onUpdate:modelValue",
                                "placeholder"
                              ]
                            ))
                          : l.type === "associatedData"
                          ? (t(),
                            d("div", ie, [
                              y(
                                v,
                                {
                                  modelValue: l.value,
                                  "onUpdate:modelValue": e => (l.value = e),
                                  placeholder: "选择数据"
                                },
                                null,
                                8,
                                ["modelValue", "onUpdate:modelValue"]
                              ),
                              y(
                                o,
                                { size: "small" },
                                {
                                  default: p(
                                    () => a[8] || (a[8] = [x("查看")])
                                  ),
                                  _: 1
                                }
                              )
                            ]))
                          : l.type === "childForm"
                          ? (t(),
                            d(
                              "div",
                              {
                                key: 12,
                                "tar-key": `${l.type}-${g}`,
                                class: "child-form-container"
                              },
                              [
                                l.value[0]
                                  ? (t(),
                                    d(
                                      "div",
                                      {
                                        key: 0,
                                        class: "table",
                                        onClick: de(e => Q(e, l, g), ["stop"])
                                      },
                                      [
                                        (t(!0),
                                        d(
                                          i,
                                          null,
                                          h(
                                            l.value,
                                            (e, n) => (
                                              t(),
                                              d(
                                                "div",
                                                {
                                                  id: `${e.type}-${n}`,
                                                  key: `${e.type}-${n}`,
                                                  class: S([
                                                    "child-item",
                                                    {
                                                      "active-child-item":
                                                        `${l.type}-${g}` ===
                                                          $(c) &&
                                                        $(C) ===
                                                          `${e.type}-${n}`
                                                    }
                                                  ])
                                                },
                                                [
                                                  U("div", ke, [
                                                    U(
                                                      "div",
                                                      {
                                                        class: S([
                                                          "th",
                                                          {
                                                            "required-th":
                                                              $(q)(e)
                                                          }
                                                        ])
                                                      },
                                                      F(
                                                        e.attribute[0].value ||
                                                          e.attribute[0]
                                                            .label ||
                                                          e.text
                                                      ),
                                                      3
                                                    )
                                                  ]),
                                                  U("div", Ve, [
                                                    U("div", ge, [
                                                      y(
                                                        v,
                                                        {
                                                          modelValue: e.value,
                                                          "onUpdate:modelValue":
                                                            le =>
                                                              (e.value = le),
                                                          placeholder: $(A)(e)
                                                        },
                                                        null,
                                                        8,
                                                        [
                                                          "modelValue",
                                                          "onUpdate:modelValue",
                                                          "placeholder"
                                                        ]
                                                      )
                                                    ])
                                                  ])
                                                ],
                                                10,
                                                _e
                                              )
                                            )
                                          ),
                                          128
                                        ))
                                      ],
                                      8,
                                      be
                                    ))
                                  : B("", !0)
                              ],
                              8,
                              he
                            ))
                          : l.type === "subject"
                          ? (t(),
                            s(
                              V,
                              {
                                key: 13,
                                modelValue: l.value,
                                "onUpdate:modelValue": e => (l.value = e),
                                placeholder: l.placeholder || "科目"
                              },
                              {
                                default: p(() => [
                                  (t(),
                                  d(
                                    i,
                                    null,
                                    h([], (e, n) =>
                                      y(
                                        k,
                                        {
                                          key: n,
                                          label: e.label,
                                          value: e.value
                                        },
                                        null,
                                        8,
                                        ["label", "value"]
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 2
                              },
                              1032,
                              [
                                "modelValue",
                                "onUpdate:modelValue",
                                "placeholder"
                              ]
                            ))
                          : l.type === "customer"
                          ? (t(),
                            s(
                              V,
                              {
                                key: 14,
                                modelValue: l.value,
                                "onUpdate:modelValue": e => (l.value = e),
                                placeholder: l.placeholder || "客户"
                              },
                              {
                                default: p(() => [
                                  (t(),
                                  d(
                                    i,
                                    null,
                                    h([], (e, n) =>
                                      y(
                                        k,
                                        {
                                          key: n,
                                          label: e.label,
                                          value: e.value
                                        },
                                        null,
                                        8,
                                        ["label", "value"]
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 2
                              },
                              1032,
                              [
                                "modelValue",
                                "onUpdate:modelValue",
                                "placeholder"
                              ]
                            ))
                          : l.type === "goods"
                          ? (t(),
                            s(
                              V,
                              {
                                key: 15,
                                modelValue: l.value,
                                "onUpdate:modelValue": e => (l.value = e),
                                placeholder: l.placeholder || "商品"
                              },
                              {
                                default: p(() => [
                                  (t(),
                                  d(
                                    i,
                                    null,
                                    h([], (e, n) =>
                                      y(
                                        k,
                                        {
                                          key: n,
                                          label: e.label,
                                          value: e.value
                                        },
                                        null,
                                        8,
                                        ["label", "value"]
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 2
                              },
                              1032,
                              [
                                "modelValue",
                                "onUpdate:modelValue",
                                "placeholder"
                              ]
                            ))
                          : l.type === "supplier"
                          ? (t(),
                            s(
                              V,
                              {
                                key: 16,
                                modelValue: l.value,
                                "onUpdate:modelValue": e => (l.value = e),
                                placeholder: l.placeholder || "供应商"
                              },
                              {
                                default: p(() => [
                                  (t(),
                                  d(
                                    i,
                                    null,
                                    h([], (e, n) =>
                                      y(
                                        k,
                                        {
                                          key: n,
                                          label: e.label,
                                          value: e.value
                                        },
                                        null,
                                        8,
                                        ["label", "value"]
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 2
                              },
                              1032,
                              [
                                "modelValue",
                                "onUpdate:modelValue",
                                "placeholder"
                              ]
                            ))
                          : l.type === "bankInfo"
                          ? (t(),
                            s(
                              V,
                              {
                                key: 17,
                                modelValue: l.value,
                                "onUpdate:modelValue": e => (l.value = e),
                                placeholder: l.placeholder || "银行信息"
                              },
                              {
                                default: p(() => [
                                  (t(),
                                  d(
                                    i,
                                    null,
                                    h([], (e, n) =>
                                      y(
                                        k,
                                        {
                                          key: n,
                                          label: e.label,
                                          value: e.value
                                        },
                                        null,
                                        8,
                                        ["label", "value"]
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 2
                              },
                              1032,
                              [
                                "modelValue",
                                "onUpdate:modelValue",
                                "placeholder"
                              ]
                            ))
                          : l.type === "period"
                          ? (t(),
                            s(
                              V,
                              {
                                key: 18,
                                modelValue: l.value,
                                "onUpdate:modelValue": e => (l.value = e),
                                placeholder: l.placeholder || "期间选择"
                              },
                              {
                                default: p(() => [
                                  (t(),
                                  d(
                                    i,
                                    null,
                                    h([], (e, n) =>
                                      y(
                                        k,
                                        {
                                          key: n,
                                          label: e.label,
                                          value: e.value
                                        },
                                        null,
                                        8,
                                        ["label", "value"]
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 2
                              },
                              1032,
                              [
                                "modelValue",
                                "onUpdate:modelValue",
                                "placeholder"
                              ]
                            ))
                          : l.type === "belongProject"
                          ? (t(),
                            s(
                              V,
                              {
                                key: 19,
                                modelValue: l.value,
                                "onUpdate:modelValue": e => (l.value = e),
                                placeholder: l.placeholder || "所属项目"
                              },
                              {
                                default: p(() => [
                                  (t(),
                                  d(
                                    i,
                                    null,
                                    h([], (e, n) =>
                                      y(
                                        k,
                                        {
                                          key: n,
                                          label: e.label,
                                          value: e.value
                                        },
                                        null,
                                        8,
                                        ["label", "value"]
                                      )
                                    ),
                                    64
                                  ))
                                ]),
                                _: 2
                              },
                              1032,
                              [
                                "modelValue",
                                "onUpdate:modelValue",
                                "placeholder"
                              ]
                            ))
                          : B("", !0)
                      ],
                      42,
                      ve
                    )
                  )
                ),
                128
              ))
            ])
          );
        }
      );
    }
  },
  De = ae(me, [["__scopeId", "data-v-6f674ee7"]]);
export { De as default };
