import { r as s } from "./requireImg-CLyBMj04.js";
import {
  _ as o,
  r,
  c,
  o as n,
  a as t,
  i,
  u as l,
  t as d
} from "./index-CnxsT9tm.js";
const p = { class: "subTitle" },
  f = { class: "left" },
  u = ["src"],
  _ = {
    __name: "headTitle",
    props: {
      icon: { type: String, default: "" },
      name: { type: String, default: "" },
      moreName: { type: String, default: "更多" },
      morePath: { type: String, default: null },
      pathQuery: { type: Object, default: () => {} }
    },
    setup(e) {
      const a = r(s(`fullScreen/foodSafe/${e.icon}`));
      return (S, g) => (
        n(),
        c("div", p, [
          t("div", f, [
            t("img", { class: "icon", src: l(a), alt: "" }, null, 8, u),
            i(" " + d(e.name), 1)
          ])
        ])
      );
    }
  },
  b = o(_, [["__scopeId", "data-v-5fb387b5"]]);
export { b as default };
