
<template>
  <div class="icsm-checkbox-container">
     组件
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'icsm-checkbox',
})
const emit = defineEmits([])
const props = defineProps({})

// init here
</script>
<style lang="scss" scoped>
.icsm-checkbox-container {}
</style>
