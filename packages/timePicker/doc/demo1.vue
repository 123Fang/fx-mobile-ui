<!-- html -->
<template>
  <icsm-time-picker v-model="currentTime" title="选择时间" @cancel="cancel"></icsm-time-picker>
  <div>{{currentTime}}</div>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";

const currentTime = ref(['12', '00']);

const cancel = (val)=>{
  console.log('cancel',val)
}

// init
</script>
