
<template>
  <van-contact-list v-bind="$attrs"  ref="innerRef">

    <!-- 透传所有插槽 -->
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" :key="name" />
    </template>

  </van-contact-list>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'fx-contact-list',
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
.fx-contact-list-container {}
</style>
