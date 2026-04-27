<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';

const t = useTranslate({
  'zh-CN': {
    title2: '在列元素之间增加间距',
    justify: '对齐方式',
    vertical: '垂直间距',
  },
  'en-US': {
    title2: 'Column Spacing',
    justify: 'Justify Content',
    vertical: 'Vertical Spacing',
  },
});
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <icsm-row>
      <icsm-col span="8">span: 8</icsm-col>
      <icsm-col span="8">span: 8</icsm-col>
      <icsm-col span="8">span: 8</icsm-col>
    </icsm-row>

    <icsm-row>
      <icsm-col span="4">span: 4</icsm-col>
      <icsm-col span="10" offset="4"> offset: 4, span: 10 </icsm-col>
    </icsm-row>

    <icsm-row>
      <icsm-col offset="12" span="12"> offset: 12, span: 12 </icsm-col>
    </icsm-row>
  </demo-block>

  <demo-block :title="t('title2')">
    <icsm-row gutter="20">
      <icsm-col span="8">span: 8</icsm-col>
      <icsm-col span="8">span: 8</icsm-col>
      <icsm-col span="8">span: 8</icsm-col>
    </icsm-row>
  </demo-block>

  <demo-block :title="t('vertical')">
    <div class="demo-vertical-space">
      <icsm-row :gutter="[20, 20]">
        <icsm-col span="12">span: 12</icsm-col>
        <icsm-col span="12">span: 12</icsm-col>
        <icsm-col span="12">span: 12</icsm-col>
        <icsm-col span="12">span: 12</icsm-col>
      </icsm-row>
    </div>
  </demo-block>

  <demo-block :title="t('justify')">
    <icsm-row justify="center">
      <icsm-col span="6">span: 6</icsm-col>
      <icsm-col span="6">span: 6</icsm-col>
      <icsm-col span="6">span: 6</icsm-col>
    </icsm-row>

    <icsm-row justify="end">
      <icsm-col span="6">span: 6</icsm-col>
      <icsm-col span="6">span: 6</icsm-col>
      <icsm-col span="6">span: 6</icsm-col>
    </icsm-row>

    <icsm-row justify="space-between">
      <icsm-col span="6">span: 6</icsm-col>
      <icsm-col span="6">span: 6</icsm-col>
      <icsm-col span="6">span: 6</icsm-col>
    </icsm-row>

    <icsm-row justify="space-around">
      <icsm-col span="6">span: 6</icsm-col>
      <icsm-col span="6">span: 6</icsm-col>
      <icsm-col span="6">span: 6</icsm-col>
    </icsm-row>
  </demo-block>
</template>

<style lang="scss">
.demo-col {
  .icsm-doc-demo-block {
    padding: 0 var(--icsm-padding-md);
  }

  .icsm-doc-demo-block__title {
    padding-left: 0;
  }

  .icsm-col {
    margin-bottom: 10px;
    color: var(--icsm-white);
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }

    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}

.demo-vertical-space {
  .icsm-col {
    margin-bottom: 0;
  }
}
</style>



