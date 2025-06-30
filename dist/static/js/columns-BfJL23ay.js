import { m as u } from "./message-BXePv0mX.js";
import { b as a } from "./data-C4Xt87zX.js";
import { r as p, B as i } from "./index-DuV_pBtV.js";
function b(t) {
  const r = p(""),
    o = [
      { label: "ID", prop: "id", width: 80 },
      { label: "日期", prop: "date" },
      { label: "姓名", prop: "name" },
      { label: "地址", prop: "address" }
    ],
    n = i({
      pageSize: 5,
      currentPage: 1,
      layout: "prev, pager, next",
      total: a.length,
      background: !0,
      small: !0
    });
  function l({ row: { name: e } }) {
    return { cursor: "pointer", background: e === r.value ? "#f5f7fa" : "" };
  }
  function s(e) {
    (r.value = e.name),
      t.value.blur(),
      u(`当前选中行的数据为：${JSON.stringify(e)}`, { type: "success" });
  }
  return {
    columns: o,
    pagination: n,
    selectValue: r,
    tableDataEdit: a,
    rowStyle: l,
    onRowClick: s
  };
}
export { b as useColumns };
