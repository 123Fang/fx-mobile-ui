<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    backTop: '返回顶部',
    customContent: '自定义内容',
    customPosition: '自定义位置',
    immediateScroll: '瞬间滚动',
    setScrollTarget: '设置滚动目标',
  },
  'en-US': {
    backTop: 'Back Top',
    customContent: 'Custom Content',
    customPosition: 'Custom Position',
    immediateScroll: 'Immediate Scroll',
    setScrollTarget: 'Set Scroll Target',
  },
});

const activeTab = ref(0);
const list = [...Array(50).keys()];
const targetEl = ref<HTMLElement>();
</script>

<template>
  <icsm-tabs v-model:active="activeTab" :ellipsis="false">
    <icsm-tab :title="t('basicUsage')">
      <icsm-cell v-for="item in list" :key="item" :title="item" />
      <icsm-back-top v-if="activeTab === 0" />
    </icsm-tab>

    <icsm-tab :title="t('customPosition')">
      <icsm-cell v-for="item in list" :key="item" :title="item" />
      <icsm-back-top v-if="activeTab === 1" right="15vw" bottom="10vh" />
    </icsm-tab>

    <icsm-tab :title="t('customContent')">
      <icsm-cell v-for="item in list" :key="item" :title="item" />
      <icsm-back-top v-if="activeTab === 2" class="custom-back-top">
        {{ t('backTop') }}
      </icsm-back-top>
    </icsm-tab>

    <icsm-tab :title="t('setScrollTarget')">
      <div class="back-top-wrapper" ref="targetEl">
        <icsm-cell v-for="item in list" :key="item" :title="item" />
        <icsm-back-top v-if="activeTab === 3" :target="targetEl" bottom="30vh" />
      </div>
    </icsm-tab>

    <icsm-tab :title="t('immediateScroll')">
      <icsm-cell v-for="item in list" :key="item" :title="item" />
      <icsm-back-top v-if="activeTab === 4" immediate />
    </icsm-tab>
  </icsm-tabs>
</template>

<style lang="scss">
.back-top-wrapper {
  height: 60vh;
  overflow: auto;
}

.custom-back-top {
  width: 80px;
  font-size: 14px;
  text-align: center;
}
</style>




