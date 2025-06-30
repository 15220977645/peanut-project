import request from "/@/utils/request";

export default {
  /* 获取tms大屏数据 */
  getTMSScreenData(data) {
    return request({
      url: "/food/tempBigScreen/getTableData",
      method: "post",
      data
    });
  },
  /* 获取车辆信息 */
  getCarInfos(data) {
    return request({
      url: "/food/tempBigScreen/getCarInfos",
      method: "post",
      data
    });
  },
  /* 获取车辆温度信息 */
  getTrace(data) {
    return request({
      url: "/food/tempBigScreen/getTrace",
      method: "post",
      data
    });
  }
};
