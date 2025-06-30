<template>
  <div class="tms-screen-container">
    <div class="left">
      <div class="tip-data">
        <div v-for="(item, i) in tipsDate" :key="i" class="item-tip">
          <img src="/src/assets/fullScreen/megoFood/tms/up-icon.png" alt="" />
          <div class="tip">
            <div class="tip-label">{{ item.label }}</div>
            <div class="tip-value">{{ item.value }}</div>
          </div>
        </div>
      </div>
      <LogisticsSignage :list="tmsScreenData.orders" class="signage" />
    </div>
    <div class="middle">
      <Map class="map" :colorList="colorList" :lineList="lineList" />
      <WarnInfo class="warn-info" />
    </div>
    <div class="right">
      <DeliveryOverview :data="tmsScreenData" class="overview" />
      <LogisticsFacts class="facts" />
    </div>
  </div>
</template>

<script setup lang="ts">
import LogisticsSignage from "./components/logisticsSignage.vue";
import Map from "../map.vue";
import WarnInfo from "./components/warnInfo.vue";
import DeliveryOverview from "./components/deliveryOverview.vue";
import LogisticsFacts from "./components/logisticsFacts.vue";

const tipsDate = ref([
  { label: "今日配送点", value: 0 },
  { label: "今日预警总数", value: 0 }
]);
const colorList = ref(["#FB497C", "#FFC760", "#6FE621", "#4FCCFF", "#8B77FF"]);
const lineList = ref(<any>[]);
const tmsScreenData = <any>ref({
  orders: [],
  whGroup: {},
  customerGroup: {}
});

/* 初始化 */
function init() {
  getTMSScreenData();
}

/* 获取大屏数据 */
function getTMSScreenData() {
  tmsScreenData.value = [];
  tipsDate.value[0].value = 50;
  tipsDate.value[1].value = 30;
  tmsScreenData.warnMessages = [
    { unitName: "", trackingNumber: "", cusName: "", carNo: "", driverName: "" }
  ];
  // handleLineData();
}

/* 重构地图数据，生成线路数据 */
// function handleLineData() {
//   const lineData = <any>[];
//   const newData = { whGroup: <any>[], customerGroup: <any>[] };
//   const lonLatKey = {
//     whGroupKeys: Object.keys(tmsScreenData.value.whGroup),
//     customerGroupKeys: Object.keys(tmsScreenData.value.customerGroup)
//   };
//   // 拍平数组，把经纬度key转化为属性值
//   const handleLonLat = type => {
//     lonLatKey[`${type}Keys`].forEach(key => {
//       if (key && key.split(",")[0] && key.split(",")[1]) {
//         tmsScreenData.value[type][key].forEach(tarPoint => {
//           const nameKey = type === "whGroup" ? "whName" : "cusName";
//           tarPoint.name = tarPoint[nameKey];
//           newData[type].push({
//             ...tarPoint,
//             lon: key.split(",")[0],
//             lat: key.split(",")[1]
//           });
//         });
//       }
//     });
//   };
//   handleLonLat("whGroup");
//   handleLonLat("customerGroup");
//   // 划分线路，添加线路点
//   newData.whGroup.forEach(whP => {
//     lineData.push({ lineName: "", points: [whP] });
//     const lineCusPoints = newData.customerGroup.filter(
//       cusP => cusP.trackingNumber === whP.trackingNumber
//     );
//     lineData[lineData.length - 1].points.push(...lineCusPoints);
//   });
//   // 根据线路点，拼凑线路名称
//   lineData.forEach(line => {
//     line.lineName = `${line.points[0].name}~${
//       line.points[line.points.length - 1].name
//     }`;
//     if (!lineList.value.find(item => item.lineName === line.lineName)) {
//       lineList.value.push(line);
//     }
//   });
// }

init();
</script>
<style lang="scss" scoped>
:deep {
  .module-head {
    margin-top: 24px;
    margin-bottom: 0.625vw;
    font-size: 1.0417vw;
    font-weight: 600;
    color: #d4eaff;
  }

  .left,
  .middle,
  .right {
    height: 100%;

    & > div:not(.tip-data) {
      display: flex;
      flex-direction: column;
    }
  }

  .empty-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 0.8333vw;

    img {
      margin-bottom: 0.775vh;
    }
  }

  .overview {
    & > div {
      width: 100% !important;
    }
  }
}

.tms-screen-container {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  color: #84a5c4;

  & > div {
    display: flex;
    flex-direction: column;
  }

  .left,
  .right {
    width: 25%;
  }

  .left {
    .tip-data {
      display: flex;
      flex-wrap: nowrap;

      .item-tip {
        display: flex;
        flex-wrap: nowrap;
        width: 50%;

        img {
          width: 1.1458vw;
          height: 1.0417vw;
          margin-right: 0.5208vw;
        }

        .tip-label {
          font-size: 0.7292vw;
        }

        .tip-value {
          font-size: 1.8229vw;
          color: #afe0fe;
        }
      }
    }

    .signage {
      height: calc(100% - 3.8542vw);
    }
  }

  .middle {
    width: 48%;
    padding-left: 2.0833vw;

    .map {
      flex: 1;
      height: 100%;
    }

    .warn-info {
      height: 33.33%;
    }
  }

  .right {
    width: 27%;
    padding-left: 1.0417rem;

    .overview {
      // height: fit-content;
      height: 33.33%;
    }

    .facts {
      flex: 1;
      height: 100%;
    }
  }
}
</style>
