import "./index-TK4OleqK.js";
import {
  bR as c,
  d as f,
  r as l,
  L as u,
  e as d,
  f as p,
  c as b,
  o as h,
  a as m,
  bQ as g,
  _
} from "./index-DuV_pBtV.js";
function o(t) {
  return document.body.clientWidth * (t / 1920);
}
function z(t) {
  return document.body.clientHeight * (t / 1080);
}
function S(t, e, n = !0, i = 18, r = 12) {
  return {
    color: ["#fff", "rgba(12, 47, 55, 0.2)"],
    series: [
      {
        type: "pie",
        center: ["50%", "51%"],
        radius: ["85%", "95%"],
        data: [
          {
            name: "",
            value: t,
            label: {
              show: !0,
              position: "center",
              color: "#031114",
              fontSize: o(38),
              fontWeight: "bold",
              formatter() {
                return n
                  ? `{a|${t}}{b|%}`
                  : `{a|${t}}{b|%}
{c|${e}}`;
              },
              rich: {
                a: { color: "#3a6cff", fontSize: o(i) },
                b: { color: "#3a6cff", fontSize: o(r) },
                c: { fontSize: o(r), padding: [z(4), 0, 0, 0] }
              }
            },
            itemStyle: {
              color: new c(0, 1, 0, 0, [
                { offset: 0, color: "#fbb11f" },
                { offset: 0.5, color: "#f2ba2c" },
                { offset: 1, color: "#fbb11f" }
              ]),
              borderRadius: o(8)
            }
          },
          {
            name: "",
            value: 0,
            label: {
              position: "inside",
              formatter: "{a|●}",
              rich: { a: { color: "#fff", fontSize: o(15) } }
            }
          },
          { name: "", value: 100 - t, label: { show: !1 } }
        ],
        emphasis: { scale: 1 }
      }
    ]
  };
}
const k = { class: "ring-mark-chart" },
  v = f({
    __name: "ringMarkChart",
    props: {
      rate: {},
      rateChn: {},
      noShowCenterLabel: { type: Boolean },
      numSize: {},
      labelSize: {}
    },
    setup(t) {
      let e = null;
      const n = t,
        i = l();
      u(
        n,
        () => {
          e && (e.resize(), e.dispose(), (e = null)), r();
        },
        { deep: !0 }
      );
      async function r() {
        s();
      }
      function s() {
        const a = i.value;
        a &&
          (e && e.dispose(),
          (e = g(a)),
          e.setOption(
            S(n.rate, n.rateChn, n.noShowCenterLabel, n.numSize, n.labelSize)
          ));
      }
      return (
        d(() => {
          r(),
            window.addEventListener("resize", () => {
              e && (e.resize(), e.dispose(), (e = null), s());
            });
        }),
        p(() => {
          e && (e.dispose(), (e = null));
        }),
        (a, w) => (
          h(),
          b("div", k, [
            m(
              "div",
              { ref_key: "ringMark", ref: i, class: "content" },
              null,
              512
            )
          ])
        )
      );
    }
  }),
  B = _(v, [["__scopeId", "data-v-927ba707"]]);
export { B as default };
