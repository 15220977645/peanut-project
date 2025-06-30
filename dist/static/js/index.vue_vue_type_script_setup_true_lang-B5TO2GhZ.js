import { useColumns as d } from "./columns-CISexKaE.js";
import {
  d as _,
  r as f,
  g,
  h as n,
  u as e,
  a4 as w,
  w as k,
  a as y,
  b as C,
  o as b
} from "./index-D6DS3gmo.js";
const h = { class: "w-[600px] m-4" },
  B = _({
    __name: "index",
    setup(R) {
      const t = f(),
        {
          columns: s,
          pagination: o,
          selectValue: a,
          tableDataEdit: r,
          rowStyle: c,
          onRowClick: i
        } = d(t);
      return (V, l) => {
        const p = n("pure-table"),
          u = n("el-select");
        return (
          b(),
          g(
            u,
            {
              ref_key: "selectRef",
              ref: t,
              modelValue: e(a),
              "onUpdate:modelValue":
                l[0] || (l[0] = m => (w(a) ? (a.value = m) : null)),
              placeholder: "请选择",
              clearable: ""
            },
            {
              empty: k(() => [
                y("div", h, [
                  C(
                    p,
                    {
                      height: "355",
                      "row-key": "id",
                      "header-cell-style": {
                        background: "#f5f7fa",
                        color: "#303133"
                      },
                      "row-style": e(c),
                      data: e(r).slice(
                        (e(o).currentPage - 1) * e(o).pageSize,
                        e(o).currentPage * e(o).pageSize
                      ),
                      columns: e(s),
                      pagination: e(o),
                      onRowClick: e(i)
                    },
                    null,
                    8,
                    ["row-style", "data", "columns", "pagination", "onRowClick"]
                  )
                ])
              ]),
              _: 1
            },
            8,
            ["modelValue"]
          )
        );
      };
    }
  });
export { B as _ };
