<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { User } from "@/entity/User";
import DialogForm from "./components/DialogForm.vue";

const DialogFormRef = ref();
const total = ref(0);
const guestId = ref("");
const data: User[] = [];

const reloadData = () => {
  total.value = data.length;
};

const freezeGuest = (guest) => {
  guestId.value = guest.id;
  DialogFormRef.value.show();
};

const dateOnOk = (date) => {
  console.log("date :>> ", date);
  guestId.value = "";
};

onMounted(() => {
  reloadData();
});

defineExpose({
  reloadData,
});
</script>

<template>
  <el-table height="calc(100vh - 170px)" stripe :data="data">
    <el-table-column prop="username">
      <template #default="scope">
        <el-avatar :size="50" :src="scope.row.avatar" />
      </template>
    </el-table-column>
    <el-table-column prop="username" label="用户名" show-overflow-tooltip />
    <el-table-column prop="ip" label="IP" width="100" />
    <el-table-column prop="area" label="来自" width="100" align="center" />
    <el-table-column prop="lat" label="纬度" width="60" align="center" />
    <el-table-column prop="log" label="经度" width="60" align="center" />
    <el-table-column prop="git" label="GIT" width="120" />
    <el-table-column
      prop="email"
      label="邮箱"
      width="130"
      show-overflow-tooltip
    />
    <el-table-column prop="privacy" label="是否冻结" align="center">
      <template #default="scope">{{ scope.row.freeze ? "是" : "否" }}</template>
    </el-table-column>
    <el-table-column prop="freezeCount" label="冻结次数" align="center" />
    <el-table-column prop="unfreezeDate" label="结束冻结时间" width="120">
      <template #default="scope">{{ scope.row.unfreezeDate || "-" }}</template>
    </el-table-column>
    <el-table-column prop="gmtCreate" label="创建时间" width="120" />
    <el-table-column fixed="right" label="" width="60">
      <template #default="scope">
        <el-button link type="primary" @click="freezeGuest(scope.row)"
          >冻结</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    layout="total, sizes, prev, pager, next"
    style="float: right; margin-top: 10px"
    :total="total"
  />
  <DialogForm ref="DialogFormRef" @on-ok="dateOnOk" />
</template>

<style lang="less" scoped>
//@import url();
.tool-wrap {
  margin: 10px 0;
}
</style>
