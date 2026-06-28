<script setup lang="ts">

import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    text: '文本',
    customIndexList: '自定义索引列表',
  },
  'en-US': {
    text: 'Text',
    customIndexList: 'Custom Index List',
  },
});

const activeTab = ref(0);
const indexList: string[] = [];
const customIndexList = [1, 2, 3, 4, 5, 6, 8, 9, 10];
const charCodeOfA = 'A'.charCodeAt(0);

for (let i = 0; i < 26; i++) {
  indexList.push(String.fromCharCode(charCodeOfA + i));
}
</script>

<template>
  <fx-tabs v-model:active="activeTab">
    <fx-tab :title="t('basicUsage')">
      <fx-index-bar>
        <div v-for="index in indexList" :key="index">
          <fx-index-anchor :index="index" />
          <fx-cell :title="t('text')" />
          <fx-cell :title="t('text')" />
          <fx-cell :title="t('text')" />
        </div>
     </fx-index-bar>
   </fx-tab>

    <fx-tab :title="t('customIndexList')">
      <fx-index-bar :index-list="customIndexList">
        <div v-for="index in customIndexList" :key="index">
          <fx-index-anchor :index="index">
            {{ t('title') + index }}
         </fx-index-anchor>
          <fx-cell :title="t('text')" />
          <fx-cell :title="t('text')" />
          <fx-cell :title="t('text')" />
        </div>
     </fx-index-bar>
   </fx-tab>
 </fx-tabs>
</template>


