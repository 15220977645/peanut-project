import { r as t } from "./requireImg-CLyBMj04.js";
import { _ as s, c as o, o as r, a, u as n } from "./index-DuV_pBtV.js";
const c = { class: "empty-container" },
  _ = ["src"],
  p = {
    __name: "emptyData",
    setup(m) {
      return (l, e) => (
        r(),
        o("div", c, [
          a(
            "img",
            {
              src: n(t)("fullScreen/foodSafe/empty-data.svg"),
              alt: "暂无数据"
            },
            null,
            8,
            _
          ),
          e[0] || (e[0] = a("span", null, "暂无内容，敬请期待", -1))
        ])
      );
    }
  },
  f = s(p, [["__scopeId", "data-v-36adeea1"]]);
export { f as default };
