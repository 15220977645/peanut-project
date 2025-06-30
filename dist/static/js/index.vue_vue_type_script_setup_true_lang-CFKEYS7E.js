import { useColumns as s } from "./columns-CW9Hsvj4.js";
import { d as a, g as r, h as c, u as o, o as m } from "./index-D6DS3gmo.js";
const i = a({
  __name: "index",
  setup(u) {
    const { columns: e, dataList: n } = s();
    return (p, _) => {
      const t = c("pure-table");
      return (
        m(),
        r(
          t,
          { "row-key": "id", border: "", data: o(n), columns: o(e) },
          null,
          8,
          ["data", "columns"]
        )
      );
    };
  }
});
export { i as _ };
