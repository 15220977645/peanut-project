import _ from "./stageData-BFV1uh3w.js";
import h from "./indexChinaMap-Bw2kbsA-.js";
import w from "./noticeDisplay-DlVxQvY3.js";
import g from "./canteenInfo-CmSYdS8A.js";
import S from "./winBidInfo-CyPoW5mr.js";
import x from "./tableAchievement--jZhcYHQ.js";
import {
  _ as C,
  r as i,
  e as k,
  f as E,
  h as u,
  c as b,
  o as p,
  g as y,
  v as z,
  a as t,
  b as l,
  w as m
} from "./index-DuV_pBtV.js";
import "./monthDate-BJtuMiqu.js";
import "./bus-Cvs7srP0.js";
import "./chinaLonLat-C20oFNhp.js";
import "./index-TK4OleqK.js";
import "./china-CjaCo810.js";
import "./echarts-BHMfc19f.js";
import "./title-BNzvT6OH.js";
import "./emptyData-7Dt6hn0w.js";
import "./requireImg-CLyBMj04.js";
import "./yearDate-CZz1CSZ1.js";
const q = { class: "container" },
  D = { class: "content" },
  B = { class: "l" },
  R = { class: "r" },
  I = {
    __name: "index",
    setup(H) {
      const s = i(!1),
        d = i({ width: screen.availWidth, height: screen.availHeight }),
        a = i(null),
        e = i();
      function f() {
        var c, n;
        if (((a.value = document.getElementById("screenData")), a.value)) {
          const r = (c = a.value) == null ? void 0 : c.offsetWidth,
            o = (n = a.value) == null ? void 0 : n.offsetHeight;
          r + 10 >= d.value.width && o + 10 >= d.value.height
            ? (s.value = !0)
            : (s.value = !1);
        }
      }
      async function v() {
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
            e.value.requestFullscreen
              ? e.value.requestFullscreen()
              : e.value.mozRequestFullScreen
              ? e.value.mozRequestFullScreen()
              : e.value.webkitRequestFullscreen
              ? e.value.webkitRequestFullscreen()
              : e.value.msRequestFullscreen && e.value.msRequestFullscreen()),
          (s.value = !s.value);
      }
      return (
        k(() => {
          f(),
            window.addEventListener("resize", () => {
              f();
            });
        }),
        E(() => {
          window.removeEventListener("resize", {});
        }),
        (c, n) => {
          const r = u("el-alert"),
            o = u("el-carousel-item"),
            F = u("el-carousel");
          return (
            p(),
            b(
              "div",
              {
                ref_key: "fullScreenDom",
                ref: e,
                id: "screenData",
                class: "screenData"
              },
              [
                s.value
                  ? z("", !0)
                  : (p(),
                    y(r, {
                      key: 0,
                      title:
                        "您的大屏目前处于缩放状态，页面可能会出现错乱现象，建议点击大屏标题全屏展示",
                      type: "error"
                    })),
                t("div", q, [
                  t("div", { class: "head" }, [
                    n[0] ||
                      (n[0] = t(
                        "img",
                        {
                          src: "http://images.visfarm.com/crm/img/head-left.png",
                          alt: ""
                        },
                        null,
                        -1
                      )),
                    t(
                      "div",
                      { class: "title", onClick: v },
                      "**投标部数据监控"
                    ),
                    n[1] ||
                      (n[1] = t(
                        "img",
                        {
                          src: "http://images.visfarm.com/crm/img/head-right.png",
                          alt: ""
                        },
                        null,
                        -1
                      ))
                  ]),
                  l(
                    F,
                    { autoplay: !1, trigger: "click" },
                    {
                      default: m(() => [
                        l(o, null, {
                          default: m(() => [
                            t("div", D, [
                              t("div", B, [
                                l(_, { class: "stage-data" }),
                                l(h, { class: "china-map" })
                              ]),
                              t("div", R, [
                                l(w, { class: "notice-display" }),
                                l(g, { class: "canteen-info" }),
                                l(S, { class: "win-bid-info" })
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        l(o, null, { default: m(() => [l(x)]), _: 1 })
                      ]),
                      _: 1
                    }
                  )
                ])
              ],
              512
            )
          );
        }
      );
    }
  },
  Z = C(I, [["__scopeId", "data-v-6760b653"]]);
export { Z as default };
