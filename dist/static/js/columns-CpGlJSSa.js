import { m as u } from "./message-CSPqT3RV.js";
import { b as a } from "./data-y6CsZ9zX.js";
import { r as p, B as i } from "./index-CnxsT9tm.js";
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
