<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { Link } from "@/entity/Link";

const total = ref(0);
const data: Link[] = [];
const reloadData = () => {
  total.value = data.length;
};

onMounted(() => {
  reloadData();
});

defineExpose({
  reloadData,
});
</script>

<template>
  <el-table height="calc(100vh - 160px)" stripe :data="data"> </el-table>
  <el-pagination
    layout="total, sizes, prev, pager, next"
    style="float: right"
    :total="total"
  />
</template>

<style lang="less" scoped>
//@import url();
.tool-wrap {
  margin: 10px 0;
}
</style>
