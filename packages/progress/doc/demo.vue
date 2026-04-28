<script setup lang="ts">

import { ref } from 'vue';
// import { useTranslate } from '../../../docs/site';
import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    title2: '置灰',
    title3: '样式定制',
    title4: '进度插槽内容',
    strokeWidth: '线条粗细',
    transition: '过渡效果',
  },
  'en-US': {
    title2: 'Inactive',
    title3: 'Custom Style',
    title4: 'Pivot Slot',
    strokeWidth: 'Stroke Width',
    transition: 'Transition',
  },
});

const percentage = ref(50);

const add = () => {
  percentage.value = percentage.value + 20;
};

const reduce = () => {
  percentage.value = percentage.value - 20;
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <icsm-progress :percentage="50" />
  </demo-block>

  <demo-block :title="t('strokeWidth')">
    <icsm-progress :percentage="50" stroke-width="8" />
  </demo-block>

  <demo-block :title="t('title2')">
    <icsm-progress inactive :percentage="50" />
  </demo-block>

  <demo-block :title="t('title3')">
    <icsm-progress color="#f2826a" :percentage="25" :pivot-text="t('orange')" />
    <icsm-progress color="#ee0a24" :percentage="50" :pivot-text="t('red')" />
    <icsm-progress
      :percentage="75"
      :pivot-text="t('purple')"
      pivot-color="#7232dd"
      color="linear-gradient(to right, #be99ff, #7232dd)"
    />
  </demo-block>

  <demo-block :title="t('title4')">
    <icsm-progress :percentage="percentage">
      <template #pivot="{ percentage: value }">
        <span style="display: inline-flex; align-items: center">
          <icsm-icon name="fire" />
          <span style="margin-left: 2px">{{ value }}%</span>
        </span>
      </template>
    </icsm-progress>
  </demo-block>

  <demo-block :title="t('transition')">
    <icsm-progress :percentage="percentage" />
    <div style="margin-top: 15px">
      <icsm-button :text="t('add')" type="primary" size="small" @click="add" />
      <icsm-button
        :text="t('decrease')"
        type="danger"
        size="small"
        @click="reduce"
      />
    </div>
  </demo-block>
</template>

<style lang="scss">
.demo-progress {
  .icsm-progress {
    margin: 20px 16px;

    &:first-of-type {
      margin-top: 5px;
    }
  }

  .icsm-button {
    margin: var(--icsm-padding-md) 0 0 10px;

    &:first-of-type {
      margin-left: var(--icsm-padding-md);
    }
  }
}
</style>



