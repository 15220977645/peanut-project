import E from "./title-Bnfd_5PO.js";
import L from "./emptyData-BpGdiuJn.js";
import {
  _ as T,
  r as a,
  e as w,
  f as M,
  c as n,
  o as l,
  b as g,
  u as d,
  a as r,
  F as p,
  k as _,
  v as I,
  n as $
} from "./index-D6DS3gmo.js";
import "./requireImg-CLyBMj04.js";
const A = { class: "box news-box" },
  F = { class: "scroll-notice" },
  S = { class: "scroll0" },
  V = { key: 0, class: "notice-info" },
  P = { class: "info-content" },
  U = { class: "imgs" },
  j = ["src"],
  q = ["innerHTML"],
  z = { key: 1, class: "empty-box" },
  G = {
    __name: "noticeDisplay",
    setup(J) {
      const u = a([]),
        y = a("公告展示"),
        v = a(null),
        f = a(!1),
        c = a(null),
        m = a(0),
        i = a(0);
      async function x() {
        u.value[0] && (B(), N());
      }
      function N() {
        const e = document.getElementsByClassName("news-box")[0];
        c.value = e.getElementsByClassName("notice-block")[0];
        const t = c.value.offsetHeight;
        (i.value = e.getElementsByClassName("scroll-notice")[0].offsetHeight),
          i.value > t &&
            setTimeout(() => {
              (f.value = !0), (v.value = setInterval(C, 300));
            }, 2e3);
      }
      function B() {
        u.value.forEach(e => {
          const t = [];
          e.content &&
            (e.content = e.content.replace(
              /<img [^>]*src=['"]([^'"]+)[^>]*>/g,
              function (s, o) {
                return t.push({ url: o }), "";
              }
            )),
            (e.fileList = t);
        });
      }
      function h(e) {
        f.value = e;
      }
      async function C() {
        if (f.value) {
          await $();
          const e = c.value.getElementsByClassName("scroll-notice")[0],
            t = e.children;
          c.value.offsetHeight - i.value > e.offsetTop &&
            (t.length > 1 ? H() : D());
          let o = e.offsetTop;
          (o = o - 10), (e.style.top = `${o}px`);
        }
      }
      function D() {
        const e = c.value.getElementsByClassName("scroll-notice")[0],
          t = e.getElementsByClassName("scroll0")[0],
          s = t.cloneNode(!0);
        e.appendChild(s);
        const o = e.getElementsByClassName("scroll0")[1];
        o.classList.add("scroll1"),
          o.classList.remove("scroll0"),
          (m.value = 0),
          (i.value = t.offsetHeight * 2);
      }
      function H() {
        const e = m.value,
          t = c.value.getElementsByClassName("scroll-notice")[0],
          s = c.value.getElementsByClassName(`scroll${e}`)[0],
          o = Math.round(Math.abs(t.offsetTop) / (s.offsetHeight * 2)) * 2;
        (s.style.top = `${s.offsetHeight * o}px`),
          (m.value = +!e),
          (i.value = i.value + s.offsetHeight);
      }
      return (
        w(() => {
          x();
        }),
        M(() => {
          clearInterval(v.value);
        }),
        (e, t) => (
          l(),
          n("div", A, [
            g(E, { name: d(y) }, null, 8, ["name"]),
            d(u).length > 0
              ? (l(),
                n(
                  "div",
                  {
                    key: 0,
                    class: "notice-block",
                    onMouseenter: t[0] || (t[0] = s => h(!1)),
                    onMouseout: t[1] || (t[1] = s => h(!0))
                  },
                  [
                    r("div", F, [
                      r("div", S, [
                        (l(!0),
                        n(
                          p,
                          null,
                          _(
                            d(u),
                            (s, o) => (
                              l(),
                              n("div", { key: o }, [
                                s.fileList.length > 0 || s.richText !== ""
                                  ? (l(),
                                    n("div", V, [
                                      r("div", P, [
                                        r("div", U, [
                                          (l(!0),
                                          n(
                                            p,
                                            null,
                                            _(
                                              s.fileList,
                                              (b, k) => (
                                                l(),
                                                n(
                                                  "img",
                                                  {
                                                    key: k,
                                                    src: b.url,
                                                    alt: ""
                                                  },
                                                  null,
                                                  8,
                                                  j
                                                )
                                              )
                                            ),
                                            128
                                          ))
                                        ]),
                                        r(
                                          "div",
                                          {
                                            class: "rich-text",
                                            innerHTML: s.content
                                          },
                                          null,
                                          8,
                                          q
                                        )
                                      ])
                                    ]))
                                  : I("", !0)
                              ])
                            )
                          ),
                          128
                        ))
                      ])
                    ])
                  ],
                  32
                ))
              : (l(), n("div", z, [g(L)]))
          ])
        )
      );
    }
  },
  W = T(G, [["__scopeId", "data-v-8fbb501d"]]);
export { W as default };
