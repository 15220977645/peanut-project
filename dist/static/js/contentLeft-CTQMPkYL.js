import { B as p } from "./bus-BgM-Qrhp.js";
import { r as d } from "./requireImg-CLyBMj04.js";
import { f as o } from "./formConfig-jyKkspzO.js";
import {
  _ as k,
  c as a,
  o as i,
  a as s,
  F as f,
  k as u,
  i as _,
  u as r,
  t as m
} from "./index-CnxsT9tm.js";
const g = { class: "left-container" },
  y = ["id"],
  v = ["src"],
  L = ["id"],
  x = ["src"],
  B = {
    __name: "contentLeft",
    setup(D) {
      function l(n) {
        if (!n.target.id) return;
        const e = Number(n.target.id),
          t = [...o.basicLiData, ...o.enhanceLiData];
        for (const c of t)
          if (c.key === e) {
            p.emit("addModule", c);
            break;
          }
      }
      return (n, e) => (
        i(),
        a("div", g, [
          e[0] || (e[0] = s("div", { class: "field-title" }, "基础字段", -1)),
          s("ul", { class: "field-list", onClick: l }, [
            (i(!0),
            a(
              f,
              null,
              u(
                r(o).basicLiData,
                t => (
                  i(),
                  a(
                    "li",
                    { id: t.key, key: t.key },
                    [
                      s(
                        "img",
                        { src: r(d)(`svg/f-${t.iconType}.svg`), alt: "" },
                        null,
                        8,
                        v
                      ),
                      _(" " + m(t.text), 1)
                    ],
                    8,
                    y
                  )
                )
              ),
              128
            ))
          ]),
          e[1] || (e[1] = s("div", { class: "field-title" }, "增强字段", -1)),
          s("ul", { class: "field-list", onClick: l }, [
            (i(!0),
            a(
              f,
              null,
              u(
                r(o).enhanceLiData,
                t => (
                  i(),
                  a(
                    "li",
                    { id: t.key, key: t.key },
                    [
                      s(
                        "img",
                        { src: r(d)("svg/f-text.svg"), alt: "" },
                        null,
                        8,
                        x
                      ),
                      _(" " + m(t.text), 1)
                    ],
                    8,
                    L
                  )
                )
              ),
              128
            ))
          ])
        ])
      );
    }
  },
  F = k(B, [["__scopeId", "data-v-caa2e401"]]);
export { F as default };
