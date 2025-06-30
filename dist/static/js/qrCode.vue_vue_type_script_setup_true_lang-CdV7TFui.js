import { M as a } from "./motion--pQMnTOj.js";
import { R as i } from "./index-DyHKofoD.js";
import {
  d,
  Z as u,
  h as l,
  c as m,
  o as p,
  b as t,
  w as o,
  u as e,
  a as f,
  t as r,
  hD as x,
  i as g,
  F as C
} from "./index-D6DS3gmo.js";
const b = { class: "text-gray-500 text-xs" },
  h = d({
    __name: "qrCode",
    setup(k) {
      const { t: s } = u();
      return (v, n) => {
        const _ = l("el-divider"),
          c = l("el-button");
        return (
          p(),
          m(
            C,
            null,
            [
              t(
                e(a),
                { class: "-mt-2 -mb-2" },
                {
                  default: o(() => [
                    t(e(i), { text: e(s)("login.test") }, null, 8, ["text"])
                  ]),
                  _: 1
                }
              ),
              t(
                e(a),
                { delay: 100 },
                {
                  default: o(() => [
                    t(_, null, {
                      default: o(() => [f("p", b, r(e(s)("login.tip")), 1)]),
                      _: 1
                    })
                  ]),
                  _: 1
                }
              ),
              t(
                e(a),
                { delay: 150 },
                {
                  default: o(() => [
                    t(
                      c,
                      {
                        class: "w-full mt-4",
                        onClick: n[0] || (n[0] = y => e(x)().SET_CURRENTPAGE(0))
                      },
                      { default: o(() => [g(r(e(s)("login.back")), 1)]), _: 1 }
                    )
                  ]),
                  _: 1
                }
              )
            ],
            64
          )
        );
      };
    }
  });
export { h as _ };
