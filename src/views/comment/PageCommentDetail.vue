<script lang="ts" setup>
import { ref } from "vue";
import DialogForm from "./components/DialogForm.vue";

const DialogFormRef = ref();

const dateOnOk = (date) => {};
</script>

<template>
  
  <DialogForm ref="DialogFormRef" @on-ok="dateOnOk" />
</template>

<style lang="less" scoped>
//@import url();
</style>
