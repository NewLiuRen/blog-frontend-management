<script lang="ts" setup>
import { ref } from "vue";

const emits = defineEmits<{
  (e: "on-ok", date: string): void;
}>();

let isShow = ref(false);
const date = ref("");

const show = () => {
  isShow.value = true;
};

const hide = () => {
  isShow.value = false;
  reset();
};

const reset = () => {
  date.value = "";
};

const ok = () => {
  emits("on-ok", date.value);
  hide();
};

defineExpose({
  show,
  hide,
});
</script>

<template>
  <el-dialog v-model="isShow" title="选择冻结到的日期" :width="300">
    <el-date-picker v-model="date" type="date" style="width: 260px" />

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
</style>
