import {
  S as f,
  P as b,
  W as x,
  O as y,
  v as C,
  V as o,
  w as g,
  b as k,
  D as A,
  a as B
} from "./OrbitControls-gBvV8f2G.js";
import {
  d as F,
  r as p,
  e as S,
  f as z,
  c as E,
  b as M,
  a as P,
  w as V,
  i as L,
  t as T,
  u as w,
  h as W,
  o as D,
  _ as N
} from "./index-D6DS3gmo.js";
const R = { class: "three-container" },
  q = F({
    __name: "index",
    setup(G) {
      const s = p();
      let c = null,
        e = null,
        n = null,
        i,
        r,
        d = p(void 0);
      const u = () => {
          (i = s.value.clientWidth),
            (r = s.value.clientHeight),
            n.setSize(i, r),
            (e.aspect = i / r),
            e.updateProjectionMatrix();
        },
        v = () => {
          (i = s.value.clientWidth),
            (r = s.value.clientHeight),
            (c = new f()),
            (e = new b(45, i / r, 1, 1e3)),
            e.position.set(0, 0, 100),
            e.lookAt(0, 0, 0),
            (n = new x({ antialias: !0 })),
            n.setSize(i, r),
            s.value.appendChild(n.domElement),
            new y(e, n.domElement),
            _();
          const t = () => {
            requestAnimationFrame(t), n.render(c, e);
          };
          t();
        };
      let m = null;
      const _ = () => {
          m = new C([
            new o(-10, 0, 0),
            new o(0, 10, 0),
            new o(10, 0, 0),
            new o(20, -10, 0),
            new o(22, -20, 10),
            new o(40, 30, 0),
            new o(0, 20, 50)
          ]);
          const t = new g(m, 100, 4, 50, !1),
            a = new k({
              color: "#0FF",
              side: A,
              opacity: 0.5,
              transparent: !0
            }),
            l = new B(t, a);
          c.add(l);
        },
        h = () => {
          const t = m.getPoints(750);
          let a = 0;
          function l() {
            if (t[a + 1])
              (e.distanceToTarget = 100),
                e.position.copy(t[a]),
                e.lookAt(t[a + 1]),
                a++;
            else {
              e.position.set(0, 0, 100),
                e.lookAt(0, 0, 0),
                n.render(c, e),
                cancelAnimationFrame(d.value),
                (d.value = void 0);
              return;
            }
            n.render(c, e), (d.value = requestAnimationFrame(l));
          }
          l();
        };
      return (
        S(() => {
          v(), window.addEventListener("resize", u);
        }),
        z(() => {
          window.removeEventListener("resize", u);
        }),
        (t, a) => {
          const l = W("el-button");
          return (
            D(),
            E("div", R, [
              M(
                l,
                {
                  type: "primary",
                  onClick: h,
                  disabled: w(d),
                  class: "play-btn"
                },
                { default: V(() => [L(T(w(d) ? "播放中" : "播放"), 1)]), _: 1 },
                8,
                ["disabled"]
              ),
              P(
                "div",
                { ref_key: "threeBox", ref: s, class: "three-box" },
                null,
                512
              )
            ])
          );
        }
      );
    }
  }),
  j = N(q, [["__scopeId", "data-v-85f925d4"]]);
export { j as default };
