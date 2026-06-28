<script setup lang="ts">
import { ref } from 'vue';
// import { useTranslate } from '../../../docs/site';
import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    text: '文本',
    showIcon: '显示图标',
    showClearIcon: '显示清除图标',
  },
  'en-US': {
    text: 'Text',
    showIcon: 'Show Icon',
    showClearIcon: 'Show Clear Icon',
  },
});

const icon1 = ref('');
const icon2 = ref('123');
</script>

<template>
  <demo-block :title="t('showIcon')">
    <fx-cell-group inset>
      <fx-field
        v-model="icon1"
        :label="t('text')"
        left-icon="smile-o"
        right-icon="warning-o"
        :placeholder="t('showIcon')"
      />
      <fx-field
        v-model="icon2"
        clearable
        :label="t('text')"
        left-icon="music-o"
        :placeholder="t('showClearIcon')"
      />
   </fx-cell-group>
  </demo-block>
</template>
