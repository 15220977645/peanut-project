import { useColumns as m } from "./columns-gBpYwdRS.js";
import {
  d as p,
  c as u,
  b as t,
  h as n,
  u as e,
  w as i,
  i as _,
  o as d
} from "./index-D6DS3gmo.js";
const k = p({
  __name: "index",
  setup(x) {
    const { columns: a, dataList: s, exportExcel: r } = m();
    return (b, o) => {
      const l = n("el-button"),
        c = n("pure-table");
      return (
        d(),
        u("div", null, [
          t(
            l,
            { type: "primary", onClick: e(r), class: "mb-[20px] float-right" },
            { default: i(() => o[0] || (o[0] = [_(" 导出 ")])), _: 1 },
            8,
            ["onClick"]
          ),
          t(
            c,
            { "row-key": "id", border: "", data: e(s), columns: e(a) },
            null,
            8,
            ["data", "columns"]
          )
        ])
      );
    };
  }
});
export { k as _ };
