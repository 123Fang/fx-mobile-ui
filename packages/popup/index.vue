
<template>
  <div class="icsm-popup-container">
    组件
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'icsm-popup',
})
const emit = defineEmits([])
const props = defineProps({})

// init here
</script>
<style lang="scss" scoped>
.icsm-popup-container {}
</style>
