<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';
import { showToast } from 'ctf-ics-mobile-ui';

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
    <icsm-tabbar v-model="active">
      <icsm-tabbar-item icon="home-o">{{ t('tab') }}</icsm-tabbar-item>
      <icsm-tabbar-item icon="search">{{ t('tab') }}</icsm-tabbar-item>
      <icsm-tabbar-item icon="friends-o">{{ t('tab') }}</icsm-tabbar-item>
      <icsm-tabbar-item icon="setting-o">{{ t('tab') }}</icsm-tabbar-item>
    </icsm-tabbar>
  </demo-block>

  <demo-block :title="t('matchByName')">
    <icsm-tabbar v-model="activeName">
      <icsm-tabbar-item name="home" icon="home-o">
        {{ t('tab') }}
      </icsm-tabbar-item>
      <icsm-tabbar-item name="search" icon="search">
        {{ t('tab') }}
      </icsm-tabbar-item>
      <icsm-tabbar-item name="friends" icon="friends-o">
        {{ t('tab') }}
      </icsm-tabbar-item>
      <icsm-tabbar-item name="setting" icon="setting-o">
        {{ t('tab') }}
      </icsm-tabbar-item>
    </icsm-tabbar>
  </demo-block>

  <demo-block :title="t('badge')">
    <icsm-tabbar v-model="active2">
      <icsm-tabbar-item icon="home-o">{{ t('tab') }}</icsm-tabbar-item>
      <icsm-tabbar-item icon="search" dot>{{ t('tab') }}</icsm-tabbar-item>
      <icsm-tabbar-item icon="friends-o" badge="5">
        {{ t('tab') }}
      </icsm-tabbar-item>
      <icsm-tabbar-item icon="setting-o" badge="20">
        {{ t('tab') }}
      </icsm-tabbar-item>
    </icsm-tabbar>
  </demo-block>

  <demo-block :title="t('customIcon')">
    <icsm-tabbar v-model="active3">
      <icsm-tabbar-item badge="3">
        <span>{{ t('custom') }}</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </icsm-tabbar-item>
      <icsm-tabbar-item icon="search">{{ t('tab') }}</icsm-tabbar-item>
      <icsm-tabbar-item icon="setting-o">{{ t('tab') }}</icsm-tabbar-item>
    </icsm-tabbar>
  </demo-block>

  <demo-block :title="t('customColor')">
    <icsm-tabbar v-model="active4" active-color="#ee0a24">
      <icsm-tabbar-item icon="home-o">{{ t('tab') }}</icsm-tabbar-item>
      <icsm-tabbar-item icon="search">{{ t('tab') }}</icsm-tabbar-item>
      <icsm-tabbar-item icon="friends-o">{{ t('tab') }}</icsm-tabbar-item>
      <icsm-tabbar-item icon="setting-o">{{ t('tab') }}</icsm-tabbar-item>
    </icsm-tabbar>
  </demo-block>

  <demo-block :title="t('switchEvent')">
    <icsm-tabbar v-model="active5" @change="onChange">
      <icsm-tabbar-item icon="home-o">{{ `${t('tab')} 1` }}</icsm-tabbar-item>
      <icsm-tabbar-item icon="search">{{ `${t('tab')} 2` }}</icsm-tabbar-item>
      <icsm-tabbar-item icon="friends-o">{{ `${t('tab')} 3` }}</icsm-tabbar-item>
      <icsm-tabbar-item icon="setting-o">{{ `${t('tab')} 4` }}</icsm-tabbar-item>
    </icsm-tabbar>
  </demo-block>
</template>

<style lang="scss">
.demo-tabbar {
  .icsm-tabbar {
    position: relative;
    padding-bottom: 0;
  }
}
</style>

