<script setup lang="ts">
import { ref } from 'vue';
// import { useTranslate } from '../../../docs/site';
import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    message: '留言',
    autosize: '高度自适应',
    placeholder: '请输入留言',
  },
  'en-US': {
    sms: 'SMS',
    autosize: 'Auto Resize',
    placeholder: 'Message',
  },
});

const value = ref('');
</script>

<template>
  <demo-block :title="t('autosize')">
    <fx-cell-group inset>
      <fx-field
        v-model="value"
        autosize
        rows="1"
        type="textarea"
        :label="t('message')"
        :placeholder="t('placeholder')"
      />
   </fx-cell-group>
  </demo-block>
</template>
