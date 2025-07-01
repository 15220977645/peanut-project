import { _ } from "./empty-Bw1MhoKL.js";
import { V as b } from "./vue3-seamless-scroll.es-DDt7u6Rw.js";
import {
  d as v,
  r as p,
  c as n,
  a as l,
  g as N,
  u as a,
  w as k,
  F as x,
  k as V,
  a4 as S,
  o as t,
  t as i,
  i as c,
  _ as y
} from "./index-DuV_pBtV.js";
const D = { class: "signage-container" },
  w = { class: "signage-table" },
  B = { key: 1, class: "empty-box" },
  F = v({
    __name: "logisticsSignage",
    setup(T) {
      const o = p([]),
        r = p(!0);
      function g() {
        let u = 0;
        for (; u < 20; )
          o.value.push({
            orderNo: `DD${(Math.random() * 1e4).toFixed(0)}-${(
              Math.random() * 1e6
            ).toFixed(0)}`,
            rpName: "*****供应商-*****客户",
            driverName: "李四",
            submitTime: "2023-11-12"
          }),
            u++;
      }
      return (
        g(),
        (u, e) => (
          t(),
          n("div", D, [
            e[4] ||
              (e[4] = l("div", { class: "module-head" }, "本月物流看板", -1)),
            l("div", w, [
              e[3] ||
                (e[3] = l(
                  "ul",
                  { class: "table-header" },
                  [
                    l("li", null, "订单编号"),
                    l("li", null, "线路名称"),
                    l("li", null, "打卡人"),
                    l("li", null, "提交时间")
                  ],
                  -1
                )),
              a(o)[0]
                ? (t(),
                  N(
                    a(b),
                    {
                      key: 0,
                      modelValue: a(r),
                      "onUpdate:modelValue":
                        e[0] || (e[0] = s => (S(r) ? (r.value = s) : null)),
                      class: "warp table-block",
                      list: a(o),
                      hover: "",
                      limitScrollNum: 11,
                      step: 0.3
                    },
                    {
                      default: k(() => [
                        (t(!0),
                        n(
                          x,
                          null,
                          V(a(o), (s, f) => {
                            var d, m;
                            return (
                              t(),
                              n("ul", { key: f, class: "table-info" }, [
                                l("li", null, i(s.orderNo), 1),
                                l("li", null, i(s.rpName), 1),
                                l("li", null, i(s.driverName), 1),
                                l("li", null, [
                                  c(
                                    i(
                                      (d = s.submitTime) == null
                                        ? void 0
                                        : d.split(" ")[0]
                                    ),
                                    1
                                  ),
                                  e[1] || (e[1] = l("br", null, null, -1)),
                                  c(
                                    i(
                                      (m = s.submitTime) == null
                                        ? void 0
                                        : m.split(" ")[1]
                                    ),
                                    1
                                  )
                                ])
                              ])
                            );
                          }),
                          128
                        ))
                      ]),
                      _: 1
                    },
                    8,
                    ["modelValue", "list"]
                  ))
                : (t(),
                  n(
                    "div",
                    B,
                    e[2] ||
                      (e[2] = [
                        l("img", { src: _, alt: "" }, null, -1),
                        l("span", null, "暂无数据", -1)
                      ])
                  ))
            ])
          ])
        )
      );
    }
  }),
  M = y(F, [["__scopeId", "data-v-575d9878"]]);
export { M as default };
