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
  border-radius: 8px ;
  .title {
    margin-bottom: 6px;
    color: #969799;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
