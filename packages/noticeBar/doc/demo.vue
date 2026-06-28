<script setup lang="ts">
// import VanNoticeBar from '..';
// import VanSwipe from '../../swipe';
// import VanSwipeItem from '../../swipe-item';
import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    mode: '通知栏模式',
    text1: '无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。',
    text2:
      '不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会。',
    haiku: '米袋虽空——樱花开哉！',
    poetry1: '明月直入，无心可猜。',
    poetry2: '仙人抚我顶，结发受长生。',
    poetry3: '今人不见古时月，今月曾经照古人。',
    wrapable: '多行展示',
    scrollable: '滚动播放',
    customStyle: '自定义样式',
    verticalScroll: '垂直滚动',
  },
  'en-US': {
    mode: 'Mode',
    text1: 'Technology is the common soul of the people who developed it.',
    text2: 'Technology is the common soul of the people who developed it.',
    haiku: 'Short Content',
    poetry1: 'Content 1',
    poetry2: 'Content 2',
    poetry3: 'Content 3',
    wrapable: 'Wrapable',
    customStyle: 'Custom Style',
    scrollable: 'Scrollable',
    verticalScroll: 'Vertical Scroll',
  },
});
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <fx-notice-bar :text="t('text1')" scrollable left-icon="volume-o" />
  </demo-block>

  <demo-block :title="t('scrollable')">
    <fx-notice-bar scrollable :text="t('haiku')" />
    <fx-notice-bar :scrollable="false" :text="t('text2')" />
  </demo-block>

  <demo-block :title="t('wrapable')">
    <fx-notice-bar wrapable :scrollable="false" :text="t('text2')" />
  </demo-block>

  <demo-block :title="t('mode')">
    <fx-notice-bar mode="closeable" :text="t('haiku')" />
    <fx-notice-bar mode="link" :text="t('haiku')" />
  </demo-block>

  <demo-block :title="t('customStyle')">
    <fx-notice-bar
      :text="t('haiku')"
      color="#1989fa"
      background="#ecf9ff"
      left-icon="info-o"
    />
  </demo-block>

  <demo-block :title="t('verticalScroll')">
    <fx-notice-bar left-icon="volume-o" :scrollable="false">
      <fx-swipe
        vertical
        class="notice-swipe"
        :autoplay="3000"
        :touchable="false"
        :show-indicators="false"
      >
        <fx-swipe-item>{{ t('poetry1') }}</fx-swipe-item>
        <fx-swipe-item>{{ t('poetry2') }}</fx-swipe-item>
        <fx-swipe-item>{{ t('poetry3') }}</fx-swipe-item>
     </fx-swipe>
   </fx-notice-bar>
  </demo-block>
</template>

<style lang="scss">
.demo-notice-bar {
  .fx-notice-bar:not(:first-of-type) {
    margin-top: 4px;
  }

  .fx-doc-demo-block__title {
    padding-top: 24px;
  }

  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
}
</style>


