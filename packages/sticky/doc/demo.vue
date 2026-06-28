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
    <fx-sticky>
      <fx-button type="primary" style="margin-left: 15px">
        {{ t('basicUsage') }}
     </fx-button>
   </fx-sticky>
  </demo-block>

  <demo-block :title="t('offsetTop')">
    <fx-sticky :offset-top="50">
      <fx-button type="primary" style="margin-left: 115px">
        {{ t('offsetTop') }}
     </fx-button>
   </fx-sticky>
  </demo-block>

  <demo-block :title="t('setContainer')">
    <div
      ref="container"
      style="height: 150px; background-color: var(--fx-background-2)"
    >
      <fx-sticky :container="container">
        <fx-button type="warning" style="margin-left: 215px">
          {{ t('setContainer') }}
       </fx-button>
     </fx-sticky>
    </div>
  </demo-block>

  <demo-block :title="t('offsetBottom')">
    <div style="height: 200px"></div>
    <fx-sticky :offset-bottom="50" position="bottom">
      <fx-button type="primary" style="margin-left: 15px">
        {{ t('offsetBottom') }}
     </fx-button>
   </fx-sticky>
  </demo-block>
</template>

<style lang="scss">
.demo-sticky {
  height: 200vh;

  .fx-button {
    margin-left: var(--fx-padding-md);
  }
}
</style>


