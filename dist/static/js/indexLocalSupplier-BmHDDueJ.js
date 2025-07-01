import u from "./headTitle-BmNPo3Fk.js";
import "./index-DsvOLtdC.js";
import {
  _ as p,
  r as n,
  e as f,
  f as m,
  c as h,
  o as v,
  b as g,
  a as F,
  bQ as b,
  bR as _
} from "./index-CnxsT9tm.js";
import "./requireImg-CLyBMj04.js";
const y = { class: "box" },
  x = {
    __name: "indexLocalSupplier",
    setup(S) {
      const t = n(null),
        i = n(document.body.clientWidth),
        c = n(document.body.clientHeight);
      async function s() {
        l();
      }
      function l() {
        const o = document.getElementById("local"),
          e = i.value;
        o &&
          ((t.value = b(o)),
          t.value.setOption({
            tooltip: {
              trigger: "item",
              padding: e * (5 / 1920),
              textStyle: { fontSize: e * (14 / 1920) }
            },
            legend: {
              type: "scroll",
              orient: "vertical",
              right: "5%",
              top: "40%",
              icon: "circle",
              itemHeight: e * (12 / 1920),
              itemWidth: e * (12 / 1920),
              itemGap: e * (20 / 1920),
              textStyle: { fontSize: e * (12 / 1920), color: "#AEC9FF" }
            },
            series: [
              {
                name: "占比",
                type: "pie",
                radius: ["35%", "80%"],
                center: ["35%", "50%"],
                data: [
                  { value: 50, name: "本地农产品供应" },
                  { value: 30, name: "外地农产品供应" }
                ],
                label: {
                  show: !1,
                  position: "center",
                  formatter: "{d}%",
                  fontSize: e * (14 / 1920),
                  color: "#fff"
                },
                emphasis: { label: { show: !0, fontWeight: "bold" } },
                labelLine: {
                  length: e * (8 / 1920),
                  lineStyle: { width: e * (1 / 1920), color: "#8CA2FF" }
                },
                itemStyle: {
                  shadowColor: "rgba(0, 0, 0, 0.4)",
                  color: d => {
                    const a = [
                        ["#7394FF", "#7394FF"],
                        ["#9FF3F8", "#9FF3F8"]
                      ],
                      r = d.dataIndex;
                    return new _(0, 0, 1, 0, [
                      { offset: 0, color: a[r][0] },
                      { offset: 1, color: a[r][1] }
                    ]);
                  }
                }
              }
            ]
          }));
      }
      return (
        f(() => {
          s(),
            window.addEventListener("resize", function () {
              var o, e;
              (o = t.value) == null || o.resize(),
                (e = t.value) == null || e.dispose(),
                (t.value = null),
                (i.value = document.body.clientWidth),
                (c.value = document.body.clientHeight),
                l();
            });
        }),
        m(() => {
          t.value && (t.value.dispose(), (t.value = null));
        }),
        (o, e) => (
          v(),
          h("div", y, [
            g(u, {
              icon: "LocalSupplier-icon.svg",
              name: "本地农产品供应比例"
            }),
            e[0] ||
              (e[0] = F("div", { id: "local", class: "charts" }, null, -1))
          ])
        )
      );
    }
  },
  E = p(x, [["__scopeId", "data-v-df0a3c2f"]]);
export { E as default };
