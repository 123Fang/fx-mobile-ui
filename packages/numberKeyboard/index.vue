
<template>
  <div class="icsm-number-keyboard-container">
    组件
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'icsm-number-keyboard',
})
const emit = defineEmits([])
const props = defineProps({})

// init here
</script>
<style lang="scss" scoped>
.icsm-number-keyboard-container {}
</style>
