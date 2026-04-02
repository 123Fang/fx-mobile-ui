<!-- html -->
<template>
  <icsm-checkbox v-model="checked">复选框</icsm-checkbox>
  <div>{{checked}}</div>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const checked = ref(true);

// init
</script>
