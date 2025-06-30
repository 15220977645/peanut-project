let widthScale = document.body.clientWidth / 1920;
// const heightScale = document.body.clientHeight / 1080;
const lineOption = {
  preventDefaultMouseMove: true,
  grid: {
    left: "13%",
    right: "7%",
    top: "7%",
    bottom: "11%"
  },
  xAxis: {
    type: "time",
    min: new Date("2023-11-11"),
    max: new Date("2023-11-11"),
    splitLine: {
      show: false
    },
    axisLine: {
      onZero: false,
      lineStyle: {
        color: "#142643",
        width: 2 * widthScale
      }
    },
    axisLabel: {
      showMaxLabel: true, //强制显示最后一个数据的刻度
      fontSize: 12 * widthScale,
      color: "#4e5f74",
      formatter: function (params) {
        let date = new Date(params);
        let hour = date.getHours();
        let miu = date.getMinutes();
        return hour + ":" + (miu < 10 ? "0" + miu : miu);
      }
    }
  },
  yAxis: {
    type: "value",
    splitLine: {
      lineStyle: {
        color: "#142643",
        type: "dashed",
        width: 1 * widthScale
      }
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "#142643",
        width: 2 * widthScale
      }
    },
    axisLabel: {
      show: true,
      color: "#4e5f74",
      fontSize: 12 * widthScale,
      formatter: function (params) {
        return `${params}°C`;
      }
    }
  },
  series: [
    {
      name: "Spectrum",
      type: "line",
      showSymbol: false,
      data: [],
      itemStyle: {
        color: "#FD487D",
        label: {
          show: false
        }
      },
      markPoint: {
        symbol: "circle", // 设置标记点的形状为圆形
        data: [
          {
            type: "max", // 标记最大值
            name: "最高点"
          },
          {
            type: "min", // 标记最小值
            name: "最低点"
          }
        ],
        symbolSize: 8 * widthScale, // 设定实心点的大小
        itemStyle: {
          borderColor: "#FD487D",
          borderWidth: 2 * widthScale,
          color: "#03122f"
        },
        label: {
          show: true,
          position: "top",
          color: "#FD487D",
          formatter: function (params) {
            return params.value + "°C";
          }
        }
      },
      lineStyle: {
        //设置线条默认样式
        width: 2 * widthScale
      }
    }
  ]
};
const resizeScale = () => {
  widthScale = document.body.clientWidth / 1920;
  lineOption.xAxis.axisLabel.fontSize = 12 * widthScale;
  lineOption.xAxis.axisLine.lineStyle.width = 2 * widthScale;
  lineOption.yAxis.axisLabel.fontSize = 12 * widthScale;
  lineOption.yAxis.splitLine.lineStyle.width = 1 * widthScale;
  lineOption.yAxis.axisLine.lineStyle.width = 2 * widthScale;
  lineOption.series[0].markPoint.symbolSize = 8 * widthScale;
  lineOption.series[0].markPoint.itemStyle.borderWidth = 2 * widthScale;
  lineOption.series[0].lineStyle.width = 2 * widthScale;
};

export { lineOption, resizeScale };
