import {
  c as m,
  o as g,
  a,
  d as W,
  r as n,
  S as c,
  z as v,
  L as X,
  e as ee,
  f as te,
  b as F,
  y as _,
  i as ae,
  t as I,
  w as T,
  h as ne,
  F as oe,
  k as re,
  _ as le
} from "./index-DuV_pBtV.js";
import { l as se } from "./bilateralUtilizeTable-DK7oy66X.js";
import ce from "./screenHome-B9KVy1ei.js";
import "./title-NWaZqRRA.js";
import "./emptyContent-CDhEcD04.js";
import "./manageData-BtB8pRUT.js";
import "./commonFun-DCImwsLl.js";
import "./requireImg-CLyBMj04.js";
import "./chargingTop-DMWcaF0m.js";
import "./rankingList-B0P_MpeH.js";
import "./equipment-Bny4r0uo.js";
import "./index-TK4OleqK.js";
import "./echarts-BHMfc19f.js";
import "./statisticalData-qaD0lPx1.js";
import "./centerData-BvzeiYpv.js";
import "./order-CDaEq6U5.js";
import "./map-Rz2kx_B1.js";
import "./china-CjaCo810.js";
const ie = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "200",
  height: "200",
  class: "icon",
  viewBox: "0 0 1024 1024"
};
function ue(V, p) {
  return (
    g(),
    m(
      "svg",
      ie,
      p[0] ||
        (p[0] = [
          a(
            "path",
            {
              fill: "#fff",
              stroke: "currentColor",
              d: "M571.013 523.776 882.36 212.424c15.719-15.714 15.719-41.626 0-57.344l-1.694-1.7c-15.719-15.713-41.626-15.713-57.35 0L511.97 465.157 200.617 153.38c-15.718-15.713-41.63-15.713-57.344 0l-1.7 1.7a40.013 40.013 0 0 0 0 57.344l311.352 311.352-311.352 311.357c-15.713 15.714-15.713 41.631 0 57.34l1.7 1.7c15.713 15.718 41.626 15.718 57.344 0L511.969 582.82l311.347 311.352c15.724 15.719 41.631 15.719 57.35 0l1.694-1.7c15.719-15.708 15.719-41.625 0-57.339z"
            },
            null,
            -1
          )
        ])
    )
  );
}
const de = { render: ue },
  me = { class: "head bg-img" },
  ge = ["title"],
  he = { class: "time" },
  fe = { class: "bold-time" },
  ve = { class: "bottom" },
  pe = { class: "light-font" },
  ye = { class: "platform-head" },
  we = ["title"],
  Se = ["src"],
  _e = { class: "platform-content" },
  Ie = ["src"],
  Ce = ["id"],
  ke = { key: 0, class: "monitor-box" },
  Fe = ["src"],
  Te = { key: 1, class: "data-none" },
  Be = W({
    __name: "index",
    setup(V) {
      const p = n(),
        r = n(),
        C = n(!1),
        B = n(""),
        R = n(""),
        b = n(""),
        E = n("实时充电地图"),
        h = n(0),
        q = n(!1),
        i = n({ redStation: [], yellowStation: [], blueStation: [] }),
        N = n([]),
        x = n([]),
        D = n({}),
        y = n(!1),
        w = n(!1),
        L = n(""),
        k = n(!1),
        u = n(!1),
        d = [void 0, void 0],
        M = n({}),
        S = n([]);
      c(
        "pointData",
        v(() => i.value)
      ),
        c(
          "roadList",
          v(() => N.value)
        ),
        c(
          "stationList",
          v(() => x.value)
        ),
        c(
          "realDate",
          v(() => D.value)
        ),
        c(
          "otherData",
          v(() => M.value)
        ),
        c("changeOtherData", (t, e) => {
          M.value[t] = e;
        }),
        c("openPlatform", j),
        c("openMonitor", G);
      function O() {
        $(),
          setTimeout(() => {
            q.value = !0;
          }, 1e3),
          H(),
          K(),
          z(),
          P(),
          (d[0] = setInterval(z, 1e3 * 60)),
          (d[1] = setInterval(P, 1e3 * 60));
      }
      function P() {
        const t = se;
        t &&
          ((i.value.redStation = []),
          (i.value.yellowStation = []),
          (i.value.blueStation = []),
          t.forEach(e => {
            if (![null, void 0].includes(e.interfaceUseRate)) {
              const o = {
                ...e,
                lon: e.addressLng,
                lat: e.addressLat,
                stationName: e.name
              };
              e.interfaceUseRate === 100
                ? i.value.redStation.push(o)
                : e.interfaceUseRate <= 50
                ? i.value.blueStation.push(o)
                : i.value.yellowStation.push(o);
            }
          }));
      }
      function H() {
        const t = [
          {
            chargeBattery: 0,
            chargeIncome: 0,
            chargeInterfaceCount: 20592,
            chargeServiceCount: 355266,
            chargeTotalBattery: 7268263110,
            chargeTotalPower: 1235520,
            day: 234,
            params: {},
            powerRate: 24.51,
            ranking: 1,
            rising: 0,
            roadId: 83,
            roadName: "武深高速",
            totalMoney: 11425530960
          },
          {
            chargeBattery: 0,
            chargeIncome: 0,
            chargeInterfaceCount: 1248,
            chargeServiceCount: 19758,
            chargeTotalBattery: 394347072,
            chargeTotalPower: 74880,
            day: 78,
            params: {},
            powerRate: 21.94,
            ranking: 2,
            rising: 4,
            roadId: 89,
            roadName: "张花高速",
            totalMoney: 618819600
          },
          {
            chargeBattery: 0,
            chargeIncome: 0,
            chargeInterfaceCount: 9464,
            chargeServiceCount: 134148,
            chargeTotalBattery: 2978848054,
            chargeTotalPower: 567840,
            day: 182,
            params: {},
            powerRate: 21.86,
            ranking: 3,
            rising: -1,
            roadId: 85,
            roadName: "泉南高速",
            totalMoney: 4666890900
          },
          {
            chargeBattery: 0,
            chargeIncome: 0,
            chargeInterfaceCount: 4160,
            chargeServiceCount: 91336,
            chargeTotalBattery: 1593774432,
            chargeTotalPower: 324480,
            day: 104,
            params: {},
            powerRate: 20.47,
            ranking: 4,
            rising: -1,
            roadId: 73,
            roadName: "长张高速",
            totalMoney: 2528498240
          },
          {
            chargeBattery: 0,
            chargeIncome: 0,
            chargeInterfaceCount: 3120,
            chargeServiceCount: 46e3,
            chargeTotalBattery: 916898920,
            chargeTotalPower: 187200,
            day: 130,
            params: {},
            powerRate: 20.41,
            ranking: 5,
            rising: 0,
            roadId: 94,
            roadName: "平洞高速",
            totalMoney: 1461138800
          },
          {
            chargeBattery: 0,
            chargeIncome: 0,
            chargeInterfaceCount: 11648,
            chargeServiceCount: 142982,
            chargeTotalBattery: 3149002360,
            chargeTotalPower: 698880,
            day: 182,
            params: {},
            powerRate: 18.77,
            ranking: 6,
            rising: 2,
            roadId: 82,
            roadName: "杭瑞高速",
            totalMoney: 4945236660
          },
          {
            chargeBattery: 0,
            chargeIncome: 0,
            chargeInterfaceCount: 5824,
            chargeServiceCount: 67130,
            chargeTotalBattery: 1503732230,
            chargeTotalPower: 349440,
            day: 182,
            params: {},
            powerRate: 17.93,
            ranking: 7,
            rising: 6,
            roadId: 88,
            roadName: "龙吉高速",
            totalMoney: 2369342920
          },
          {
            chargeBattery: 0,
            chargeIncome: 0,
            chargeInterfaceCount: 7488,
            chargeServiceCount: 84456,
            chargeTotalBattery: 1900021320,
            chargeTotalPower: 449280,
            day: 156,
            params: {},
            powerRate: 17.62,
            ranking: 8,
            rising: 2,
            roadId: 71,
            roadName: "华常高速",
            totalMoney: 3045610920
          },
          {
            chargeBattery: 0,
            chargeIncome: 0,
            chargeInterfaceCount: 28600,
            chargeServiceCount: 397220,
            chargeTotalBattery: 7216480960,
            chargeTotalPower: 1716e3,
            day: 260,
            params: {},
            powerRate: 17.52,
            ranking: 9,
            rising: -5,
            roadId: 72,
            roadName: "沪昆高速",
            totalMoney: 11255036600
          },
          {
            chargeBattery: 0,
            chargeIncome: 0,
            chargeInterfaceCount: 32500,
            chargeServiceCount: 448700,
            chargeTotalBattery: 8190626950,
            chargeTotalPower: 1989e3,
            day: 325,
            params: {},
            powerRate: 17.16,
            ranking: 10,
            rising: -3,
            roadId: 74,
            roadName: "京港澳高速",
            totalMoney: 12781534250
          }
        ];
        N.value =
          t == null
            ? void 0
            : t.map((e, o) => {
                if (o < 10)
                  return {
                    ...e,
                    name: e.roadName,
                    scale: e.powerRate.toFixed(2) || "0.00",
                    ranking: e.rising
                  };
              });
      }
      function K() {
        const t = [
          {
            chargeBattery: 0,
            chargeIncome: 0,
            masterStationId: 82156,
            params: {},
            powerRate: 43.7443,
            ranking: 1,
            rising: 0,
            stationChannelType: 2,
            stationName: "武深-炎陵A-深圳方向"
          },
          {
            chargeBattery: 0,
            chargeIncome: 0,
            masterStationId: 82158,
            params: {},
            powerRate: 40.7704,
            ranking: 2,
            rising: 1,
            stationChannelType: 2,
            stationName: "武深-桂东A-深圳方向"
          },
          {
            chargeBattery: 0,
            chargeIncome: 0,
            masterStationId: 82223,
            params: {},
            powerRate: 39.0243,
            ranking: 3,
            rising: -1,
            stationChannelType: 2,
            stationName: "长张-热市A-张家界方向"
          },
          {
            chargeBattery: 0,
            chargeIncome: 0,
            masterStationId: 82368,
            params: {},
            powerRate: 37.03,
            ranking: 4,
            rising: 2,
            stationChannelType: 2,
            stationName: "张花-茅岩河A-花垣方向"
          },
          {
            chargeBattery: 0,
            chargeIncome: 0,
            masterStationId: 82225,
            params: {},
            powerRate: 35.8151,
            ranking: 5,
            rising: -1,
            stationChannelType: 2,
            stationName: "长张-慈利A-张家界方向"
          },
          {
            chargeBattery: 0,
            chargeIncome: 0,
            masterStationId: 82181,
            params: {},
            powerRate: 34.0781,
            ranking: 6,
            rising: 1,
            stationChannelType: 2,
            stationName: "许广-宜章西A-广州方向"
          },
          {
            chargeBattery: 0,
            chargeIncome: 0,
            masterStationId: 82163,
            params: {},
            powerRate: 32.7922,
            ranking: 7,
            rising: 18,
            stationChannelType: 2,
            stationName: "武深-汝城南A-深圳方向"
          },
          {
            chargeBattery: 0,
            chargeIncome: 0,
            masterStationId: 82256,
            params: {},
            powerRate: 32.011,
            ranking: 8,
            rising: 19,
            stationChannelType: 2,
            stationName: "龙吉-农车B-龙山方向"
          },
          {
            chargeBattery: 0,
            chargeIncome: 0,
            masterStationId: 82171,
            params: {},
            powerRate: 31.6184,
            ranking: 9,
            rising: 5,
            stationChannelType: 2,
            stationName: "许广-岳阳A-广州方向"
          },
          {
            chargeBattery: 0,
            chargeIncome: 0,
            masterStationId: 82209,
            params: {},
            powerRate: 31.0269,
            ranking: 10,
            rising: -2,
            stationChannelType: 2,
            stationName: "杭瑞-沅陵A-瑞丽方向"
          }
        ];
        x.value =
          t == null
            ? void 0
            : t.map(e => ({
                ...e,
                name: e.stationName,
                scale: e.powerRate.toFixed(2) || "0.00"
              }));
      }
      function z() {
        const t = {
          interface_standy_count: 25,
          interface_normal_count: 1379,
          station_debugger_count: 11,
          interface_charging_count: 85,
          interface_offline_count: 11,
          station_normal_count: 303,
          interface_empty_count: 1269,
          interface_trouble_rate: 0.57,
          device_pause_count: 2,
          interface_trouble_count: 8,
          interface_offline_rate: 0.79,
          station_pause_count: 1,
          interface_count: 1398
        };
        D.value = t;
      }
      function s() {
        C.value = !!(
          document.fullscreenElement ||
          document.msFullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement
        );
      }
      document.addEventListener("fullscreenchange", s),
        document.addEventListener("mozfullscreenchange", s),
        document.addEventListener("webkitfullscreenchange", s),
        document.addEventListener("msfullscreenchange", s);
      async function U() {
        C.value
          ? document.exitFullscreen
            ? document.exitFullscreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.webkitCancelFullScreen
            ? document.webkitCancelFullScreen()
            : document.msExitFullscreen && document.msExitFullscreen()
          : ((document.fullScreenElement ||
              document.msFullscreenElement ||
              document.mozFullScreenElement ||
              document.webkitFullscreenElement) &&
              (document.exitFullscreen
                ? await document.exitFullscreen()
                : document.mozCancelFullScreen
                ? await document.mozCancelFullScreen()
                : document.webkitCancelFullScreen
                ? await document.webkitCancelFullScreen()
                : document.msExitFullscreen &&
                  (await document.msExitFullscreen())),
            r.value.requestFullscreen
              ? r.value.requestFullscreen()
              : r.value.mozRequestFullScreen
              ? r.value.mozRequestFullScreen()
              : r.value.webkitRequestFullscreen
              ? r.value.webkitRequestFullscreen()
              : r.value.msRequestFullscreen && r.value.msRequestFullscreen());
      }
      function $() {
        Y(), setTimeout($, 1e3);
      }
      function Y() {
        const t = new Date(),
          e = f => (f > 9 ? f : `0${f}`);
        B.value = `${t.getFullYear()}.${e(t.getMonth() + 1)}.${e(t.getDate())}`;
        const o = ["日", "一", "二", "三", "四", "五", "六"],
          l = t.getDay();
        (R.value = `星期${o[l]}`),
          (b.value = new Date().toTimeString().slice(0, 9));
      }
      function Z(t) {
        if (t.target && t.target.id !== "") {
          h.value = Number(t.target.id);
          const e = [
            "实时充电地图",
            "各电站本月累计利用率",
            "全省电站实时离线情况"
          ];
          E.value = e[h.value];
        }
      }
      function j(t, e) {
        const o = window.location.origin;
        (L.value = `${o}${e}`),
          sessionStorage.setItem("platformUrl", e),
          (y.value = t);
      }
      function G() {
        k.value || ((k.value = !0), (w.value = !0));
      }
      function J() {
        sessionStorage.removeItem("platformUrl"), (u.value = !1);
      }
      function A(t) {
        t.key === "F11" && (t.preventDefault(), U());
      }
      return (
        X(
          w,
          t => {
            t || (k.value = !1);
          },
          { deep: !0, immediate: !0 }
        ),
        ee(() => {
          O(),
            window.addEventListener("keydown", A),
            window.addEventListener("message", t => {
              t.data.data.type;
            });
        }),
        te(() => {
          document.removeEventListener("fullscreenchange", s),
            document.removeEventListener("mozfullscreenchange", s),
            document.removeEventListener("webkitfullscreenchange", s),
            document.removeEventListener("msfullscreenchange", s),
            window.removeEventListener("keydown", A),
            clearInterval(d[0]),
            clearInterval(d[1]),
            (d[0] = void 0),
            (d[1] = void 0);
        }),
        (t, e) => {
          const o = ne("ElDialog");
          return (
            g(),
            m(
              "div",
              {
                id: "fullScreenDom",
                ref_key: "fullScreenDom",
                ref: r,
                class: "screen-container bg-img"
              },
              [
                a("div", me, [
                  a("div", { class: "tab", onClick: Z }, [
                    a(
                      "div",
                      {
                        id: "0",
                        class: _([
                          { active: h.value === 0 },
                          "bg-img light-font"
                        ])
                      },
                      " 首页 ",
                      2
                    ),
                    a(
                      "div",
                      {
                        id: "1",
                        class: _([
                          { active: h.value === 1 },
                          "bg-img light-font"
                        ])
                      },
                      " 运营专区 ",
                      2
                    ),
                    a(
                      "div",
                      {
                        id: "2",
                        class: _([
                          { active: h.value === 2 },
                          "bg-img light-font"
                        ])
                      },
                      " 运维专区 ",
                      2
                    )
                  ]),
                  a(
                    "div",
                    {
                      class: "title light-font",
                      title: C.value
                        ? "点击退出全屏"
                        : "若展示不理想，可点击切换全屏展示",
                      onClick: U
                    },
                    " 湖南高速新能源充电数据大屏 ",
                    8,
                    ge
                  ),
                  a("div", he, [
                    ae(I(B.value) + " ", 1),
                    a("span", null, I(R.value), 1),
                    a("span", fe, I(b.value), 1)
                  ])
                ]),
                a(
                  "div",
                  { ref_key: "content", ref: p, class: "content" },
                  [F(ce)],
                  512
                ),
                a("div", ve, [a("span", pe, I(E.value), 1)]),
                F(
                  o,
                  {
                    modelValue: y.value,
                    "onUpdate:modelValue": e[2] || (e[2] = l => (y.value = l)),
                    "append-to": r.value,
                    "show-close": !1,
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    class: _([
                      { "full-screen-dialog": u.value },
                      "screen-dialog platform-dialog"
                    ]),
                    width: "80vw",
                    top: "2vh",
                    "destroy-on-close": "",
                    onClose: J
                  },
                  {
                    header: T(() => [
                      a("div", ye, [
                        a(
                          "div",
                          {
                            title: u.value ? "退出全屏" : "全屏",
                            onClick: e[0] || (e[0] = l => (u.value = !u.value))
                          },
                          [
                            a(
                              "img",
                              {
                                src: u.value
                                  ? "@/assets/fullScreen/hngsChargeScreen/exit-fullscreen.svg"
                                  : "@/assets/fullScreen/hngsChargeScreen/fullscreen.svg",
                                class: "fullscreen-icon"
                              },
                              null,
                              8,
                              Se
                            )
                          ],
                          8,
                          we
                        ),
                        a(
                          "div",
                          {
                            title: "关闭",
                            onClick: e[1] || (e[1] = l => (y.value = !1))
                          },
                          e[4] ||
                            (e[4] = [
                              a(
                                "img",
                                { src: de, class: "close-icon" },
                                null,
                                -1
                              )
                            ])
                        )
                      ])
                    ]),
                    default: T(() => [
                      a("div", _e, [a("iframe", { src: L.value }, null, 8, Ie)])
                    ]),
                    _: 1
                  },
                  8,
                  ["modelValue", "append-to", "class"]
                ),
                F(
                  o,
                  {
                    modelValue: w.value,
                    "onUpdate:modelValue": e[3] || (e[3] = l => (w.value = l)),
                    width: "67vw",
                    top: "5vh",
                    "append-to": r.value,
                    "destroy-on-close": "",
                    "close-on-click-modal": !1,
                    "close-on-press-escape": !1,
                    class: "screen-dialog"
                  },
                  {
                    header: T(({ titleId: l }) => [
                      a("h4", { id: l, class: "title" }, "查看监控", 8, Ce),
                      S.value != null && S.value != null && S.value.length > 0
                        ? (g(),
                          m("div", ke, [
                            (g(!0),
                            m(
                              oe,
                              null,
                              re(
                                S.value,
                                (f, Q) => (
                                  g(),
                                  m(
                                    "iframe",
                                    {
                                      key: Q,
                                      class: "monitor-iframe",
                                      src: f,
                                      allowfullscreen: ""
                                    },
                                    null,
                                    8,
                                    Fe
                                  )
                                )
                              ),
                              128
                            ))
                          ]))
                        : (g(), m("div", Te, "暂无监控视频"))
                    ]),
                    _: 1
                  },
                  8,
                  ["modelValue", "append-to"]
                )
              ],
              512
            )
          );
        }
      );
    }
  }),
  Ye = le(Be, [["__scopeId", "data-v-4c82cd8c"]]);
export { Ye as default };
