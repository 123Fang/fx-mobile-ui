<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';

const t = useTranslate({
  'zh-CN': {
    cell: '单元格',
    group: '分组',
    router: '页面导航',
    urlRoute: 'URL 跳转',
    vueRoute: '路由跳转',
    useSlots: '使用插槽',
    showIcon: '展示图标',
    showArrow: '展示箭头',
    largeSize: '单元格大小',
    groupTitle: '分组标题',
    insetGrouped: '卡片风格',
    verticalCenter: '垂直居中',
  },
  'en-US': {
    cell: 'Cell title',
    group: 'Group',
    router: 'Router',
    urlRoute: 'URL',
    vueRoute: 'Vue Router',
    useSlots: 'Use Slots',
    showIcon: 'Left Icon',
    showArrow: 'Link',
    largeSize: 'Size',
    groupTitle: 'Group Title',
    insetGrouped: 'Inset Grouped',
    verticalCenter: 'Vertical center',
  },
});
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <fx-cell-group>
      <fx-cell :title="t('cell')" :value="t('content')" />
      <fx-cell :title="t('cell')" :value="t('content')" :label="t('desc')" />
   </fx-cell-group>
  </demo-block>

  <demo-block :title="t('insetGrouped')">
    <fx-cell-group inset>
      <fx-cell :title="t('cell')" :value="t('content')" />
      <fx-cell :title="t('cell')" :value="t('content')" :label="t('desc')" />
   </fx-cell-group>
  </demo-block>

  <demo-block :title="t('largeSize')">
    <fx-cell :title="t('cell')" :value="t('content')" size="large" />
    <fx-cell
      :title="t('cell')"
      :value="t('content')"
      size="large"
      :label="t('desc')"
    />
  </demo-block>

  <demo-block :title="t('showIcon')">
    <fx-cell :title="t('cell')" :value="t('content')" icon="location-o" />
  </demo-block>

  <demo-block :title="t('showArrow')">
    <fx-cell :title="t('cell')" is-link />
    <fx-cell :title="t('cell')" is-link :value="t('content')" />
    <fx-cell
      :title="t('cell')"
      is-link
      arrow-direction="down"
      :value="t('content')"
    />
  </demo-block>

  <demo-block :title="t('router')">
    <fx-cell
      :title="t('urlRoute')"
      is-link
      url="https://github.com/vant-ui/vant"
    />
    <fx-cell :title="t('vueRoute')" is-link to="index" />
  </demo-block>

  <demo-block :title="t('groupTitle')">
    <fx-cell-group :title="`${t('group')} 1`">
      <fx-cell :title="t('cell')" :value="t('content')" />
   </fx-cell-group>
    <fx-cell-group :title="`${t('group')} 2`">
      <fx-cell :title="t('cell')" :value="t('content')" />
   </fx-cell-group>
  </demo-block>

  <demo-block :title="t('useSlots')">
    <fx-cell :value="t('content')" is-link>
      <template #title>
        <span class="custom-title">{{ t('cell') }}</span>
        <fx-tag type="primary">{{ t('tag') }}</fx-tag>
      </template>
   </fx-cell>

    <fx-cell icon="shop-o" :title="t('cell')">
      <template #right-icon>
        <fx-icon name="search" class="search-icon" />
      </template>
   </fx-cell>
  </demo-block>

  <demo-block :title="t('verticalCenter')">
    <fx-cell
      center
      :title="t('cell')"
      :value="t('content')"
      :label="t('desc')"
    />
  </demo-block>
</template>

<style lang="scss">
.demo-cell {
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
}
</style>
