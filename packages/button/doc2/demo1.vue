<!-- html -->
<template>
  <div class="demo-box-icsm-button">
    <fx-button type="primary">主要按钮</fx-button>
    <fx-button type="success">成功按钮</fx-button>
    <fx-button type="default">默认按钮</fx-button>
    <fx-button type="danger">危险按钮</fx-button>
    <fx-button type="warning">警告按钮</fx-button>
    <fx-button plain type="primary">朴素按钮</fx-button>
    <fx-button plain type="success">朴素按钮</fx-button>
    <fx-button plain hairline type="primary">细边框按钮</fx-button>
    <fx-button plain hairline type="success">细边框按钮</fx-button>
    <fx-button disabled type="primary">禁用状态</fx-button>
    <fx-button disabled type="success">禁用状态</fx-button>
    <fx-button loading type="primary" />
    <fx-button loading type="primary" loading-type="spinner" />
    <fx-button loading type="success" loading-text="加载中..." />
    <fx-button square type="primary">方形按钮</fx-button>
    <fx-button round type="success">圆形按钮</fx-button>
    <fx-button icon="plus" type="primary" />
    <fx-button icon="plus" type="primary">按钮</fx-button>
    <fx-button
      plain
      icon="https://fastly.jsdelivr.net/npm/@icsmt/assets/user-active.png"
      type="primary"
    >
      按钮
   </fx-button>
    <fx-button type="primary" size="large">大号按钮</fx-button>
    <fx-button type="primary" size="normal">普通按钮</fx-button>
    <fx-button type="primary" size="small">小型按钮</fx-button>
    <fx-button type="primary" size="mini">迷你按钮</fx-button>
    <fx-button type="primary" block>块级元素</fx-button>
    <fx-button type="primary" url="https://github.com">URL 跳转</fx-button>
    <fx-button type="primary" to="index">路由跳转</fx-button>
    <fx-button color="#7232dd">单色按钮</fx-button>
    <fx-button color="#7232dd" plain>单色按钮</fx-button>
    <fx-button color="linear-gradient(to right, #ff6034, #ee0a24)"> 渐变色按钮</fx-button>
    <fx-button type="danger" round>
      <fx-swipe
        vertical
        class="notice-swipe"
        :autoplay="2000"
        :touchable="false"
        :show-indicators="false"
      >
        <fx-swipe-item>做任务</fx-swipe-item>
        <fx-swipe-item>抽大奖</fx-swipe-item>
     </fx-swipe>
   </fx-button>
  </div>
</template>

<!-- js -->
<script setup>
import { ref } from 'vue'
</script>

<style>
.demo-box-icsm-button {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
</style>
