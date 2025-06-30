import { s as v, a as x } from "./vue-virtual-scroller.esm-BYVDyQ0C.js";
import {
  d as w,
  r as d,
  z as y,
  c as z,
  a as i,
  b as o,
  i as g,
  h as m,
  u as p,
  w as u,
  G as I,
  t as V,
  o as C,
  _ as b
} from "./index-D6DS3gmo.js";
const k = { class: "dynamic-scroller-demo" },
  B = { class: "flex-ac mb-4 shadow-2xl" },
  N = { class: "text-center" },
  S = w({
    __name: "horizontal",
    setup($) {
      const l = d([]),
        s = d("");
      for (let e = 0; e < 800; e++) l.value.push({ id: e });
      const _ = y(() => {
        if (!s.value) return l.value;
        const e = s.value;
        return l.value.filter(t => t.id == e);
      });
      return (e, t) => {
        const f = m("el-input"),
          h = m("IconifyIconOnline");
        return (
          C(),
          z("div", k, [
            i("div", B, [
              t[1] || (t[1] = g(" 水平模式 horizontal ")),
              o(
                f,
                {
                  class: "mr-2 !w-[1/1.5]",
                  clearable: "",
                  modelValue: s.value,
                  "onUpdate:modelValue": t[0] || (t[0] = a => (s.value = a)),
                  placeholder: "Filter...",
                  style: { width: "300px" }
                },
                null,
                8,
                ["modelValue"]
              )
            ]),
            o(
              p(v),
              {
                items: _.value,
                "min-item-size": 54,
                direction: "horizontal",
                class: "scroller"
              },
              {
                default: u(({ item: a, index: n, active: c }) => {
                  var r;
                  return [
                    o(
                      p(x),
                      {
                        item: a,
                        active: c,
                        "size-dependencies": [a.id],
                        "data-index": n,
                        "data-active": c,
                        title: `Click to change message ${n}`,
                        style: I({
                          width: `${Math.max(
                            130,
                            Math.round(
                              (((r = a.id) == null ? void 0 : r.length) / 20) *
                                20
                            )
                          )}px`
                        }),
                        class: "message"
                      },
                      {
                        default: u(() => [
                          i("div", null, [
                            o(h, {
                              icon: "openmoji:beaming-face-with-smiling-eyes",
                              width: "40"
                            }),
                            i("p", N, V(a.id), 1)
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
                        "title",
                        "style"
                      ]
                    )
                  ];
                }),
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
  j = b(S, [["__scopeId", "data-v-a8fd622a"]]);
export { j as default };
