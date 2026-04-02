<template>
  <div>
    <van-cell title="选择单个日期" :value="date" @click="show = true" />

    <van-calendar v-model:show="show" @confirm="onConfirm" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'icsm-calendar',
}
</script>
<script lang="ts" setup>
import { ref, useSlots, watch } from 'vue'
const date = ref('')
const show = ref(false)

const formatDate = date => {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}

const onConfirm = value => {
  show.value = false
  date.value = formatDate(value)
}
</script>

