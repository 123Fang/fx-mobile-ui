<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    message: '留言',
    placeholder: '请输入留言',
    showWordLimit: '显示字数统计',
  },
  'en-US': {
    message: 'Message',
    placeholder: 'Message',
    showWordLimit: 'Show Word Limit',
  },
});

const value = ref('');
</script>

<template>
  <demo-block :title="t('showWordLimit')">
    <fx-cell-group inset>
      <fx-field
        v-model="value"
        autosize
        show-word-limit
        rows="2"
        type="textarea"
        maxlength="50"
        :label="t('message')"
        :placeholder="t('placeholder')"
      />
   </fx-cell-group>
  </demo-block>
</template>
