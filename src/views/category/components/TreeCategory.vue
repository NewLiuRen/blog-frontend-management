<script lang="ts" setup>
import { reactive, toRaw } from "vue";
import Category from "@/entity/Category";

const emits = defineEmits<{
  (e: "on-choose-node", category: Category): void;
}>();

interface CategoryTree extends Category {
  children?: CategoryTree[];
}

const defaultTreeProps = {
  children: "children",
  label: "name",
};

const data: CategoryTree[] = [];

const dataRef = reactive(data);

const nodeClick = (node) => {
  const category: Category = toRaw(node);
  delete category.children;
  emits("on-choose-node", category);
};
</script>

<template>
  <div>
    <div class="category-tree-wrap">
      <el-tree
        style="margin-top: 10px"
        label="name"
        empty-text="暂无数据"
        :props="defaultTreeProps"
        :data="dataRef"
        highlight-current
        @node-click="nodeClick"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
//@import url();
.category-tree-wrap {
  height: calc(100vh - 170px);
  overflow: auto;
}
</style>
