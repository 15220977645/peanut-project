import { list as g } from "./list-DuIeiFNJ.js";
import {
  d as y,
  r as v,
  g as p,
  w as t,
  b as n,
  h as o,
  c as x,
  k as C,
  u as w,
  F as B,
  a as i,
  i as l,
  o as a,
  v as N,
  p as T,
  t as V,
  _ as z
} from "./index-D6DS3gmo.js";
import "./index.vue_vue_type_script_setup_true_lang-DyTxZaCO.js";
import "./columns-BRqPPtUR.js";
import "./data-BuVMDA81.js";
import "./index.vue_vue_type_script_setup_true_lang-r9Ss8RQz.js";
import "./columns-SlQ8Lasx.js";
import "./sortable.esm-DzfRfIj3.js";
import "./index.vue_vue_type_script_setup_true_lang-BCCHoZ-U.js";
import "./columns-MZJzZ7Ub.js";
import "./index.vue_vue_type_script_setup_true_lang-BB2kRXRr.js";
import "./columns-zeWut8LF.js";
import "./message-BqryS_0l.js";
import "./index.vue_vue_type_script_setup_true_lang-P4FvljBc.js";
import "./columns-gBpYwdRS.js";
import "./xlsx-D1NZSDnX.js";
import "./index.vue_vue_type_script_setup_true_lang-CFKEYS7E.js";
import "./columns-CW9Hsvj4.js";
import "./check-CIQVCvCT.js";
import "./index.vue_vue_type_script_setup_true_lang-D5AZdM_v.js";
import "./columns-DUPdfwct.js";
import "./index.vue_vue_type_script_setup_true_lang-BmF_Zcpr.js";
import "./columns-CV1latTi.js";
import "./print-_Oc05oxB.js";
import "./index.vue_vue_type_script_setup_true_lang-CKOyArVp.js";
import "./columns-DWauE0l2.js";
import "./index-C8MNRGYs.js";
import "./index.vue_vue_type_script_setup_true_lang-DfTV9uB0.js";
import "./index.vue_vue_type_script_setup_true_lang-B5TO2GhZ.js";
import "./columns-CISexKaE.js";
import "./index.vue_vue_type_script_setup_true_lang-BzxFEL2f.js";
import "./columns-D0MYcfhA.js";
const D = { class: "card-header" },
  F = { class: "font-medium" },
  $ = y({
    name: "PureTableHigh",
    __name: "high",
    setup(E) {
      const s = v(0);
      function _({ index: m }) {
        s.value = m;
      }
      return (m, e) => {
        const d = o("el-link"),
          u = o("el-alert"),
          f = o("el-tooltip"),
          b = o("el-tab-pane"),
          k = o("el-tabs"),
          h = o("el-card");
        return (
          a(),
          p(
            h,
            { shadow: "never" },
            {
              header: t(() => [
                i("div", D, [
                  i("span", F, [
                    e[1] || (e[1] = l(" 高级用法全部采用 tsx 语法，充分发挥 ")),
                    n(
                      d,
                      {
                        href: "https://github.com/pure-admin/pure-admin-table",
                        target: "_blank",
                        style: { margin: "0 4px 5px", "font-size": "16px" }
                      },
                      {
                        default: t(
                          () => e[0] || (e[0] = [l(" @pureadmin/table ")])
                        ),
                        _: 1
                      }
                    ),
                    e[2] ||
                      (e[2] = l(
                        " 的灵活性，维护整体表格只需操作 columns 配置即可 "
                      ))
                  ])
                ])
              ]),
              default: t(() => [
                n(u, {
                  title: `高级用法中所有表格都设置了 row-key ，后端需返回唯一值的字段，比如id 作用：1. 用来优化 Table
      的渲染，尤其当字段在深层结构中；2. 防止拖拽后表格组件内部混乱（拖拽必须设置哦，坑都帮您们踩过啦 ❤️）`,
                  type: "info",
                  closable: !1
                }),
                n(
                  k,
                  { onTabClick: _ },
                  {
                    default: t(() => [
                      (a(!0),
                      x(
                        B,
                        null,
                        C(
                          w(g),
                          (r, c) => (
                            a(),
                            p(
                              b,
                              { key: r.key, lazy: !0 },
                              {
                                label: t(() => [
                                  n(
                                    f,
                                    {
                                      content: `（第 ${c + 1} 个示例）${
                                        r.content
                                      }`,
                                      placement: "top-end"
                                    },
                                    {
                                      default: t(() => [
                                        i("span", null, V(r.title), 1)
                                      ]),
                                      _: 2
                                    },
                                    1032,
                                    ["content"]
                                  )
                                ]),
                                default: t(() => [
                                  s.value == c
                                    ? (a(), p(T(r.component), { key: 0 }))
                                    : N("", !0)
                                ]),
                                _: 2
                              },
                              1024
                            )
                          )
                        ),
                        128
                      ))
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
  }),
  _t = z($, [["__scopeId", "data-v-8fd6134d"]]);
export { _t as default };
