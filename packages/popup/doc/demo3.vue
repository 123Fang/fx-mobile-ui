<template>
  <fx-cell title="关闭图标" is-link @click="showCloseIcon = true" />
  <fx-cell title="自定义图标" is-link @click="showCustomCloseIcon = true" />
  <fx-cell title="图标位置" is-link @click="showCustomIconPosition = true" />

  <fx-popup v-model:show="showCloseIcon" closeable position="bottom" :style="{ height: '30%' }" />
  <fx-popup v-model:show="showCustomCloseIcon" closeable close-icon="close" position="bottom"
    :style="{ height: '30%' }" />
  <fx-popup v-model:show="showCustomIconPosition" closeable close-icon-position="top-left" position="bottom"
    :style="{ height: '30%' }" />

</template>
<script setup>
import { ref } from 'vue';
const showCloseIcon = ref(false);
const showCustomCloseIcon = ref(false);
const showCustomIconPosition = ref(false);
</script>
