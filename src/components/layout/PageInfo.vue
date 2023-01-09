<script lang="ts" setup>
import { useRoute } from "vue-router";
import { Search, Back } from "@element-plus/icons-vue";

const route = useRoute();
</script>

<template>
  <el-row>
    <el-col :span="20">
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item
          v-for="(r, index) in route.matched.slice(0, 1)"
          :key="`route_${index}}`"
        >
          {{ r.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col :span="4" style="text-align: right">
      <el-button :icon="Back" size="small" plain>回退</el-button>
      <el-button :icon="Search" size="small" plain>刷新</el-button>
    </el-col>
  </el-row>
</template>

<style lang="less" scoped>
.breadcrumb {
  padding-bottom: 10px;
}
</style>
