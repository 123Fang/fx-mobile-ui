
<template>
  <van-image v-bind="$attrs">

    <!-- 透传所有插槽 -->
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" :key="name" />
    </template>

  </van-image>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'icsm-image',
})
const emit = defineEmits([])
const props = defineProps({})

// init here
</script>
<style lang="scss" scoped>
.icsm-image-container {}
</style>
