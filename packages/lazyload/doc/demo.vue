

<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';

const t = useTranslate({
  'zh-CN': {
    title2: '背景图懒加载',
    title3: '懒加载模块',
  },
  'en-US': {
    title2: 'Lazyload Background Image',
    title3: 'Lazyload Component',
  },
});

const imageList = [
  cdnURL('apple-1.jpeg'),
  cdnURL('apple-2.jpeg'),
  cdnURL('apple-3.jpeg'),
  cdnURL('apple-4.jpeg'),
];
const backgroundImageList = [cdnURL('apple-5.jpeg'), cdnURL('apple-6.jpeg')];
const componentImageList = [cdnURL('apple-8.jpeg'), cdnURL('apple-7.jpeg')];
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <img v-for="img in imageList" :key="img" v-lazy="img" />
  </demo-block>

  <demo-block :title="t('title2')">
    <div
      v-for="img in backgroundImageList"
      :key="img"
      v-lazy:background-image="img"
    />
  </demo-block>

  <demo-block :title="t('title3')">
    <!--- v-lazy指令 和  lazy-component组件 已全局注册-->
    <lazy-component>
      <img v-for="img in componentImageList" :key="img" v-lazy="img" />
    </lazy-component>
  </demo-block>
</template>

<style lang="css">
.demo-lazyload {
  padding-right: var(--fx-padding-md);
  padding-left: var(--fx-padding-md);

  img,
  div[lazy] {
    box-sizing: border-box;
    width: 100%;
    height: 250px;
    margin-bottom: var(--fx-padding-md);
    padding: var(--fx-padding-md);
    background-color: white;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 12px;
  }

  .fx-doc-demo-block__title,
  .fx-doc-demo-section__title {
    padding-left: 0;
  }
}
</style>
