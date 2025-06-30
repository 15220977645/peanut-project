<script setup lang="ts">
import { utils, writeFile } from "xlsx";

defineOptions({
  name: "Excel"
});

interface Columns {
  dataKey: string;
  key: string;
  title: string;
  width?: number;
  [propName: string]: string | number;
}

const generateColumns = (length = 10, prefix = "Column-", props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column-${columnIndex}`,
    width: 150
  }));

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = "row-"
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
        return rowData;
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null
      }
    );
  });

const columns = generateColumns(10);
const data = generateData(columns, 1000);
const titleList: string[] = [];
columns.forEach((column: Columns) => {
  titleList.push(column.title);
});

/**
 * 导出工具函数，分批写入
 * @param data
 * @param fileName
 * @param batchSize
 */
const exportExcel = async (
  titleList: string[],
  data: any[],
  fileName = "tableV2.xlsx",
  batchSize = 100
) => {
  const res: string[][] = [[], []];
  res[0] = titleList;
  const workSheet = utils.aoa_to_sheet(res);
  // 分批写入数据
  for (let i = 0; i < data.length; i += batchSize) {
    const colData = data.slice(i, i + batchSize).map(item => {
      const valArr: any[] = [];
      for (const key of titleList) {
        valArr.push(item[key]);
      }
      return valArr;
    });
    await new Promise((resolve, reject) => {
      try {
        requestIdleCallback(() => {
          utils.sheet_add_aoa(workSheet, colData, { origin: -1 });
          resolve(() => {
            console.log("resolve");
          });
        });
      } catch (error) {
        reject(error);
      }
    });
  }
  const workBook = utils.book_new();
  utils.book_append_sheet(workBook, workSheet, "数据报表");
  writeFile(workBook, fileName);
};

/* 点击导出 */
const handleClickExport = () => {
  exportExcel(titleList, data);
};
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <div class="font-medium">
        导出Execl（
        <el-link
          href="https://github.com/SheetJS/sheetjs"
          target="_blank"
          style="margin: 0 5px 4px 0; font-size: 16px"
        >
          github地址
        </el-link>
        ）
      </div>
    </template>
    <el-button type="primary" @click="handleClickExport">导出Excel</el-button>
    <div class="h-[25rem] mt-3">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2
            :columns="columns"
            :data="data"
            :width="width"
            :height="height"
            fixed
          />
        </template>
      </el-auto-resizer>
    </div>
  </el-card>
</template>
