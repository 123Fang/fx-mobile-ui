<script setup lang="ts">
import { ref } from 'vue';
// import { useTranslate } from '../../../docs/site';
import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    label: '文本',
    placeholder: '请输入文本',
  },
  'en-US': {
    label: 'Label',
    placeholder: 'Text',
  },
});

const value = ref('');
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <icsm-cell-group inset>
      <icsm-field
        v-model="value"
        :label="t('label')"
        :placeholder="t('placeholder')"
      />
    </icsm-cell-group>
  </demo-block>
</template>
