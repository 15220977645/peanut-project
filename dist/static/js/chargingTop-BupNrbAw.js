import u from "./title-CfGyNUxC.js";
import f from "./rankingList-BhexING2.js";
import d from "./emptyContent-Dgv9ala-.js";
import {
  d as _,
  r as n,
  L as g,
  c,
  b as v,
  g as l,
  v as k,
  bv as r,
  o as e,
  n as h,
  _ as y
} from "./index-D6DS3gmo.js";
const C = { key: 1, class: "loading" },
  T = _({
    __name: "chargingTop",
    setup(x) {
      const m = r("stationList"),
        p = n(!1),
        t = n([]),
        a = n(!0),
        s = r("openPlatform");
      g(m, async o => {
        (a.value = !1),
          o[0] && ((t.value = o.slice(0, 10)), await h(), (p.value = !0));
      });
      function i() {
        s &&
          s(
            !0,
            "/StatisticalAnalysisReport/stationUtilizationAnalysis?date=nowMonth"
          );
      }
      return (o, L) => (
        e(),
        c(
          "div",
          {
            class: "charging-top-container module",
            title: "跳转至充电站利用率分析",
            onClick: i
          },
          [
            v(u, { title: "本月充电站平均利用率排名" }),
            !a.value && t.value[0]
              ? (e(),
                l(
                  f,
                  {
                    key: 0,
                    list: t.value,
                    class: "charging-rank content-bg",
                    "click-fun": i
                  },
                  null,
                  8,
                  ["list"]
                ))
              : a.value
              ? (e(), c("div", C, "加载中，请稍等..."))
              : t.value[0]
              ? k("", !0)
              : (e(), l(d, { key: 2, class: "empty-content" }))
          ]
        )
      );
    }
  }),
  w = y(T, [["__scopeId", "data-v-ce68620d"]]);
export { w as default };
