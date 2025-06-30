import "./index-TK4OleqK.js";
import {
  bR as y,
  d as g,
  r as v,
  e as b,
  f as T,
  c as d,
  b as C,
  a as p,
  bv as _,
  n as w,
  bQ as S,
  o as u,
  _ as k
} from "./index-DuV_pBtV.js";
import L from "./title-NWaZqRRA.js";
function s(a) {
  return document.body.clientWidth * (a / 1920);
}
function $(a) {
  return document.body.clientWidth * (a / 1920);
}
function A(a) {
  const e = [],
    n = [],
    r = [];
  a == null ||
    a.map(o => {
      e.push(o.name), n.push(o.value);
    });
  const c = Math.max(...n);
  return (
    n.forEach(() => {
      r.push(Math.round(c / 10 + 1) * 10);
    }),
    {
      tooltip: {
        trigger: "axis",
        formatter: o =>
          `<div style="padding: ${s(5)}px ${$(
            10
          )}px; background-color: #303133; border-radius: ${s(5)}px;">时段：${
            o[0].name
          }<br>订单次数：${o[1].value}</div>`,
        padding: 0,
        textStyle: { color: "#fff" },
        borderColor: "#303133",
        shallow: !0
      },
      grid: {
        left: "2%",
        right: "2%",
        bottom: "2%",
        top: "5%",
        containLabel: !0
      },
      xAxis: {
        type: "category",
        data: e,
        axisTick: { show: !1 },
        axisLine: { lineStyle: { color: "#031114" } },
        axisLabel: { show: !0, color: "#031114", fontSize: s(10) }
      },
      yAxis: {
        type: "value",
        splitLine: { show: !1 },
        axisTick: { show: !1 },
        axisLine: { show: !1 },
        min: 0,
        max: r[0],
        axisLabel: { color: "#031114", fontSize: s(10) }
      },
      series: [
        {
          name: "背景",
          type: "bar",
          barWidth: "50%",
          xAxisIndex: 0,
          yAxisIndex: 0,
          yAxis: { axisLine: { show: !1 } },
          data: r,
          itemStyle: {
            color: new y(0, 0, 0, 1, [
              { offset: 0, color: "rgba(29, 99, 185, 0.3)" },
              { offset: 0.3, color: "rgba(29, 99, 185, 0.1)" },
              { offset: 1, color: "rgba(29, 99, 185, 0.01)" }
            ])
          }
        },
        {
          type: "line",
          data: n,
          symbolSize: s(18),
          symbol:
            "image://src/assets/fullScreen/hngsChargeScreen/order-line-icon.svg",
          itemStyle: {
            color: "#3A6CFF",
            barBorderRadius: 0,
            label: { show: !1 },
            lineStyle: { color: "#3A6CFF", width: s(1) }
          },
          zlevel: 1
        }
      ]
    }
  );
}
const B = { class: "order-container module" },
  I = { key: 0, class: "content-bg chart-block" },
  z = { key: 1, class: "loading" },
  E = g({
    __name: "order",
    setup(a) {
      let e = null;
      const n = v([]),
        r = v(!0),
        c = _("openPlatform");
      let o;
      async function x() {
        await m(), (o = setInterval(m, 1e3 * 60));
      }
      function h(i) {
        c && c(!0, i);
      }
      async function m() {
        const i = [
          { dateTime: "00:00", serviceCount: 287, createTime: 1747152e3 },
          { dateTime: "01:00", serviceCount: 188, createTime: 1747155600 },
          { dateTime: "02:00", serviceCount: 166, createTime: 1747159200 },
          { dateTime: "03:00", serviceCount: 139, createTime: 1747162800 },
          { dateTime: "04:00", serviceCount: 122, createTime: 1747166400 },
          { dateTime: "05:00", serviceCount: 115, createTime: 174717e4 },
          { dateTime: "06:00", serviceCount: 149, createTime: 1747173600 },
          { dateTime: "07:00", serviceCount: 132, createTime: 1747177200 },
          { dateTime: "08:00", serviceCount: 151, createTime: 1747180800 }
        ];
        let t = [];
        (t =
          i == null
            ? void 0
            : i.map(l => ({ name: l.dateTime, value: l.serviceCount || 0 }))),
          JSON.stringify(n.value) !== JSON.stringify(t) && (n.value = t),
          (r.value = !1),
          await w(),
          f();
      }
      function f() {
        e && e.dispose(), (e = null);
        const i = document.getElementById("order");
        i &&
          ((e = S(i)),
          e.setOption(A(n.value)),
          e.on("click", t => {
            if (t.componentType === "series") {
              const l = { name: t.name, value: t.value };
              h(`/monitorchargeservice/evChargeIndex?tab=0&date=${l.name}`);
            }
          }));
      }
      return (
        b(() => {
          x(),
            window.addEventListener("resize", () => {
              f();
            });
        }),
        T(() => {
          e && (e.dispose(), (e = null), clearInterval(o), (o = void 0));
        }),
        (i, t) => (
          u(),
          d("div", B, [
            C(L, { title: "今日分时订单情况" }),
            r.value
              ? (u(), d("div", z, "加载中，请稍等..."))
              : (u(),
                d(
                  "div",
                  I,
                  t[0] ||
                    (t[0] = [
                      p("div", { class: "unit" }, "单位：次", -1),
                      p("div", { id: "order", class: "content" }, null, -1)
                    ])
                ))
          ])
        )
      );
    }
  }),
  P = k(E, [["__scopeId", "data-v-3f0ddf28"]]);
export { P as default };
