<script lang="ts" setup>
import { reactive } from "vue";
import Category from "@/entity/Category";

const emits = defineEmits<{
  (e: "on-cancel"): void;
}>();

const formData: Category = reactive({
  name: "",
  icon: "",
  color: "",
  privacy: false,
});

const setFormData = (data) => {
  formData.name = data.name;
  formData.icon = data.icon;
  formData.color = data.color;
  formData.privacy = data.privacy;
};

const resetFormData = () => {
  formData.name = "";
  formData.icon = "";
  formData.color = "";
  formData.privacy = false;
};

// TODO: 提交
const submit = () => {};

const cancel = () => {
  emits("on-cancel");
  resetFormData();
};

defineExpose({
  setFormData,
});
</script>

<template>
  <el-form
    :model="formData"
    label-position="right"
    label-width="100px"
    style="max-width: 460px; margin-top: 100px"
  >
    <el-form-item label="名称：">
      <el-input v-model="formData.name" />
    </el-form-item>
    <el-form-item label="图标：">
      <el-input v-model="formData.icon" />
    </el-form-item>
    <el-form-item label="颜色：">
      <el-color-picker v-model="formData.color" show-alpha />
    </el-form-item>
    <el-form-item label="私有：">
      <el-switch v-model="formData.privacy" />
    </el-form-item>
    <el-form-item>
      <el-button plain @click="cancel">关闭</el-button>
      <el-button type="primary" plain @click="submit">确定</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="less" scoped>
//@import url();
</style>
