import { useColumns as a } from "./columns-C_cP4Qt6.js";
import { d as r, g as u, h as m, u as o, o as c } from "./index-DuV_pBtV.js";
const f = r({
  __name: "index",
  setup(p) {
    const { columns: e, dataList: n, showMouseMenu: t } = a();
    return (_, l) => {
      const s = m("pure-table");
      return (
        c(),
        u(
          s,
          {
            "row-key": "id",
            border: "",
            data: o(n),
            columns: o(e),
            onRowContextmenu: o(t)
          },
          null,
          8,
          ["data", "columns", "onRowContextmenu"]
        )
      );
    };
  }
});
export { f as _ };
