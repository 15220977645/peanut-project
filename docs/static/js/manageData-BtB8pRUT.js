import { h as _ } from "./commonFun-DCImwsLl.js";
import p from "./title-NWaZqRRA.js";
import { r as f } from "./requireImg-CLyBMj04.js";
import {
  d as u,
  L as h,
  c as s,
  b as g,
  a as e,
  F as v,
  k,
  bv as C,
  o,
  y,
  u as B,
  t as n,
  _ as D
} from "./index-DuV_pBtV.js";
const F = { class: "manage-data-container module" },
  L = { class: "content" },
  P = ["title", "onClick"],
  S = ["src"],
  T = { class: "info" },
  $ = { class: "name" },
  b = { class: "num animation-font" },
  x = { class: "animation-content" },
  I = u({
    __name: "manageData",
    props: { list: {} },
    setup(l) {
      const i = C("openPlatform"),
        m = l;
      function d(t) {
        i && t.platformUrl && i(!0, t.platformUrl);
      }
      return (
        h(
          m.list,
          t => {
            t && _();
          },
          { immediate: !0, deep: !0 }
        ),
        (t, N) => (
          o(),
          s("div", F, [
            g(p, { title: "今日核心经营数据" }),
            e("div", L, [
              (o(!0),
              s(
                v,
                null,
                k(t.list, (a, r) => {
                  var c;
                  return (
                    o(),
                    s(
                      "div",
                      {
                        key: r,
                        class: y(["item content-bg", `item-${r}`]),
                        title: `跳转至${a.platformTitle}`,
                        onClick: U => d(a)
                      },
                      [
                        e(
                          "img",
                          { src: B(f)(a.img), class: "img" },
                          null,
                          8,
                          S
                        ),
                        e("div", T, [
                          e("div", $, n(a.name) + "（" + n(a.unit) + "）", 1),
                          e("div", b, [
                            e(
                              "div",
                              x,
                              n(
                                (c = a.num) == null
                                  ? void 0
                                  : c.toLocaleString()
                              ),
                              1
                            )
                          ])
                        ])
                      ],
                      10,
                      P
                    )
                  );
                }),
                128
              ))
            ])
          ])
        )
      );
    }
  }),
  E = D(I, [["__scopeId", "data-v-7aa96802"]]);
export { E as default };
