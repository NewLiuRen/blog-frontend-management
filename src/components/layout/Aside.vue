<script lang="ts" setup>
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import { routes } from "@/router";
import * as icons from "../icons";

const route = useRoute();
</script>

<template>
  <el-menu :default-active="route.path || routes[0].path" router class="aside">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="60"
      height="60"
    />
    <el-menu-item
      v-for="(route, index) in routes"
      :index="route.path"
      :key="'route_' + index"
    >
      <el-icon><component :is="icons[route.meta.icon]" /></el-icon>
      <span>{{ route.meta.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="less" scoped>
.aside {
  height: 100%;
}
</style>
