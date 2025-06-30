import l from "./basic-CToT1RmP.js";
import d from "./menuGroup-CF1lqdX4.js";
import c from "./menuDynamic-CXGO0Q_0.js";
import {
  d as _,
  g as p,
  w as o,
  b as e,
  h as a,
  a as s,
  o as u
} from "./index-D6DS3gmo.js";
import "./index.esm-uhU4bw4i.js";
const v = _({
  name: "ContextMenu",
  __name: "index",
  setup(f) {
    return (i, n) => {
      const t = a("el-col"),
        r = a("el-row"),
        m = a("el-card");
      return (
        u(),
        p(
          m,
          { shadow: "never" },
          {
            header: o(
              () =>
                n[0] ||
                (n[0] = [
                  s(
                    "div",
                    { class: "card-header" },
                    [s("span", { class: "font-medium" }, "右键菜单组件")],
                    -1
                  )
                ])
            ),
            default: o(() => [
              e(
                r,
                { gutter: 24 },
                {
                  default: o(() => [
                    e(
                      t,
                      { xs: 24, sm: 10, md: 10, lg: 8, xl: 10 },
                      { default: o(() => [e(l)]), _: 1 }
                    ),
                    e(
                      t,
                      { xs: 24, sm: 10, md: 10, lg: 8, xl: 10 },
                      { default: o(() => [e(d)]), _: 1 }
                    ),
                    e(
                      t,
                      { xs: 24, sm: 10, md: 10, lg: 8, xl: 10 },
                      { default: o(() => [e(c)]), _: 1 }
                    )
                  ]),
                  _: 1
                }
              )
            ]),
            _: 1
          }
        )
      );
    };
  }
});
export { v as default };
