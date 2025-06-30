import { b as r } from "./data-BuVMDA81.js";
import { r as s, be as l, e as p, bd as n, H as b } from "./index-D6DS3gmo.js";
function m(e) {
  const a = s(l(r, !0)),
    t = [
      { label: "ID", prop: "id" },
      { label: "日期", prop: "date" },
      { label: "姓名", prop: "name" },
      { label: "地址", prop: "address" }
    ];
  return (
    p(() => {
      n().then(() => {
        const { setWatermark: o } = b(e.value.getTableDoms().tableWrapper);
        o("编程即艺术", {
          font: "16px Microsoft YaHei",
          globalAlpha: 0.8,
          forever: !0,
          width: 252,
          height: 80
        });
      });
    }),
    { columns: t, dataList: a }
  );
}
export { m as useColumns };
