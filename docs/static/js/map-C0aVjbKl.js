import {
  d as _,
  L as m,
  e as E,
  c as A,
  a as T,
  o as C,
  _ as D
} from "./index-DuV_pBtV.js";
const $ = { class: "map-container" },
  N = _({
    __name: "map",
    props: {
      pointList: { type: Array, default: () => [] },
      lineList: { type: Array, default: () => [] },
      colorList: { type: Array, default: () => [] },
      defaultColor: { type: String, default: "#ff5959" }
    },
    setup(L) {
      const a = L;
      let l, u;
      const r = [],
        k = document.body.clientWidth / 1920,
        c = [];
      m(
        () => a.pointList,
        () => {
          d();
        },
        { deep: !0, immediate: !0 }
      ),
        m(
          () => a.lineList,
          () => {
            d();
          },
          { deep: !0, immediate: !0 }
        );
      async function d() {
        if (
          ((l = await new window.AMap.Map("map", {
            resizeEnable: !0,
            zooms: [6, 16],
            zoom: 12,
            center: [113.304499, 23.130061],
            mapStyle: "amap://styles/825a853a6afa7cb0ff77a2982b221fd2"
          })),
          a.lineList[0])
        )
          y();
        else {
          const e = a.pointList.filter(
            t => !!(t != null && t.lon) && !!(t != null && t.lat)
          );
          if (!e[0]) return;
          f(e), l.setCenter([e[0].lon, e[0].lat]);
        }
      }
      function y() {
        a.lineList.forEach((e, t) => {
          e.points.forEach(o => {
            c.push({
              ...o,
              lineName: e.lineName,
              color: a.colorList[t % a.colorList.length]
            });
          }),
            v(t);
        }),
          f(c);
      }
      function v(e) {
        u = new AMap.Driving({
          policy: AMap.DrivingPolicy.LEAST_TIME,
          hideMarkers: !0
        });
        const t = a.lineList[e],
          o = [],
          n = [],
          p = [];
        t.points.forEach((s, i) => {
          i === 0
            ? o.push(s.lon, s.lat)
            : i === t.points.length - 1
            ? n.push(s.lon, s.lat)
            : p.push([s.lon, s.lat]);
        }),
          u.search(o, n, { waypoints: p }, (s, i) => {
            s === "complete"
              ? g(i.routes[0], e)
              : console.error("获取物流数据失败：" + i);
          });
      }
      function g(e, t) {
        const o = w(e),
          n = new AMap.Polyline({
            path: o,
            isOutline: !1,
            strokeWeight: 3 * k,
            strokeOpacity: 0.9,
            strokeColor: a.colorList[t % a.colorList.length],
            lineJoin: "round",
            strokeStyle: "dashed"
          });
        l.add(n), l.setFitView([n]);
      }
      function w(e) {
        const t = [];
        for (let o = 0, n = e.steps.length; o < n; o++) {
          const p = e.steps[o];
          for (let s = 0, i = p.path.length; s < i; s++) t.push(p.path[s]);
        }
        return t;
      }
      function f(e) {
        e.forEach((t, o) => {
          let n = o;
          (n = new AMap.Marker({
            position: [t.lon, t.lat],
            content: b(t),
            extData: { id: o }
          })),
            n.on("mouseover", h),
            n.on("click", h),
            n.on("mouseout", M),
            r.push(n),
            l.add(r);
        });
      }
      function h(e) {
        let t = e.target.getExtData().id;
        r[t].setLabel({
          content: x(t),
          direction: "top",
          offset: new AMap.Pixel(25, 0)
        }),
          r[t].setTop(!0);
      }
      function M(e) {
        let t = e.target.getExtData().id;
        r[t].setLabel({ content: "" }), r[t].setTop(!0);
      }
      function b(e) {
        let t = a.defaultColor;
        return (
          e.color && (t = e.color),
          `
	<div class="icon-box">
		<span style="--i:1; background-color: ${t};"></span>
		<span style="--i:2; background-color: ${t};"></span>
		<span style="--i:4; background-color: ${t};"></span>
	</div>
		`
        );
      }
      function x(e) {
        const t = c[0] ? c[e] : a.pointList[e],
          o = c[0] ? `<div class="label">线路名称：${t.lineName}</div>` : "";
        return `
    <div class="info-block">
			<div class="name">${t.name}</div>
			${o}
    </div>
    `;
      }
      return (
        E(() => {
          window.addEventListener("resize", () => {
            d();
          }),
            d();
        }),
        (e, t) => (
          C(),
          A(
            "div",
            $,
            t[0] ||
              (t[0] = [T("div", { id: "map", class: "map-block" }, null, -1)])
          )
        )
      );
    }
  }),
  z = D(N, [["__scopeId", "data-v-3dc637a5"]]);
export { z as default };
