import { M as i } from "./motion-Cac8VURx.js";
import { m as B } from "./message-CSPqT3RV.js";
import { d as D, u as w, a as E } from "./iphone-CLCZJ0yV.js";
import {
  d as N,
  Z as S,
  r as C,
  B as T,
  h as f,
  g as $,
  o as z,
  w as a,
  b as o,
  u as e,
  a as F,
  i as g,
  t as y,
  a3 as V,
  ae as v,
  hD as I
} from "./index-CnxsT9tm.js";
import { u as m } from "./hooks-CcwABaZj.js";
import { d as h } from "./lock-fill-BZPnsoM7.js";
const M = { class: "w-full flex justify-between" },
  K = N({
    __name: "update",
    setup(j) {
      const { t: n } = S(),
        u = C(!1),
        r = T({ phone: "", verifyCode: "", password: "", repeatPassword: "" }),
        c = C(),
        { isDisabled: b, text: x } = w(),
        R = [
          {
            validator: (p, l, s) => {
              l === ""
                ? s(new Error(V(v("login.passwordSureReg"))))
                : r.password !== l
                ? s(new Error(V(v("login.passwordDifferentReg"))))
                : s();
            },
            trigger: "blur"
          }
        ],
        k = async p => {
          (u.value = !0),
            p &&
              (await p.validate((l, s) => {
                if (l)
                  setTimeout(() => {
                    B(V(v("login.passwordUpdateReg")), { type: "success" }),
                      (u.value = !1);
                  }, 2e3);
                else return (u.value = !1), s;
              }));
        };
      function U() {
        w().end(), I().SET_CURRENTPAGE(0);
      }
      return (p, l) => {
        const s = f("el-input"),
          d = f("el-form-item"),
          _ = f("el-button"),
          P = f("el-form");
        return (
          z(),
          $(
            P,
            {
              ref_key: "ruleFormRef",
              ref: c,
              model: r,
              rules: e(E),
              size: "large"
            },
            {
              default: a(() => [
                o(e(i), null, {
                  default: a(() => [
                    o(
                      d,
                      { prop: "phone" },
                      {
                        default: a(() => [
                          o(
                            s,
                            {
                              clearable: "",
                              modelValue: r.phone,
                              "onUpdate:modelValue":
                                l[0] || (l[0] = t => (r.phone = t)),
                              placeholder: e(n)("login.phone"),
                              "prefix-icon": e(m)(e(D))
                            },
                            null,
                            8,
                            ["modelValue", "placeholder", "prefix-icon"]
                          )
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  _: 1
                }),
                o(
                  e(i),
                  { delay: 100 },
                  {
                    default: a(() => [
                      o(
                        d,
                        { prop: "verifyCode" },
                        {
                          default: a(() => [
                            F("div", M, [
                              o(
                                s,
                                {
                                  clearable: "",
                                  modelValue: r.verifyCode,
                                  "onUpdate:modelValue":
                                    l[1] || (l[1] = t => (r.verifyCode = t)),
                                  placeholder: e(n)("login.smsVerifyCode"),
                                  "prefix-icon": e(m)("ri:shield-keyhole-line")
                                },
                                null,
                                8,
                                ["modelValue", "placeholder", "prefix-icon"]
                              ),
                              o(
                                _,
                                {
                                  disabled: e(b),
                                  class: "ml-2",
                                  onClick:
                                    l[2] ||
                                    (l[2] = t => e(w)().start(c.value, "phone"))
                                },
                                {
                                  default: a(() => [
                                    g(
                                      y(
                                        e(x).length > 0
                                          ? e(x) + e(n)("login.info")
                                          : e(n)("login.getVerifyCode")
                                      ),
                                      1
                                    )
                                  ]),
                                  _: 1
                                },
                                8,
                                ["disabled"]
                              )
                            ])
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  }
                ),
                o(
                  e(i),
                  { delay: 150 },
                  {
                    default: a(() => [
                      o(
                        d,
                        { prop: "password" },
                        {
                          default: a(() => [
                            o(
                              s,
                              {
                                clearable: "",
                                "show-password": "",
                                modelValue: r.password,
                                "onUpdate:modelValue":
                                  l[3] || (l[3] = t => (r.password = t)),
                                placeholder: e(n)("login.password"),
                                "prefix-icon": e(m)(e(h))
                              },
                              null,
                              8,
                              ["modelValue", "placeholder", "prefix-icon"]
                            )
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  }
                ),
                o(
                  e(i),
                  { delay: 200 },
                  {
                    default: a(() => [
                      o(
                        d,
                        { rules: R, prop: "repeatPassword" },
                        {
                          default: a(() => [
                            o(
                              s,
                              {
                                clearable: "",
                                "show-password": "",
                                modelValue: r.repeatPassword,
                                "onUpdate:modelValue":
                                  l[4] || (l[4] = t => (r.repeatPassword = t)),
                                placeholder: e(n)("login.sure"),
                                "prefix-icon": e(m)(e(h))
                              },
                              null,
                              8,
                              ["modelValue", "placeholder", "prefix-icon"]
                            )
                          ]),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  }
                ),
                o(
                  e(i),
                  { delay: 250 },
                  {
                    default: a(() => [
                      o(d, null, {
                        default: a(() => [
                          o(
                            _,
                            {
                              class: "w-full",
                              size: "default",
                              type: "primary",
                              loading: u.value,
                              onClick: l[5] || (l[5] = t => k(c.value))
                            },
                            {
                              default: a(() => [
                                g(y(e(n)("login.definite")), 1)
                              ]),
                              _: 1
                            },
                            8,
                            ["loading"]
                          )
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }
                ),
                o(
                  e(i),
                  { delay: 300 },
                  {
                    default: a(() => [
                      o(d, null, {
                        default: a(() => [
                          o(
                            _,
                            { class: "w-full", size: "default", onClick: U },
                            {
                              default: a(() => [g(y(e(n)("login.back")), 1)]),
                              _: 1
                            }
                          )
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }
                )
              ]),
              _: 1
            },
            8,
            ["model", "rules"]
          )
        );
      };
    }
  });
export { K as _ };
