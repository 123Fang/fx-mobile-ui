<script setup lang="ts">

import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    text1: '代码是写出来给人看的，附带能在机器上运行。',
    text2: '技术无非就是那些开发它的人的共同灵魂。',
    text3: '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。',
    accordion: '手风琴',
    titleSlot: '自定义标题内容',
    toggleAll: '全部展开与全部切换',
    openAll: '全部展开',
    inverse: '全部切换',
  },
  'en-US': {
    text1: 'The code is written for people to see and can be run on a machine.',
    text2:
      'Technology is nothing more than the common soul of those who develop it.',
    text3:
      'The frequency of people swearing during code reading is the only measure of code quality.',
    accordion: 'Accordion',
    titleSlot: 'Custom title',
    toggleAll: 'Toggle All',
    openAll: 'Open All',
    inverse: 'Toggle All',
  },
});

const active1 = ref([0]);
const active2 = ref(0);
const active3 = ref([]);
const active4 = ref([]);
const active5 = ref(['1']);

const collapse = ref<CollapseInstance>();

const openAll = () => {
  collapse.value?.toggleAll?.(true);
};
const toggleAll = () => {
  collapse.value?.toggleAll?.();
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <fx-collapse v-model="active1">
      <fx-collapse-item :title="t('title') + 1">
        {{ t('text1') }}
     </fx-collapse-item>
      <fx-collapse-item :title="t('title') + 2">
        {{ t('text2') }}
     </fx-collapse-item>
      <fx-collapse-item :title="t('title') + 3">
        {{ t('text3') }}
     </fx-collapse-item>
   </fx-collapse>
  </demo-block>

  <demo-block :title="t('accordion')">
    <fx-collapse v-model="active2" accordion>
      <fx-collapse-item :title="t('title') + 1">
        {{ t('text1') }}
     </fx-collapse-item>
      <fx-collapse-item :title="t('title') + 2">
        {{ t('text2') }}
     </fx-collapse-item>
      <fx-collapse-item :title="t('title') + 3">
        {{ t('text3') }}
     </fx-collapse-item>
   </fx-collapse>
  </demo-block>

  <demo-block :title="t('disabled')">
    <fx-collapse v-model="active3">
      <fx-collapse-item :title="t('title') + 1">
        {{ t('text1') }}
     </fx-collapse-item>
      <fx-collapse-item :title="t('title') + 2" disabled>
        {{ t('text2') }}
     </fx-collapse-item>
      <fx-collapse-item :title="t('title') + 3" disabled>
        {{ t('text3') }}
     </fx-collapse-item>
   </fx-collapse>
  </demo-block>

  <demo-block :title="t('titleSlot')">
    <fx-collapse v-model="active4">
      <fx-collapse-item>
        <template #title>
          {{ t('title') + 1 }}<fx-icon name="question-o" />
        </template>
        {{ t('text1') }}
     </fx-collapse-item>
      <fx-collapse-item
        :title="t('title') + 2"
        :value="t('content')"
        icon="shop-o"
      >
        {{ t('text2') }}
     </fx-collapse-item>
   </fx-collapse>
  </demo-block>

  <demo-block :title="t('toggleAll')">
    <fx-collapse v-model="active5" ref="collapse">
      <fx-collapse-item :title="t('title') + 1" name="1">
        {{ t('text1') }}
     </fx-collapse-item>
      <fx-collapse-item :title="t('title') + 2" name="2">
        {{ t('text2') }}
     </fx-collapse-item>
      <fx-collapse-item :title="t('title') + 3" name="3">
        {{ t('text3') }}
     </fx-collapse-item>
   </fx-collapse>

    <div class="demo-collapse-buttons">
      <fx-button type="primary" @click="openAll">
        {{ t('openAll') }}
     </fx-button>
      <fx-button type="primary" @click="toggleAll">
        {{ t('inverse') }}
     </fx-button>
    </div>
  </demo-block>
</template>

<style lang="scss">
.demo-collapse {
  .fx-icon-question-o {
    margin-left: 5px;
    color: var(--fx-blue);
    font-size: 15px;
    vertical-align: -3px;
  }

  &-buttons {
    margin-top: var(--fx-padding-md);

    .fx-button {
      margin-left: var(--fx-padding-md);
    }
  }
}
</style>


