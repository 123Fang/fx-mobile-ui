<script setup>
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';
import { showToast } from 'fx-mobile-ui';

const t = useTranslate({
  'zh-CN': {
    penColor: '自定义颜色',
    lineWidth: '自定义线宽',
    backgroundColor: '自定义背景颜色',
  },
  'en-US': {
    penColor: 'Pen Color',
    lineWidth: 'Line Width',
    backgroundColor: 'Background Color',
  },
});

const demoUrl = ref('');

const onSubmit = (data) => {
  demoUrl.value = data.image;
};

const onClear = () => showToast('clear');
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <fx-signature @submit="onSubmit" @clear="onClear" />
  </demo-block>

  <fx-image v-if="demoUrl" :src="demoUrl" />

  <demo-block :title="t('penColor')">
    <fx-signature pen-color="#ff0000" @clear="onClear" @submit="onSubmit" />
  </demo-block>

  <demo-block :title="t('lineWidth')">
    <fx-signature :line-width="6" @clear="onClear" @submit="onSubmit" />
  </demo-block>

  <demo-block :title="t('backgroundColor')">
    <fx-signature
      background-color="#eee"
      @clear="onClear"
      @submit="onSubmit"
    />
  </demo-block>
</template>


