<!-- html -->
<template>
  <icsm-picker-group
    title="预约日期"
    :tabs="['选择日期', '选择时间']"
    @confirm="onConfirm"
    @cancel="onCancel"
  >
    <icsm-date-picker v-model="currentDate" :min-date="minDate" :max-date="maxDate" />
    <icsm-time-picker v-model="currentTime" />
  </icsm-picker-group>
</template>

<!-- js -->
<script setup>
import { ref } from 'vue'
const currentDate = ref(['2022', '06', '01'])
const currentTime = ref(['12', '00'])
const minDate = new Date(2020, 0, 1)
const maxDate = new Date(2025, 5, 1)

const onConfirm = val => {
  console.log(`onConfirm:`, val)
}

const onCancel = (val) => {
   console.log(`onCancel:`, val)
}
</script>
