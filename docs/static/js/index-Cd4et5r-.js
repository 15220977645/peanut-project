import { p as W } from "./propTypes-D_I3dZnw.js";
import {
  m as ae,
  d as ce,
  r as St,
  z as It,
  L as le,
  b as U,
  j as fe,
  l as de,
  u as V,
  h as ge,
  F as he,
  n as me,
  a0 as we,
  b4 as Pt,
  q as Ce
} from "./index-DuV_pBtV.js";
import { d as ye } from "./refresh-right-Du3ZsAuC.js";
var J = {},
  tt,
  Nt;
function Ee() {
  return (
    Nt ||
      ((Nt = 1),
      (tt = function () {
        return (
          typeof Promise == "function" &&
          Promise.prototype &&
          Promise.prototype.then
        );
      })),
    tt
  );
}
var et = {},
  _ = {},
  Mt;
function H() {
  if (Mt) return _;
  Mt = 1;
  let r;
  const o = [
    0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655,
    733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921,
    2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
  ];
  return (
    (_.getSymbolSize = function (n) {
      if (!n) throw new Error('"version" cannot be null or undefined');
      if (n < 1 || n > 40)
        throw new Error('"version" should be in range from 1 to 40');
      return n * 4 + 17;
    }),
    (_.getSymbolTotalCodewords = function (n) {
      return o[n];
    }),
    (_.getBCHDigit = function (i) {
      let n = 0;
      for (; i !== 0; ) n++, (i >>>= 1);
      return n;
    }),
    (_.setToSJISFunction = function (n) {
      if (typeof n != "function")
        throw new Error('"toSJISFunc" is not a valid function.');
      r = n;
    }),
    (_.isKanjiModeEnabled = function () {
      return typeof r < "u";
    }),
    (_.toSJIS = function (n) {
      return r(n);
    }),
    _
  );
}
var nt = {},
  vt;
function bt() {
  return (
    vt ||
      ((vt = 1),
      (function (r) {
        (r.L = { bit: 1 }),
          (r.M = { bit: 0 }),
          (r.Q = { bit: 3 }),
          (r.H = { bit: 2 });
        function o(i) {
          if (typeof i != "string") throw new Error("Param is not a string");
          switch (i.toLowerCase()) {
            case "l":
            case "low":
              return r.L;
            case "m":
            case "medium":
              return r.M;
            case "q":
            case "quartile":
              return r.Q;
            case "h":
            case "high":
              return r.H;
            default:
              throw new Error("Unknown EC Level: " + i);
          }
        }
        (r.isValid = function (n) {
          return n && typeof n.bit < "u" && n.bit >= 0 && n.bit < 4;
        }),
          (r.from = function (n, t) {
            if (r.isValid(n)) return n;
            try {
              return o(n);
            } catch {
              return t;
            }
          });
      })(nt)),
    nt
  );
}
var rt, Lt;
function Be() {
  if (Lt) return rt;
  Lt = 1;
  function r() {
    (this.buffer = []), (this.length = 0);
  }
  return (
    (r.prototype = {
      get: function (o) {
        const i = Math.floor(o / 8);
        return ((this.buffer[i] >>> (7 - (o % 8))) & 1) === 1;
      },
      put: function (o, i) {
        for (let n = 0; n < i; n++)
          this.putBit(((o >>> (i - n - 1)) & 1) === 1);
      },
      getLengthInBits: function () {
        return this.length;
      },
      putBit: function (o) {
        const i = Math.floor(this.length / 8);
        this.buffer.length <= i && this.buffer.push(0),
          o && (this.buffer[i] |= 128 >>> this.length % 8),
          this.length++;
      }
    }),
    (rt = r),
    rt
  );
}
var ot, Dt;
function pe() {
  if (Dt) return ot;
  Dt = 1;
  function r(o) {
    if (!o || o < 1)
      throw new Error("BitMatrix size must be defined and greater than 0");
    (this.size = o),
      (this.data = new Uint8Array(o * o)),
      (this.reservedBit = new Uint8Array(o * o));
  }
  return (
    (r.prototype.set = function (o, i, n, t) {
      const e = o * this.size + i;
      (this.data[e] = n), t && (this.reservedBit[e] = !0);
    }),
    (r.prototype.get = function (o, i) {
      return this.data[o * this.size + i];
    }),
    (r.prototype.xor = function (o, i, n) {
      this.data[o * this.size + i] ^= n;
    }),
    (r.prototype.isReserved = function (o, i) {
      return this.reservedBit[o * this.size + i];
    }),
    (ot = r),
    ot
  );
}
var it = {},
  qt;
function Re() {
  return (
    qt ||
      ((qt = 1),
      (function (r) {
        const o = H().getSymbolSize;
        (r.getRowColCoords = function (n) {
          if (n === 1) return [];
          const t = Math.floor(n / 7) + 2,
            e = o(n),
            s = e === 145 ? 26 : Math.ceil((e - 13) / (2 * t - 2)) * 2,
            a = [e - 7];
          for (let u = 1; u < t - 1; u++) a[u] = a[u - 1] - s;
          return a.push(6), a.reverse();
        }),
          (r.getPositions = function (n) {
            const t = [],
              e = r.getRowColCoords(n),
              s = e.length;
            for (let a = 0; a < s; a++)
              for (let u = 0; u < s; u++)
                (a === 0 && u === 0) ||
                  (a === 0 && u === s - 1) ||
                  (a === s - 1 && u === 0) ||
                  t.push([e[a], e[u]]);
            return t;
          });
      })(it)),
    it
  );
}
var st = {},
  Ut;
function be() {
  if (Ut) return st;
  Ut = 1;
  const r = H().getSymbolSize,
    o = 7;
  return (
    (st.getPositions = function (n) {
      const t = r(n);
      return [
        [0, 0],
        [t - o, 0],
        [0, t - o]
      ];
    }),
    st
  );
}
var ut = {},
  _t;
function Ae() {
  return (
    _t ||
      ((_t = 1),
      (function (r) {
        r.Patterns = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7
        };
        const o = { N1: 3, N2: 3, N3: 40, N4: 10 };
        (r.isValid = function (t) {
          return t != null && t !== "" && !isNaN(t) && t >= 0 && t <= 7;
        }),
          (r.from = function (t) {
            return r.isValid(t) ? parseInt(t, 10) : void 0;
          }),
          (r.getPenaltyN1 = function (t) {
            const e = t.size;
            let s = 0,
              a = 0,
              u = 0,
              f = null,
              m = null;
            for (let S = 0; S < e; S++) {
              (a = u = 0), (f = m = null);
              for (let E = 0; E < e; E++) {
                let g = t.get(S, E);
                g === f
                  ? a++
                  : (a >= 5 && (s += o.N1 + (a - 5)), (f = g), (a = 1)),
                  (g = t.get(E, S)),
                  g === m
                    ? u++
                    : (u >= 5 && (s += o.N1 + (u - 5)), (m = g), (u = 1));
              }
              a >= 5 && (s += o.N1 + (a - 5)), u >= 5 && (s += o.N1 + (u - 5));
            }
            return s;
          }),
          (r.getPenaltyN2 = function (t) {
            const e = t.size;
            let s = 0;
            for (let a = 0; a < e - 1; a++)
              for (let u = 0; u < e - 1; u++) {
                const f =
                  t.get(a, u) +
                  t.get(a, u + 1) +
                  t.get(a + 1, u) +
                  t.get(a + 1, u + 1);
                (f === 4 || f === 0) && s++;
              }
            return s * o.N2;
          }),
          (r.getPenaltyN3 = function (t) {
            const e = t.size;
            let s = 0,
              a = 0,
              u = 0;
            for (let f = 0; f < e; f++) {
              a = u = 0;
              for (let m = 0; m < e; m++)
                (a = ((a << 1) & 2047) | t.get(f, m)),
                  m >= 10 && (a === 1488 || a === 93) && s++,
                  (u = ((u << 1) & 2047) | t.get(m, f)),
                  m >= 10 && (u === 1488 || u === 93) && s++;
            }
            return s * o.N3;
          }),
          (r.getPenaltyN4 = function (t) {
            let e = 0;
            const s = t.data.length;
            for (let u = 0; u < s; u++) e += t.data[u];
            return Math.abs(Math.ceil((e * 100) / s / 5) - 10) * o.N4;
          });
        function i(n, t, e) {
          switch (n) {
            case r.Patterns.PATTERN000:
              return (t + e) % 2 === 0;
            case r.Patterns.PATTERN001:
              return t % 2 === 0;
            case r.Patterns.PATTERN010:
              return e % 3 === 0;
            case r.Patterns.PATTERN011:
              return (t + e) % 3 === 0;
            case r.Patterns.PATTERN100:
              return (Math.floor(t / 2) + Math.floor(e / 3)) % 2 === 0;
            case r.Patterns.PATTERN101:
              return ((t * e) % 2) + ((t * e) % 3) === 0;
            case r.Patterns.PATTERN110:
              return (((t * e) % 2) + ((t * e) % 3)) % 2 === 0;
            case r.Patterns.PATTERN111:
              return (((t * e) % 3) + ((t + e) % 2)) % 2 === 0;
            default:
              throw new Error("bad maskPattern:" + n);
          }
        }
        (r.applyMask = function (t, e) {
          const s = e.size;
          for (let a = 0; a < s; a++)
            for (let u = 0; u < s; u++)
              e.isReserved(u, a) || e.xor(u, a, i(t, u, a));
        }),
          (r.getBestMask = function (t, e) {
            const s = Object.keys(r.Patterns).length;
            let a = 0,
              u = 1 / 0;
            for (let f = 0; f < s; f++) {
              e(f), r.applyMask(f, t);
              const m =
                r.getPenaltyN1(t) +
                r.getPenaltyN2(t) +
                r.getPenaltyN3(t) +
                r.getPenaltyN4(t);
              r.applyMask(f, t), m < u && ((u = m), (a = f));
            }
            return a;
          });
      })(ut)),
    ut
  );
}
var $ = {},
  kt;
function re() {
  if (kt) return $;
  kt = 1;
  const r = bt(),
    o = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2,
      4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4,
      9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6,
      13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9,
      18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34,
      40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17,
      33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56,
      66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81
    ],
    i = [
      7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72,
      88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160,
      192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198,
      288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168,
      308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700,
      224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810,
      960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390,
      728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868,
      1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530,
      1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100,
      660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430
    ];
  return (
    ($.getBlocksCount = function (t, e) {
      switch (e) {
        case r.L:
          return o[(t - 1) * 4 + 0];
        case r.M:
          return o[(t - 1) * 4 + 1];
        case r.Q:
          return o[(t - 1) * 4 + 2];
        case r.H:
          return o[(t - 1) * 4 + 3];
        default:
          return;
      }
    }),
    ($.getTotalCodewordsCount = function (t, e) {
      switch (e) {
        case r.L:
          return i[(t - 1) * 4 + 0];
        case r.M:
          return i[(t - 1) * 4 + 1];
        case r.Q:
          return i[(t - 1) * 4 + 2];
        case r.H:
          return i[(t - 1) * 4 + 3];
        default:
          return;
      }
    }),
    $
  );
}
var at = {},
  Y = {},
  Ft;
function Te() {
  if (Ft) return Y;
  Ft = 1;
  const r = new Uint8Array(512),
    o = new Uint8Array(256);
  return (
    (function () {
      let n = 1;
      for (let t = 0; t < 255; t++)
        (r[t] = n), (o[n] = t), (n <<= 1), n & 256 && (n ^= 285);
      for (let t = 255; t < 512; t++) r[t] = r[t - 255];
    })(),
    (Y.log = function (n) {
      if (n < 1) throw new Error("log(" + n + ")");
      return o[n];
    }),
    (Y.exp = function (n) {
      return r[n];
    }),
    (Y.mul = function (n, t) {
      return n === 0 || t === 0 ? 0 : r[o[n] + o[t]];
    }),
    Y
  );
}
var zt;
function Se() {
  return (
    zt ||
      ((zt = 1),
      (function (r) {
        const o = Te();
        (r.mul = function (n, t) {
          const e = new Uint8Array(n.length + t.length - 1);
          for (let s = 0; s < n.length; s++)
            for (let a = 0; a < t.length; a++) e[s + a] ^= o.mul(n[s], t[a]);
          return e;
        }),
          (r.mod = function (n, t) {
            let e = new Uint8Array(n);
            for (; e.length - t.length >= 0; ) {
              const s = e[0];
              for (let u = 0; u < t.length; u++) e[u] ^= o.mul(t[u], s);
              let a = 0;
              for (; a < e.length && e[a] === 0; ) a++;
              e = e.slice(a);
            }
            return e;
          }),
          (r.generateECPolynomial = function (n) {
            let t = new Uint8Array([1]);
            for (let e = 0; e < n; e++)
              t = r.mul(t, new Uint8Array([1, o.exp(e)]));
            return t;
          });
      })(at)),
    at
  );
}
var ct, Vt;
function Ie() {
  if (Vt) return ct;
  Vt = 1;
  const r = Se();
  function o(i) {
    (this.genPoly = void 0),
      (this.degree = i),
      this.degree && this.initialize(this.degree);
  }
  return (
    (o.prototype.initialize = function (n) {
      (this.degree = n), (this.genPoly = r.generateECPolynomial(this.degree));
    }),
    (o.prototype.encode = function (n) {
      if (!this.genPoly) throw new Error("Encoder not initialized");
      const t = new Uint8Array(n.length + this.degree);
      t.set(n);
      const e = r.mod(t, this.genPoly),
        s = this.degree - e.length;
      if (s > 0) {
        const a = new Uint8Array(this.degree);
        return a.set(e, s), a;
      }
      return e;
    }),
    (ct = o),
    ct
  );
}
var lt = {},
  ft = {},
  dt = {},
  Ht;
function oe() {
  return (
    Ht ||
      ((Ht = 1),
      (dt.isValid = function (o) {
        return !isNaN(o) && o >= 1 && o <= 40;
      })),
    dt
  );
}
var L = {},
  Kt;
function ie() {
  if (Kt) return L;
  Kt = 1;
  const r = "[0-9]+",
    o = "[A-Z $%*+\\-./:]+";
  let i =
    "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  i = i.replace(/u/g, "\\u");
  const n =
    "(?:(?![A-Z0-9 $%*+\\-./:]|" +
    i +
    `)(?:.|[\r
]))+`;
  (L.KANJI = new RegExp(i, "g")),
    (L.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
    (L.BYTE = new RegExp(n, "g")),
    (L.NUMERIC = new RegExp(r, "g")),
    (L.ALPHANUMERIC = new RegExp(o, "g"));
  const t = new RegExp("^" + i + "$"),
    e = new RegExp("^" + r + "$"),
    s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  return (
    (L.testKanji = function (u) {
      return t.test(u);
    }),
    (L.testNumeric = function (u) {
      return e.test(u);
    }),
    (L.testAlphanumeric = function (u) {
      return s.test(u);
    }),
    L
  );
}
var Ot;
function K() {
  return (
    Ot ||
      ((Ot = 1),
      (function (r) {
        const o = oe(),
          i = ie();
        (r.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
          (r.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13]
          }),
          (r.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
          (r.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
          (r.MIXED = { bit: -1 }),
          (r.getCharCountIndicator = function (e, s) {
            if (!e.ccBits) throw new Error("Invalid mode: " + e);
            if (!o.isValid(s)) throw new Error("Invalid version: " + s);
            return s >= 1 && s < 10
              ? e.ccBits[0]
              : s < 27
              ? e.ccBits[1]
              : e.ccBits[2];
          }),
          (r.getBestModeForData = function (e) {
            return i.testNumeric(e)
              ? r.NUMERIC
              : i.testAlphanumeric(e)
              ? r.ALPHANUMERIC
              : i.testKanji(e)
              ? r.KANJI
              : r.BYTE;
          }),
          (r.toString = function (e) {
            if (e && e.id) return e.id;
            throw new Error("Invalid mode");
          }),
          (r.isValid = function (e) {
            return e && e.bit && e.ccBits;
          });
        function n(t) {
          if (typeof t != "string") throw new Error("Param is not a string");
          switch (t.toLowerCase()) {
            case "numeric":
              return r.NUMERIC;
            case "alphanumeric":
              return r.ALPHANUMERIC;
            case "kanji":
              return r.KANJI;
            case "byte":
              return r.BYTE;
            default:
              throw new Error("Unknown mode: " + t);
          }
        }
        r.from = function (e, s) {
          if (r.isValid(e)) return e;
          try {
            return n(e);
          } catch {
            return s;
          }
        };
      })(ft)),
    ft
  );
}
var jt;
function Pe() {
  return (
    jt ||
      ((jt = 1),
      (function (r) {
        const o = H(),
          i = re(),
          n = bt(),
          t = K(),
          e = oe(),
          s = 7973,
          a = o.getBCHDigit(s);
        function u(E, g, P) {
          for (let l = 1; l <= 40; l++)
            if (g <= r.getCapacity(l, P, E)) return l;
        }
        function f(E, g) {
          return t.getCharCountIndicator(E, g) + 4;
        }
        function m(E, g) {
          let P = 0;
          return (
            E.forEach(function (l) {
              const N = f(l.mode, g);
              P += N + l.getBitsLength();
            }),
            P
          );
        }
        function S(E, g) {
          for (let P = 1; P <= 40; P++)
            if (m(E, P) <= r.getCapacity(P, g, t.MIXED)) return P;
        }
        (r.from = function (g, P) {
          return e.isValid(g) ? parseInt(g, 10) : P;
        }),
          (r.getCapacity = function (g, P, l) {
            if (!e.isValid(g)) throw new Error("Invalid QR Code version");
            typeof l > "u" && (l = t.BYTE);
            const N = o.getSymbolTotalCodewords(g),
              h = i.getTotalCodewordsCount(g, P),
              T = (N - h) * 8;
            if (l === t.MIXED) return T;
            const R = T - f(l, g);
            switch (l) {
              case t.NUMERIC:
                return Math.floor((R / 10) * 3);
              case t.ALPHANUMERIC:
                return Math.floor((R / 11) * 2);
              case t.KANJI:
                return Math.floor(R / 13);
              case t.BYTE:
              default:
                return Math.floor(R / 8);
            }
          }),
          (r.getBestVersionForData = function (g, P) {
            let l;
            const N = n.from(P, n.M);
            if (Array.isArray(g)) {
              if (g.length > 1) return S(g, N);
              if (g.length === 0) return 1;
              l = g[0];
            } else l = g;
            return u(l.mode, l.getLength(), N);
          }),
          (r.getEncodedBits = function (g) {
            if (!e.isValid(g) || g < 7)
              throw new Error("Invalid QR Code version");
            let P = g << 12;
            for (; o.getBCHDigit(P) - a >= 0; )
              P ^= s << (o.getBCHDigit(P) - a);
            return (g << 12) | P;
          });
      })(lt)),
    lt
  );
}
var gt = {},
  Jt;
function Ne() {
  if (Jt) return gt;
  Jt = 1;
  const r = H(),
    o = 1335,
    i = 21522,
    n = r.getBCHDigit(o);
  return (
    (gt.getEncodedBits = function (e, s) {
      const a = (e.bit << 3) | s;
      let u = a << 10;
      for (; r.getBCHDigit(u) - n >= 0; ) u ^= o << (r.getBCHDigit(u) - n);
      return ((a << 10) | u) ^ i;
    }),
    gt
  );
}
var ht = {},
  mt,
  Yt;
function Me() {
  if (Yt) return mt;
  Yt = 1;
  const r = K();
  function o(i) {
    (this.mode = r.NUMERIC), (this.data = i.toString());
  }
  return (
    (o.getBitsLength = function (n) {
      return 10 * Math.floor(n / 3) + (n % 3 ? (n % 3) * 3 + 1 : 0);
    }),
    (o.prototype.getLength = function () {
      return this.data.length;
    }),
    (o.prototype.getBitsLength = function () {
      return o.getBitsLength(this.data.length);
    }),
    (o.prototype.write = function (n) {
      let t, e, s;
      for (t = 0; t + 3 <= this.data.length; t += 3)
        (e = this.data.substr(t, 3)), (s = parseInt(e, 10)), n.put(s, 10);
      const a = this.data.length - t;
      a > 0 &&
        ((e = this.data.substr(t)), (s = parseInt(e, 10)), n.put(s, a * 3 + 1));
    }),
    (mt = o),
    mt
  );
}
var wt, Qt;
function ve() {
  if (Qt) return wt;
  Qt = 1;
  const r = K(),
    o = [
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
      " ",
      "$",
      "%",
      "*",
      "+",
      "-",
      ".",
      "/",
      ":"
    ];
  function i(n) {
    (this.mode = r.ALPHANUMERIC), (this.data = n);
  }
  return (
    (i.getBitsLength = function (t) {
      return 11 * Math.floor(t / 2) + 6 * (t % 2);
    }),
    (i.prototype.getLength = function () {
      return this.data.length;
    }),
    (i.prototype.getBitsLength = function () {
      return i.getBitsLength(this.data.length);
    }),
    (i.prototype.write = function (t) {
      let e;
      for (e = 0; e + 2 <= this.data.length; e += 2) {
        let s = o.indexOf(this.data[e]) * 45;
        (s += o.indexOf(this.data[e + 1])), t.put(s, 11);
      }
      this.data.length % 2 && t.put(o.indexOf(this.data[e]), 6);
    }),
    (wt = i),
    wt
  );
}
var Ct, Gt;
function Le() {
  if (Gt) return Ct;
  Gt = 1;
  const r = K();
  function o(i) {
    (this.mode = r.BYTE),
      typeof i == "string"
        ? (this.data = new TextEncoder().encode(i))
        : (this.data = new Uint8Array(i));
  }
  return (
    (o.getBitsLength = function (n) {
      return n * 8;
    }),
    (o.prototype.getLength = function () {
      return this.data.length;
    }),
    (o.prototype.getBitsLength = function () {
      return o.getBitsLength(this.data.length);
    }),
    (o.prototype.write = function (i) {
      for (let n = 0, t = this.data.length; n < t; n++) i.put(this.data[n], 8);
    }),
    (Ct = o),
    Ct
  );
}
var yt, Wt;
function De() {
  if (Wt) return yt;
  Wt = 1;
  const r = K(),
    o = H();
  function i(n) {
    (this.mode = r.KANJI), (this.data = n);
  }
  return (
    (i.getBitsLength = function (t) {
      return t * 13;
    }),
    (i.prototype.getLength = function () {
      return this.data.length;
    }),
    (i.prototype.getBitsLength = function () {
      return i.getBitsLength(this.data.length);
    }),
    (i.prototype.write = function (n) {
      let t;
      for (t = 0; t < this.data.length; t++) {
        let e = o.toSJIS(this.data[t]);
        if (e >= 33088 && e <= 40956) e -= 33088;
        else if (e >= 57408 && e <= 60351) e -= 49472;
        else
          throw new Error(
            "Invalid SJIS character: " +
              this.data[t] +
              `
Make sure your charset is UTF-8`
          );
        (e = ((e >>> 8) & 255) * 192 + (e & 255)), n.put(e, 13);
      }
    }),
    (yt = i),
    yt
  );
}
var Et = { exports: {} },
  $t;
function qe() {
  return (
    $t ||
      (($t = 1),
      (function (r) {
        var o = {
          single_source_shortest_paths: function (i, n, t) {
            var e = {},
              s = {};
            s[n] = 0;
            var a = o.PriorityQueue.make();
            a.push(n, 0);
            for (var u, f, m, S, E, g, P, l, N; !a.empty(); ) {
              (u = a.pop()), (f = u.value), (S = u.cost), (E = i[f] || {});
              for (m in E)
                E.hasOwnProperty(m) &&
                  ((g = E[m]),
                  (P = S + g),
                  (l = s[m]),
                  (N = typeof s[m] > "u"),
                  (N || l > P) && ((s[m] = P), a.push(m, P), (e[m] = f)));
            }
            if (typeof t < "u" && typeof s[t] > "u") {
              var h = ["Could not find a path from ", n, " to ", t, "."].join(
                ""
              );
              throw new Error(h);
            }
            return e;
          },
          extract_shortest_path_from_predecessor_list: function (i, n) {
            for (var t = [], e = n; e; ) t.push(e), i[e], (e = i[e]);
            return t.reverse(), t;
          },
          find_path: function (i, n, t) {
            var e = o.single_source_shortest_paths(i, n, t);
            return o.extract_shortest_path_from_predecessor_list(e, t);
          },
          PriorityQueue: {
            make: function (i) {
              var n = o.PriorityQueue,
                t = {},
                e;
              i = i || {};
              for (e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
              return (
                (t.queue = []), (t.sorter = i.sorter || n.default_sorter), t
              );
            },
            default_sorter: function (i, n) {
              return i.cost - n.cost;
            },
            push: function (i, n) {
              var t = { value: i, cost: n };
              this.queue.push(t), this.queue.sort(this.sorter);
            },
            pop: function () {
              return this.queue.shift();
            },
            empty: function () {
              return this.queue.length === 0;
            }
          }
        };
        r.exports = o;
      })(Et)),
    Et.exports
  );
}
var Xt;
function Ue() {
  return (
    Xt ||
      ((Xt = 1),
      (function (r) {
        const o = K(),
          i = Me(),
          n = ve(),
          t = Le(),
          e = De(),
          s = ie(),
          a = H(),
          u = qe();
        function f(h) {
          return unescape(encodeURIComponent(h)).length;
        }
        function m(h, T, R) {
          const C = [];
          let M;
          for (; (M = h.exec(R)) !== null; )
            C.push({
              data: M[0],
              index: M.index,
              mode: T,
              length: M[0].length
            });
          return C;
        }
        function S(h) {
          const T = m(s.NUMERIC, o.NUMERIC, h),
            R = m(s.ALPHANUMERIC, o.ALPHANUMERIC, h);
          let C, M;
          return (
            a.isKanjiModeEnabled()
              ? ((C = m(s.BYTE, o.BYTE, h)), (M = m(s.KANJI, o.KANJI, h)))
              : ((C = m(s.BYTE_KANJI, o.BYTE, h)), (M = [])),
            T.concat(R, C, M)
              .sort(function (p, b) {
                return p.index - b.index;
              })
              .map(function (p) {
                return { data: p.data, mode: p.mode, length: p.length };
              })
          );
        }
        function E(h, T) {
          switch (T) {
            case o.NUMERIC:
              return i.getBitsLength(h);
            case o.ALPHANUMERIC:
              return n.getBitsLength(h);
            case o.KANJI:
              return e.getBitsLength(h);
            case o.BYTE:
              return t.getBitsLength(h);
          }
        }
        function g(h) {
          return h.reduce(function (T, R) {
            const C = T.length - 1 >= 0 ? T[T.length - 1] : null;
            return C && C.mode === R.mode
              ? ((T[T.length - 1].data += R.data), T)
              : (T.push(R), T);
          }, []);
        }
        function P(h) {
          const T = [];
          for (let R = 0; R < h.length; R++) {
            const C = h[R];
            switch (C.mode) {
              case o.NUMERIC:
                T.push([
                  C,
                  { data: C.data, mode: o.ALPHANUMERIC, length: C.length },
                  { data: C.data, mode: o.BYTE, length: C.length }
                ]);
                break;
              case o.ALPHANUMERIC:
                T.push([C, { data: C.data, mode: o.BYTE, length: C.length }]);
                break;
              case o.KANJI:
                T.push([C, { data: C.data, mode: o.BYTE, length: f(C.data) }]);
                break;
              case o.BYTE:
                T.push([{ data: C.data, mode: o.BYTE, length: f(C.data) }]);
            }
          }
          return T;
        }
        function l(h, T) {
          const R = {},
            C = { start: {} };
          let M = ["start"];
          for (let w = 0; w < h.length; w++) {
            const p = h[w],
              b = [];
            for (let c = 0; c < p.length; c++) {
              const y = p[c],
                B = "" + w + c;
              b.push(B), (R[B] = { node: y, lastCount: 0 }), (C[B] = {});
              for (let A = 0; A < M.length; A++) {
                const d = M[A];
                R[d] && R[d].node.mode === y.mode
                  ? ((C[d][B] =
                      E(R[d].lastCount + y.length, y.mode) -
                      E(R[d].lastCount, y.mode)),
                    (R[d].lastCount += y.length))
                  : (R[d] && (R[d].lastCount = y.length),
                    (C[d][B] =
                      E(y.length, y.mode) +
                      4 +
                      o.getCharCountIndicator(y.mode, T)));
              }
            }
            M = b;
          }
          for (let w = 0; w < M.length; w++) C[M[w]].end = 0;
          return { map: C, table: R };
        }
        function N(h, T) {
          let R;
          const C = o.getBestModeForData(h);
          if (((R = o.from(T, C)), R !== o.BYTE && R.bit < C.bit))
            throw new Error(
              '"' +
                h +
                '" cannot be encoded with mode ' +
                o.toString(R) +
                `.
 Suggested mode is: ` +
                o.toString(C)
            );
          switch (
            (R === o.KANJI && !a.isKanjiModeEnabled() && (R = o.BYTE), R)
          ) {
            case o.NUMERIC:
              return new i(h);
            case o.ALPHANUMERIC:
              return new n(h);
            case o.KANJI:
              return new e(h);
            case o.BYTE:
              return new t(h);
          }
        }
        (r.fromArray = function (T) {
          return T.reduce(function (R, C) {
            return (
              typeof C == "string"
                ? R.push(N(C, null))
                : C.data && R.push(N(C.data, C.mode)),
              R
            );
          }, []);
        }),
          (r.fromString = function (T, R) {
            const C = S(T, a.isKanjiModeEnabled()),
              M = P(C),
              w = l(M, R),
              p = u.find_path(w.map, "start", "end"),
              b = [];
            for (let c = 1; c < p.length - 1; c++) b.push(w.table[p[c]].node);
            return r.fromArray(g(b));
          }),
          (r.rawSplit = function (T) {
            return r.fromArray(S(T, a.isKanjiModeEnabled()));
          });
      })(ht)),
    ht
  );
}
var Zt;
function _e() {
  if (Zt) return et;
  Zt = 1;
  const r = H(),
    o = bt(),
    i = Be(),
    n = pe(),
    t = Re(),
    e = be(),
    s = Ae(),
    a = re(),
    u = Ie(),
    f = Pe(),
    m = Ne(),
    S = K(),
    E = Ue();
  function g(w, p) {
    const b = w.size,
      c = e.getPositions(p);
    for (let y = 0; y < c.length; y++) {
      const B = c[y][0],
        A = c[y][1];
      for (let d = -1; d <= 7; d++)
        if (!(B + d <= -1 || b <= B + d))
          for (let I = -1; I <= 7; I++)
            A + I <= -1 ||
              b <= A + I ||
              ((d >= 0 && d <= 6 && (I === 0 || I === 6)) ||
              (I >= 0 && I <= 6 && (d === 0 || d === 6)) ||
              (d >= 2 && d <= 4 && I >= 2 && I <= 4)
                ? w.set(B + d, A + I, !0, !0)
                : w.set(B + d, A + I, !1, !0));
    }
  }
  function P(w) {
    const p = w.size;
    for (let b = 8; b < p - 8; b++) {
      const c = b % 2 === 0;
      w.set(b, 6, c, !0), w.set(6, b, c, !0);
    }
  }
  function l(w, p) {
    const b = t.getPositions(p);
    for (let c = 0; c < b.length; c++) {
      const y = b[c][0],
        B = b[c][1];
      for (let A = -2; A <= 2; A++)
        for (let d = -2; d <= 2; d++)
          A === -2 || A === 2 || d === -2 || d === 2 || (A === 0 && d === 0)
            ? w.set(y + A, B + d, !0, !0)
            : w.set(y + A, B + d, !1, !0);
    }
  }
  function N(w, p) {
    const b = w.size,
      c = f.getEncodedBits(p);
    let y, B, A;
    for (let d = 0; d < 18; d++)
      (y = Math.floor(d / 3)),
        (B = (d % 3) + b - 8 - 3),
        (A = ((c >> d) & 1) === 1),
        w.set(y, B, A, !0),
        w.set(B, y, A, !0);
  }
  function h(w, p, b) {
    const c = w.size,
      y = m.getEncodedBits(p, b);
    let B, A;
    for (B = 0; B < 15; B++)
      (A = ((y >> B) & 1) === 1),
        B < 6
          ? w.set(B, 8, A, !0)
          : B < 8
          ? w.set(B + 1, 8, A, !0)
          : w.set(c - 15 + B, 8, A, !0),
        B < 8
          ? w.set(8, c - B - 1, A, !0)
          : B < 9
          ? w.set(8, 15 - B - 1 + 1, A, !0)
          : w.set(8, 15 - B - 1, A, !0);
    w.set(c - 8, 8, 1, !0);
  }
  function T(w, p) {
    const b = w.size;
    let c = -1,
      y = b - 1,
      B = 7,
      A = 0;
    for (let d = b - 1; d > 0; d -= 2)
      for (d === 6 && d--; ; ) {
        for (let I = 0; I < 2; I++)
          if (!w.isReserved(y, d - I)) {
            let v = !1;
            A < p.length && (v = ((p[A] >>> B) & 1) === 1),
              w.set(y, d - I, v),
              B--,
              B === -1 && (A++, (B = 7));
          }
        if (((y += c), y < 0 || b <= y)) {
          (y -= c), (c = -c);
          break;
        }
      }
  }
  function R(w, p, b) {
    const c = new i();
    b.forEach(function (I) {
      c.put(I.mode.bit, 4),
        c.put(I.getLength(), S.getCharCountIndicator(I.mode, w)),
        I.write(c);
    });
    const y = r.getSymbolTotalCodewords(w),
      B = a.getTotalCodewordsCount(w, p),
      A = (y - B) * 8;
    for (
      c.getLengthInBits() + 4 <= A && c.put(0, 4);
      c.getLengthInBits() % 8 !== 0;

    )
      c.putBit(0);
    const d = (A - c.getLengthInBits()) / 8;
    for (let I = 0; I < d; I++) c.put(I % 2 ? 17 : 236, 8);
    return C(c, w, p);
  }
  function C(w, p, b) {
    const c = r.getSymbolTotalCodewords(p),
      y = a.getTotalCodewordsCount(p, b),
      B = c - y,
      A = a.getBlocksCount(p, b),
      d = c % A,
      I = A - d,
      v = Math.floor(c / A),
      k = Math.floor(B / A),
      F = k + 1,
      z = v - k,
      Q = new u(z);
    let O = 0;
    const G = new Array(A),
      At = new Array(A);
    let X = 0;
    const ue = new Uint8Array(w.buffer);
    for (let j = 0; j < A; j++) {
      const x = j < I ? k : F;
      (G[j] = ue.slice(O, O + x)),
        (At[j] = Q.encode(G[j])),
        (O += x),
        (X = Math.max(X, x));
    }
    const Z = new Uint8Array(c);
    let Tt = 0,
      D,
      q;
    for (D = 0; D < X; D++)
      for (q = 0; q < A; q++) D < G[q].length && (Z[Tt++] = G[q][D]);
    for (D = 0; D < z; D++) for (q = 0; q < A; q++) Z[Tt++] = At[q][D];
    return Z;
  }
  function M(w, p, b, c) {
    let y;
    if (Array.isArray(w)) y = E.fromArray(w);
    else if (typeof w == "string") {
      let v = p;
      if (!v) {
        const k = E.rawSplit(w);
        v = f.getBestVersionForData(k, b);
      }
      y = E.fromString(w, v || 40);
    } else throw new Error("Invalid data");
    const B = f.getBestVersionForData(y, b);
    if (!B)
      throw new Error(
        "The amount of data is too big to be stored in a QR Code"
      );
    if (!p) p = B;
    else if (p < B)
      throw new Error(
        `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` +
          B +
          `.
`
      );
    const A = R(p, b, y),
      d = r.getSymbolSize(p),
      I = new n(d);
    return (
      g(I, p),
      P(I),
      l(I, p),
      h(I, b, 0),
      p >= 7 && N(I, p),
      T(I, A),
      isNaN(c) && (c = s.getBestMask(I, h.bind(null, I, b))),
      s.applyMask(c, I),
      h(I, b, c),
      {
        modules: I,
        version: p,
        errorCorrectionLevel: b,
        maskPattern: c,
        segments: y
      }
    );
  }
  return (
    (et.create = function (p, b) {
      if (typeof p > "u" || p === "") throw new Error("No input text");
      let c = o.M,
        y,
        B;
      return (
        typeof b < "u" &&
          ((c = o.from(b.errorCorrectionLevel, o.M)),
          (y = f.from(b.version)),
          (B = s.from(b.maskPattern)),
          b.toSJISFunc && r.setToSJISFunction(b.toSJISFunc)),
        M(p, y, c, B)
      );
    }),
    et
  );
}
var Bt = {},
  pt = {},
  xt;
function se() {
  return (
    xt ||
      ((xt = 1),
      (function (r) {
        function o(i) {
          if (
            (typeof i == "number" && (i = i.toString()), typeof i != "string")
          )
            throw new Error("Color should be defined as hex string");
          let n = i.slice().replace("#", "").split("");
          if (n.length < 3 || n.length === 5 || n.length > 8)
            throw new Error("Invalid hex color: " + i);
          (n.length === 3 || n.length === 4) &&
            (n = Array.prototype.concat.apply(
              [],
              n.map(function (e) {
                return [e, e];
              })
            )),
            n.length === 6 && n.push("F", "F");
          const t = parseInt(n.join(""), 16);
          return {
            r: (t >> 24) & 255,
            g: (t >> 16) & 255,
            b: (t >> 8) & 255,
            a: t & 255,
            hex: "#" + n.slice(0, 6).join("")
          };
        }
        (r.getOptions = function (n) {
          n || (n = {}), n.color || (n.color = {});
          const t =
              typeof n.margin > "u" || n.margin === null || n.margin < 0
                ? 4
                : n.margin,
            e = n.width && n.width >= 21 ? n.width : void 0,
            s = n.scale || 4;
          return {
            width: e,
            scale: e ? 4 : s,
            margin: t,
            color: {
              dark: o(n.color.dark || "#000000ff"),
              light: o(n.color.light || "#ffffffff")
            },
            type: n.type,
            rendererOpts: n.rendererOpts || {}
          };
        }),
          (r.getScale = function (n, t) {
            return t.width && t.width >= n + t.margin * 2
              ? t.width / (n + t.margin * 2)
              : t.scale;
          }),
          (r.getImageWidth = function (n, t) {
            const e = r.getScale(n, t);
            return Math.floor((n + t.margin * 2) * e);
          }),
          (r.qrToImageData = function (n, t, e) {
            const s = t.modules.size,
              a = t.modules.data,
              u = r.getScale(s, e),
              f = Math.floor((s + e.margin * 2) * u),
              m = e.margin * u,
              S = [e.color.light, e.color.dark];
            for (let E = 0; E < f; E++)
              for (let g = 0; g < f; g++) {
                let P = (E * f + g) * 4,
                  l = e.color.light;
                if (E >= m && g >= m && E < f - m && g < f - m) {
                  const N = Math.floor((E - m) / u),
                    h = Math.floor((g - m) / u);
                  l = S[a[N * s + h] ? 1 : 0];
                }
                (n[P++] = l.r), (n[P++] = l.g), (n[P++] = l.b), (n[P] = l.a);
              }
          });
      })(pt)),
    pt
  );
}
var te;
function ke() {
  return (
    te ||
      ((te = 1),
      (function (r) {
        const o = se();
        function i(t, e, s) {
          t.clearRect(0, 0, e.width, e.height),
            e.style || (e.style = {}),
            (e.height = s),
            (e.width = s),
            (e.style.height = s + "px"),
            (e.style.width = s + "px");
        }
        function n() {
          try {
            return document.createElement("canvas");
          } catch {
            throw new Error("You need to specify a canvas element");
          }
        }
        (r.render = function (e, s, a) {
          let u = a,
            f = s;
          typeof u > "u" && (!s || !s.getContext) && ((u = s), (s = void 0)),
            s || (f = n()),
            (u = o.getOptions(u));
          const m = o.getImageWidth(e.modules.size, u),
            S = f.getContext("2d"),
            E = S.createImageData(m, m);
          return (
            o.qrToImageData(E.data, e, u),
            i(S, f, m),
            S.putImageData(E, 0, 0),
            f
          );
        }),
          (r.renderToDataURL = function (e, s, a) {
            let u = a;
            typeof u > "u" && (!s || !s.getContext) && ((u = s), (s = void 0)),
              u || (u = {});
            const f = r.render(e, s, u),
              m = u.type || "image/png",
              S = u.rendererOpts || {};
            return f.toDataURL(m, S.quality);
          });
      })(Bt)),
    Bt
  );
}
var Rt = {},
  ee;
function Fe() {
  if (ee) return Rt;
  ee = 1;
  const r = se();
  function o(t, e) {
    const s = t.a / 255,
      a = e + '="' + t.hex + '"';
    return s < 1 ? a + " " + e + '-opacity="' + s.toFixed(2).slice(1) + '"' : a;
  }
  function i(t, e, s) {
    let a = t + e;
    return typeof s < "u" && (a += " " + s), a;
  }
  function n(t, e, s) {
    let a = "",
      u = 0,
      f = !1,
      m = 0;
    for (let S = 0; S < t.length; S++) {
      const E = Math.floor(S % e),
        g = Math.floor(S / e);
      !E && !f && (f = !0),
        t[S]
          ? (m++,
            (S > 0 && E > 0 && t[S - 1]) ||
              ((a += f ? i("M", E + s, 0.5 + g + s) : i("m", u, 0)),
              (u = 0),
              (f = !1)),
            (E + 1 < e && t[S + 1]) || ((a += i("h", m)), (m = 0)))
          : u++;
    }
    return a;
  }
  return (
    (Rt.render = function (e, s, a) {
      const u = r.getOptions(s),
        f = e.modules.size,
        m = e.modules.data,
        S = f + u.margin * 2,
        E = u.color.light.a
          ? "<path " +
            o(u.color.light, "fill") +
            ' d="M0 0h' +
            S +
            "v" +
            S +
            'H0z"/>'
          : "",
        g =
          "<path " +
          o(u.color.dark, "stroke") +
          ' d="' +
          n(m, f, u.margin) +
          '"/>',
        P = 'viewBox="0 0 ' + S + " " + S + '"',
        N =
          '<svg xmlns="http://www.w3.org/2000/svg" ' +
          (u.width ? 'width="' + u.width + '" height="' + u.width + '" ' : "") +
          P +
          ' shape-rendering="crispEdges">' +
          E +
          g +
          `</svg>
`;
      return typeof a == "function" && a(null, N), N;
    }),
    Rt
  );
}
var ne;
function ze() {
  if (ne) return J;
  ne = 1;
  const r = Ee(),
    o = _e(),
    i = ke(),
    n = Fe();
  function t(e, s, a, u, f) {
    const m = [].slice.call(arguments, 1),
      S = m.length,
      E = typeof m[S - 1] == "function";
    if (!E && !r()) throw new Error("Callback required as last argument");
    if (E) {
      if (S < 2) throw new Error("Too few arguments provided");
      S === 2
        ? ((f = a), (a = s), (s = u = void 0))
        : S === 3 &&
          (s.getContext && typeof f > "u"
            ? ((f = u), (u = void 0))
            : ((f = u), (u = a), (a = s), (s = void 0)));
    } else {
      if (S < 1) throw new Error("Too few arguments provided");
      return (
        S === 1
          ? ((a = s), (s = u = void 0))
          : S === 2 && !s.getContext && ((u = a), (a = s), (s = void 0)),
        new Promise(function (g, P) {
          try {
            const l = o.create(a, u);
            g(e(l, s, u));
          } catch (l) {
            P(l);
          }
        })
      );
    }
    try {
      const g = o.create(a, u);
      f(null, e(g, s, u));
    } catch (g) {
      f(g);
    }
  }
  return (
    (J.create = o.create),
    (J.toCanvas = t.bind(null, i.render)),
    (J.toDataURL = t.bind(null, i.renderToDataURL)),
    (J.toString = t.bind(null, function (e, s, a) {
      return n.render(e, a);
    })),
    J
  );
}
var Ve = ze();
const He = ae(Ve),
  Ke = {
    tag: W.string.validate(r => ["canvas", "img"].includes(r)).def("canvas"),
    text: { type: [String, Array], default: null },
    options: { type: Object, default: () => ({}) },
    width: W.number.def(200),
    logo: { type: [String, Object], default: () => "" },
    disabled: W.bool.def(!1),
    disabledText: W.string.def("")
  },
  Oe = ce({
    name: "ReQrcode",
    props: Ke,
    emits: ["done", "click", "disabled-click"],
    setup(r, { emit: o }) {
      const { toCanvas: i, toDataURL: n } = He,
        t = St(!0),
        e = St(null),
        s = It(() => String(r.text)),
        a = It(() => ({ width: r.width + "px", height: r.width + "px" })),
        u = async () => {
          await me();
          const l = we(r.options || {});
          if (r.tag === "canvas") {
            l.errorCorrectionLevel = l.errorCorrectionLevel || S(V(s));
            const N = await m(V(s), l);
            l.scale = r.width === 0 ? void 0 : (r.width / N) * 4;
            const h = await i(V(e), V(s), l);
            if (r.logo) {
              const T = await f(h);
              o("done", T), (t.value = !1);
            } else o("done", h.toDataURL()), (t.value = !1);
          } else {
            const N = await n(s.value, {
              errorCorrectionLevel: "H",
              width: r.width,
              ...l
            });
            (V(e).src = N), o("done", N), (t.value = !1);
          }
        };
      le(
        () => s.value,
        l => {
          l && u();
        },
        { deep: !0, immediate: !0 }
      );
      const f = l => {
          const N = l.width,
            h = Object.assign(
              {
                logoSize: 0.15,
                bgColor: "#ffffff",
                borderSize: 0.05,
                crossOrigin: "anonymous",
                borderRadius: 8,
                logoRadius: 0
              },
              Pt(r.logo) ? {} : r.logo
            ),
            {
              logoSize: T = 0.15,
              bgColor: R = "#ffffff",
              borderSize: C = 0.05,
              crossOrigin: M = "anonymous",
              borderRadius: w = 8,
              logoRadius: p = 0
            } = h,
            b = Pt(r.logo) ? r.logo : r.logo.src,
            c = N * T,
            y = (N * (1 - T)) / 2,
            B = N * (T + C),
            A = (N * (1 - T - C)) / 2,
            d = l.getContext("2d");
          if (!d) return;
          E(d)(A, A, B, B, w), (d.fillStyle = R), d.fill();
          const I = new Image();
          (M || p) && I.setAttribute("crossOrigin", M), (I.src = b);
          const v = F => {
              d.drawImage(F, y, y, c, c);
            },
            k = F => {
              const z = document.createElement("canvas");
              (z.width = y + c), (z.height = y + c);
              const Q = z.getContext("2d");
              if (
                !Q ||
                !d ||
                (Q.drawImage(F, y, y, c, c), E(d)(y, y, c, c, p), !d)
              )
                return;
              const O = d.createPattern(z, "no-repeat");
              O && ((d.fillStyle = O), d.fill());
            };
          return new Promise(F => {
            I.onload = () => {
              p ? k(I) : v(I), F(l.toDataURL());
            };
          });
        },
        m = async (l, N) => {
          const h = document.createElement("canvas");
          return await i(h, l, N), h.width;
        },
        S = l => (l.length > 36 ? "M" : l.length > 16 ? "Q" : "H"),
        E = l => (N, h, T, R, C) => {
          const M = Math.min(T, R);
          return (
            C > M / 2 && (C = M / 2),
            l.beginPath(),
            l.moveTo(N + C, h),
            l.arcTo(N + T, h, N + T, h + R, C),
            l.arcTo(N + T, h + R, N, h + R, C),
            l.arcTo(N, h + R, N, h, C),
            l.arcTo(N, h, N + T, h, C),
            l.closePath(),
            l
          );
        },
        g = () => {
          o("click");
        },
        P = () => {
          o("disabled-click");
        };
      return () =>
        U(he, null, [
          fe(
            U("div", { class: "qrcode relative inline-block", style: V(a) }, [
              r.tag === "canvas"
                ? U("canvas", { ref: e, onClick: g }, null)
                : U("img", { ref: e, onClick: g }, null),
              r.disabled &&
                U(
                  "div",
                  {
                    class:
                      "qrcode--disabled absolute top-0 left-0 flex w-full h-full items-center justify-center",
                    onClick: P
                  },
                  [
                    U(
                      "div",
                      { class: "absolute top-[50%] left-[50%] font-bold" },
                      [
                        U(
                          ge("iconify-icon-offline"),
                          {
                            class: "cursor-pointer",
                            icon: ye,
                            width: "30",
                            color: "var(--el-color-primary)"
                          },
                          null
                        ),
                        U("div", null, [r.disabledText])
                      ]
                    )
                  ]
                )
            ]),
            [[de("loading"), V(t)]]
          )
        ]);
    }
  }),
  Qe = Ce(Oe);
export { Qe as R };
