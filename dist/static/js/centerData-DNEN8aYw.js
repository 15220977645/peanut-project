import { h } from "./commonFun-DCImwsLl.js";
import {
  d as v,
  L as R,
  c as a,
  F as d,
  k,
  bv as C,
  o as s,
  v as r,
  I as S,
  G as w,
  y as c,
  a as o,
  t as n,
  _ as $
} from "./index-CnxsT9tm.js";
const q = { class: "center-data" },
  N = ["title", "onClick"],
  T = { class: "title-unit" },
  g = ["title"],
  U = { class: "unit" },
  b = { class: "num" },
  m = { class: "animation-font" },
  B = { class: "animation-content" },
  V = { key: 0, class: "r-b-text" },
  D = { key: 1, class: "r-b-text" },
  F = { key: 2, class: "r-b-text" },
  L = { key: 0 },
  P = { key: 1 },
  x = { key: 0 },
  z = { key: 1 },
  I = v({
    __name: "centerData",
    props: {
      list: {},
      itemNumber: {},
      rateVisible: { type: Boolean },
      stationChannelType: {}
    },
    setup(_) {
      const l = _,
        u = C("openPlatform");
      R(l.list, e => {
        e && h();
      });
      function f(e) {
        l.stationChannelType &&
          (e.platformUrl = e.platformUrl.includes("?")
            ? `${e.platformUrl}&stationChannelType=${l.stationChannelType}`
            : `${e.platformUrl}?stationChannelType=${l.stationChannelType}`),
          u && e.platformUrl && u(!0, e.platformUrl);
      }
      return (e, i) => (
        s(),
        a("div", q, [
          (s(!0),
          a(
            d,
            null,
            k(e.list, (t, p) => {
              var y;
              return (
                s(),
                a(
                  d,
                  null,
                  [
                    ![!1].includes(t.show) && !t.slot
                      ? (s(),
                        a(
                          "div",
                          {
                            key: p,
                            class: c(["item", `item-${e.itemNumber}`]),
                            style: w({
                              cursor: t.platformUrl ? "pointer" : ""
                            }),
                            title: t.platformTitle
                              ? `跳转至${t.platformTitle}`
                              : "",
                            onClick: E => f(t)
                          },
                          [
                            o("div", T, [
                              o(
                                "div",
                                { class: "title", title: t.title },
                                n(t.title),
                                9,
                                g
                              ),
                              o("div", U, "(" + n(t.unit) + ")", 1)
                            ]),
                            o("div", b, [
                              o("div", m, [
                                o(
                                  "div",
                                  B,
                                  n(
                                    (y = t.num) == null
                                      ? void 0
                                      : y.toLocaleString()
                                  ),
                                  1
                                )
                              ]),
                              t.offlineNumShow
                                ? (s(),
                                  a(
                                    "div",
                                    V,
                                    " 含线下" + n(t.offlineNum) + n(t.unit),
                                    1
                                  ))
                                : r("", !0),
                              t.singleNumShow
                                ? (s(),
                                  a("div", D, " +单边：" + n(t.singleNum), 1))
                                : r("", !0),
                              t.encryptionStationShow
                                ? (s(),
                                  a(
                                    "div",
                                    F,
                                    " +" +
                                      n(t.encryptionStationNum) +
                                      "座加密站 ",
                                    1
                                  ))
                                : r("", !0)
                            ]),
                            e.rateVisible
                              ? (s(),
                                a(
                                  d,
                                  { key: 0 },
                                  [
                                    ["", null, void 0].includes(
                                      t.yearRateShow
                                    ) || t.yearRateShow
                                      ? (s(),
                                        a(
                                          "div",
                                          {
                                            key: 0,
                                            class: c([
                                              [
                                                {
                                                  "red-down":
                                                    t.yearRate && t.yearRate < 0
                                                },
                                                {
                                                  "green-down":
                                                    t.yearRate && t.yearRate > 0
                                                }
                                              ],
                                              "rate"
                                            ])
                                          },
                                          [
                                            i[0] ||
                                              (i[0] = o(
                                                "div",
                                                { class: "rate-title" },
                                                "同口径环比",
                                                -1
                                              )),
                                            t.yearRate
                                              ? (s(),
                                                a(
                                                  "span",
                                                  L,
                                                  n(
                                                    t.yearRate > 0
                                                      ? `+${t.yearRate}`
                                                      : t.yearRate
                                                  ) + "%",
                                                  1
                                                ))
                                              : (s(),
                                                a(
                                                  "span",
                                                  P,
                                                  n(
                                                    t.yearRate === 0
                                                      ? "0%"
                                                      : "-"
                                                  ),
                                                  1
                                                ))
                                          ],
                                          2
                                        ))
                                      : r("", !0),
                                    o(
                                      "div",
                                      {
                                        class: c([
                                          [
                                            {
                                              "red-down":
                                                t.quarterRate &&
                                                t.quarterRate < 0
                                            },
                                            {
                                              "green-down":
                                                t.quarterRate &&
                                                t.quarterRate > 0
                                            }
                                          ],
                                          "rate"
                                        ])
                                      },
                                      [
                                        i[1] ||
                                          (i[1] = o(
                                            "div",
                                            { class: "rate-title" },
                                            "环比",
                                            -1
                                          )),
                                        t.quarterRate
                                          ? (s(),
                                            a(
                                              "span",
                                              x,
                                              n(
                                                t.quarterRate > 0
                                                  ? `+${t.quarterRate}`
                                                  : t.quarterRate
                                              ) + "%",
                                              1
                                            ))
                                          : (s(),
                                            a(
                                              "span",
                                              z,
                                              n(
                                                t.quarterRate === 0 ? "0%" : "-"
                                              ),
                                              1
                                            ))
                                      ],
                                      2
                                    )
                                  ],
                                  64
                                ))
                              : r("", !0)
                          ],
                          14,
                          N
                        ))
                      : r("", !0),
                    t.slot
                      ? S(e.$slots, `item-${p}`, { key: 1 }, void 0, !0)
                      : r("", !0)
                  ],
                  64
                )
              );
            }),
            256
          ))
        ])
      );
    }
  }),
  H = $(I, [["__scopeId", "data-v-bea2a887"]]);
export { H as default };
