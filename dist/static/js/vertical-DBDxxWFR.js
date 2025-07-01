import { s as v, a as h } from "./vue-virtual-scroller.esm-zX8fE_lA.js";
import {
  d as x,
  r,
  z as w,
  c as g,
  a as o,
  b as i,
  i as I,
  h as d,
  u as m,
  w as p,
  t as V,
  o as b,
  _ as y
} from "./index-CnxsT9tm.js";
const C = { class: "dynamic-scroller-demo" },
  z = { class: "flex-ac mb-4 shadow-2xl" },
  k = { class: "flex items-center" },
  B = x({
    __name: "vertical",
    setup(N) {
      const l = r([]),
        a = r("");
      for (let e = 0; e < 800; e++) l.value.push({ id: e });
      const u = w(() => {
        if (!a.value) return l.value;
        const e = a.value;
        return l.value.filter(s => s.id == e);
      });
      return (e, s) => {
        const _ = d("el-input"),
          f = d("IconifyIconOnline");
        return (
          b(),
          g("div", C, [
            o("div", z, [
              s[1] || (s[1] = I(" 垂直模式 vertical ")),
              i(
                _,
                {
                  class: "!w-[350px]",
                  clearable: "",
                  modelValue: a.value,
                  "onUpdate:modelValue": s[0] || (s[0] = t => (a.value = t)),
                  placeholder: "Filter..."
                },
                null,
                8,
                ["modelValue"]
              )
            ]),
            i(
              m(v),
              { items: u.value, "min-item-size": 54, class: "scroller" },
              {
                default: p(({ item: t, index: n, active: c }) => [
                  i(
                    m(h),
                    {
                      item: t,
                      active: c,
                      "size-dependencies": [t.id],
                      "data-index": n,
                      "data-active": c,
                      title: `Click to change message ${n}`,
                      class: "message"
                    },
                    {
                      default: p(() => [
                        o("div", k, [
                          i(f, {
                            icon: "openmoji:beaming-face-with-smiling-eyes",
                            width: "40"
                          }),
                          o("span", null, V(t.id), 1)
                        ])
                      ]),
                      _: 2
                    },
                    1032,
                    [
                      "item",
                      "active",
                      "size-dependencies",
                      "data-index",
                      "data-active",
                      "title"
                    ]
                  )
                ]),
                _: 1
              },
              8,
              ["items"]
            )
          ])
        );
      };
    }
  }),
  $ = y(B, [["__scopeId", "data-v-7ac1fb94"]]);
export { $ as default };
