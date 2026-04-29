<script setup lang="ts">
import { cdnURL, useTranslate } from '@/docs/site';
import { showConfirmDialog } from 'ctf-ics-mobile-ui';

const t = useTranslate({
  'zh-CN': {
    select: '选择',
    delete: '删除',
    collect: '收藏',
    title: '单元格',
    confirm: '确定删除吗？',
    cardTitle: '商品标题',
    beforeClose: '异步关闭',
    customContent: '自定义内容',
  },
  'en-US': {
    select: 'Select',
    delete: 'Delete',
    collect: 'Collect',
    title: 'Cell',
    confirm: 'Are you sure to delete?',
    cardTitle: 'Title',
    beforeClose: 'Before Close',
    customContent: 'Custom Content',
  },
});

const imageURL = cdnURL('ipad.jpeg');

const beforeClose = ({ position }: { position: string }) => {
  switch (position) {
    case 'left':
    case 'cell':
    case 'outside':
      return true;
    case 'right':
      return new Promise<boolean>((resolve) => {
        showConfirmDialog({
          title: t('confirm'),
        })
          .then(() => resolve(true))
          .catch(() => resolve(false));
      });
  }
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <icsm-swipe-cell>
      <template #left>
        <icsm-button square type="primary" :text="t('select')" />
      </template>
      <icsm-cell :border="false" :title="t('title')" :value="t('content')" />
      <template #right>
        <icsm-button square type="danger" :text="t('delete')" />
        <icsm-button square type="primary" :text="t('collect')" />
      </template>
    </icsm-swipe-cell>
  </demo-block>

  <demo-block :title="t('customContent')">
    <icsm-swipe-cell>
      <icsm-card
        num="2"
        price="2.00"
        :desc="t('desc')"
        :title="t('cardTitle')"
        :thumb="imageURL"
      />
      <template #right>
        <icsm-button
          square
          type="danger"
          class="delete-button"
          :text="t('delete')"
        />
      </template>
    </icsm-swipe-cell>
  </demo-block>

  <demo-block :title="t('beforeClose')">
    <icsm-swipe-cell :before-close="beforeClose">
      <template #left>
        <icsm-button square type="primary" :text="t('select')" />
      </template>
      <icsm-cell :border="false" :title="t('title')" :value="t('content')" />
      <template #right>
        <icsm-button square type="danger" :text="t('delete')" />
      </template>
    </icsm-swipe-cell>
  </demo-block>
</template>

<style lang="scss">
.demo-swipe-cell {
  user-select: none;

  .icsm-card {
    margin: 0;
    background-color: var(--icsm-background-2);
  }

  .delete-button {
    height: 100%;
  }
}
</style>



