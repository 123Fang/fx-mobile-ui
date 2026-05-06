<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';
import { showToast } from 'ctf-ics-mobile-ui';

const t = useTranslate({
  'zh-CN': {
    defaultLabel: '设为默认联系人',
  },
  'en-US': {
    defaultLabel: 'Set as the default contact',
  },
});

const editingContact = ref<ContactEditInfo>({
  tel: '',
  name: '',
});

const onSave = () => showToast(t('save'));
const onDelete = () => showToast(t('delete'));
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <icsm-contact-edit
      is-edit
      show-set-default
      :contact-info="editingContact"
      :set-default-label="t('defaultLabel')"
      @save="onSave"
      @delete="onDelete"
    />
  </demo-block>
</template>

<style lang="scss">
.demo-contact-edit {
  .icsm-doc-demo-block__title {
    padding-bottom: 0;
  }
}
</style>
