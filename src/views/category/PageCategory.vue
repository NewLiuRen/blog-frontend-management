<script lang="ts" setup>
import TreeCategory from "./components/TreeCategory.vue";
</script>

<template>
  <el-row>
    <el-col :span="12">
      <TreeCategory />
    </el-col>
    <el-col :span="12">
      <span>Category Right</span>
    </el-col>
  </el-row>
</template>
