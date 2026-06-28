<script setup lang="ts">
import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    max: '最大值',
    standalone: '独立展示',
    customColor: '自定义颜色',
    customContent: '自定义徽标内容',
    customPosition: '自定义徽标位置',
  },
  'en-US': {
    max: 'Max',
    standalone: 'Standalone',
    customColor: 'Custom Color',
    customContent: 'Custom Content',
    customPosition: 'Custom Position',
  },
});
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <fx-badge content="5">
      <div class="child" />
   </fx-badge>
    <fx-badge content="10">
      <div class="child" />
   </fx-badge>
    <fx-badge content="Hot">
      <div class="child" />
   </fx-badge>
    <fx-badge dot>
      <div class="child" />
   </fx-badge>
  </demo-block>

  <demo-block :title="t('max')">
    <fx-badge content="20" max="9">
      <div class="child" />
   </fx-badge>
    <fx-badge content="50" max="20">
      <div class="child" />
   </fx-badge>
    <fx-badge content="200" max="99">
      <div class="child" />
   </fx-badge>
  </demo-block>

  <demo-block :title="t('customColor')">
    <fx-badge content="5" color="#1989fa">
      <div class="child" />
   </fx-badge>
    <fx-badge content="10" color="#1989fa">
      <div class="child" />
   </fx-badge>
    <fx-badge dot color="#1989fa">
      <div class="child" />
   </fx-badge>
  </demo-block>

  <demo-block :title="t('customContent')">
    <fx-badge>
      <div class="child" />
      <template #content>
        <fx-icon name="success" class="badge-icon" />
      </template>
   </fx-badge>
    <fx-badge>
      <div class="child" />
      <template #content>
        <fx-icon name="cross" class="badge-icon" />
      </template>
   </fx-badge>
    <fx-badge>
      <div class="child" />
      <template #content>
        <fx-icon name="down" class="badge-icon" />
      </template>
   </fx-badge>
  </demo-block>

  <demo-block :title="t('customPosition')">
    <fx-badge content="10" position="top-left">
      <div class="child" />
   </fx-badge>
    <fx-badge content="10" position="bottom-left">
      <div class="child" />
   </fx-badge>
    <fx-badge content="10" position="bottom-right">
      <div class="child" />
   </fx-badge>
  </demo-block>

  <demo-block :title="t('standalone')">
    <fx-badge content="20" style="margin-left: 16px" />
    <fx-badge content="200" max="99" style="margin-left: 16px" />
  </demo-block>
</template>

<style lang="scss">
.demo-badge {
  background-color: var(--fx-background-2);

  .fx-badge__wrapper {
    margin-left: var(--fx-padding-md);
  }

  .child {
    width: 40px;
    height: 40px;
    background: var(--fx-gray-2);
    border-radius: 4px;
  }

  .badge-icon {
    display: block;
    margin-left: 0;
    font-size: 10px;
    line-height: 16px;
  }
}
</style>


