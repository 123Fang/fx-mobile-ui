
<template>
  <van-swipe v-bind="$attrs">

    <!-- 透传所有插槽 -->
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" :key="name" />
    </template>

  </van-swipe>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'fx-swipe',
})
const emit = defineEmits([])
const props = defineProps({})

// init here
</script>
<style lang="scss" scoped>
.fx-swipe-container {}
</style>
