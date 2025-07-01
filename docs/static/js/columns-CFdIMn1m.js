import {
  r as n,
  be as y,
  z as i,
  b as t,
  j as r,
  A as c,
  al as z,
  h as f,
  bd as M
} from "./index-DuV_pBtV.js";
import { b as j } from "./data-C4Xt87zX.js";
import { m as I } from "./message-BXePv0mX.js";
import { d as L } from "./check-CIQVCvCT.js";
const O = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="m199.04 672.64l193.984 112l224-387.968l-193.92-112l-224 388.032zm-23.872 60.16l32.896 148.288l144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112l56.704-98.112l-193.984-112l-56.64 98.112zM104.32 708.8l384-665.024l304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z"/>'
};
function $() {
  const l = n({}),
    u = n({}),
    s = n(-1),
    v = n(y(j, !0)),
    p = i(() => a => {
      var e;
      return (e = l.value[a]) == null ? void 0 : e.value;
    }),
    o = i(() => a => {
      var e;
      return (e = u.value[a]) == null ? void 0 : e.editing;
    }),
    m = i(() => (a, e = !1) => [
      "cursor-pointer",
      "ml-2",
      "transition",
      "delay-100",
      e
        ? ["hover:scale-110", "hover:text-red-500"]
        : o.value(a) && ["scale-150", "text-red-500"]
    ]),
    h = [
      {
        label: "ID（可编辑）",
        prop: "id",
        cellRenderer: ({ row: a, index: e }) =>
          t(
            "div",
            {
              class: "flex-bc w-full h-[32px]",
              onMouseenter: () => (s.value = e),
              onMouseleave: () => d(e)
            },
            [
              r(t("p", null, [a.id]), [[c, !o.value(e)]]),
              t(
                z,
                {
                  "enter-active-class":
                    "animate__animated animate__fadeInUp animate__faster"
                },
                {
                  default: () => [
                    r(
                      t(
                        f("el-input"),
                        { modelValue: p.value(e), onInput: _ => g(_, e) },
                        null
                      ),
                      [[c, o.value(e)]]
                    )
                  ]
                }
              ),
              r(
                t(
                  f("iconify-icon-offline"),
                  { icon: L, class: m.value(e), onClick: () => C(e) },
                  null
                ),
                [[c, o.value(e)]]
              ),
              r(
                t(
                  f("iconify-icon-offline"),
                  { icon: O, class: m.value(e, !0), onClick: () => b(a, e) },
                  null
                ),
                [[c, s.value === e && !o.value(e)]]
              )
            ]
          )
      },
      { label: "日期", prop: "date" },
      { label: "姓名", prop: "name" },
      { label: "地址", prop: "address" }
    ];
  function b({ id: a }, e) {
    (l.value[e] = Object.assign({}, l.value[e], { value: a })),
      (u.value[e] = Object.assign({}, u.value[e], { editing: !0 }));
  }
  function d(a) {
    var e;
    (e = l.value[a]) != null && e.value ? (s.value = a) : (s.value = -1);
  }
  function g(a, e) {
    l.value[e].value = a;
  }
  function C(a) {
    (v.value[a].id = l.value[a].value),
      I(`您编辑了第 ${a + 1} 行，编辑后数据为：${JSON.stringify(v.value[a])}`, {
        type: "success"
      }),
      (u.value[a] = Object.assign({}, u.value[a], { editing: !1 })),
      M().then(() => (l.value[a].value = null));
  }
  return { columns: h, dataList: v };
}
export { $ as useColumns };
