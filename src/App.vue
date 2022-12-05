<script setup lang="ts">
import { RouterView } from "vue-router";
import Aside from "./components/layout/Aside.vue";
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
import PageInfo from "./components/layout/PageInfo.vue";
</script>

<template>
  <el-container class="common-layout">
    <el-aside width="200px">
      <Aside />
    </el-aside>
    <el-container>
      <el-header height="30px"><Header /></el-header>
      <el-main>
        <PageInfo />
        <RouterView />
      </el-main>
      <el-footer height="30px"><Footer /></el-footer>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.common-layout {
  width: 100vw;
  height: 100vh;
}
</style>
