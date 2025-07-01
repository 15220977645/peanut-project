import {
  K as se,
  L as J,
  r as de,
  B as oe,
  d as re,
  b as E,
  i as P,
  z as he,
  g as pe,
  w as A,
  u as fe,
  a as M,
  h as W,
  o as ye
} from "./index-CnxsT9tm.js";
var I = {
    d: (e, n) => {
      for (var t in n)
        I.o(n, t) &&
          !I.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
    },
    o: (e, n) => Object.prototype.hasOwnProperty.call(e, n)
  },
  ae = {};
function Q(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, l = new Array(n); t < n; t++) l[t] = e[t];
  return l;
}
function le(e, n) {
  if (e) {
    if (typeof e == "string") return Q(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    return (
      t === "Object" && e.constructor && (t = e.constructor.name),
      t === "Map" || t === "Set"
        ? Array.from(e)
        : t === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? Q(e, n)
        : void 0
    );
  }
}
function _(e) {
  return (
    (function (n) {
      if (Array.isArray(n)) return Q(n);
    })(e) ||
    (function (n) {
      if (
        (typeof Symbol < "u" && n[Symbol.iterator] != null) ||
        n["@@iterator"] != null
      )
        return Array.from(n);
    })(e) ||
    le(e) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function F(e, n, t) {
  return (
    n in e
      ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[n] = t),
    e
  );
}
I.d(ae, { Z: () => we });
const r =
    ((X = {
      computed: () => he,
      createTextVNode: () => P,
      createVNode: () => E,
      defineComponent: () => re,
      reactive: () => oe,
      ref: () => de,
      watch: () => J,
      watchEffect: () => se
    }),
    (z = {}),
    I.d(z, X),
    z),
  ge = (0, r.defineComponent)({
    props: { data: { required: !0, type: String }, onClick: Function },
    render: function () {
      var e = this.data,
        n = this.onClick;
      return (0, r.createVNode)(
        "span",
        { class: "vjs-tree-brackets", onClick: n },
        [e]
      );
    }
  }),
  me = (0, r.defineComponent)({
    emits: ["change", "update:modelValue"],
    props: {
      checked: { type: Boolean, default: !1 },
      isMultiple: Boolean,
      onChange: Function
    },
    setup: function (e, n) {
      var t = n.emit;
      return {
        uiType: (0, r.computed)(function () {
          return e.isMultiple ? "checkbox" : "radio";
        }),
        model: (0, r.computed)({
          get: function () {
            return e.checked;
          },
          set: function (l) {
            return t("update:modelValue", l);
          }
        })
      };
    },
    render: function () {
      var e = this.uiType,
        n = this.model,
        t = this.$emit;
      return (0, r.createVNode)(
        "label",
        {
          class: ["vjs-check-controller", n ? "is-checked" : ""],
          onClick: function (l) {
            return l.stopPropagation();
          }
        },
        [
          (0, r.createVNode)(
            "span",
            { class: "vjs-check-controller-inner is-".concat(e) },
            null
          ),
          (0, r.createVNode)(
            "input",
            {
              checked: n,
              class: "vjs-check-controller-original is-".concat(e),
              type: e,
              onChange: function () {
                return t("change", n);
              }
            },
            null
          )
        ]
      );
    }
  }),
  ve = (0, r.defineComponent)({
    props: { nodeType: { required: !0, type: String }, onClick: Function },
    render: function () {
      var e = this.nodeType,
        n = this.onClick,
        t = e === "objectStart" || e === "arrayStart";
      return t || e === "objectCollapsed" || e === "arrayCollapsed"
        ? (0, r.createVNode)(
            "span",
            {
              class: "vjs-carets vjs-carets-".concat(t ? "open" : "close"),
              onClick: n
            },
            [
              (0, r.createVNode)(
                "svg",
                {
                  viewBox: "0 0 1024 1024",
                  focusable: "false",
                  "data-icon": "caret-down",
                  width: "1em",
                  height: "1em",
                  fill: "currentColor",
                  "aria-hidden": "true"
                },
                [
                  (0, r.createVNode)(
                    "path",
                    {
                      d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                    },
                    null
                  )
                ]
              )
            ]
          )
        : null;
    }
  });
var X, z;
function q(e) {
  return (
    (q =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (n) {
            return typeof n;
          }
        : function (n) {
            return n &&
              typeof Symbol == "function" &&
              n.constructor === Symbol &&
              n !== Symbol.prototype
              ? "symbol"
              : typeof n;
          }),
    q(e)
  );
}
function ie(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function O(e) {
  var n =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "root",
    t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
    l = arguments.length > 3 ? arguments[3] : void 0,
    i = l || {},
    f = i.key,
    v = i.index,
    d = i.type,
    w = d === void 0 ? "content" : d,
    y = i.showComma,
    N = y !== void 0 && y,
    k = i.length,
    S = k === void 0 ? 1 : k,
    V = ie(e);
  if (V === "array") {
    var T = G(
      e.map(function (m, s, o) {
        return O(m, "".concat(n, "[").concat(s, "]"), t + 1, {
          index: s,
          showComma: s !== o.length - 1,
          length: S,
          type: w
        });
      })
    );
    return [
      O("[", n, t, {
        showComma: !1,
        key: f,
        length: e.length,
        type: "arrayStart"
      })[0]
    ].concat(
      T,
      O("]", n, t, { showComma: N, length: e.length, type: "arrayEnd" })[0]
    );
  }
  if (V === "object") {
    var j = Object.keys(e),
      L = G(
        j.map(function (m, s, o) {
          return O(
            e[m],
            /^[a-zA-Z_]\w*$/.test(m)
              ? "".concat(n, ".").concat(m)
              : "".concat(n, '["').concat(m, '"]'),
            t + 1,
            { key: m, showComma: s !== o.length - 1, length: S, type: w }
          );
        })
      );
    return [
      O("{", n, t, {
        showComma: !1,
        key: f,
        index: v,
        length: j.length,
        type: "objectStart"
      })[0]
    ].concat(
      L,
      O("}", n, t, { showComma: N, length: j.length, type: "objectEnd" })[0]
    );
  }
  return [
    {
      content: e,
      level: t,
      key: f,
      index: v,
      path: n,
      showComma: N,
      length: S,
      type: w
    }
  ];
}
function G(e) {
  if (typeof Array.prototype.flat == "function") return e.flat();
  for (var n = _(e), t = []; n.length; ) {
    var l = n.shift();
    Array.isArray(l) ? n.unshift.apply(n, _(l)) : t.push(l);
  }
  return t;
}
function R(e) {
  var n =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : new WeakMap();
  if (e == null) return e;
  if (e instanceof Date) return new Date(e);
  if (e instanceof RegExp) return new RegExp(e);
  if (q(e) !== "object") return e;
  if (n.get(e)) return n.get(e);
  if (Array.isArray(e)) {
    var t = e.map(function (f) {
      return R(f, n);
    });
    return n.set(e, t), t;
  }
  var l = {};
  for (var i in e) l[i] = R(e[i], n);
  return n.set(e, l), l;
}
function ee(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    n &&
      (l = l.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      t.push.apply(t, l);
  }
  return t;
}
function te(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? ee(Object(t), !0).forEach(function (l) {
          F(e, l, t[l]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ee(Object(t)).forEach(function (l) {
          Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
        });
  }
  return e;
}
var ce = {
  showLength: { type: Boolean, default: !1 },
  showDoubleQuotes: { type: Boolean, default: !0 },
  renderNodeKey: Function,
  renderNodeValue: Function,
  selectableType: String,
  showSelectController: { type: Boolean, default: !1 },
  showLine: { type: Boolean, default: !0 },
  showLineNumber: { type: Boolean, default: !1 },
  selectOnClickNode: { type: Boolean, default: !0 },
  nodeSelectable: {
    type: Function,
    default: function () {
      return !0;
    }
  },
  highlightSelectedNode: { type: Boolean, default: !0 },
  showIcon: { type: Boolean, default: !1 },
  theme: { type: String, default: "light" },
  showKeyValueSpace: { type: Boolean, default: !0 },
  editable: { type: Boolean, default: !1 },
  editableTrigger: { type: String, default: "click" },
  onNodeClick: { type: Function },
  onBracketsClick: { type: Function },
  onIconClick: { type: Function },
  onValueChange: { type: Function }
};
const be = (0, r.defineComponent)({
  name: "TreeNode",
  props: te(
    te({}, ce),
    {},
    {
      node: { type: Object, required: !0 },
      collapsed: Boolean,
      checked: Boolean,
      style: Object,
      onSelectedChange: { type: Function }
    }
  ),
  emits: [
    "nodeClick",
    "bracketsClick",
    "iconClick",
    "selectedChange",
    "valueChange"
  ],
  setup: function (e, n) {
    var t = n.emit,
      l = (0, r.computed)(function () {
        return ie(e.node.content);
      }),
      i = (0, r.computed)(function () {
        return "vjs-value vjs-value-".concat(l.value);
      }),
      f = (0, r.computed)(function () {
        return e.showDoubleQuotes ? '"'.concat(e.node.key, '"') : e.node.key;
      }),
      v = (0, r.computed)(function () {
        return e.selectableType === "multiple";
      }),
      d = (0, r.computed)(function () {
        return e.selectableType === "single";
      }),
      w = (0, r.computed)(function () {
        return e.nodeSelectable(e.node) && (v.value || d.value);
      }),
      y = (0, r.reactive)({ editing: !1 }),
      N = function (s) {
        var o,
          a,
          c =
            (a = (o = s.target) === null || o === void 0 ? void 0 : o.value) ===
            "null"
              ? null
              : a === "undefined"
              ? void 0
              : a === "true" ||
                (a !== "false" &&
                  (a[0] + a[a.length - 1] === '""' ||
                  a[0] + a[a.length - 1] === "''"
                    ? a.slice(1, -1)
                    : (typeof Number(a) == "number" && !isNaN(Number(a))) ||
                      a === "NaN"
                    ? Number(a)
                    : a));
        t("valueChange", c, e.node.path);
      },
      k = (0, r.computed)(function () {
        var s,
          o = (s = e.node) === null || s === void 0 ? void 0 : s.content;
        return (
          o === null ? (o = "null") : o === void 0 && (o = "undefined"),
          l.value === "string" ? '"'.concat(o, '"') : o + ""
        );
      }),
      S = function () {
        var s = e.renderNodeValue;
        return s ? s({ node: e.node, defaultValue: k.value }) : k.value;
      },
      V = function () {
        t("bracketsClick", !e.collapsed, e.node);
      },
      T = function () {
        t("iconClick", !e.collapsed, e.node);
      },
      j = function () {
        t("selectedChange", e.node);
      },
      L = function () {
        t("nodeClick", e.node),
          w.value && e.selectOnClickNode && t("selectedChange", e.node);
      },
      m = function (s) {
        if (e.editable && !y.editing) {
          y.editing = !0;
          var o = function a(c) {
            var u;
            c.target !== s.target &&
              ((u = c.target) === null || u === void 0
                ? void 0
                : u.parentElement) !== s.target &&
              ((y.editing = !1), document.removeEventListener("click", a));
          };
          document.removeEventListener("click", o),
            document.addEventListener("click", o);
        }
      };
    return function () {
      var s,
        o = e.node;
      return (0, r.createVNode)(
        "div",
        {
          class: {
            "vjs-tree-node": !0,
            "has-selector": e.showSelectController,
            "has-carets": e.showIcon,
            "is-highlight": e.highlightSelectedNode && e.checked,
            dark: e.theme === "dark"
          },
          onClick: L,
          style: e.style
        },
        [
          e.showLineNumber &&
            (0, r.createVNode)("span", { class: "vjs-node-index" }, [o.id + 1]),
          e.showSelectController &&
            w.value &&
            o.type !== "objectEnd" &&
            o.type !== "arrayEnd" &&
            (0, r.createVNode)(
              me,
              { isMultiple: v.value, checked: e.checked, onChange: j },
              null
            ),
          (0, r.createVNode)("div", { class: "vjs-indent" }, [
            Array.from(Array(o.level)).map(function (a, c) {
              return (0,
              r.createVNode)("div", { key: c, class: { "vjs-indent-unit": !0, "has-line": e.showLine } }, null);
            }),
            e.showIcon &&
              (0, r.createVNode)(ve, { nodeType: o.type, onClick: T }, null)
          ]),
          o.key &&
            (0, r.createVNode)("span", { class: "vjs-key" }, [
              ((s = e.renderNodeKey),
              s ? s({ node: e.node, defaultKey: f.value || "" }) : f.value),
              (0, r.createVNode)("span", { class: "vjs-colon" }, [
                ":".concat(e.showKeyValueSpace ? " " : "")
              ])
            ]),
          (0, r.createVNode)("span", null, [
            o.type !== "content" && o.content
              ? (0, r.createVNode)(
                  ge,
                  { data: o.content.toString(), onClick: V },
                  null
                )
              : (0, r.createVNode)(
                  "span",
                  {
                    class: i.value,
                    onClick:
                      !e.editable ||
                      (e.editableTrigger && e.editableTrigger !== "click")
                        ? void 0
                        : m,
                    onDblclick:
                      e.editable && e.editableTrigger === "dblclick"
                        ? m
                        : void 0
                  },
                  [
                    e.editable && y.editing
                      ? (0, r.createVNode)(
                          "input",
                          {
                            value: k.value,
                            onChange: N,
                            style: {
                              padding: "3px 8px",
                              border: "1px solid #eee",
                              boxShadow: "none",
                              boxSizing: "border-box",
                              borderRadius: 5,
                              fontFamily: "inherit"
                            }
                          },
                          null
                        )
                      : S()
                  ]
                ),
            o.showComma && (0, r.createVNode)("span", null, [","]),
            e.showLength &&
              e.collapsed &&
              (0, r.createVNode)("span", { class: "vjs-comment" }, [
                (0, r.createTextVNode)(" // "),
                o.length,
                (0, r.createTextVNode)(" items ")
              ])
          ])
        ]
      );
    };
  }
});
function ne(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    n &&
      (l = l.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      t.push.apply(t, l);
  }
  return t;
}
function g(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? ne(Object(t), !0).forEach(function (l) {
          F(e, l, t[l]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ne(Object(t)).forEach(function (l) {
          Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
        });
  }
  return e;
}
const we = (0, r.defineComponent)({
  name: "Tree",
  props: g(
    g({}, ce),
    {},
    {
      data: { type: [String, Number, Boolean, Array, Object], default: null },
      collapsedNodeLength: { type: Number, default: 1 / 0 },
      deep: { type: Number, default: 1 / 0 },
      pathCollapsible: {
        type: Function,
        default: function () {
          return !1;
        }
      },
      rootPath: { type: String, default: "root" },
      virtual: { type: Boolean, default: !1 },
      height: { type: Number, default: 400 },
      itemHeight: { type: Number, default: 20 },
      selectedValue: {
        type: [String, Array],
        default: function () {
          return "";
        }
      },
      collapsedOnClickBrackets: { type: Boolean, default: !0 },
      style: Object,
      onSelectedChange: { type: Function },
      theme: { type: String, default: "light" }
    }
  ),
  slots: ["renderNodeKey", "renderNodeValue"],
  emits: [
    "nodeClick",
    "bracketsClick",
    "iconClick",
    "selectedChange",
    "update:selectedValue",
    "update:data"
  ],
  setup: function (e, n) {
    var t = n.emit,
      l = n.slots,
      i = (0, r.ref)(),
      f = (0, r.computed)(function () {
        return O(e.data, e.rootPath);
      }),
      v = function (o, a) {
        return f.value.reduce(function (c, u) {
          var h,
            p = u.level >= o || u.length >= a,
            b =
              (h = e.pathCollapsible) === null || h === void 0
                ? void 0
                : h.call(e, u);
          return (u.type !== "objectStart" && u.type !== "arrayStart") ||
            (!p && !b)
            ? c
            : g(g({}, c), {}, F({}, u.path, 1));
        }, {});
      },
      d = (0, r.reactive)({
        translateY: 0,
        visibleData: null,
        hiddenPaths: v(e.deep, e.collapsedNodeLength)
      }),
      w = (0, r.computed)(function () {
        for (var o = null, a = [], c = f.value.length, u = 0; u < c; u++) {
          var h = g(g({}, f.value[u]), {}, { id: u }),
            p = d.hiddenPaths[h.path];
          if (o && o.path === h.path) {
            var b = o.type === "objectStart",
              D = g(
                g(g({}, h), o),
                {},
                {
                  showComma: h.showComma,
                  content: b ? "{...}" : "[...]",
                  type: b ? "objectCollapsed" : "arrayCollapsed"
                }
              );
            (o = null), a.push(D);
          } else {
            if (p && !o) {
              o = h;
              continue;
            }
            if (o) continue;
            a.push(h);
          }
        }
        return a;
      }),
      y = (0, r.computed)(function () {
        var o = e.selectedValue;
        return o && e.selectableType === "multiple" && Array.isArray(o)
          ? o
          : [o];
      }),
      N = (0, r.computed)(function () {
        return !e.selectableType ||
          e.selectOnClickNode ||
          e.showSelectController
          ? ""
          : "When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail.";
      }),
      k = function () {
        var o = w.value;
        if (e.virtual) {
          var a,
            c = e.height / e.itemHeight,
            u =
              ((a = i.value) === null || a === void 0 ? void 0 : a.scrollTop) ||
              0,
            h = Math.floor(u / e.itemHeight),
            p = h < 0 ? 0 : h + c > o.length ? o.length - c : h;
          p < 0 && (p = 0);
          var b = p + c;
          (d.translateY = p * e.itemHeight),
            (d.visibleData = o.filter(function (D, B) {
              return B >= p && B < b;
            }));
        } else d.visibleData = o;
      },
      S = function () {
        k();
      },
      V = function (o) {
        var a,
          c,
          u = o.path,
          h = e.selectableType;
        if (h === "multiple") {
          var p = y.value.findIndex(function (C) {
              return C === u;
            }),
            b = _(y.value);
          p !== -1 ? b.splice(p, 1) : b.push(u),
            t("update:selectedValue", b),
            t("selectedChange", b, _(y.value));
        } else if (h === "single" && y.value[0] !== u) {
          var D = ((a = y.value),
            (c = 1),
            (function (C) {
              if (Array.isArray(C)) return C;
            })(a) ||
              (function (C, Y) {
                var x =
                  C == null
                    ? null
                    : (typeof Symbol < "u" && C[Symbol.iterator]) ||
                      C["@@iterator"];
                if (x != null) {
                  var Z,
                    $,
                    K = [],
                    H = !0,
                    U = !1;
                  try {
                    for (
                      x = x.call(C);
                      !(H = (Z = x.next()).done) &&
                      (K.push(Z.value), !Y || K.length !== Y);
                      H = !0
                    );
                  } catch (ue) {
                    (U = !0), ($ = ue);
                  } finally {
                    try {
                      H || x.return == null || x.return();
                    } finally {
                      if (U) throw $;
                    }
                  }
                  return K;
                }
              })(a, c) ||
              le(a, c) ||
              (function () {
                throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              })())[0],
            B = u;
          t("update:selectedValue", B), t("selectedChange", B, D);
        }
      },
      T = function (o) {
        t("nodeClick", o);
      },
      j = function (o, a) {
        if (o) d.hiddenPaths = g(g({}, d.hiddenPaths), {}, F({}, a, 1));
        else {
          var c = g({}, d.hiddenPaths);
          delete c[a], (d.hiddenPaths = c);
        }
      },
      L = function (o, a) {
        e.collapsedOnClickBrackets && j(o, a.path), t("bracketsClick", o, a);
      },
      m = function (o, a) {
        j(o, a.path), t("iconClick", o, a);
      },
      s = function (o, a) {
        var c = R(e.data),
          u = e.rootPath;
        new Function("data", "val", "data".concat(a.slice(u.length), "=val"))(
          c,
          o
        ),
          t("update:data", c);
      };
    return (
      (0, r.watchEffect)(function () {
        N.value &&
          (function (o) {
            throw new Error("[VueJSONPretty] ".concat(o));
          })(N.value);
      }),
      (0, r.watchEffect)(function () {
        w.value && k();
      }),
      (0, r.watch)(
        function () {
          return e.deep;
        },
        function (o) {
          o && (d.hiddenPaths = v(o, e.collapsedNodeLength));
        }
      ),
      (0, r.watch)(
        function () {
          return e.collapsedNodeLength;
        },
        function (o) {
          o && (d.hiddenPaths = v(e.deep, o));
        }
      ),
      function () {
        var o,
          a,
          c =
            (o = e.renderNodeKey) !== null && o !== void 0
              ? o
              : l.renderNodeKey,
          u =
            (a = e.renderNodeValue) !== null && a !== void 0
              ? a
              : l.renderNodeValue,
          h =
            d.visibleData &&
            d.visibleData.map(function (p) {
              return (0,
              r.createVNode)(be, { key: p.id, node: p, collapsed: !!d.hiddenPaths[p.path], theme: e.theme, showDoubleQuotes: e.showDoubleQuotes, showLength: e.showLength, checked: y.value.includes(p.path), selectableType: e.selectableType, showLine: e.showLine, showLineNumber: e.showLineNumber, showSelectController: e.showSelectController, selectOnClickNode: e.selectOnClickNode, nodeSelectable: e.nodeSelectable, highlightSelectedNode: e.highlightSelectedNode, editable: e.editable, editableTrigger: e.editableTrigger, showIcon: e.showIcon, showKeyValueSpace: e.showKeyValueSpace, renderNodeKey: c, renderNodeValue: u, onNodeClick: T, onBracketsClick: L, onIconClick: m, onSelectedChange: V, onValueChange: s, style: e.itemHeight && e.itemHeight !== 20 ? { lineHeight: "".concat(e.itemHeight, "px") } : {} }, null);
            });
        return (0, r.createVNode)(
          "div",
          {
            ref: i,
            class: {
              "vjs-tree": !0,
              "is-virtual": e.virtual,
              dark: e.theme === "dark"
            },
            onScroll: e.virtual ? S : void 0,
            style: e.showLineNumber
              ? g(
                  {
                    paddingLeft: "".concat(
                      12 * Number(f.value.length.toString().length),
                      "px"
                    )
                  },
                  e.style
                )
              : e.style
          },
          [
            e.virtual
              ? (0, r.createVNode)(
                  "div",
                  {
                    class: "vjs-tree-list",
                    style: { height: "".concat(e.height, "px") }
                  },
                  [
                    (0, r.createVNode)(
                      "div",
                      {
                        class: "vjs-tree-list-holder",
                        style: {
                          height: "".concat(w.value.length * e.itemHeight, "px")
                        }
                      },
                      [
                        (0, r.createVNode)(
                          "div",
                          {
                            class: "vjs-tree-list-holder-inner",
                            style: {
                              transform: "translateY(".concat(
                                d.translateY,
                                "px)"
                              )
                            }
                          },
                          [h]
                        )
                      ]
                    )
                  ]
                )
              : h
          ]
        );
      }
    );
  }
});
var ke = ae.Z;
const Ce = { class: "card-header" },
  Ne = { class: "font-medium" },
  je = { class: "font-medium" },
  Oe = re({
    name: "JsonEditor",
    __name: "index",
    setup(e) {
      const n = {
          status: 200,
          text: "",
          error: null,
          config: void 0,
          data: [
            {
              news_id: 51184,
              title:
                "iPhone X Review: Innovative future with real black technology",
              source: "Netease phone"
            },
            {
              news_id: 51183,
              title:
                "Traffic paradise: How to design streets for people and unmanned vehicles in the future?",
              source: "Netease smart",
              link: "http://netease.smart/traffic-paradise/1235"
            },
            {
              news_id: 51182,
              title:
                "Teslamask's American Business Relations: The government does not pay billions to build factories",
              source: "AI Finance",
              members: ["Daniel", "Mike", "John"]
            }
          ]
        },
        t = oe({
          val: JSON.stringify(n),
          data: n,
          showLine: !0,
          showLineNumber: !0,
          showDoubleQuotes: !0,
          showLength: !0,
          editable: !0,
          showIcon: !0,
          editableTrigger: "click",
          deep: 3
        });
      return (
        J(
          () => t.val,
          l => {
            try {
              t.data = JSON.parse(l);
            } catch {}
          }
        ),
        J(
          () => t.data,
          l => {
            try {
              t.val = JSON.stringify(l);
            } catch {}
          }
        ),
        (l, i) => {
          const f = W("el-link"),
            v = W("el-card");
          return (
            ye(),
            pe(
              v,
              { shadow: "never" },
              {
                header: A(() => [
                  M("div", Ce, [
                    M("span", Ne, [
                      i[2] || (i[2] = P(" JSON编辑器组件，采用开源的 ")),
                      E(
                        f,
                        {
                          href: "https://github.com/leezng/vue-json-pretty",
                          target: "_blank",
                          style: { margin: "0 4px 5px", "font-size": "16px" }
                        },
                        {
                          default: A(
                            () => i[1] || (i[1] = [P(" vue-json-pretty ")])
                          ),
                          _: 1
                        }
                      ),
                      i[3] || (i[3] = P(" （支持大数据量）。 "))
                    ]),
                    M("span", je, [
                      i[5] ||
                        (i[5] = P(
                          " 当然我们还有一款代码编辑器组件推荐（这里就不做演示了），采用开源的 "
                        )),
                      E(
                        f,
                        {
                          href: "https://github.com/surmon-china/vue-codemirror",
                          target: "_blank",
                          style: { margin: "0 4px 5px", "font-size": "16px" }
                        },
                        {
                          default: A(
                            () => i[4] || (i[4] = [P(" codemirror6 ")])
                          ),
                          _: 1
                        }
                      )
                    ])
                  ])
                ]),
                default: A(() => [
                  E(
                    fe(ke),
                    {
                      data: t.data,
                      "onUpdate:data": i[0] || (i[0] = d => (t.data = d)),
                      deep: t.deep,
                      "show-double-quotes": t.showDoubleQuotes,
                      "show-line": t.showLine,
                      "show-length": t.showLength,
                      "show-icon": t.showIcon,
                      "show-line-number": t.showLineNumber,
                      editable: t.editable,
                      "editable-trigger": t.editableTrigger
                    },
                    null,
                    8,
                    [
                      "data",
                      "deep",
                      "show-double-quotes",
                      "show-line",
                      "show-length",
                      "show-icon",
                      "show-line-number",
                      "editable",
                      "editable-trigger"
                    ]
                  )
                ]),
                _: 1
              }
            )
          );
        }
      );
    }
  });
export { Oe as default };
