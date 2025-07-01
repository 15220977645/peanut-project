import A from "./centerData-BvzeiYpv.js";
import {
  d as T,
  r as f,
  f as w,
  c as l,
  a as o,
  F as S,
  k as d,
  b as O,
  bv as v,
  o as r,
  y as U,
  t as s,
  i as L,
  _ as I
} from "./index-DuV_pBtV.js";
import "./commonFun-DCImwsLl.js";
const K = { class: "statistical-data" },
  x = { class: "tabs" },
  D = ["onClick"],
  $ = { class: "content" },
  B = { class: "charge-total-count" },
  R = ["title", "onClick"],
  J = { class: "title-unit" },
  E = { class: "unit" },
  F = { class: "num" },
  V = T({
    __name: "statisticalData",
    setup(Y) {
      const p = v("openPlatform"),
        n = f(0);
      let u;
      const y = [
          {
            title: "年度总营收",
            key: "chargeOrderIncome",
            num: "0.00",
            unit: "元",
            platformTitle: "收入情况分析",
            platformUrl:
              "/StatisticalAnalysisReport/incomeSituationAnalysis?date=nowYear"
          },
          {
            title: "年度总充电量",
            key: "chargeTotalBattery",
            num: 0,
            unit: "度",
            platformTitle: "收入情况分析",
            platformUrl:
              "/StatisticalAnalysisReport/incomeSituationAnalysis?date=nowYear",
            slot: !0
          },
          {
            title: "年度总订单数",
            key: "chargeServiceCount",
            num: 0,
            unit: "次",
            platformTitle: "收入情况分析",
            platformUrl:
              "/StatisticalAnalysisReport/incomeSituationAnalysis?date=nowYear",
            show: !1
          },
          {
            title: "年度平均利用率",
            key: "powerRate",
            num: 0,
            unit: "%",
            platformTitle: "充电站利用率分析",
            platformUrl:
              "/StatisticalAnalysisReport/stationUtilizationAnalysis?date=nowYear"
          },
          {
            title: "总用户数",
            key: "memberCount",
            num: 0,
            unit: "个",
            platformTitle: "会员信息",
            platformUrl: "/tenantMember/index"
          },
          {
            title: "服务区对数",
            key: "serviceAreaSummary",
            num: 0,
            unit: "对",
            platformTitle: "服务区管理",
            platformUrl: "/RoadLineManagement/serviceAreaManage",
            singleNumKey: "singleServiceAreaSummary",
            singleNum: "0",
            singleNumShow: !0
          },
          {
            title: "电站总数",
            key: "stationCount",
            num: 0,
            unit: "座",
            platformTitle: "站场资产统计",
            platformUrl:
              "/StatisticalAnalysis/stationAssetsStatEvChargeIndex?operateState=1&deviceOperateState=1",
            offlineNumKey: "offLineStationCount",
            offlineNumShow: !0,
            offlineNum: "0",
            encryptionStationKey: "countCryptoStation",
            encryptionStationShow: !1,
            encryptionStationNum: "0"
          },
          {
            title: "总桩数",
            key: "deviceCount",
            num: 0,
            unit: "台",
            platformTitle: "站场资产统计",
            platformUrl:
              "/StatisticalAnalysis/stationAssetsStatEvChargeIndex?operateState=1&deviceOperateState=1",
            offlineNumKey: "offLineDeviceCount",
            offlineNumShow: !0,
            offlineNum: "0"
          },
          {
            title: "总枪数",
            key: "interfaceCount",
            num: 0,
            unit: "把",
            platformTitle: "站场资产统计",
            platformUrl:
              "/StatisticalAnalysis/stationAssetsStatEvChargeIndex?operateState=1&deviceOperateState=1",
            offlineNumKey: "offLineInterfaceCount",
            offlineNumShow: !0,
            offlineNum: "0"
          }
        ],
        i = f(JSON.parse(JSON.stringify(y))),
        h = f([
          { label: "全部", value: 0 },
          { label: "线上", value: 1 },
          { label: "线下", value: 2 }
        ]),
        N = v("changeOtherData");
      function C(a) {
        const e = a.platformUrl.includes("?")
          ? `${a.platformUrl}&stationChannelType=${n.value}`
          : `${a.platformUrl}?stationChannelType=${n.value}`;
        p && a.platformUrl && p(!0, e);
      }
      async function g() {
        await c(), (u = setInterval(c, 1e3 * 60));
      }
      const _ = a => {
        const e = JSON.parse(JSON.stringify(a));
        return (
          Number(e.num) > 1e8 && !e.unit.includes("亿")
            ? ((e.num = Number(
                (Number(e.num) / 1e8).toFixed(2)
              ).toLocaleString()),
              (e.unit = `亿${e.unit}`))
            : Number(e.num) > 1e4 &&
              !e.unit.includes("万") &&
              ((e.num = Number(
                (Number(e.num) / 1e4).toFixed(2)
              ).toLocaleString()),
              (e.unit = `万${e.unit}`)),
          e
        );
      };
      async function c() {
        const a = {
          memberCount: 682186,
          memberNewCount: 527737,
          stationCount: 269,
          parkinglotCount: 628,
          deviceCount: 714,
          interfaceCount: 1398,
          offLineStationCount: 23,
          offLineDeviceCount: 84,
          offLineInterfaceCount: 148,
          chargeOrderIncome: 49884523450,
          chargeTotalBattery: 31571535004,
          chargeOrderCount: 1348328,
          chargeServiceCount: 1440090,
          serviceAreaSummary: 123,
          singleServiceAreaSummary: 1,
          countCryptoStation: 34,
          powerRate: 11.88
        };
        if (a) {
          (i.value = JSON.parse(JSON.stringify(y))),
            (a.chargeOrderIncome /= 1e3),
            (a.chargeTotalBattery /= 1e3);
          for (const e in i.value) {
            const t = i.value[e];
            (t.num = a[t.key] || 0),
              t.singleNumKey && (t.singleNum = a[t.singleNumKey] || 0),
              t.encryptionStationKey &&
                ((t.encryptionStationShow = n.value === 1),
                (t.encryptionStationNum = a[t.encryptionStationKey] || 0),
                N("countCryptoStation", t.encryptionStationNum)),
              t.offlineNumKey &&
                ((t.offlineNumShow = n.value === 0),
                (t.offlineNum = a[t.offlineNumKey] || 0)),
              Number(e) <= 5 && (i.value[e] = _(i.value[e]));
          }
        }
      }
      function b(a) {
        (n.value = a), c();
      }
      return (
        w(() => {
          clearInterval(u), (u = void 0);
        }),
        g(),
        (a, e) => (
          r(),
          l("div", K, [
            o("div", x, [
              (r(!0),
              l(
                S,
                null,
                d(
                  h.value,
                  (t, m) => (
                    r(),
                    l(
                      "div",
                      {
                        key: m,
                        class: U([
                          "tab",
                          { "active-tab": t.value === n.value }
                        ]),
                        onClick: k => b(t.value)
                      },
                      s(t.label),
                      11,
                      D
                    )
                  )
                ),
                128
              ))
            ]),
            o("div", $, [
              o("div", B, [
                (r(!0),
                l(
                  S,
                  null,
                  d(
                    i.value.slice(0, 3),
                    (t, m) => (
                      r(),
                      l(
                        "div",
                        {
                          key: m,
                          title: `跳转至${t.platformTitle}`,
                          onClick: k => C(t)
                        },
                        [
                          o("div", J, [
                            L(s(t.title) + " ", 1),
                            o("span", E, "（" + s(t.unit) + "）", 1)
                          ]),
                          o("div", F, s(t.num), 1)
                        ],
                        8,
                        R
                      )
                    )
                  ),
                  128
                ))
              ]),
              O(
                A,
                {
                  list: i.value.slice(3),
                  "item-number": 3,
                  "station-channel-type": n.value
                },
                null,
                8,
                ["list", "station-channel-type"]
              )
            ])
          ])
        )
      );
    }
  }),
  q = I(V, [["__scopeId", "data-v-1dc816cf"]]);
export { q as default };
