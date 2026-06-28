<script setup>
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';

const t = useTranslate({
  'zh-CN': {
    vertical: '垂直排列',
    customSize: '自定义间距',
    align: '对齐方式',
    wrap: '自动换行',
  },
  'en-US': {
    vertical: 'Vertical',
    customSize: 'Custom Size',
    align: 'Alignment',
    wrap: 'Auto Wrap',
  },
});

const align = ref('center');
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <fx-space>
      <fx-button type="primary">{{ t('button') }}</fx-button>
      <fx-button type="primary">{{ t('button') }}</fx-button>
      <fx-button type="primary">{{ t('button') }}</fx-button>
      <fx-button type="primary">{{ t('button') }}</fx-button>
   </fx-space>
  </demo-block>

  <demo-block :title="t('vertical')">
    <fx-space direction="vertical" fill>
      <fx-button type="primary" block>{{ t('button') }}</fx-button>
      <fx-button type="primary" block>{{ t('button') }}</fx-button>
      <fx-button type="primary" block>{{ t('button') }}</fx-button>
   </fx-space>
  </demo-block>

  <demo-block :title="t('customSize')">
    <fx-space :size="20" style="margin-bottom: 16px">
      <fx-button type="primary">{{ t('button') }}</fx-button>
      <fx-button type="primary">{{ t('button') }}</fx-button>
      <fx-button type="primary">{{ t('button') }}</fx-button>
   </fx-space>

    <fx-space size="3rem">
      <fx-button type="primary">{{ t('button') }}</fx-button>
      <fx-button type="primary">{{ t('button') }}</fx-button>
      <fx-button type="primary">{{ t('button') }}</fx-button>
   </fx-space>
  </demo-block>

  <demo-block :title="t('align')">
    <fx-radio-group
      v-model="align"
      direction="horizontal"
      style="margin-bottom: 16px"
    >
      <fx-radio name="start">start</fx-radio>
      <fx-radio name="center">center</fx-radio>
      <fx-radio name="end">end</fx-radio>
      <fx-radio name="baseline">baseline</fx-radio>
   </fx-radio-group>
    <fx-space :align="align" style="padding: 16px; background: #f3f2f5">
      <fx-button type="primary">{{ align }}</fx-button>
      <div style="padding: 40px 20px; background: #fff">Block</div>
   </fx-space>
  </demo-block>

  <demo-block :title="t('wrap')">
    <fx-space wrap>
      <fx-button type="primary" block>{{ t('button') }}</fx-button>
      <fx-button type="primary" block>{{ t('button') }}</fx-button>
      <fx-button type="primary" block>{{ t('button') }}</fx-button>
      <fx-button type="primary" block>{{ t('button') }}</fx-button>
      <fx-button type="primary" block>{{ t('button') }}</fx-button>
      <fx-button type="primary" block>{{ t('button') }}</fx-button>
      <fx-button type="primary" block>{{ t('button') }}</fx-button>
      <fx-button type="primary" block>{{ t('button') }}</fx-button>
   </fx-space>
  </demo-block>
</template>

<style lang="scss">
.demo-space {
  background: var(--fx-background-2);

  .fx-doc-demo-block {
    padding: 0 var(--fx-padding-md);
  }

  .fx-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
