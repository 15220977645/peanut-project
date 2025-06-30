const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("/") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};
const formatDayTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return [year, month, day].map(formatNumber).join("-");
};
const getNowDate = function () {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [year, month, day].map(formatNumber).join("-");
};
// 返回日期格式为yyyy年MM月dd
const formatYMD = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return year + "年" + formatNumber(month) + "月" + formatNumber(day) + "日";
};
// 返回日期格式为yyyy-MM-dd
const formatYMDline = time => {
  if (!time) {
    return null;
  }
  var date = new Date(time);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  if (m < 10) {
    m = "0" + m;
  }
  if (d < 10) {
    d = "0" + d;
  }
  var t = y + "-" + m + "-" + d;
  return t;
};
// 返回日期格式为yyyy年MM月
const formatYM = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return year + "年" + formatNumber(month) + "月";
};
// 返回日期格式为MM-dd
const formatMD = date => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return [month, day].map(formatNumber).join("-");
};
const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};
// 返回日期格式为yyyy年MM月dd 2021.06.03 星期四
const formatMoreTime = date => {
  const myDate = date;
  const wk = myDate.getDay();
  const yy = String(myDate.getFullYear());
  const getMonth = myDate.getMonth() + 1;
  const mm = String(getMonth < 10 ? "0" + getMonth : getMonth);
  const dd = String(
    myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()
  );
  const hou = String(
    myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()
  );
  const min = String(
    myDate.getMinutes() < 10 ? "0" + myDate.getMinutes() : myDate.getMinutes()
  );
  // let sec = String(myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds())
  const weeks = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  ];
  const week = weeks[wk];
  let apm = "AM";
  if (myDate.getHours() > 11) {
    apm = "PM";
  }
  const dateArr = {
    year: yy,
    month: mm,
    day: dd,
    hour: hou,
    minute: min,
    week: week,
    apm: apm
  };
  return dateArr;
};
export default {
  formatTime,
  formatDayTime,
  getNowDate,
  formatYMD,
  formatYM,
  formatMD,
  formatMoreTime,
  formatYMDline
};
