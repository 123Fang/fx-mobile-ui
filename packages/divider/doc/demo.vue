<script setup lang="ts">
// import { useTranslate } from '../../../docs/site';
import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    text: '文本',
    dashed: '虚线',
    withText: '展示文本',
    contentPosition: '内容位置',
    customStyle: '自定义样式',
    vertical: '垂直',
  },
  'en-US': {
    text: 'Text',
    dashed: 'Dashed',
    withText: 'With Text',
    contentPosition: 'Content Position',
    customStyle: 'Custom Style',
    vertical: 'Vertical',
  },
});
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <fx-divider />
  </demo-block>

  <demo-block :title="t('withText')">
    <fx-divider>
      {{ t('text') }}
   </fx-divider>
  </demo-block>

  <demo-block :title="t('contentPosition')">
    <fx-divider content-position="left">
      {{ t('text') }}
   </fx-divider>

    <fx-divider content-position="right">
      {{ t('text') }}
   </fx-divider>
  </demo-block>

  <demo-block :title="t('dashed')">
    <fx-divider dashed :hairline="false">
      {{ t('text') }}
   </fx-divider>
  </demo-block>

  <demo-block :title="t('customStyle')">
    <fx-divider
      :style="{ borderColor: '#1989fa', color: '#1989fa', padding: '0 16px' }"
    >
      {{ t('text') }}
   </fx-divider>
  </demo-block>

  <demo-block :title="t('vertical')">
    <div class="content">
      <fx-divider vertical />
      {{ t('text') }}
      <fx-divider vertical dashed />
      {{ t('text') }}
      <fx-divider vertical :hairline="false" />
      {{ t('text') }}
      <fx-divider vertical :style="{ borderColor: '#1989fa' }" />
    </div>
  </demo-block>
</template>

<style lang="scss">
.demo-divider {
  background-color: var(--fx-background-2);

  .fx-doc-demo-block__title {
    padding-top: var(--fx-padding-md);
  }

  .content {
    padding: 0 var(--fx-padding-md);
    color: var(--fx-text-color-2);
    font-size: var(--fx-font-size-md);
  }
}
</style>
