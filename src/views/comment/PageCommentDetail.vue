<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Comment from "@/entity/Comment";

let currentId = ref<string>();
const route = useRoute();
const comment = ref<Comment>();
const isReadonly = ref<boolean>(false);
const data: Comment = {
  id: "1",
  content:
    "回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容",
  top: false,
  sortNum: 1,
  username: "游客1",
  reply: "回复回复回复回复回复回复回复回复回复回复",
  replyGmtCreate: "2022-02-02",
  replyUsername: "博主",
  title:
    "文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题",
  description:
    "文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述文章描述",
  gmtCreate: "2021-01-01",
};

const contentOnChange = (value) => {
  comment.value.content = value;
};

const reloadData = (id: string) => {
  currentId.value = id;
  comment.value = data;
  isReadonly.value = !!data.content;
};

watchEffect(() => {
  reloadData(route.params.id as string);
});
</script>

<template>
  <div class="detail-wrap">
    <div class="title-wrap">
      标题：<b>{{ comment.title }}</b>
    </div>
    <div class="content-wrap">描述：{{ comment.description }}......</div>
    <el-input
      type="textarea"
      :readonly="isReadonly"
      :maxlength="200"
      :show-word-limit="true"
      :model-value="comment.content"
      :autosize="{ minRows: 4, maxRows: 6 }"
      @input="contentOnChange"
    />
  </div>
</template>

<style lang="less" scoped>
@import url("@/assets/style/global.less");

.detail-wrap {
  padding: 15px 0;
}
.title-wrap {
  .text-overflow();
  b {
    font-size: 18px;
  }
}
.content-wrap {
  height: 48px;
  margin: 10px 0;
  color: #666;
  .multiple-text-overflow();
}
</style>
