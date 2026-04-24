<template>
  <icsm-cell title="圆角弹窗（居中）" is-link @click="showRoundCornerCenter = true" />
  <icsm-popup v-model:show="showRoundCornerCenter" round :style="{ padding: '64px' }" />

  <icsm-cell title="圆角弹窗（底部）" is-link @click="showRoundCornerBottom = true" />
  <icsm-popup v-model:show="showRoundCornerBottom" round position="bottom" :style="{ height: '30%' }" />
</template>

<script setup>
import { ref } from 'vue'
const showRoundCornerBottom = ref(false);
const showRoundCornerCenter = ref(false);
</script>
