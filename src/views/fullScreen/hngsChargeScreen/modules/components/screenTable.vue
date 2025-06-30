<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
// import ScrollView from './scrollView.vue';

type chnType = {
  chn: string;
  name: string;
  toFixed?: number;
  unit?: string;
};
type dataType = {
  id: number;
  [key: string]: any;
};
interface Props {
  tableData: dataType[];
  chnList: chnType[];
  domName: string;
}

const props = defineProps<Props>();
const openAnimation = ref(false);

watch(
  props.tableData,
  async () => {
    await nextTick();
    openAnimation.value = true;
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <div class="table-component">
    <ul class="table-head">
      <li
        v-for="(item, i) in chnList"
        :key="i"
        :style="{ width: `${100 / chnList.length}%` }"
        :class="`td-${i}`"
      >
        {{ item.chn }}
      </li>
    </ul>
    <!--    <ScrollView :open-animation="openAnimation" :parent-dom="domName" class="scroll-table-box">-->
    <div class="table-body">
      <ul v-for="row in tableData" :key="row.id" class="table-row">
        <li
          v-for="(td, tdI) in chnList"
          :key="tdI"
          :class="`td-${tdI}`"
          :style="{ width: `${100 / chnList.length}%` }"
          :title="
            td.toFixed
              ? `${row[td.name].toFixed(td.toFixed)}${td.unit ? td.unit : ''}`
              : `${row[td.name]}${td.unit ? td.unit : ''}`
          "
        >
          {{ td.toFixed ? row[td.name].toFixed(td.toFixed) : row[td.name]
          }}{{ td.unit ? td.unit : "" }}
        </li>
      </ul>
    </div>
    <!--    </ScrollView>-->
  </div>
</template>

<style lang="scss" scoped>
.table-component {
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-wrap: nowrap;

    li {
      padding: 0.4167rem 0;
      overflow: hidden;
      font-size: 0.7292rem;
      // width: 25%;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .table-head {
    padding: 0 0.8333rem;
    font-size: 0.8333rem;
    color: #3a6cff;
    background: linear-gradient(
      270deg,
      rgb(36 225 247 / 10%) 0%,
      rgb(88 63 239 / 10%) 70%
    );
  }

  .scroll-table-box {
    flex: 1;
    overflow: hidden;
  }

  .table-body {
    flex: 1;
    padding: 0 0.8333rem;
    overflow: auto;
    color: #031114;

    .td-0 {
      font-size: 0.8333rem;
    }

    .td-3 {
      color: #20b881;
    }
    // ul:nth-child(even) {
    //   background: linear-gradient(270deg, rgba(36, 225, 247, 0.1) 0%, rgba(88, 63, 239, 0.1) 70%);
    // }
    // ul:nth-child(odd) {
    //   background-color: transparent;
    // }
  }
}
</style>
