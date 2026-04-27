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
    <icsm-space>
      <icsm-button type="primary">{{ t('button') }}</icsm-button>
      <icsm-button type="primary">{{ t('button') }}</icsm-button>
      <icsm-button type="primary">{{ t('button') }}</icsm-button>
      <icsm-button type="primary">{{ t('button') }}</icsm-button>
    </icsm-space>
  </demo-block>

  <demo-block :title="t('vertical')">
    <icsm-space direction="vertical" fill>
      <icsm-button type="primary" block>{{ t('button') }}</icsm-button>
      <icsm-button type="primary" block>{{ t('button') }}</icsm-button>
      <icsm-button type="primary" block>{{ t('button') }}</icsm-button>
    </icsm-space>
  </demo-block>

  <demo-block :title="t('customSize')">
    <icsm-space :size="20" style="margin-bottom: 16px">
      <icsm-button type="primary">{{ t('button') }}</icsm-button>
      <icsm-button type="primary">{{ t('button') }}</icsm-button>
      <icsm-button type="primary">{{ t('button') }}</icsm-button>
    </icsm-space>

    <icsm-space size="3rem">
      <icsm-button type="primary">{{ t('button') }}</icsm-button>
      <icsm-button type="primary">{{ t('button') }}</icsm-button>
      <icsm-button type="primary">{{ t('button') }}</icsm-button>
    </icsm-space>
  </demo-block>

  <demo-block :title="t('align')">
    <icsm-radio-group
      v-model="align"
      direction="horizontal"
      style="margin-bottom: 16px"
    >
      <icsm-radio name="start">start</icsm-radio>
      <icsm-radio name="center">center</icsm-radio>
      <icsm-radio name="end">end</icsm-radio>
      <icsm-radio name="baseline">baseline</icsm-radio>
    </icsm-radio-group>
    <icsm-space :align="align" style="padding: 16px; background: #f3f2f5">
      <icsm-button type="primary">{{ align }}</icsm-button>
      <div style="padding: 40px 20px; background: #fff">Block</div>
    </icsm-space>
  </demo-block>

  <demo-block :title="t('wrap')">
    <icsm-space wrap>
      <icsm-button type="primary" block>{{ t('button') }}</icsm-button>
      <icsm-button type="primary" block>{{ t('button') }}</icsm-button>
      <icsm-button type="primary" block>{{ t('button') }}</icsm-button>
      <icsm-button type="primary" block>{{ t('button') }}</icsm-button>
      <icsm-button type="primary" block>{{ t('button') }}</icsm-button>
      <icsm-button type="primary" block>{{ t('button') }}</icsm-button>
      <icsm-button type="primary" block>{{ t('button') }}</icsm-button>
      <icsm-button type="primary" block>{{ t('button') }}</icsm-button>
    </icsm-space>
  </demo-block>
</template>

<style lang="scss">
.demo-space {
  background: var(--icsm-background-2);

  .icsm-doc-demo-block {
    padding: 0 var(--icsm-padding-md);
  }

  .icsm-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
