import * as echarts from "echarts";
import { requireImg } from "@/utils/requireImg";

/* 输出适配宽度 */
function getWidth(width: number) {
  return document.body.clientWidth * (width / 1920);
}
function getHeight(height: number) {
  return document.body.clientWidth * (height / 1920);
}
function getOptions(data: any) {
  const xData: string[] = [];
  const yData: number[] = [];
  const maxYData: number[] = [];
  // eslint-disable-next-line array-callback-return
  data?.map((item: any) => {
    xData.push(item.name);
    yData.push(item.value);
  });
  const maxNum = Math.max(...yData);
  yData.forEach(() => {
    maxYData.push(Math.round(maxNum / 10 + 1) * 10);
  });
  return {
    tooltip: {
      trigger: "axis",
      formatter: (params: any) => {
        return `<div style="padding: ${getWidth(5)}px ${getHeight(
          10
        )}px; background-color: #303133; border-radius: ${getWidth(
          5
        )}px;">时段：${params[0].name}<br>订单次数：${params[1].value}</div>`;
      },
      padding: 0,
      textStyle: {
        color: "#fff"
      },
      borderColor: "#303133",
      shallow: true
    },
    grid: {
      left: "2%",
      right: "2%",
      bottom: "2%",
      top: "5%",
      containLabel: true
    },
    xAxis: {
      type: "category",
      data: xData,
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: "#031114"
        }
      },
      axisLabel: {
        show: true,
        color: "#031114",
        fontSize: getWidth(10)
      }
    },
    yAxis: {
      type: "value",
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      min: 0,
      max: maxYData[0],
      axisLabel: {
        color: "#031114",
        fontSize: getWidth(10)
      }
    },
    series: [
      {
        name: "背景",
        type: "bar",
        barWidth: "50%",
        xAxisIndex: 0,
        yAxisIndex: 0,
        yAxis: {
          axisLine: {
            show: false
          }
        },
        data: maxYData,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(29, 99, 185, 0.3)"
            },
            {
              offset: 0.3,
              color: "rgba(29, 99, 185, 0.1)"
            },
            {
              offset: 1,
              color: "rgba(29, 99, 185, 0.01)"
            }
          ])
        }
      },
      {
        type: "line",
        data: yData,
        symbolSize: getWidth(18),
        symbol: `image://${requireImg(
          "fullScreen/hngsChargeScreen/order-line-icon.svg"
        )}`,
        itemStyle: {
          color: "#3A6CFF",
          barBorderRadius: 0,
          label: {
            show: false
          },
          lineStyle: {
            color: "#3A6CFF",
            width: getWidth(1)
          }
        },
        zlevel: 1
      }
    ]
  };
}

export default getOptions;
