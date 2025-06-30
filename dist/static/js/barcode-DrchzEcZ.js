import {
  m as Vt,
  d as Ct,
  r as Jt,
  e as Qt,
  g as Wt,
  o as Ce,
  p as Yt,
  q as Zt,
  c as Ge,
  b as q,
  w as j,
  h as W,
  F as Kt,
  k as er,
  a as tr,
  i as qe,
  u as rr
} from "./index-D6DS3gmo.js";
var Y = {},
  N = {},
  Z = {},
  $e;
function M() {
  if ($e) return Z;
  ($e = 1), Object.defineProperty(Z, "__esModule", { value: !0 });
  function s(v, c) {
    if (!(v instanceof c))
      throw new TypeError("Cannot call a class as a function");
  }
  var d = function v(c, h) {
    s(this, v), (this.data = c), (this.text = h.text || c), (this.options = h);
  };
  return (Z.default = d), Z;
}
var Fe;
function nr() {
  if (Fe) return N;
  (Fe = 1),
    Object.defineProperty(N, "__esModule", { value: !0 }),
    (N.CODE39 = void 0);
  var s = (function () {
      function u(y, p) {
        for (var g = 0; g < p.length; g++) {
          var w = p[g];
          (w.enumerable = w.enumerable || !1),
            (w.configurable = !0),
            "value" in w && (w.writable = !0),
            Object.defineProperty(y, w.key, w);
        }
      }
      return function (y, p, g) {
        return p && u(y.prototype, p), g && u(y, g), y;
      };
    })(),
    d = M(),
    v = c(d);
  function c(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function h(u, y) {
    if (!(u instanceof y))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(u, y) {
    if (!u)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return y && (typeof y == "object" || typeof y == "function") ? y : u;
  }
  function l(u, y) {
    if (typeof y != "function" && y !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof y
      );
    (u.prototype = Object.create(y && y.prototype, {
      constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 }
    })),
      y &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(u, y)
          : (u.__proto__ = y));
  }
  var f = (function (u) {
      l(y, u);
      function y(p, g) {
        return (
          h(this, y),
          (p = p.toUpperCase()),
          g.mod43 && (p += r(o(p))),
          _(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, p, g))
        );
      }
      return (
        s(y, [
          {
            key: "encode",
            value: function () {
              for (var g = t("*"), w = 0; w < this.data.length; w++)
                g += t(this.data[w]) + "0";
              return (g += t("*")), { data: g, text: this.text };
            }
          },
          {
            key: "valid",
            value: function () {
              return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
            }
          }
        ]),
        y
      );
    })(v.default),
    a = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "-",
      ".",
      " ",
      "$",
      "/",
      "+",
      "%",
      "*"
    ],
    e = [
      20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645,
      29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301,
      30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385,
      29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477,
      17489, 17681, 20753, 35770
    ];
  function t(u) {
    return n(i(u));
  }
  function n(u) {
    return e[u].toString(2);
  }
  function r(u) {
    return a[u];
  }
  function i(u) {
    return a.indexOf(u);
  }
  function o(u) {
    for (var y = 0, p = 0; p < u.length; p++) y += i(u[p]);
    return (y = y % 43), y;
  }
  return (N.CODE39 = f), N;
}
var I = {},
  K = {},
  ee = {},
  x = {},
  He;
function U() {
  if (He) return x;
  (He = 1), Object.defineProperty(x, "__esModule", { value: !0 });
  var s;
  function d(a, e, t) {
    return (
      e in a
        ? Object.defineProperty(a, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (a[e] = t),
      a
    );
  }
  var v = (x.SET_A = 0),
    c = (x.SET_B = 1),
    h = (x.SET_C = 2);
  x.SHIFT = 98;
  var _ = (x.START_A = 103),
    l = (x.START_B = 104),
    f = (x.START_C = 105);
  return (
    (x.MODULO = 103),
    (x.STOP = 106),
    (x.FNC1 = 207),
    (x.SET_BY_CODE = ((s = {}), d(s, _, v), d(s, l, c), d(s, f, h), s)),
    (x.SWAP = { 101: v, 100: c, 99: h }),
    (x.A_START_CHAR = "Ð"),
    (x.B_START_CHAR = "Ñ"),
    (x.C_START_CHAR = "Ò"),
    (x.A_CHARS = "[\0-_È-Ï]"),
    (x.B_CHARS = "[ -È-Ï]"),
    (x.C_CHARS = "(Ï*[0-9]{2}Ï*)"),
    (x.BARS = [
      11011001100, 11001101100, 11001100110, 10010011e3, 10010001100,
      10001001100, 10011001e3, 10011000100, 10001100100, 11001001e3,
      11001000100, 11000100100, 10110011100, 10011011100, 10011001110,
      10111001100, 10011101100, 10011100110, 11001110010, 11001011100,
      11001001110, 11011100100, 11001110100, 11101101110, 11101001100,
      11100101100, 11100100110, 11101100100, 11100110100, 11100110010,
      11011011e3, 11011000110, 11000110110, 10100011e3, 10001011e3, 10001000110,
      10110001e3, 10001101e3, 10001100010, 11010001e3, 11000101e3, 11000100010,
      10110111e3, 10110001110, 10001101110, 10111011e3, 10111000110,
      10001110110, 11101110110, 11010001110, 11000101110, 11011101e3,
      11011100010, 11011101110, 11101011e3, 11101000110, 11100010110,
      11101101e3, 11101100010, 11100011010, 11101111010, 11001000010,
      11110001010, 1010011e4, 10100001100, 1001011e4, 10010000110, 10000101100,
      10000100110, 1011001e4, 10110000100, 1001101e4, 10011000010, 10000110100,
      10000110010, 11000010010, 1100101e4, 11110111010, 11000010100,
      10001111010, 10100111100, 10010111100, 10010011110, 10111100100,
      10011110100, 10011110010, 11110100100, 11110010100, 11110010010,
      11011011110, 11011110110, 11110110110, 10101111e3, 10100011110,
      10001011110, 10111101e3, 10111100010, 11110101e3, 11110100010,
      10111011110, 10111101110, 11101011110, 11110101110, 11010000100,
      1101001e4, 11010011100, 1100011101011
    ]),
    x
  );
}
var ze;
function Ie() {
  if (ze) return ee;
  (ze = 1), Object.defineProperty(ee, "__esModule", { value: !0 });
  var s = (function () {
      function e(t, n) {
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })(),
    d = M(),
    v = h(d),
    c = U();
  function h(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function f(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  var a = (function (e) {
    f(t, e);
    function t(n, r) {
      _(this, t);
      var i = l(
        this,
        (t.__proto__ || Object.getPrototypeOf(t)).call(this, n.substring(1), r)
      );
      return (
        (i.bytes = n.split("").map(function (o) {
          return o.charCodeAt(0);
        })),
        i
      );
    }
    return (
      s(
        t,
        [
          {
            key: "valid",
            value: function () {
              return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data);
            }
          },
          {
            key: "encode",
            value: function () {
              var r = this.bytes,
                i = r.shift() - 105,
                o = c.SET_BY_CODE[i];
              if (o === void 0)
                throw new RangeError(
                  "The encoding does not start with a start character."
                );
              this.shouldEncodeAsEan128() === !0 && r.unshift(c.FNC1);
              var u = t.next(r, 1, o);
              return {
                text:
                  this.text === this.data
                    ? this.text.replace(/[^\x20-\x7E]/g, "")
                    : this.text,
                data:
                  t.getBar(i) +
                  u.result +
                  t.getBar((u.checksum + i) % c.MODULO) +
                  t.getBar(c.STOP)
              };
            }
          },
          {
            key: "shouldEncodeAsEan128",
            value: function () {
              var r = this.options.ean128 || !1;
              return (
                typeof r == "string" && (r = r.toLowerCase() === "true"), r
              );
            }
          }
        ],
        [
          {
            key: "getBar",
            value: function (r) {
              return c.BARS[r] ? c.BARS[r].toString() : "";
            }
          },
          {
            key: "correctIndex",
            value: function (r, i) {
              if (i === c.SET_A) {
                var o = r.shift();
                return o < 32 ? o + 64 : o - 32;
              } else
                return i === c.SET_B
                  ? r.shift() - 32
                  : (r.shift() - 48) * 10 + r.shift() - 48;
            }
          },
          {
            key: "next",
            value: function (r, i, o) {
              if (!r.length) return { result: "", checksum: 0 };
              var u = void 0,
                y = void 0;
              if (r[0] >= 200) {
                y = r.shift() - 105;
                var p = c.SWAP[y];
                p !== void 0
                  ? (u = t.next(r, i + 1, p))
                  : ((o === c.SET_A || o === c.SET_B) &&
                      y === c.SHIFT &&
                      (r[0] =
                        o === c.SET_A
                          ? r[0] > 95
                            ? r[0] - 96
                            : r[0]
                          : r[0] < 32
                          ? r[0] + 96
                          : r[0]),
                    (u = t.next(r, i + 1, o)));
              } else (y = t.correctIndex(r, o)), (u = t.next(r, i + 1, o));
              var g = t.getBar(y),
                w = y * i;
              return { result: g + u.result, checksum: w + u.checksum };
            }
          }
        ]
      ),
      t
    );
  })(v.default);
  return (ee.default = a), ee;
}
var te = {},
  Ue;
function ir() {
  if (Ue) return te;
  (Ue = 1), Object.defineProperty(te, "__esModule", { value: !0 });
  var s = U(),
    d = function (f) {
      return f.match(new RegExp("^" + s.A_CHARS + "*"))[0].length;
    },
    v = function (f) {
      return f.match(new RegExp("^" + s.B_CHARS + "*"))[0].length;
    },
    c = function (f) {
      return f.match(new RegExp("^" + s.C_CHARS + "*"))[0];
    };
  function h(l, f) {
    var a = f ? s.A_CHARS : s.B_CHARS,
      e = l.match(new RegExp("^(" + a + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
    if (e) return e[1] + "Ì" + _(l.substring(e[1].length));
    var t = l.match(new RegExp("^" + a + "+"))[0];
    return t.length === l.length
      ? l
      : t + String.fromCharCode(f ? 205 : 206) + h(l.substring(t.length), !f);
  }
  function _(l) {
    var f = c(l),
      a = f.length;
    if (a === l.length) return l;
    l = l.substring(a);
    var e = d(l) >= v(l);
    return f + String.fromCharCode(e ? 206 : 205) + h(l, e);
  }
  return (
    (te.default = function (l) {
      var f = void 0,
        a = c(l).length;
      if (a >= 2) f = s.C_START_CHAR + _(l);
      else {
        var e = d(l) > v(l);
        f = (e ? s.A_START_CHAR : s.B_START_CHAR) + h(l, e);
      }
      return f.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, function (t, n) {
        return "Ë" + n;
      });
    }),
    te
  );
}
var Xe;
function ar() {
  if (Xe) return K;
  (Xe = 1), Object.defineProperty(K, "__esModule", { value: !0 });
  var s = Ie(),
    d = h(s),
    v = ir(),
    c = h(v);
  function h(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function f(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  var a = (function (e) {
    f(t, e);
    function t(n, r) {
      if ((_(this, t), /^[\x00-\x7F\xC8-\xD3]+$/.test(n)))
        var i = l(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).call(
            this,
            (0, c.default)(n),
            r
          )
        );
      else
        var i = l(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r)
        );
      return l(i);
    }
    return t;
  })(d.default);
  return (K.default = a), K;
}
var re = {},
  Ve;
function or() {
  if (Ve) return re;
  (Ve = 1), Object.defineProperty(re, "__esModule", { value: !0 });
  var s = (function () {
      function e(t, n) {
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })(),
    d = Ie(),
    v = h(d),
    c = U();
  function h(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function f(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  var a = (function (e) {
    f(t, e);
    function t(n, r) {
      return (
        _(this, t),
        l(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).call(
            this,
            c.A_START_CHAR + n,
            r
          )
        )
      );
    }
    return (
      s(t, [
        {
          key: "valid",
          value: function () {
            return new RegExp("^" + c.A_CHARS + "+$").test(this.data);
          }
        }
      ]),
      t
    );
  })(v.default);
  return (re.default = a), re;
}
var ne = {},
  Je;
function ur() {
  if (Je) return ne;
  (Je = 1), Object.defineProperty(ne, "__esModule", { value: !0 });
  var s = (function () {
      function e(t, n) {
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })(),
    d = Ie(),
    v = h(d),
    c = U();
  function h(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function f(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  var a = (function (e) {
    f(t, e);
    function t(n, r) {
      return (
        _(this, t),
        l(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).call(
            this,
            c.B_START_CHAR + n,
            r
          )
        )
      );
    }
    return (
      s(t, [
        {
          key: "valid",
          value: function () {
            return new RegExp("^" + c.B_CHARS + "+$").test(this.data);
          }
        }
      ]),
      t
    );
  })(v.default);
  return (ne.default = a), ne;
}
var ie = {},
  Qe;
function fr() {
  if (Qe) return ie;
  (Qe = 1), Object.defineProperty(ie, "__esModule", { value: !0 });
  var s = (function () {
      function e(t, n) {
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })(),
    d = Ie(),
    v = h(d),
    c = U();
  function h(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function f(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  var a = (function (e) {
    f(t, e);
    function t(n, r) {
      return (
        _(this, t),
        l(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).call(
            this,
            c.C_START_CHAR + n,
            r
          )
        )
      );
    }
    return (
      s(t, [
        {
          key: "valid",
          value: function () {
            return new RegExp("^" + c.C_CHARS + "+$").test(this.data);
          }
        }
      ]),
      t
    );
  })(v.default);
  return (ie.default = a), ie;
}
var We;
function cr() {
  if (We) return I;
  (We = 1),
    Object.defineProperty(I, "__esModule", { value: !0 }),
    (I.CODE128C = I.CODE128B = I.CODE128A = I.CODE128 = void 0);
  var s = ar(),
    d = a(s),
    v = or(),
    c = a(v),
    h = ur(),
    _ = a(h),
    l = fr(),
    f = a(l);
  function a(e) {
    return e && e.__esModule ? e : { default: e };
  }
  return (
    (I.CODE128 = d.default),
    (I.CODE128A = c.default),
    (I.CODE128B = _.default),
    (I.CODE128C = f.default),
    I
  );
}
var R = {},
  ae = {},
  k = {},
  Ye;
function X() {
  return (
    Ye ||
      ((Ye = 1),
      Object.defineProperty(k, "__esModule", { value: !0 }),
      (k.SIDE_BIN = "101"),
      (k.MIDDLE_BIN = "01010"),
      (k.BINARIES = {
        L: [
          "0001101",
          "0011001",
          "0010011",
          "0111101",
          "0100011",
          "0110001",
          "0101111",
          "0111011",
          "0110111",
          "0001011"
        ],
        G: [
          "0100111",
          "0110011",
          "0011011",
          "0100001",
          "0011101",
          "0111001",
          "0000101",
          "0010001",
          "0001001",
          "0010111"
        ],
        R: [
          "1110010",
          "1100110",
          "1101100",
          "1000010",
          "1011100",
          "1001110",
          "1010000",
          "1000100",
          "1001000",
          "1110100"
        ],
        O: [
          "0001101",
          "0011001",
          "0010011",
          "0111101",
          "0100011",
          "0110001",
          "0101111",
          "0111011",
          "0110111",
          "0001011"
        ],
        E: [
          "0100111",
          "0110011",
          "0011011",
          "0100001",
          "0011101",
          "0111001",
          "0000101",
          "0010001",
          "0001001",
          "0010111"
        ]
      }),
      (k.EAN2_STRUCTURE = ["LL", "LG", "GL", "GG"]),
      (k.EAN5_STRUCTURE = [
        "GGLLL",
        "GLGLL",
        "GLLGL",
        "GLLLG",
        "LGGLL",
        "LLGGL",
        "LLLGG",
        "LGLGL",
        "LGLLG",
        "LLGLG"
      ]),
      (k.EAN13_STRUCTURE = [
        "LLLLLL",
        "LLGLGG",
        "LLGGLG",
        "LLGGGL",
        "LGLLGG",
        "LGGLLG",
        "LGGGLL",
        "LGLGLG",
        "LGLGGL",
        "LGGLGL"
      ])),
    k
  );
}
var oe = {},
  ue = {},
  Ze;
function V() {
  if (Ze) return ue;
  (Ze = 1), Object.defineProperty(ue, "__esModule", { value: !0 });
  var s = X(),
    d = function (c, h, _) {
      var l = c
        .split("")
        .map(function (a, e) {
          return s.BINARIES[h[e]];
        })
        .map(function (a, e) {
          return a ? a[c[e]] : "";
        });
      if (_) {
        var f = c.length - 1;
        l = l.map(function (a, e) {
          return e < f ? a + _ : a;
        });
      }
      return l.join("");
    };
  return (ue.default = d), ue;
}
var Ke;
function Lt() {
  if (Ke) return oe;
  (Ke = 1), Object.defineProperty(oe, "__esModule", { value: !0 });
  var s = (function () {
      function n(r, i) {
        for (var o = 0; o < i.length; o++) {
          var u = i[o];
          (u.enumerable = u.enumerable || !1),
            (u.configurable = !0),
            "value" in u && (u.writable = !0),
            Object.defineProperty(r, u.key, u);
        }
      }
      return function (r, i, o) {
        return i && n(r.prototype, i), o && n(r, o), r;
      };
    })(),
    d = X(),
    v = V(),
    c = l(v),
    h = M(),
    _ = l(h);
  function l(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function f(n, r) {
    if (!(n instanceof r))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(n, r) {
    if (!n)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return r && (typeof r == "object" || typeof r == "function") ? r : n;
  }
  function e(n, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof r
      );
    (n.prototype = Object.create(r && r.prototype, {
      constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 }
    })),
      r &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(n, r)
          : (n.__proto__ = r));
  }
  var t = (function (n) {
    e(r, n);
    function r(i, o) {
      f(this, r);
      var u = a(
        this,
        (r.__proto__ || Object.getPrototypeOf(r)).call(this, i, o)
      );
      return (
        (u.fontSize =
          !o.flat && o.fontSize > o.width * 10 ? o.width * 10 : o.fontSize),
        (u.guardHeight = o.height + u.fontSize / 2 + o.textMargin),
        u
      );
    }
    return (
      s(r, [
        {
          key: "encode",
          value: function () {
            return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
          }
        },
        {
          key: "leftText",
          value: function (o, u) {
            return this.text.substr(o, u);
          }
        },
        {
          key: "leftEncode",
          value: function (o, u) {
            return (0, c.default)(o, u);
          }
        },
        {
          key: "rightText",
          value: function (o, u) {
            return this.text.substr(o, u);
          }
        },
        {
          key: "rightEncode",
          value: function (o, u) {
            return (0, c.default)(o, u);
          }
        },
        {
          key: "encodeGuarded",
          value: function () {
            var o = { fontSize: this.fontSize },
              u = { height: this.guardHeight };
            return [
              { data: d.SIDE_BIN, options: u },
              { data: this.leftEncode(), text: this.leftText(), options: o },
              { data: d.MIDDLE_BIN, options: u },
              { data: this.rightEncode(), text: this.rightText(), options: o },
              { data: d.SIDE_BIN, options: u }
            ];
          }
        },
        {
          key: "encodeFlat",
          value: function () {
            var o = [
              d.SIDE_BIN,
              this.leftEncode(),
              d.MIDDLE_BIN,
              this.rightEncode(),
              d.SIDE_BIN
            ];
            return { data: o.join(""), text: this.text };
          }
        }
      ]),
      r
    );
  })(_.default);
  return (oe.default = t), oe;
}
var et;
function lr() {
  if (et) return ae;
  (et = 1), Object.defineProperty(ae, "__esModule", { value: !0 });
  var s = (function () {
      function n(r, i) {
        for (var o = 0; o < i.length; o++) {
          var u = i[o];
          (u.enumerable = u.enumerable || !1),
            (u.configurable = !0),
            "value" in u && (u.writable = !0),
            Object.defineProperty(r, u.key, u);
        }
      }
      return function (r, i, o) {
        return i && n(r.prototype, i), o && n(r, o), r;
      };
    })(),
    d = function n(r, i, o) {
      r === null && (r = Function.prototype);
      var u = Object.getOwnPropertyDescriptor(r, i);
      if (u === void 0) {
        var y = Object.getPrototypeOf(r);
        return y === null ? void 0 : n(y, i, o);
      } else {
        if ("value" in u) return u.value;
        var p = u.get;
        return p === void 0 ? void 0 : p.call(o);
      }
    },
    v = X(),
    c = Lt(),
    h = _(c);
  function _(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function l(n, r) {
    if (!(n instanceof r))
      throw new TypeError("Cannot call a class as a function");
  }
  function f(n, r) {
    if (!n)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return r && (typeof r == "object" || typeof r == "function") ? r : n;
  }
  function a(n, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof r
      );
    (n.prototype = Object.create(r && r.prototype, {
      constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 }
    })),
      r &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(n, r)
          : (n.__proto__ = r));
  }
  var e = function (r) {
      var i = r
        .substr(0, 12)
        .split("")
        .map(function (o) {
          return +o;
        })
        .reduce(function (o, u, y) {
          return y % 2 ? o + u * 3 : o + u;
        }, 0);
      return (10 - (i % 10)) % 10;
    },
    t = (function (n) {
      a(r, n);
      function r(i, o) {
        l(this, r), i.search(/^[0-9]{12}$/) !== -1 && (i += e(i));
        var u = f(
          this,
          (r.__proto__ || Object.getPrototypeOf(r)).call(this, i, o)
        );
        return (u.lastChar = o.lastChar), u;
      }
      return (
        s(r, [
          {
            key: "valid",
            value: function () {
              return (
                this.data.search(/^[0-9]{13}$/) !== -1 &&
                +this.data[12] === e(this.data)
              );
            }
          },
          {
            key: "leftText",
            value: function () {
              return d(
                r.prototype.__proto__ || Object.getPrototypeOf(r.prototype),
                "leftText",
                this
              ).call(this, 1, 6);
            }
          },
          {
            key: "leftEncode",
            value: function () {
              var o = this.data.substr(1, 6),
                u = v.EAN13_STRUCTURE[this.data[0]];
              return d(
                r.prototype.__proto__ || Object.getPrototypeOf(r.prototype),
                "leftEncode",
                this
              ).call(this, o, u);
            }
          },
          {
            key: "rightText",
            value: function () {
              return d(
                r.prototype.__proto__ || Object.getPrototypeOf(r.prototype),
                "rightText",
                this
              ).call(this, 7, 6);
            }
          },
          {
            key: "rightEncode",
            value: function () {
              var o = this.data.substr(7, 6);
              return d(
                r.prototype.__proto__ || Object.getPrototypeOf(r.prototype),
                "rightEncode",
                this
              ).call(this, o, "RRRRRR");
            }
          },
          {
            key: "encodeGuarded",
            value: function () {
              var o = d(
                r.prototype.__proto__ || Object.getPrototypeOf(r.prototype),
                "encodeGuarded",
                this
              ).call(this);
              return (
                this.options.displayValue &&
                  (o.unshift({
                    data: "000000000000",
                    text: this.text.substr(0, 1),
                    options: { textAlign: "left", fontSize: this.fontSize }
                  }),
                  this.options.lastChar &&
                    (o.push({ data: "00" }),
                    o.push({
                      data: "00000",
                      text: this.options.lastChar,
                      options: { fontSize: this.fontSize }
                    }))),
                o
              );
            }
          }
        ]),
        r
      );
    })(h.default);
  return (ae.default = t), ae;
}
var fe = {},
  tt;
function dr() {
  if (tt) return fe;
  (tt = 1), Object.defineProperty(fe, "__esModule", { value: !0 });
  var s = (function () {
      function t(n, r) {
        for (var i = 0; i < r.length; i++) {
          var o = r[i];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(n, o.key, o);
        }
      }
      return function (n, r, i) {
        return r && t(n.prototype, r), i && t(n, i), n;
      };
    })(),
    d = function t(n, r, i) {
      n === null && (n = Function.prototype);
      var o = Object.getOwnPropertyDescriptor(n, r);
      if (o === void 0) {
        var u = Object.getPrototypeOf(n);
        return u === null ? void 0 : t(u, r, i);
      } else {
        if ("value" in o) return o.value;
        var y = o.get;
        return y === void 0 ? void 0 : y.call(i);
      }
    },
    v = Lt(),
    c = h(v);
  function h(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function _(t, n) {
    if (!(t instanceof n))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(t, n) {
    if (!t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return n && (typeof n == "object" || typeof n == "function") ? n : t;
  }
  function f(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof n
      );
    (t.prototype = Object.create(n && n.prototype, {
      constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
    })),
      n &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(t, n)
          : (t.__proto__ = n));
  }
  var a = function (n) {
      var r = n
        .substr(0, 7)
        .split("")
        .map(function (i) {
          return +i;
        })
        .reduce(function (i, o, u) {
          return u % 2 ? i + o : i + o * 3;
        }, 0);
      return (10 - (r % 10)) % 10;
    },
    e = (function (t) {
      f(n, t);
      function n(r, i) {
        return (
          _(this, n),
          r.search(/^[0-9]{7}$/) !== -1 && (r += a(r)),
          l(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, r, i))
        );
      }
      return (
        s(n, [
          {
            key: "valid",
            value: function () {
              return (
                this.data.search(/^[0-9]{8}$/) !== -1 &&
                +this.data[7] === a(this.data)
              );
            }
          },
          {
            key: "leftText",
            value: function () {
              return d(
                n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                "leftText",
                this
              ).call(this, 0, 4);
            }
          },
          {
            key: "leftEncode",
            value: function () {
              var i = this.data.substr(0, 4);
              return d(
                n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                "leftEncode",
                this
              ).call(this, i, "LLLL");
            }
          },
          {
            key: "rightText",
            value: function () {
              return d(
                n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                "rightText",
                this
              ).call(this, 4, 4);
            }
          },
          {
            key: "rightEncode",
            value: function () {
              var i = this.data.substr(4, 4);
              return d(
                n.prototype.__proto__ || Object.getPrototypeOf(n.prototype),
                "rightEncode",
                this
              ).call(this, i, "RRRR");
            }
          }
        ]),
        n
      );
    })(c.default);
  return (fe.default = e), fe;
}
var ce = {},
  rt;
function hr() {
  if (rt) return ce;
  (rt = 1), Object.defineProperty(ce, "__esModule", { value: !0 });
  var s = (function () {
      function r(i, o) {
        for (var u = 0; u < o.length; u++) {
          var y = o[u];
          (y.enumerable = y.enumerable || !1),
            (y.configurable = !0),
            "value" in y && (y.writable = !0),
            Object.defineProperty(i, y.key, y);
        }
      }
      return function (i, o, u) {
        return o && r(i.prototype, o), u && r(i, u), i;
      };
    })(),
    d = X(),
    v = V(),
    c = l(v),
    h = M(),
    _ = l(h);
  function l(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function f(r, i) {
    if (!(r instanceof i))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(r, i) {
    if (!r)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return i && (typeof i == "object" || typeof i == "function") ? i : r;
  }
  function e(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof i
      );
    (r.prototype = Object.create(i && i.prototype, {
      constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 }
    })),
      i &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(r, i)
          : (r.__proto__ = i));
  }
  var t = function (i) {
      var o = i
        .split("")
        .map(function (u) {
          return +u;
        })
        .reduce(function (u, y, p) {
          return p % 2 ? u + y * 9 : u + y * 3;
        }, 0);
      return o % 10;
    },
    n = (function (r) {
      e(i, r);
      function i(o, u) {
        return (
          f(this, i),
          a(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, o, u))
        );
      }
      return (
        s(i, [
          {
            key: "valid",
            value: function () {
              return this.data.search(/^[0-9]{5}$/) !== -1;
            }
          },
          {
            key: "encode",
            value: function () {
              var u = d.EAN5_STRUCTURE[t(this.data)];
              return {
                data: "1011" + (0, c.default)(this.data, u, "01"),
                text: this.text
              };
            }
          }
        ]),
        i
      );
    })(_.default);
  return (ce.default = n), ce;
}
var le = {},
  nt;
function vr() {
  if (nt) return le;
  (nt = 1), Object.defineProperty(le, "__esModule", { value: !0 });
  var s = (function () {
      function n(r, i) {
        for (var o = 0; o < i.length; o++) {
          var u = i[o];
          (u.enumerable = u.enumerable || !1),
            (u.configurable = !0),
            "value" in u && (u.writable = !0),
            Object.defineProperty(r, u.key, u);
        }
      }
      return function (r, i, o) {
        return i && n(r.prototype, i), o && n(r, o), r;
      };
    })(),
    d = X(),
    v = V(),
    c = l(v),
    h = M(),
    _ = l(h);
  function l(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function f(n, r) {
    if (!(n instanceof r))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(n, r) {
    if (!n)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return r && (typeof r == "object" || typeof r == "function") ? r : n;
  }
  function e(n, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof r
      );
    (n.prototype = Object.create(r && r.prototype, {
      constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 }
    })),
      r &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(n, r)
          : (n.__proto__ = r));
  }
  var t = (function (n) {
    e(r, n);
    function r(i, o) {
      return (
        f(this, r),
        a(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i, o))
      );
    }
    return (
      s(r, [
        {
          key: "valid",
          value: function () {
            return this.data.search(/^[0-9]{2}$/) !== -1;
          }
        },
        {
          key: "encode",
          value: function () {
            var o = d.EAN2_STRUCTURE[parseInt(this.data) % 4];
            return {
              data: "1011" + (0, c.default)(this.data, o, "01"),
              text: this.text
            };
          }
        }
      ]),
      r
    );
  })(_.default);
  return (le.default = t), le;
}
var G = {},
  it;
function Nt() {
  if (it) return G;
  (it = 1), Object.defineProperty(G, "__esModule", { value: !0 });
  var s = (function () {
    function n(r, i) {
      for (var o = 0; o < i.length; o++) {
        var u = i[o];
        (u.enumerable = u.enumerable || !1),
          (u.configurable = !0),
          "value" in u && (u.writable = !0),
          Object.defineProperty(r, u.key, u);
      }
    }
    return function (r, i, o) {
      return i && n(r.prototype, i), o && n(r, o), r;
    };
  })();
  G.checksum = t;
  var d = V(),
    v = _(d),
    c = M(),
    h = _(c);
  function _(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function l(n, r) {
    if (!(n instanceof r))
      throw new TypeError("Cannot call a class as a function");
  }
  function f(n, r) {
    if (!n)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return r && (typeof r == "object" || typeof r == "function") ? r : n;
  }
  function a(n, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof r
      );
    (n.prototype = Object.create(r && r.prototype, {
      constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 }
    })),
      r &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(n, r)
          : (n.__proto__ = r));
  }
  var e = (function (n) {
    a(r, n);
    function r(i, o) {
      l(this, r), i.search(/^[0-9]{11}$/) !== -1 && (i += t(i));
      var u = f(
        this,
        (r.__proto__ || Object.getPrototypeOf(r)).call(this, i, o)
      );
      return (
        (u.displayValue = o.displayValue),
        o.fontSize > o.width * 10
          ? (u.fontSize = o.width * 10)
          : (u.fontSize = o.fontSize),
        (u.guardHeight = o.height + u.fontSize / 2 + o.textMargin),
        u
      );
    }
    return (
      s(r, [
        {
          key: "valid",
          value: function () {
            return (
              this.data.search(/^[0-9]{12}$/) !== -1 &&
              this.data[11] == t(this.data)
            );
          }
        },
        {
          key: "encode",
          value: function () {
            return this.options.flat
              ? this.flatEncoding()
              : this.guardedEncoding();
          }
        },
        {
          key: "flatEncoding",
          value: function () {
            var o = "";
            return (
              (o += "101"),
              (o += (0, v.default)(this.data.substr(0, 6), "LLLLLL")),
              (o += "01010"),
              (o += (0, v.default)(this.data.substr(6, 6), "RRRRRR")),
              (o += "101"),
              { data: o, text: this.text }
            );
          }
        },
        {
          key: "guardedEncoding",
          value: function () {
            var o = [];
            return (
              this.displayValue &&
                o.push({
                  data: "00000000",
                  text: this.text.substr(0, 1),
                  options: { textAlign: "left", fontSize: this.fontSize }
                }),
              o.push({
                data: "101" + (0, v.default)(this.data[0], "L"),
                options: { height: this.guardHeight }
              }),
              o.push({
                data: (0, v.default)(this.data.substr(1, 5), "LLLLL"),
                text: this.text.substr(1, 5),
                options: { fontSize: this.fontSize }
              }),
              o.push({ data: "01010", options: { height: this.guardHeight } }),
              o.push({
                data: (0, v.default)(this.data.substr(6, 5), "RRRRR"),
                text: this.text.substr(6, 5),
                options: { fontSize: this.fontSize }
              }),
              o.push({
                data: (0, v.default)(this.data[11], "R") + "101",
                options: { height: this.guardHeight }
              }),
              this.displayValue &&
                o.push({
                  data: "00000000",
                  text: this.text.substr(11, 1),
                  options: { textAlign: "right", fontSize: this.fontSize }
                }),
              o
            );
          }
        }
      ]),
      r
    );
  })(h.default);
  function t(n) {
    var r = 0,
      i;
    for (i = 1; i < 11; i += 2) r += parseInt(n[i]);
    for (i = 0; i < 11; i += 2) r += parseInt(n[i]) * 3;
    return (10 - (r % 10)) % 10;
  }
  return (G.default = e), G;
}
var de = {},
  at;
function _r() {
  if (at) return de;
  (at = 1), Object.defineProperty(de, "__esModule", { value: !0 });
  var s = (function () {
      function o(u, y) {
        for (var p = 0; p < y.length; p++) {
          var g = y[p];
          (g.enumerable = g.enumerable || !1),
            (g.configurable = !0),
            "value" in g && (g.writable = !0),
            Object.defineProperty(u, g.key, g);
        }
      }
      return function (u, y, p) {
        return y && o(u.prototype, y), p && o(u, p), u;
      };
    })(),
    d = V(),
    v = l(d),
    c = M(),
    h = l(c),
    _ = Nt();
  function l(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function f(o, u) {
    if (!(o instanceof u))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(o, u) {
    if (!o)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return u && (typeof u == "object" || typeof u == "function") ? u : o;
  }
  function e(o, u) {
    if (typeof u != "function" && u !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof u
      );
    (o.prototype = Object.create(u && u.prototype, {
      constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 }
    })),
      u &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(o, u)
          : (o.__proto__ = u));
  }
  var t = [
      "XX00000XXX",
      "XX10000XXX",
      "XX20000XXX",
      "XXX00000XX",
      "XXXX00000X",
      "XXXXX00005",
      "XXXXX00006",
      "XXXXX00007",
      "XXXXX00008",
      "XXXXX00009"
    ],
    n = [
      ["EEEOOO", "OOOEEE"],
      ["EEOEOO", "OOEOEE"],
      ["EEOOEO", "OOEEOE"],
      ["EEOOOE", "OOEEEO"],
      ["EOEEOO", "OEOOEE"],
      ["EOOEEO", "OEEOOE"],
      ["EOOOEE", "OEEEOO"],
      ["EOEOEO", "OEOEOE"],
      ["EOEOOE", "OEOEEO"],
      ["EOOEOE", "OEEOEO"]
    ],
    r = (function (o) {
      e(u, o);
      function u(y, p) {
        f(this, u);
        var g = a(
          this,
          (u.__proto__ || Object.getPrototypeOf(u)).call(this, y, p)
        );
        if (((g.isValid = !1), y.search(/^[0-9]{6}$/) !== -1))
          (g.middleDigits = y),
            (g.upcA = i(y, "0")),
            (g.text = p.text || "" + g.upcA[0] + y + g.upcA[g.upcA.length - 1]),
            (g.isValid = !0);
        else if (y.search(/^[01][0-9]{7}$/) !== -1)
          if (
            ((g.middleDigits = y.substring(1, y.length - 1)),
            (g.upcA = i(g.middleDigits, y[0])),
            g.upcA[g.upcA.length - 1] === y[y.length - 1])
          )
            g.isValid = !0;
          else return a(g);
        else return a(g);
        return (
          (g.displayValue = p.displayValue),
          p.fontSize > p.width * 10
            ? (g.fontSize = p.width * 10)
            : (g.fontSize = p.fontSize),
          (g.guardHeight = p.height + g.fontSize / 2 + p.textMargin),
          g
        );
      }
      return (
        s(u, [
          {
            key: "valid",
            value: function () {
              return this.isValid;
            }
          },
          {
            key: "encode",
            value: function () {
              return this.options.flat
                ? this.flatEncoding()
                : this.guardedEncoding();
            }
          },
          {
            key: "flatEncoding",
            value: function () {
              var p = "";
              return (
                (p += "101"),
                (p += this.encodeMiddleDigits()),
                (p += "010101"),
                { data: p, text: this.text }
              );
            }
          },
          {
            key: "guardedEncoding",
            value: function () {
              var p = [];
              return (
                this.displayValue &&
                  p.push({
                    data: "00000000",
                    text: this.text[0],
                    options: { textAlign: "left", fontSize: this.fontSize }
                  }),
                p.push({ data: "101", options: { height: this.guardHeight } }),
                p.push({
                  data: this.encodeMiddleDigits(),
                  text: this.text.substring(1, 7),
                  options: { fontSize: this.fontSize }
                }),
                p.push({
                  data: "010101",
                  options: { height: this.guardHeight }
                }),
                this.displayValue &&
                  p.push({
                    data: "00000000",
                    text: this.text[7],
                    options: { textAlign: "right", fontSize: this.fontSize }
                  }),
                p
              );
            }
          },
          {
            key: "encodeMiddleDigits",
            value: function () {
              var p = this.upcA[0],
                g = this.upcA[this.upcA.length - 1],
                w = n[parseInt(g)][parseInt(p)];
              return (0, v.default)(this.middleDigits, w);
            }
          }
        ]),
        u
      );
    })(h.default);
  function i(o, u) {
    for (
      var y = parseInt(o[o.length - 1]), p = t[y], g = "", w = 0, B = 0;
      B < p.length;
      B++
    ) {
      var Q = p[B];
      Q === "X" ? (g += o[w++]) : (g += Q);
    }
    return (g = "" + u + g), "" + g + (0, _.checksum)(g);
  }
  return (de.default = r), de;
}
var ot;
function sr() {
  if (ot) return R;
  (ot = 1),
    Object.defineProperty(R, "__esModule", { value: !0 }),
    (R.UPCE = R.UPC = R.EAN2 = R.EAN5 = R.EAN8 = R.EAN13 = void 0);
  var s = lr(),
    d = r(s),
    v = dr(),
    c = r(v),
    h = hr(),
    _ = r(h),
    l = vr(),
    f = r(l),
    a = Nt(),
    e = r(a),
    t = _r(),
    n = r(t);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  return (
    (R.EAN13 = d.default),
    (R.EAN8 = c.default),
    (R.EAN5 = _.default),
    (R.EAN2 = f.default),
    (R.UPC = e.default),
    (R.UPCE = n.default),
    R
  );
}
var D = {},
  he = {},
  C = {},
  ut;
function yr() {
  return (
    ut ||
      ((ut = 1),
      Object.defineProperty(C, "__esModule", { value: !0 }),
      (C.START_BIN = "1010"),
      (C.END_BIN = "11101"),
      (C.BINARIES = [
        "00110",
        "10001",
        "01001",
        "11000",
        "00101",
        "10100",
        "01100",
        "00011",
        "10010",
        "01010"
      ])),
    C
  );
}
var ft;
function Gt() {
  if (ft) return he;
  (ft = 1), Object.defineProperty(he, "__esModule", { value: !0 });
  var s = (function () {
      function e(t, n) {
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })(),
    d = yr(),
    v = M(),
    c = h(v);
  function h(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function _(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function f(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  var a = (function (e) {
    f(t, e);
    function t() {
      return (
        _(this, t),
        l(
          this,
          (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
        )
      );
    }
    return (
      s(t, [
        {
          key: "valid",
          value: function () {
            return this.data.search(/^([0-9]{2})+$/) !== -1;
          }
        },
        {
          key: "encode",
          value: function () {
            var r = this,
              i = this.data
                .match(/.{2}/g)
                .map(function (o) {
                  return r.encodePair(o);
                })
                .join("");
            return { data: d.START_BIN + i + d.END_BIN, text: this.text };
          }
        },
        {
          key: "encodePair",
          value: function (r) {
            var i = d.BINARIES[r[1]];
            return d.BINARIES[r[0]]
              .split("")
              .map(function (o, u) {
                return (o === "1" ? "111" : "1") + (i[u] === "1" ? "000" : "0");
              })
              .join("");
          }
        }
      ]),
      t
    );
  })(c.default);
  return (he.default = a), he;
}
var ve = {},
  ct;
function pr() {
  if (ct) return ve;
  (ct = 1), Object.defineProperty(ve, "__esModule", { value: !0 });
  var s = (function () {
      function e(t, n) {
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })(),
    d = Gt(),
    v = c(d);
  function c(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function h(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function l(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  var f = function (t) {
      var n = t
        .substr(0, 13)
        .split("")
        .map(function (r) {
          return parseInt(r, 10);
        })
        .reduce(function (r, i, o) {
          return r + i * (3 - (o % 2) * 2);
        }, 0);
      return Math.ceil(n / 10) * 10 - n;
    },
    a = (function (e) {
      l(t, e);
      function t(n, r) {
        return (
          h(this, t),
          n.search(/^[0-9]{13}$/) !== -1 && (n += f(n)),
          _(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r))
        );
      }
      return (
        s(t, [
          {
            key: "valid",
            value: function () {
              return (
                this.data.search(/^[0-9]{14}$/) !== -1 &&
                +this.data[13] === f(this.data)
              );
            }
          }
        ]),
        t
      );
    })(v.default);
  return (ve.default = a), ve;
}
var lt;
function gr() {
  if (lt) return D;
  (lt = 1),
    Object.defineProperty(D, "__esModule", { value: !0 }),
    (D.ITF14 = D.ITF = void 0);
  var s = Gt(),
    d = h(s),
    v = pr(),
    c = h(v);
  function h(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  return (D.ITF = d.default), (D.ITF14 = c.default), D;
}
var A = {},
  _e = {},
  dt;
function J() {
  if (dt) return _e;
  (dt = 1), Object.defineProperty(_e, "__esModule", { value: !0 });
  var s = (function () {
      function e(t, n) {
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })(),
    d = M(),
    v = c(d);
  function c(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function h(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function l(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  var f = (function (e) {
    l(t, e);
    function t(n, r) {
      return (
        h(this, t),
        _(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r))
      );
    }
    return (
      s(t, [
        {
          key: "encode",
          value: function () {
            for (var r = "110", i = 0; i < this.data.length; i++) {
              var o = parseInt(this.data[i]),
                u = o.toString(2);
              u = a(u, 4 - u.length);
              for (var y = 0; y < u.length; y++)
                r += u[y] == "0" ? "100" : "110";
            }
            return (r += "1001"), { data: r, text: this.text };
          }
        },
        {
          key: "valid",
          value: function () {
            return this.data.search(/^[0-9]+$/) !== -1;
          }
        }
      ]),
      t
    );
  })(v.default);
  function a(e, t) {
    for (var n = 0; n < t; n++) e = "0" + e;
    return e;
  }
  return (_e.default = f), _e;
}
var se = {},
  $ = {},
  ht;
function ke() {
  if (ht) return $;
  (ht = 1),
    Object.defineProperty($, "__esModule", { value: !0 }),
    ($.mod10 = s),
    ($.mod11 = d);
  function s(v) {
    for (var c = 0, h = 0; h < v.length; h++) {
      var _ = parseInt(v[h]);
      (h + v.length) % 2 === 0
        ? (c += _)
        : (c += ((_ * 2) % 10) + Math.floor((_ * 2) / 10));
    }
    return (10 - (c % 10)) % 10;
  }
  function d(v) {
    for (var c = 0, h = [2, 3, 4, 5, 6, 7], _ = 0; _ < v.length; _++) {
      var l = parseInt(v[v.length - 1 - _]);
      c += h[_ % h.length] * l;
    }
    return (11 - (c % 11)) % 11;
  }
  return $;
}
var vt;
function Er() {
  if (vt) return se;
  (vt = 1), Object.defineProperty(se, "__esModule", { value: !0 });
  var s = J(),
    d = c(s),
    v = ke();
  function c(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function h(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(a, e) {
    if (!a)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function l(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e
      );
    (a.prototype = Object.create(e && e.prototype, {
      constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 }
    })),
      e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(a, e)
          : (a.__proto__ = e));
  }
  var f = (function (a) {
    l(e, a);
    function e(t, n) {
      return (
        h(this, e),
        _(
          this,
          (e.__proto__ || Object.getPrototypeOf(e)).call(
            this,
            t + (0, v.mod10)(t),
            n
          )
        )
      );
    }
    return e;
  })(d.default);
  return (se.default = f), se;
}
var ye = {},
  _t;
function Or() {
  if (_t) return ye;
  (_t = 1), Object.defineProperty(ye, "__esModule", { value: !0 });
  var s = J(),
    d = c(s),
    v = ke();
  function c(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function h(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(a, e) {
    if (!a)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function l(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e
      );
    (a.prototype = Object.create(e && e.prototype, {
      constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 }
    })),
      e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(a, e)
          : (a.__proto__ = e));
  }
  var f = (function (a) {
    l(e, a);
    function e(t, n) {
      return (
        h(this, e),
        _(
          this,
          (e.__proto__ || Object.getPrototypeOf(e)).call(
            this,
            t + (0, v.mod11)(t),
            n
          )
        )
      );
    }
    return e;
  })(d.default);
  return (ye.default = f), ye;
}
var pe = {},
  st;
function br() {
  if (st) return pe;
  (st = 1), Object.defineProperty(pe, "__esModule", { value: !0 });
  var s = J(),
    d = c(s),
    v = ke();
  function c(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function h(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(a, e) {
    if (!a)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function l(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e
      );
    (a.prototype = Object.create(e && e.prototype, {
      constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 }
    })),
      e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(a, e)
          : (a.__proto__ = e));
  }
  var f = (function (a) {
    l(e, a);
    function e(t, n) {
      return (
        h(this, e),
        (t += (0, v.mod10)(t)),
        (t += (0, v.mod10)(t)),
        _(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
      );
    }
    return e;
  })(d.default);
  return (pe.default = f), pe;
}
var ge = {},
  yt;
function mr() {
  if (yt) return ge;
  (yt = 1), Object.defineProperty(ge, "__esModule", { value: !0 });
  var s = J(),
    d = c(s),
    v = ke();
  function c(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function h(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(a, e) {
    if (!a)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function l(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e
      );
    (a.prototype = Object.create(e && e.prototype, {
      constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 }
    })),
      e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(a, e)
          : (a.__proto__ = e));
  }
  var f = (function (a) {
    l(e, a);
    function e(t, n) {
      return (
        h(this, e),
        (t += (0, v.mod11)(t)),
        (t += (0, v.mod10)(t)),
        _(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
      );
    }
    return e;
  })(d.default);
  return (ge.default = f), ge;
}
var pt;
function wr() {
  if (pt) return A;
  (pt = 1),
    Object.defineProperty(A, "__esModule", { value: !0 }),
    (A.MSI1110 = A.MSI1010 = A.MSI11 = A.MSI10 = A.MSI = void 0);
  var s = J(),
    d = t(s),
    v = Er(),
    c = t(v),
    h = Or(),
    _ = t(h),
    l = br(),
    f = t(l),
    a = mr(),
    e = t(a);
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  return (
    (A.MSI = d.default),
    (A.MSI10 = c.default),
    (A.MSI11 = _.default),
    (A.MSI1010 = f.default),
    (A.MSI1110 = e.default),
    A
  );
}
var F = {},
  gt;
function xr() {
  if (gt) return F;
  (gt = 1),
    Object.defineProperty(F, "__esModule", { value: !0 }),
    (F.pharmacode = void 0);
  var s = (function () {
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (e, t, n) {
        return t && a(e.prototype, t), n && a(e, n), e;
      };
    })(),
    d = M(),
    v = c(d);
  function c(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function h(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(a, e) {
    if (!a)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function l(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e
      );
    (a.prototype = Object.create(e && e.prototype, {
      constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 }
    })),
      e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(a, e)
          : (a.__proto__ = e));
  }
  var f = (function (a) {
    l(e, a);
    function e(t, n) {
      h(this, e);
      var r = _(
        this,
        (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
      );
      return (r.number = parseInt(t, 10)), r;
    }
    return (
      s(e, [
        {
          key: "encode",
          value: function () {
            for (var n = this.number, r = ""; !isNaN(n) && n != 0; )
              n % 2 === 0
                ? ((r = "11100" + r), (n = (n - 2) / 2))
                : ((r = "100" + r), (n = (n - 1) / 2));
            return (r = r.slice(0, -2)), { data: r, text: this.text };
          }
        },
        {
          key: "valid",
          value: function () {
            return this.number >= 3 && this.number <= 131070;
          }
        }
      ]),
      e
    );
  })(v.default);
  return (F.pharmacode = f), F;
}
var H = {},
  Et;
function Sr() {
  if (Et) return H;
  (Et = 1),
    Object.defineProperty(H, "__esModule", { value: !0 }),
    (H.codabar = void 0);
  var s = (function () {
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (e, t, n) {
        return t && a(e.prototype, t), n && a(e, n), e;
      };
    })(),
    d = M(),
    v = c(d);
  function c(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function h(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(a, e) {
    if (!a)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function l(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e
      );
    (a.prototype = Object.create(e && e.prototype, {
      constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 }
    })),
      e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(a, e)
          : (a.__proto__ = e));
  }
  var f = (function (a) {
    l(e, a);
    function e(t, n) {
      h(this, e), t.search(/^[0-9\-\$\:\.\+\/]+$/) === 0 && (t = "A" + t + "A");
      var r = _(
        this,
        (e.__proto__ || Object.getPrototypeOf(e)).call(this, t.toUpperCase(), n)
      );
      return (r.text = r.options.text || r.text.replace(/[A-D]/g, "")), r;
    }
    return (
      s(e, [
        {
          key: "valid",
          value: function () {
            return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
          }
        },
        {
          key: "encode",
          value: function () {
            for (
              var n = [], r = this.getEncodings(), i = 0;
              i < this.data.length;
              i++
            )
              n.push(r[this.data.charAt(i)]),
                i !== this.data.length - 1 && n.push("0");
            return { text: this.text, data: n.join("") };
          }
        },
        {
          key: "getEncodings",
          value: function () {
            return {
              0: "101010011",
              1: "101011001",
              2: "101001011",
              3: "110010101",
              4: "101101001",
              5: "110101001",
              6: "100101011",
              7: "100101101",
              8: "100110101",
              9: "110100101",
              "-": "101001101",
              $: "101100101",
              ":": "1101011011",
              "/": "1101101011",
              ".": "1101101101",
              "+": "1011011011",
              A: "1011001001",
              B: "1001001011",
              C: "1010010011",
              D: "1010011001"
            };
          }
        }
      ]),
      e
    );
  })(v.default);
  return (H.codabar = f), H;
}
var z = {},
  Ot;
function Rr() {
  if (Ot) return z;
  (Ot = 1),
    Object.defineProperty(z, "__esModule", { value: !0 }),
    (z.GenericBarcode = void 0);
  var s = (function () {
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (e, t, n) {
        return t && a(e.prototype, t), n && a(e, n), e;
      };
    })(),
    d = M(),
    v = c(d);
  function c(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function h(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function _(a, e) {
    if (!a)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function l(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e
      );
    (a.prototype = Object.create(e && e.prototype, {
      constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 }
    })),
      e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(a, e)
          : (a.__proto__ = e));
  }
  var f = (function (a) {
    l(e, a);
    function e(t, n) {
      return (
        h(this, e),
        _(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
      );
    }
    return (
      s(e, [
        {
          key: "encode",
          value: function () {
            return {
              data: "10101010101010101010101010101010101010101",
              text: this.text
            };
          }
        },
        {
          key: "valid",
          value: function () {
            return !0;
          }
        }
      ]),
      e
    );
  })(v.default);
  return (z.GenericBarcode = f), z;
}
var bt;
function Ar() {
  if (bt) return Y;
  (bt = 1), Object.defineProperty(Y, "__esModule", { value: !0 });
  var s = nr(),
    d = cr(),
    v = sr(),
    c = gr(),
    h = wr(),
    _ = xr(),
    l = Sr(),
    f = Rr();
  return (
    (Y.default = {
      CODE39: s.CODE39,
      CODE128: d.CODE128,
      CODE128A: d.CODE128A,
      CODE128B: d.CODE128B,
      CODE128C: d.CODE128C,
      EAN13: v.EAN13,
      EAN8: v.EAN8,
      EAN5: v.EAN5,
      EAN2: v.EAN2,
      UPC: v.UPC,
      UPCE: v.UPCE,
      ITF14: c.ITF14,
      ITF: c.ITF,
      MSI: h.MSI,
      MSI10: h.MSI10,
      MSI11: h.MSI11,
      MSI1010: h.MSI1010,
      MSI1110: h.MSI1110,
      pharmacode: _.pharmacode,
      codabar: l.codabar,
      GenericBarcode: f.GenericBarcode
    }),
    Y
  );
}
var Ee = {},
  mt;
function De() {
  if (mt) return Ee;
  (mt = 1), Object.defineProperty(Ee, "__esModule", { value: !0 });
  var s =
    Object.assign ||
    function (d) {
      for (var v = 1; v < arguments.length; v++) {
        var c = arguments[v];
        for (var h in c)
          Object.prototype.hasOwnProperty.call(c, h) && (d[h] = c[h]);
      }
      return d;
    };
  return (
    (Ee.default = function (d, v) {
      return s({}, d, v);
    }),
    Ee
  );
}
var Oe = {},
  wt;
function Pr() {
  if (wt) return Oe;
  (wt = 1),
    Object.defineProperty(Oe, "__esModule", { value: !0 }),
    (Oe.default = s);
  function s(d) {
    var v = [];
    function c(h) {
      if (Array.isArray(h)) for (var _ = 0; _ < h.length; _++) c(h[_]);
      else (h.text = h.text || ""), (h.data = h.data || ""), v.push(h);
    }
    return c(d), v;
  }
  return Oe;
}
var be = {},
  xt;
function Tr() {
  if (xt) return be;
  (xt = 1),
    Object.defineProperty(be, "__esModule", { value: !0 }),
    (be.default = s);
  function s(d) {
    return (
      (d.marginTop = d.marginTop || d.margin),
      (d.marginBottom = d.marginBottom || d.margin),
      (d.marginRight = d.marginRight || d.margin),
      (d.marginLeft = d.marginLeft || d.margin),
      d
    );
  }
  return be;
}
var me = {},
  we = {},
  xe = {},
  St;
function $t() {
  if (St) return xe;
  (St = 1),
    Object.defineProperty(xe, "__esModule", { value: !0 }),
    (xe.default = s);
  function s(d) {
    var v = [
      "width",
      "height",
      "textMargin",
      "fontSize",
      "margin",
      "marginTop",
      "marginBottom",
      "marginLeft",
      "marginRight"
    ];
    for (var c in v)
      v.hasOwnProperty(c) &&
        ((c = v[c]), typeof d[c] == "string" && (d[c] = parseInt(d[c], 10)));
    return (
      typeof d.displayValue == "string" &&
        (d.displayValue = d.displayValue != "false"),
      d
    );
  }
  return xe;
}
var Se = {},
  Rt;
function Ft() {
  if (Rt) return Se;
  (Rt = 1), Object.defineProperty(Se, "__esModule", { value: !0 });
  var s = {
    width: 2,
    height: 100,
    format: "auto",
    displayValue: !0,
    fontOptions: "",
    font: "monospace",
    text: void 0,
    textAlign: "center",
    textPosition: "bottom",
    textMargin: 2,
    fontSize: 20,
    background: "#ffffff",
    lineColor: "#000000",
    margin: 10,
    marginTop: void 0,
    marginBottom: void 0,
    marginLeft: void 0,
    marginRight: void 0,
    valid: function () {}
  };
  return (Se.default = s), Se;
}
var At;
function Mr() {
  if (At) return we;
  (At = 1), Object.defineProperty(we, "__esModule", { value: !0 });
  var s = $t(),
    d = h(s),
    v = Ft(),
    c = h(v);
  function h(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function _(l) {
    var f = {};
    for (var a in c.default)
      c.default.hasOwnProperty(a) &&
        (l.hasAttribute("jsbarcode-" + a.toLowerCase()) &&
          (f[a] = l.getAttribute("jsbarcode-" + a.toLowerCase())),
        l.hasAttribute("data-" + a.toLowerCase()) &&
          (f[a] = l.getAttribute("data-" + a.toLowerCase())));
    return (
      (f.value =
        l.getAttribute("jsbarcode-value") || l.getAttribute("data-value")),
      (f = (0, d.default)(f)),
      f
    );
  }
  return (we.default = _), we;
}
var Re = {},
  Ae = {},
  P = {},
  Pt;
function Ht() {
  if (Pt) return P;
  (Pt = 1),
    Object.defineProperty(P, "__esModule", { value: !0 }),
    (P.getTotalWidthOfEncodings =
      P.calculateEncodingAttributes =
      P.getBarcodePadding =
      P.getEncodingHeight =
      P.getMaximumHeightOfEncodings =
        void 0);
  var s = De(),
    d = v(s);
  function v(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function c(e, t) {
    return (
      t.height +
      (t.displayValue && e.text.length > 0 ? t.fontSize + t.textMargin : 0) +
      t.marginTop +
      t.marginBottom
    );
  }
  function h(e, t, n) {
    if (n.displayValue && t < e) {
      if (n.textAlign == "center") return Math.floor((e - t) / 2);
      if (n.textAlign == "left") return 0;
      if (n.textAlign == "right") return Math.floor(e - t);
    }
    return 0;
  }
  function _(e, t, n) {
    for (var r = 0; r < e.length; r++) {
      var i = e[r],
        o = (0, d.default)(t, i.options),
        u;
      o.displayValue ? (u = a(i.text, o, n)) : (u = 0);
      var y = i.data.length * o.width;
      (i.width = Math.ceil(Math.max(u, y))),
        (i.height = c(i, o)),
        (i.barcodePadding = h(u, y, o));
    }
  }
  function l(e) {
    for (var t = 0, n = 0; n < e.length; n++) t += e[n].width;
    return t;
  }
  function f(e) {
    for (var t = 0, n = 0; n < e.length; n++)
      e[n].height > t && (t = e[n].height);
    return t;
  }
  function a(e, t, n) {
    var r;
    if (n) r = n;
    else if (typeof document < "u")
      r = document.createElement("canvas").getContext("2d");
    else return 0;
    r.font = t.fontOptions + " " + t.fontSize + "px " + t.font;
    var i = r.measureText(e);
    if (!i) return 0;
    var o = i.width;
    return o;
  }
  return (
    (P.getMaximumHeightOfEncodings = f),
    (P.getEncodingHeight = c),
    (P.getBarcodePadding = h),
    (P.calculateEncodingAttributes = _),
    (P.getTotalWidthOfEncodings = l),
    P
  );
}
var Tt;
function Ir() {
  if (Tt) return Ae;
  (Tt = 1), Object.defineProperty(Ae, "__esModule", { value: !0 });
  var s = (function () {
      function f(a, e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(a, n.key, n);
        }
      }
      return function (a, e, t) {
        return e && f(a.prototype, e), t && f(a, t), a;
      };
    })(),
    d = De(),
    v = h(d),
    c = Ht();
  function h(f) {
    return f && f.__esModule ? f : { default: f };
  }
  function _(f, a) {
    if (!(f instanceof a))
      throw new TypeError("Cannot call a class as a function");
  }
  var l = (function () {
    function f(a, e, t) {
      _(this, f), (this.canvas = a), (this.encodings = e), (this.options = t);
    }
    return (
      s(f, [
        {
          key: "render",
          value: function () {
            if (!this.canvas.getContext)
              throw new Error("The browser does not support canvas.");
            this.prepareCanvas();
            for (var e = 0; e < this.encodings.length; e++) {
              var t = (0, v.default)(this.options, this.encodings[e].options);
              this.drawCanvasBarcode(t, this.encodings[e]),
                this.drawCanvasText(t, this.encodings[e]),
                this.moveCanvasDrawing(this.encodings[e]);
            }
            this.restoreCanvas();
          }
        },
        {
          key: "prepareCanvas",
          value: function () {
            var e = this.canvas.getContext("2d");
            e.save(),
              (0, c.calculateEncodingAttributes)(
                this.encodings,
                this.options,
                e
              );
            var t = (0, c.getTotalWidthOfEncodings)(this.encodings),
              n = (0, c.getMaximumHeightOfEncodings)(this.encodings);
            (this.canvas.width =
              t + this.options.marginLeft + this.options.marginRight),
              (this.canvas.height = n),
              e.clearRect(0, 0, this.canvas.width, this.canvas.height),
              this.options.background &&
                ((e.fillStyle = this.options.background),
                e.fillRect(0, 0, this.canvas.width, this.canvas.height)),
              e.translate(this.options.marginLeft, 0);
          }
        },
        {
          key: "drawCanvasBarcode",
          value: function (e, t) {
            var n = this.canvas.getContext("2d"),
              r = t.data,
              i;
            e.textPosition == "top"
              ? (i = e.marginTop + e.fontSize + e.textMargin)
              : (i = e.marginTop),
              (n.fillStyle = e.lineColor);
            for (var o = 0; o < r.length; o++) {
              var u = o * e.width + t.barcodePadding;
              r[o] === "1"
                ? n.fillRect(u, i, e.width, e.height)
                : r[o] && n.fillRect(u, i, e.width, e.height * r[o]);
            }
          }
        },
        {
          key: "drawCanvasText",
          value: function (e, t) {
            var n = this.canvas.getContext("2d"),
              r = e.fontOptions + " " + e.fontSize + "px " + e.font;
            if (e.displayValue) {
              var i, o;
              e.textPosition == "top"
                ? (o = e.marginTop + e.fontSize - e.textMargin)
                : (o = e.height + e.textMargin + e.marginTop + e.fontSize),
                (n.font = r),
                e.textAlign == "left" || t.barcodePadding > 0
                  ? ((i = 0), (n.textAlign = "left"))
                  : e.textAlign == "right"
                  ? ((i = t.width - 1), (n.textAlign = "right"))
                  : ((i = t.width / 2), (n.textAlign = "center")),
                n.fillText(t.text, i, o);
            }
          }
        },
        {
          key: "moveCanvasDrawing",
          value: function (e) {
            var t = this.canvas.getContext("2d");
            t.translate(e.width, 0);
          }
        },
        {
          key: "restoreCanvas",
          value: function () {
            var e = this.canvas.getContext("2d");
            e.restore();
          }
        }
      ]),
      f
    );
  })();
  return (Ae.default = l), Ae;
}
var Pe = {},
  Mt;
function kr() {
  if (Mt) return Pe;
  (Mt = 1), Object.defineProperty(Pe, "__esModule", { value: !0 });
  var s = (function () {
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (e, t, n) {
        return t && a(e.prototype, t), n && a(e, n), e;
      };
    })(),
    d = De(),
    v = h(d),
    c = Ht();
  function h(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function _(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  var l = "http://www.w3.org/2000/svg",
    f = (function () {
      function a(e, t, n) {
        _(this, a),
          (this.svg = e),
          (this.encodings = t),
          (this.options = n),
          (this.document = n.xmlDocument || document);
      }
      return (
        s(a, [
          {
            key: "render",
            value: function () {
              var t = this.options.marginLeft;
              this.prepareSVG();
              for (var n = 0; n < this.encodings.length; n++) {
                var r = this.encodings[n],
                  i = (0, v.default)(this.options, r.options),
                  o = this.createGroup(t, i.marginTop, this.svg);
                this.setGroupOptions(o, i),
                  this.drawSvgBarcode(o, i, r),
                  this.drawSVGText(o, i, r),
                  (t += r.width);
              }
            }
          },
          {
            key: "prepareSVG",
            value: function () {
              for (; this.svg.firstChild; )
                this.svg.removeChild(this.svg.firstChild);
              (0, c.calculateEncodingAttributes)(this.encodings, this.options);
              var t = (0, c.getTotalWidthOfEncodings)(this.encodings),
                n = (0, c.getMaximumHeightOfEncodings)(this.encodings),
                r = t + this.options.marginLeft + this.options.marginRight;
              this.setSvgAttributes(r, n),
                this.options.background &&
                  this.drawRect(0, 0, r, n, this.svg).setAttribute(
                    "style",
                    "fill:" + this.options.background + ";"
                  );
            }
          },
          {
            key: "drawSvgBarcode",
            value: function (t, n, r) {
              var i = r.data,
                o;
              n.textPosition == "top"
                ? (o = n.fontSize + n.textMargin)
                : (o = 0);
              for (var u = 0, y = 0, p = 0; p < i.length; p++)
                (y = p * n.width + r.barcodePadding),
                  i[p] === "1"
                    ? u++
                    : u > 0 &&
                      (this.drawRect(
                        y - n.width * u,
                        o,
                        n.width * u,
                        n.height,
                        t
                      ),
                      (u = 0));
              u > 0 &&
                this.drawRect(
                  y - n.width * (u - 1),
                  o,
                  n.width * u,
                  n.height,
                  t
                );
            }
          },
          {
            key: "drawSVGText",
            value: function (t, n, r) {
              var i = this.document.createElementNS(l, "text");
              if (n.displayValue) {
                var o, u;
                i.setAttribute(
                  "style",
                  "font:" + n.fontOptions + " " + n.fontSize + "px " + n.font
                ),
                  n.textPosition == "top"
                    ? (u = n.fontSize - n.textMargin)
                    : (u = n.height + n.textMargin + n.fontSize),
                  n.textAlign == "left" || r.barcodePadding > 0
                    ? ((o = 0), i.setAttribute("text-anchor", "start"))
                    : n.textAlign == "right"
                    ? ((o = r.width - 1), i.setAttribute("text-anchor", "end"))
                    : ((o = r.width / 2),
                      i.setAttribute("text-anchor", "middle")),
                  i.setAttribute("x", o),
                  i.setAttribute("y", u),
                  i.appendChild(this.document.createTextNode(r.text)),
                  t.appendChild(i);
              }
            }
          },
          {
            key: "setSvgAttributes",
            value: function (t, n) {
              var r = this.svg;
              r.setAttribute("width", t + "px"),
                r.setAttribute("height", n + "px"),
                r.setAttribute("x", "0px"),
                r.setAttribute("y", "0px"),
                r.setAttribute("viewBox", "0 0 " + t + " " + n),
                r.setAttribute("xmlns", l),
                r.setAttribute("version", "1.1"),
                r.setAttribute("style", "transform: translate(0,0)");
            }
          },
          {
            key: "createGroup",
            value: function (t, n, r) {
              var i = this.document.createElementNS(l, "g");
              return (
                i.setAttribute("transform", "translate(" + t + ", " + n + ")"),
                r.appendChild(i),
                i
              );
            }
          },
          {
            key: "setGroupOptions",
            value: function (t, n) {
              t.setAttribute("style", "fill:" + n.lineColor + ";");
            }
          },
          {
            key: "drawRect",
            value: function (t, n, r, i, o) {
              var u = this.document.createElementNS(l, "rect");
              return (
                u.setAttribute("x", t),
                u.setAttribute("y", n),
                u.setAttribute("width", r),
                u.setAttribute("height", i),
                o.appendChild(u),
                u
              );
            }
          }
        ]),
        a
      );
    })();
  return (Pe.default = f), Pe;
}
var Te = {},
  It;
function Dr() {
  if (It) return Te;
  (It = 1), Object.defineProperty(Te, "__esModule", { value: !0 });
  var s = (function () {
    function c(h, _) {
      for (var l = 0; l < _.length; l++) {
        var f = _[l];
        (f.enumerable = f.enumerable || !1),
          (f.configurable = !0),
          "value" in f && (f.writable = !0),
          Object.defineProperty(h, f.key, f);
      }
    }
    return function (h, _, l) {
      return _ && c(h.prototype, _), l && c(h, l), h;
    };
  })();
  function d(c, h) {
    if (!(c instanceof h))
      throw new TypeError("Cannot call a class as a function");
  }
  var v = (function () {
    function c(h, _, l) {
      d(this, c), (this.object = h), (this.encodings = _), (this.options = l);
    }
    return (
      s(c, [
        {
          key: "render",
          value: function () {
            this.object.encodings = this.encodings;
          }
        }
      ]),
      c
    );
  })();
  return (Te.default = v), Te;
}
var kt;
function Br() {
  if (kt) return Re;
  (kt = 1), Object.defineProperty(Re, "__esModule", { value: !0 });
  var s = Ir(),
    d = l(s),
    v = kr(),
    c = l(v),
    h = Dr(),
    _ = l(h);
  function l(f) {
    return f && f.__esModule ? f : { default: f };
  }
  return (
    (Re.default = {
      CanvasRenderer: d.default,
      SVGRenderer: c.default,
      ObjectRenderer: _.default
    }),
    Re
  );
}
var L = {},
  Dt;
function zt() {
  if (Dt) return L;
  (Dt = 1), Object.defineProperty(L, "__esModule", { value: !0 });
  function s(l, f) {
    if (!(l instanceof f))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(l, f) {
    if (!l)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return f && (typeof f == "object" || typeof f == "function") ? f : l;
  }
  function v(l, f) {
    if (typeof f != "function" && f !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof f
      );
    (l.prototype = Object.create(f && f.prototype, {
      constructor: { value: l, enumerable: !1, writable: !0, configurable: !0 }
    })),
      f &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(l, f)
          : (l.__proto__ = f));
  }
  var c = (function (l) {
      v(f, l);
      function f(a, e) {
        s(this, f);
        var t = d(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this));
        return (
          (t.name = "InvalidInputException"),
          (t.symbology = a),
          (t.input = e),
          (t.message =
            '"' + t.input + '" is not a valid input for ' + t.symbology),
          t
        );
      }
      return f;
    })(Error),
    h = (function (l) {
      v(f, l);
      function f() {
        s(this, f);
        var a = d(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this));
        return (
          (a.name = "InvalidElementException"),
          (a.message = "Not supported type to render on"),
          a
        );
      }
      return f;
    })(Error),
    _ = (function (l) {
      v(f, l);
      function f() {
        s(this, f);
        var a = d(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this));
        return (
          (a.name = "NoElementException"),
          (a.message = "No element to render on."),
          a
        );
      }
      return f;
    })(Error);
  return (
    (L.InvalidInputException = c),
    (L.InvalidElementException = h),
    (L.NoElementException = _),
    L
  );
}
var Bt;
function qr() {
  if (Bt) return me;
  (Bt = 1), Object.defineProperty(me, "__esModule", { value: !0 });
  var s =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          },
    d = Mr(),
    v = l(d),
    c = Br(),
    h = l(c),
    _ = zt();
  function l(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function f(t) {
    if (typeof t == "string") return a(t);
    if (Array.isArray(t)) {
      for (var n = [], r = 0; r < t.length; r++) n.push(f(t[r]));
      return n;
    } else {
      if (typeof HTMLCanvasElement < "u" && t instanceof HTMLImageElement)
        return e(t);
      if (
        (t && t.nodeName && t.nodeName.toLowerCase() === "svg") ||
        (typeof SVGElement < "u" && t instanceof SVGElement)
      )
        return {
          element: t,
          options: (0, v.default)(t),
          renderer: h.default.SVGRenderer
        };
      if (typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement)
        return {
          element: t,
          options: (0, v.default)(t),
          renderer: h.default.CanvasRenderer
        };
      if (t && t.getContext)
        return { element: t, renderer: h.default.CanvasRenderer };
      if (
        t &&
        (typeof t > "u" ? "undefined" : s(t)) === "object" &&
        !t.nodeName
      )
        return { element: t, renderer: h.default.ObjectRenderer };
      throw new _.InvalidElementException();
    }
  }
  function a(t) {
    var n = document.querySelectorAll(t);
    if (n.length !== 0) {
      for (var r = [], i = 0; i < n.length; i++) r.push(f(n[i]));
      return r;
    }
  }
  function e(t) {
    var n = document.createElement("canvas");
    return {
      element: n,
      options: (0, v.default)(t),
      renderer: h.default.CanvasRenderer,
      afterRender: function () {
        t.setAttribute("src", n.toDataURL());
      }
    };
  }
  return (me.default = f), me;
}
var Me = {},
  qt;
function jr() {
  if (qt) return Me;
  (qt = 1), Object.defineProperty(Me, "__esModule", { value: !0 });
  var s = (function () {
    function c(h, _) {
      for (var l = 0; l < _.length; l++) {
        var f = _[l];
        (f.enumerable = f.enumerable || !1),
          (f.configurable = !0),
          "value" in f && (f.writable = !0),
          Object.defineProperty(h, f.key, f);
      }
    }
    return function (h, _, l) {
      return _ && c(h.prototype, _), l && c(h, l), h;
    };
  })();
  function d(c, h) {
    if (!(c instanceof h))
      throw new TypeError("Cannot call a class as a function");
  }
  var v = (function () {
    function c(h) {
      d(this, c), (this.api = h);
    }
    return (
      s(c, [
        {
          key: "handleCatch",
          value: function (_) {
            if (_.name === "InvalidInputException")
              if (this.api._options.valid !== this.api._defaults.valid)
                this.api._options.valid(!1);
              else throw _.message;
            else throw _;
            this.api.render = function () {};
          }
        },
        {
          key: "wrapBarcodeCall",
          value: function (_) {
            try {
              var l = _.apply(void 0, arguments);
              return this.api._options.valid(!0), l;
            } catch (f) {
              return this.handleCatch(f), this.api;
            }
          }
        }
      ]),
      c
    );
  })();
  return (Me.default = v), Me;
}
var je, jt;
function Cr() {
  if (jt) return je;
  jt = 1;
  var s = Ar(),
    d = p(s),
    v = De(),
    c = p(v),
    h = Pr(),
    _ = p(h),
    l = Tr(),
    f = p(l),
    a = qr(),
    e = p(a),
    t = $t(),
    n = p(t),
    r = jr(),
    i = p(r),
    o = zt(),
    u = Ft(),
    y = p(u);
  function p(E) {
    return E && E.__esModule ? E : { default: E };
  }
  var g = function () {},
    w = function (b, S, O) {
      var m = new g();
      if (typeof b > "u") throw Error("No element to render on was provided.");
      return (
        (m._renderProperties = (0, e.default)(b)),
        (m._encodings = []),
        (m._options = y.default),
        (m._errorHandler = new i.default(m)),
        typeof S < "u" &&
          ((O = O || {}),
          O.format || (O.format = Ne()),
          m.options(O)[O.format](S, O).render()),
        m
      );
    };
  w.getModule = function (E) {
    return d.default[E];
  };
  for (var B in d.default) d.default.hasOwnProperty(B) && Q(d.default, B);
  function Q(E, b) {
    g.prototype[b] =
      g.prototype[b.toUpperCase()] =
      g.prototype[b.toLowerCase()] =
        function (S, O) {
          var m = this;
          return m._errorHandler.wrapBarcodeCall(function () {
            O.text = typeof O.text > "u" ? void 0 : "" + O.text;
            var T = (0, c.default)(m._options, O);
            T = (0, n.default)(T);
            var Ut = E[b],
              Xt = Le(S, Ut, T);
            return m._encodings.push(Xt), m;
          });
        };
  }
  function Le(E, b, S) {
    E = "" + E;
    var O = new b(E, S);
    if (!O.valid()) throw new o.InvalidInputException(O.constructor.name, E);
    var m = O.encode();
    m = (0, _.default)(m);
    for (var T = 0; T < m.length; T++)
      m[T].options = (0, c.default)(S, m[T].options);
    return m;
  }
  function Ne() {
    return d.default.CODE128 ? "CODE128" : Object.keys(d.default)[0];
  }
  (g.prototype.options = function (E) {
    return (this._options = (0, c.default)(this._options, E)), this;
  }),
    (g.prototype.blank = function (E) {
      var b = new Array(E + 1).join("0");
      return this._encodings.push({ data: b }), this;
    }),
    (g.prototype.init = function () {
      if (this._renderProperties) {
        Array.isArray(this._renderProperties) ||
          (this._renderProperties = [this._renderProperties]);
        var E;
        for (var b in this._renderProperties) {
          E = this._renderProperties[b];
          var S = (0, c.default)(this._options, E.options);
          S.format == "auto" && (S.format = Ne()),
            this._errorHandler.wrapBarcodeCall(function () {
              var O = S.value,
                m = d.default[S.format.toUpperCase()],
                T = Le(O, m, S);
              Be(E, T, S);
            });
        }
      }
    }),
    (g.prototype.render = function () {
      if (!this._renderProperties) throw new o.NoElementException();
      if (Array.isArray(this._renderProperties))
        for (var E = 0; E < this._renderProperties.length; E++)
          Be(this._renderProperties[E], this._encodings, this._options);
      else Be(this._renderProperties, this._encodings, this._options);
      return this;
    }),
    (g.prototype._defaults = y.default);
  function Be(E, b, S) {
    b = (0, _.default)(b);
    for (var O = 0; O < b.length; O++)
      (b[O].options = (0, c.default)(S, b[O].options)),
        (0, f.default)(b[O].options);
    (0, f.default)(S);
    var m = E.renderer,
      T = new m(E.element, b, S);
    T.render(), E.afterRender && E.afterRender();
  }
  return (
    typeof window < "u" && (window.JsBarcode = w),
    typeof jQuery < "u" &&
      (jQuery.fn.JsBarcode = function (E, b) {
        var S = [];
        return (
          jQuery(this).each(function () {
            S.push(this);
          }),
          w(S, E, b)
        );
      }),
    (je = w),
    je
  );
}
var Lr = Cr();
const Nr = Vt(Lr),
  Gr = Ct({
    name: "ReBarcode",
    __name: "index",
    props: {
      tag: { type: String, default: "canvas" },
      text: { type: String, default: null },
      options: {
        type: Object,
        default() {
          return {};
        }
      },
      type: { type: String, default: "CODE128" }
    },
    setup(s) {
      const d = s,
        v = Jt(null);
      return (
        Qt(() => {
          const c = { ...d.options, format: d.type };
          Nr(v.value, d.text, c);
        }),
        (c, h) => (
          Ce(), Wt(Yt(s.tag), { ref_key: "wrapEl", ref: v }, null, 512)
        )
      );
    }
  }),
  $r = Zt(Gr),
  Fr = { class: "font-medium" },
  zr = Ct({
    name: "BarCode",
    __name: "barcode",
    setup(s) {
      const d = [
        { text: "CODE128", type: "CODE128", options: {} },
        { text: "CODE39", type: "CODE39", options: { lineColor: "#990000" } },
        {
          text: "123456",
          type: "pharmacode",
          options: { background: "#eee", width: 5 }
        }
      ];
      return (v, c) => {
        const h = W("el-link"),
          _ = W("el-card"),
          l = W("el-col"),
          f = W("el-row");
        return (
          Ce(),
          Ge("div", null, [
            q(
              _,
              { shadow: "never" },
              {
                header: j(() => [
                  tr("div", Fr, [
                    c[1] || (c[1] = qe(" 条形码（基于 ")),
                    q(
                      h,
                      {
                        href: "https://lindell.me/JsBarcode/",
                        target: "_blank",
                        style: { margin: "0 5px 4px 0", "font-size": "16px" }
                      },
                      {
                        default: j(() => c[0] || (c[0] = [qe(" JsBarcode ")])),
                        _: 1
                      }
                    ),
                    c[2] || (c[2] = qe(" 生成） "))
                  ])
                ]),
                default: j(() => [
                  q(
                    f,
                    { gutter: 12 },
                    {
                      default: j(() => [
                        (Ce(),
                        Ge(
                          Kt,
                          null,
                          er(d, (a, e) =>
                            q(
                              l,
                              { key: e, xs: 24, sm: 24, md: 12, lg: 8, xl: 8 },
                              {
                                default: j(() => [
                                  q(
                                    _,
                                    {
                                      shadow: "hover",
                                      class: "flex justify-center"
                                    },
                                    {
                                      default: j(() => [
                                        q(
                                          rr($r),
                                          {
                                            text: a.text,
                                            type: a.type,
                                            options: a.options
                                          },
                                          null,
                                          8,
                                          ["text", "type", "options"]
                                        )
                                      ]),
                                      _: 2
                                    },
                                    1024
                                  )
                                ]),
                                _: 2
                              },
                              1024
                            )
                          ),
                          64
                        ))
                      ]),
                      _: 1
                    }
                  )
                ]),
                _: 1
              }
            )
          ])
        );
      };
    }
  });
export { zr as default };
