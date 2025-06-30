import {
  d as y,
  r as m,
  H as f,
  e as W,
  n as L,
  f as B,
  g as N,
  w as l,
  a as d,
  b as o,
  h as p,
  i as n,
  u as a,
  o as U
} from "./index-D6DS3gmo.js";
const S = y({
  name: "WaterMark",
  __name: "watermark",
  setup(F) {
    const k = m(),
      g = m(),
      i = m("#409EFF"),
      u = m("vue-pure-admin"),
      { setWatermark: s, clear: b } = f(),
      { setWatermark: v, clear: C } = f(k),
      { setWatermark: w } = f(g);
    return (
      W(() => {
        L(() => {
          w("无法删除的水印", { forever: !0, width: 187, height: 80 });
        });
      }),
      B(() => {
        b();
      }),
      (H, e) => {
        const x = p("el-input"),
          V = p("el-color-picker"),
          r = p("el-button"),
          $ = p("el-card");
        return (
          U(),
          N(
            $,
            { shadow: "never" },
            {
              header: l(
                () =>
                  e[11] ||
                  (e[11] = [
                    d(
                      "div",
                      { class: "card-header" },
                      [
                        d(
                          "span",
                          { class: "font-medium" },
                          " 页面水印功能（将平台主题改为亮白色观察水印效果更明显哦） "
                        )
                      ],
                      -1
                    )
                  ])
              ),
              default: l(() => [
                e[23] ||
                  (e[23] = d("span", null, " 请输入要创建水印的值：", -1)),
                o(
                  x,
                  {
                    class: "mb-4 mr-4",
                    style: { width: "200px" },
                    modelValue: u.value,
                    "onUpdate:modelValue": e[0] || (e[0] = t => (u.value = t)),
                    clearable: ""
                  },
                  null,
                  8,
                  ["modelValue"]
                ),
                e[24] ||
                  (e[24] = d("span", null, "请选择要创建水印的颜色：", -1)),
                o(
                  V,
                  {
                    modelValue: i.value,
                    "onUpdate:modelValue": e[1] || (e[1] = t => (i.value = t)),
                    "show-alpha": ""
                  },
                  null,
                  8,
                  ["modelValue"]
                ),
                e[25] || (e[25] = d("br", null, null, -1)),
                o(
                  r,
                  {
                    onClick:
                      e[2] ||
                      (e[2] = t => a(s)(u.value, { fillStyle: i.value }))
                  },
                  {
                    default: l(() => e[12] || (e[12] = [n(" 创建整页水印 ")])),
                    _: 1
                  }
                ),
                o(
                  r,
                  {
                    onClick:
                      e[3] ||
                      (e[3] = t =>
                        a(s)(u.value, {
                          gradient: [
                            { value: 0, color: "magenta" },
                            { value: 0.5, color: "blue" },
                            { value: 1, color: "red" }
                          ]
                        }))
                  },
                  {
                    default: l(
                      () => e[13] || (e[13] = [n(" 创建整页渐变水印 ")])
                    ),
                    _: 1
                  }
                ),
                o(
                  r,
                  {
                    onClick:
                      e[4] ||
                      (e[4] = t =>
                        a(s)(u.value, {
                          rotate: 0,
                          gradient: [
                            { value: 0, color: "magenta" },
                            { value: 0.5, color: "blue" },
                            { value: 1, color: "red" }
                          ]
                        }))
                  },
                  {
                    default: l(
                      () =>
                        e[14] || (e[14] = [n(" 创建整页渐变且水平90度的水印 ")])
                    ),
                    _: 1
                  }
                ),
                o(
                  r,
                  {
                    onClick:
                      e[5] ||
                      (e[5] = t =>
                        a(s)(u.value, {
                          gradient: [
                            { value: 0, color: "magenta" },
                            { value: 0.5, color: "blue" },
                            { value: 1, color: "red" }
                          ],
                          shadowConfig: [20]
                        }))
                  },
                  {
                    default: l(
                      () =>
                        e[15] || (e[15] = [n(" 创建整页渐变且有阴影的水印 ")])
                    ),
                    _: 1
                  }
                ),
                o(
                  r,
                  {
                    onClick:
                      e[6] ||
                      (e[6] = t =>
                        a(s)(u.value, {
                          globalAlpha: 0.15,
                          gradient: [
                            { value: 0, color: "magenta" },
                            { value: 0.5, color: "blue" },
                            { value: 1, color: "red" }
                          ]
                        }))
                  },
                  {
                    default: l(
                      () => e[16] || (e[16] = [n(" 创建整页高透明渐变水印 ")])
                    ),
                    _: 1
                  }
                ),
                o(
                  r,
                  { onClick: a(b) },
                  {
                    default: l(() => e[17] || (e[17] = [n("清除整页水印")])),
                    _: 1
                  },
                  8,
                  ["onClick"]
                ),
                d(
                  "div",
                  {
                    ref_key: "local",
                    ref: k,
                    class:
                      "mt-4 mb-4 w-[1080px] h-[400px] border-dotted border-2 border-sky-500"
                  },
                  null,
                  512
                ),
                o(
                  r,
                  {
                    onClick:
                      e[7] ||
                      (e[7] = t =>
                        a(v)("局部水印", {
                          fillStyle: i.value,
                          width: 140,
                          height: 60
                        }))
                  },
                  {
                    default: l(() => e[18] || (e[18] = [n(" 创建局部水印 ")])),
                    _: 1
                  }
                ),
                o(
                  r,
                  {
                    onClick:
                      e[8] ||
                      (e[8] = t =>
                        a(v)("局部水印", {
                          width: 140,
                          height: 60,
                          gradient: [
                            { value: 0, color: "magenta" },
                            { value: 0.5, color: "blue" },
                            { value: 1, color: "red" }
                          ]
                        }))
                  },
                  {
                    default: l(
                      () => e[19] || (e[19] = [n(" 创建局部渐变水印 ")])
                    ),
                    _: 1
                  }
                ),
                o(
                  r,
                  {
                    onClick:
                      e[9] ||
                      (e[9] = t =>
                        a(v)("局部水印", {
                          width: 140,
                          height: 56.5,
                          rotate: 0,
                          gradient: [
                            { value: 0, color: "magenta" },
                            { value: 0.5, color: "blue" },
                            { value: 1, color: "red" }
                          ]
                        }))
                  },
                  {
                    default: l(
                      () =>
                        e[20] || (e[20] = [n(" 创建局部渐变且水平90度的水印 ")])
                    ),
                    _: 1
                  }
                ),
                o(
                  r,
                  {
                    onClick:
                      e[10] ||
                      (e[10] = t =>
                        a(v)("局部水印", {
                          width: 140,
                          height: 56.5,
                          gradient: [
                            { value: 0, color: "magenta" },
                            { value: 0.5, color: "blue" },
                            { value: 1, color: "red" }
                          ],
                          shadowConfig: [20]
                        }))
                  },
                  {
                    default: l(
                      () =>
                        e[21] || (e[21] = [n(" 创建局部渐变且有阴影的水印 ")])
                    ),
                    _: 1
                  }
                ),
                o(
                  r,
                  { onClick: a(C) },
                  {
                    default: l(() => e[22] || (e[22] = [n("清除局部水印")])),
                    _: 1
                  },
                  8,
                  ["onClick"]
                ),
                d(
                  "div",
                  {
                    ref_key: "preventLocal",
                    ref: g,
                    class:
                      "mt-4 mb-4 w-[1080px] h-[400px] border-dotted border-2 border-indigo-500"
                  },
                  null,
                  512
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
export { S as default };
