import {
  _ as D,
  r as i,
  B as L,
  L as P,
  e as F,
  l as O,
  j as C,
  u as p,
  c as T,
  o as W,
  a as g,
  i as j,
  A as x,
  bS as S,
  bQ as q,
  n as G
} from "./index-DuV_pBtV.js";
import { r as R } from "./requireImg-CLyBMj04.js";
import "./index-TK4OleqK.js";
import "./china-CjaCo810.js";
import { C as U } from "./chinaLonLat-C20oFNhp.js";
import "./echarts-BHMfc19f.js";
const H = "/peanut-project/static/png/ChinaMap-branch-C8JtCqng.png",
  J = { class: "chinaMap" },
  Q = { id: "crmChina", ref: "ChinaBox", class: "china" },
  V = ["src"],
  K = {
    __name: "indexChinaMap",
    setup(X) {
      const M = i(0),
        u = i(document.body.clientWidth),
        y = L({ branchPoint: [] }),
        _ = i(H),
        c = i(!1),
        d = i([]),
        l = i(null),
        N = i([]),
        f = i([
          {
            id: 0,
            regiontype: 0,
            companyName: "****有限公司",
            longitude: "113.210725",
            latitude: "23.159769"
          },
          {
            id: 1,
            regiontype: 0,
            companyName: "******公司",
            longitude: "111.8",
            latitude: "37.12"
          },
          {
            id: 2,
            regiontype: 0,
            companyName: "******公司",
            longitude: "123.953",
            latitude: "47.3481"
          },
          {
            id: 3,
            regiontype: 0,
            companyName: "****公司",
            longitude: "93.585122",
            latitude: "42.771191"
          }
        ]),
        w = i([
          { province: "广东省", city: "广州市" },
          { province: "新疆", city: "哈密市" },
          { province: "黑龙江", city: "齐齐哈尔市" },
          { province: "山西省", city: "吕梁市" }
        ]),
        s = i("中国"),
        b = i(1e5);
      P(
        () => s,
        t => {
          const n = ["branch", "DC", "cold"];
          t === "中国"
            ? (d.value = y[`${n[M.value]}Point`])
            : (d.value = d.value.filter(e => e.province.indexOf(t) > -1));
        }
      );
      function A() {
        $();
      }
      function I() {
        const t = {
          name: "南海诸岛",
          itemStyle: { normal: { opacity: 0 } },
          label: { show: !1, emphasis: { show: !1 } }
        };
        let n = [];
        return (
          w.value.forEach(e => {
            var o;
            n.push({
              name:
                (o = e.province) == null
                  ? void 0
                  : o
                      .replace("省", "")
                      .replace("自治区", "")
                      .replace("市", "")
                      .replace("特别行政区", ""),
              itemStyle: { normal: { areaColor: "#5284ff" } }
            }),
              n.push({
                name: e.city,
                itemStyle: { normal: { areaColor: "#5284ff" } }
              });
          }),
          (n = [...n, t]),
          n
        );
      }
      async function E() {
        f.value.forEach(t => {
          const n = t.regiontype,
            e = Number(t.longitude),
            o = Number(t.latitude);
          n === 0 &&
            y.branchPoint.push({
              name: "",
              value: [e, o],
              province: t.province,
              companyName: t.companyName
            });
        }),
          (d.value = y.branchPoint),
          await G(),
          v(b.value);
      }
      function v(t) {
        (c.value = !0), t === 1e5 && (s.value = "中国");
        const n = new AMap.Map("map", {
          resizeEnable: !0,
          center: [116.30946, 39.937629],
          zoom: 5
        });
        AMapUI.loadUI(["geo/DistrictExplorer"], e => {
          (window.districtExplorer = new e({
            eventSupport: !0,
            map: n
          })).loadAreaNode(t, function (a, m) {
            if (a) {
              console.error(a);
              return;
            }
            const r = m.getSubFeatures();
            if (((c.value = !1), r.length === 0)) {
              Message.warning("正在维护该地区的地图资源");
              return;
            }
            const h = { features: r };
            k(), t === 1e5 && (N.value = r), z(h);
          });
        });
      }
      function $() {
        const t = f.value.map(e => [e.longitude, e.latitude]);
        let n = null;
        AMap.plugin("AMap.Geocoder", () => {
          (n = new AMap.Geocoder({ city: "全国", radius: 1e3 })),
            n.getAddress(t, function (e, o) {
              if (e === "complete" && o.regeocodes.length) {
                for (let a = 0; a < o.regeocodes.length; a += 1)
                  (f.value[a].province =
                    o.regeocodes[a].addressComponent.province),
                    (f.value[a].city = o.regeocodes[a].addressComponent.city);
                E();
              }
            });
        });
      }
      function z(t) {
        const n = document.getElementById("crmChina");
        n &&
          (l.value && l.value.dispose(),
          s.value === "中国" ? S("中国", t) : S("Map", t),
          (l.value = q(n)),
          l.value.setOption({
            tooltip: {
              padding: 0,
              borderColor: "#4266de",
              backgroundColor: "rgba(15, 16, 37, .9)",
              textStyle: { color: "#fff" },
              formatter: e => {
                let o = "";
                if (e.componentSubType === "map") {
                  const a = e.name;
                  if (
                    w.value.findIndex(r => {
                      var h;
                      return (
                        ((h = r.province) == null ? void 0 : h.includes(a)) ||
                        (r == null ? void 0 : r.city) === a
                      );
                    }) < 0
                  )
                    return U.logLatData.findIndex(r => r.name === a) > 0 ||
                      a === "台湾"
                      ? `<div class="echart-tootip">${a}</div>`
                      : '<div class="echart-tootip">点击返回中国地图</div>';
                  o = `<div><span>地区</span>: ${a}</div>`;
                } else
                  o = `<div><span>公司名称</span>: ${e.data.companyName}</div>`;
                return `
                <div class="echart-tootip">
                  ${o}
                  <div><span>服务区县数</span>: 12个</div>
                  <div><span>服务学校数量</span>: 134所</div>
                  <div><span>服务学生数量</span>: 167个</div>
                  <div><span>食材供应数量</span>: 54335斤</div>
                </div>
                `;
              }
            },
            geo: {
              show: !0,
              map: s.value === "中国" ? "china" : "Map",
              roam: !1,
              zoom: s.value === "中国" ? 2 : 0.5,
              top: "middle",
              label: {
                show: !1,
                color: "#fff",
                fontSize: 12 * (u.value / 1920),
                fontFamily: "PingFangSC-Regular"
              },
              itemStyle: {
                areaColor: "#182554",
                borderColor: "#4266de",
                borderWidth: 1 * (u.value / 1920)
              },
              select: {
                itemStyle: { areaColor: "#68e4ff" },
                label: {
                  color: "#fff",
                  textBorderColor: "#5284ff",
                  textShadowColor: "#5284ff",
                  textBorderWidth: 2
                }
              },
              regions: I()
            },
            series: [
              { name: "地图", type: "map", geoIndex: 0, data: [] },
              {
                name: "散点",
                type: "scatter",
                coordinateSystem: "geo",
                data: d.value,
                symbol: `image://${_.value}`,
                symbolSize: 30 * (u.value / 1920),
                itemStyle: { opacity: 1 },
                emphasis: { scale: 1.5 }
              }
            ]
          }),
          l.value.on("click", e => {
            if (e.seriesName === "散点") return;
            let o = null;
            const a = t.features.find(
              m => m.properties.name.indexOf(e.name) > -1
            );
            a && (o = a.properties.adcode),
              a.properties.level !== "province" && (o = 1e5),
              e.name !== "台湾" && (s.value = e.name),
              (b.value = o),
              v(o);
          }));
      }
      function k() {
        var e = null;
        const o = a => {
          e || (e = a),
            (e = e + a),
            l.value.setOption({ geo: { zoom: e } }),
            e <= 0.9 &&
              window.requestAnimationFrame(() => {
                o(0.6);
              });
        };
        window.requestAnimationFrame(() => {
          o(0.6);
        });
      }
      function B() {
        v(1e5), (s.value = "中国");
      }
      return (
        F(() => {
          (c.value = !0),
            A(),
            window.addEventListener("resize", function () {
              var t;
              (t = l.value) == null || t.resize(),
                (u.value = document.body.clientWidth),
                v(b.value);
            });
        }),
        (t, n) => {
          const e = O("loading");
          return C(
            (W(),
            T("div", J, [
              C(
                g(
                  "div",
                  { class: "back-map-btn", title: "返回全国地图", onClick: B },
                  n[0] ||
                    (n[0] = [
                      g("i", { class: "el-icon-refresh-right" }, null, -1),
                      j(" 返回全国 ")
                    ]),
                  512
                ),
                [[x, p(s) !== "中国"]]
              ),
              g("div", Q, null, 512),
              C(
                g(
                  "img",
                  {
                    src: p(R)("fullScreen/foodSafe/Islands.svg"),
                    alt: "",
                    class: "islands"
                  },
                  null,
                  8,
                  V
                ),
                [[x, p(s) === "中国" && !p(c)]]
              )
            ])),
            [[e, p(c)]]
          );
        }
      );
    }
  },
  ne = D(K, [["__scopeId", "data-v-c4c5480c"]]);
export { ne as default };
