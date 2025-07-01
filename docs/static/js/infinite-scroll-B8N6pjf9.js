import {
  s as Je,
  E as Y,
  d as Ea,
  r as k,
  g as Ye,
  w as U,
  a as V,
  j as Ia,
  i as W,
  b as L,
  t as Ze,
  h as B,
  u as Ta,
  o as Qe
} from "./index-DuV_pBtV.js";
var rt = {},
  G,
  et;
function R() {
  if (et) return G;
  et = 1;
  var r = function (e) {
    return e && e.Math === Math && e;
  };
  return (
    (G =
      r(typeof globalThis == "object" && globalThis) ||
      r(typeof window == "object" && window) ||
      r(typeof self == "object" && self) ||
      r(typeof Je == "object" && Je) ||
      r(typeof G == "object" && G) ||
      (function () {
        return this;
      })() ||
      Function("return this")()),
    G
  );
}
var Z = {},
  Q,
  tt;
function P() {
  return (
    tt ||
      ((tt = 1),
      (Q = function (r) {
        try {
          return !!r();
        } catch {
          return !0;
        }
      })),
    Q
  );
}
var rr, nt;
function j() {
  if (nt) return rr;
  nt = 1;
  var r = P();
  return (
    (rr = !r(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          }
        })[1] !== 7
      );
    })),
    rr
  );
}
var er, at;
function H() {
  if (at) return er;
  at = 1;
  var r = P();
  return (
    (er = !r(function () {
      var e = function () {}.bind();
      return typeof e != "function" || e.hasOwnProperty("prototype");
    })),
    er
  );
}
var tr, it;
function Be() {
  if (it) return tr;
  it = 1;
  var r = H(),
    e = Function.prototype.call;
  return (
    (tr = r
      ? e.bind(e)
      : function () {
          return e.apply(e, arguments);
        }),
    tr
  );
}
var nr = {},
  ot;
function Ra() {
  if (ot) return nr;
  ot = 1;
  var r = {}.propertyIsEnumerable,
    e = Object.getOwnPropertyDescriptor,
    t = e && !r.call({ 1: 2 }, 1);
  return (
    (nr.f = t
      ? function (a) {
          var i = e(this, a);
          return !!i && i.enumerable;
        }
      : r),
    nr
  );
}
var ar, ut;
function z() {
  return (
    ut ||
      ((ut = 1),
      (ar = function (r, e) {
        return {
          enumerable: !(r & 1),
          configurable: !(r & 2),
          writable: !(r & 4),
          value: e
        };
      })),
    ar
  );
}
var ir, ct;
function I() {
  if (ct) return ir;
  ct = 1;
  var r = H(),
    e = Function.prototype,
    t = e.call,
    n = r && e.bind.bind(t, t);
  return (
    (ir = r
      ? n
      : function (a) {
          return function () {
            return t.apply(a, arguments);
          };
        }),
    ir
  );
}
var or, st;
function X() {
  if (st) return or;
  st = 1;
  var r = I(),
    e = r({}.toString),
    t = r("".slice);
  return (
    (or = function (n) {
      return t(e(n), 8, -1);
    }),
    or
  );
}
var ur, ft;
function Qn() {
  if (ft) return ur;
  ft = 1;
  var r = I(),
    e = P(),
    t = X(),
    n = Object,
    a = r("".split);
  return (
    (ur = e(function () {
      return !n("z").propertyIsEnumerable(0);
    })
      ? function (i) {
          return t(i) === "String" ? a(i, "") : n(i);
        }
      : n),
    ur
  );
}
var cr, lt;
function ra() {
  return (
    lt ||
      ((lt = 1),
      (cr = function (r) {
        return r == null;
      })),
    cr
  );
}
var sr, vt;
function Ge() {
  if (vt) return sr;
  vt = 1;
  var r = ra(),
    e = TypeError;
  return (
    (sr = function (t) {
      if (r(t)) throw new e("Can't call method on " + t);
      return t;
    }),
    sr
  );
}
var fr, dt;
function Ke() {
  if (dt) return fr;
  dt = 1;
  var r = Qn(),
    e = Ge();
  return (
    (fr = function (t) {
      return r(e(t));
    }),
    fr
  );
}
var lr, yt;
function C() {
  if (yt) return lr;
  yt = 1;
  var r = typeof document == "object" && document.all;
  return (
    (lr =
      typeof r > "u" && r !== void 0
        ? function (e) {
            return typeof e == "function" || e === r;
          }
        : function (e) {
            return typeof e == "function";
          }),
    lr
  );
}
var vr, pt;
function w() {
  if (pt) return vr;
  pt = 1;
  var r = C();
  return (
    (vr = function (e) {
      return typeof e == "object" ? e !== null : r(e);
    }),
    vr
  );
}
var dr, ht;
function J() {
  if (ht) return dr;
  ht = 1;
  var r = R(),
    e = C(),
    t = function (n) {
      return e(n) ? n : void 0;
    };
  return (
    (dr = function (n, a) {
      return arguments.length < 2 ? t(r[n]) : r[n] && r[n][a];
    }),
    dr
  );
}
var yr, bt;
function ea() {
  if (bt) return yr;
  bt = 1;
  var r = I();
  return (yr = r({}.isPrototypeOf)), yr;
}
var pr, St;
function Pa() {
  if (St) return pr;
  St = 1;
  var r = R(),
    e = r.navigator,
    t = e && e.userAgent;
  return (pr = t ? String(t) : ""), pr;
}
var hr, gt;
function ke() {
  if (gt) return hr;
  gt = 1;
  var r = R(),
    e = Pa(),
    t = r.process,
    n = r.Deno,
    a = (t && t.versions) || (n && n.version),
    i = a && a.v8,
    u,
    o;
  return (
    i && ((u = i.split(".")), (o = u[0] > 0 && u[0] < 4 ? 1 : +(u[0] + u[1]))),
    !o &&
      e &&
      ((u = e.match(/Edge\/(\d+)/)),
      (!u || u[1] >= 74) && ((u = e.match(/Chrome\/(\d+)/)), u && (o = +u[1]))),
    (hr = o),
    hr
  );
}
var br, mt;
function ta() {
  if (mt) return br;
  mt = 1;
  var r = ke(),
    e = P(),
    t = R(),
    n = t.String;
  return (
    (br =
      !!Object.getOwnPropertySymbols &&
      !e(function () {
        var a = Symbol("symbol detection");
        return (
          !n(a) ||
          !(Object(a) instanceof Symbol) ||
          (!Symbol.sham && r && r < 41)
        );
      })),
    br
  );
}
var Sr, Ot;
function na() {
  if (Ot) return Sr;
  Ot = 1;
  var r = ta();
  return (Sr = r && !Symbol.sham && typeof Symbol.iterator == "symbol"), Sr;
}
var gr, qt;
function aa() {
  if (qt) return gr;
  qt = 1;
  var r = J(),
    e = C(),
    t = ea(),
    n = na(),
    a = Object;
  return (
    (gr = n
      ? function (i) {
          return typeof i == "symbol";
        }
      : function (i) {
          var u = r("Symbol");
          return e(u) && t(u.prototype, a(i));
        }),
    gr
  );
}
var mr, Et;
function Ca() {
  if (Et) return mr;
  Et = 1;
  var r = String;
  return (
    (mr = function (e) {
      try {
        return r(e);
      } catch {
        return "Object";
      }
    }),
    mr
  );
}
var Or, It;
function Ue() {
  if (It) return Or;
  It = 1;
  var r = C(),
    e = Ca(),
    t = TypeError;
  return (
    (Or = function (n) {
      if (r(n)) return n;
      throw new t(e(n) + " is not a function");
    }),
    Or
  );
}
var qr, Tt;
function wa() {
  if (Tt) return qr;
  Tt = 1;
  var r = Ue(),
    e = ra();
  return (
    (qr = function (t, n) {
      var a = t[n];
      return e(a) ? void 0 : r(a);
    }),
    qr
  );
}
var Er, Rt;
function _a() {
  if (Rt) return Er;
  Rt = 1;
  var r = Be(),
    e = C(),
    t = w(),
    n = TypeError;
  return (
    (Er = function (a, i) {
      var u, o;
      if (
        (i === "string" && e((u = a.toString)) && !t((o = r(u, a)))) ||
        (e((u = a.valueOf)) && !t((o = r(u, a)))) ||
        (i !== "string" && e((u = a.toString)) && !t((o = r(u, a))))
      )
        return o;
      throw new n("Can't convert object to primitive value");
    }),
    Er
  );
}
var Ir = { exports: {} },
  Tr,
  Pt;
function ia() {
  return Pt || ((Pt = 1), (Tr = !1)), Tr;
}
var Rr, Ct;
function Ve() {
  if (Ct) return Rr;
  Ct = 1;
  var r = R(),
    e = Object.defineProperty;
  return (
    (Rr = function (t, n) {
      try {
        e(r, t, { value: n, configurable: !0, writable: !0 });
      } catch {
        r[t] = n;
      }
      return n;
    }),
    Rr
  );
}
var wt;
function We() {
  if (wt) return Ir.exports;
  wt = 1;
  var r = ia(),
    e = R(),
    t = Ve(),
    n = "__core-js_shared__",
    a = (Ir.exports = e[n] || t(n, {}));
  return (
    (a.versions || (a.versions = [])).push({
      version: "3.41.0",
      mode: r ? "pure" : "global",
      copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    }),
    Ir.exports
  );
}
var Pr, _t;
function oa() {
  if (_t) return Pr;
  _t = 1;
  var r = We();
  return (
    (Pr = function (e, t) {
      return r[e] || (r[e] = t || {});
    }),
    Pr
  );
}
var Cr, jt;
function $e() {
  if (jt) return Cr;
  jt = 1;
  var r = Ge(),
    e = Object;
  return (
    (Cr = function (t) {
      return e(r(t));
    }),
    Cr
  );
}
var wr, At;
function D() {
  if (At) return wr;
  At = 1;
  var r = I(),
    e = $e(),
    t = r({}.hasOwnProperty);
  return (
    (wr =
      Object.hasOwn ||
      function (a, i) {
        return t(e(a), i);
      }),
    wr
  );
}
var _r, Dt;
function ua() {
  if (Dt) return _r;
  Dt = 1;
  var r = I(),
    e = 0,
    t = Math.random(),
    n = r((1).toString);
  return (
    (_r = function (a) {
      return "Symbol(" + (a === void 0 ? "" : a) + ")_" + n(++e + t, 36);
    }),
    _r
  );
}
var jr, Ft;
function x() {
  if (Ft) return jr;
  Ft = 1;
  var r = R(),
    e = oa(),
    t = D(),
    n = ua(),
    a = ta(),
    i = na(),
    u = r.Symbol,
    o = e("wks"),
    s = i ? u.for || u : (u && u.withoutSetter) || n;
  return (
    (jr = function (c) {
      return t(o, c) || (o[c] = a && t(u, c) ? u[c] : s("Symbol." + c)), o[c];
    }),
    jr
  );
}
var Ar, Nt;
function ja() {
  if (Nt) return Ar;
  Nt = 1;
  var r = Be(),
    e = w(),
    t = aa(),
    n = wa(),
    a = _a(),
    i = x(),
    u = TypeError,
    o = i("toPrimitive");
  return (
    (Ar = function (s, c) {
      if (!e(s) || t(s)) return s;
      var l = n(s, o),
        f;
      if (l) {
        if ((c === void 0 && (c = "default"), (f = r(l, s, c)), !e(f) || t(f)))
          return f;
        throw new u("Can't convert object to primitive value");
      }
      return c === void 0 && (c = "number"), a(s, c);
    }),
    Ar
  );
}
var Dr, Lt;
function ca() {
  if (Lt) return Dr;
  Lt = 1;
  var r = ja(),
    e = aa();
  return (
    (Dr = function (t) {
      var n = r(t, "string");
      return e(n) ? n : n + "";
    }),
    Dr
  );
}
var Fr, xt;
function sa() {
  if (xt) return Fr;
  xt = 1;
  var r = R(),
    e = w(),
    t = r.document,
    n = e(t) && e(t.createElement);
  return (
    (Fr = function (a) {
      return n ? t.createElement(a) : {};
    }),
    Fr
  );
}
var Nr, Mt;
function fa() {
  if (Mt) return Nr;
  Mt = 1;
  var r = j(),
    e = P(),
    t = sa();
  return (
    (Nr =
      !r &&
      !e(function () {
        return (
          Object.defineProperty(t("div"), "a", {
            get: function () {
              return 7;
            }
          }).a !== 7
        );
      })),
    Nr
  );
}
var Bt;
function la() {
  if (Bt) return Z;
  Bt = 1;
  var r = j(),
    e = Be(),
    t = Ra(),
    n = z(),
    a = Ke(),
    i = ca(),
    u = D(),
    o = fa(),
    s = Object.getOwnPropertyDescriptor;
  return (
    (Z.f = r
      ? s
      : function (l, f) {
          if (((l = a(l)), (f = i(f)), o))
            try {
              return s(l, f);
            } catch {}
          if (u(l, f)) return n(!e(t.f, l, f), l[f]);
        }),
    Z
  );
}
var Lr = {},
  xr,
  Gt;
function Aa() {
  if (Gt) return xr;
  Gt = 1;
  var r = j(),
    e = P();
  return (
    (xr =
      r &&
      e(function () {
        return (
          Object.defineProperty(function () {}, "prototype", {
            value: 42,
            writable: !1
          }).prototype !== 42
        );
      })),
    xr
  );
}
var Mr, Kt;
function va() {
  if (Kt) return Mr;
  Kt = 1;
  var r = w(),
    e = String,
    t = TypeError;
  return (
    (Mr = function (n) {
      if (r(n)) return n;
      throw new t(e(n) + " is not an object");
    }),
    Mr
  );
}
var kt;
function K() {
  if (kt) return Lr;
  kt = 1;
  var r = j(),
    e = fa(),
    t = Aa(),
    n = va(),
    a = ca(),
    i = TypeError,
    u = Object.defineProperty,
    o = Object.getOwnPropertyDescriptor,
    s = "enumerable",
    c = "configurable",
    l = "writable";
  return (
    (Lr.f = r
      ? t
        ? function (p, y, v) {
            if (
              (n(p),
              (y = a(y)),
              n(v),
              typeof p == "function" &&
                y === "prototype" &&
                "value" in v &&
                l in v &&
                !v[l])
            ) {
              var g = o(p, y);
              g &&
                g[l] &&
                ((p[y] = v.value),
                (v = {
                  configurable: c in v ? v[c] : g[c],
                  enumerable: s in v ? v[s] : g[s],
                  writable: !1
                }));
            }
            return u(p, y, v);
          }
        : u
      : function (p, y, v) {
          if ((n(p), (y = a(y)), n(v), e))
            try {
              return u(p, y, v);
            } catch {}
          if ("get" in v || "set" in v) throw new i("Accessors not supported");
          return "value" in v && (p[y] = v.value), p;
        }),
    Lr
  );
}
var Br, Ut;
function M() {
  if (Ut) return Br;
  Ut = 1;
  var r = j(),
    e = K(),
    t = z();
  return (
    (Br = r
      ? function (n, a, i) {
          return e.f(n, a, t(1, i));
        }
      : function (n, a, i) {
          return (n[a] = i), n;
        }),
    Br
  );
}
var Gr = { exports: {} },
  Kr,
  Vt;
function Da() {
  if (Vt) return Kr;
  Vt = 1;
  var r = j(),
    e = D(),
    t = Function.prototype,
    n = r && Object.getOwnPropertyDescriptor,
    a = e(t, "name"),
    i = a && function () {}.name === "something",
    u = a && (!r || (r && n(t, "name").configurable));
  return (Kr = { EXISTS: a, PROPER: i, CONFIGURABLE: u }), Kr;
}
var kr, Wt;
function da() {
  if (Wt) return kr;
  Wt = 1;
  var r = I(),
    e = C(),
    t = We(),
    n = r(Function.toString);
  return (
    e(t.inspectSource) ||
      (t.inspectSource = function (a) {
        return n(a);
      }),
    (kr = t.inspectSource),
    kr
  );
}
var Ur, $t;
function Fa() {
  if ($t) return Ur;
  $t = 1;
  var r = R(),
    e = C(),
    t = r.WeakMap;
  return (Ur = e(t) && /native code/.test(String(t))), Ur;
}
var Vr, Ht;
function Na() {
  if (Ht) return Vr;
  Ht = 1;
  var r = oa(),
    e = ua(),
    t = r("keys");
  return (
    (Vr = function (n) {
      return t[n] || (t[n] = e(n));
    }),
    Vr
  );
}
var Wr, zt;
function ya() {
  return zt || ((zt = 1), (Wr = {})), Wr;
}
var $r, Xt;
function La() {
  if (Xt) return $r;
  Xt = 1;
  var r = Fa(),
    e = R(),
    t = w(),
    n = M(),
    a = D(),
    i = We(),
    u = Na(),
    o = ya(),
    s = "Object already initialized",
    c = e.TypeError,
    l = e.WeakMap,
    f,
    p,
    y,
    v = function (d) {
      return y(d) ? p(d) : f(d, {});
    },
    g = function (d) {
      return function (b) {
        var S;
        if (!t(b) || (S = p(b)).type !== d)
          throw new c("Incompatible receiver, " + d + " required");
        return S;
      };
    };
  if (r || i.state) {
    var h = i.state || (i.state = new l());
    (h.get = h.get),
      (h.has = h.has),
      (h.set = h.set),
      (f = function (d, b) {
        if (h.has(d)) throw new c(s);
        return (b.facade = d), h.set(d, b), b;
      }),
      (p = function (d) {
        return h.get(d) || {};
      }),
      (y = function (d) {
        return h.has(d);
      });
  } else {
    var q = u("state");
    (o[q] = !0),
      (f = function (d, b) {
        if (a(d, q)) throw new c(s);
        return (b.facade = d), n(d, q, b), b;
      }),
      (p = function (d) {
        return a(d, q) ? d[q] : {};
      }),
      (y = function (d) {
        return a(d, q);
      });
  }
  return ($r = { set: f, get: p, has: y, enforce: v, getterFor: g }), $r;
}
var Jt;
function xa() {
  if (Jt) return Gr.exports;
  Jt = 1;
  var r = I(),
    e = P(),
    t = C(),
    n = D(),
    a = j(),
    i = Da().CONFIGURABLE,
    u = da(),
    o = La(),
    s = o.enforce,
    c = o.get,
    l = String,
    f = Object.defineProperty,
    p = r("".slice),
    y = r("".replace),
    v = r([].join),
    g =
      a &&
      !e(function () {
        return f(function () {}, "length", { value: 8 }).length !== 8;
      }),
    h = String(String).split("String"),
    q = (Gr.exports = function (d, b, S) {
      p(l(b), 0, 7) === "Symbol(" &&
        (b = "[" + y(l(b), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
        S && S.getter && (b = "get " + b),
        S && S.setter && (b = "set " + b),
        (!n(d, "name") || (i && d.name !== b)) &&
          (a ? f(d, "name", { value: b, configurable: !0 }) : (d.name = b)),
        g &&
          S &&
          n(S, "arity") &&
          d.length !== S.arity &&
          f(d, "length", { value: S.arity });
      try {
        S && n(S, "constructor") && S.constructor
          ? a && f(d, "prototype", { writable: !1 })
          : d.prototype && (d.prototype = void 0);
      } catch {}
      var m = s(d);
      return (
        n(m, "source") || (m.source = v(h, typeof b == "string" ? b : "")), d
      );
    });
  return (
    (Function.prototype.toString = q(function () {
      return (t(this) && c(this).source) || u(this);
    }, "toString")),
    Gr.exports
  );
}
var Hr, Yt;
function pa() {
  if (Yt) return Hr;
  Yt = 1;
  var r = C(),
    e = K(),
    t = xa(),
    n = Ve();
  return (
    (Hr = function (a, i, u, o) {
      o || (o = {});
      var s = o.enumerable,
        c = o.name !== void 0 ? o.name : i;
      if ((r(u) && t(u, c, o), o.global)) s ? (a[i] = u) : n(i, u);
      else {
        try {
          o.unsafe ? a[i] && (s = !0) : delete a[i];
        } catch {}
        s
          ? (a[i] = u)
          : e.f(a, i, {
              value: u,
              enumerable: !1,
              configurable: !o.nonConfigurable,
              writable: !o.nonWritable
            });
      }
      return a;
    }),
    Hr
  );
}
var zr = {},
  Xr,
  Zt;
function Ma() {
  if (Zt) return Xr;
  Zt = 1;
  var r = Math.ceil,
    e = Math.floor;
  return (
    (Xr =
      Math.trunc ||
      function (n) {
        var a = +n;
        return (a > 0 ? e : r)(a);
      }),
    Xr
  );
}
var Jr, Qt;
function ha() {
  if (Qt) return Jr;
  Qt = 1;
  var r = Ma();
  return (
    (Jr = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : r(t);
    }),
    Jr
  );
}
var Yr, rn;
function Ba() {
  if (rn) return Yr;
  rn = 1;
  var r = ha(),
    e = Math.max,
    t = Math.min;
  return (
    (Yr = function (n, a) {
      var i = r(n);
      return i < 0 ? e(i + a, 0) : t(i, a);
    }),
    Yr
  );
}
var Zr, en;
function Ga() {
  if (en) return Zr;
  en = 1;
  var r = ha(),
    e = Math.min;
  return (
    (Zr = function (t) {
      var n = r(t);
      return n > 0 ? e(n, 9007199254740991) : 0;
    }),
    Zr
  );
}
var Qr, tn;
function He() {
  if (tn) return Qr;
  tn = 1;
  var r = Ga();
  return (
    (Qr = function (e) {
      return r(e.length);
    }),
    Qr
  );
}
var re, nn;
function Ka() {
  if (nn) return re;
  nn = 1;
  var r = Ke(),
    e = Ba(),
    t = He(),
    n = function (a) {
      return function (i, u, o) {
        var s = r(i),
          c = t(s);
        if (c === 0) return !a && -1;
        var l = e(o, c),
          f;
        if (a && u !== u) {
          for (; c > l; ) if (((f = s[l++]), f !== f)) return !0;
        } else
          for (; c > l; l++)
            if ((a || l in s) && s[l] === u) return a || l || 0;
        return !a && -1;
      };
    };
  return (re = { includes: n(!0), indexOf: n(!1) }), re;
}
var ee, an;
function ka() {
  if (an) return ee;
  an = 1;
  var r = I(),
    e = D(),
    t = Ke(),
    n = Ka().indexOf,
    a = ya(),
    i = r([].push);
  return (
    (ee = function (u, o) {
      var s = t(u),
        c = 0,
        l = [],
        f;
      for (f in s) !e(a, f) && e(s, f) && i(l, f);
      for (; o.length > c; ) e(s, (f = o[c++])) && (~n(l, f) || i(l, f));
      return l;
    }),
    ee
  );
}
var te, on;
function Ua() {
  return (
    on ||
      ((on = 1),
      (te = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ])),
    te
  );
}
var un;
function Va() {
  if (un) return zr;
  un = 1;
  var r = ka(),
    e = Ua(),
    t = e.concat("length", "prototype");
  return (
    (zr.f =
      Object.getOwnPropertyNames ||
      function (a) {
        return r(a, t);
      }),
    zr
  );
}
var ne = {},
  cn;
function Wa() {
  return cn || ((cn = 1), (ne.f = Object.getOwnPropertySymbols)), ne;
}
var ae, sn;
function $a() {
  if (sn) return ae;
  sn = 1;
  var r = J(),
    e = I(),
    t = Va(),
    n = Wa(),
    a = va(),
    i = e([].concat);
  return (
    (ae =
      r("Reflect", "ownKeys") ||
      function (o) {
        var s = t.f(a(o)),
          c = n.f;
        return c ? i(s, c(o)) : s;
      }),
    ae
  );
}
var ie, fn;
function ba() {
  if (fn) return ie;
  fn = 1;
  var r = D(),
    e = $a(),
    t = la(),
    n = K();
  return (
    (ie = function (a, i, u) {
      for (var o = e(i), s = n.f, c = t.f, l = 0; l < o.length; l++) {
        var f = o[l];
        !r(a, f) && !(u && r(u, f)) && s(a, f, c(i, f));
      }
    }),
    ie
  );
}
var oe, ln;
function Ha() {
  if (ln) return oe;
  ln = 1;
  var r = P(),
    e = C(),
    t = /#|\.prototype\./,
    n = function (s, c) {
      var l = i[a(s)];
      return l === o ? !0 : l === u ? !1 : e(c) ? r(c) : !!c;
    },
    a = (n.normalize = function (s) {
      return String(s).replace(t, ".").toLowerCase();
    }),
    i = (n.data = {}),
    u = (n.NATIVE = "N"),
    o = (n.POLYFILL = "P");
  return (oe = n), oe;
}
var ue, vn;
function Sa() {
  if (vn) return ue;
  vn = 1;
  var r = R(),
    e = la().f,
    t = M(),
    n = pa(),
    a = Ve(),
    i = ba(),
    u = Ha();
  return (
    (ue = function (o, s) {
      var c = o.target,
        l = o.global,
        f = o.stat,
        p,
        y,
        v,
        g,
        h,
        q;
      if (
        (l
          ? (y = r)
          : f
          ? (y = r[c] || a(c, {}))
          : (y = r[c] && r[c].prototype),
        y)
      )
        for (v in s) {
          if (
            ((h = s[v]),
            o.dontCallGetSet ? ((q = e(y, v)), (g = q && q.value)) : (g = y[v]),
            (p = u(l ? v : c + (f ? "." : "#") + v, o.forced)),
            !p && g !== void 0)
          ) {
            if (typeof h == typeof g) continue;
            i(h, g);
          }
          (o.sham || (g && g.sham)) && t(h, "sham", !0), n(y, v, h, o);
        }
    }),
    ue
  );
}
var ce, dn;
function za() {
  if (dn) return ce;
  dn = 1;
  var r = H(),
    e = Function.prototype,
    t = e.apply,
    n = e.call;
  return (
    (ce =
      (typeof Reflect == "object" && Reflect.apply) ||
      (r
        ? n.bind(t)
        : function () {
            return n.apply(t, arguments);
          })),
    ce
  );
}
var se, yn;
function Xa() {
  if (yn) return se;
  yn = 1;
  var r = I(),
    e = Ue();
  return (
    (se = function (t, n, a) {
      try {
        return r(e(Object.getOwnPropertyDescriptor(t, n)[a]));
      } catch {}
    }),
    se
  );
}
var fe, pn;
function Ja() {
  if (pn) return fe;
  pn = 1;
  var r = w();
  return (
    (fe = function (e) {
      return r(e) || e === null;
    }),
    fe
  );
}
var le, hn;
function Ya() {
  if (hn) return le;
  hn = 1;
  var r = Ja(),
    e = String,
    t = TypeError;
  return (
    (le = function (n) {
      if (r(n)) return n;
      throw new t("Can't set " + e(n) + " as a prototype");
    }),
    le
  );
}
var ve, bn;
function ga() {
  if (bn) return ve;
  bn = 1;
  var r = Xa(),
    e = w(),
    t = Ge(),
    n = Ya();
  return (
    (ve =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var a = !1,
              i = {},
              u;
            try {
              (u = r(Object.prototype, "__proto__", "set")),
                u(i, []),
                (a = i instanceof Array);
            } catch {}
            return function (s, c) {
              return t(s), n(c), e(s) && (a ? u(s, c) : (s.__proto__ = c)), s;
            };
          })()
        : void 0)),
    ve
  );
}
var de, Sn;
function Za() {
  if (Sn) return de;
  Sn = 1;
  var r = K().f;
  return (
    (de = function (e, t, n) {
      n in e ||
        r(e, n, {
          configurable: !0,
          get: function () {
            return t[n];
          },
          set: function (a) {
            t[n] = a;
          }
        });
    }),
    de
  );
}
var ye, gn;
function Qa() {
  if (gn) return ye;
  gn = 1;
  var r = C(),
    e = w(),
    t = ga();
  return (
    (ye = function (n, a, i) {
      var u, o;
      return (
        t &&
          r((u = a.constructor)) &&
          u !== i &&
          e((o = u.prototype)) &&
          o !== i.prototype &&
          t(n, o),
        n
      );
    }),
    ye
  );
}
var pe, mn;
function ze() {
  if (mn) return pe;
  mn = 1;
  var r = x(),
    e = r("toStringTag"),
    t = {};
  return (t[e] = "z"), (pe = String(t) === "[object z]"), pe;
}
var he, On;
function Xe() {
  if (On) return he;
  On = 1;
  var r = ze(),
    e = C(),
    t = X(),
    n = x(),
    a = n("toStringTag"),
    i = Object,
    u =
      t(
        (function () {
          return arguments;
        })()
      ) === "Arguments",
    o = function (s, c) {
      try {
        return s[c];
      } catch {}
    };
  return (
    (he = r
      ? t
      : function (s) {
          var c, l, f;
          return s === void 0
            ? "Undefined"
            : s === null
            ? "Null"
            : typeof (l = o((c = i(s)), a)) == "string"
            ? l
            : u
            ? t(c)
            : (f = t(c)) === "Object" && e(c.callee)
            ? "Arguments"
            : f;
        }),
    he
  );
}
var be, qn;
function ri() {
  if (qn) return be;
  qn = 1;
  var r = Xe(),
    e = String;
  return (
    (be = function (t) {
      if (r(t) === "Symbol")
        throw new TypeError("Cannot convert a Symbol value to a string");
      return e(t);
    }),
    be
  );
}
var Se, En;
function ei() {
  if (En) return Se;
  En = 1;
  var r = ri();
  return (
    (Se = function (e, t) {
      return e === void 0 ? (arguments.length < 2 ? "" : t) : r(e);
    }),
    Se
  );
}
var ge, In;
function ti() {
  if (In) return ge;
  In = 1;
  var r = w(),
    e = M();
  return (
    (ge = function (t, n) {
      r(n) && "cause" in n && e(t, "cause", n.cause);
    }),
    ge
  );
}
var me, Tn;
function ni() {
  if (Tn) return me;
  Tn = 1;
  var r = I(),
    e = Error,
    t = r("".replace),
    n = (function (u) {
      return String(new e(u).stack);
    })("zxcasd"),
    a = /\n\s*at [^:]*:[^\n]*/,
    i = a.test(n);
  return (
    (me = function (u, o) {
      if (i && typeof u == "string" && !e.prepareStackTrace)
        for (; o--; ) u = t(u, a, "");
      return u;
    }),
    me
  );
}
var Oe, Rn;
function ai() {
  if (Rn) return Oe;
  Rn = 1;
  var r = P(),
    e = z();
  return (
    (Oe = !r(function () {
      var t = new Error("a");
      return "stack" in t
        ? (Object.defineProperty(t, "stack", e(1, 7)), t.stack !== 7)
        : !0;
    })),
    Oe
  );
}
var qe, Pn;
function ii() {
  if (Pn) return qe;
  Pn = 1;
  var r = M(),
    e = ni(),
    t = ai(),
    n = Error.captureStackTrace;
  return (
    (qe = function (a, i, u, o) {
      t && (n ? n(a, i) : r(a, "stack", e(u, o)));
    }),
    qe
  );
}
var Ee, Cn;
function oi() {
  if (Cn) return Ee;
  Cn = 1;
  var r = J(),
    e = D(),
    t = M(),
    n = ea(),
    a = ga(),
    i = ba(),
    u = Za(),
    o = Qa(),
    s = ei(),
    c = ti(),
    l = ii(),
    f = j(),
    p = ia();
  return (
    (Ee = function (y, v, g, h) {
      var q = "stackTraceLimit",
        d = h ? 2 : 1,
        b = y.split("."),
        S = b[b.length - 1],
        m = r.apply(null, b);
      if (m) {
        var E = m.prototype;
        if ((!p && e(E, "cause") && delete E.cause, !g)) return m;
        var F = r("Error"),
          O = v(function (T, N) {
            var A = s(h ? N : T, void 0),
              _ = h ? new m(T) : new m();
            return (
              A !== void 0 && t(_, "message", A),
              l(_, O, _.stack, 2),
              this && n(E, this) && o(_, this, O),
              arguments.length > d && c(_, arguments[d]),
              _
            );
          });
        if (
          ((O.prototype = E),
          S !== "Error"
            ? a
              ? a(O, F)
              : i(O, F, { name: !0 })
            : f && q in m && (u(O, m, q), u(O, m, "prepareStackTrace")),
          i(O, m),
          !p)
        )
          try {
            E.name !== S && t(E, "name", S), (E.constructor = O);
          } catch {}
        return O;
      }
    }),
    Ee
  );
}
var wn;
function ui() {
  if (wn) return rt;
  wn = 1;
  var r = Sa(),
    e = R(),
    t = za(),
    n = oi(),
    a = "WebAssembly",
    i = e[a],
    u = new Error("e", { cause: 7 }).cause !== 7,
    o = function (c, l) {
      var f = {};
      (f[c] = n(c, l, u)),
        r({ global: !0, constructor: !0, arity: 1, forced: u }, f);
    },
    s = function (c, l) {
      if (i && i[c]) {
        var f = {};
        (f[c] = n(a + "." + c, l, u)),
          r({ target: a, stat: !0, constructor: !0, arity: 1, forced: u }, f);
      }
    };
  return (
    o("Error", function (c) {
      return function (f) {
        return t(c, this, arguments);
      };
    }),
    o("EvalError", function (c) {
      return function (f) {
        return t(c, this, arguments);
      };
    }),
    o("RangeError", function (c) {
      return function (f) {
        return t(c, this, arguments);
      };
    }),
    o("ReferenceError", function (c) {
      return function (f) {
        return t(c, this, arguments);
      };
    }),
    o("SyntaxError", function (c) {
      return function (f) {
        return t(c, this, arguments);
      };
    }),
    o("TypeError", function (c) {
      return function (f) {
        return t(c, this, arguments);
      };
    }),
    o("URIError", function (c) {
      return function (f) {
        return t(c, this, arguments);
      };
    }),
    s("CompileError", function (c) {
      return function (f) {
        return t(c, this, arguments);
      };
    }),
    s("LinkError", function (c) {
      return function (f) {
        return t(c, this, arguments);
      };
    }),
    s("RuntimeError", function (c) {
      return function (f) {
        return t(c, this, arguments);
      };
    }),
    rt
  );
}
ui();
var _n = {},
  Ie,
  jn;
function ma() {
  if (jn) return Ie;
  jn = 1;
  var r = X();
  return (
    (Ie =
      Array.isArray ||
      function (t) {
        return r(t) === "Array";
      }),
    Ie
  );
}
var Te, An;
function ci() {
  if (An) return Te;
  An = 1;
  var r = TypeError,
    e = 9007199254740991;
  return (
    (Te = function (t) {
      if (t > e) throw r("Maximum allowed index exceeded");
      return t;
    }),
    Te
  );
}
var Re, Dn;
function si() {
  if (Dn) return Re;
  Dn = 1;
  var r = j(),
    e = K(),
    t = z();
  return (
    (Re = function (n, a, i) {
      r ? e.f(n, a, t(0, i)) : (n[a] = i);
    }),
    Re
  );
}
var Pe, Fn;
function fi() {
  if (Fn) return Pe;
  Fn = 1;
  var r = I(),
    e = P(),
    t = C(),
    n = Xe(),
    a = J(),
    i = da(),
    u = function () {},
    o = a("Reflect", "construct"),
    s = /^\s*(?:class|function)\b/,
    c = r(s.exec),
    l = !s.test(u),
    f = function (v) {
      if (!t(v)) return !1;
      try {
        return o(u, [], v), !0;
      } catch {
        return !1;
      }
    },
    p = function (v) {
      if (!t(v)) return !1;
      switch (n(v)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return !1;
      }
      try {
        return l || !!c(s, i(v));
      } catch {
        return !0;
      }
    };
  return (
    (p.sham = !0),
    (Pe =
      !o ||
      e(function () {
        var y;
        return (
          f(f.call) ||
          !f(Object) ||
          !f(function () {
            y = !0;
          }) ||
          y
        );
      })
        ? p
        : f),
    Pe
  );
}
var Ce, Nn;
function li() {
  if (Nn) return Ce;
  Nn = 1;
  var r = ma(),
    e = fi(),
    t = w(),
    n = x(),
    a = n("species"),
    i = Array;
  return (
    (Ce = function (u) {
      var o;
      return (
        r(u) &&
          ((o = u.constructor),
          e(o) && (o === i || r(o.prototype))
            ? (o = void 0)
            : t(o) && ((o = o[a]), o === null && (o = void 0))),
        o === void 0 ? i : o
      );
    }),
    Ce
  );
}
var we, Ln;
function Oa() {
  if (Ln) return we;
  Ln = 1;
  var r = li();
  return (
    (we = function (e, t) {
      return new (r(e))(t === 0 ? 0 : t);
    }),
    we
  );
}
var _e, xn;
function vi() {
  if (xn) return _e;
  xn = 1;
  var r = P(),
    e = x(),
    t = ke(),
    n = e("species");
  return (
    (_e = function (a) {
      return (
        t >= 51 ||
        !r(function () {
          var i = [],
            u = (i.constructor = {});
          return (
            (u[n] = function () {
              return { foo: 1 };
            }),
            i[a](Boolean).foo !== 1
          );
        })
      );
    }),
    _e
  );
}
var Mn;
function di() {
  if (Mn) return _n;
  Mn = 1;
  var r = Sa(),
    e = P(),
    t = ma(),
    n = w(),
    a = $e(),
    i = He(),
    u = ci(),
    o = si(),
    s = Oa(),
    c = vi(),
    l = x(),
    f = ke(),
    p = l("isConcatSpreadable"),
    y =
      f >= 51 ||
      !e(function () {
        var h = [];
        return (h[p] = !1), h.concat()[0] !== h;
      }),
    v = function (h) {
      if (!n(h)) return !1;
      var q = h[p];
      return q !== void 0 ? !!q : t(h);
    },
    g = !y || !c("concat");
  return (
    r(
      { target: "Array", proto: !0, arity: 1, forced: g },
      {
        concat: function (q) {
          var d = a(this),
            b = s(d, 0),
            S = 0,
            m,
            E,
            F,
            O,
            T;
          for (m = -1, F = arguments.length; m < F; m++)
            if (((T = m === -1 ? d : arguments[m]), v(T)))
              for (O = i(T), u(S + O), E = 0; E < O; E++, S++)
                E in T && o(b, S, T[E]);
            else u(S + 1), o(b, S++, T);
          return (b.length = S), b;
        }
      }
    ),
    _n
  );
}
di();
var Bn = {},
  je,
  Gn;
function yi() {
  if (Gn) return je;
  Gn = 1;
  var r = ze(),
    e = Xe();
  return (
    (je = r
      ? {}.toString
      : function () {
          return "[object " + e(this) + "]";
        }),
    je
  );
}
var Kn;
function pi() {
  if (Kn) return Bn;
  Kn = 1;
  var r = ze(),
    e = pa(),
    t = yi();
  return r || e(Object.prototype, "toString", t, { unsafe: !0 }), Bn;
}
pi();
var kn = {},
  Ae,
  Un;
function hi() {
  return (
    Un ||
      ((Un = 1),
      (Ae = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      })),
    Ae
  );
}
var De, Vn;
function bi() {
  if (Vn) return De;
  Vn = 1;
  var r = sa(),
    e = r("span").classList,
    t = e && e.constructor && e.constructor.prototype;
  return (De = t === Object.prototype ? void 0 : t), De;
}
var Fe, Wn;
function Si() {
  if (Wn) return Fe;
  Wn = 1;
  var r = X(),
    e = I();
  return (
    (Fe = function (t) {
      if (r(t) === "Function") return e(t);
    }),
    Fe
  );
}
var Ne, $n;
function gi() {
  if ($n) return Ne;
  $n = 1;
  var r = Si(),
    e = Ue(),
    t = H(),
    n = r(r.bind);
  return (
    (Ne = function (a, i) {
      return (
        e(a),
        i === void 0
          ? a
          : t
          ? n(a, i)
          : function () {
              return a.apply(i, arguments);
            }
      );
    }),
    Ne
  );
}
var Le, Hn;
function mi() {
  if (Hn) return Le;
  Hn = 1;
  var r = gi(),
    e = I(),
    t = Qn(),
    n = $e(),
    a = He(),
    i = Oa(),
    u = e([].push),
    o = function (s) {
      var c = s === 1,
        l = s === 2,
        f = s === 3,
        p = s === 4,
        y = s === 6,
        v = s === 7,
        g = s === 5 || y;
      return function (h, q, d, b) {
        for (
          var S = n(h),
            m = t(S),
            E = a(m),
            F = r(q, d),
            O = 0,
            T = b || i,
            N = c ? T(h, E) : l || v ? T(h, 0) : void 0,
            A,
            _;
          E > O;
          O++
        )
          if ((g || O in m) && ((A = m[O]), (_ = F(A, O, S)), s))
            if (c) N[O] = _;
            else if (_)
              switch (s) {
                case 3:
                  return !0;
                case 5:
                  return A;
                case 6:
                  return O;
                case 2:
                  u(N, A);
              }
            else
              switch (s) {
                case 4:
                  return !1;
                case 7:
                  u(N, A);
              }
        return y ? -1 : f || p ? p : N;
      };
    };
  return (
    (Le = {
      forEach: o(0),
      map: o(1),
      filter: o(2),
      some: o(3),
      every: o(4),
      find: o(5),
      findIndex: o(6),
      filterReject: o(7)
    }),
    Le
  );
}
var xe, zn;
function Oi() {
  if (zn) return xe;
  zn = 1;
  var r = P();
  return (
    (xe = function (e, t) {
      var n = [][e];
      return (
        !!n &&
        r(function () {
          n.call(
            null,
            t ||
              function () {
                return 1;
              },
            1
          );
        })
      );
    }),
    xe
  );
}
var Me, Xn;
function qi() {
  if (Xn) return Me;
  Xn = 1;
  var r = mi().forEach,
    e = Oi(),
    t = e("forEach");
  return (
    (Me = t
      ? [].forEach
      : function (a) {
          return r(this, a, arguments.length > 1 ? arguments[1] : void 0);
        }),
    Me
  );
}
var Jn;
function Ei() {
  if (Jn) return kn;
  Jn = 1;
  var r = R(),
    e = hi(),
    t = bi(),
    n = qi(),
    a = M(),
    i = function (o) {
      if (o && o.forEach !== n)
        try {
          a(o, "forEach", n);
        } catch {
          o.forEach = n;
        }
    };
  for (var u in e) e[u] && i(r[u] && r[u].prototype);
  return i(t), kn;
}
Ei();
/*!
 * el-table-infinite-scroll v3.0.6
 * (c) 2019-2024 yujinpan
 */ function Ii(r, e, t) {
  var n;
  t.forEach(function (a) {
    (n = r.getAttribute(a)),
      n !== null ? e.setAttribute(a, n) : e.removeAttribute(a);
  });
}
/*!
 * el-table-infinite-scroll v3.0.6
 * (c) 2019-2024 yujinpan
 */ var Yn = "[el-table-infinite-scroll]: ",
  $ = ".el-scrollbar__wrap",
  Ti = {
    mounted: function (e, t, n, a) {
      var i = e.querySelector($);
      if (!i) throw new Error("".concat(Yn).concat($, " element not found."));
      (i.style.overflowY = "auto"),
        setTimeout(function () {
          e.style.height ||
            ((i.style.height = "400px"),
            console.warn(
              "".concat(
                Yn,
                "el-table height required, otherwise will set scrollbar default height: 400px"
              )
            )),
            Zn(e, i),
            Y.mounted(i, t, n, a);
        }, 0);
    },
    updated: function (e) {
      Zn(e, e.querySelector($));
    },
    unmounted: function (e) {
      for (
        var t = e.querySelector($),
          n = arguments.length,
          a = new Array(n > 1 ? n - 1 : 0),
          i = 1;
        i < n;
        i++
      )
        a[i - 1] = arguments[i];
      Y.unmounted.apply(Y, [t].concat(a));
    }
  };
function Zn(r, e) {
  Ii(r, e, [
    "infinite-scroll-disabled",
    "infinite-scroll-delay",
    "infinite-scroll-immediate",
    "infinite-scroll-distance"
  ]);
  var t = "infinite-scroll-distance",
    n = +(r.getAttribute(t) || 0);
  e.setAttribute(t, (n < 1 ? 1 : n) + "");
}
/*!
 * el-table-infinite-scroll v3.0.6
 * (c) 2019-2024 yujinpan
 */ var qa = Object.assign(Ti, {
  install: function (e) {
    e.directive("el-table-infinite-scroll", qa);
  }
});
const Ri = { class: "font-medium" },
  Pi = { class: "mb-2" },
  wi = Ea({
    name: "InfiniteScroll",
    __name: "infinite-scroll",
    setup(r) {
      const e = new Array(10).fill({
          date: "2022-08-24",
          name: "RealityBoy",
          age: "18"
        }),
        t = k([]),
        n = k(!1),
        a = k(0),
        i = k(10),
        u = () => {
          n.value ||
            (a.value++,
            a.value <= i.value && (t.value = t.value.concat(e)),
            a.value === i.value && (n.value = !0));
        };
      return (o, s) => {
        const c = B("el-link"),
          l = B("el-switch"),
          f = B("el-table-column"),
          p = B("el-table"),
          y = B("el-card");
        return (
          Qe(),
          Ye(
            y,
            { shadow: "never" },
            {
              header: U(() => [
                V("div", Ri, [
                  s[2] || (s[2] = W(" 表格无限滚动（ ")),
                  L(
                    c,
                    {
                      href: "https://github.com/yujinpan/el-table-infinite-scroll",
                      target: "_blank",
                      style: { margin: "0 5px 4px 0", "font-size": "16px" }
                    },
                    {
                      default: U(() => s[1] || (s[1] = [W(" github地址 ")])),
                      _: 1
                    }
                  ),
                  s[3] || (s[3] = W(" ） "))
                ])
              ]),
              default: U(() => [
                V("div", null, [
                  V("p", Pi, [
                    V(
                      "span",
                      null,
                      "loaded page(total: " +
                        Ze(i.value) +
                        "): " +
                        Ze(a.value) +
                        ", ",
                      1
                    ),
                    s[4] || (s[4] = W(" disabled: ")),
                    L(
                      l,
                      {
                        modelValue: n.value,
                        "onUpdate:modelValue":
                          s[0] || (s[0] = v => (n.value = v)),
                        disabled: a.value >= i.value
                      },
                      null,
                      8,
                      ["modelValue", "disabled"]
                    )
                  ]),
                  Ia(
                    (Qe(),
                    Ye(
                      p,
                      {
                        data: t.value,
                        "infinite-scroll-disabled": n.value,
                        height: "435px"
                      },
                      {
                        default: U(() => [
                          L(f, { type: "index" }),
                          L(f, { prop: "date", label: "date" }),
                          L(f, { prop: "name", label: "name" }),
                          L(f, { prop: "age", label: "age" })
                        ]),
                        _: 1
                      },
                      8,
                      ["data", "infinite-scroll-disabled"]
                    )),
                    [[Ta(qa), u]]
                  )
                ])
              ]),
              _: 1
            }
          )
        );
      };
    }
  });
export { wi as default };
