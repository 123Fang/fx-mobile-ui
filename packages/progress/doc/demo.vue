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
    <fx-progress :percentage="50" />
  </demo-block>

  <demo-block :title="t('strokeWidth')">
    <fx-progress :percentage="50" stroke-width="8" />
  </demo-block>

  <demo-block :title="t('title2')">
    <fx-progress inactive :percentage="50" />
  </demo-block>

  <demo-block :title="t('title3')">
    <fx-progress color="#f2826a" :percentage="25" :pivot-text="t('orange')" />
    <fx-progress color="#ee0a24" :percentage="50" :pivot-text="t('red')" />
    <fx-progress
      :percentage="75"
      :pivot-text="t('purple')"
      pivot-color="#7232dd"
      color="linear-gradient(to right, #be99ff, #7232dd)"
    />
  </demo-block>

  <demo-block :title="t('title4')">
    <fx-progress :percentage="percentage">
      <template #pivot="{ percentage: value }">
        <span style="display: inline-flex; align-items: center">
          <fx-icon name="fire" />
          <span style="margin-left: 2px">{{ value }}%</span>
        </span>
      </template>
   </fx-progress>
  </demo-block>

  <demo-block :title="t('transition')">
    <fx-progress :percentage="percentage" />
    <div style="margin-top: 15px">
      <fx-button :text="t('add')" type="primary" size="small" @click="add" />
      <fx-button
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
  .fx-progress {
    margin: 20px 16px;

    &:first-of-type {
      margin-top: 5px;
    }
  }

  .fx-button {
    margin: var(--fx-padding-md) 0 0 10px;

    &:first-of-type {
      margin-left: var(--fx-padding-md);
    }
  }
}
</style>



