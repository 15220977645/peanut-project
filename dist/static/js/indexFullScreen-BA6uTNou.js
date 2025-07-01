import d from "./headTitle-BmNPo3Fk.js";
import p from "./emptyData-CmO1iC8h.js";
import {
  _ as c,
  r as m,
  c as o,
  o as t,
  b as n,
  u as i,
  a as e,
  t as a,
  F as u,
  k as _
} from "./index-CnxsT9tm.js";
import "./requireImg-CLyBMj04.js";
const v = { class: "box fullScreen" },
  y = { key: 0, class: "video" },
  f = { class: "main-video" },
  h = { class: "item-video" },
  b = { key: 1, class: "empty-box" },
  k = {
    __name: "indexFullScreen",
    setup(w) {
      const r = m([
        {
          videoUrl: "http://47.106.100.245:8000/rtp/",
          name: "箱体存放区南",
          id: 85
        },
        {
          videoUrl: "http://47.106.100.245:8000/rtp/",
          name: "北边楼梯",
          id: 87
        },
        {
          videoUrl: "http://47.106.100.245:8000/rtp/",
          name: "蔬菜切配间西南",
          id: 88
        },
        {
          videoUrl: "http://47.106.100.245:8000/rtp/",
          name: "南参观通道东",
          id: 118
        }
      ]);
      return (x, s) => (
        t(),
        o("div", v, [
          n(d, {
            icon: "FullScreen-icon.svg",
            name: "监控视频",
            class: "full-title"
          }),
          i(r).length > 0
            ? (t(),
              o("div", y, [
                e("ul", null, [
                  e("li", f, [
                    s[0] ||
                      (s[0] = e(
                        "video",
                        { muted: "", autoplay: "", loop: "" },
                        [
                          e("source", {
                            src: "https://www.runoob.com/try/demo_source/movie.mp4",
                            type: "video/mp4"
                          })
                        ],
                        -1
                      )),
                    e("p", null, a(i(r)[0].name), 1)
                  ]),
                  e("div", h, [
                    (t(!0),
                    o(
                      u,
                      null,
                      _(
                        i(r).slice(1, 4),
                        l => (
                          t(),
                          o("li", { key: l.id }, [
                            s[1] ||
                              (s[1] = e(
                                "video",
                                { muted: "", autoplay: "", loop: "" },
                                [
                                  e("source", {
                                    src: "https://www.runoob.com/try/demo_source/movie.mp4",
                                    type: "video/mp4"
                                  })
                                ],
                                -1
                              )),
                            e("p", null, a(l.name), 1)
                          ])
                        )
                      ),
                      128
                    ))
                  ])
                ])
              ]))
            : (t(), o("div", b, [n(p)]))
        ])
      );
    }
  },
  B = c(k, [["__scopeId", "data-v-47d39b6b"]]);
export { B as default };
