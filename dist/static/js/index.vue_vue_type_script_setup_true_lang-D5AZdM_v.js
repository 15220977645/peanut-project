import { useColumns as a } from "./columns-DUPdfwct.js";
import {
  d as s,
  r as c,
  g as m,
  h as u,
  u as o,
  o as _
} from "./index-D6DS3gmo.js";
const k = s({
  __name: "index",
  setup(p) {
    const e = c(),
      { columns: r, dataList: n } = a(e);
    return (l, f) => {
      const t = u("pure-table");
      return (
        _(),
        m(
          t,
          {
            ref_key: "waterRef",
            ref: e,
            "row-key": "id",
            border: "",
            data: o(n),
            columns: o(r)
          },
          null,
          8,
          ["data", "columns"]
        )
      );
    };
  }
});
export { k as _ };
