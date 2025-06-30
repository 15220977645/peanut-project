import {
  _ as G,
  r as v,
  h as S,
  l as H,
  c as f,
  o as m,
  a as t,
  j as C,
  y as c,
  u as s,
  A as V,
  b as l,
  i as _,
  t as d,
  w as r,
  F as L,
  k as $,
  g as T,
  v as D
} from "./index-DuV_pBtV.js";
import J from "./yearDate-CZz1CSZ1.js";
import K from "./monthDate-BJtuMiqu.js";
import { B as O } from "./bus-Cvs7srP0.js";
const Q = { class: "achievement-container" },
  U = { class: "left" },
  X = { class: "l-table-title" },
  Z = { class: "l-table" },
  ee = { class: "table-head" },
  te = { class: "ul-td" },
  le = { class: "ul-td" },
  se = { class: "ul-td" },
  ie = { class: "table-body" },
  ne = ["id"],
  ae = { class: "ul-td" },
  oe = { class: "ul-td" },
  ce = { class: "ul-td" },
  re = { class: "ul-td" },
  de = ["title"],
  ue = { class: "right" },
  me = { class: "r-table-title" },
  he = { class: "ul-td" },
  ge = { class: "lifting-btn" },
  _e = { class: "ul-td" },
  be = { class: "lifting-btn" },
  fe = { class: "ul-td" },
  ve = { class: "lifting-btn" },
  pe = { class: "ul-td" },
  ye = { class: "lifting-btn" },
  Pe = { class: "ul-td" },
  Me = { class: "lifting-btn" },
  Ne = { class: "ul-td" },
  ke = { class: "lifting-btn" },
  Ae = { class: "ul-td" },
  Fe = { class: "lifting-btn" },
  xe = { class: "ul-td" },
  Se = { class: "lifting-btn" },
  Ce = { class: "ul-td" },
  Te = { class: "lifting-btn" },
  De = { class: "table-body" },
  we = { key: 0 },
  Le = { class: "ul-td" },
  $e = { class: "ul-td" },
  Be = { class: "ul-td" },
  Ye = { class: "ul-td" },
  Re = { class: "ul-td" },
  je = { class: "ul-td" },
  Ve = { class: "ul-td" },
  Oe = ["title"],
  Ee = { class: "ul-td" },
  Ie = ["title"],
  We = { key: 1 },
  ze = { class: "ul-td" },
  qe = { class: "ul-td" },
  Ge = { class: "ul-td" },
  He = { class: "ul-td" },
  Je = { class: "ul-td" },
  Ke = ["title"],
  Qe = {
    __name: "tableAchievement",
    setup(Ue) {
      const g = v("year"),
        B = v(`${new Date().getFullYear()}年`),
        p = v(`${new Date().getFullYear()}年${new Date().getMonth() + 1}月`),
        N = v(`${new Date().getFullYear()}年`),
        y = v([]),
        E = v(!1),
        P = v("itemPercent"),
        b = v([]),
        I = v(!1),
        u = v("itemPercent"),
        Y = v(0);
      async function W() {
        k(),
          A({ target: { id: "itemPercent" } }),
          w({ target: { id: "itemPercent" } }),
          O.on("getAchieveYear", async o => {
            g.value === "year" &&
              ((b.value = []),
              (N.value = `${o.choseYear[0]}年`),
              (B.value = `${o.choseYear[0]}年`)),
              k();
          }),
          O.on("getAchieveMonth", async o => {
            g.value === "month" &&
              ((b.value = []),
              (N.value = o.showTime.replace(/\s*/g, "").replace(/-.*年/, "-")),
              (p.value = o.showTime.replace(/\s*/g, "").replace(/-.*年/, "-"))),
              k();
          });
      }
      function k(o) {
        let e = 0;
        for (; e < 50; ) {
          const a = {
              tenderSection: "投标组" + (e + 1),
              itemMoney: Math.random() * 1e3,
              bidAmount: Math.random() * 1e3,
              itemPercent: Math.random()
            },
            i = {
              bidSpecialist: "投标专员" + (e + 1),
              itemMoney: Math.random() * 1e3,
              challengeMoney: Math.random() * 1e4,
              challengeRatioPercent: Math.random(),
              challengePercent: Math.random(),
              bidAmount: Math.random() * 1e3,
              itemPercent: Math.random()
            };
          o
            ? o === "right"
              ? b.value.push(i)
              : o === "left" && b.value.push(a)
            : (y.value.push(a), b.value.push(i)),
            e++;
        }
      }
      async function z(o) {
        if (o.target.id) {
          if (
            ((g.value = o.target.id), (b.value = []), o.target.id === "month")
          ) {
            N.value = p.value;
            let e = [];
            p.value.includes("-")
              ? (e = p.value.replace(/\s*/g, "").split("-"))
              : (e = [p.value, p.value]),
              e[1].includes("年") || (e[1] = e[0].replace(/年.*/, `年${e[1]}`)),
              (e = e.map(a => R(a.replace("年", "-").replace("月", ""))));
          } else N.value = B.value;
          (y.value = []), (b.value = []), k();
        }
      }
      function R(o) {
        const e = o.split("-");
        return (e[1] = Number(e[1]) > 9 ? e[1] : `0${e[1]}`), `${e[0]}-${e[1]}`;
      }
      function q(o) {
        if (!o.target.id) return;
        Y.value = Number(o.target.id);
        let e = [];
        p.value.includes("-")
          ? (e = p.value.replace(/\s*/g, "").split("-"))
          : (e = [p.value, p.value]),
          e[1].includes("年") || (e[1] = e[0].replace(/年.*/, `年${e[1]}`)),
          (e = e.map(a => R(a.replace("年", "-").replace("月", "")))),
          (b.value = []),
          k("right");
      }
      function A(o) {
        if (!o.target.id) return;
        const e = o.target.id;
        let a = {};
        (P.value = e),
          y.value[0].tenderSection === "总计" &&
            ((a = y.value[0]), y.value.splice(0, 1)),
          e.includes("-")
            ? y.value.sort(
                (i, h) =>
                  Number(i[e.replace("-", "")]) - Number(h[e.replace("-", "")])
              )
            : y.value.sort((i, h) => Number(h[e]) - Number(i[e])),
          a.tenderSection && a.tenderSection === "总计" && y.value.unshift(a);
      }
      function w(o) {
        if (!o.target.id) return;
        const e = o.target.id;
        (u.value = e),
          e.includes("-")
            ? b.value.sort(
                (a, i) =>
                  Number(a[e.replace("-", "")]) - Number(i[e.replace("-", "")])
              )
            : b.value.sort((a, i) => Number(i[e]) - Number(a[e])),
          b.value.sort((a, i) => {
            if (i.itemPercent === a.itemPercent)
              return Number(i.bidAmount) - Number(a.bidAmount);
          });
      }
      function F(o) {
        return o < 90
          ? "#FB487C"
          : o >= 90 && o < 100
          ? "#FFA415"
          : o >= 100
          ? "#70E622"
          : "#000";
      }
      return (
        W(),
        (o, e) => {
          const a = S("CaretTop"),
            i = S("el-icon"),
            h = S("CaretBottom"),
            x = S("el-progress"),
            j = H("loading");
          return (
            m(),
            f("div", Q, [
              t("div", { class: "tab-head", onClick: z }, [
                t(
                  "div",
                  {
                    id: "year",
                    class: c([{ active: s(g) === "year" }, "tab"])
                  },
                  " 年度 ",
                  2
                ),
                t(
                  "div",
                  {
                    id: "month",
                    class: c([{ active: s(g) === "month" }, "tab"])
                  },
                  " 月度 ",
                  2
                ),
                C(
                  l(
                    J,
                    { ref: "yearDate", "bus-name": "getAchieveYear" },
                    null,
                    512
                  ),
                  [[V, s(g) === "year"]]
                ),
                C(
                  l(
                    K,
                    {
                      ref: "monthDate",
                      "show-type": "*年*月-",
                      "bus-name": "getAchieveMonth",
                      "choice-type": "monthRange"
                    },
                    null,
                    512
                  ),
                  [[V, s(g) === "month"]]
                )
              ]),
              t(
                "div",
                {
                  class: c([
                    { "month-content": s(g) === "month" },
                    "table-content"
                  ])
                },
                [
                  t("div", U, [
                    t("div", X, [
                      e[1] ||
                        (e[1] = t(
                          "img",
                          {
                            src: "http://images.visfarm.com/crm/img/table-head-l.png",
                            alt: ""
                          },
                          null,
                          -1
                        )),
                      t("p", null, [
                        _("投标组" + d(s(N)) + "数据", 1),
                        e[0] || (e[0] = t("span", null, "(单位:万元)", -1))
                      ]),
                      e[2] ||
                        (e[2] = t(
                          "img",
                          {
                            src: "http://images.visfarm.com/crm/img/table-head-r.png",
                            alt: ""
                          },
                          null,
                          -1
                        ))
                    ]),
                    t("div", Z, [
                      t("ul", ee, [
                        e[3] ||
                          (e[3] = t("li", { class: "ul-td" }, "投标组", -1)),
                        t("li", te, [
                          _(
                            d(s(g) === "year" ? "年目标" : "目标金额") + " ",
                            1
                          ),
                          t("div", { class: "lifting-btn", onClick: A }, [
                            l(
                              i,
                              {
                                id: "-itemMoney",
                                class: c({
                                  "light-icon": s(P) === "-itemMoney"
                                })
                              },
                              { default: r(() => [l(a)]), _: 1 },
                              8,
                              ["class"]
                            ),
                            l(
                              i,
                              {
                                id: "itemMoney",
                                class: c({ "light-icon": s(P) === "itemMoney" })
                              },
                              { default: r(() => [l(h)]), _: 1 },
                              8,
                              ["class"]
                            )
                          ])
                        ]),
                        t("li", le, [
                          _(
                            d(s(g) === "year" ? "年中标金额" : "中标金额") +
                              " ",
                            1
                          ),
                          t("div", { class: "lifting-btn", onClick: A }, [
                            l(
                              i,
                              {
                                id: "-bidAmount",
                                class: c({
                                  "light-icon": s(P) === "-bidAmount"
                                })
                              },
                              { default: r(() => [l(a)]), _: 1 },
                              8,
                              ["class"]
                            ),
                            l(
                              i,
                              {
                                id: "bidAmount",
                                class: c({ "light-icon": s(P) === "bidAmount" })
                              },
                              { default: r(() => [l(h)]), _: 1 },
                              8,
                              ["class"]
                            )
                          ])
                        ]),
                        t("li", se, [
                          _(
                            d(s(g) === "year" ? "年业绩达成率" : "业绩达成率") +
                              " ",
                            1
                          ),
                          t("div", { class: "lifting-btn", onClick: A }, [
                            l(
                              i,
                              {
                                id: "-itemPercent",
                                class: c({
                                  "light-icon": s(P) === "-itemPercent"
                                })
                              },
                              { default: r(() => [l(a)]), _: 1 },
                              8,
                              ["class"]
                            ),
                            l(
                              i,
                              {
                                id: "itemPercent",
                                class: c({
                                  "light-icon": s(P) === "itemPercent"
                                })
                              },
                              { default: r(() => [l(h)]), _: 1 },
                              8,
                              ["class"]
                            )
                          ])
                        ])
                      ]),
                      C(
                        (m(),
                        f("div", ie, [
                          t("div", { onClick: q }, [
                            (m(!0),
                            f(
                              L,
                              null,
                              $(
                                s(y),
                                (n, M) => (
                                  m(),
                                  f(
                                    "ul",
                                    {
                                      key: M,
                                      id: M,
                                      class: c([
                                        { "active-ui": s(Y) === M },
                                        "body-tr"
                                      ])
                                    },
                                    [
                                      t("li", ae, d(n.tenderSection), 1),
                                      t(
                                        "li",
                                        oe,
                                        d(
                                          Number(
                                            Number(n.itemMoney).toFixed(0)
                                          ).toLocaleString()
                                        ),
                                        1
                                      ),
                                      t(
                                        "li",
                                        ce,
                                        d(
                                          Number(
                                            n.bidAmount.toFixed(0)
                                          ).toLocaleString()
                                        ),
                                        1
                                      ),
                                      t("li", re, [
                                        t(
                                          "span",
                                          {
                                            title: (
                                              n.itemPercent * 100
                                            ).toFixed(1)
                                          },
                                          d((n.itemPercent * 100).toFixed(1)) +
                                            "%",
                                          9,
                                          de
                                        ),
                                        n.itemPercent !== null
                                          ? (m(),
                                            T(
                                              x,
                                              {
                                                key: 0,
                                                color: F,
                                                percentage:
                                                  n.itemPercent > 1
                                                    ? 100
                                                    : Number(
                                                        (
                                                          n.itemPercent * 100
                                                        ).toFixed(1)
                                                      ),
                                                "define-back-color": "#000"
                                              },
                                              null,
                                              8,
                                              ["percentage"]
                                            ))
                                          : D("", !0)
                                      ])
                                    ],
                                    10,
                                    ne
                                  )
                                )
                              ),
                              128
                            ))
                          ])
                        ])),
                        [[j, s(E)]]
                      )
                    ])
                  ]),
                  t("div", ue, [
                    t("div", me, [
                      e[5] ||
                        (e[5] = t(
                          "img",
                          {
                            src: "http://images.visfarm.com/crm/img/table-head-l.png",
                            alt: ""
                          },
                          null,
                          -1
                        )),
                      t("p", null, [
                        _("投标专员" + d(s(N)) + "数据", 1),
                        e[4] || (e[4] = t("span", null, "(单位:万元)", -1))
                      ]),
                      e[6] ||
                        (e[6] = t(
                          "img",
                          {
                            src: "http://images.visfarm.com/crm/img/table-head-r.png",
                            alt: ""
                          },
                          null,
                          -1
                        ))
                    ]),
                    t(
                      "div",
                      {
                        class: c([
                          { "month-table": s(g) === "month" },
                          "r-table"
                        ])
                      },
                      [
                        s(g) === "year"
                          ? (m(),
                            f(
                              "ul",
                              { key: 0, class: "table-head", onClick: w },
                              [
                                e[13] ||
                                  (e[13] = t(
                                    "li",
                                    { class: "ul-td" },
                                    "序号",
                                    -1
                                  )),
                                e[14] ||
                                  (e[14] = t(
                                    "li",
                                    { class: "ul-td" },
                                    "投标专员",
                                    -1
                                  )),
                                t("li", he, [
                                  e[7] || (e[7] = _(" 年基础目标 ")),
                                  t("div", ge, [
                                    l(
                                      i,
                                      {
                                        id: "-itemMoney",
                                        class: c({
                                          "light-icon": s(u) === "-itemMoney"
                                        })
                                      },
                                      { default: r(() => [l(a)]), _: 1 },
                                      8,
                                      ["class"]
                                    ),
                                    l(
                                      i,
                                      {
                                        id: "itemMoney",
                                        class: c({
                                          "light-icon": s(u) === "itemMoney"
                                        })
                                      },
                                      { default: r(() => [l(h)]), _: 1 },
                                      8,
                                      ["class"]
                                    )
                                  ])
                                ]),
                                t("li", _e, [
                                  e[8] || (e[8] = _(" 年挑战目标 ")),
                                  t("div", be, [
                                    l(
                                      i,
                                      {
                                        id: "-challengeMoney",
                                        class: c({
                                          "light-icon":
                                            s(u) === "-challengeMoney"
                                        })
                                      },
                                      { default: r(() => [l(a)]), _: 1 },
                                      8,
                                      ["class"]
                                    ),
                                    l(
                                      i,
                                      {
                                        id: "challengeMoney",
                                        class: c({
                                          "light-icon":
                                            s(u) === "challengeMoney"
                                        })
                                      },
                                      { default: r(() => [l(h)]), _: 1 },
                                      8,
                                      ["class"]
                                    )
                                  ])
                                ]),
                                t("li", fe, [
                                  e[9] || (e[9] = _(" 挑战倍率 ")),
                                  t("div", ve, [
                                    l(
                                      i,
                                      {
                                        id: "-challengeRatioPercent",
                                        class: c({
                                          "light-icon":
                                            s(u) === "-challengeRatioPercent"
                                        })
                                      },
                                      { default: r(() => [l(a)]), _: 1 },
                                      8,
                                      ["class"]
                                    ),
                                    l(
                                      i,
                                      {
                                        id: "challengeRatioPercent",
                                        class: c({
                                          "light-icon":
                                            s(u) === "challengeRatioPercent"
                                        })
                                      },
                                      { default: r(() => [l(h)]), _: 1 },
                                      8,
                                      ["class"]
                                    )
                                  ])
                                ]),
                                t("li", pe, [
                                  e[10] || (e[10] = _(" 年中标金额 ")),
                                  t("div", ye, [
                                    l(
                                      i,
                                      {
                                        id: "-bidAmount",
                                        class: c({
                                          "light-icon": s(u) === "-bidAmount"
                                        })
                                      },
                                      { default: r(() => [l(a)]), _: 1 },
                                      8,
                                      ["class"]
                                    ),
                                    l(
                                      i,
                                      {
                                        id: "bidAmount",
                                        class: c({
                                          "light-icon": s(u) === "bidAmount"
                                        })
                                      },
                                      { default: r(() => [l(h)]), _: 1 },
                                      8,
                                      ["class"]
                                    )
                                  ])
                                ]),
                                t("li", Pe, [
                                  e[11] || (e[11] = _(" 年基础目标达成率 ")),
                                  t("div", Me, [
                                    l(
                                      i,
                                      {
                                        id: "-itemPercent",
                                        class: c({
                                          "light-icon": s(u) === "-itemPercent"
                                        })
                                      },
                                      { default: r(() => [l(a)]), _: 1 },
                                      8,
                                      ["class"]
                                    ),
                                    l(
                                      i,
                                      {
                                        id: "itemPercent",
                                        class: c({
                                          "light-icon": s(u) === "itemPercent"
                                        })
                                      },
                                      { default: r(() => [l(h)]), _: 1 },
                                      8,
                                      ["class"]
                                    )
                                  ])
                                ]),
                                t("li", Ne, [
                                  e[12] || (e[12] = _(" 年挑战目标达成率 ")),
                                  t("div", ke, [
                                    l(
                                      i,
                                      {
                                        id: "-challengePercent",
                                        class: c({
                                          "light-icon":
                                            s(u) === "-challengePercent"
                                        })
                                      },
                                      { default: r(() => [l(a)]), _: 1 },
                                      8,
                                      ["class"]
                                    ),
                                    l(
                                      i,
                                      {
                                        id: "challengePercent",
                                        class: c({
                                          "light-icon":
                                            s(u) === "challengePercent"
                                        })
                                      },
                                      { default: r(() => [l(h)]), _: 1 },
                                      8,
                                      ["class"]
                                    )
                                  ])
                                ])
                              ]
                            ))
                          : (m(),
                            f(
                              "ul",
                              { key: 1, class: "table-head", onClick: w },
                              [
                                e[18] ||
                                  (e[18] = t(
                                    "li",
                                    { class: "ul-td" },
                                    "序号",
                                    -1
                                  )),
                                e[19] ||
                                  (e[19] = t(
                                    "li",
                                    { class: "ul-td" },
                                    "投标专员",
                                    -1
                                  )),
                                t("li", Ae, [
                                  e[15] || (e[15] = _(" 基础目标 ")),
                                  t("div", Fe, [
                                    l(
                                      i,
                                      {
                                        id: "-itemMoney",
                                        class: c({
                                          "light-icon": s(u) === "-itemMoney"
                                        })
                                      },
                                      { default: r(() => [l(a)]), _: 1 },
                                      8,
                                      ["class"]
                                    ),
                                    l(
                                      i,
                                      {
                                        id: "itemMoney",
                                        class: c({
                                          "light-icon": s(u) === "itemMoney"
                                        })
                                      },
                                      { default: r(() => [l(h)]), _: 1 },
                                      8,
                                      ["class"]
                                    )
                                  ])
                                ]),
                                t("li", xe, [
                                  e[16] || (e[16] = _(" 中标金额 ")),
                                  t("div", Se, [
                                    l(
                                      i,
                                      {
                                        id: "-bidAmount",
                                        class: c({
                                          "light-icon": s(u) === "-bidAmount"
                                        })
                                      },
                                      { default: r(() => [l(a)]), _: 1 },
                                      8,
                                      ["class"]
                                    ),
                                    l(
                                      i,
                                      {
                                        id: "bidAmount",
                                        class: c({
                                          "light-icon": s(u) === "bidAmount"
                                        })
                                      },
                                      { default: r(() => [l(h)]), _: 1 },
                                      8,
                                      ["class"]
                                    )
                                  ])
                                ]),
                                t("li", Ce, [
                                  e[17] || (e[17] = _(" 业绩达成率 ")),
                                  t("div", Te, [
                                    l(
                                      i,
                                      {
                                        id: "-itemPercent",
                                        class: c({
                                          "light-icon": s(u) === "-itemPercent"
                                        })
                                      },
                                      { default: r(() => [l(a)]), _: 1 },
                                      8,
                                      ["class"]
                                    ),
                                    l(
                                      i,
                                      {
                                        id: "itemPercent",
                                        class: c({
                                          "light-icon": s(u) === "itemPercent"
                                        })
                                      },
                                      { default: r(() => [l(h)]), _: 1 },
                                      8,
                                      ["class"]
                                    )
                                  ])
                                ])
                              ]
                            )),
                        C(
                          (m(),
                          f("div", De, [
                            s(g) === "year"
                              ? (m(),
                                f("div", we, [
                                  (m(!0),
                                  f(
                                    L,
                                    null,
                                    $(
                                      s(b),
                                      (n, M) => (
                                        m(),
                                        f(
                                          "ul",
                                          { key: n.id, class: "body-tr" },
                                          [
                                            t("li", Le, d(M + 1), 1),
                                            t("li", $e, d(n.bidSpecialist), 1),
                                            t(
                                              "li",
                                              Be,
                                              d(
                                                Number(
                                                  Number(n.itemMoney).toFixed(0)
                                                ).toLocaleString()
                                              ),
                                              1
                                            ),
                                            t(
                                              "li",
                                              Ye,
                                              d(
                                                Number(
                                                  Number(
                                                    n.challengeMoney
                                                  ).toFixed(0)
                                                ).toLocaleString()
                                              ),
                                              1
                                            ),
                                            t(
                                              "li",
                                              Re,
                                              d(
                                                Number(
                                                  n.challengeRatioPercent
                                                ).toFixed(1)
                                              ),
                                              1
                                            ),
                                            t(
                                              "li",
                                              je,
                                              d(
                                                Number(
                                                  n.bidAmount.toFixed(0)
                                                ).toLocaleString()
                                              ),
                                              1
                                            ),
                                            t("li", Ve, [
                                              t(
                                                "span",
                                                {
                                                  title: (
                                                    n.itemPercent * 100
                                                  ).toFixed(1)
                                                },
                                                d(
                                                  (n.itemPercent * 100).toFixed(
                                                    1
                                                  )
                                                ) + "%",
                                                9,
                                                Oe
                                              ),
                                              n.itemPercent !== null
                                                ? (m(),
                                                  T(
                                                    x,
                                                    {
                                                      key: 0,
                                                      color: F,
                                                      percentage:
                                                        n.itemPercent > 1
                                                          ? 100
                                                          : Number(
                                                              (
                                                                n.itemPercent *
                                                                100
                                                              ).toFixed(1)
                                                            ),
                                                      "define-back-color":
                                                        "#000"
                                                    },
                                                    null,
                                                    8,
                                                    ["percentage"]
                                                  ))
                                                : D("", !0)
                                            ]),
                                            t("li", Ee, [
                                              t(
                                                "span",
                                                {
                                                  title: (
                                                    n.challengePercent * 100
                                                  ).toFixed(1)
                                                },
                                                d(
                                                  (
                                                    n.challengePercent * 100
                                                  ).toFixed(1)
                                                ) + "%",
                                                9,
                                                Ie
                                              ),
                                              n.challengePercent !== null
                                                ? (m(),
                                                  T(
                                                    x,
                                                    {
                                                      key: 0,
                                                      color: F,
                                                      percentage:
                                                        n.challengePercent > 1
                                                          ? 100
                                                          : Number(
                                                              (
                                                                n.challengePercent *
                                                                100
                                                              ).toFixed(1)
                                                            ),
                                                      "define-back-color":
                                                        "#000"
                                                    },
                                                    null,
                                                    8,
                                                    ["percentage"]
                                                  ))
                                                : D("", !0)
                                            ])
                                          ]
                                        )
                                      )
                                    ),
                                    128
                                  ))
                                ]))
                              : (m(),
                                f("div", We, [
                                  (m(!0),
                                  f(
                                    L,
                                    null,
                                    $(
                                      s(b),
                                      (n, M) => (
                                        m(),
                                        f(
                                          "ul",
                                          { key: n.id, class: "body-tr" },
                                          [
                                            t("li", ze, d(M + 1), 1),
                                            t("li", qe, d(n.bidSpecialist), 1),
                                            t(
                                              "li",
                                              Ge,
                                              d(
                                                Number(
                                                  Number(n.itemMoney).toFixed(0)
                                                ).toLocaleString()
                                              ),
                                              1
                                            ),
                                            t(
                                              "li",
                                              He,
                                              d(
                                                Number(
                                                  n.bidAmount
                                                ).toLocaleString()
                                              ),
                                              1
                                            ),
                                            t("li", Je, [
                                              t(
                                                "span",
                                                {
                                                  title: (
                                                    n.itemPercent * 100
                                                  ).toFixed(1)
                                                },
                                                d(
                                                  (n.itemPercent * 100).toFixed(
                                                    1
                                                  )
                                                ) + "%",
                                                9,
                                                Ke
                                              ),
                                              n.itemPercent !== null
                                                ? (m(),
                                                  T(
                                                    x,
                                                    {
                                                      key: 0,
                                                      color: F,
                                                      percentage:
                                                        n.itemPercent > 1
                                                          ? 100
                                                          : Number(
                                                              (
                                                                n.itemPercent *
                                                                100
                                                              ).toFixed(1)
                                                            ),
                                                      "define-back-color":
                                                        "#000"
                                                    },
                                                    null,
                                                    8,
                                                    ["percentage"]
                                                  ))
                                                : D("", !0)
                                            ])
                                          ]
                                        )
                                      )
                                    ),
                                    128
                                  ))
                                ]))
                          ])),
                          [[j, s(I)]]
                        )
                      ],
                      2
                    )
                  ])
                ],
                2
              )
            ])
          );
        }
      );
    }
  },
  lt = G(Qe, [["__scopeId", "data-v-fb60e8d8"]]);
export { lt as default };
