<!-- html -->
<template>
  <icsm-cell title="展示弹出层" is-link @click="showPopup" />
  <icsm-popup v-model:show="show" :style="{ padding: '64px' }">内容</icsm-popup>
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
