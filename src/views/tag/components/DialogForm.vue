<script lang="ts" setup>
import { ref, reactive, toRaw, computed } from "vue";
import Tag from "@/entity/Tag";

const emits = defineEmits<{
  (e: "on-ok", tag: Tag): void;
}>();

let isShow = ref(false);
const formData: Tag = reactive({
  id: "",
  name: "",
  icon: "",
  color: "",
  privacy: false,
});

const setData = (tag: Tag) => {
  formData.id = tag.id;
  formData.name = tag.name;
  formData.icon = tag.icon;
  formData.color = tag.color;
  formData.privacy = tag.privacy;
};

const show = (tag: Tag) => {
  isShow.value = true;
  setData(tag);
};

const hide = () => {
  isShow.value = false;
  reset();
};

const reset = () => {
  setData({
    id: "",
    name: "",
    icon: "",
    color: "",
    privacy: false,
  });
};

const ok = () => {
  emits("on-ok", toRaw(formData));
};

const calcTitle = computed(() => {
  return !formData.id ? "新建" : `编辑：${formData.name}`;
});

defineExpose({
  show,
  hide,
});
</script>

<template>
  <el-dialog v-model="isShow" :title="calcTitle" :width="500">
    <el-form :model="formData" label-position="right" label-width="100px">
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
    </el-form>
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
