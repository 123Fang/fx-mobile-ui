<!-- html -->
<template>
  <icsm-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <icsm-swipe-item>1</icsm-swipe-item>
  <icsm-swipe-item>2</icsm-swipe-item>
  <icsm-swipe-item>3</icsm-swipe-item>
  <icsm-swipe-item>4</icsm-swipe-item>
</icsm-swipe>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";


</script>
<style>
  .my-swipe .icsm-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
