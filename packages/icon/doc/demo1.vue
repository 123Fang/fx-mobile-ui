<!-- html -->
<template>
  <div class="demo-box-icsm-icon demo-icon">
    <icsm-icon name="chat-o" />
    <icsm-icon name="chat-o" dot />
    <icsm-icon name="chat-o" badge="9" />
    <icsm-icon name="chat-o" badge="99+" />
    <icsm-icon name="cart-o" color="#1989fa" />
    <icsm-icon name="fire-o" color="#ee0a24" />
    <!-- 不指定单位，默认使用 px -->
    <icsm-icon name="chat-o" size="40" />
    <!-- 指定使用 rem 单位 -->
    <icsm-icon name="chat-o" size="3rem" />
  </div>
</template>

<!-- js -->
<script setup>
import { ref } from 'vue'


</script>

<style>
.demo-box-icsm-icon {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}
.demo-icon {
  font-size: 32px;
}
</style>

