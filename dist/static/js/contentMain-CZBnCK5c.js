import B from "./mainComponents-Sx-J6KMm.js";
import { p as k } from "./formContent-CYamVFhG.js";
import { r as F } from "./requireImg-CLyBMj04.js";
import { B as m } from "./bus-BzRs4HHa.js";
import {
  _ as I,
  r as d,
  e as S,
  f as V,
  h as v,
  c as x,
  o as N,
  a as r,
  b as s,
  w as a,
  i as u,
  u as i,
  a4 as D,
  aW as p
} from "./index-DuV_pBtV.js";
import "./formConfig-jyKkspzO.js";
import "./handleForm-CWr9CBwp.js";
import "./childFormTable-DT1geaZR.js";
const E = { class: "content-main-container" },
  M = { class: "content-main-header" },
  A = ["src"],
  $ = { class: "content-main-body formEditor bg" },
  J = { class: "drawer-footer" },
  O = {
    __name: "contentMain",
    setup(T) {
      const l = d({ name: "", formAttributes: [] }),
        n = d(!1),
        c = d([]);
      let w = null;
      function _() {
        C();
      }
      function g() {
        m.emit("getFormData", "preview");
      }
      function C() {
        m.on("sendFormData", t => {
          if (t.useType === "preview")
            (l.value = { name: t.name, formAttributes: t.fields }),
              (n.value = !0);
          else {
            if (!b(t)) return;
            const o = JSON.parse(JSON.stringify(t));
            o.id = w;
          }
        });
      }
      function b(t) {
        let e = !0;
        for (const o of t.fields)
          if (o.key === 12 && !o.associatedId)
            return (e = !1), p.warning("请选择关联表"), e;
        return t.name
          ? ([null, "", void 0].includes(t.formClassId) &&
              (p.warning("请选择表单分类"), (e = !1)),
            e)
          : (p.warning("请输入表单名称"), (e = !1), e);
      }
      return (
        S(() => {
          _();
        }),
        V(() => {
          m.off("sendFormData");
        }),
        (t, e) => {
          const o = v("el-button"),
            y = v("el-drawer");
          return (
            N(),
            x("div", E, [
              r("div", M, [
                s(
                  o,
                  { class: "preview-btn", onClick: g },
                  {
                    default: a(() => [
                      r(
                        "img",
                        { src: i(F)("svg/preview.svg"), alt: "" },
                        null,
                        8,
                        A
                      ),
                      e[3] || (e[3] = u()),
                      e[4] || (e[4] = r("span", null, "预览", -1))
                    ]),
                    _: 1
                  }
                )
              ]),
              e[7] ||
                (e[7] = r("div", { class: "formEditor-ruler-top" }, null, -1)),
              r("div", $, [
                s(B, { "form-data": i(c) }, null, 8, ["form-data"])
              ]),
              s(
                y,
                {
                  modelValue: i(n),
                  "onUpdate:modelValue":
                    e[2] || (e[2] = f => (D(n) ? (n.value = f) : null)),
                  title: `表名：${i(l).name || ""}`,
                  class: "preview-drawer"
                },
                {
                  footer: a(() => [
                    r("div", J, [
                      s(
                        o,
                        {
                          type: "primary",
                          onClick: e[0] || (e[0] = f => (n.value = !1))
                        },
                        {
                          default: a(() => e[5] || (e[5] = [u("确 定")])),
                          _: 1
                        }
                      ),
                      s(
                        o,
                        {
                          plain: "",
                          onClick: e[1] || (e[1] = f => (n.value = !1))
                        },
                        {
                          default: a(() => e[6] || (e[6] = [u("取 消")])),
                          _: 1
                        }
                      )
                    ])
                  ]),
                  default: a(() => [
                    s(
                      k,
                      {
                        "form-type": "preview",
                        "form-config-data": i(l).formAttributes,
                        "form-prop-data": {}
                      },
                      null,
                      8,
                      ["form-config-data"]
                    )
                  ]),
                  _: 1
                },
                8,
                ["modelValue", "title"]
              )
            ])
          );
        }
      );
    }
  },
  K = I(O, [["__scopeId", "data-v-9f70433b"]]);
export { K as default };
