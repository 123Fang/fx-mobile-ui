<script setup lang="ts">
import { computed } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';
import { showToast } from 'fx-mobile-ui';

const t = useTranslate({
  'zh-CN': {
    add: '新增',
    edit: '编辑',
    name: '张三',
    addContact: '添加联系人',
    editContact: '编辑联系人',
  },
  'en-US': {
    add: 'Add',
    edit: 'Edit',
    name: 'John Snow',
    addContact: 'Add Contact',
    editContact: 'Edit Contact',
  },
});

const currentContact = computed(() => ({
  name: t('name'),
  tel: '13000000000',
}));

const onAdd = () => showToast(t('add'));
const onEdit = () => showToast(t('edit'));
</script>

<template>
  <demo-block :title="t('addContact')">
    <fx-contact-card type="add" @click="onAdd" />
  </demo-block>

  <demo-block :title="t('editContact')">
    <fx-contact-card
      type="edit"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="onEdit"
    />
  </demo-block>

  <demo-block :title="t('uneditable')">
    <fx-contact-card
      type="edit"
      :name="currentContact.name"
      :tel="currentContact.tel"
      :editable="false"
    />
  </demo-block>
</template>



