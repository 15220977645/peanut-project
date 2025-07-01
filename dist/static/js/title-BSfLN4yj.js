import {
  c as p,
  o as h,
  a as o,
  d,
  r as m,
  e as f,
  G as u,
  t as _,
  bv as z,
  _ as g
} from "./index-CnxsT9tm.js";
const v = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "70",
  height: "5",
  fill: "none"
};
function M(n, l) {
  return (
    h(),
    p(
      "svg",
      v,
      l[0] ||
        (l[0] = [
          o(
            "path",
            {
              fill: "#0C2F37",
              "fill-opacity": ".2",
              "fill-rule": "evenodd",
              d: "M4.884 0 3.256 5H0l1.628-5zm32.558 0-1.628 5H32.56l1.628-5zM11.396 0H8.14L6.512 5h3.256zm32.558 0-1.628 5H39.07l1.628-5zM17.907 0h-3.256l-1.628 5h3.256zm32.559 0-1.628 5h-3.256l1.628-5zM24.418 0h-3.256l-1.628 5h3.256zm32.558 0-1.628 5h-3.255l1.627-5zM30.93 0h-3.256l-1.628 5h3.256zm32.558 0L61.86 5h-3.255l1.627-5zm4.884 5L70 0h-3.256l-1.628 5z",
              "clip-rule": "evenodd"
            },
            null,
            -1
          )
        ])
    )
  );
}
const w = { render: M },
  y = ["title"],
  B = { class: "light-font" },
  H = d({
    __name: "title",
    props: { title: {}, path: {} },
    setup(n) {
      const l = m(),
        a = z("openPlatform"),
        s = n;
      function c() {
        var t, e;
        a &&
          (t = s.path) != null &&
          t.path &&
          a(!0, (e = s.path) == null ? void 0 : e.path);
      }
      return (
        f(() => {
          l.value = document.getElementById("fullScreenDom");
        }),
        (t, e) => {
          var r, i;
          return (
            h(),
            p(
              "div",
              {
                class: "title-container",
                title:
                  (r = t.path) != null && r.path
                    ? `跳转至${(i = t.path) == null ? void 0 : i.label}`
                    : "",
                onClick: c
              },
              [
                o(
                  "div",
                  {
                    class: "l",
                    style: u({ cursor: t.path ? "pointer" : "default" })
                  },
                  [o("span", B, _(t.title), 1)],
                  4
                ),
                e[0] ||
                  (e[0] = o(
                    "img",
                    { class: "r-img", src: w, alt: "" },
                    null,
                    -1
                  ))
              ],
              8,
              y
            )
          );
        }
      );
    }
  }),
  k = g(H, [["__scopeId", "data-v-48050aaf"]]);
export { k as default };
