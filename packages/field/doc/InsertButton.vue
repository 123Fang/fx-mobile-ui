<script setup lang="ts">

import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    sms: '短信验证码',
    sendSMS: '发送验证码',
    insertButton: '插入按钮',
    smsPlaceholder: '请输入短信验证码',
  },
  'en-US': {
    sms: 'SMS',
    sendSMS: 'Send SMS',
    insertButton: 'Insert Button',
    smsPlaceholder: 'SMS',
  },
});

const sms = ref('');
</script>

<template>
  <demo-block :title="t('insertButton')">
    <icsm-cell-group inset>
      <icsm-field
        v-model="sms"
        center
        clearable
        :label="t('sms')"
        :placeholder="t('smsPlaceholder')"
      >
        <template #button>
          <icsm-button size="small" type="primary">
            {{ t('sendSMS') }}
          </icsm-button>
        </template>
      </icsm-field>
    </icsm-cell-group>
  </demo-block>
</template>
