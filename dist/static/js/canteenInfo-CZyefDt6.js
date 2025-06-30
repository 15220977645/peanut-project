import m from "./title-Bnfd_5PO.js";
import u from "./emptyData-BpGdiuJn.js";
import "./index-DUvDFKhA.js";
import {
  _ as p,
  r as n,
  e as v,
  f as h,
  c as s,
  o,
  b,
  g as _,
  u as g,
  n as y,
  bQ as x,
  bR as S
} from "./index-D6DS3gmo.js";
import "./requireImg-CLyBMj04.js";
const L = { class: "box canteen-box" },
  k = { key: 0, id: "canteen", class: "charts" },
  w = {
    __name: "canteenInfo",
    setup(E) {
      const t = n(null);
      let e = document.body.clientWidth;
      const f = n(!1),
        d = n([
          { name: "机关", value: 10 },
          { name: "学校", value: 20 },
          { name: "部队", value: 25 },
          { name: "银行", value: 20 },
          { name: "医院", value: 15 },
          { name: "企业", value: 35 },
          { name: "事业单位", value: 15 },
          { name: "其他", value: 5 }
        ]);
      async function i() {
        await y();
        const a = document.getElementById("canteen");
        a &&
          (t.value && t.value.dispose(),
          (t.value = x(a)),
          t.value.setOption({
            legend: [
              {
                data: ["机关", "学校", "部队", "银行"],
                orient: "vertical",
                height: "80%",
                right: "25%",
                top: "middle",
                icon: "circle",
                itemHeight: e * (12 / 1920),
                itemWidth: e * (12 / 1920),
                itemGap: e * (20 / 1920),
                textStyle: { fontSize: e * (14 / 1920), color: "#AEC9FF" }
              },
              {
                data: ["医院", "企业", "事业单位", "其他"],
                orient: "vertical",
                height: "80%",
                right: "10%",
                top: "middle",
                icon: "circle",
                itemHeight: e * (12 / 1920),
                itemWidth: e * (12 / 1920),
                itemGap: e * (20 / 1920),
                textStyle: { fontSize: e * (14 / 1920), color: "#AEC9FF" }
              }
            ],
            series: [
              {
                name: "占比",
                type: "pie",
                radius: "70%",
                center: ["32%", "50%"],
                data: d.value,
                label: {
                  formatter: "{d}%",
                  borderWidth: e * (20 / 1920),
                  borderRadius: e * (4 / 1920),
                  fontSize: e * (14 / 1920),
                  color: "#fff"
                },
                labelLine: {
                  length: e * (8 / 1920),
                  lineStyle: { width: e * (1 / 1920), color: "#8CA2FF" }
                },
                itemStyle: {
                  shadowColor: "rgba(0, 0, 0, 0.4)",
                  color: c => {
                    const l = [
                        ["#f1b6ff", "#f1b6ff"],
                        ["#c8fe97", "#c8fe97"],
                        ["#1b38a0", "#1b38a0"],
                        ["#45b4fe", "#45b4fe"],
                        ["#ff7e41", "#ff7e41"],
                        ["#fdc8a2", "#fdc8a2"],
                        ["#57c2c9", "#57c2c9"],
                        ["#fff", "#fff"]
                      ],
                      r = [
                        "机关",
                        "学校",
                        "部队",
                        "银行",
                        "医院",
                        "企业",
                        "事业单位",
                        "其他"
                      ].indexOf(c.name);
                    return new S(0, 0, 1, 0, [
                      { offset: 0, color: l[r][0] },
                      { offset: 1, color: l[r][1] }
                    ]);
                  }
                }
              }
            ]
          }));
      }
      return (
        v(() => {
          i(),
            window.addEventListener("resize", function () {
              t.value && t.value.resize(), (e = document.body.clientWidth), i();
            });
        }),
        h(() => {
          t.value && (t.value.dispose(), (t.value = null));
        }),
        (a, c) => (
          o(),
          s("div", L, [
            b(m, { icon: "LocalSupplier-icon.svg", name: "客户渠道" }),
            g(f)
              ? (o(), _(u, { key: 1, class: "empty-box" }))
              : (o(), s("div", k))
          ])
        )
      );
    }
  },
  A = p(w, [["__scopeId", "data-v-6459b6b5"]]);
export { A as default };
