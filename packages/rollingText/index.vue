
<template>
  <van-rolling-text v-bind="$attrs"  ref="innerRef">

    <!-- 透传所有插槽 -->
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" :key="name" />
    </template>

  </van-rolling-text>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'icsm-rolling-text',
})
const emit = defineEmits([])
const props = defineProps({})

const innerRef = ref(null)
defineExpose({
  innerRef, /** 暴露 element plus 组件 ref **/
})

// init here
</script>
<style lang="scss" scoped>
.icsm-rolling-text-container {}
</style>
