<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';
import { showToast } from 'fx-mobile-ui';

const t = useTranslate({
  'zh-CN': {
    badge: '徽标提示',
    customIcon: '自定义图标',
    customColor: '自定义颜色',
    matchByName: '通过名称匹配',
    switchEvent: '监听切换事件',
  },
  'en-US': {
    badge: 'Show Badge',
    customIcon: 'Custom Icon',
    customColor: 'Custom Color',
    matchByName: 'Match by name',
    switchEvent: 'Change Event',
  },
});

const active = ref(0);
const active2 = ref(0);
const active3 = ref(0);
const active4 = ref(0);
const active5 = ref(0);
const activeName = ref('home');

const icon = {
  active: cdnURL('user-active.png'),
  inactive: cdnURL('user-inactive.png'),
};

const onChange = (index: number) => {
  showToast(`${t('tab')} ${index + 1}`);
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <fx-tabbar v-model="active">
      <fx-tabbar-item icon="home-o">{{ t('tab') }}</fx-tabbar-item>
      <fx-tabbar-item icon="search">{{ t('tab') }}</fx-tabbar-item>
      <fx-tabbar-item icon="friends-o">{{ t('tab') }}</fx-tabbar-item>
      <fx-tabbar-item icon="setting-o">{{ t('tab') }}</fx-tabbar-item>
   </fx-tabbar>
  </demo-block>

  <demo-block :title="t('matchByName')">
    <fx-tabbar v-model="activeName">
      <fx-tabbar-item name="home" icon="home-o">
        {{ t('tab') }}
     </fx-tabbar-item>
      <fx-tabbar-item name="search" icon="search">
        {{ t('tab') }}
     </fx-tabbar-item>
      <fx-tabbar-item name="friends" icon="friends-o">
        {{ t('tab') }}
     </fx-tabbar-item>
      <fx-tabbar-item name="setting" icon="setting-o">
        {{ t('tab') }}
     </fx-tabbar-item>
   </fx-tabbar>
  </demo-block>

  <demo-block :title="t('badge')">
    <fx-tabbar v-model="active2">
      <fx-tabbar-item icon="home-o">{{ t('tab') }}</fx-tabbar-item>
      <fx-tabbar-item icon="search" dot>{{ t('tab') }}</fx-tabbar-item>
      <fx-tabbar-item icon="friends-o" badge="5">
        {{ t('tab') }}
     </fx-tabbar-item>
      <fx-tabbar-item icon="setting-o" badge="20">
        {{ t('tab') }}
     </fx-tabbar-item>
   </fx-tabbar>
  </demo-block>

  <demo-block :title="t('customIcon')">
    <fx-tabbar v-model="active3">
      <fx-tabbar-item badge="3">
        <span>{{ t('custom') }}</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
     </fx-tabbar-item>
      <fx-tabbar-item icon="search">{{ t('tab') }}</fx-tabbar-item>
      <fx-tabbar-item icon="setting-o">{{ t('tab') }}</fx-tabbar-item>
   </fx-tabbar>
  </demo-block>

  <demo-block :title="t('customColor')">
    <fx-tabbar v-model="active4" active-color="#ee0a24">
      <fx-tabbar-item icon="home-o">{{ t('tab') }}</fx-tabbar-item>
      <fx-tabbar-item icon="search">{{ t('tab') }}</fx-tabbar-item>
      <fx-tabbar-item icon="friends-o">{{ t('tab') }}</fx-tabbar-item>
      <fx-tabbar-item icon="setting-o">{{ t('tab') }}</fx-tabbar-item>
   </fx-tabbar>
  </demo-block>

  <demo-block :title="t('switchEvent')">
    <fx-tabbar v-model="active5" @change="onChange">
      <fx-tabbar-item icon="home-o">{{ `${t('tab')} 1` }}</fx-tabbar-item>
      <fx-tabbar-item icon="search">{{ `${t('tab')} 2` }}</fx-tabbar-item>
      <fx-tabbar-item icon="friends-o">{{ `${t('tab')} 3` }}</fx-tabbar-item>
      <fx-tabbar-item icon="setting-o">{{ `${t('tab')} 4` }}</fx-tabbar-item>
   </fx-tabbar>
  </demo-block>
</template>

<style lang="scss">
.demo-tabbar {
  .fx-tabbar {
    position: relative;
    padding-bottom: 0;
  }
}
</style>

