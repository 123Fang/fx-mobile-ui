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
    <icsm-cell-group>
      <icsm-cell :title="t('cell')" :value="t('content')" />
      <icsm-cell :title="t('cell')" :value="t('content')" :label="t('desc')" />
    </icsm-cell-group>
  </demo-block>

  <demo-block :title="t('insetGrouped')">
    <icsm-cell-group inset>
      <icsm-cell :title="t('cell')" :value="t('content')" />
      <icsm-cell :title="t('cell')" :value="t('content')" :label="t('desc')" />
    </icsm-cell-group>
  </demo-block>

  <demo-block :title="t('largeSize')">
    <icsm-cell :title="t('cell')" :value="t('content')" size="large" />
    <icsm-cell
      :title="t('cell')"
      :value="t('content')"
      size="large"
      :label="t('desc')"
    />
  </demo-block>

  <demo-block :title="t('showIcon')">
    <icsm-cell :title="t('cell')" :value="t('content')" icon="location-o" />
  </demo-block>

  <demo-block :title="t('showArrow')">
    <icsm-cell :title="t('cell')" is-link />
    <icsm-cell :title="t('cell')" is-link :value="t('content')" />
    <icsm-cell
      :title="t('cell')"
      is-link
      arrow-direction="down"
      :value="t('content')"
    />
  </demo-block>

  <demo-block :title="t('router')">
    <icsm-cell
      :title="t('urlRoute')"
      is-link
      url="https://github.com/vant-ui/vant"
    />
    <icsm-cell :title="t('vueRoute')" is-link to="index" />
  </demo-block>

  <demo-block :title="t('groupTitle')">
    <icsm-cell-group :title="`${t('group')} 1`">
      <icsm-cell :title="t('cell')" :value="t('content')" />
    </icsm-cell-group>
    <icsm-cell-group :title="`${t('group')} 2`">
      <icsm-cell :title="t('cell')" :value="t('content')" />
    </icsm-cell-group>
  </demo-block>

  <demo-block :title="t('useSlots')">
    <icsm-cell :value="t('content')" is-link>
      <template #title>
        <span class="custom-title">{{ t('cell') }}</span>
        <icsm-tag type="primary">{{ t('tag') }}</icsm-tag>
      </template>
    </icsm-cell>

    <icsm-cell icon="shop-o" :title="t('cell')">
      <template #right-icon>
        <icsm-icon name="search" class="search-icon" />
      </template>
    </icsm-cell>
  </demo-block>

  <demo-block :title="t('verticalCenter')">
    <icsm-cell
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
