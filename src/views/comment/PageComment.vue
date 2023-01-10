<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Comment from "@/entity/Comment";

const router = useRouter();
const total = ref(0);
const guestId = ref("");
const data = ref<Comment[]>([
  {
    id: "1",
    content:
      "回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容1",
    top: false,
    sortNum: null,
    username: "user1",
    reply:
      "评论回复评论回复评论回复评论回复评论回复评论回复评论回复评论回复评论回复评论回复评论回复评论回复评论回复评论回复1",
    replyGmtCreate: "2022-11-01",
    replyUsername: "博主",
    title: "文章1",
    description:
      "文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述1",
    gmtCreate: "2022-05-05",
  },
  {
    id: "2",
    content:
      "回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容2",
    top: false,
    sortNum: null,
    username: "user1",
    reply:
      "评论回复评论回复评论回复评论回复评论回复评论回复评论回复评论回复评论回复评论回复评论回复评论回复评论回复评论回复2",
    replyGmtCreate: "2022-01-01",
    replyUsername: "guest",
    title: "文章2",
    description:
      "文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述2",
    gmtCreate: "2022-03-03",
  },
]);

const reloadData = () => {
  total.value = data.value.length;
};

const detailComment = (comment: Comment) => {
  guestId.value = comment.id;
  router.push({ name: "commentDetail", params: { id: comment.id } });
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
    <el-table-column prop="title" label="文章标题">
      <template #default="scope">
        <span class="table-text-overflow">{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="description" label="文章描述">
      <template #default="scope">
        <span class="table-text-overflow">{{ scope.row.description }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="username" label="用户名">
      <template #default="scope">
        <span class="table-text-overflow">{{ scope.row.username }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="content" label="评论内容">
      <template #default="scope">
        <span class="table-text-overflow">{{ scope.row.content }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="gmtCreate"
      label="评论日期"
      width="100"
      align="center"
    />
    <el-table-column prop="top" label="是否置顶" width="100" align="center">
      <template #default="scope">{{ scope.row.top ? "是" : "否" }}</template>
    </el-table-column>
    <el-table-column prop="sortNum" label="排序号" width="100" align="center" />
    <el-table-column prop="replyUsername" label="回复用户" width="120">
      <template #default="scope">
        <span class="table-text-overflow">{{ scope.row.replyUsername }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="reply" label="回复" width="120" align="center">
      <template #default="scope">
        <span class="table-text-overflow">{{ scope.row.reply }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="replyGmtCreate"
      label="回复日期"
      width="100"
      align="center"
    />
    <el-table-column fixed="right" label="" width="60">
      <template #default="scope">
        <el-button link type="primary" @click="detailComment(scope.row)"
          >详情</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    layout="total, sizes, prev, pager, next"
    style="float: right; margin-top: 10px"
    :total="total"
  />
</template>

<style lang="less" scoped>
@import url("@/assets/style/global.less");
.tool-wrap {
  margin: 10px 0;
}
.table-text-overflow {
  .text-overflow();
}
</style>
