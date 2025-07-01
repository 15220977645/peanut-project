import { t as N } from "./index-D4Ya40Qi.js";
import {
  d as re,
  r as w,
  z as a,
  u as e,
  C as Me,
  D as Fe,
  c as H,
  o as O,
  v as le,
  a as v,
  y as ae,
  G as b,
  I as Y,
  n as $e,
  J as Oe,
  q as He,
  B as Pe,
  g as De,
  w as T,
  b as $,
  k as je,
  F as qe,
  h as U,
  t as Be,
  _ as ze
} from "./index-CnxsT9tm.js";
const Ee = () => {
    (window.cancelAnimationFrame =
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      window.oCancelAnimationFrame ||
      window.msCancelAnimationFrame ||
      function (c) {
        return window.clearTimeout(c);
      }),
      (window.requestAnimationFrame = (function () {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (c) {
            return window.setTimeout(c, 1e3 / 60);
          }
        );
      })());
  },
  Re = (c, d) => {
    if (c === d) return !0;
    if (c.length !== d.length) return !1;
    for (let u = 0; u < c.length; ++u) if (c[u] !== d[u]) return !1;
    return !0;
  };
function ce() {
  Array.isArray ||
    (Array.isArray = function (h) {
      return Object.prototype.toString.call(h) === "[object Array]";
    });
  let c,
    d,
    u,
    f,
    m,
    y,
    l = 1,
    t = arguments[0] || {},
    s = !1,
    p = arguments.length;
  if (
    (typeof t == "boolean" && ((s = t), (t = arguments[1] || {}), l++),
    typeof t != "object" && typeof t != "function" && (t = {}),
    l === p)
  )
    return t;
  for (; l < p; l++)
    if ((d = arguments[l]) != null)
      for (c in d)
        (u = t[c]),
          (f = d[c]),
          (m = Array.isArray(f)),
          s && f && (typeof f == "object" || m)
            ? (m
                ? ((m = !1), (y = u && Array.isArray(u) ? u : []))
                : (y = u && typeof u == "object" ? u : {}),
              (t[c] = ce(s, y, f)))
            : f !== void 0 && (t[c] = f);
  return t;
}
const We = Object.freeze(
    Object.defineProperty(
      { __proto__: null, animationFrame: Ee, arrayEqual: Re, copyObj: ce },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Le = ["innerHTML"],
  Ie = re({
    name: "ReSeamlessScroll",
    __name: "index",
    props: { data: { type: Array }, classOption: { type: Object } },
    emits: ["scrollEnd"],
    setup(c, { expose: d, emit: u }) {
      const { animationFrame: f, copyObj: m } = We;
      f();
      const y = c,
        l = u,
        t = w(0),
        s = w(0),
        p = w(0),
        h = w(0),
        x = w(0),
        A = w(0),
        P = w(0),
        D = w("");
      let C = null,
        V = null,
        j = null,
        X = null,
        G = null,
        q = !1,
        B = "ease-in";
      const { classOption: g } = y;
      g.key === void 0 && (g.key = 0);
      const J = N(`wrap${g.key}`, null),
        K = N(`slotList${g.key}`, null),
        Q = N(`realBox${g.key}`, null),
        Z = a(() => e(t) < 0),
        ee = a(() => Math.abs(e(t)) < e(A) - e(x)),
        ue = a(() => ({
          step: 1,
          limitMoveNum: 5,
          hoverStop: !0,
          direction: "top",
          openTouch: !0,
          singleHeight: 0,
          singleWidth: 0,
          waitTime: 1e3,
          switchOffset: 30,
          autoPlay: !0,
          navigation: !1,
          switchSingleStep: 134,
          switchDelay: 400,
          switchDisabledClass: "disabled",
          isSingleRemUnit: !1
        })),
        o = a(() => m({}, e(ue), g)),
        fe = a(() => (e(Z) ? "" : e(o).switchDisabledClass)),
        de = a(() => (e(ee) ? "" : e(o).switchDisabledClass)),
        me = a(() => ({
          position: "absolute",
          margin: `${e(h) / 2}px 0 0 -${e(o).switchOffset}px`,
          transform: "translate(-100%,-50%)"
        })),
        pe = a(() => ({
          position: "absolute",
          margin: `${e(h) / 2}px 0 0 ${e(x) + e(o).switchOffset}px`,
          transform: "translateY(-50%)"
        })),
        z = a(() => e(o).direction !== "bottom" && e(o).direction !== "top"),
        te = a(() =>
          e(z) ? { float: "left", overflow: "hidden" } : { overflow: "hidden" }
        ),
        he = a(() => ({
          transform: `translate(${e(t)}px,${e(s)}px)`,
          transition: `all ${B} ${e(p)}ms`,
          overflow: "hidden"
        })),
        E = a(() => e(o).navigation),
        R = a(() => (e(E) ? !1 : e(o).autoPlay)),
        ne = a(() => y.data.length >= e(o).limitMoveNum),
        oe = a(() => e(o).hoverStop && e(R) && e(ne)),
        W = a(() => e(o).openTouch),
        ie = a(() =>
          e(o).isSingleRemUnit
            ? parseInt(
                window.getComputedStyle(document.documentElement, null).fontSize
              )
            : 1
        ),
        L = a(() => e(o).singleWidth * e(ie)),
        I = a(() => e(o).singleHeight * e(ie)),
        _ = a(() => {
          let n;
          const i = e(o).step;
          if ((e(z) ? (n = e(L)) : (n = e(I)), n > 0 && n % i > 0))
            throw "如果设置了单步滚动，step需是单步大小的约数，否则无法保证单步滚动结束的位置是否准确";
          return i;
        });
      function ve() {
        (t.value = 0), (s.value = 0), M(), se();
      }
      function we() {
        if (e(Z)) {
          if (Math.abs(e(t)) < e(o).switchSingleStep) {
            t.value = 0;
            return;
          }
          t.value += e(o).switchSingleStep;
        }
      }
      function ye() {
        if (e(ee)) {
          if (e(A) - e(x) + e(t) < e(o).switchSingleStep) {
            t.value = e(x) - e(A);
            return;
          }
          t.value -= e(o).switchSingleStep;
        }
      }
      function M() {
        cancelAnimationFrame(V || "");
      }
      function ge(n) {
        if (!e(W)) return;
        let i;
        const r = n.targetTouches[0],
          { waitTime: S, singleHeight: F, singleWidth: Ae } = e(o);
        (j = { x: r.pageX, y: r.pageY }),
          (X = e(s)),
          (G = e(t)),
          F && Ae
            ? (i && clearTimeout(i),
              (i = setTimeout(() => {
                M();
              }, S + 20)))
            : M();
      }
      function Se(n) {
        if (!e(W) || n.targetTouches.length > 1 || (n.scale && n.scale !== 1))
          return;
        const i = n.targetTouches[0],
          { direction: r } = e(o),
          S = { x: i.pageX - j.x, y: i.pageY - j.y };
        n.preventDefault();
        const F = Math.abs(S.x) < Math.abs(S.y) ? 1 : 0;
        (F === 1 && r === "bottom") || (F === 1 && r === "top")
          ? (s.value = X + S.y)
          : ((F === 0 && r === "left") || (F === 0 && r === "right")) &&
            (t.value = G + S.x);
      }
      function be() {
        if (!e(W)) return;
        let n;
        const i = e(o).direction;
        if (((p.value = 50), i === "top")) e(s) > 0 && (s.value = 0);
        else if (i === "bottom") {
          const r = (e(P) / 2) * -1;
          e(s) < r && (s.value = r);
        } else if (i === "left") e(t) > 0 && (t.value = 0);
        else if (i === "right") {
          const r = e(A) * -1;
          e(t) < r && (t.value = r);
        }
        n && clearTimeout(n),
          (n = setTimeout(() => {
            (p.value = 0), k();
          }, e(p)));
      }
      function _e() {
        e(oe) && xe();
      }
      function ke() {
        e(oe) && Te();
      }
      function k() {
        q ||
          (V = requestAnimationFrame(function () {
            const n = e(P) / 2,
              i = e(A) / 2,
              { direction: r, waitTime: S } = e(o);
            r === "top"
              ? (Math.abs(e(s)) >= n && (l("scrollEnd"), (s.value = 0)),
                (s.value -= _.value))
              : r === "bottom"
              ? (e(s) >= 0 && (l("scrollEnd"), (s.value = n * -1)),
                (s.value += _.value))
              : r === "left"
              ? (Math.abs(e(t)) >= i && (l("scrollEnd"), (t.value = 0)),
                (t.value -= _.value))
              : r === "right" &&
                (e(t) >= 0 && (l("scrollEnd"), (t.value = i * -1)),
                (t.value += _.value)),
              C && clearTimeout(C),
              e(I)
                ? Math.abs(e(s)) % e(I) < e(_)
                  ? (C = setTimeout(() => {
                      k();
                    }, S))
                  : k()
                : e(L) && Math.abs(e(t)) % e(L) < e(_)
                ? (C = setTimeout(() => {
                    k();
                  }, S))
                : k();
          }));
      }
      function se() {
        $e(() => {
          const { switchDelay: n } = e(o);
          if (((D.value = ""), e(z))) {
            (h.value = e(J).offsetHeight), (x.value = e(J).offsetWidth);
            let i = e(K).offsetWidth;
            e(R) && (i = i * 2 + 1),
              (e(Q).style.width = i + "px"),
              (A.value = i);
          }
          if (e(R)) (B = "ease-in"), (p.value = 0);
          else {
            (B = "linear"), (p.value = n);
            return;
          }
          e(ne)
            ? ((D.value = e(K).innerHTML),
              setTimeout(() => {
                var i;
                (P.value = (i = e(Q)) == null ? void 0 : i.offsetHeight), k();
              }, 0))
            : (M(), (s.value = t.value = 0));
        });
      }
      function Te() {
        (q = !1), k();
      }
      function xe() {
        (q = !0), C && clearTimeout(C), M();
      }
      function Ce(n) {
        e(o).direction === "left" ||
          e(o).direction === "right" ||
          Oe(() => {
            n.deltaY > 0 ? (s.value -= _.value) : (s.value += _.value);
          }, 50)();
      }
      return (
        Me(() => {
          se();
        }),
        Fe(() => {
          M(), clearTimeout(C);
        }),
        d({ reset: ve }),
        (n, i) => (
          O(),
          H(
            "div",
            { ref: "wrap" + e(g).key },
            [
              E.value
                ? (O(),
                  H(
                    "div",
                    {
                      key: 0,
                      style: b(me.value),
                      class: ae(fe.value),
                      onClick: we
                    },
                    [Y(n.$slots, "left-switch")],
                    6
                  ))
                : le("", !0),
              E.value
                ? (O(),
                  H(
                    "div",
                    {
                      key: 1,
                      style: b(pe.value),
                      class: ae(de.value),
                      onClick: ye
                    },
                    [Y(n.$slots, "right-switch")],
                    6
                  ))
                : le("", !0),
              v(
                "div",
                {
                  ref: "realBox" + e(g).key,
                  style: b(he.value),
                  onMouseenter: _e,
                  onMouseleave: ke,
                  onTouchstartPassive: ge,
                  onTouchmovePassive: Se,
                  onTouchend: be,
                  onMousewheelPassive: Ce
                },
                [
                  v(
                    "div",
                    { ref: "slotList" + e(g).key, style: b(te.value) },
                    [Y(n.$slots, "default")],
                    4
                  ),
                  v(
                    "div",
                    { innerHTML: D.value, style: b(te.value) },
                    null,
                    12,
                    Le
                  )
                ],
                36
              )
            ],
            512
          )
        )
      );
    }
  }),
  Ne = He(Ie),
  Ye = { class: "card-header" },
  Ue = { class: "item" },
  Ve = ["textContent"],
  Xe = re({
    name: "SeamlessScroll",
    __name: "index",
    setup(c) {
      const d = w(),
        u = w([
          { title: "无缝滚动第一行无缝滚动第一行！！！！！！！！！！" },
          { title: "无缝滚动第二行无缝滚动第二行！！！！！！！！！！" },
          { title: "无缝滚动第三行无缝滚动第三行！！！！！！！！！！" },
          { title: "无缝滚动第四行无缝滚动第四行！！！！！！！！！！" },
          { title: "无缝滚动第五行无缝滚动第五行！！！！！！！！！！" },
          { title: "无缝滚动第六行无缝滚动第六行！！！！！！！！！！" },
          { title: "无缝滚动第七行无缝滚动第七行！！！！！！！！！！" },
          { title: "无缝滚动第八行无缝滚动第八行！！！！！！！！！！" },
          { title: "无缝滚动第九行无缝滚动第九行！！！！！！！！！！" }
        ]),
        f = Pe({ direction: "top" });
      function m(y) {
        e(d).reset(), (e(f).direction = y);
      }
      return (y, l) => {
        const t = U("el-button"),
          s = U("el-card"),
          p = U("el-space");
        return (
          O(),
          De(
            p,
            { wrap: "" },
            {
              default: T(() => [
                $(
                  s,
                  { class: "box-card", shadow: "never" },
                  {
                    header: T(() => [
                      v("div", Ye, [
                        l[4] || (l[4] = v("span", null, "无缝滚动示例", -1)),
                        $(
                          t,
                          {
                            class: "button",
                            link: "",
                            type: "primary",
                            onClick: l[0] || (l[0] = h => m("top"))
                          },
                          {
                            default: T(() => [
                              v(
                                "span",
                                {
                                  style: b({
                                    color: f.direction === "top" ? "red" : ""
                                  })
                                },
                                " 向上滚动 ",
                                4
                              )
                            ]),
                            _: 1
                          }
                        ),
                        $(
                          t,
                          {
                            class: "button",
                            link: "",
                            type: "primary",
                            onClick: l[1] || (l[1] = h => m("bottom"))
                          },
                          {
                            default: T(() => [
                              v(
                                "span",
                                {
                                  style: b({
                                    color: f.direction === "bottom" ? "red" : ""
                                  })
                                },
                                " 向下滚动 ",
                                4
                              )
                            ]),
                            _: 1
                          }
                        ),
                        $(
                          t,
                          {
                            class: "button",
                            link: "",
                            type: "primary",
                            onClick: l[2] || (l[2] = h => m("left"))
                          },
                          {
                            default: T(() => [
                              v(
                                "span",
                                {
                                  style: b({
                                    color: f.direction === "left" ? "red" : ""
                                  })
                                },
                                " 向左滚动 ",
                                4
                              )
                            ]),
                            _: 1
                          }
                        ),
                        $(
                          t,
                          {
                            class: "button",
                            link: "",
                            type: "primary",
                            onClick: l[3] || (l[3] = h => m("right"))
                          },
                          {
                            default: T(() => [
                              v(
                                "span",
                                {
                                  style: b({
                                    color: f.direction === "right" ? "red" : ""
                                  })
                                },
                                " 向右滚动 ",
                                4
                              )
                            ]),
                            _: 1
                          }
                        )
                      ])
                    ]),
                    default: T(() => [
                      $(
                        e(Ne),
                        {
                          ref_key: "scroll",
                          ref: d,
                          data: u.value,
                          "class-option": f,
                          class: "warp"
                        },
                        {
                          default: T(() => [
                            v("ul", Ue, [
                              (O(!0),
                              H(
                                qe,
                                null,
                                je(
                                  u.value,
                                  (h, x) => (
                                    O(),
                                    H("li", { key: x }, [
                                      v(
                                        "span",
                                        {
                                          class: "title",
                                          textContent: Be(h.title)
                                        },
                                        null,
                                        8,
                                        Ve
                                      )
                                    ])
                                  )
                                ),
                                128
                              ))
                            ])
                          ]),
                          _: 1
                        },
                        8,
                        ["data", "class-option"]
                      )
                    ]),
                    _: 1
                  }
                )
              ]),
              _: 1
            }
          )
        );
      };
    }
  }),
  Ke = ze(Xe, [["__scopeId", "data-v-13dcd167"]]);
export { Ke as default };
