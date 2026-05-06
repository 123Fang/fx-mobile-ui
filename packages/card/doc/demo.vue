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
    <icsm-card
      num="2"
      price="2.00"
      :desc="t('desc')"
      :title="t('title')"
      :thumb="imageURL"
    />
  </demo-block>

  <demo-block :title="t('discountInfo')">
    <icsm-card
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
    <icsm-card
      num="2"
      price="2.00"
      :desc="t('desc')"
      :title="t('title')"
      :thumb="imageURL"
    >
      <template #tags>
        <icsm-tag plain type="primary" style="margin-right: 5px">
          {{ t('tag') }}
        </icsm-tag>
        <icsm-tag plain type="primary">{{ t('tag') }}</icsm-tag>
      </template>

      <template #footer>
        <icsm-button round size="mini">
          {{ t('button') }}
        </icsm-button>
        <icsm-button round size="mini">
          {{ t('button') }}
        </icsm-button>
      </template>
    </icsm-card>
  </demo-block>
</template>

<style lang="scss">
.demo-card {
  background-color: var(--icsm-background-2);
}
</style>




