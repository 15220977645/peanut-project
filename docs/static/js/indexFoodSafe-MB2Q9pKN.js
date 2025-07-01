import v from "./headTitle-za3krsD_.js";
import b from "./emptyData-CFzXfOd5.js";
import {
  _ as g,
  r as u,
  e as H,
  f as x,
  c as l,
  o as i,
  b as p,
  a as e,
  u as a,
  y as B,
  F as k,
  k as N,
  t as c
} from "./index-DuV_pBtV.js";
import "./requireImg-CLyBMj04.js";
const S = { class: "box foodBox" },
  D = { class: "foodTable" },
  F = { key: 0, class: "table-body" },
  q = { class: "percent-pass" },
  E = { key: 1, class: "empty-box" },
  I = {
    __name: "indexFoodSafe",
    setup(T) {
      const t = u([
          {
            companyName: "广州******公司",
            detectionDate: "2023.11.10",
            percentPass: "50%",
            detectionUser: "本人"
          }
        ]),
        r = u(!1),
        d = u(null);
      async function y() {
        f(), _();
      }
      function _() {
        var m;
        const o = document.querySelector(".foodBox .foodTable"),
          s = o.querySelector(".tableHeader");
        ((m = o.getElementsByClassName("table-body")[0]) == null
          ? void 0
          : m.offsetHeight) >
          (o == null ? void 0 : o.offsetHeight) -
            (s == null ? void 0 : s.offsetHeight) &&
          (d.value = setInterval(h, 1500));
      }
      function f() {
        var n;
        const o = document.querySelector(":root"),
          s =
            (n = document.getElementsByClassName("table-info")[0]) == null
              ? void 0
              : n.offsetHeight;
        o.style.setProperty("--info-height", 0 - s + "px");
      }
      function h() {
        (r.value = !0),
          f(),
          setTimeout(() => {
            t.value.push(t.value[0]), t.value.shift(), (r.value = !1);
          }, 1e3);
      }
      return (
        H(() => {
          y();
        }),
        x(() => {
          clearInterval(d.value);
        }),
        (o, s) => (
          i(),
          l("div", S, [
            p(v, { icon: "FoodSafe-icon.svg", name: "食安看板" }),
            e("div", D, [
              s[0] ||
                (s[0] = e(
                  "ul",
                  { class: "tableHeader" },
                  [
                    e("li", null, "企业名称"),
                    e("li", null, "检测时间"),
                    e("li", null, "查验合格率"),
                    e("li", null, "检测人")
                  ],
                  -1
                )),
              a(t).length > 0
                ? (i(),
                  l("div", F, [
                    e(
                      "div",
                      { class: B([a(r) ? "animate-up" : "", "table-block"]) },
                      [
                        (i(),
                        l(
                          k,
                          null,
                          N(10, n =>
                            e("ul", { key: n, class: "table-info" }, [
                              e("li", null, c(a(t)[0].companyName), 1),
                              e("li", null, c(a(t)[0].detectionDate), 1),
                              e("li", q, c(a(t)[0].percentPass), 1),
                              e("li", null, c(a(t)[0].detectionUser), 1)
                            ])
                          ),
                          64
                        ))
                      ],
                      2
                    )
                  ]))
                : (i(), l("div", E, [p(b)]))
            ])
          ])
        )
      );
    }
  },
  V = g(I, [["__scopeId", "data-v-929c9450"]]);
export { V as default };
