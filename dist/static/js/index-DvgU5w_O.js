import l from "./basic-BL2PK7Zt.js";
import d from "./menuGroup-DxoYQNAT.js";
import c from "./menuDynamic-D4sLIttB.js";
import {
  d as _,
  g as p,
  w as o,
  b as e,
  h as a,
  a as s,
  o as u
} from "./index-DuV_pBtV.js";
import "./index.esm-CzrZMgx-.js";
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
