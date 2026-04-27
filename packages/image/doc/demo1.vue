<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';

const t = useTranslate({
  'zh-CN': {
    fitMode: '填充模式',
    position: '图片位置',
    round: '圆形图片',
    loading: '加载中提示',
    error: '加载失败提示',
    defaultTip: '默认提示',
    customTip: '自定义提示',
    loadFail: '加载失败',
  },
  'en-US': {
    fitMode: 'Fit Mode',
    position: 'Position',
    round: 'Round',
    loading: 'Loading',
    error: 'Error',
    defaultTip: 'Default Tip',
    customTip: 'Custom Tip',
    loadFail: 'Load failed',
  },
});

const image = cdnURL('cat.jpeg');
const fits = ['contain', 'cover', 'fill', 'none', 'scale-down'] as const;
const positions1 = ['left', 'center', 'right'] as const;
const positions2 = ['top', 'center', 'bottom'] as const;
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <icsm-row>
      <icsm-image width="100" height="100" :src="image" />
    </icsm-row>
  </demo-block>

  <demo-block :title="t('fitMode')">
    <icsm-row gutter="20">
      <icsm-col v-for="fit in fits" span="8" :key="fit">
        <icsm-image :fit="fit" width="100%" height="27vw" :src="image" />
        <div class="text">{{ fit }}</div>
      </icsm-col>
    </icsm-row>
  </demo-block>

  <demo-block :title="t('position')">
    <icsm-row gutter="20">
      <icsm-col v-for="pos in positions1" span="8" :key="pos">
        <icsm-image
          :position="pos"
          width="100%"
          height="27vw"
          fit="cover"
          :src="image"
        />
        <div class="text">cover</div>
        <div class="text">{{ pos }}</div>
      </icsm-col>
      <icsm-col v-for="pos in positions2" span="8" :key="pos">
        <icsm-image
          :position="pos"
          width="100%"
          height="27vw"
          fit="contain"
          :src="image"
        />
        <div class="text">contain</div>
        <div class="text">{{ pos }}</div>
      </icsm-col>
    </icsm-row>
  </demo-block>

  <demo-block :title="t('round')">
    <icsm-row gutter="20">
      <icsm-col v-for="fit in fits" span="8" :key="fit">
        <icsm-image round :fit="fit" width="100%" height="27vw" :src="image" />
        <div class="text">{{ fit }}</div>
      </icsm-col>
    </icsm-row>
  </demo-block>

  <demo-block :title="t('loading')">
    <icsm-row gutter="20">
      <icsm-col span="8">
        <icsm-image width="100%" height="27vw" />
        <div class="text">{{ t('defaultTip') }}</div>
      </icsm-col>

      <icsm-col span="8">
        <icsm-image width="100%" height="27vw">
          <template #loading>
            <icsm-loading type="spinner" size="20" />
          </template>
        </icsm-image>
        <div class="text">{{ t('customTip') }}</div>
      </icsm-col>
    </icsm-row>
  </demo-block>

  <demo-block :title="t('error')">
    <icsm-row gutter="20">
      <icsm-col span="8">
        <icsm-image width="100%" height="27vw" src="http://x" />
        <div class="text">{{ t('defaultTip') }}</div>
      </icsm-col>

      <icsm-col span="8">
        <icsm-image width="100%" height="27vw" src="http://x">
          <template #error>{{ t('loadFail') }}</template>
        </icsm-image>
        <div class="text">{{ t('customTip') }}</div>
      </icsm-col>
    </icsm-row>
  </demo-block>
</template>

<style lang="scss">
.demo-image {
  overflow-x: hidden;
  background-color: var(--icsm-background-2);

  .icsm-row {
    padding: 0 var(--icsm-padding-md);
  }

  .icsm-col {
    margin-bottom: 20px;
  }

  .text {
    margin-top: 5px;
    color: var(--icsm-gray-7);
    font-size: 14px;
    text-align: center;
  }
}
</style>
