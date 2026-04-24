<template>

  <icsm-cell is-link title="自定义图标" @click="showToast({
    message: '自定义图标',
    icon: 'like-o',
  })" />

  <icsm-cell is-link title="自定义图片" @click="showToast({
    message: '自定义图片',
    icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
  })" />

</template>

<script setup>
import {
  showToast,
} from "ctf-ics-mobile-ui";

</script>
