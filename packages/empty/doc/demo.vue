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
    <icsm-empty :description="t('description')" />
  </demo-block>

  <demo-block :title="t('imageType')">
    <icsm-tabs v-model:active="active">
      <icsm-tab name="error" :title="t('error')">
        <icsm-empty image="error" :description="t('description')" />
      </icsm-tab>
      <icsm-tab name="network" :title="t('network')">
        <icsm-empty image="network" :description="t('description')" />
      </icsm-tab>
      <icsm-tab name="search" :title="t('search')">
        <icsm-empty image="search" :description="t('description')" />
      </icsm-tab>
    </icsm-tabs>
  </demo-block>

  <demo-block :title="t('customSize')">
    <icsm-empty image-size="100" :description="t('description')" />
  </demo-block>

  <demo-block :title="t('customImage')">
    <icsm-empty
      :image="cdnURL('custom-empty-image.png')"
      :image-size="80"
      :description="t('description')"
    />
  </demo-block>

  <demo-block :title="t('bottomContent')">
    <icsm-empty :description="t('description')">
      <icsm-button round type="primary" class="bottom-button">
        {{ t('button') }}
      </icsm-button>
    </icsm-empty>
  </demo-block>
</template>

<style lang="scss">
.demo-empty {
  background: var(--icsm-background-2);

  .bottom-button {
    width: 160px;
    height: 40px;
  }
}
</style>
