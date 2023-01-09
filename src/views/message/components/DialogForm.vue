<script lang="ts" setup>
import { ref, toRaw } from "vue";
import Message from "@/entity/Message";

const emits = defineEmits<{
  (e: "on-ok", date: string, index: number): void;
}>();

let isShow = ref(false);
const currentMessage = ref<Message>();
let index = ref(0);

const show = (message: Message, i: number) => {
  currentMessage.value = Object.assign({}, message);
  index.value = i;
  isShow.value = true;
};

const hide = () => {
  isShow.value = false;
  reset();
};

const reset = () => {
  currentMessage.value = "";
};

const ok = () => {
  emits("on-ok", toRaw(currentMessage.value), index.value);
  hide();
};

const replyOnChange = (value) => {
  currentMessage.value.reply = value;
};

defineExpose({
  show,
  hide,
});
</script>

<template>
  <el-dialog v-model="isShow" title="留言" :width="600">
    <el-input
      type="textarea"
      :maxlength="200"
      :show-word-limit="true"
      :model-value="currentMessage.content"
      :autosize="{ minRows: 4, maxRows: 6 }"
      readonly
    />
    <div class="cutting-line"></div>
    <el-input
      type="textarea"
      :maxlength="200"
      :show-word-limit="true"
      :model-value="currentMessage.reply"
      :autosize="{ minRows: 4, maxRows: 6 }"
      @input="replyOnChange"
    />

    <template #footer>
      <span class="dialog-footer">
        <el-button plain @click="hide">关闭</el-button>
        <el-button type="primary" plain @click="ok">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="less" scoped>
//@import url();
.cutting-line {
  margin: 10px 0;
  border-bottom: 1px dashed #999;
}
</style>
