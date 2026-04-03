<!-- html -->
<template>
  <icsm-radio-group v-model="checked">
  <icsm-radio name="1">单选框 1</icsm-radio>
  <icsm-radio name="2">单选框 2</icsm-radio>
</icsm-radio-group>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const checked = ref('1');


</script>
