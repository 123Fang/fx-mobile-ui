<script setup lang="ts">
import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    title: '商品名称',
    discountInfo: '营销信息',
    customContent: '自定义内容',
  },
  'en-US': {
    discountInfo: 'Discount Info',
    customContent: 'Custom Content',
  },
});

const imageURL = cdnURL('ipad.jpeg');
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <fx-card
      num="2"
      price="2.00"
      :desc="t('desc')"
      :title="t('title')"
      :thumb="imageURL"
    />
  </demo-block>

  <demo-block :title="t('discountInfo')">
    <fx-card
      num="2"
      price="2.00"
      origin-price="10.00"
      :tag="t('tag')"
      :desc="t('desc')"
      :title="t('title')"
      :thumb="imageURL"
    />
  </demo-block>

  <demo-block :title="t('customContent')">
    <fx-card
      num="2"
      price="2.00"
      :desc="t('desc')"
      :title="t('title')"
      :thumb="imageURL"
    >
      <template #tags>
        <fx-tag plain type="primary" style="margin-right: 5px">
          {{ t('tag') }}
       </fx-tag>
        <fx-tag plain type="primary">{{ t('tag') }}</fx-tag>
      </template>

      <template #footer>
        <fx-button round size="mini">
          {{ t('button') }}
       </fx-button>
        <fx-button round size="mini">
          {{ t('button') }}
       </fx-button>
      </template>
   </fx-card>
  </demo-block>
</template>

<style lang="scss">
.demo-card {
  background-color: var(--fx-background-2);
}
</style>




