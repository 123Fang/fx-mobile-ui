
<template>
  <van-cell-group v-bind="$attrs">
   
   <template v-for="(_, name) in slots" :key="name" #[name]="slotProps">
    <slot :name="name" v-bind="slotProps" :key="name"/>
  </template>
  </van-cell-group>
</template>

<script setup>
import { ref,useSlots } from 'vue'
  const slots = useSlots();
  console.log('slots',slots)

defineOptions({
  name: 'icsm-cell-group'
})
const emit = defineEmits([])
const props = defineProps({})

// init here
</script>
<style lang="scss" scoped>
.icsm-cell-group-container {
}
</style>
