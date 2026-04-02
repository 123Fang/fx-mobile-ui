<!-- html -->
<template>
 <icsm-calendar v-model:show="show" @confirm="onConfirm"></icsm-calendar>
 <button @click="show = !show">show</button>
</template>

<!-- js -->
<script setup>
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

