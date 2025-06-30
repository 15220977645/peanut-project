import "./index-DUvDFKhA.js";
import be from "./title-CfGyNUxC.js";
import "./echarts-f48itlx0.js";
import {
  by as we,
  bz as Ce,
  bA as Pe,
  bB as Se,
  bC as Ie,
  bD as Me,
  bE as _e,
  bF as j,
  bG as ae,
  bH as Te,
  bI as Le,
  bJ as ie,
  bK as ne,
  bL as xe,
  bM as oe,
  bN as Ee,
  bO as le,
  bP as qe,
  d as Be,
  r as G,
  e as ke,
  n as re,
  f as Fe,
  c as D,
  b as Re,
  a as R,
  v as se,
  i as U,
  t as ue,
  bv as We,
  o as Y,
  bQ as Oe,
  _ as Ae
} from "./index-D6DS3gmo.js";
function J(e) {
  return document.body.clientWidth * (e / 1920);
}
function K(e) {
  return document.body.clientHeight * (e / 1080);
}
const ve = {
  liquidFill: [
    { offset: 0, color: "#7bbaf0" },
    { offset: 0.5, color: "#7295ec" },
    { offset: 1, color: "#5982ec" }
  ],
  pie: "#5482ff"
};
function Ne(e, a, i) {
  return {
    type: "liquidFill",
    radius: "75%",
    center: e,
    position: "inside",
    color: [
      {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: i && i.liquidFillColor ? i.liquidFillColor : ve.liquidFill,
        globalCoord: !1
      }
    ],
    data: a.value,
    backgroundStyle: {
      borderWidth: J(1),
      color: "RGBA(51, 66, 127, 0)",
      borderColor: {
        colorStops: [
          { offset: 0.76, color: "#5982ec" },
          { offset: 0.08, color: "#7bbaf0" },
          { offset: 0.44, color: "#7bbaf0" }
        ]
      }
    },
    label: {
      fontSize: K(24),
      color: "#3a6cff",
      insideColor: "#fff",
      formatter(l) {
        return `${(l.data * 100).toFixed(0)}%
{b|${a.label}}`;
      },
      rich: { b: { fontSize: K(14), lineHeight: K(25) } }
    },
    outline: {
      show: !0,
      borderDistance: 0,
      itemStyle: {
        borderWidth: J(1),
        borderColor: "#08B5F7",
        shadowBlur: J(20),
        shadowColor: "#08B5F7"
      }
    }
  };
}
function de(e, a, i, l) {
  return e === "背景"
    ? {
        name: "外层背景",
        type: "pie",
        radius: ["88%", "93%"],
        center: a,
        data: [{ value: 100, itemStyle: { color: "rgba(12, 47, 55, 0.2)" } }],
        labelLine: { show: !1 }
      }
    : {
        name: "外层实环",
        type: "pie",
        radius: ["88%", "93%"],
        center: a,
        emphasis: { scale: 0 },
        label: { show: !1 },
        data: [
          {
            value: i === void 0 || (i < 0.01 && i !== 0) ? 1 : i * 100,
            itemStyle: { color: l && l.pieColor ? l.pieColor : ve.pie }
          },
          {
            value: Number(
              (
                100 - (i === void 0 || (i < 0.01 && i !== 0) ? 1 : i * 100)
              ).toFixed(0)
            ),
            itemStyle: { color: "transparent" }
          }
        ]
      };
}
function ze(e, a) {
  let i = [];
  const l = 50 / e.length;
  return (
    e.forEach((c, f) => {
      i = i.concat([
        Ne([`${l * (2 * f + 1)}%`, "50%"], c, a),
        de("背景", [`${l * (2 * f + 1)}%`, "50%"]),
        de("实", [`${l * (2 * f + 1)}%`, "50%"], c.value[0], a)
      ]);
    }),
    { series: i }
  );
}
we({
  type: "series.liquidFill",
  optionUpdated: function () {
    var e = this.option;
    e.gridSize = Math.max(Math.floor(e.gridSize), 4);
  },
  getInitialData: function (e, a) {
    var i = Ce(e.data, { coordDimensions: ["value"] }),
      l = new Pe(i, this);
    return l.initData(e.data), l;
  },
  defaultOption: {
    color: ["#294D99", "#156ACF", "#1598ED", "#45BDFF"],
    center: ["50%", "50%"],
    radius: "50%",
    amplitude: "8%",
    waveLength: "80%",
    phase: "auto",
    period: "auto",
    direction: "right",
    shape: "circle",
    waveAnimation: !0,
    animationEasing: "linear",
    animationEasingUpdate: "linear",
    animationDuration: 2e3,
    animationDurationUpdate: 1e3,
    outline: {
      show: !0,
      borderDistance: 8,
      itemStyle: {
        color: "none",
        borderColor: "#294D99",
        borderWidth: 8,
        shadowBlur: 20,
        shadowColor: "rgba(0, 0, 0, 0.25)"
      }
    },
    backgroundStyle: { color: "#E3F7FF" },
    itemStyle: {
      opacity: 0.95,
      shadowBlur: 50,
      shadowColor: "rgba(0, 0, 0, 0.4)"
    },
    label: {
      show: !0,
      color: "#294D99",
      insideColor: "#fff",
      fontSize: 50,
      fontWeight: "bold",
      align: "center",
      baseline: "middle",
      position: "inside"
    },
    emphasis: { itemStyle: { opacity: 0.8 } }
  }
});
const De = Se({
  type: "ec-liquid-fill",
  shape: {
    waveLength: 0,
    radius: 0,
    radiusY: 0,
    cx: 0,
    cy: 0,
    waterLevel: 0,
    amplitude: 0,
    phase: 0,
    inverse: !1
  },
  buildPath: function (e, a) {
    a.radiusY == null && (a.radiusY = a.radius);
    for (
      var i = Math.max(Math.ceil(((2 * a.radius) / a.waveLength) * 4) * 2, 8);
      a.phase < -Math.PI * 2;

    )
      a.phase += Math.PI * 2;
    for (; a.phase > 0; ) a.phase -= Math.PI * 2;
    var l = (a.phase / Math.PI / 2) * a.waveLength,
      c = a.cx - a.radius + l - a.radius * 2;
    e.moveTo(c, a.waterLevel);
    for (var f = 0, p = 0; p < i; ++p) {
      var T = p % 4,
        r = Ye((p * a.waveLength) / 4, T, a.waveLength, a.amplitude);
      e.bezierCurveTo(
        r[0][0] + c,
        -r[0][1] + a.waterLevel,
        r[1][0] + c,
        -r[1][1] + a.waterLevel,
        r[2][0] + c,
        -r[2][1] + a.waterLevel
      ),
        p === i - 1 && (f = r[2][0]);
    }
    a.inverse
      ? (e.lineTo(f + c, a.cy - a.radiusY),
        e.lineTo(c, a.cy - a.radiusY),
        e.lineTo(c, a.waterLevel))
      : (e.lineTo(f + c, a.cy + a.radiusY),
        e.lineTo(c, a.cy + a.radiusY),
        e.lineTo(c, a.waterLevel)),
      e.closePath();
  }
});
function Ye(e, a, i, l) {
  return a === 0
    ? [
        [e + ((1 / 2) * i) / Math.PI / 2, l / 2],
        [e + ((1 / 2) * i) / Math.PI, l],
        [e + i / 4, l]
      ]
    : a === 1
    ? [
        [e + (((1 / 2) * i) / Math.PI / 2) * (Math.PI - 2), l],
        [e + (((1 / 2) * i) / Math.PI / 2) * (Math.PI - 1), l / 2],
        [e + i / 4, 0]
      ]
    : a === 2
    ? [
        [e + ((1 / 2) * i) / Math.PI / 2, -l / 2],
        [e + ((1 / 2) * i) / Math.PI, -l],
        [e + i / 4, -l]
      ]
    : [
        [e + (((1 / 2) * i) / Math.PI / 2) * (Math.PI - 2), -l],
        [e + (((1 / 2) * i) / Math.PI / 2) * (Math.PI - 1), -l / 2],
        [e + i / 4, 0]
      ];
}
var x = Me;
function ce(e) {
  return e && e.indexOf("path://") === 0;
}
Ie({
  type: "liquidFill",
  render: function (e, a, i) {
    var l = this,
      c = this.group;
    c.removeAll();
    var f = e.getData(),
      p = f.getItemModel(0),
      T = p.get("center"),
      r = p.get("radius"),
      E = i.getWidth(),
      L = i.getHeight(),
      W = Math.min(E, L),
      B = 0,
      q = 0,
      s = e.get("outline.show");
    s &&
      ((B = e.get("outline.borderDistance")),
      (q = x(e.get("outline.itemStyle.borderWidth"), W)));
    var h = x(T[0], E),
      y = x(T[1], L),
      P,
      k,
      F,
      S = !1,
      I = e.get("shape");
    if (
      (I === "container"
        ? ((S = !0),
          (P = [E / 2, L / 2]),
          (k = [P[0] - q / 2, P[1] - q / 2]),
          (F = [x(B, E), x(B, L)]),
          (r = [Math.max(k[0] - F[0], 0), Math.max(k[1] - F[1], 0)]))
        : ((P = x(r, W) / 2),
          (k = P - q / 2),
          (F = x(B, W)),
          (r = Math.max(k - F, 0))),
      s)
    ) {
      var fe = Q();
      (fe.style.lineWidth = q), c.add(Q());
    }
    var he = S ? 0 : h - r,
      ge = S ? 0 : y - r,
      O = null;
    c.add(me());
    var V = this._data,
      H = [];
    f
      .diff(V)
      .add(function (t) {
        var n = X(t, !1),
          o = n.shape.waterLevel;
        (n.shape.waterLevel = S ? L / 2 : r),
          _e(n, { shape: { waterLevel: o } }, e),
          (n.z2 = 2),
          Z(t, n, null),
          c.add(n),
          f.setItemGraphicEl(t, n),
          H.push(n);
      })
      .update(function (t, n) {
        for (
          var o = V.getItemGraphicEl(n),
            v = X(t, !1, o),
            d = {},
            u = [
              "amplitude",
              "cx",
              "cy",
              "phase",
              "radius",
              "radiusY",
              "waterLevel",
              "waveLength"
            ],
            m = 0;
          m < u.length;
          ++m
        ) {
          var g = u[m];
          v.shape.hasOwnProperty(g) && (d[g] = v.shape[g]);
        }
        for (
          var w = {},
            b = ["fill", "opacity", "shadowBlur", "shadowColor"],
            m = 0;
          m < b.length;
          ++m
        ) {
          var g = b[m];
          v.style.hasOwnProperty(g) && (w[g] = v.style[g]);
        }
        S && (d.radiusY = L / 2),
          j(o, { shape: d, x: v.x, y: v.y }, e),
          e.isUniversalTransitionEnabled && e.isUniversalTransitionEnabled()
            ? j(o, { style: w }, e)
            : o.useStyle(w);
        var C = o.getClipPath(),
          M = v.getClipPath();
        o.setClipPath(v.getClipPath()),
          (o.shape.inverse = v.inverse),
          C &&
            M &&
            l._shape === I &&
            !ce(I) &&
            j(M, { shape: C.shape }, e, { isFrom: !0 }),
          Z(t, o, o),
          c.add(o),
          f.setItemGraphicEl(t, o),
          H.push(o);
      })
      .remove(function (t) {
        var n = V.getItemGraphicEl(t);
        c.remove(n);
      })
      .execute(),
      p.get("label.show") && c.add(pe(H)),
      (this._shape = I),
      (this._data = f);
    function A(t, n) {
      if (I)
        if (ce(I)) {
          var o = oe(I.slice(7), {}),
            v = o.getBoundingRect(),
            d = v.width,
            u = v.height;
          d > u
            ? ((u = ((t * 2) / d) * u), (d = t * 2))
            : ((d = ((t * 2) / u) * d), (u = t * 2));
          var m = n ? 0 : h - d / 2,
            g = n ? 0 : y - u / 2;
          return (
            (o = oe(I.slice(7), {}, new Ee(m, g, d, u))),
            n && ((o.x = -d / 2), (o.y = -u / 2)),
            o
          );
        } else if (S) {
          var w = n ? -t[0] : h - t[0],
            b = n ? -t[1] : y - t[1];
          return le("rect", w, b, t[0] * 2, t[1] * 2);
        } else {
          var w = n ? -t : h - t,
            b = n ? -t : y - t;
          return (
            I === "pin" ? (b += t) : I === "arrow" && (b -= t),
            le(I, w, b, t * 2, t * 2)
          );
        }
      return new qe({ shape: { cx: n ? 0 : h, cy: n ? 0 : y, r: t } });
    }
    function Q() {
      var t = A(P);
      return (
        (t.style.fill = null),
        t.setStyle(e.getModel("outline.itemStyle").getItemStyle()),
        t
      );
    }
    function me() {
      var t = A(r);
      t.setStyle(e.getModel("backgroundStyle").getItemStyle()),
        (t.style.fill = null),
        (t.z2 = 5);
      var n = A(r);
      n.setStyle(e.getModel("backgroundStyle").getItemStyle()),
        (n.style.stroke = null);
      var o = new ae();
      return o.add(t), o.add(n), o;
    }
    function X(t, n, o) {
      var v = S ? r[0] : r,
        d = S ? L / 2 : r,
        u = f.getItemModel(t),
        m = u.getModel("itemStyle"),
        g = u.get("phase"),
        w = x(u.get("amplitude"), d * 2),
        b = x(u.get("waveLength"), v * 2),
        C = f.get("value", t),
        M = d - C * d * 2;
      g = o ? o.shape.phase : g === "auto" ? (t * Math.PI) / 4 : g;
      var _ = m.getItemStyle();
      if (!_.fill) {
        var N = e.get("color"),
          $ = t % N.length;
        _.fill = N[$];
      }
      var ye = v * 2,
        z = new De({
          shape: {
            waveLength: b,
            radius: v,
            radiusY: d,
            cx: ye,
            cy: 0,
            waterLevel: M,
            amplitude: w,
            phase: g,
            inverse: n
          },
          style: _,
          x: h,
          y
        });
      z.shape._waterLevel = M;
      var ee = u.getModel("emphasis.itemStyle").getItemStyle();
      (ee.lineWidth = 0), (z.ensureState("emphasis").style = ee), Te(z);
      var te = A(r, !0);
      return te.setStyle({ fill: "white" }), z.setClipPath(te), z;
    }
    function Z(t, n, o) {
      var v = f.getItemModel(t),
        d = v.get("period"),
        u = v.get("direction"),
        m = f.get("value", t),
        g = v.get("phase");
      g = o ? o.shape.phase : g === "auto" ? (t * Math.PI) / 4 : g;
      var w = function (M) {
          var _ = f.count();
          return _ === 0 ? M : M * (0.2 + ((_ - t) / _) * 0.8);
        },
        b = 0;
      d === "auto" ? (b = w(5e3)) : (b = typeof d == "function" ? d(m, t) : d);
      var C = 0;
      u === "right" || u == null
        ? (C = Math.PI)
        : u === "left"
        ? (C = -Math.PI)
        : u === "none"
        ? (C = 0)
        : console.error("Illegal direction value for liquid fill."),
        u !== "none" &&
          v.get("waveAnimation") &&
          n
            .animate("shape", !0)
            .when(0, { phase: g })
            .when(b / 2, { phase: C + g })
            .when(b, { phase: C * 2 + g })
            .during(function () {
              O && O.dirty(!0);
            })
            .start();
    }
    function pe(t) {
      var n = p.getModel("label");
      function o() {
        var _ = e.getFormattedLabel(0, "normal"),
          N = f.get("value", 0) * 100,
          $ = f.getName(0) || e.name;
        return isNaN(N) || ($ = N.toFixed(0) + "%"), _ ?? $;
      }
      var v = {
          z2: 10,
          shape: {
            x: he,
            y: ge,
            width: (S ? r[0] : r) * 2,
            height: (S ? r[1] : r) * 2
          },
          style: { fill: "transparent" },
          textConfig: { position: n.get("position") || "inside" },
          silent: !0
        },
        d = {
          style: {
            text: o(),
            textAlign: n.get("align"),
            textVerticalAlign: n.get("baseline")
          }
        };
      Object.assign(d.style, Le(n));
      var u = new ie(v),
        m = new ie(v);
      (m.disableLabelAnimation = !0), (u.disableLabelAnimation = !0);
      var g = new ne(d),
        w = new ne(d);
      u.setTextContent(g), m.setTextContent(w);
      var b = n.get("insideColor");
      w.style.fill = b;
      var C = new ae();
      C.add(u), C.add(m);
      var M = A(r, !0);
      return (
        (O = new xe({ shape: { paths: t }, x: h, y })),
        O.setClipPath(M),
        m.setClipPath(O),
        C
      );
    }
  },
  dispose: function () {}
});
const $e = { key: 0, class: "content-bg chart-block" },
  Ge = { class: "charts" },
  Ue = { key: 0, id: "equipment-usage", class: "content" },
  Ve = { key: 1, id: "equipment-load", class: "content" },
  He = { class: "bottom-title" },
  je = { class: "usage" },
  Je = { class: "bottom-num" },
  Ke = { class: "load" },
  Qe = { class: "bottom-num" },
  Xe = { key: 1, class: "loading" },
  Ze = Be({
    __name: "equipment",
    setup(e) {
      const a = G(0),
        i = G(0),
        l = G(!0);
      let c = [0, 0],
        f = [0, 0];
      const p = { usageChart: null, loadChart: null },
        T = G(!1),
        r = We("openPlatform");
      let E;
      async function L() {
        await B(), (E = setInterval(B, 1e3 * 15));
      }
      function W() {
        r && r(!0, "/StatisticalAnalysis/deviceRealtimeMonitor?state=3");
      }
      async function B() {
        const s = {
          interfaceChargingCount: 85,
          interfaceCount: 1398,
          devicePower: 86222,
          operatingPower: 4074.71
        };
        (a.value = s == null ? void 0 : s.interfaceChargingCount),
          (i.value =
            Number((s == null ? void 0 : s.operatingPower).toFixed(2)) || 0);
        const h =
            Number(
              (
                (s == null ? void 0 : s.interfaceChargingCount) /
                (s == null ? void 0 : s.interfaceCount)
              ).toFixed(2)
            ) || 0,
          y =
            Number(
              (
                (s == null ? void 0 : s.operatingPower) /
                (s == null ? void 0 : s.devicePower)
              ).toFixed(2)
            ) || 0;
        (c = [h, h]), (f = [y, y]), (l.value = !1), await re(), q();
      }
      function q() {
        const s = [
            { label: "使用率", value: c },
            { label: "负荷率", value: f }
          ],
          h = document.getElementsByClassName("equipment-container")[0],
          y = (P, k) => {
            const F = document.getElementById("fullScreenDom");
            p[P] && p[P].dispose(), (p[P] = null);
            const S = h.querySelector(`#equipment-${P.replace("Chart", "")}`);
            !S || !F || ((p[P] = Oe(S)), p[P].setOption(ze([k])));
          };
        y("usageChart", s[0]), y("loadChart", s[1]);
      }
      return (
        ke(() => {
          L(),
            window.addEventListener("resize", async () => {
              (T.value = !0),
                setTimeout(async () => {
                  (T.value = !1), await re(), q();
                }, 300);
            });
        }),
        Fe(() => {
          const s = h => {
            let y = p[h];
            y && (y.dispose(), (y = null));
          };
          s("usageChart"), s("loadChart"), clearInterval(E), (E = void 0);
        }),
        (s, h) => (
          Y(),
          D(
            "div",
            {
              class: "equipment-container module",
              title: "跳转至站枪实时监控",
              onClick: W
            },
            [
              Re(be, { title: "实时设备使用情况" }),
              l.value
                ? (Y(), D("div", Xe, "加载中，请稍等..."))
                : (Y(),
                  D("div", $e, [
                    R("div", Ge, [
                      T.value ? se("", !0) : (Y(), D("div", Ue)),
                      T.value ? se("", !0) : (Y(), D("div", Ve))
                    ]),
                    R("div", He, [
                      R("div", je, [
                        h[0] || (h[0] = U(" 正在充电枪数： ")),
                        R("span", Je, ue(a.value), 1),
                        h[1] || (h[1] = U(" 把 "))
                      ]),
                      R("div", Ke, [
                        h[2] || (h[2] = U(" 实时功率： ")),
                        R("span", Qe, ue(i.value), 1),
                        h[3] || (h[3] = U(" kW "))
                      ])
                    ])
                  ]))
            ]
          )
        )
      );
    }
  }),
  nt = Ae(Ze, [["__scopeId", "data-v-fd6de417"]]);
export { nt as default };
