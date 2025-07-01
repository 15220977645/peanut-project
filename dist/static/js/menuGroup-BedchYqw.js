import {
  c,
  C as s,
  a as d,
  b as a,
  d as i,
  e as r
} from "./index.esm-CuW4Clvx.js";
import {
  d as D,
  _ as E,
  h as l,
  l as b,
  c as p,
  o as x,
  a as v,
  j as B,
  b as t,
  w as n,
  i as o
} from "./index-CnxsT9tm.js";
const F = D({
    name: "ExampleSFC",
    components: {
      [r.name]: r,
      [i.name]: i,
      [a.name]: a,
      [d.name]: d,
      [s.name]: s
    },
    directives: { contextmenu: c }
  }),
  w = { class: "wrapper" };
function A($, e, G, N, S, V) {
  const u = l("v-contextmenu-item"),
    m = l("v-contextmenu-group"),
    f = l("v-contextmenu-divider"),
    _ = l("v-contextmenu"),
    C = b("contextmenu");
  return (
    x(),
    p("div", null, [
      e[9] || (e[9] = v("h1", null, "按钮组", -1)),
      B(
        (x(),
        p("div", w, e[0] || (e[0] = [v("code", null, "右键点击此区域", -1)]))),
        [[C, void 0, "contextmenu"]]
      ),
      t(
        _,
        { ref: "contextmenu" },
        {
          default: n(() => [
            t(u, null, {
              default: n(() => e[1] || (e[1] = [o("菜单")])),
              _: 1
            }),
            t(m, null, {
              default: n(() => [
                t(u, null, {
                  default: n(() => e[2] || (e[2] = [o("Github")])),
                  _: 1
                }),
                t(u, null, {
                  default: n(() => e[3] || (e[3] = [o("Codepen")])),
                  _: 1
                }),
                t(
                  u,
                  { disabled: "" },
                  { default: n(() => e[4] || (e[4] = [o("Alipay")])), _: 1 }
                ),
                t(u, null, {
                  default: n(() => e[5] || (e[5] = [o("Wechat")])),
                  _: 1
                })
              ]),
              _: 1
            }),
            t(f),
            t(
              m,
              { title: "按钮组" },
              {
                default: n(() => [
                  t(u, null, {
                    default: n(() => e[6] || (e[6] = [o("菜单1")])),
                    _: 1
                  }),
                  t(u, null, {
                    default: n(() => e[7] || (e[7] = [o("菜单2")])),
                    _: 1
                  }),
                  t(
                    u,
                    { disabled: "" },
                    { default: n(() => e[8] || (e[8] = [o("菜单3")])), _: 1 }
                  )
                ]),
                _: 1
              }
            )
          ]),
          _: 1
        },
        512
      )
    ])
  );
}
const I = E(F, [
  ["render", A],
  ["__scopeId", "data-v-8e791c0e"]
]);
export { I as default };
