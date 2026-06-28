<script setup lang="ts">

import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    error: '通用错误',
    search: '搜索提示',
    network: '网络错误',
    imageType: '图片类型',
    customSize: '自定义大小',
    description: '描述文字',
    customImage: '自定义图片',
    bottomContent: '底部内容',
  },
  'en-US': {
    error: 'Error',
    search: 'Search',
    network: 'Network',
    imageType: 'Image Type',
    customSize: 'Custom Size',
    description: 'Description',
    customImage: 'Custom Image',
    bottomContent: 'Bottom Content',
  },
});

const active = ref('error');
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <fx-empty :description="t('description')" />
  </demo-block>

  <demo-block :title="t('imageType')">
    <fx-tabs v-model:active="active">
      <fx-tab name="error" :title="t('error')">
        <fx-empty image="error" :description="t('description')" />
     </fx-tab>
      <fx-tab name="network" :title="t('network')">
        <fx-empty image="network" :description="t('description')" />
     </fx-tab>
      <fx-tab name="search" :title="t('search')">
        <fx-empty image="search" :description="t('description')" />
     </fx-tab>
   </fx-tabs>
  </demo-block>

  <demo-block :title="t('customSize')">
    <fx-empty image-size="100" :description="t('description')" />
  </demo-block>

  <demo-block :title="t('customImage')">
    <fx-empty
      :image="cdnURL('custom-empty-image.png')"
      :image-size="80"
      :description="t('description')"
    />
  </demo-block>

  <demo-block :title="t('bottomContent')">
    <fx-empty :description="t('description')">
      <fx-button round type="primary" class="bottom-button">
        {{ t('button') }}
     </fx-button>
   </fx-empty>
  </demo-block>
</template>

<style lang="scss">
.demo-empty {
  background: var(--fx-background-2);

  .bottom-button {
    width: 160px;
    height: 40px;
  }
}
</style>
