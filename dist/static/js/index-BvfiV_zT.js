import {
  d as x,
  r as u,
  B as S,
  f as w,
  c as C,
  g as k,
  v as y,
  a as e,
  u as r,
  h,
  b as m,
  w as b,
  T as z,
  t as d,
  o as f,
  _ as D
} from "./index-D6DS3gmo.js";
import E from "./index-BvmNN9FC.js";
import "./logisticsSignage-BB-tq4F5.js";
import "./empty-DToQMoFE.js";
import "./vue3-seamless-scroll.es-Dv-E8jBy.js";
import "./map-DtvdNsTa.js";
import "./warnInfo-BYMS7-jQ.js";
import "./deliveryOverview.vue_vue_type_script_setup_true_lang-BXs3ZCxC.js";
import "./OverView-Bsj2bsby.js";
import "./requireImg-CLyBMj04.js";
import "./logisticsFacts-DK1fChbM.js";
import "./index-DUvDFKhA.js";
const q = { class: "relative flex items-center justify-center screen-head" },
  B = { class: "flex flex-col screen-main" },
  g = { class: "flex", style: { "justify-content": "end" } },
  R = { class: "flex items-end text-[#7BA2C0] z-10" },
  T = { class: "flex items-center mt-[8px]" },
  I = { class: "date" },
  N = { class: "flex-1 overflow-hidden screen-content" },
  V = x({
    __name: "index",
    setup(j) {
      const t = u(),
        s = u(!1);
      async function p() {
        s.value
          ? document.exitFullscreen
            ? document.exitFullscreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.webkitCancelFullScreen
            ? document.webkitCancelFullScreen()
            : document.msExitFullscreen && document.msExitFullscreen()
          : ((document.fullScreenElement ||
              document.msFullscreenElement ||
              document.mozFullScreenElement ||
              document.webkitFullscreenElement) &&
              (document.exitFullscreen
                ? await document.exitFullscreen()
                : document.mozCancelFullScreen
                ? await document.mozCancelFullScreen()
                : document.webkitCancelFullScreen
                ? await document.webkitCancelFullScreen()
                : document.msExitFullscreen &&
                  (await document.msExitFullscreen())),
            t.value.requestFullscreen
              ? t.value.requestFullscreen()
              : t.value.mozRequestFullScreen
              ? t.value.mozRequestFullScreen()
              : t.value.webkitRequestFullscreen
              ? t.value.webkitRequestFullscreen()
              : t.value.msRequestFullscreen && t.value.msRequestFullscreen()),
          (s.value = !s.value);
      }
      let a;
      const c = S({ time: "", date: "" });
      function v() {
        const l = new Date().toLocaleDateString().split("/"),
          n = i => (i >= 10 ? i : "0" + i),
          o = { 0: "日", 1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六" },
          F = l[0] + "年" + n(l[1]) + "月" + n(l[2]) + "日",
          _ = "星期" + o[new Date().getDay()];
        (c.time = new Date().toTimeString().slice(0, 9)),
          (c.date = F + " " + _);
      }
      return (
        (() => {
          a = setInterval(v, 1e3);
        })(),
        w(() => {
          clearInterval(a), (a = void 0);
        }),
        (l, n) => {
          const o = h("el-alert");
          return (
            f(),
            C(
              "div",
              {
                ref_key: "fullScreenDom",
                ref: t,
                class: "flex flex-col screen-container"
              },
              [
                r(s)
                  ? y("", !0)
                  : (f(),
                    k(o, {
                      key: 0,
                      title:
                        "您的大屏目前处于缩放状态，页面可能会出现错乱现象，建议点击大屏标题全屏展示",
                      type: "error"
                    })),
                e("div", q, [
                  m(
                    z,
                    { name: "rotate", tag: "div", class: "z-10 flex" },
                    {
                      default: b(() => [
                        e(
                          "div",
                          {
                            class: "z-10 flex flex-col text-center tab",
                            onClick: p
                          },
                          n[0] ||
                            (n[0] = [
                              e("span", { class: "tab-active" }, "物流大屏", -1)
                            ])
                        )
                      ]),
                      _: 1
                    }
                  )
                ]),
                e("div", B, [
                  e("div", g, [
                    e("div", R, [
                      e("div", T, [
                        e("span", I, d(r(c).time), 1),
                        e("span", null, d(r(c).date), 1)
                      ])
                    ])
                  ]),
                  e("div", N, [m(E)])
                ])
              ],
              512
            )
          );
        }
      );
    }
  }),
  Y = D(V, [["__scopeId", "data-v-925a6a75"]]);
export { Y as default };
