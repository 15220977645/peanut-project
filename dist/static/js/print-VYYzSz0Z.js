import { P as V } from "./print-_Oc05oxB.js";
import {
  d as A,
  r as C,
  g as d,
  w as a,
  b as t,
  j as _,
  h as l,
  a as o,
  c as L,
  k as P,
  F as S,
  i as B,
  l as D,
  o as r,
  _ as G
} from "./index-CnxsT9tm.js";
const h = { class: "card-header" },
  E = A({
    name: "Print",
    __name: "print",
    setup(z) {
      const m = C("1"),
        v = [
          { value: "1", el: ".el-table", label: "Table" },
          { value: "2", el: ".echart", label: "Echart" },
          { value: "3", el: ".img", label: "Image" }
        ];
      function b() {
        var e;
        const s =
          (e = v.filter(c => c.value === m.value)[0]) == null ? void 0 : e.el;
        V(s).toPrint;
      }
      const f = ({ rowIndex: s }) =>
          s === 1 ? "warning-row" : s === 3 ? "success-row" : "",
        g = [
          {
            date: "2016-05-03",
            name: "Tom",
            age: 18,
            address: "No. 189, Grove St, Los Angeles"
          },
          {
            date: "2016-05-02",
            name: "Tom",
            age: 18,
            address: "No. 189, Grove St, Los Angeles"
          },
          {
            date: "2016-05-04",
            name: "Tom",
            age: 18,
            address: "No. 189, Grove St, Los Angeles"
          },
          {
            date: "2016-05-01",
            name: "Tom",
            age: 18,
            address: "No. 189, Grove St, Los Angeles"
          }
        ];
      return (s, e) => {
        const c = l("el-option"),
          y = l("el-select"),
          x = l("el-button"),
          i = l("el-table-column"),
          w = l("el-table"),
          p = l("el-col"),
          N = l("el-divider"),
          T = l("el-row"),
          k = l("el-card"),
          u = D("motion");
        return (
          r(),
          d(
            k,
            { shadow: "never" },
            {
              header: a(() => [
                o("div", h, [
                  e[2] ||
                    (e[2] = o(
                      "span",
                      { class: "font-medium" },
                      "打印功能（报表、图表、图片）",
                      -1
                    )),
                  o("div", null, [
                    t(
                      y,
                      {
                        modelValue: m.value,
                        "onUpdate:modelValue":
                          e[0] || (e[0] = n => (m.value = n)),
                        class: "m-2",
                        placeholder: "Select",
                        size: "small"
                      },
                      {
                        default: a(() => [
                          (r(),
                          L(
                            S,
                            null,
                            P(v, n =>
                              t(
                                c,
                                {
                                  key: n.value,
                                  label: n.label,
                                  value: n.value
                                },
                                null,
                                8,
                                ["label", "value"]
                              )
                            ),
                            64
                          ))
                        ]),
                        _: 1
                      },
                      8,
                      ["modelValue"]
                    ),
                    t(
                      x,
                      { size: "small", type: "primary", onClick: b },
                      { default: a(() => e[1] || (e[1] = [B(" 打印 ")])), _: 1 }
                    )
                  ])
                ])
              ]),
              default: a(() => [
                t(
                  T,
                  { gutter: 24 },
                  {
                    default: a(() => [
                      _(
                        (r(),
                        d(
                          p,
                          {
                            xs: 24,
                            sm: 24,
                            md: 24,
                            lg: 24,
                            xl: 24,
                            initial: { opacity: 0, y: 100 },
                            enter: {
                              opacity: 1,
                              y: 0,
                              transition: { delay: 200 }
                            }
                          },
                          {
                            default: a(() => [
                              e[3] ||
                                (e[3] = o(
                                  "p",
                                  { class: "font-medium pt-1" },
                                  "Table",
                                  -1
                                )),
                              t(
                                w,
                                {
                                  border: "",
                                  data: g,
                                  "row-class-name": f,
                                  class: "el-table w-full mt-[10px]"
                                },
                                {
                                  default: a(() => [
                                    t(i, { prop: "date", label: "Date" }),
                                    t(i, { prop: "name", label: "Name" }),
                                    t(i, { prop: "age", label: "age" }),
                                    t(i, { prop: "address", label: "Address" })
                                  ]),
                                  _: 1
                                }
                              )
                            ]),
                            _: 1
                          }
                        )),
                        [[u]]
                      ),
                      t(N),
                      _(
                        (r(),
                        d(
                          p,
                          {
                            xs: 11,
                            sm: 11,
                            md: 11,
                            lg: 11,
                            xl: 11,
                            initial: { opacity: 0, y: 100 },
                            enter: {
                              opacity: 1,
                              y: 0,
                              transition: { delay: 200 }
                            }
                          },
                          {
                            default: a(
                              () =>
                                e[4] ||
                                (e[4] = [
                                  o(
                                    "p",
                                    { class: "font-medium pt-1" },
                                    "Echart",
                                    -1
                                  )
                                ])
                            ),
                            _: 1
                          }
                        )),
                        [[u]]
                      ),
                      _(
                        (r(),
                        d(
                          p,
                          {
                            xs: 11,
                            sm: 11,
                            md: 11,
                            lg: 11,
                            xl: 11,
                            initial: { opacity: 0, y: 100 },
                            enter: {
                              opacity: 1,
                              y: 0,
                              transition: { delay: 200 }
                            }
                          },
                          {
                            default: a(
                              () =>
                                e[5] ||
                                (e[5] = [
                                  o(
                                    "p",
                                    { class: "font-medium pt-1" },
                                    "Image",
                                    -1
                                  ),
                                  o(
                                    "img",
                                    {
                                      src: "https://avatars.githubusercontent.com/u/44761321?v=4",
                                      alt: "avatars",
                                      class:
                                        "img mt-[10px] w-[250px] h-[250px] m-auto"
                                    },
                                    null,
                                    -1
                                  )
                                ])
                            ),
                            _: 1
                          }
                        )),
                        [[u]]
                      )
                    ]),
                    _: 1
                  }
                )
              ]),
              _: 1
            }
          )
        );
      };
    }
  }),
  j = G(E, [["__scopeId", "data-v-0de0081d"]]);
export { j as default };
