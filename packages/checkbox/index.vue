
<template>
  <van-checkbox v-bind="$attrs">
    <!-- 透传所有插槽 -->
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>
  </van-checkbox>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'fx-checkbox'
})
const emit = defineEmits([])
const props = defineProps({})

// init here
</script>
<style lang="scss" scoped>
.fx-checkbox-container {
}
</style>
