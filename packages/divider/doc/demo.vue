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
    <icsm-divider />
  </demo-block>

  <demo-block :title="t('withText')">
    <icsm-divider>
      {{ t('text') }}
    </icsm-divider>
  </demo-block>

  <demo-block :title="t('contentPosition')">
    <icsm-divider content-position="left">
      {{ t('text') }}
    </icsm-divider>

    <icsm-divider content-position="right">
      {{ t('text') }}
    </icsm-divider>
  </demo-block>

  <demo-block :title="t('dashed')">
    <icsm-divider dashed :hairline="false">
      {{ t('text') }}
    </icsm-divider>
  </demo-block>

  <demo-block :title="t('customStyle')">
    <icsm-divider
      :style="{ borderColor: '#1989fa', color: '#1989fa', padding: '0 16px' }"
    >
      {{ t('text') }}
    </icsm-divider>
  </demo-block>

  <demo-block :title="t('vertical')">
    <div class="content">
      <icsm-divider vertical />
      {{ t('text') }}
      <icsm-divider vertical dashed />
      {{ t('text') }}
      <icsm-divider vertical :hairline="false" />
      {{ t('text') }}
      <icsm-divider vertical :style="{ borderColor: '#1989fa' }" />
    </div>
  </demo-block>
</template>

<style lang="scss">
.demo-divider {
  background-color: var(--icsm-background-2);

  .icsm-doc-demo-block__title {
    padding-top: var(--icsm-padding-md);
  }

  .content {
    padding: 0 var(--icsm-padding-md);
    color: var(--icsm-text-color-2);
    font-size: var(--icsm-font-size-md);
  }
}
</style>
