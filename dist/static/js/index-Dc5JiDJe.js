import w from "./indexFullScreen-BA6uTNou.js";
import S from "./indexAllNumData-BSBmaIvJ.js";
import _ from "./indexFoodSafe-44L1mi_1.js";
import M from "./indexDevelopInfo-QYjqZhfq.js";
import x from "./indexTrophicPyramid-Bry5POh4.js";
import k from "./indexLocalSupplier-BmHDDueJ.js";
import C from "./indexMap-C0YeE-uc.js";
import E from "./indexChinaMap-DUQIusYi.js";
import {
  _ as b,
  r as f,
  e as Y,
  f as z,
  h as q,
  c as H,
  o as F,
  g as T,
  v as N,
  a as l,
  u as D,
  t as B,
  b as r
} from "./index-CnxsT9tm.js";
import "./headTitle-BmNPo3Fk.js";
import "./requireImg-CLyBMj04.js";
import "./emptyData-CmO1iC8h.js";
import "./index-BlabhJWa.js";
import "./propTypes-D_I3dZnw.js";
import "./index-DsvOLtdC.js";
import "./china-DxmWnQlV.js";
import "./echarts-BI67x3ap.js";
import "./chinaLonLat-C20oFNhp.js";
const R = t => {
    const e = t.getFullYear(),
      o = t.getMonth() + 1,
      n = t.getDate(),
      s = t.getHours(),
      a = t.getMinutes(),
      d = t.getSeconds();
    return [e, o, n].map(i).join("/") + " " + [s, a, d].map(i).join(":");
  },
  j = t => {
    const e = t.getFullYear(),
      o = t.getMonth() + 1,
      n = t.getDate();
    return [e, o, n].map(i).join("-");
  },
  L = function () {
    const t = new Date(),
      e = t.getFullYear(),
      o = t.getMonth() + 1,
      n = t.getDate();
    return [e, o, n].map(i).join("-");
  },
  A = t => {
    const e = t.getFullYear(),
      o = t.getMonth() + 1,
      n = t.getDate();
    return e + "年" + i(o) + "月" + i(n) + "日";
  },
  I = t => {
    if (!t) return null;
    var e = new Date(t),
      o = e.getFullYear(),
      n = e.getMonth() + 1,
      s = e.getDate();
    n < 10 && (n = "0" + n), s < 10 && (s = "0" + s);
    var a = o + "-" + n + "-" + s;
    return a;
  },
  P = t => {
    const e = t.getFullYear(),
      o = t.getMonth() + 1;
    return e + "年" + i(o) + "月";
  },
  V = t => {
    const e = t.getMonth() + 1,
      o = t.getDate();
    return [e, o].map(i).join("-");
  },
  i = t => ((t = t.toString()), t[1] ? t : "0" + t),
  W = t => {
    const e = t,
      o = e.getDay(),
      n = String(e.getFullYear()),
      s = e.getMonth() + 1,
      a = String(s < 10 ? "0" + s : s),
      d = String(e.getDate() < 10 ? "0" + e.getDate() : e.getDate()),
      g = String(e.getHours() < 10 ? "0" + e.getHours() : e.getHours()),
      h = String(e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes()),
      u = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ][o];
    let c = "AM";
    return (
      e.getHours() > 11 && (c = "PM"),
      { year: n, month: a, day: d, hour: g, minute: h, week: u, apm: c }
    );
  },
  U = {
    formatTime: R,
    formatDayTime: j,
    getNowDate: L,
    formatYMD: A,
    formatYM: P,
    formatMD: V,
    formatMoreTime: W,
    formatYMDline: I
  },
  $ = { class: "container" },
  G = { class: "title-box" },
  J = { class: "dateTime" },
  K = { class: "content-box" },
  O = { class: "left" },
  Q = { class: "middle" },
  X = { class: "right" },
  Z = {
    __name: "index",
    setup(t) {
      const e = f(),
        o = f(""),
        n = f(!1),
        s = f({ width: screen.availWidth, height: screen.availHeight }),
        a = f(null);
      function d() {
        var m, p;
        a.value = document.getElementById("screenData");
        const u = (m = a.value) == null ? void 0 : m.offsetWidth,
          c = (p = a.value) == null ? void 0 : p.offsetHeight;
        u + 10 >= s.value.width && c + 10 >= s.value.height
          ? (n.value = !0)
          : (n.value = !1);
      }
      function g() {
        h(), setTimeout(g, 1e3);
      }
      function h() {
        const u = U.formatYMD(new Date()),
          c = new Date().toTimeString().slice(0, 9),
          m = ["日", "一", "二", "三", "四", "五", "六"],
          p = new Date().getDay(),
          y = `星期${m[p]}`;
        o.value = u + "	" + y + "	" + c;
      }
      async function v() {
        n.value
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
          (n.value = !n.value);
      }
      return (
        g(),
        Y(() => {
          d(),
            window.addEventListener("resize", () => {
              d();
            });
        }),
        z(() => {
          window.removeEventListener("resize", {});
        }),
        (u, c) => {
          const m = q("el-alert");
          return (
            F(),
            H(
              "div",
              {
                ref_key: "fullScreenDom",
                ref: e,
                id: "screenData",
                class: "screenData"
              },
              [
                D(n)
                  ? N("", !0)
                  : (F(),
                    T(m, {
                      key: 0,
                      title:
                        "您的大屏目前处于缩放状态，页面可能会出现错乱现象，建议点击大屏标题全屏展示",
                      type: "error"
                    })),
                l("div", $, [
                  l("div", G, [
                    l("header", null, [
                      c[0] ||
                        (c[0] = l("div", { class: "lehe-logo" }, null, -1)),
                      l(
                        "div",
                        { class: "title", title: "点击切换分辨率", onClick: v },
                        " **监控大屏 "
                      ),
                      l("div", J, B(D(o)), 1)
                    ])
                  ]),
                  l("div", K, [
                    l("div", O, [
                      r(w, { class: "full-screen" }),
                      r(_, { class: "full-safe" }),
                      r(M, { class: "develop-info" })
                    ]),
                    l("div", Q, [
                      r(S, { class: "all-num-data" }),
                      r(E, { class: "china-map" })
                    ]),
                    l("div", X, [
                      r(k, { class: "index-local-supplier" }),
                      r(x, { class: "index-trophic-pyramid" }),
                      r(C, { class: "logistics-map" })
                    ])
                  ])
                ])
              ],
              512
            )
          );
        }
      );
    }
  },
  Fe = b(Z, [["__scopeId", "data-v-37a31d03"]]);
export { Fe as default };
