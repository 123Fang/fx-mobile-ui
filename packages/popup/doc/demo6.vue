<!-- html -->
<template>
  <fx-cell title="展示弹出层" is-link @click="showPopup" />
  <fx-popup v-model:show="show" :style="{ padding: '64px' }">内容</fx-popup>
</template>

<!-- js -->
<script setup>
import { ref } from 'vue'

const show = ref(false)
const showPopup = () => {
  show.value = true
}

// init
</script>
