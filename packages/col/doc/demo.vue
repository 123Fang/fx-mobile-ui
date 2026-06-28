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
    <fx-row>
      <fx-col span="8">span: 8</fx-col>
      <fx-col span="8">span: 8</fx-col>
      <fx-col span="8">span: 8</fx-col>
   </fx-row>

    <fx-row>
      <fx-col span="4">span: 4</fx-col>
      <fx-col span="10" offset="4"> offset: 4, span: 10</fx-col>
   </fx-row>

    <fx-row>
      <fx-col offset="12" span="12"> offset: 12, span: 12</fx-col>
   </fx-row>
  </demo-block>

  <demo-block :title="t('title2')">
    <fx-row gutter="20">
      <fx-col span="8">span: 8</fx-col>
      <fx-col span="8">span: 8</fx-col>
      <fx-col span="8">span: 8</fx-col>
   </fx-row>
  </demo-block>

  <demo-block :title="t('vertical')">
    <div class="demo-vertical-space">
      <fx-row :gutter="[20, 20]">
        <fx-col span="12">span: 12</fx-col>
        <fx-col span="12">span: 12</fx-col>
        <fx-col span="12">span: 12</fx-col>
        <fx-col span="12">span: 12</fx-col>
     </fx-row>
    </div>
  </demo-block>

  <demo-block :title="t('justify')">
    <fx-row justify="center">
      <fx-col span="6">span: 6</fx-col>
      <fx-col span="6">span: 6</fx-col>
      <fx-col span="6">span: 6</fx-col>
   </fx-row>

    <fx-row justify="end">
      <fx-col span="6">span: 6</fx-col>
      <fx-col span="6">span: 6</fx-col>
      <fx-col span="6">span: 6</fx-col>
   </fx-row>

    <fx-row justify="space-between">
      <fx-col span="6">span: 6</fx-col>
      <fx-col span="6">span: 6</fx-col>
      <fx-col span="6">span: 6</fx-col>
   </fx-row>

    <fx-row justify="space-around">
      <fx-col span="6">span: 6</fx-col>
      <fx-col span="6">span: 6</fx-col>
      <fx-col span="6">span: 6</fx-col>
   </fx-row>
  </demo-block>
</template>

<style lang="scss">
.demo-col {
  .fx-doc-demo-block {
    padding: 0 var(--fx-padding-md);
  }

  .fx-doc-demo-block__title {
    padding-left: 0;
  }

  .fx-col {
    margin-bottom: 10px;
    color: var(--fx-white);
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
  .fx-col {
    margin-bottom: 0;
  }
}
</style>



