import { useColumns as d } from "./columns-CV1latTi.js";
import {
  d as _,
  r as y,
  c as f,
  b as l,
  h as r,
  u as e,
  w as C,
  i as b,
  o as w
} from "./index-D6DS3gmo.js";
const B = _({
  __name: "index",
  setup(k) {
    const t = y(),
      {
        columns: n,
        dataList: s,
        print: a,
        cellStyle: c,
        rowStyle: p,
        headerCellStyle: i
      } = d(t);
    return (x, o) => {
      const m = r("el-button"),
        u = r("pure-table");
      return (
        w(),
        f("div", null, [
          l(
            m,
            { type: "primary", onClick: e(a), class: "mb-[20px] float-right" },
            { default: C(() => o[0] || (o[0] = [b(" 打印 ")])), _: 1 },
            8,
            ["onClick"]
          ),
          l(
            u,
            {
              rowHoverBgColor: "transparent",
              ref_key: "printRef",
              ref: t,
              "row-key": "id",
              border: "",
              data: e(s),
              columns: e(n),
              "row-style": e(p),
              "cell-style": e(c),
              "header-cell-style": e(i)
            },
            null,
            8,
            ["data", "columns", "row-style", "cell-style", "header-cell-style"]
          )
        ])
      );
    };
  }
});
export { B as _ };
