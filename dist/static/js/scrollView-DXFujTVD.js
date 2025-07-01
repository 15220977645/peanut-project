import {
  d as H,
  r as n,
  L as N,
  f as _,
  c as x,
  o as E,
  a as r,
  I as k,
  n as w,
  _ as I
} from "./index-CnxsT9tm.js";
const b = { class: "container-block" },
  T = { class: "scroll0" },
  $ = H({
    __name: "scrollView",
    props: { parentDom: {}, openAnimation: { type: Boolean } },
    setup(p) {
      const f = p,
        u = n(),
        d = n(),
        c = n(!1),
        l = n(),
        i = n(1),
        a = n(0),
        h = n(document.body.clientWidth);
      function g() {
        var o;
        const s = document.getElementsByClassName(f.parentDom)[0];
        l.value = s.getElementsByClassName("scroll-block")[0];
        const e = (o = l.value) == null ? void 0 : o.offsetHeight,
          t = d.value.offsetHeight;
        (a.value = t),
          t > e &&
            setTimeout(() => {
              (c.value = !0), (u.value = setInterval(y, 300));
            }, 2e3);
      }
      function v(s) {
        c.value = s;
      }
      async function y() {
        var s;
        if (c.value) {
          await w();
          const e = l.value.getElementsByClassName("scroll-info")[0],
            t = e == null ? void 0 : e.children;
          ((s = l.value) == null ? void 0 : s.offsetHeight) - a.value >
            (e == null ? void 0 : e.offsetTop) && (t.length > 1 ? C() : B());
          let m = e == null ? void 0 : e.offsetTop;
          (m -= h.value * (10 / 1920)), (e.style.top = `${m}px`);
        }
      }
      function B() {
        const s = l.value.getElementsByClassName("scroll-info")[0],
          e = s.getElementsByClassName("scroll0")[0],
          t = e.cloneNode(!0);
        s.appendChild(t);
        const o = s.getElementsByClassName("scroll0")[1];
        o.classList.add("scroll1"),
          o.classList.remove("scroll0"),
          (i.value = 0),
          (a.value = (e == null ? void 0 : e.offsetHeight) * 2);
      }
      function C() {
        const s = i.value,
          e = l.value.getElementsByClassName("scroll-info")[0],
          t = l.value.getElementsByClassName(`scroll${s}`)[0],
          o =
            Math.round(
              Math.abs(e == null ? void 0 : e.offsetTop) /
                ((t == null ? void 0 : t.offsetHeight) * 2)
            ) * 2;
        (t.style.top = `${(t == null ? void 0 : t.offsetHeight) * o}px`),
          (i.value = +!s),
          (a.value += t == null ? void 0 : t.offsetHeight);
      }
      return (
        N(
          () => f.openAnimation,
          s => {
            s && g();
          }
        ),
        _(() => {
          clearInterval(u.value);
        }),
        (s, e) => (
          E(),
          x("div", b, [
            r(
              "div",
              {
                class: "scroll-block",
                onMouseenter: e[0] || (e[0] = t => v(!1)),
                onMouseout: e[1] || (e[1] = t => v(!0))
              },
              [
                r(
                  "div",
                  { ref_key: "scrollInfo", ref: d, class: "scroll-info" },
                  [r("div", T, [k(s.$slots, "default", {}, void 0, !0)])],
                  512
                )
              ],
              32
            )
          ])
        )
      );
    }
  }),
  L = I($, [["__scopeId", "data-v-fe9ea260"]]);
export { L as default };
