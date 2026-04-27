<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';

const t = useTranslate({
  'zh-CN': {
    tab: '标签 ',
    shrink: '收缩布局',
    content: '内容',
  },
  'en-US': {
    tab: 'Tab ',
    shrink: 'Shrink',
    content: 'content of tab',
  },
});

const tabs = [1, 2, 3, 4];
const active1 = ref(0);
const active2 = ref(0);
</script>

<template>
  <demo-block :title="t('shrink')">
    <icsm-tabs v-model:active="active1" shrink>
      <icsm-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
        {{ t('content') }} {{ index }}
      </icsm-tab>
    </icsm-tabs>
    <icsm-tabs
      v-model:active="active2"
      type="card"
      shrink
      style="margin-top: var(--icsm-padding-lg)"
    >
      <icsm-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
        {{ t('content') }} {{ index }}
      </icsm-tab>
    </icsm-tabs>
  </demo-block>
</template>
