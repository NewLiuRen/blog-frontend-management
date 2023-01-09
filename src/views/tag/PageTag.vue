<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { Tag } from "@/entity/Tag";
import { ElMessageBox } from "element-plus";
import DialogForm from "./components/DialogForm.vue";

const DialogFormRef = ref();
const total = ref(0);
const data: Tag[] = [
  { id: 1, name: "标签1", icon: "", color: "", privacy: false },
  { id: 2, name: "标签2", icon: "", color: "", privacy: false },
  { id: 3, name: "标签3", icon: "", color: "", privacy: false },
  { id: 4, name: "标签4", icon: "", color: "", privacy: false },
  { id: 5, name: "标签5", icon: "", color: "", privacy: false },
  { id: 6, name: "标签6", icon: "", color: "", privacy: false },
  { id: 7, name: "标签7", icon: "", color: "", privacy: false },
  { id: 8, name: "标签8", icon: "", color: "", privacy: false },
  { id: 9, name: "标签9", icon: "", color: "", privacy: false },
  { id: 10, name: "标签10", icon: "", color: "", privacy: false },
  { id: 11, name: "标签11", icon: "", color: "", privacy: false },
  { id: 12, name: "标签12", icon: "", color: "", privacy: false },
  { id: 13, name: "标签13", icon: "", color: "", privacy: false },
];
const reloadData = () => {
  total.value = data.length;
};

const editTag = (tag: Tag) => {
  DialogFormRef.value.show(tag);
};

const deleteTag = (tag: Tag) => {
  ElMessageBox.confirm(`请确认是否要删除${tag.name}?`, "提示", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {});
};

onMounted(() => {
  reloadData();
});

defineExpose({
  reloadData,
});
</script>

<template>
  <div class="tool-wrap">
    <el-button type="primary" @click="editTag" plain>新建</el-button>
  </div>
  <el-table
    height="calc(100vh - 230px)"
    stripe
    :data="data"
    @row-dblclick="editTag"
  >
    <el-table-column prop="name" label="名称" />
    <el-table-column prop="icon" label="图标" />
    <el-table-column prop="color" label="颜色" />
    <el-table-column prop="privacy" label="私有">
      <template #default="scope">{{
        scope.row.privacy ? "是" : "否"
      }}</template>
    </el-table-column>
    <el-table-column fixed="right" label="" width="120">
      <template #default="scope">
        <el-button link type="primary" @click="editTag(scope.row)"
          >编辑</el-button
        >
        <el-button link type="danger" @click="deleteTag(scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    layout="total, sizes, prev, pager, next"
    style="float: right; margin-top: 10px"
    :total="total"
  />
  <DialogForm ref="DialogFormRef" />
</template>

<style lang="less" scoped>
//@import url();
.tool-wrap {
  margin: 10px 0;
}
</style>
