<script setup lang="ts">
// import VanSwipe from '..';
// import VanSwipeItem from '../../swipe-item';
// import { cdnURL, useTranslate } from '../../../docs/site';
import { cdnURL, useTranslate } from '@/docs/site';
import { showToast } from 'fx-mobile-ui';

const t = useTranslate({
  'zh-CN': {
    title2: '懒加载',
    title3: '监听 change 事件',
    title4: '纵向滚动',
    title5: '自定义滑块大小',
    title6: '自定义指示器',
    message: '当前 Swipe 索引：',
  },
  'en-US': {
    title2: 'Lazy Render',
    title3: 'Change Event',
    title4: 'Vertical Scrolling',
    title5: 'Set SwipeItem Size',
    title6: 'Custom indicator',
    message: 'Current Swipe index:',
  },
});

const images = [
  cdnURL('apple-1.jpeg'),
  cdnURL('apple-2.jpeg'),
  cdnURL('apple-3.jpeg'),
  cdnURL('apple-4.jpeg'),
];

const onChange = (index: number) => showToast(t('message') + index);
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <fx-swipe :autoplay="3000" indicator-color="white">
      <fx-swipe-item>1</fx-swipe-item>
      <fx-swipe-item>2</fx-swipe-item>
      <fx-swipe-item>3</fx-swipe-item>
      <fx-swipe-item>4</fx-swipe-item>
   </fx-swipe>
  </demo-block>

  <demo-block :title="t('title2')">
    <fx-swipe :autoplay="3000" lazy-render>
      <fx-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
     </fx-swipe-item>
   </fx-swipe>
  </demo-block>

  <demo-block :title="t('title3')">
    <fx-swipe indicator-color="white" @change="onChange">
      <fx-swipe-item>1</fx-swipe-item>
      <fx-swipe-item>2</fx-swipe-item>
      <fx-swipe-item>3</fx-swipe-item>
      <fx-swipe-item>4</fx-swipe-item>
   </fx-swipe>
  </demo-block>

  <demo-block :title="t('title4')">
    <fx-swipe
      vertical
      :autoplay="3000"
      indicator-color="white"
      style="height: 200px"
      class="demo-swipe--vertical"
    >
      <fx-swipe-item>1</fx-swipe-item>
      <fx-swipe-item>2</fx-swipe-item>
      <fx-swipe-item>3</fx-swipe-item>
      <fx-swipe-item>4</fx-swipe-item>
   </fx-swipe>
  </demo-block>

  <demo-block :title="t('title5')">
    <fx-swipe :width="300" :loop="false" indicator-color="white">
      <fx-swipe-item>1</fx-swipe-item>
      <fx-swipe-item>2</fx-swipe-item>
      <fx-swipe-item>3</fx-swipe-item>
      <fx-swipe-item>4</fx-swipe-item>
   </fx-swipe>
  </demo-block>

  <demo-block :title="t('title6')">
    <fx-swipe>
      <fx-swipe-item>1</fx-swipe-item>
      <fx-swipe-item>2</fx-swipe-item>
      <fx-swipe-item>3</fx-swipe-item>
      <fx-swipe-item>4</fx-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
   </fx-swipe>
  </demo-block>
</template>

<style lang="scss">
.demo-swipe {
  padding-bottom: 30px;

  .fx-swipe {
    &-item {
      color: var(--fx-white);
      font-size: 20px;
      line-height: 150px;
      text-align: center;

      &:nth-child(even) {
        background-color: #39a9ed;
      }

      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }

    img {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 240px;
      padding: 30px 60px;
      background-color: var(--fx-white);
      pointer-events: none;
    }
  }

  &--vertical {
    .fx-swipe-item {
      line-height: 200px;
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    color: var(--fx-white);
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
