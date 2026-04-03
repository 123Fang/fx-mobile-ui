<!-- html -->
<template>
  <icsm-cell @touchstart.stop="show = true">弹出默认键盘</icsm-cell>
  <icsm-number-keyboard :show="show" @blur="show = false" @input="onInput" @delete="onDelete" />
</template>

<!-- js -->
<script setup>
import { reactive, ref } from 'vue'

const show = ref(true)
const onInput = value => {
  // showToast(value)
}
const onDelete = () => {
  // showToast('删除')
}

// init
</script>
