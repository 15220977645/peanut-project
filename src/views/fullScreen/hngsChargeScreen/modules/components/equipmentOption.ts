/* 输出适配宽度 */
function getWidth(width: number) {
  return document.body.clientWidth * (width / 1920);
}

/* 输出适配高度 */
function getHeight(height: number) {
  return document.body.clientHeight * (height / 1080);
}

const defaultColor = {
  // 水波纹
  liquidFill: [
    {
      offset: 0,
      color: "#7bbaf0"
    },
    {
      offset: 0.5,
      color: "#7295ec"
    },
    {
      offset: 1,
      color: "#5982ec"
    }
  ],
  // 外层实环
  pie: "#5482ff"
};

/* 输出水球option */
function handleOption(
  center: string[],
  obj: { value: number[]; label: string },
  otherParams?: any
) {
  return {
    type: "liquidFill",
    radius: "75%",
    center,
    position: "inside",
    color: [
      {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops:
          otherParams && otherParams.liquidFillColor
            ? otherParams.liquidFillColor
            : defaultColor.liquidFill,
        globalCoord: false
      }
    ],
    data: obj.value, // data个数代表波浪数
    backgroundStyle: {
      borderWidth: getWidth(1),
      color: "RGBA(51, 66, 127, 0)",
      borderColor: {
        colorStops: [
          {
            offset: 0.76,
            color: "#5982ec"
          },
          {
            offset: 0.08,
            color: "#7bbaf0"
          },
          {
            offset: 0.44,
            color: "#7bbaf0"
          }
        ]
      }
    },
    label: {
      fontSize: getHeight(
        otherParams && otherParams.fontSize ? otherParams.fontSize[0] : 24
      ),
      color: "#3a6cff",
      insideColor: "#fff",
      formatter(params: any) {
        const num =
          otherParams && otherParams.toFixed
            ? (params.data * 100).toFixed(otherParams.toFixed)
            : (params.data * 100).toFixed(0);
        return `${num}%\n{b|${obj.label}}`;
      },
      rich: {
        b: {
          // color: '#3a6cff',
          fontSize: getHeight(
            otherParams && otherParams.fontSize ? otherParams.fontSize[1] : 14
          ),
          lineHeight: getHeight(
            otherParams && otherParams.fontSize
              ? otherParams.fontSize[0] + 1
              : 25
          )
        }
      }
    },
    outline: {
      // 轮廓设置
      show: true,
      borderDistance: 0, // 边框与球中间间距
      itemStyle: {
        borderWidth: getWidth(1),
        borderColor: "#08B5F7",
        shadowBlur: getWidth(20),
        shadowColor: "#08B5F7"
      }
    }
  };
}

/* 处理外边距框 */
// eslint-disable-next-line max-params
function handleOutline(
  type: string,
  center: string[],
  rate?: number,
  otherParams?: any
) {
  if (type === "背景") {
    return {
      name: "外层背景",
      type: "pie",
      radius: ["88%", "93%"],
      center,
      data: [
        {
          value: 100,
          itemStyle: {
            color: "rgba(12, 47, 55, 0.2)"
          }
        }
      ],
      labelLine: {
        show: false // 隐藏引线
      }
    };
  }
  return {
    name: "外层实环",
    type: "pie",
    radius: ["88%", "93%"], // 使得细环位于粗环中间
    center,
    emphasis: {
      scale: 0
    },
    label: {
      show: false
    },
    data: [
      {
        value:
          rate === undefined || (rate < 0.01 && rate !== 0) ? 1 : rate * 100,
        itemStyle: {
          color:
            otherParams && otherParams.pieColor
              ? otherParams.pieColor
              : defaultColor.pie
        }
      },
      {
        value: Number(
          (
            100 -
            (rate === undefined || (rate < 0.01 && rate !== 0) ? 1 : rate * 100)
          ).toFixed(0)
        ),
        itemStyle: {
          color: "transparent"
        }
      }
    ]
  };
}

function getOption(
  rates: { value: number[]; label: string }[],
  otherParams?: any
) {
  let series: any[] = [];
  const sizeRate = 50 / rates.length;
  rates.forEach((item: any, i: number) => {
    series = series.concat([
      handleOption([`${sizeRate * (2 * i + 1)}%`, "50%"], item, otherParams),
      handleOutline("背景", [`${sizeRate * (2 * i + 1)}%`, "50%"]),
      handleOutline(
        "实",
        [`${sizeRate * (2 * i + 1)}%`, "50%"],
        item.value[0],
        otherParams
      )
    ]);
  });
  return {
    series
  };
}

export default getOption;
