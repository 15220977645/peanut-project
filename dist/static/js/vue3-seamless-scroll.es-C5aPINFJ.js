import {
  d as J,
  r as u,
  z as c,
  L as z,
  ak as K,
  e as Q,
  b as g,
  F as X,
  $ as Z,
  n as _
} from "./index-CnxsT9tm.js";
function ee(t, r, f, v) {
  var e,
    A = !1,
    b = 0;
  function w() {
    e && clearTimeout(e);
  }
  function T() {
    w(), (A = !0);
  }
  typeof r != "boolean" && ((v = f), (f = r), (r = void 0));
  function s() {
    for (var m = arguments.length, x = new Array(m), n = 0; n < m; n++)
      x[n] = arguments[n];
    var i = this,
      d = Date.now() - b;
    if (A) return;
    function a() {
      (b = Date.now()), f.apply(i, x);
    }
    function h() {
      e = void 0;
    }
    v && !e && a(),
      w(),
      v === void 0 && d > t
        ? a()
        : r !== !0 && (e = setTimeout(v ? h : a, v === void 0 ? t - d : t));
  }
  return (s.cancel = T), s;
}
function le(t) {
  const r = Z();
  r && Object.assign(r.proxy, t);
}
const te = {
  modelValue: { type: Boolean, default: !0 },
  list: { type: Array, required: !0, default: [] },
  step: { type: Number, default: 1 },
  limitScrollNum: { type: Number, default: 3 },
  hover: { type: Boolean, default: !1 },
  direction: { type: String, default: "up" },
  singleHeight: { type: Number, default: 0 },
  singleWidth: { type: Number, default: 0 },
  singleWaitTime: { type: Number, default: 1e3 },
  isRemUnit: { type: Boolean, default: !1 },
  isWatch: { type: Boolean, default: !0 },
  delay: { type: Number, default: 0 },
  ease: { type: [String, Object], default: "ease-in" },
  count: { type: Number, default: -1 },
  copyNum: { type: Number, default: 1 },
  wheel: { type: Boolean, default: !1 },
  singleLine: { type: Boolean, default: !1 }
};
globalThis.window.cancelAnimationFrame = (function () {
  return (
    globalThis.window.cancelAnimationFrame ||
    globalThis.window.webkitCancelAnimationFrame ||
    globalThis.window.mozCancelAnimationFrame ||
    globalThis.window.oCancelAnimationFrame ||
    globalThis.window.msCancelAnimationFrame ||
    function (t) {
      return globalThis.window.clearTimeout(t);
    }
  );
})();
globalThis.window.requestAnimationFrame = (function () {
  return (
    globalThis.window.requestAnimationFrame ||
    globalThis.window.webkitRequestAnimationFrame ||
    globalThis.window.mozRequestAnimationFrame ||
    globalThis.window.oRequestAnimationFrame ||
    globalThis.window.msRequestAnimationFrame ||
    function (t) {
      return globalThis.window.setTimeout(t, 1e3 / 60);
    }
  );
})();
function ae(t) {
  t &&
    typeof t != "boolean" &&
    t.length > 100 &&
    console.warn(
      `数据达到了${t.length}条有点多哦~,可能会造成部分老旧浏览器卡顿。`
    );
}
const ie = J({
  name: "vue3-seamless-scroll",
  inheritAttrs: !1,
  props: te,
  emits: ["stop", "count", "move"],
  setup(t, { slots: r, emit: f, attrs: v }) {
    const e = t,
      A = u(null),
      b = u(null),
      w = u(null),
      T = u(null),
      s = u(null),
      m = u(0),
      x = u(0),
      n = u(0),
      i = u(0),
      d = u(!1),
      a = u(0),
      h = c(() => (e.list ? e.list.length >= e.limitScrollNum : !1)),
      C = c(() => ({
        width: m.value ? `${m.value}px` : "auto",
        transform: `translate(${n.value}px,${i.value}px)`,
        transition: `all ${
          typeof e.ease == "string"
            ? e.ease
            : "cubic-bezier(" +
              e.ease.x1 +
              "," +
              e.ease.y1 +
              "," +
              e.ease.x2 +
              "," +
              e.ease.y2 +
              ")"
        } ${e.delay}ms`,
        overflow: "hidden",
        display: e.singleLine ? "flex" : "block"
      })),
      B = c(() => e.direction == "left" || e.direction == "right"),
      R = c(() =>
        B.value
          ? {
              float: "left",
              overflow: "hidden",
              display: e.singleLine ? "flex" : "block",
              flexShrink: e.singleLine ? 0 : 1
            }
          : { overflow: "hidden" }
      ),
      L = c(() =>
        e.isRemUnit
          ? parseInt(
              globalThis.window.getComputedStyle(
                globalThis.document.documentElement,
                null
              ).fontSize
            )
          : 1
      ),
      q = c(() => e.singleWidth * L.value),
      F = c(() => e.singleHeight * L.value),
      k = c(() => {
        let l,
          o = e.step;
        return (
          B.value ? (l = q.value) : (l = F.value),
          l > 0 &&
            l % o > 0 &&
            console.error(
              "如果设置了单步滚动，step 需是单步大小的约数，否则无法保证单步滚动结束的位置是否准确。~~~~~"
            ),
          o
        );
      }),
      y = () => {
        cancelAnimationFrame(T.value), (T.value = null);
      },
      H = (l, o, G) => {
        T.value = requestAnimationFrame(function () {
          const I = x.value / 2,
            P = m.value / 2;
          if (
            (l === "up"
              ? (Math.abs(i.value) >= I &&
                  ((i.value = 0), (a.value += 1), f("count", a.value)),
                (i.value -= o))
              : l === "down"
              ? (i.value >= 0 &&
                  ((i.value = I * -1), (a.value += 1), f("count", a.value)),
                (i.value += o))
              : l === "left"
              ? (Math.abs(n.value) >= P &&
                  ((n.value = 0), (a.value += 1), f("count", a.value)),
                (n.value -= o))
              : l === "right" &&
                (n.value >= 0 &&
                  ((n.value = P * -1), (a.value += 1), f("count", a.value)),
                (n.value += o)),
            G)
          )
            return;
          let { singleWaitTime: j } = e;
          s.value && clearTimeout(s.value),
            F.value
              ? Math.abs(i.value) % F.value < o
                ? (s.value = setTimeout(() => {
                    p();
                  }, j))
                : p()
              : q.value && Math.abs(n.value) % q.value < o
              ? (s.value = setTimeout(() => {
                  p();
                }, j))
              : p();
        });
      },
      p = () => {
        if ((y(), d.value || !h.value || a.value === e.count)) {
          f("stop", a.value), (a.value = 0);
          return;
        }
        H(e.direction, k.value, !1);
      },
      V = () => {
        if ((ae(e.list), B.value)) {
          let l = b.value.offsetWidth;
          (l = l * 2 + 1), (m.value = l);
        }
        h.value
          ? ((x.value = w.value.offsetHeight), e.modelValue && p())
          : (y(), (i.value = n.value = 0));
      },
      N = () => {
        (d.value = !1), p();
      },
      M = () => {
        (d.value = !0), s.value && clearTimeout(s.value), y();
      },
      S = c(() => e.hover && e.modelValue && h.value),
      O = ee(30, l => {
        y();
        const o = F.value ? F.value : 15;
        l.deltaY < 0 && H("down", o, !0), l.deltaY > 0 && H("up", o, !0);
      }),
      U = l => {
        O(l);
      },
      E = () => {
        y(), (d.value = !1), V();
      };
    le({
      Reset: () => {
        E();
      }
    }),
      z(
        () => e.list,
        () => {
          e.isWatch &&
            _(() => {
              E();
            });
        },
        { deep: !0 }
      ),
      z(
        () => e.modelValue,
        l => {
          l ? N() : M();
        }
      ),
      z(
        () => e.count,
        l => {
          l !== 0 && N();
        }
      ),
      K(() => {
        y(), clearTimeout(s.value);
      }),
      Q(() => {
        h.value && V();
      });
    const { default: W, html: $ } = r,
      Y = new Array(e.copyNum).fill(null),
      D = () =>
        g(X, null, [
          g("div", { ref: b, style: R.value }, [W && W()]),
          h.value
            ? Y.map(() =>
                $ && typeof $ == "function"
                  ? g("div", { style: R.value }, [$()])
                  : g("div", { style: R.value }, [W && W()])
              )
            : null
        ]);
    return () =>
      g("div", { ref: A, class: v.class }, [
        e.wheel && e.hover
          ? g(
              "div",
              {
                ref: w,
                style: C.value,
                onMouseenter: () => {
                  S.value && M();
                },
                onMouseleave: () => {
                  S.value && N();
                },
                onWheel: l => {
                  S.value && U(l);
                }
              },
              [D()]
            )
          : g(
              "div",
              {
                ref: w,
                style: C.value,
                onMouseenter: () => {
                  S.value && M();
                },
                onMouseleave: () => {
                  S.value && N();
                }
              },
              [D()]
            )
      ]);
  }
});
export { ie as V };
