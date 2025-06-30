import { a as ee } from "./data-BuVMDA81.js";
import {
  b as ne,
  d as te,
  bf as ae,
  r as p,
  z as R,
  L as j,
  N as ie,
  n as H,
  g as O,
  o as s,
  c as m,
  v as h,
  F as z,
  k as D,
  O as I,
  ab as q,
  aI as K,
  a as M,
  j as w,
  A as C,
  y as L,
  p as V,
  t as W,
  G as N,
  bg as _e,
  be as oe
} from "./index-D6DS3gmo.js";
import { m as ue } from "./message-BqryS_0l.js";
const G = function (e) {
  let r = Array.isArray(e) ? [] : {};
  if (e && typeof e == "object")
    for (let _ in e)
      e.hasOwnProperty(_) &&
        (e[_] && typeof e[_] == "object" ? (r[_] = G(e[_])) : (r[_] = e[_]));
  return r;
};
var y = te({
  name: "MouseMenu",
  props: {
    appendToBody: { type: Boolean, default: !0 },
    menuWidth: { type: Number, default: 200 },
    menuList: { type: Array, required: !0 },
    menuHiddenFn: { type: Function },
    hasIcon: { type: Boolean, default: !1 },
    iconType: { type: String, default: "font-icon" },
    menuWrapperCss: Object,
    menuItemCss: Object,
    el: { type: Object, required: !0 },
    params: { type: [String, Number, Array, Object] },
    useLongPressInMobile: Boolean,
    longPressDuration: Number,
    longPressPreventDefault: [Function, Boolean],
    injectCloseListener: { type: Boolean, default: !0 },
    customClass: String,
    disabled: { type: Function }
  },
  emits: ["open", "close"],
  expose: ["show", "close", "showMenu"],
  setup(e, { emit: r }) {
    const _ = p(0),
      d = p(0),
      o = p(!1),
      g = p(0),
      a = p(0),
      v = p(!1),
      t = p(null),
      f = p([]),
      F = R(() => e.menuList.some(i => i.children && i.children.length > 0)),
      x = p(10),
      S = p();
    j(v, async i => {
      var u, l;
      if (i) {
        await H();
        let c = S.value;
        e.menuWrapperCss &&
          Object.keys(e.menuWrapperCss).map(b => {
            c.style.setProperty(
              `--menu-${b}`,
              e.menuWrapperCss && e.menuWrapperCss[b]
            );
          }),
          e.menuItemCss &&
            Object.keys(e.menuItemCss).map(b => {
              c.style.setProperty(
                `--menu-item-${b}`,
                e.menuItemCss && e.menuItemCss[b]
              );
            });
        let n =
          (l = (u = e.menuItemCss) == null ? void 0 : u.arrowSize) == null
            ? void 0
            : l.match(/\d+/);
        n ? (x.value = ~~n[0] || 10) : (x.value = 10),
          c.style.setProperty("--menu-item-arrowRealSize", x.value / 2 + "px"),
          r("open", e.params, t.value, e.el);
      } else r("close", e.params, t.value, e.el);
    });
    const J = (i, u) => {
        i.disabled ||
          (i.fn &&
            typeof i.fn == "function" &&
            i.fn(e.params, t.value, e.el, u) === !1) ||
          (v.value = !1);
      },
      U = (i, u) => {
        if (!i.disabled) {
          if (i.fn && typeof i.fn == "function" && !i.disabled) {
            if (i.fn(e.params, t.value, e.el, u) === !1) return;
            o.value = !1;
          }
          v.value = !1;
        }
      },
      Q = async (i, u) => {
        if (u.children && !u.disabled) {
          (o.value = !0), await H();
          const l = i.currentTarget;
          if (!l) return;
          const { offsetWidth: c } = l,
            n = l.querySelector(".__menu__sub__wrapper");
          if (!n) return;
          const { offsetWidth: b, offsetHeight: k } = n,
            { innerWidth: Z, innerHeight: A } = window,
            { top: E, left: B } = l.getBoundingClientRect();
          B + c + b > Z - 5 ? (_.value = B - b + 5) : (_.value = B + c),
            E + k > A - 5 ? (d.value = A - k) : (d.value = E + 5);
        }
      },
      P = (i, u, l, c) =>
        i.map(
          n => (
            n.children && (n.children = P(n.children, u, l, c)),
            n.label &&
              typeof n.label == "function" &&
              (n.label = n.label(c, u, l)),
            n.tips && typeof n.tips == "function" && (n.tips = n.tips(c, u, l)),
            n.icon && typeof n.icon == "function" && (n.icon = n.icon(c, u, l)),
            n.hidden &&
              typeof n.hidden == "function" &&
              (n.hidden = n.hidden(c, u, l)),
            n.disabled &&
              typeof n.disabled == "function" &&
              (n.disabled = n.disabled(c, u, l)),
            n
          )
        ),
      X = async (i = 0, u = 0) => {
        if (
          ((t.value = document.elementFromPoint(i - 1, u - 1)),
          e.menuHiddenFn
            ? (v.value = !e.menuHiddenFn(e.params, t.value, e.el))
            : (v.value = !0),
          !v.value)
        )
          return;
        (f.value = G(e.menuList)),
          (f.value = P(f.value, t.value, e.el, e.params)),
          await H();
        const { innerWidth: l, innerHeight: c } = window,
          b = S.value.offsetHeight,
          k = e.menuWidth || 200;
        (a.value = i + k + 1 > l ? l - k - 5 : i + 1),
          (g.value = u + b + 1 > c ? c - b - 5 : u + 1);
      },
      Y = () => {
        v.value = !1;
      },
      T = R(() =>
        e.useLongPressInMobile && "ontouchstart" in window
          ? "touchstart"
          : "mousedown"
      ),
      $ = i => {
        S.value &&
          !S.value.contains(i.currentTarget) &&
          ((v.value = !1), (document.oncontextmenu = null));
      };
    return (
      j(
        () => e.injectCloseListener,
        i => {
          i
            ? document.addEventListener(T.value, $)
            : document.removeEventListener(T.value, $);
        },
        { immediate: !0 }
      ),
      ie(() => {
        document.removeEventListener(T.value, $);
      }),
      {
        subLeft: _,
        subTop: d,
        hoverFlag: o,
        menuTop: g,
        menuLeft: a,
        showMenu: v,
        clickDomEl: t,
        calcMenuList: f,
        arrowSize: x,
        hasSubMenu: F,
        MenuWrapper: S,
        handleMenuItemClick: J,
        handleSubMenuItemClick: U,
        handleMenuMouseEnter: Q,
        show: X,
        close: Y,
        clickEventKey: T
      }
    );
  }
});
const se = ["onMouseenter"],
  re = { key: 0, class: "__menu__item-icon" },
  le = ["innerHTML"],
  de = { class: "__menu__item-label" },
  me = { class: "__menu__item-tips" },
  ce = { class: "__menu__item-arrow-after" },
  ve = { key: 0, class: "__menu__item-icon" },
  be = ["innerHTML"],
  he = { class: "__menu__sub__item-label" },
  pe = { class: "__menu__sub__item-tips" };
function fe(e, r, _, d, o, g) {
  return (
    s(),
    O(
      _e,
      { to: "body", disabled: !e.appendToBody },
      [
        e.showMenu
          ? (s(),
            m(
              "div",
              {
                key: 0,
                ref: "MenuWrapper",
                class: L(["__menu__wrapper", e.customClass]),
                style: N({
                  width: `${e.menuWidth}px`,
                  top: `${e.menuTop}px`,
                  left: `${e.menuLeft}px`
                })
              },
              [
                (s(!0),
                m(
                  z,
                  null,
                  D(
                    e.calcMenuList,
                    (a, v) => (
                      s(),
                      m(
                        z,
                        null,
                        [
                          !a.hidden && !a.line
                            ? (s(),
                              m(
                                "div",
                                I(
                                  {
                                    key: v,
                                    class: [
                                      "__menu__item",
                                      a.disabled && "disabled",
                                      a.customClass
                                    ]
                                  },
                                  {
                                    [K(e.clickEventKey)]: q(
                                      t => e.handleMenuItemClick(a, t),
                                      ["stop"]
                                    )
                                  },
                                  {
                                    onMouseenter: t =>
                                      e.handleMenuMouseEnter(t, a)
                                  }
                                ),
                                [
                                  e.hasIcon
                                    ? (s(),
                                      m("div", re, [
                                        e.iconType === "font-icon"
                                          ? w(
                                              (s(),
                                              m(
                                                "i",
                                                { key: 0, class: L(a.icon) },
                                                null,
                                                2
                                              )),
                                              [[C, a.icon]]
                                            )
                                          : e.iconType === "svg-icon"
                                          ? w(
                                              (s(),
                                              m(
                                                "div",
                                                {
                                                  key: 1,
                                                  class:
                                                    "__menu__item-icon-svg",
                                                  innerHTML: a.icon
                                                },
                                                null,
                                                8,
                                                le
                                              )),
                                              [[C, a.icon]]
                                            )
                                          : e.iconType === "vnode-icon"
                                          ? (s(), O(V(a.icon), { key: 2 }))
                                          : h("v-if", !0)
                                      ]))
                                    : h("v-if", !0),
                                  M("span", de, W(a.label), 1),
                                  M("span", me, W(a.tips || ""), 1),
                                  e.hasSubMenu
                                    ? (s(),
                                      m(
                                        "span",
                                        {
                                          key: 1,
                                          class: L([
                                            "__menu__item-arrow",
                                            { show: e.hasSubMenu && a.children }
                                          ]),
                                          style: N({
                                            width: e.arrowSize + "px",
                                            height: e.arrowSize + "px"
                                          })
                                        },
                                        [
                                          w(M("span", ce, null, 512), [
                                            [C, e.hasSubMenu && a.children]
                                          ])
                                        ],
                                        6
                                      ))
                                    : h("v-if", !0),
                                  a.children && a.children.length > 0
                                    ? w(
                                        (s(),
                                        m(
                                          "div",
                                          {
                                            key: 2,
                                            class: "__menu__sub__wrapper",
                                            style: N({
                                              width: `${e.menuWidth}px`,
                                              top: `${e.subTop}px`,
                                              left: `${e.subLeft}px`
                                            })
                                          },
                                          [
                                            (s(!0),
                                            m(
                                              z,
                                              null,
                                              D(
                                                a.children,
                                                (t, f) => (
                                                  s(),
                                                  m(
                                                    z,
                                                    null,
                                                    [
                                                      !t.hidden && !t.line
                                                        ? (s(),
                                                          m(
                                                            "div",
                                                            I(
                                                              {
                                                                key: f,
                                                                class: [
                                                                  "__menu__sub__item",
                                                                  t.disabled &&
                                                                    "disabled",
                                                                  t.customClass
                                                                ]
                                                              },
                                                              {
                                                                [K(
                                                                  e.clickEventKey
                                                                )]: q(
                                                                  F =>
                                                                    e.handleSubMenuItemClick(
                                                                      t,
                                                                      F
                                                                    ),
                                                                  ["stop"]
                                                                )
                                                              }
                                                            ),
                                                            [
                                                              e.hasIcon
                                                                ? (s(),
                                                                  m("div", ve, [
                                                                    e.iconType ===
                                                                    "font-icon"
                                                                      ? w(
                                                                          (s(),
                                                                          m(
                                                                            "i",
                                                                            {
                                                                              key: 0,
                                                                              class:
                                                                                L(
                                                                                  t.icon
                                                                                )
                                                                            },
                                                                            null,
                                                                            2
                                                                          )),
                                                                          [
                                                                            [
                                                                              C,
                                                                              t.icon
                                                                            ]
                                                                          ]
                                                                        )
                                                                      : e.iconType ===
                                                                        "svg-icon"
                                                                      ? w(
                                                                          (s(),
                                                                          m(
                                                                            "div",
                                                                            {
                                                                              key: 1,
                                                                              class:
                                                                                "__menu__item-icon-svg",
                                                                              innerHTML:
                                                                                t.icon
                                                                            },
                                                                            null,
                                                                            8,
                                                                            be
                                                                          )),
                                                                          [
                                                                            [
                                                                              C,
                                                                              t.icon
                                                                            ]
                                                                          ]
                                                                        )
                                                                      : e.iconType ===
                                                                        "vnode-icon"
                                                                      ? (s(),
                                                                        O(
                                                                          V(
                                                                            t.icon
                                                                          ),
                                                                          {
                                                                            key: 2
                                                                          }
                                                                        ))
                                                                      : h(
                                                                          "v-if",
                                                                          !0
                                                                        )
                                                                  ]))
                                                                : h("v-if", !0),
                                                              M(
                                                                "span",
                                                                he,
                                                                W(t.label),
                                                                1
                                                              ),
                                                              M(
                                                                "span",
                                                                pe,
                                                                W(t.tips || ""),
                                                                1
                                                              )
                                                            ],
                                                            16
                                                          ))
                                                        : h("v-if", !0),
                                                      t.line
                                                        ? (s(),
                                                          m("div", {
                                                            key: f,
                                                            class:
                                                              "__menu__line"
                                                          }))
                                                        : h("v-if", !0)
                                                    ],
                                                    64
                                                  )
                                                )
                                              ),
                                              256
                                            ))
                                          ],
                                          4
                                        )),
                                        [[C, e.hoverFlag]]
                                      )
                                    : h("v-if", !0)
                                ],
                                16,
                                se
                              ))
                            : h("v-if", !0),
                          !a.hidden && a.line
                            ? (s(), m("div", { key: v, class: "__menu__line" }))
                            : h("v-if", !0)
                        ],
                        64
                      )
                    )
                  ),
                  256
                ))
              ],
              6
            ))
          : h("v-if", !0)
      ],
      8,
      ["disabled"]
    )
  );
}
function ye(e, r) {
  r === void 0 && (r = {});
  var _ = r.insertAt;
  if (!(typeof document > "u")) {
    var d = document.head || document.getElementsByTagName("head")[0],
      o = document.createElement("style");
    (o.type = "text/css"),
      _ === "top" && d.firstChild
        ? d.insertBefore(o, d.firstChild)
        : d.appendChild(o),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(document.createTextNode(e));
  }
}
var ge = `.__menu__mask[data-v-3d21bc0a] {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
}
.__menu__wrapper[data-v-3d21bc0a] {
  --menu-background: #c8f2f0;
  --menu-boxShadow: 0 1px 5px #888;
  --menu-padding: 5px 0;
  --menu-borderRadius: 0;
  --menu-item-height: 30px;
  --menu-item-padding: 0 10px;
  --menu-item-iconSize: 20px;
  --menu-item-iconFontSize: 14px;
  --menu-item-iconColor: #484852;
  --menu-item-labelColor: #484852;
  --menu-item-labelFontSize: 14px;
  --menu-item-tipsColor: #889;
  --menu-item-tipsFontSize: 12px;
  --menu-item-arrowColor: #484852;
  --menu-item-disabledColor: #bcc;
  --menu-item-hoverBackground: rgba(255, 255, 255, 0.8);
  --menu-item-hoverIconColor: inherit;
  --menu-item-hoverLabelColor: inherit;
  --menu-item-hoverTipsColor: inherit;
  --menu-item-hoverArrowColor: inherit;
  --menu-lineColor: #ccc;
  --menu-lineMargin: 5px 0;
}
.__menu__wrapper[data-v-3d21bc0a] {
  position: fixed;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
  z-index: 99999;
}
.__menu__line[data-v-3d21bc0a],
.__menu__sub__line[data-v-3d21bc0a] {
  border-top: 1px solid var(--menu-lineColor);
  margin: var(--menu-lineMargin);
}
.__menu__item[data-v-3d21bc0a],
.__menu__sub__item[data-v-3d21bc0a] {
  display: flex;
  height: var(--menu-item-height);
  align-items: center;
  cursor: pointer;
  padding: var(--menu-item-padding);
}
.__menu__item .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--menu-item-iconColor);
  width: var(--menu-item-iconSize);
  height: var(--menu-item-iconSize);
}
.__menu__item .__menu__item-icon i[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon i[data-v-3d21bc0a] {
  font-size: var(--menu-item-iconFontSize);
}
.__menu__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.__menu__item .__menu__item-label[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-label[data-v-3d21bc0a] {
  width: 100%;
  max-height: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  font-size: var(--menu-item-labelFontSize);
  color: var(--menu-item-labelColor);
  margin-right: 5px;
  overflow: hidden;
}
.__menu__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-tips[data-v-3d21bc0a] {
  font-size: var(--menu-item-tipsFontSize);
  color: var(--menu-item-tipsColor);
}
.__menu__item .__menu__item-arrow[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-arrow[data-v-3d21bc0a] {
  width: 10px;
  height: 10px;
  margin-left: 5px;
  position: relative;
}
.__menu__item.disabled[data-v-3d21bc0a],
.__menu__sub__item.disabled[data-v-3d21bc0a] {
  cursor: not-allowed;
}
.__menu__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-disabledColor);
}
.__menu__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a] {
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-disabledColor);
}
.__menu__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__item:not(.disabled):hover .__menu__item-icon[data-v-3d21bc0a] {
  color: var(--menu-item-hoverIconColor);
}
.__menu__item:not(.disabled):hover .__menu__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__item:not(.disabled):hover .__menu__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item:not(.disabled):hover .__menu__item-arrow[data-v-3d21bc0a] {
  color: var(--menu-item-hoverArrowColor);
}
.__menu__sub__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item-icon[data-v-3d21bc0a] {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin-right: 4px;
}
.__menu__item-arrow.show .__menu__item-arrow-after[data-v-3d21bc0a] {
  position: absolute;
  width: 0;
  height: 0;
  left: 8px;
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-arrowColor);
  border-top: var(--menu-item-arrowRealSize) solid transparent;
  border-bottom: var(--menu-item-arrowRealSize) solid transparent;
}
.__menu__sub__wrapper[data-v-3d21bc0a] {
  position: fixed;
  visibility: hidden;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
}
.__menu__item:hover .__menu__sub__wrapper[data-v-3d21bc0a] {
  visibility: visible;
}`;
ye(ge);
y.render = fe;
y.__scopeId = "data-v-3d21bc0a";
y.__file = "packages/mouse-menu/mouse-menu.vue";
function we(e, r, _) {
  let d = document.createElement(e);
  return d.setAttribute("class", r), d;
}
y.install = e => {
  e.component(y.name, y);
};
function Ce(e) {
  var o;
  const r = "__mouse__menu__container";
  let _;
  document.querySelector(`.${r}`)
    ? (_ = document.querySelector(`.${r}`))
    : (_ = we("div", r));
  const d = ne(y, e);
  return (
    ae(d, _),
    document.body.appendChild(_),
    (o = d.component) == null ? void 0 : o.proxy
  );
}
function xe() {
  const e = p(oe(ee, !0)),
    r = [
      { label: "ID", prop: "id" },
      { label: "日期", prop: "date" },
      { label: "姓名", prop: "name" }
    ],
    _ = {
      menuList: [
        { label: ({ id: o }) => `ID为：${o}`, disabled: !0 },
        {
          label: "编辑",
          tips: "Edit",
          fn: o =>
            ue(
              `您编辑了第 ${
                e.value.findIndex(g => g.id === o.id) + 1
              } 行，数据为：${JSON.stringify(o)}`,
              { type: "success" }
            )
        }
      ]
    };
  function d(o, g, a) {
    a.preventDefault();
    const { x: v, y: t } = a;
    Ce({
      el: a.currentTarget,
      params: o,
      menuWrapperCss: { background: "var(--el-bg-color)" },
      menuItemCss: {
        labelColor: "var(--el-text-color)",
        hoverLabelColor: "var(--el-color-primary)",
        hoverTipsColor: "var(--el-color-primary)"
      },
      ..._
    }).show(v, t);
  }
  return { columns: r, dataList: e, showMouseMenu: d };
}
export { xe as useColumns };
