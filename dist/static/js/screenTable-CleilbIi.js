import {
  d as _,
  r as b,
  L as y,
  c as a,
  o as s,
  a as r,
  F as i,
  k as l,
  y as u,
  G as m,
  t as o,
  n as F,
  _ as $
} from "./index-CnxsT9tm.js";
const f = { class: "table-component" },
  k = { class: "table-head" },
  L = { class: "table-body" },
  x = ["title"],
  g = _({
    __name: "screenTable",
    props: { tableData: {}, chnList: {}, domName: {} },
    setup(h) {
      const d = h,
        p = b(!1);
      return (
        y(
          d.tableData,
          async () => {
            await F(), (p.value = !0);
          },
          { deep: !0, immediate: !0 }
        ),
        (n, v) => (
          s(),
          a("div", f, [
            r("ul", k, [
              (s(!0),
              a(
                i,
                null,
                l(
                  n.chnList,
                  (t, e) => (
                    s(),
                    a(
                      "li",
                      {
                        key: e,
                        style: m({ width: `${100 / n.chnList.length}%` }),
                        class: u(`td-${e}`)
                      },
                      o(t.chn),
                      7
                    )
                  )
                ),
                128
              ))
            ]),
            r("div", L, [
              (s(!0),
              a(
                i,
                null,
                l(
                  n.tableData,
                  t => (
                    s(),
                    a("ul", { key: t.id, class: "table-row" }, [
                      (s(!0),
                      a(
                        i,
                        null,
                        l(
                          n.chnList,
                          (e, c) => (
                            s(),
                            a(
                              "li",
                              {
                                key: c,
                                class: u(`td-${c}`),
                                style: m({
                                  width: `${100 / n.chnList.length}%`
                                }),
                                title: e.toFixed
                                  ? `${t[e.name].toFixed(e.toFixed)}${
                                      e.unit ? e.unit : ""
                                    }`
                                  : `${t[e.name]}${e.unit ? e.unit : ""}`
                              },
                              o(
                                e.toFixed
                                  ? t[e.name].toFixed(e.toFixed)
                                  : t[e.name]
                              ) + o(e.unit ? e.unit : ""),
                              15,
                              x
                            )
                          )
                        ),
                        128
                      ))
                    ])
                  )
                ),
                128
              ))
            ])
          ])
        )
      );
    }
  }),
  B = $(g, [["__scopeId", "data-v-0228c708"]]);
export { B as default };
