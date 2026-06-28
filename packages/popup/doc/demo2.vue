<template>
  <fx-grid clickable>
    <fx-grid-item icon="arrow-up" text="顶部弹出" @click="showTop = true" />
    <fx-grid-item icon="arrow-down" text="底部弹出" @click="showBottom = true" />
    <fx-grid-item icon="arrow-left" text="左侧弹出" @click="showLeft = true" />
    <fx-grid-item icon="arrow" text="右侧弹出" @click="showRight = true" />
 </fx-grid>

  <!-- 顶部弹出 -->
  <fx-popup v-model:show="showTop" position="top" :style="{ height: '30%' }" />
  <!-- 底部弹出 -->
  <fx-popup v-model:show="showBottom" position="bottom" :style="{ height: '30%' }" />
  <!-- 左侧弹出 -->
  <fx-popup v-model:show="showLeft" position="left" :style="{ width: '30%', height: '100%' }" />
  <!-- 右侧弹出 -->
  <fx-popup v-model:show="showRight" position="right" :style="{ width: '30%', height: '100%' }" />
</template>
<script setup>
import { ref } from 'vue'
const showTop = ref(false)
const showBottom = ref(false)
const showLeft = ref(false)
const showRight = ref(false)
</script>
