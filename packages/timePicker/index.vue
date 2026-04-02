
<template>
  <van-time-picker v-bind="$attrs">

     <!-- 透传所有插槽 -->
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>

  </van-time-picker>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'icsm-time-picker',
})
const emit = defineEmits([])
const props = defineProps({})

// init here
</script>
<style lang="scss" scoped>
.icsm-timePicker-container {}
</style>
