<template>
  <div class="map-container">
    <div id="map" class="map-block" />
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
interface pointType {
  lon: number; // 经度
  lat: number; // 纬度
  name: string; // 名字
  lineList?: any;
}
const props = defineProps({
  pointList: {
    type: Array as PropType<pointType[]>,
    default: () => []
  },
  lineList: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  colorList: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  defaultColor: {
    type: String,
    default: "#ff5959"
  }
});
let map = <any>undefined;
let driving = <any>undefined;
const markerList = <any>[];
const widthScale = document.body.clientWidth / 1920;
const linePoints = <any>[];

watch(
  () => props.pointList,
  () => {
    initMap();
  },
  { deep: true, immediate: true }
);

watch(
  () => props.lineList,
  () => {
    initMap();
  },
  { deep: true, immediate: true }
);

/* 初始化地图 */
async function initMap() {
  map = await new window.AMap.Map("map", {
    resizeEnable: true,
    zooms: [6, 16], //设置地图级别范围
    zoom: 12, // 放大倍数，最大18
    center: [113.304499, 23.130061], //设置开始的中心经纬度
    mapStyle: "amap://styles/825a853a6afa7cb0ff77a2982b221fd2" // zys地图样式
  });
  if (props.lineList[0]) handleLineList();
  else {
    const pointList = props.pointList.filter(
      item => !!item?.lon && !!item?.lat
    );
    if (!pointList[0]) return;
    pointFactory(pointList);
    map.setCenter([pointList[0].lon, pointList[0].lat]);
  }
}

/* 重绘地图 */
// function resizeMap() {
//   map?.setFitView();
// }

/* 处理线路数据 */
function handleLineList() {
  props.lineList.forEach((line, i) => {
    line.points.forEach(tarP => {
      linePoints.push({
        ...tarP,
        lineName: line.lineName,
        color: props.colorList[i % props.colorList.length]
      });
    });
    drawDrivingRoute(i);
  });
  pointFactory(linePoints);
}

/* 绘制线路 */
function drawDrivingRoute(lineI) {
  // 创建驾车导航实例
  driving = new AMap.Driving({
    // map: map,
    policy: AMap.DrivingPolicy["LEAST_TIME"],
    hideMarkers: true // 隐藏图标
  });
  // 根据起点和终点坐标规划驾车路径
  const tarLine = props.lineList[lineI];
  const start = <any>[]; // 起点坐标
  const end = <any>[]; // 终点坐标
  const waypoints = <any>[];
  tarLine.points.forEach((tarPoint, i) => {
    if (i === 0) start.push(...[tarPoint.lon, tarPoint.lat]);
    else if (i === tarLine.points.length - 1)
      end.push(...[tarPoint.lon, tarPoint.lat]);
    else waypoints.push([tarPoint.lon, tarPoint.lat]);
  });
  driving.search(start, end, { waypoints }, (status, result) => {
    if (status === "complete") drawRoute(result.routes[0], lineI);
    else console.error("获取物流数据失败：" + result);
  });
}

/* 绘制路线 */
function drawRoute(route, colorI) {
  const path = parseRouteToPath(route);
  const routeLine = new AMap.Polyline({
    path: path,
    isOutline: false,
    strokeWeight: 3 * widthScale,
    strokeOpacity: 0.9,
    strokeColor: props.colorList[colorI % props.colorList.length],
    lineJoin: "round",
    strokeStyle: "dashed"
  });
  map.add(routeLine);
  // 调整视野达到最佳显示区域
  map.setFitView([routeLine]);
}

/* 解析路径 */
function parseRouteToPath(route) {
  const path = <any>[];
  for (let i = 0, l = route.steps.length; i < l; i++) {
    const step = route.steps[i];
    for (let j = 0, n = step.path.length; j < n; j++) {
      path.push(step.path[j]);
    }
  }
  return path;
}

/* 遍历生成点坐标与点坐标文本 */
function pointFactory(list) {
  list.forEach((item, i) => {
    let markerName = <any>i;
    markerName = new AMap.Marker({
      position: [item.lon, item.lat], // 根据经纬度定位
      content: setMarkerContent(item), //设置点标记图标
      extData: { id: i }
    });
    markerName.on("mouseover", showMarkerText);
    markerName.on("click", showMarkerText);
    markerName.on("mouseout", closeMarkerText);
    markerList.push(markerName);
    map.add(markerList);
  });
}

/* 点标记滑入/点击事件 */
function showMarkerText(e) {
  let pointIndex = e.target.getExtData().id;
  markerList[pointIndex].setLabel({
    content: setMarkerText(pointIndex), //设置文本标注内容
    direction: "top", //设置文本标注方位
    offset: new AMap.Pixel(25, 0)
  });
  markerList[pointIndex].setTop(true);
}

/* 点标记滑出事件 */
function closeMarkerText(e) {
  let pointIndex = e.target.getExtData().id;
  markerList[pointIndex].setLabel({
    content: ""
  });
  markerList[pointIndex].setTop(true);
}

/* 自定义点标记图标 */
function setMarkerContent(obj) {
  let spanColor = props.defaultColor;
  if (obj.color) spanColor = obj.color;
  let markerContent = `
	<div class="icon-box">
		<span style="--i:1; background-color: ${spanColor};"></span>
		<span style="--i:2; background-color: ${spanColor};"></span>
		<span style="--i:4; background-color: ${spanColor};"></span>
	</div>
		`;
  return markerContent;
}

/* 设置点标记文本 */
function setMarkerText(i) {
  const tarPoint = linePoints[0] ? linePoints[i] : props.pointList[i];
  const labelDom = linePoints[0]
    ? `<div class="label">线路名称：${tarPoint.lineName}</div>`
    : ``;
  let markerTitle = `
    <div class="info-block">
			<div class="name">${tarPoint.name}</div>
			${labelDom}
    </div>
    `;
  return markerTitle;
}

onMounted(() => {
  window.addEventListener("resize", () => {
    initMap();
  });
  initMap();
});
</script>

<style lang="scss" scoped>
:deep {
  @keyframes wave {
    0% {
      width: 0.2604vw;
      height: 0.2604vw;
      opacity: 0.7;
    }

    50% {
      width: 1.0417vw;
      height: 1.0417vw;
      opacity: 0.5;
    }

    100% {
      width: 1.6667vw;
      height: 1.6667vw;
      opacity: 0.3;
    }
  }

  .amap-layers {
    background-color: rgb(0 0 0);
  }

  .amap-logo,
  .amap-copyright {
    display: none;
    opacity: 0;
  }

  .amap-marker,
  .amap-marker-content {
    height: 1.6667vw;
  }

  .amap-marker-label {
    left: 50% !important;
    padding: 0.625vw 0.7292vw;
    font-size: 0.7292vw;
    color: #f7b92a;
    background: rgb(10 31 93 / 90%);
    border: none;
    border-radius: 0.2604vw;
    box-shadow: inset 0 0 0.7813vw 0.1042vw rgb(0 203 255 / 50%);
    transform: translate(-50%, -10%);
  }

  .amap-marker-content {
    .icon-box {
      position: absolute;
      top: 0;
      left: 0;
      height: inherit;

      span {
        /* 居中 */
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: wave 3.5s calc(1s * var(--i)) infinite;
      }
    }
  }

  .info-block .label {
    margin-top: 0.2604vw;
    font-size: 0.625vw;
  }
}

.map-block {
  position: relative;
  height: 100%;

  &::before {
    position: absolute;
    inset: -0.1042vw;
    z-index: 1;
    pointer-events: none;
    content: "";
    box-shadow: 0 0 8rem 5rem #03132f inset, 0 0 1rem 1rem #03132f inset;
  }
}
</style>
