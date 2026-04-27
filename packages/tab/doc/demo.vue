<script setup lang="ts">
import { ref } from 'vue';
import { showToast } from 'ctf-ics-mobile-ui';
import Shrink from './Shrink.vue';

import { cdnURL, useTranslate } from '@/docs/site';

const t = useTranslate({
  'zh-CN': {
    tab: '标签 ',
    content: '内容',
    title2: '标签栏滚动',
    title3: '禁用标签',
    title4: '样式风格',
    title5: '点击事件',
    title6: '粘性布局',
    title7: '自定义标签',
    title8: '切换动画',
    title9: '滑动切换',
    title10: '滚动导航',
    matchByName: '通过名称匹配',
    beforeChange: '异步切换',
  },
  'en-US': {
    tab: 'Tab ',
    content: 'content of tab',
    title2: 'Swipe Tabs',
    title3: 'Disabled Tab',
    title4: 'Card Style',
    title5: 'Click Event',
    title6: 'Sticky',
    title7: 'Custom Tab',
    title8: 'Switch Animation',
    title9: 'Swipeable',
    title10: 'Scrollspy',
    matchByName: 'Match By Name',
    beforeChange: 'Before Change',
  },
});

const active1 = ref(0);
const active2 = ref(0);
const active3 = ref(0);
const active4 = ref(0);
const active5 = ref(0);
const active6 = ref(0);
const active7 = ref(0);
const active8 = ref(0);
const active9 = ref(0);
const active10 = ref(0);
const active11 = ref(0);
const activeName = ref('b');

const tabs = [1, 2, 3, 4];

const onClickTab = ({ title }: { title: string }) => {
  showToast(title);
};

const beforeChange = (name: number) => {
  if (name === 1) {
    return false;
  }
  return new Promise<boolean>((resolve) => {
    setTimeout(() => resolve(name !== 3), 1000);
  });
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <icsm-tabs v-model:active="active1">
      <icsm-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
        {{ t('content') }} {{ index }}
      </icsm-tab>
    </icsm-tabs>
  </demo-block>

  <demo-block :title="t('matchByName')">
    <icsm-tabs v-model:active="activeName">
      <icsm-tab name="a" :title="t('tab') + 1">{{ t('content') }} 1</icsm-tab>
      <icsm-tab name="b" :title="t('tab') + 2">{{ t('content') }} 2</icsm-tab>
      <icsm-tab name="c" :title="t('tab') + 3">{{ t('content') }} 3</icsm-tab>
    </icsm-tabs>
  </demo-block>

  <demo-block :title="t('title2')">
    <icsm-tabs v-model:active="active2">
      <icsm-tab v-for="index in 8" :title="t('tab') + index" :key="index">
        {{ t('content') }} {{ index }}
      </icsm-tab>
    </icsm-tabs>
  </demo-block>

  <demo-block :title="t('title3')">
    <icsm-tabs v-model:active="active3">
      <icsm-tab
        v-for="index in 3"
        :title="t('tab') + index"
        :disabled="index === 2"
        :key="index"
      >
        {{ t('content') }} {{ index }}
      </icsm-tab>
    </icsm-tabs>
  </demo-block>

  <demo-block :title="t('title4')">
    <icsm-tabs v-model:active="active4" type="card">
      <icsm-tab v-for="index in 3" :title="t('tab') + index" :key="index">
        {{ t('content') }} {{ index }}
      </icsm-tab>
    </icsm-tabs>
  </demo-block>

  <demo-block :title="t('title5')">
    <icsm-tabs v-model:active="active5" @click-tab="onClickTab">
      <icsm-tab v-for="index in 2" :title="t('tab') + index" :key="index">
        {{ t('content') }} {{ index }}
      </icsm-tab>
    </icsm-tabs>
  </demo-block>

  <demo-block :title="t('title6')">
    <icsm-tabs v-model:active="active6" sticky>
      <icsm-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
        {{ t('content') }} {{ index }}
      </icsm-tab>
    </icsm-tabs>
  </demo-block>

  <shrink />

  <demo-block :title="t('title7')">
    <icsm-tabs v-model:active="active7">
      <icsm-tab v-for="index in 2" :key="index">
        <template #title><icsm-icon name="more-o" />{{ t('tab') }}</template>
        {{ t('content') }} {{ index }}
      </icsm-tab>
    </icsm-tabs>
  </demo-block>

  <demo-block :title="t('title8')">
    <icsm-tabs v-model:active="active8" animated>
      <icsm-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
        {{ t('content') }} {{ index }}
      </icsm-tab>
    </icsm-tabs>
  </demo-block>

  <demo-block :title="t('title9')">
    <icsm-tabs v-model:active="active9" swipeable>
      <icsm-tab :title="t('tab') + index" v-for="index in tabs" :key="index">
        {{ t('content') }} {{ index }}
      </icsm-tab>
    </icsm-tabs>
  </demo-block>

  <demo-block :title="t('title10')">
    <icsm-tabs v-model:active="active10" scrollspy sticky>
      <icsm-tab :title="t('tab') + index" v-for="index in 8" :key="index">
        {{ t('content') }} {{ index }}
      </icsm-tab>
    </icsm-tabs>
  </demo-block>

  <demo-block :title="t('beforeChange')">
    <icsm-tabs v-model:active="active11" :before-change="beforeChange">
      <icsm-tab :title="t('tab') + index" v-for="index in 4" :key="index">
        {{ t('content') }} {{ index }}
      </icsm-tab>
    </icsm-tabs>
  </demo-block>
</template>

<style lang="scss">
.demo-tab {
  margin-bottom: 80vh;

  .icsm-tab .icsm-icon {
    margin-right: 5px;
    vertical-align: -2px;
  }

  .icsm-tab__panel {
    padding: 24px 20px;
    background: var(--icsm-background-2);
  }

  .icsm-tabs--card .icsm-tab__panel {
    background: transparent;
  }
}
</style>
