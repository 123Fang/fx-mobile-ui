
<template>
  <div class="icsm-cell-group-container">
    组件
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'icsm-cell-group',
})
const emit = defineEmits([])
const props = defineProps({})

// init here
</script>
<style lang="scss" scoped>
.icsm-cell-group-container {}
</style>
