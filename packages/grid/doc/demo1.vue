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
    <icsm-grid>
      <icsm-grid-item v-for="i in 4" :key="i" icon="photo-o" :text="t('text')" />
    </icsm-grid>
  </demo-block>

  <demo-block :title="t('columnNum')">
    <icsm-grid :column-num="3">
      <icsm-grid-item v-for="i in 6" :key="i" icon="photo-o" :text="t('text')" />
    </icsm-grid>
  </demo-block>

  <demo-block :title="t('customContent')">
    <icsm-grid :border="false" :column-num="3">
      <icsm-grid-item>
        <icsm-image fit="contain" :src="cdnURL('apple-1.jpeg')" />
      </icsm-grid-item>
      <icsm-grid-item>
        <icsm-image fit="contain" :src="cdnURL('apple-2.jpeg')" />
      </icsm-grid-item>
      <icsm-grid-item>
        <icsm-image fit="contain" :src="cdnURL('apple-3.jpeg')" />
      </icsm-grid-item>
    </icsm-grid>
  </demo-block>

  <demo-block :title="t('square')">
    <icsm-grid square>
      <icsm-grid-item v-for="i in 8" :key="i" icon="photo-o" :text="t('text')" />
    </icsm-grid>
  </demo-block>

  <demo-block :title="t('gutter')">
    <icsm-grid :gutter="10">
      <icsm-grid-item v-for="i in 8" :key="i" icon="photo-o" :text="t('text')" />
    </icsm-grid>
  </demo-block>

  <demo-block :title="t('horizontal')">
    <icsm-grid direction="horizontal" :column-num="3">
      <icsm-grid-item icon="photo-o" :text="t('text')" />
      <icsm-grid-item icon="photo-o" :text="t('text')" />
      <icsm-grid-item icon="photo-o" :text="t('text')" />
    </icsm-grid>
  </demo-block>

  <demo-block :title="t('route')">
    <icsm-grid clickable :column-num="2">
      <icsm-grid-item icon="home-o" :text="t('vueRoute')" to="/" />
      <icsm-grid-item
        icon="search"
        :text="t('urlRoute')"
        url="https://github.com/vant-ui/vant"
      />
    </icsm-grid>
  </demo-block>

  <demo-block :title="t('showBadge')">
    <icsm-grid :column-num="2">
      <icsm-grid-item icon="home-o" :text="t('text')" dot />
      <icsm-grid-item icon="search" :text="t('text')" badge="99+" />
    </icsm-grid>
  </demo-block>
</template>
