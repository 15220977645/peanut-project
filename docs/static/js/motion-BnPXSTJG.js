import { d as o, l as i, j as n, x as s } from "./index-DuV_pBtV.js";
const r = o({
  name: "Motion",
  props: { delay: { type: Number, default: 50 } },
  render() {
    const { delay: t } = this,
      e = i("motion");
    return n(s("div", {}, { default: () => [this.$slots.default()] }), [
      [
        e,
        {
          initial: { opacity: 0, y: 100 },
          enter: { opacity: 1, y: 0, transition: { delay: t } }
        }
      ]
    ]);
  }
});
export { r as M };
