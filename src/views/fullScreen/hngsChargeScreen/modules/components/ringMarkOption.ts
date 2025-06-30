import * as echarts from "echarts";

/* 输出适配宽度 */
function getWidth(width: number) {
  return document.body.clientWidth * (width / 1920);
}

/* 输出适配高度 */
function getHeight(height: number) {
  return document.body.clientHeight * (height / 1080);
}

/* 返回option */
// eslint-disable-next-line max-params
function getOption(
  data: number,
  labelText: string,
  noShowCenterLabel: boolean = true,
  numSize = 18,
  labelSize = 12
) {
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
            value: data,
            label: {
              show: true,
              position: "center",
              color: "#031114",
              fontSize: getWidth(38),
              fontWeight: "bold",
              formatter() {
                if (noShowCenterLabel) return `{a|${data}}{b|%}`;
                return `{a|${data}}{b|%}\n{c|${labelText}}`;
              },
              rich: {
                a: {
                  color: "#3a6cff",
                  fontSize: getWidth(numSize)
                },
                b: {
                  color: "#3a6cff",
                  fontSize: getWidth(labelSize)
                },
                c: {
                  fontSize: getWidth(labelSize),
                  padding: [getHeight(4), 0, 0, 0]
                }
              }
            },
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: "#fbb11f"
                },
                {
                  offset: 0.5,
                  color: "#f2ba2c"
                },
                {
                  offset: 1,
                  color: "#fbb11f"
                }
              ]),
              borderRadius: getWidth(8)
            }
          },
          {
            // 画中间的图标
            name: "",
            value: 0,
            label: {
              position: "inside",
              formatter: "{a|●}", // 使用rich样式
              rich: {
                a: {
                  // 定义圆形标记的样式
                  color: "#fff",
                  fontSize: getWidth(15)
                }
              }
            }
          },
          {
            // 画剩余的刻度圆环
            name: "",
            value: 100 - data,
            label: {
              show: false
            }
          }
        ],
        emphasis: {
          scale: 1
        }
      }
    ]
  };
}
export default getOption;
