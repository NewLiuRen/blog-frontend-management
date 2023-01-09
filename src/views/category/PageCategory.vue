<script lang="ts" setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import TreeCategory from "./components/TreeCategory.vue";
import CategoryForm from "./components/CategoryForm.vue";
import { Edit, Delete } from "@element-plus/icons-vue";

import Category from "@/entity/Category";

let current: Category = ref({});

const CategoryFormRef = ref();

const reloadData = () => {};

const chooseNode = (categoryNode) => {
  current.value = categoryNode;
  setTimeout(() => {
    CategoryFormRef.value.setFormData(categoryNode);
  }, 0);
};

const cancelNode = () => {
  current.value = {};
};

const addRootNode = () => {
  const newCategory = {
    name: "",
    icon: "",
    color: "",
    privacy: false,
  };
  chooseNode(newCategory);
};

const addNode = () => {
  if (!current.value.id) {
    ElMessage({
      showClose: true,
      grouping: true,
      message: "请先选择待添加元素的父节点",
      type: "warning",
    });
    return;
  }
};

const removeNode = () => {
  if (!current.value.id) {
    ElMessage({
      showClose: true,
      grouping: true,
      message: "请先选择待删除的节点",
      type: "warning",
    });
    return;
  }
};

defineExpose({
  reloadData,
});
</script>

<template>
  <el-row>
    <el-col :span="12">
      <el-button type="primary" :icon="Edit" plain @click="addRootNode"
        >添加根节点</el-button
      >
      <el-button type="primary" :icon="Edit" plain @click="addNode"
        >添加子节点</el-button
      >
      <el-button type="danger" :icon="Delete" plain @click="removeNode"
        >删除节点</el-button
      >
      <TreeCategory @on-choose-node="chooseNode" />
    </el-col>
    <el-col :span="12">
      <el-empty
        v-if="Object.keys(current).length === 0"
        description="请选择节点"
        style="height: 100%"
      />
      <CategoryForm v-else ref="CategoryFormRef" @on-cancel="cancelNode" />
    </el-col>
  </el-row>
</template>
