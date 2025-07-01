import {
  d as v,
  c as i,
  F as h,
  k as m,
  o as a,
  ab as f,
  a as n,
  v as p,
  y as c,
  t as o,
  G as y,
  _ as C
} from "./index-DuV_pBtV.js";
const b = { class: "ranking-container" },
  B = ["title", "onClick"],
  F = { class: "rank-info" },
  S = ["title"],
  w = { class: "value-bg" },
  I = { class: "animation-content" },
  N = { key: 1, class: "num" },
  $ = { key: 2, class: "ranking" },
  L = ["src"],
  R = v({
    __name: "rankingList",
    props: {
      list: {},
      noBg: { type: Boolean },
      itemRoute: { type: Boolean },
      clickFun: { type: Function }
    },
    emits: ["handleClickItem"],
    setup(d, { emit: u }) {
      const r = d,
        g = u;
      function _(e) {
        g("handleClickItem", e), r.clickFun && r.clickFun();
      }
      const k = e => {
        const t = Number(e);
        return t < 1 && t > 0 ? 1 : t > 100 ? 100 : t;
      };
      return (e, t) => (
        a(),
        i("div", b, [
          (a(!0),
          i(
            h,
            null,
            m(
              e.list,
              (s, l) => (
                a(),
                i(
                  "div",
                  {
                    key: l,
                    title: e.itemRoute ? "跳转至相关数据明细" : "",
                    class: "item",
                    onClick: f(z => _(s), ["stop"])
                  },
                  [
                    n("div", F, [
                      n(
                        "div",
                        { class: c(["no-title", [l < 3 ? `no-${l}` : ""]]) },
                        " No." + o(l + 1),
                        3
                      ),
                      n(
                        "div",
                        { class: "name", title: s.name },
                        o(s.name),
                        9,
                        S
                      ),
                      n("div", w, [
                        n(
                          "div",
                          {
                            style: y({ width: `${k(s.scale)}%` }),
                            class: "value-bar"
                          },
                          null,
                          4
                        ),
                        t[0] ||
                          (t[0] = n("img", { src: "", alt: "" }, null, -1))
                      ]),
                      s.unit
                        ? (a(),
                          i(
                            "div",
                            {
                              key: 0,
                              class: c([
                                "num unit animation-font",
                                { "no-bg": e.noBg }
                              ])
                            },
                            [n("div", I, o(s.unit), 1)],
                            2
                          ))
                        : (a(), i("div", N, o(s.scale) + "%", 1)),
                      s.rising || s.rising === 0
                        ? (a(),
                          i("div", $, [
                            n(
                              "div",
                              { class: c({ "red-down": s.rising < 0 }) },
                              o(s.rising >= 0 ? `+${s.rising || 0}` : s.rising),
                              3
                            ),
                            n(
                              "img",
                              {
                                src:
                                  s.rising >= 0
                                    ? "src/assets/fullScreen/hngsChargeScreen/fullscreen.svg"
                                    : "src/assets/fullScreen/hngsChargeScreen/ranking-down.svg",
                                class: "ranking-icon"
                              },
                              null,
                              8,
                              L
                            )
                          ]))
                        : p("", !0)
                    ])
                  ],
                  8,
                  B
                )
              )
            ),
            128
          ))
        ])
      );
    }
  }),
  D = C(R, [["__scopeId", "data-v-990fa296"]]);
export { D as default };
