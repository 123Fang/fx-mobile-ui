<script setup lang="ts">

import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    text: '文字',
    route: '页面导航',
    gutter: '格子间距',
    square: '正方形格子',
    columnNum: '自定义列数',
    customContent: '自定义内容',
    urlRoute: 'URL 跳转',
    vueRoute: '路由跳转',
    showBadge: '徽标提示',
    horizontal: '内容横排',
  },
  'en-US': {
    text: 'Text',
    route: 'Route',
    gutter: 'Gutter',
    square: 'Square',
    columnNum: 'Column Num',
    customContent: 'Custom Content',
    urlRoute: 'URL',
    vueRoute: 'Vue Router',
    showBadge: 'Show Badge',
    horizontal: 'Horizontal',
  },
});
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <fx-grid>
      <fx-grid-item v-for="i in 4" :key="i" icon="photo-o" :text="t('text')" />
   </fx-grid>
  </demo-block>

  <demo-block :title="t('columnNum')">
    <fx-grid :column-num="3">
      <fx-grid-item v-for="i in 6" :key="i" icon="photo-o" :text="t('text')" />
   </fx-grid>
  </demo-block>

  <demo-block :title="t('customContent')">
    <fx-grid :border="false" :column-num="3">
      <fx-grid-item>
        <fx-image fit="contain" :src="cdnURL('apple-1.jpeg')" />
     </fx-grid-item>
      <fx-grid-item>
        <fx-image fit="contain" :src="cdnURL('apple-2.jpeg')" />
     </fx-grid-item>
      <fx-grid-item>
        <fx-image fit="contain" :src="cdnURL('apple-3.jpeg')" />
     </fx-grid-item>
   </fx-grid>
  </demo-block>

  <demo-block :title="t('square')">
    <fx-grid square>
      <fx-grid-item v-for="i in 8" :key="i" icon="photo-o" :text="t('text')" />
   </fx-grid>
  </demo-block>

  <demo-block :title="t('gutter')">
    <fx-grid :gutter="10">
      <fx-grid-item v-for="i in 8" :key="i" icon="photo-o" :text="t('text')" />
   </fx-grid>
  </demo-block>

  <demo-block :title="t('horizontal')">
    <fx-grid direction="horizontal" :column-num="3">
      <fx-grid-item icon="photo-o" :text="t('text')" />
      <fx-grid-item icon="photo-o" :text="t('text')" />
      <fx-grid-item icon="photo-o" :text="t('text')" />
   </fx-grid>
  </demo-block>

  <demo-block :title="t('route')">
    <fx-grid clickable :column-num="2">
      <fx-grid-item icon="home-o" :text="t('vueRoute')" to="/" />
      <fx-grid-item
        icon="search"
        :text="t('urlRoute')"
        url="https://github.com/vant-ui/vant"
      />
   </fx-grid>
  </demo-block>

  <demo-block :title="t('showBadge')">
    <fx-grid :column-num="2">
      <fx-grid-item icon="home-o" :text="t('text')" dot />
      <fx-grid-item icon="search" :text="t('text')" badge="99+" />
   </fx-grid>
  </demo-block>
</template>
