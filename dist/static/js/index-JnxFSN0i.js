import {
  _ as $,
  r as u,
  h as _,
  c as y,
  o as C,
  b as i,
  a as p,
  w as f,
  a4 as v,
  u as c,
  i as V,
  t as E,
  aW as R
} from "./index-D6DS3gmo.js";
const T = { class: "container" },
  k = { class: "edit" },
  M = { class: "btn" },
  F = { class: "tip" },
  O = { class: "edit-block" },
  B = ["innerHTML"],
  D = {
    __name: "index",
    setup(S) {
      const s = u(""),
        n = u("data"),
        g = u(""),
        m = u([
          "data中不能有注释, 不可以有简写方式",
          "methods内部的每个方法前都要有块注释(/**/)，且每个方法内部不能用该注释方式，若需要注释请改用行注释(//)"
        ]);
      function b() {
        (s.value = ""), (g.value = "");
      }
      function h(a) {
        let e = a;
        e = e.replace(/(\w*):/gs, '"$1":').replace(/'/gs, '"');
        const l = JSON.parse(e),
          r = Object.keys(l);
        let o = "";
        return (
          r.forEach(t => {
            o += `const ${t} = ref(${JSON.stringify(l[t])})
`;
          }),
          o
        );
      }
      function w(a) {
        let e = "";
        (e = a.replace(/\n/gs, "")),
          (e = e.replace(/const\s*that\s*=\s*this/gs, "")),
          (e = e.replace(/await th[ia][st]\./gs, "await ")),
          (e = e.replace(
            /},\s*\/\*/gs,
            `
}
/*`
          ));
        const l = new RegExp("\\*/\\s*async", "gs");
        e = e.replace(
          l,
          `*/
async function`
        );
        const r = new RegExp("\\*/\\s*\\w*\\(", "gs"),
          o = e.match(r);
        if (o)
          return (
            o.forEach(t => {
              (t = t
                .replace("*/", "")
                .replace(
                  `
`,
                  ""
                )
                .replace("(", "")),
                (e = e.replace(`th[ia][st].${t}()`, `${t}()`));
              const d = new RegExp(`\\*/\\s*${t}\\(`, "gs");
              e = e.replace(
                d,
                `*/
function ${t}(`
              );
            }),
            (e = e.replaceAll(
              /async\s*function\s*(\w+)\((.{0,}?)\)\s*\{/gs,
              `const $1 = async ($2) => {
`
            )),
            (e = e.replaceAll(
              /function\s*(\w+)\((.{0,}?)\)\s*\{/gs,
              `const $1 = ($2) => {
`
            )),
            (e = e.replace(/this\.\$message\./gs, "ElMessage.")),
            (e = e.replace(/th[ia][st]\.(\w*)/gs, "$1.value")),
            (e = e.replace("{", "").slice(0, -1)),
            (e = e.replace(
              /;/gs,
              `;
`
            )),
            e
          );
      }
      function x() {
        if (!s.value) return R.warning("请输入需要转换的数据");
        let a = "";
        n.value === "data"
          ? (a = h(s.value))
          : n.value === "method"
          ? (a = w(s.value))
          : n.value === "file" && (a = h(s.value)),
          (g.value = a.replace(/\n/gs, "<br>"));
      }
      return (a, e) => {
        const l = _("el-tab-pane"),
          r = _("el-tabs"),
          o = _("el-button"),
          t = _("el-input");
        return (
          C(),
          y("div", T, [
            i(
              r,
              {
                modelValue: c(n),
                "onUpdate:modelValue":
                  e[0] || (e[0] = d => (v(n) ? (n.value = d) : null)),
                type: "border-card",
                onTabChange: b
              },
              {
                default: f(() => [
                  i(l, { name: "data", label: "重构data" }),
                  i(l, { name: "method", label: "重构method" })
                ]),
                _: 1
              },
              8,
              ["modelValue"]
            ),
            p("div", k, [
              p("div", M, [
                i(
                  o,
                  { type: "primary", onClick: x },
                  { default: f(() => e[2] || (e[2] = [V("转换")])), _: 1 }
                ),
                p(
                  "span",
                  F,
                  "注意：" + E(c(n) === "data" ? c(m)[0] : c(m)[1]),
                  1
                )
              ]),
              p("div", O, [
                i(
                  t,
                  {
                    type: "textarea",
                    modelValue: c(s),
                    "onUpdate:modelValue":
                      e[1] || (e[1] = d => (v(s) ? (s.value = d) : null)),
                    placeholder:
                      c(n) === "data"
                        ? "请输入data输出的数据对象"
                        : "请输入method对象",
                    autosize: ""
                  },
                  null,
                  8,
                  ["modelValue", "placeholder"]
                ),
                p("div", { class: "date-result", innerHTML: c(g) }, null, 8, B)
              ])
            ])
          ])
        );
      };
    }
  },
  j = $(D, [["__scopeId", "data-v-2feedab7"]]);
export { j as default };
