<template>
  <div class="iframe-demo-container">
    <div class="title">{{title}}</div>
     <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: '基本使用'
    }
})
</script>
<style lang="scss">
.iframe-demo-container {
  padding: 10px;
  .title {
    margin-bottom: 6px;
    color: #969799;
  }
}
</style>
