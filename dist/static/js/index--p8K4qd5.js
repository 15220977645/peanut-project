import {
  d as m,
  z as T,
  b as a,
  u as l,
  r as p,
  F as V,
  j as $,
  A as H,
  B,
  g as I,
  w as o,
  a as c,
  h as U,
  o as W,
  _ as X
} from "./index-CnxsT9tm.js";
const L = m({
    name: "Resizer",
    props: {
      split: { type: String, required: !0 },
      className: { type: String, default: "" }
    },
    setup(e) {
      const i = T(() =>
        ["splitter-pane-resizer", e.split, e.className].join(" ")
      );
      return () => a("div", { class: l(i) }, null);
    }
  }),
  R = m({
    name: "SplitPane",
    components: { resizer: L },
    props: { splitSet: { type: Object, require: !0 } },
    emits: ["resize"],
    setup(e, i) {
      var S, g, h, _, w;
      const n = p(!1),
        u = p(!1),
        t = p((S = e.splitSet) == null ? void 0 : S.defaultPercent),
        f =
          ((g = e.splitSet) == null ? void 0 : g.split) === "vertical"
            ? "width"
            : "height",
        k =
          ((h = e.splitSet) == null ? void 0 : h.split) === "vertical"
            ? "left"
            : "top",
        b = p([
          "splitter-pane splitter-paneL",
          (_ = e.splitSet) == null ? void 0 : _.split
        ]),
        x = p([
          "splitter-pane splitter-paneR",
          (w = e.splitSet) == null ? void 0 : w.split
        ]),
        N = T(() => {
          var s;
          return n.value
            ? ((s = e.splitSet) == null ? void 0 : s.split) === "vertical"
              ? { cursor: "col-resize" }
              : { cursor: "row-resize" }
            : { cursor: "default" };
        }),
        j = () => {
          u.value || ((t.value = 50), i.emit("resize", t.value));
        },
        q = () => {
          (n.value = !0), (u.value = !1);
        },
        A = () => {
          n.value = !1;
        },
        D = s => {
          var P, z, y, M, C;
          if (((s.buttons === 0 || s.which === 0) && (n.value = !1), n.value)) {
            let v = 0,
              r = s.currentTarget;
            if (((P = e.splitSet) == null ? void 0 : P.split) === "vertical")
              for (; r; ) (v += r.offsetLeft), (r = r.offsetParent);
            else for (; r; ) (v += r.offsetTop), (r = r.offsetParent);
            const F =
                ((z = e.splitSet) == null ? void 0 : z.split) === "vertical"
                  ? s.pageX
                  : s.pageY,
              O =
                ((y = e.splitSet) == null ? void 0 : y.split) === "vertical"
                  ? s.currentTarget.offsetWidth
                  : s.currentTarget.offsetHeight,
              d = Math.floor(((F - v) / O) * 1e4) / 100;
            d > ((M = e.splitSet) == null ? void 0 : M.minPercent) &&
              d < 100 - ((C = e.splitSet) == null ? void 0 : C.minPercent) &&
              (t.value = d),
              i.emit("resize", t.value),
              (u.value = !0);
          }
        };
      return () => {
        var s;
        return a(V, null, [
          a(
            "div",
            {
              class: "vue-splitter-container clearfix",
              style: l(N),
              onMouseup: () => A(),
              onMousemove: () => D(event)
            },
            [
              a("div", { class: l(b), style: { [l(f)]: l(t) + "%" } }, [
                i.slots.paneL()
              ]),
              a(
                L,
                {
                  style: `${l([k])}:${l(t)}%`,
                  split: (s = e.splitSet) == null ? void 0 : s.split,
                  onMousedown: () => q(),
                  onClick: () => j()
                },
                null
              ),
              a("div", { class: l(x), style: { [l(f)]: 100 - l(t) + "%" } }, [
                i.slots.paneR()
              ]),
              $(a("div", { class: "vue-splitter-container-mask" }, null), [
                [H, l(n)]
              ])
            ]
          )
        ]);
      };
    }
  }),
  Y = { class: "split-pane" },
  E = m({
    name: "SplitPane",
    __name: "index",
    setup(e) {
      const i = B({ minPercent: 20, defaultPercent: 40, split: "vertical" }),
        n = B({ minPercent: 20, defaultPercent: 40, split: "horizontal" });
      return (u, t) => {
        const f = U("el-card");
        return (
          W(),
          I(
            f,
            { shadow: "never" },
            {
              header: o(
                () =>
                  t[0] ||
                  (t[0] = [
                    c(
                      "div",
                      { class: "card-header" },
                      [c("span", { class: "font-medium" }, "切割面板组件")],
                      -1
                    )
                  ])
              ),
              default: o(() => [
                c("div", Y, [
                  a(
                    l(R),
                    { splitSet: i },
                    {
                      paneL: o(
                        () =>
                          t[1] ||
                          (t[1] = [c("div", { class: "dv-a" }, "A", -1)])
                      ),
                      paneR: o(() => [
                        a(
                          l(R),
                          { splitSet: n },
                          {
                            paneL: o(
                              () =>
                                t[2] ||
                                (t[2] = [c("div", { class: "dv-b" }, "B", -1)])
                            ),
                            paneR: o(
                              () =>
                                t[3] ||
                                (t[3] = [c("div", { class: "dv-c" }, "C", -1)])
                            ),
                            _: 1
                          },
                          8,
                          ["splitSet"]
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ["splitSet"]
                  )
                ])
              ]),
              _: 1
            }
          )
        );
      };
    }
  }),
  J = X(E, [["__scopeId", "data-v-a5ece1dd"]]);
export { J as default };
