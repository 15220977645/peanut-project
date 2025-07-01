import { useColumns as n } from "./columns-D5KGh0Yp.js";
import {
  d as r,
  g as c,
  h as l,
  u as e,
  w as u,
  a as m,
  o as p
} from "./index-CnxsT9tm.js";
const x = r({
  __name: "index",
  setup(_) {
    const { columns: o, dataList: a } = n();
    return (d, i) => {
      const t = l("pure-table");
      return (
        p(),
        c(
          t,
          { "row-key": "id", border: "", data: e(a), columns: e(o) },
          {
            echart: u(({ index: s }) => [
              m(
                "div",
                { ref: "PieChartRef" + s, class: "w-full h-[100px]" },
                null,
                512
              )
            ]),
            _: 1
          },
          8,
          ["data", "columns"]
        )
      );
    };
  }
});
export { x as _ };
