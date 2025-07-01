import { B as S } from "./bus-DYLGvREQ.js";
import {
  _ as A,
  r as h,
  h as u,
  c as m,
  o as y,
  b as a,
  w as d,
  a as s,
  t as p,
  u as f,
  F,
  k as N,
  y as g
} from "./index-CnxsT9tm.js";
const R = { class: "select-year-range" },
  L = { class: "select-content-box" },
  $ = { class: "content-area" },
  I = { class: "year-block" },
  M = { class: "year-list" },
  V = ["onClick"],
  z = { class: "year-input" },
  E = {
    __name: "yearDate",
    props: {
      busName: { type: String, default: "" },
      choiceType: { type: String, default: "single" },
      showType: { type: String, default: "*年*月至" }
    },
    setup(w) {
      const c = w,
        n = h([]),
        _ = h(""),
        o = h([]);
      function Y() {
        const e = new Date().getFullYear();
        o.value[0] = e - (e % 10);
        let t = 1;
        for (; t <= 9; ) o.value.push(o.value[0] + t), t++;
        (n.value = [e]), (_.value = `${e}年`);
      }
      function v(e, t) {
        const i = new Date().getFullYear();
        if (e > i) return "no-active_item";
        if (!n.value[0]) return;
        let l = "";
        if (c.choiceType !== "yearRange")
          t === 1 &&
            n.value.includes(e) &&
            (l = "item-start item-content item-end"),
            t === 2 && n.value.includes(e) && (l = "item-active");
        else {
          if (n.value.length === 1 && n.value.includes(e))
            return (
              t === 1 &&
                n.value.includes(e) &&
                (l = "item-start item-content item-end"),
              t === 2 && n.value.includes(e) && (l = "item-active"),
              l
            );
          n.value[1];
        }
        return l;
      }
      function C() {
        for (const e in o.value) o.value[e] = o.value[e] - 10;
        v();
      }
      function T() {
        for (const e in o.value) o.value[e] = o.value[e] + 10;
        v();
      }
      function b() {
        c.choiceType === "single" && (_.value = `${n.value[0]}年`),
          S.emit(c.busName, { choseYear: n.value });
      }
      function k(e) {
        if (
          (c.choiceType === "single" && (n.value = [e]),
          c.choiceType === "multiple")
        ) {
          const t = t.value;
          t.includes(e)
            ? t.value.splice(
                t.findIndex(i => i === e),
                1
              )
            : t.value.push(e);
        }
        if (c.choiceType === "yearRange") {
          let t = t.value;
          t.length > 1 && (t = []), t.push(e), (t.value = t);
        }
      }
      return (
        Y(),
        (e, t) => {
          const i = u("DArrowLeft"),
            l = u("el-icon"),
            B = u("DArrowRight"),
            D = u("CaretBottom"),
            x = u("el-popover");
          return (
            y(),
            m("div", R, [
              a(
                x,
                {
                  ref: "dateBidScreen",
                  teleported: !1,
                  placement: "bottom",
                  "popper-class": "year-popover",
                  trigger: "click",
                  onHide: b
                },
                {
                  reference: d(() => [
                    s("div", z, [
                      s("div", null, p(f(_)), 1),
                      a(l, null, { default: d(() => [a(D)]), _: 1 })
                    ])
                  ]),
                  default: d(() => [
                    t[0] ||
                      (t[0] = s("div", { class: "triangle-icon" }, null, -1)),
                    s("div", L, [
                      s("div", $, [
                        s("div", I, [
                          s("div", { class: "cursor", onClick: C }, [
                            a(l, null, {
                              default: d(() => [a(i, { color: "#fff" })]),
                              _: 1
                            })
                          ]),
                          s(
                            "div",
                            null,
                            p(f(o)[0]) +
                              "年 - " +
                              p(f(o)[f(o).length - 1]) +
                              "年",
                            1
                          ),
                          s("div", { class: "cursor t-r", onClick: T }, [
                            a(l, null, {
                              default: d(() => [a(B, { color: "#fff" })]),
                              _: 1
                            })
                          ])
                        ]),
                        s("div", M, [
                          (y(!0),
                          m(
                            F,
                            null,
                            N(
                              f(o),
                              r => (
                                y(),
                                m("div", { key: r, class: "year-item" }, [
                                  s(
                                    "div",
                                    { class: g(v(r, 1)), onClick: H => k(r) },
                                    [
                                      s(
                                        "div",
                                        { class: g([v(r, 2), "item-block"]) },
                                        p(r) + "年 ",
                                        3
                                      )
                                    ],
                                    10,
                                    V
                                  )
                                ])
                              )
                            ),
                            128
                          ))
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                },
                512
              )
            ])
          );
        }
      );
    }
  },
  G = A(E, [["__scopeId", "data-v-ff3fb036"]]);
export { G as default };
