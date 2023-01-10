<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Message from "@/entity/Message";
import MessageCard from "./components/MessageCard.vue";
import DialogForm from "./components/DialogForm.vue";

enum STATUS_MAP {
  ALL = "ALL",
  READ = "READ",
  UNREAD = "UNREAD",
  DELETE = "DELETE",
}

const DialogFormRef = ref(null);
const status = ref<STATUS_MAP>(STATUS_MAP.ALL);
const total = ref(0);
const data = ref<Message[]>([
  { id: "1", content: "留言1", reply: "回复1", deleteFlag: false },
  { id: "2", content: "留言2", reply: "回复2", deleteFlag: false },
  { id: "3", content: "留言3", reply: "回复3", deleteFlag: false },
  { id: "4", content: "留言4", reply: "回复4", deleteFlag: false },
  { id: "5", content: "留言5", reply: "回复5", deleteFlag: true },
  { id: "6", content: "留言6", reply: "回复6", deleteFlag: false },
]);

const reloadData = () => {
  total.value = data.value.length;
};

const replyOnOk = (message, index) => {
  data.value[index] = Object.assign({}, data[index], message);
};

onMounted(() => {
  reloadData();
});

defineExpose({
  reloadData,
});

const onReplyMessage = (message, index) => {
  DialogFormRef.value.show(message, index);
};
</script>

<template>
  <el-radio-group v-model="status" style="margin-bottom: 10px">
    <el-radio-button :label="STATUS_MAP.ALL">全部</el-radio-button>
    <el-radio-button :label="STATUS_MAP.READ">已阅</el-radio-button>
    <el-radio-button :label="STATUS_MAP.UNREAD">未阅</el-radio-button>
    <el-radio-button :label="STATUS_MAP.DELETE">已删除</el-radio-button>
  </el-radio-group>
  <el-empty description="暂无数据" v-if="data.length === 0" />
  <template v-else>
    <div class="card-wrap">
      <el-row :gutter="20">
        <el-col
          :span="6"
          v-for="(message, index) in data"
          :key="message.id"
          style="margin-bottom: 20px"
        >
          <MessageCard
            :message="message"
            @on-reply="onReplyMessage(message, index)"
            @on-delete="reloadData"
            @on-revert="reloadData"
          />
        </el-col>
      </el-row>
    </div>
    <el-pagination
      layout="total, sizes, prev, pager, next"
      style="float: right; margin-top: 10px"
      :total="total"
    />
  </template>
  <DialogForm ref="DialogFormRef" @on-ok="replyOnOk" />
</template>

<style lang="less" scoped>
.card-wrap {
  height: calc(100% - 115px);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
