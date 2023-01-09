<script lang="ts" setup>
import Message from "@/entity/Message";
import { InfoFilled } from "@element-plus/icons-vue";

defineProps<{
  message: Message;
}>();

const emits = defineEmits<{
  (e: "on-reply"): void;
  (e: "on-delete"): void;
  (e: "on-revert"): void;
}>();

const replyMessage = () => {
  emits("on-reply");
};

const deleteMessage = () => {
  emits("on-delete");
};

const revertMessage = () => {
  emits("on-revert");
};
</script>

<template>
  <el-card shadow="hover">
    <template #header>
      <el-tag v-if="message.view" type="success" effect="plain">已阅</el-tag>
      <el-tag v-else effect="plain">未阅</el-tag>
      <el-button
        v-if="!message.view"
        type="primary"
        style="float: right; margin-left: 10px"
        size="small"
        plain
        @click="replyMessage"
        >回复</el-button
      >
      <el-popconfirm
        v-if="!message.deleteFlag"
        width="220"
        :icon="InfoFilled"
        icon-color="#f7be55"
        title="是否删除这条留言?"
        @confirm="deleteMessage"
      >
        <template #reference>
          <el-button type="danger" plain style="float: right" size="small"
            >删除</el-button
          >
        </template>
      </el-popconfirm>
      <template v-else>
        <el-button
          type="info"
          plain
          style="float: right"
          size="small"
          @click="revertMessage"
          >撤销</el-button
        >
        <el-button
          type="danger"
          plain
          style="float: right; margin-left: 10px"
          size="small"
          @click="revertMessage"
          >删除</el-button
        >
      </template>
    </template>
    <div class="content-wrap" @click="replyMessage">{{ message.content }}</div>
    <div class="cutting-line"></div>
    <div class="reply-wrap" @click="replyMessage">
      reply: {{ message.reply }}
    </div>
  </el-card>
</template>

<style lang="less" scoped>
@import url("@/assets/style/global.less");

.content-wrap,
.reply-wrap {
  height: 70px;
  cursor: pointer;
  .multiple-text-overflow(3);
}
.reply-wrap {
  color: #999;
}
.cutting-line {
  margin: 10px 0;
  border-bottom: 1px dashed #999;
}
:deep(.el-card__header) {
  padding: 5px;
}
:deep(.el-card__body) {
  padding: 10px;
}
</style>
