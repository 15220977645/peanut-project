import d from "./monthDate-BJtuMiqu.js";
import { B as _ } from "./bus-Cvs7srP0.js";
import {
  _ as v,
  r as m,
  c as r,
  o as u,
  a as i,
  b as h,
  F as p,
  k as g,
  y as b,
  t as c
} from "./index-DuV_pBtV.js";
const x = { class: "bid-data-container" },
  f = { class: "month-box" },
  D = { class: "data-box" },
  L = { class: "data-item" },
  T = { class: "item-title" },
  w = { class: "item-num" },
  y = {
    __name: "stageData",
    setup(B) {
      const o = m([]),
        t = m([
          {
            show: !0,
            title: "年中标金额(亿)",
            num: 10,
            ratioList: [{ title: "年环比", val: "50%" }]
          },
          {
            show: !0,
            title: "年中标率",
            num: 60,
            ratioList: [{ title: "年环比", val: "30%" }]
          },
          {
            show: !0,
            title: "月中标金额(亿)",
            num: 10,
            ratioList: [
              { title: "月环比", val: "50%" },
              { title: "月同比", val: "30%" }
            ]
          },
          {
            show: !0,
            title: "月中标率",
            num: 60,
            ratioList: [
              { title: "月环比", val: "50%" },
              { title: "月同比", val: "30%" }
            ]
          }
        ]);
      return (
        _.on("getStageDataTime", a => {
          let l = "月中标金额(亿)",
            e = "月中标率",
            s = "月环比",
            n = "月同比";
          a.useData.startTime !== a.useData.endTime &&
            ((o.value = `${Number(a.useData.startTime.split("-")[1])}-${Number(
              a.useData.endTime.split("-")[1]
            )}月`),
            (l = `${o.value}中标金额(亿)`),
            (e = `${o.value}中标率`),
            (s = "季环比"),
            (n = "季同比")),
            (t.value[2].title = l),
            (t.value[3].title = e),
            (t.value[2].ratioList[0].title = s),
            (t.value[3].ratioList[0].title = s),
            (t.value[2].ratioList[1].title = n),
            (t.value[3].ratioList[1].title = n);
        }),
        (a, l) => (
          u(),
          r("div", x, [
            i("div", f, [
              h(
                d,
                {
                  ref: "monthDate",
                  "bus-name": "getStageDataTime",
                  "choice-type": "monthRange",
                  class: "month-range"
                },
                null,
                512
              )
            ]),
            i("div", D, [
              (u(!0),
              r(
                p,
                null,
                g(
                  t.value,
                  (e, s) => (
                    u(),
                    r(
                      "div",
                      {
                        key: s,
                        class: b([{ "empty-box": !e.show }, "item-box"])
                      },
                      [
                        i("div", L, [
                          i("div", T, c(e.title), 1),
                          i("div", w, c(e.num), 1)
                        ])
                      ],
                      2
                    )
                  )
                ),
                128
              ))
            ])
          ])
        )
      );
    }
  },
  S = v(y, [["__scopeId", "data-v-f56aa0ed"]]);
export { S as default };
