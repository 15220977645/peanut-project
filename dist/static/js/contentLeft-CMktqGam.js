import { B as p } from "./bus-Cmz_HPxy.js";
import { r as d } from "./requireImg-CLyBMj04.js";
import { f as a } from "./formConfig-jyKkspzO.js";
import {
  _ as k,
  c as i,
  o,
  a as s,
  F as f,
  k as u,
  i as _,
  u as r,
  t as m
} from "./index-D6DS3gmo.js";
const g = { class: "left-container" },
  y = ["id"],
  v = ["src"],
  L = ["id"],
  x = ["src"],
  b = {
    __name: "contentLeft",
    setup(B) {
      function l(n) {
        if (!n.target.id) return;
        const e = Number(n.target.id),
          t = [...a.basicLiData, ...a.enhanceLiData];
        for (const c of t)
          if (c.key === e) {
            p.emit("addModule", c);
            break;
          }
      }
      return (n, e) => (
        o(),
        i("div", g, [
          e[0] || (e[0] = s("div", { class: "field-title" }, "基础字段", -1)),
          s("ul", { class: "field-list", onClick: l }, [
            (o(!0),
            i(
              f,
              null,
              u(
                r(a).basicLiData,
                t => (
                  o(),
                  i(
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
            (o(!0),
            i(
              f,
              null,
              u(
                r(a).enhanceLiData,
                t => (
                  o(),
                  i(
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
  F = k(b, [["__scopeId", "data-v-b8910903"]]);
export { F as default };
