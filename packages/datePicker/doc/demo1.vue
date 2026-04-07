<!-- html -->
<template>
  <icsm-date-picker v-model="currentDate" title="选择日期" :min-date="minDate" :max-date="maxDate">
  </icsm-date-picker>
  <div>{{currentDate}}</div>
</template>

<!-- js -->
<script setup>
import { ref } from 'vue'

const currentDate = ref(['2021', '01', '01'])
const minDate = new Date(2020, 0, 1)
const maxDate = new Date(2025, 5, 1)

// init
</script>
