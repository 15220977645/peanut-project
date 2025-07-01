import { m as u } from "./message-CSPqT3RV.js";
import { R as n } from "./index-C3HGQNBI.js";
import {
  d as v,
  r as g,
  u as l,
  c as _,
  b as t,
  w as o,
  h as m,
  a as d,
  i as x,
  o as w
} from "./index-CnxsT9tm.js";
import "./propTypes-D_I3dZnw.js";
import "./refresh-right-Du3ZsAuC.js";
const k = { class: "font-medium" },
  r = "vue-pure-admin",
  N = v({
    name: "QrCode",
    __name: "qrcode",
    setup(h) {
      const i = g("");
      setTimeout(() => {
        i.value = l(r);
      }, 3e3);
      const f = () => {
          u("点击事件", { type: "info" });
        },
        p = () => {
          u("失效", { type: "info" });
        };
      return (C, e) => {
        const b = m("el-link"),
          s = m("el-card"),
          a = m("el-col"),
          c = m("el-row");
        return (
          w(),
          _("div", null, [
            t(
              s,
              { shadow: "never" },
              {
                header: o(() => [
                  d("div", k, [
                    e[1] || (e[1] = x(" 二维码（基于 ")),
                    t(
                      b,
                      {
                        href: "https://github.com/soldair/node-qrcode",
                        target: "_blank",
                        style: { margin: "0 5px 4px 0", "font-size": "16px" }
                      },
                      {
                        default: o(() => e[0] || (e[0] = [x(" qrcode ")])),
                        _: 1
                      }
                    ),
                    e[2] || (e[2] = x(" 生成） "))
                  ])
                ]),
                default: o(() => [
                  t(
                    c,
                    { gutter: 20, justify: "space-between" },
                    {
                      default: o(() => [
                        t(
                          a,
                          { xl: 6, lg: 6, md: 12, sm: 24, xs: 24 },
                          {
                            default: o(() => [
                              t(
                                s,
                                {
                                  shadow: "hover",
                                  class: "mb-[10px] text-center"
                                },
                                {
                                  default: o(() => [
                                    e[3] ||
                                      (e[3] = d(
                                        "div",
                                        { class: "font-bold" },
                                        "基础用法",
                                        -1
                                      )),
                                    t(l(n), { text: r })
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        t(
                          a,
                          { xl: 6, lg: 6, md: 12, sm: 24, xs: 24 },
                          {
                            default: o(() => [
                              t(
                                s,
                                {
                                  shadow: "hover",
                                  class: "mb-[10px] text-center"
                                },
                                {
                                  default: o(() => [
                                    e[4] ||
                                      (e[4] = d(
                                        "div",
                                        { class: "font-bold" },
                                        "img标签",
                                        -1
                                      )),
                                    t(l(n), { text: r, tag: "img" })
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        t(
                          a,
                          { xl: 6, lg: 6, md: 12, sm: 24, xs: 24 },
                          {
                            default: o(() => [
                              t(
                                s,
                                {
                                  shadow: "hover",
                                  class: "mb-[10px] text-center"
                                },
                                {
                                  default: o(() => [
                                    e[5] ||
                                      (e[5] = d(
                                        "div",
                                        { class: "font-bold" },
                                        "样式配置",
                                        -1
                                      )),
                                    t(l(n), {
                                      text: r,
                                      options: {
                                        color: {
                                          dark: "#55D187",
                                          light: "#2d8cf0"
                                        }
                                      }
                                    })
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        t(
                          a,
                          { xl: 6, lg: 6, md: 12, sm: 24, xs: 24 },
                          {
                            default: o(() => [
                              t(
                                s,
                                {
                                  shadow: "hover",
                                  class: "mb-[10px] text-center"
                                },
                                {
                                  default: o(() => [
                                    e[6] ||
                                      (e[6] = d(
                                        "div",
                                        { class: "font-bold" },
                                        "点击事件",
                                        -1
                                      )),
                                    t(l(n), { text: r, onClick: f })
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        t(
                          a,
                          { xl: 6, lg: 6, md: 12, sm: 24, xs: 24 },
                          {
                            default: o(() => [
                              t(
                                s,
                                {
                                  shadow: "hover",
                                  class: "mb-[10px] text-center"
                                },
                                {
                                  default: o(() => [
                                    e[7] ||
                                      (e[7] = d(
                                        "div",
                                        { class: "font-bold" },
                                        "异步内容",
                                        -1
                                      )),
                                    t(l(n), { text: i.value }, null, 8, [
                                      "text"
                                    ])
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        t(
                          a,
                          { xl: 6, lg: 6, md: 12, sm: 24, xs: 24 },
                          {
                            default: o(() => [
                              t(
                                s,
                                {
                                  shadow: "hover",
                                  class: "mb-[10px] text-center"
                                },
                                {
                                  default: o(() => [
                                    e[8] ||
                                      (e[8] = d(
                                        "div",
                                        { class: "font-bold" },
                                        "失效",
                                        -1
                                      )),
                                    t(l(n), {
                                      text: r,
                                      disabled: "",
                                      onDisabledClick: p
                                    })
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        t(
                          a,
                          { xl: 6, lg: 6, md: 12, sm: 24, xs: 24 },
                          {
                            default: o(() => [
                              t(
                                s,
                                {
                                  shadow: "hover",
                                  class: "mb-[10px] text-center"
                                },
                                {
                                  default: o(() => [
                                    e[9] ||
                                      (e[9] = d(
                                        "div",
                                        { class: "font-bold" },
                                        "logo配置",
                                        -1
                                      )),
                                    t(l(n), {
                                      text: r,
                                      logo: "https://avatars.githubusercontent.com/u/44761321?v=4"
                                    })
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        t(
                          a,
                          { xl: 6, lg: 6, md: 12, sm: 24, xs: 24 },
                          {
                            default: o(() => [
                              t(
                                s,
                                {
                                  shadow: "hover",
                                  class: "mb-[10px] text-center"
                                },
                                {
                                  default: o(() => [
                                    e[10] ||
                                      (e[10] = d(
                                        "div",
                                        { class: "font-bold" },
                                        "logo样式",
                                        -1
                                      )),
                                    t(l(n), {
                                      text: r,
                                      logo: {
                                        src: "https://avatars.githubusercontent.com/u/44761321?v=4",
                                        logoSize: 0.2,
                                        borderSize: 0.05,
                                        borderRadius: 50,
                                        bgColor: "blue"
                                      }
                                    })
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        ),
                        t(
                          a,
                          { xl: 6, lg: 6, md: 12, sm: 24, xs: 24 },
                          {
                            default: o(() => [
                              t(
                                s,
                                {
                                  shadow: "hover",
                                  class: "mb-[10px] text-center"
                                },
                                {
                                  default: o(() => [
                                    e[11] ||
                                      (e[11] = d(
                                        "div",
                                        { class: "font-bold" },
                                        "大小配置",
                                        -1
                                      )),
                                    t(l(n), { text: r, width: 100 })
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        )
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
export { N as default };
