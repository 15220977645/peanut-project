import {
  aE as se,
  aF as D,
  aG as V,
  aH as F,
  _ as le,
  ac as Y,
  S as $,
  Z as q,
  P as O,
  aI as ce,
  d as X,
  f as he,
  a as J,
  i as Z,
  j as K,
  W as Q,
  O as ee,
  aJ as de,
  Y as be
} from "./OrbitControls-gBvV8f2G.js";
import {
  d as ue,
  r as H,
  e as pe,
  f as me,
  j as _e,
  l as ge,
  u as te,
  g as we,
  w as N,
  b as ae,
  a as re,
  h as ne,
  a4 as Ee,
  n as k,
  o as Re,
  _ as ye
} from "./index-D6DS3gmo.js";
class ve extends se {
  constructor(b) {
    super(b), (this.type = D);
  }
  parse(b) {
    const a = function (e, r) {
        switch (e) {
          case 1:
            throw new Error("THREE.RGBELoader: Read Error: " + (r || ""));
          case 2:
            throw new Error("THREE.RGBELoader: Write Error: " + (r || ""));
          case 3:
            throw new Error("THREE.RGBELoader: Bad File Format: " + (r || ""));
          default:
          case 4:
            throw new Error("THREE.RGBELoader: Memory Error: " + (r || ""));
        }
      },
      A = `
`,
      I = function (e, r, o) {
        r = r || 1024;
        let h = e.pos,
          c = -1,
          t = 0,
          d = "",
          n = String.fromCharCode.apply(
            null,
            new Uint16Array(e.subarray(h, h + 128))
          );
        for (; 0 > (c = n.indexOf(A)) && t < r && h < e.byteLength; )
          (d += n),
            (t += n.length),
            (h += 128),
            (n += String.fromCharCode.apply(
              null,
              new Uint16Array(e.subarray(h, h + 128))
            ));
        return -1 < c ? ((e.pos += t + c + 1), d + n.slice(0, c)) : !1;
      },
      m = function (e) {
        const r = /^#\?(\S+)/,
          o = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
          i = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
          h = /^\s*FORMAT=(\S+)\s*$/,
          c = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,
          t = {
            valid: 0,
            string: "",
            comments: "",
            programtype: "RGBE",
            format: "",
            gamma: 1,
            exposure: 1,
            width: 0,
            height: 0
          };
        let d, n;
        for (
          (e.pos >= e.byteLength || !(d = I(e))) && a(1, "no header found"),
            (n = d.match(r)) || a(3, "bad initial token"),
            t.valid |= 1,
            t.programtype = n[1],
            t.string +=
              d +
              `
`;
          (d = I(e)), d !== !1;

        ) {
          if (
            ((t.string +=
              d +
              `
`),
            d.charAt(0) === "#")
          ) {
            t.comments +=
              d +
              `
`;
            continue;
          }
          if (
            ((n = d.match(o)) && (t.gamma = parseFloat(n[1])),
            (n = d.match(i)) && (t.exposure = parseFloat(n[1])),
            (n = d.match(h)) && ((t.valid |= 2), (t.format = n[1])),
            (n = d.match(c)) &&
              ((t.valid |= 4),
              (t.height = parseInt(n[1], 10)),
              (t.width = parseInt(n[2], 10))),
            t.valid & 2 && t.valid & 4)
          )
            break;
        }
        return (
          t.valid & 2 || a(3, "missing format specifier"),
          t.valid & 4 || a(3, "missing image size specifier"),
          t
        );
      },
      u = function (e, r, o) {
        const i = r;
        if (i < 8 || i > 32767 || e[0] !== 2 || e[1] !== 2 || e[2] & 128)
          return new Uint8Array(e);
        i !== ((e[2] << 8) | e[3]) && a(3, "wrong scanline width");
        const h = new Uint8Array(4 * r * o);
        h.length || a(4, "unable to allocate buffer space");
        let c = 0,
          t = 0;
        const d = 4 * i,
          n = new Uint8Array(4),
          S = new Uint8Array(d);
        let j = o;
        for (; j > 0 && t < e.byteLength; ) {
          t + 4 > e.byteLength && a(1),
            (n[0] = e[t++]),
            (n[1] = e[t++]),
            (n[2] = e[t++]),
            (n[3] = e[t++]),
            (n[0] != 2 || n[1] != 2 || ((n[2] << 8) | n[3]) != i) &&
              a(3, "bad rgbe scanline format");
          let C = 0,
            v;
          for (; C < d && t < e.byteLength; ) {
            v = e[t++];
            const f = v > 128;
            if (
              (f && (v -= 128),
              (v === 0 || C + v > d) && a(3, "bad scanline data"),
              f)
            ) {
              const B = e[t++];
              for (let W = 0; W < v; W++) S[C++] = B;
            } else S.set(e.subarray(t, t + v), C), (C += v), (t += v);
          }
          const ie = i;
          for (let f = 0; f < ie; f++) {
            let B = 0;
            (h[c] = S[f + B]),
              (B += i),
              (h[c + 1] = S[f + B]),
              (B += i),
              (h[c + 2] = S[f + B]),
              (B += i),
              (h[c + 3] = S[f + B]),
              (c += 4);
          }
          j--;
        }
        return h;
      },
      _ = function (e, r, o, i) {
        const h = e[r + 3],
          c = Math.pow(2, h - 128) / 255;
        (o[i + 0] = e[r + 0] * c),
          (o[i + 1] = e[r + 1] * c),
          (o[i + 2] = e[r + 2] * c),
          (o[i + 3] = 1);
      },
      x = function (e, r, o, i) {
        const h = e[r + 3],
          c = Math.pow(2, h - 128) / 255;
        (o[i + 0] = F.toHalfFloat(Math.min(e[r + 0] * c, 65504))),
          (o[i + 1] = F.toHalfFloat(Math.min(e[r + 1] * c, 65504))),
          (o[i + 2] = F.toHalfFloat(Math.min(e[r + 2] * c, 65504))),
          (o[i + 3] = F.toHalfFloat(1));
      },
      g = new Uint8Array(b);
    g.pos = 0;
    const p = m(g),
      G = p.width,
      L = p.height,
      w = u(g.subarray(g.pos), G, L);
    let M, z, T;
    switch (this.type) {
      case V:
        T = w.length / 4;
        const e = new Float32Array(T * 4);
        for (let o = 0; o < T; o++) _(w, o * 4, e, o * 4);
        (M = e), (z = V);
        break;
      case D:
        T = w.length / 4;
        const r = new Uint16Array(T * 4);
        for (let o = 0; o < T; o++) x(w, o * 4, r, o * 4);
        (M = r), (z = D);
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return {
      width: G,
      height: L,
      data: M,
      header: p.string,
      gamma: p.gamma,
      exposure: p.exposure,
      type: z
    };
  }
  setDataType(b) {
    return (this.type = b), this;
  }
  load(b, E, R, y) {
    function l(a, s) {
      switch (a.type) {
        case V:
        case D:
          (a.colorSpace = le),
            (a.minFilter = Y),
            (a.magFilter = Y),
            (a.generateMipmaps = !1),
            (a.flipY = !0);
          break;
      }
      E && E(a, s);
    }
    return super.load(b, l, R, y);
  }
}
const fe = ue({
    __name: "index",
    setup(oe) {
      const b = H(!0),
        E = H("cube"),
        R = H(),
        y = H();
      let l = { hbr: null, cube: null },
        a = { hbr: null, cube: null },
        s = { hbr: null, cube: null };
      const U = async () => {
          (b.value = !0),
            await k(),
            (l.hbr = new $()),
            (l.hbr.background = new q(12897));
          let m = null;
          const _ = await new ve().loadAsync("/src/assets/three/scene1.hdr");
          (_.mapping = de),
            (l.hbr.background = _),
            (l.hbr.environment = _),
            (m = _),
            (a.hbr = new O(
              75,
              window.innerWidth / window.innerHeight,
              0.1,
              1e3
            )),
            a.hbr.position.set(0, 0, 10),
            l.hbr.add(a.hbr);
          const x = new X(2, 20, 20),
            g = new be({
              metalness: 0,
              roughness: 0,
              transmission: 0.3,
              ior: 1.1,
              envMap: m,
              envMapIntensity: 0.5
            }),
            p = new J(x, g);
          l.hbr.add(p);
          const G = new Z(16777215, 0.5);
          l.hbr.add(G);
          const L = new K(16777215, 1);
          L.position.set(10, 10, 10),
            l.hbr.add(L),
            (s.hbr = new Q()),
            s.hbr.setClearColor(13421772),
            s.hbr.setSize(R.value.clientWidth, R.value.clientHeight),
            R.value.appendChild(s.hbr.domElement);
          const w = new ee(a.hbr, s.hbr.domElement);
          (w.enableDamping = !0), (b.value = !1);
          async function M() {
            await k(),
              w.update(),
              s.hbr.render(l.hbr, a.hbr),
              requestAnimationFrame(M);
          }
          M();
        },
        P = async () => {
          (b.value = !0),
            await k(),
            (l.cube = new $()),
            (l.cube.background = new q(12897)),
            (a.cube = new O(
              75,
              window.innerWidth / window.innerHeight,
              0.1,
              1e3
            )),
            a.cube.position.set(0, 0, 5),
            l.cube.add(a.cube);
          const u = new ce().load([
              "/src/assets/three/px.jpg",
              "/src/assets/three/nx.jpg",
              "/src/assets/three/py.jpg",
              "/src/assets/three/ny.jpg",
              "/src/assets/three/pz.jpg",
              "/src/assets/three/nz.jpg"
            ]),
            _ = new X(1, 50, 50),
            x = new he({ metalness: 1, roughness: 0.1, envMap: u }),
            g = new J(_, x);
          l.cube.add(g), (l.cube.background = u);
          const p = new Z(16777215, 1);
          p.position.set(1, 1, 1).normalize(), l.cube.add(p);
          const G = new K(16777215, 1);
          G.position.set(10, 10, 10),
            l.cube.add(G),
            (s.cube = new Q()),
            s.cube.setClearColor(13421772),
            s.cube.setSize(y.value.clientWidth, y.value.clientHeight),
            y.value.appendChild(s.cube.domElement);
          const L = new ee(a.cube, s.cube.domElement);
          (L.enableDamping = !0), (b.value = !1);
          async function w() {
            await k(),
              L.update(),
              s.cube.render(l.cube, a.cube),
              requestAnimationFrame(w);
          }
          w();
        },
        A = () => {
          const m = R.value.clientWidth || y.value.clientWidth,
            u = R.value.clientHeight || y.value.clientHeight;
          s.hbr.setSize(m, u),
            s.cube.setSize(m, u),
            (a.hbr.aspect = m / u),
            (a.cube.aspect = m / u),
            a.hbr.updateProjectionMatrix(),
            a.cube.updateProjectionMatrix(),
            s.hbr.setPixelRatio(window.devicePixelRatio),
            s.cube.setPixelRatio(window.devicePixelRatio);
        },
        I = () => {
          E.value === "hbr" && !s.hbr
            ? U()
            : E.value === "cube" && !s.cube && P();
        };
      return (
        pe(() => {
          P(), window.addEventListener("resize", A);
        }),
        me(() => {
          window.removeEventListener("resize", A);
        }),
        (m, u) => {
          const _ = ne("ElTabPane"),
            x = ne("ElTabs"),
            g = ge("loading");
          return _e(
            (Re(),
            we(
              x,
              {
                modelValue: te(E),
                "onUpdate:modelValue":
                  u[0] || (u[0] = p => (Ee(E) ? (E.value = p) : null)),
                lazy: "",
                class: "three-tabs",
                onTabChange: I
              },
              {
                default: N(() => [
                  ae(
                    _,
                    { label: "Cube环境贴图", name: "cube" },
                    {
                      default: N(() => [
                        re(
                          "div",
                          {
                            ref_key: "threeCubeBox",
                            ref: y,
                            id: "three-cube-box",
                            class: "three-box"
                          },
                          null,
                          512
                        )
                      ]),
                      _: 1
                    }
                  ),
                  ae(
                    _,
                    { label: "HDR环境贴图", name: "hbr" },
                    {
                      default: N(() => [
                        re(
                          "div",
                          {
                            ref_key: "threeHbrBox",
                            ref: R,
                            id: "three-hbr-box",
                            class: "three-box"
                          },
                          null,
                          512
                        )
                      ]),
                      _: 1
                    }
                  )
                ]),
                _: 1
              },
              8,
              ["modelValue"]
            )),
            [[g, te(b)]]
          );
        }
      );
    }
  }),
  xe = ye(fe, [["__scopeId", "data-v-ff705ebb"]]);
export { xe as default };
