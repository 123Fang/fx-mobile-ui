<template>
   <van-picker-group v-bind="$attrs">
    <!-- 透传所有插槽 -->
     <slot ></slot>
    <!-- <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template> -->
  </van-picker-group>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
defineOptions({
  name: 'fx-picker-group',
})

</script>

<style lang="less" scoped>
</style>
