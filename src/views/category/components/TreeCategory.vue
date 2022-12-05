<script lang="ts" setup>
import { reactive } from "vue";
import { Edit } from "@element-plus/icons-vue";

interface Tree {
  label: string;
  children?: Tree[];
}

const data: Tree[] = [
  {
    label: "Level one 1",
    children: [
      {
        label: "Level two 1-1",
        children: [
          {
            label: "Level three 1-1-1",
          },
        ],
      },
    ],
  },
  {
    label: "Level one 2",
    children: [
      {
        label: "Level two 2-1",
        children: [
          {
            label: "Level three 2-1-1",
          },
        ],
      },
      {
        label: "Level two 2-2",
        children: [
          {
            label: "Level three 2-2-1",
          },
        ],
      },
    ],
  },
];

const dataRef = reactive(data);

const nodeClick = () => {};
</script>

<template>
  <div class="overflow: auto;">
    <el-button type="primary" :icon="Edit">添加根节点</el-button>
    <el-button type="primary" :icon="Edit">添加子节点</el-button>
    <el-tree :data="dataRef" @node-click="nodeClick" style="margin-top: 10px" />
  </div>
</template>

<style lang="less" scoped>
//@import url();
</style>
