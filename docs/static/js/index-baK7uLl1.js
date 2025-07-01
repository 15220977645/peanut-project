import { T as o } from "./index-BHYqIoIP.js";
import {
  d as r,
  g as n,
  w as a,
  b as d,
  u as c,
  a as t,
  h as p,
  o as m
} from "./index-DuV_pBtV.js";
const f = r({
  name: "Typeit",
  __name: "index",
  setup(l) {
    return (_, e) => {
      const s = p("el-card");
      return (
        m(),
        n(
          s,
          { shadow: "never" },
          {
            header: a(
              () =>
                e[0] ||
                (e[0] = [
                  t(
                    "div",
                    { class: "card-header" },
                    [t("span", { class: "font-medium" }, " 打字机组件 ")],
                    -1
                  )
                ])
            ),
            default: a(() => [
              d(c(o), { values: ["test1", "test2", "test3"] })
            ]),
            _: 1
          }
        )
      );
    };
  }
});
export { f as default };
