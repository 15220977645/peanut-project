const testTs = () => {
  /* 树形递归 */
  console.log("树形递归");
  const regions = [
    { id: 1, name: "北京市", parentId: null },
    { id: 2, name: "东城区", parentId: 1 },
    { id: 3, name: "西城区", parentId: 1 },
    { id: 4, name: "朝阳区", parentId: 1 },
    { id: 5, name: "海淀区", parentId: 1 },
    { id: 6, name: "天津市", parentId: null },
    { id: 7, name: "和平区", parentId: 6 },
    { id: 8, name: "河东区", parentId: 6 },
    { id: 9, name: "河西区", parentId: 6 },
    { id: 10, name: "南开区", parentId: 6 },
    { id: 11, name: "上海市", parentId: null },
    { id: 12, name: "黄浦区", parentId: 11 },
    { id: 13, name: "徐汇区", parentId: 11 },
    { id: 14, name: "长宁区", parentId: 11 },
    { id: 15, name: "静安区", parentId: 11 },
    { id: 16, name: "广东省", parentId: null },
    { id: 17, name: "广州市", parentId: 16 },
    { id: 18, name: "越秀区", parentId: 17 },
    { id: 19, name: "海珠区", parentId: 17 },
    { id: 20, name: "荔湾区", parentId: 17 },
    { id: 21, name: "天河区", parentId: 17 },
    { id: 22, name: "深圳市", parentId: 16 },
    { id: 23, name: "福田区", parentId: 22 },
    { id: 24, name: "罗湖区", parentId: 22 },
    { id: 25, name: "南山区", parentId: 22 },
    { id: 26, name: "宝安区", parentId: 22 }
  ];

  class treeFactory {
    [x: string]: any;
    constructor(node) {
      this.id = node.id;
      this.name = node.name;
      this.parentId = node.parentId;
      this.children = [];
    }
  }

  function handleTree(nodes, id) {
    const treeList = [];
    for (const item of nodes) {
      if (item.parentId !== id) {
        continue;
      }

      // 标记节点为已处理，避免后续循环
      item.noLoop = true;
      const node = new treeFactory(item);
      node.children = handleTree(nodes, item.id);
      treeList.push(node);
    }
    return treeList;
  }

  console.log(handleTree(regions, null));
};
export default testTs;
