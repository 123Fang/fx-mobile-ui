<script setup lang="ts">

import { ref } from 'vue';
// import { useTranslate } from '../../../docs/site';
import { cdnURL, useTranslate } from '@/docs/site';

import { showConfirmDialog } from 'fx-mobile-ui';

const t = useTranslate({
  'zh-CN': {
    title: '标题',
    confirm: '提醒',
    message: '是否切换开关？',
    withCell: '搭配单元格使用',
    customSize: '自定义大小',
    customNode: '自定义按钮',
    customColor: '自定义颜色',
    asyncControl: '异步控制',
  },
  'en-US': {
    title: 'Title',
    confirm: 'Confirm',
    message: 'Are you sure to toggle switch?',
    withCell: 'Inside a Cell',
    customSize: 'Custom Size',
    customNode: 'Custom Node',
    customColor: 'Custom Color',
    asyncControl: 'Async Control',
  },
});

const checked = ref(true);
const checked2 = ref(true);
const checked3 = ref(true);
const checked4 = ref(true);
const checked5 = ref(true);

const onUpdateValue = (checked: boolean) => {
  showConfirmDialog({
    title: t('title'),
    message: t('message'),
  }).then(() => {
    checked4.value = checked;
  });
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <fx-switch v-model="checked" />
  </demo-block>

  <demo-block :title="t('disabled')">
    <fx-switch v-model="checked" disabled />
  </demo-block>

  <demo-block :title="t('loadingStatus')">
    <fx-switch v-model="checked" loading />
  </demo-block>

  <demo-block :title="t('customSize')">
    <fx-switch v-model="checked2" size="22px" />
  </demo-block>

  <demo-block :title="t('customColor')">
    <fx-switch
      v-model="checked3"
      active-color="#ee0a24"
      inactive-color="#dcdee0"
    />
  </demo-block>

  <demo-block :title="t('customNode')">
    <fx-switch v-model="checked3">
      <template #node>
        <div class="icon-wrapper">
          <fx-icon :name="checked3 ? 'success' : 'cross'" />
        </div>
      </template>
   </fx-switch>
  </demo-block>

  <demo-block :title="t('asyncControl')">
    <fx-switch :model-value="checked4" @update:model-value="onUpdateValue" />
  </demo-block>

  <demo-block :title="t('withCell')">
    <fx-cell center :title="t('title')">
      <template #right-icon>
        <fx-switch v-model="checked5" />
      </template>
   </fx-cell>
  </demo-block>
</template>

<style lang="scss">
.demo-switch {
  .fx-switch {
    margin-left: var(--fx-padding-md);
  }

  .icon-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 18px;

    .fx-icon {
      line-height: 32px;
    }

    .fx-icon-success {
      color: var(--fx-blue);
    }

    .fx-icon-cross {
      color: var(--fx-gray-5);
    }
  }
}
</style>


