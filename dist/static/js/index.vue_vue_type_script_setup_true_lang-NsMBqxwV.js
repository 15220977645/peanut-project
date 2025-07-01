import { useColumns as k } from "./columns-yXaMviJ2.js";
import {
  d as B,
  c as _,
  b as e,
  h as u,
  w as t,
  a as m,
  u as a,
  a4 as g,
  i as n,
  o as A
} from "./index-CnxsT9tm.js";
const L = B({
  __name: "index",
  setup(T) {
    const {
      loading: V,
      columns: v,
      dataList: z,
      hideVal: p,
      tableSize: d,
      pagination: s,
      loadingConfig: x,
      paginationAlign: f,
      paginationSmall: b,
      onChange: S,
      onSizeChange: P,
      onCurrentChange: w
    } = k();
    return (y, l) => {
      const o = u("el-radio-button"),
        r = u("el-radio-group"),
        C = u("el-divider"),
        N = u("el-space"),
        U = u("pure-table");
      return (
        A(),
        _("div", null, [
          e(
            N,
            { class: "float-right mb-4" },
            {
              default: t(() => [
                l[16] || (l[16] = m("p", { class: "text-sm" }, "动态列：", -1)),
                e(
                  r,
                  {
                    modelValue: a(p),
                    "onUpdate:modelValue":
                      l[0] || (l[0] = i => (g(p) ? (p.value = i) : null)),
                    size: "small"
                  },
                  {
                    default: t(() => [
                      e(
                        o,
                        { label: "nohide" },
                        {
                          default: t(() => l[4] || (l[4] = [n("不隐藏")])),
                          _: 1
                        }
                      ),
                      e(
                        o,
                        { label: "hideDate" },
                        {
                          default: t(() => l[5] || (l[5] = [n("隐藏日期")])),
                          _: 1
                        }
                      ),
                      e(
                        o,
                        { label: "hideName" },
                        {
                          default: t(() => l[6] || (l[6] = [n("隐藏姓名")])),
                          _: 1
                        }
                      ),
                      e(
                        o,
                        { label: "hideAddress" },
                        {
                          default: t(() => l[7] || (l[7] = [n("隐藏地址")])),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ["modelValue"]
                ),
                e(C, { direction: "vertical" }),
                l[17] ||
                  (l[17] = m("p", { class: "text-sm" }, "表格大小：", -1)),
                e(
                  r,
                  {
                    modelValue: a(d),
                    "onUpdate:modelValue":
                      l[1] || (l[1] = i => (g(d) ? (d.value = i) : null)),
                    size: "small"
                  },
                  {
                    default: t(() => [
                      e(
                        o,
                        { label: "large" },
                        {
                          default: t(() => l[8] || (l[8] = [n("large")])),
                          _: 1
                        }
                      ),
                      e(
                        o,
                        { label: "default" },
                        {
                          default: t(() => l[9] || (l[9] = [n("default")])),
                          _: 1
                        }
                      ),
                      e(
                        o,
                        { label: "small" },
                        {
                          default: t(() => l[10] || (l[10] = [n("small")])),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ["modelValue"]
                ),
                e(C, { direction: "vertical" }),
                l[18] ||
                  (l[18] = m("p", { class: "text-sm" }, "分页大小：", -1)),
                e(
                  r,
                  {
                    modelValue: a(b),
                    "onUpdate:modelValue":
                      l[2] || (l[2] = i => (g(b) ? (b.value = i) : null)),
                    size: "small",
                    onChange: a(S)
                  },
                  {
                    default: t(() => [
                      e(
                        o,
                        { label: !1 },
                        {
                          default: t(() => l[11] || (l[11] = [n("no small")])),
                          _: 1
                        }
                      ),
                      e(
                        o,
                        { label: !0 },
                        {
                          default: t(() => l[12] || (l[12] = [n("small")])),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ["modelValue", "onChange"]
                ),
                e(C, { direction: "vertical" }),
                l[19] ||
                  (l[19] = m(
                    "p",
                    { class: "text-sm" },
                    "分页的对齐方式：",
                    -1
                  )),
                e(
                  r,
                  {
                    modelValue: a(f),
                    "onUpdate:modelValue":
                      l[3] || (l[3] = i => (g(f) ? (f.value = i) : null)),
                    size: "small"
                  },
                  {
                    default: t(() => [
                      e(
                        o,
                        { label: "right" },
                        {
                          default: t(() => l[13] || (l[13] = [n("right")])),
                          _: 1
                        }
                      ),
                      e(
                        o,
                        { label: "center" },
                        {
                          default: t(() => l[14] || (l[14] = [n("center")])),
                          _: 1
                        }
                      ),
                      e(
                        o,
                        { label: "left" },
                        {
                          default: t(() => l[15] || (l[15] = [n("left")])),
                          _: 1
                        }
                      )
                    ]),
                    _: 1
                  },
                  8,
                  ["modelValue"]
                )
              ]),
              _: 1
            }
          ),
          e(
            U,
            {
              border: "",
              "row-key": "id",
              alignWhole: "center",
              showOverflowTooltip: "",
              size: a(d),
              loading: a(V),
              "loading-config": a(x),
              height: a(d) === "small" ? 352 : 440,
              data: a(z).slice(
                (a(s).currentPage - 1) * a(s).pageSize,
                a(s).currentPage * a(s).pageSize
              ),
              columns: a(v),
              pagination: a(s),
              onPageSizeChange: a(P),
              onPageCurrentChange: a(w)
            },
            null,
            8,
            [
              "size",
              "loading",
              "loading-config",
              "height",
              "data",
              "columns",
              "pagination",
              "onPageSizeChange",
              "onPageCurrentChange"
            ]
          )
        ])
      );
    };
  }
});
export { L as _ };
