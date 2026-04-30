<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';
import { showToast } from 'ctf-ics-mobile-ui';

const t = useTranslate({
  'zh-CN': {
    title: '标签名',
    disabled: '禁用选项',
    showBadge: '徽标提示',
    changeEvent: '监听切换事件',
  },
  'en-US': {
    disabled: 'Disabled',
    showBadge: 'Show Badge',
    changeEvent: 'Change Event',
  },
});

const active1 = ref(0);
const active2 = ref(0);
const active3 = ref(0);
const active4 = ref(0);

const onChange = (index: number) => showToast(`${t('title')} ${index + 1}`);
</script>

<template>
  <icsm-grid :column-num="2" :border="false">
    <icsm-grid-item>
      <h3 class="demo-sidebar-title">{{ t('basicUsage') }}</h3>
      <icsm-sidebar v-model="active1">
        <icsm-sidebar-item :title="t('title')" />
        <icsm-sidebar-item :title="t('title')" />
        <icsm-sidebar-item :title="t('title')" />
      </icsm-sidebar>
    </icsm-grid-item>

    <icsm-grid-item>
      <h3 class="demo-sidebar-title">{{ t('showBadge') }}</h3>
      <icsm-sidebar v-model="active2">
        <icsm-sidebar-item :title="t('title')" dot />
        <icsm-sidebar-item :title="t('title')" badge="5" />
        <icsm-sidebar-item :title="t('title')" />
      </icsm-sidebar>
    </icsm-grid-item>

    <icsm-grid-item>
      <h3 class="demo-sidebar-title">{{ t('disabled') }}</h3>
      <icsm-sidebar v-model="active3">
        <icsm-sidebar-item :title="t('title')" />
        <icsm-sidebar-item :title="t('title')" disabled />
        <icsm-sidebar-item :title="t('title')" />
      </icsm-sidebar>
    </icsm-grid-item>

    <icsm-grid-item>
      <h3 class="demo-sidebar-title">{{ t('changeEvent') }}</h3>
      <icsm-sidebar v-model="active4" @change="onChange">
        <icsm-sidebar-item :title="`${t('title')} 1`" />
        <icsm-sidebar-item :title="`${t('title')} 2`" />
        <icsm-sidebar-item :title="`${t('title')} 3`" />
      </icsm-sidebar>
    </icsm-grid-item>
  </icsm-grid>
</template>

<style lang="scss">
.demo-sidebar {
  background-color: var(--icsm-background-2);

  .icsm-sidebar {
    margin-left: var(--icsm-padding-md);
  }

  &-title {
    margin-bottom: 16px;
    color: var(--icsm-text-color-2);
    font-weight: normal;
    font-size: 14px;
  }
}
</style>


