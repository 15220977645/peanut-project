import { useColumns as _ } from "./columns-BwaMo8Dy.js";
import {
  d as p,
  c as m,
  b as o,
  h as s,
  w as u,
  a as t,
  t as d,
  u as e,
  o as i
} from "./index-CnxsT9tm.js";
const f = { class: "flex" },
  h = { class: "w-[700px]" },
  k = p({
    __name: "index",
    setup(x) {
      const { columns: a, dataList: n, columnsDrag: c } = _();
      return (b, w) => {
        const l = s("el-scrollbar"),
          r = s("pure-table");
        return (
          i(),
          m("div", f, [
            o(
              l,
              { height: "700px" },
              {
                default: u(() => [
                  t("code", null, [t("pre", h, " " + d(e(c)), 1)])
                ]),
                _: 1
              }
            ),
            o(r, { "row-key": "id", data: e(n), columns: e(a) }, null, 8, [
              "data",
              "columns"
            ])
          ])
        );
      };
    }
  });
export { k as _ };
