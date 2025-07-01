import { r as i, be as n, ax as c, z as p, bh as u } from "./index-CnxsT9tm.js";
import { a as f } from "./data-y6CsZ9zX.js";
import { m as h } from "./message-CSPqT3RV.js";
import { t as b } from "./index-D4Ya40Qi.js";
function D() {
  const a = i(n(f, !0).splice(0, 4)),
    t = [
      { label: "ID", prop: "id" },
      { label: "姓名", prop: "name" },
      { label: "日期", prop: "date" },
      { label: "echarts图表", slot: "echart" }
    ],
    { isDark: s } = c(),
    r = p(() => (s.value ? "dark" : "light"));
  return (
    a.value.forEach((d, e) => {
      const { setOptions: o } = u(b(`PieChartRef${e}`), { theme: r });
      o(
        {
          tooltip: { trigger: "item", confine: !0 },
          series: [
            {
              name: "Github信息",
              type: "pie",
              data: [
                { value: 1067, name: "watchers" },
                { value: 4037, name: "star" },
                { value: 859, name: "forks" }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              }
            }
          ]
        },
        {
          name: "click",
          callback: ({ data: { name: l, value: m } }) => {
            h(`您点击了第 ${e + 1} 行，图表标题为${l}，图表数据为：${m}`, {
              type: "success"
            });
          }
        }
      );
    }),
    { columns: t, dataList: a }
  );
}
export { D as useColumns };
