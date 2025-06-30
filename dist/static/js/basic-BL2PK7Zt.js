import {
  c as D,
  C as d,
  a as i,
  b as a,
  d as r,
  e as C
} from "./index.esm-CzrZMgx-.js";
import {
  d as c,
  _ as b,
  h as m,
  l as F,
  c as x,
  o as p,
  a as v,
  j as B,
  b as t,
  w as n,
  i as o
} from "./index-DuV_pBtV.js";
const E = c({
    name: "ExampleSimple",
    components: {
      [C.name]: C,
      [r.name]: r,
      [a.name]: a,
      [i.name]: i,
      [d.name]: d
    },
    directives: { contextmenu: D }
  }),
  w = { class: "wrapper" };
function A($, e, G, N, V, k) {
  const u = m("v-contextmenu-item"),
    s = m("v-contextmenu-divider"),
    l = m("v-contextmenu-submenu"),
    _ = m("v-contextmenu"),
    f = F("contextmenu");
  return (
    p(),
    x("div", null, [
      e[9] || (e[9] = v("h1", null, "基本使用", -1)),
      B(
        (p(),
        x("div", w, e[0] || (e[0] = [v("code", null, "右键点击此区域", -1)]))),
        [[f, void 0, "contextmenu"]]
      ),
      t(
        _,
        { ref: "contextmenu" },
        {
          default: n(() => [
            t(u, null, {
              default: n(() => e[1] || (e[1] = [o("GitHub")])),
              _: 1
            }),
            t(u, null, {
              default: n(() => e[2] || (e[2] = [o("GitLab")])),
              _: 1
            }),
            t(s),
            t(
              l,
              { title: "蔬菜菜" },
              {
                default: n(() => [
                  t(u, null, {
                    default: n(() => e[3] || (e[3] = [o("土豆")])),
                    _: 1
                  }),
                  t(
                    l,
                    { title: "青菜" },
                    {
                      default: n(() => [
                        t(u, null, {
                          default: n(() => e[4] || (e[4] = [o("小油菜")])),
                          _: 1
                        }),
                        t(u, null, {
                          default: n(() => e[5] || (e[5] = [o("空心菜")])),
                          _: 1
                        })
                      ]),
                      _: 1
                    }
                  ),
                  t(u, null, {
                    default: n(() => e[6] || (e[6] = [o("黄瓜")])),
                    _: 1
                  })
                ]),
                _: 1
              }
            ),
            t(
              u,
              { disabled: "" },
              { default: n(() => e[7] || (e[7] = [o("菠萝蜜")])), _: 1 }
            ),
            t(s),
            t(u, null, {
              default: n(() => e[8] || (e[8] = [o("哈密瓜")])),
              _: 1
            })
          ]),
          _: 1
        },
        512
      )
    ])
  );
}
const j = b(E, [
  ["render", A],
  ["__scopeId", "data-v-33a9c29d"]
]);
export { j as default };
