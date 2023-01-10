<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { routes } from "@/router";
import * as icons from "../icons";

const route = useRoute();
const calcRoutes = computed(() => {
  return routes.flat(Infinity).filter((route) => !route.meta.hideMenu);
});
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
      v-for="(route, index) in calcRoutes"
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
