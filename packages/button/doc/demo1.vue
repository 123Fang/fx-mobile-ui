<!-- html -->
<template>
  <div class="demo-box-icsm-button">
    <icsm-button type="primary">主要按钮</icsm-button>
    <icsm-button type="success">成功按钮</icsm-button>
    <icsm-button type="default">默认按钮</icsm-button>
    <icsm-button type="danger">危险按钮</icsm-button>
    <icsm-button type="warning">警告按钮</icsm-button>
    <icsm-button plain type="primary">朴素按钮</icsm-button>
    <icsm-button plain type="success">朴素按钮</icsm-button>
    <icsm-button plain hairline type="primary">细边框按钮</icsm-button>
    <icsm-button plain hairline type="success">细边框按钮</icsm-button>
    <icsm-button disabled type="primary">禁用状态</icsm-button>
    <icsm-button disabled type="success">禁用状态</icsm-button>
    <icsm-button loading type="primary" />
    <icsm-button loading type="primary" loading-type="spinner" />
    <icsm-button loading type="success" loading-text="加载中..." />
    <icsm-button square type="primary">方形按钮</icsm-button>
    <icsm-button round type="success">圆形按钮</icsm-button>
    <icsm-button icon="plus" type="primary" />
    <icsm-button icon="plus" type="primary">按钮</icsm-button>
    <icsm-button
      plain
      icon="https://fastly.jsdelivr.net/npm/@icsmt/assets/user-active.png"
      type="primary"
    >
      按钮
    </icsm-button>
    <icsm-button type="primary" size="large">大号按钮</icsm-button>
    <icsm-button type="primary" size="normal">普通按钮</icsm-button>
    <icsm-button type="primary" size="small">小型按钮</icsm-button>
    <icsm-button type="primary" size="mini">迷你按钮</icsm-button>
    <icsm-button type="primary" block>块级元素</icsm-button>
    <icsm-button type="primary" url="https://github.com">URL 跳转</icsm-button>
    <icsm-button type="primary" to="index">路由跳转</icsm-button>
    <icsm-button color="#7232dd">单色按钮</icsm-button>
    <icsm-button color="#7232dd" plain>单色按钮</icsm-button>
    <icsm-button color="linear-gradient(to right, #ff6034, #ee0a24)"> 渐变色按钮 </icsm-button>
    <icsm-button type="danger" round>
      <icsm-swipe
        vertical
        class="notice-swipe"
        :autoplay="2000"
        :touchable="false"
        :show-indicators="false"
      >
        <icsm-swipe-item>做任务</icsm-swipe-item>
        <icsm-swipe-item>抽大奖</icsm-swipe-item>
      </icsm-swipe>
    </icsm-button>
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
