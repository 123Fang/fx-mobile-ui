<script setup lang="ts">

import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    offsetTop: '吸顶距离',
    offsetBottom: '吸底距离',
    setContainer: '指定容器',
  },
  'en-US': {
    offsetTop: 'Offset Top',
    offsetBottom: 'Offset Bottom',
    setContainer: 'Set Container',
  },
});

const container = ref<Element>();
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <icsm-sticky>
      <icsm-button type="primary" style="margin-left: 15px">
        {{ t('basicUsage') }}
      </icsm-button>
    </icsm-sticky>
  </demo-block>

  <demo-block :title="t('offsetTop')">
    <icsm-sticky :offset-top="50">
      <icsm-button type="primary" style="margin-left: 115px">
        {{ t('offsetTop') }}
      </icsm-button>
    </icsm-sticky>
  </demo-block>

  <demo-block :title="t('setContainer')">
    <div
      ref="container"
      style="height: 150px; background-color: var(--icsm-background-2)"
    >
      <icsm-sticky :container="container">
        <icsm-button type="warning" style="margin-left: 215px">
          {{ t('setContainer') }}
        </icsm-button>
      </icsm-sticky>
    </div>
  </demo-block>

  <demo-block :title="t('offsetBottom')">
    <div style="height: 200px"></div>
    <icsm-sticky :offset-bottom="50" position="bottom">
      <icsm-button type="primary" style="margin-left: 15px">
        {{ t('offsetBottom') }}
      </icsm-button>
    </icsm-sticky>
  </demo-block>
</template>

<style lang="scss">
.demo-sticky {
  height: 200vh;

  .icsm-button {
    margin-left: var(--icsm-padding-md);
  }
}
</style>


