import { useColumns as r } from "./columns-BS8vBKMI.js";
import {
  d as _,
  c as p,
  b as s,
  h as t,
  w as m,
  a,
  t as u,
  u as e,
  o as d
} from "./index-DuV_pBtV.js";
const i = { class: "flex" },
  f = { class: "w-[700px]" },
  k = _({
    __name: "index",
    setup(h) {
      const { columns: n, dataList: o } = r();
      return (x, b) => {
        const c = t("el-scrollbar"),
          l = t("pure-table");
        return (
          d(),
          p("div", i, [
            s(
              c,
              { height: "700px" },
              {
                default: m(() => [
                  a("code", null, [a("pre", f, " " + u(e(o)), 1)])
                ]),
                _: 1
              }
            ),
            s(l, { "row-key": "id", data: e(o), columns: e(n) }, null, 8, [
              "data",
              "columns"
            ])
          ])
        );
      };
    }
  });
export { k as _ };
