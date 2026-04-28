<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    type: '类型',
    mark: '标记样式',
    plain: '空心样式',
    round: '圆角样式',
    tagStyle: '样式风格',
    closeable: '可关闭标签',
    smallSize: '小号标签',
    largeSize: '大号标签',
    mediumSize: '中号标签',
    customSize: '标签大小',
    customColor: '自定义颜色',
    customBgColor: '背景颜色',
    customTextColor: '文字颜色',
    customPlainColor: '空心颜色',
  },
  'en-US': {
    mark: 'Mark style',
    plain: 'Plain style',
    round: 'Round style',
    tagStyle: 'Tag Style',
    closeable: 'Closeable',
    smallSize: 'Small Size',
    largeSize: 'Large Size',
    mediumSize: 'Medium Size',
    customColor: 'Custom Color',
    customSize: 'Custom Size',
    customBgColor: 'Background Color',
    customTextColor: 'Text Color',
    customPlainColor: 'Plain Color',
  },
});

const show = ref(true);
const close = () => {
  show.value = false;
};
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <icsm-cell :title="`primary ${t('type')}`">
      <template #value>
        <icsm-tag type="primary">{{ t('tag') }}</icsm-tag>
      </template>
    </icsm-cell>
    <icsm-cell :title="`success ${t('type')}`">
      <template #value>
        <icsm-tag type="success">{{ t('tag') }}</icsm-tag>
      </template>
    </icsm-cell>
    <icsm-cell :title="`danger ${t('type')}`">
      <template #value>
        <icsm-tag type="danger">{{ t('tag') }}</icsm-tag>
      </template>
    </icsm-cell>
    <icsm-cell :title="`warning ${t('type')}`">
      <template #value>
        <icsm-tag type="warning">{{ t('tag') }}</icsm-tag>
      </template>
    </icsm-cell>
  </demo-block>

  <demo-block card :title="t('tagStyle')">
    <icsm-cell :title="t('plain')">
      <template #value>
        <icsm-tag plain type="primary">{{ t('tag') }}</icsm-tag>
      </template>
    </icsm-cell>
    <icsm-cell :title="t('round')">
      <template #value>
        <icsm-tag round type="primary">{{ t('tag') }}</icsm-tag>
      </template>
    </icsm-cell>
    <icsm-cell :title="t('mark')">
      <template #value>
        <icsm-tag mark type="primary">{{ t('tag') }}</icsm-tag>
      </template>
    </icsm-cell>
    <icsm-cell :title="t('closeable')">
      <template #value>
        <icsm-tag
          closeable
          :show="show"
          size="medium"
          type="primary"
          @close="close"
        >
          {{ t('tag') }}
        </icsm-tag>
      </template>
    </icsm-cell>
  </demo-block>

  <demo-block card :title="t('customSize')">
    <icsm-cell :title="t('smallSize')">
      <template #value>
        <icsm-tag type="primary">{{ t('tag') }}</icsm-tag>
      </template>
    </icsm-cell>
    <icsm-cell :title="t('mediumSize')">
      <template #value>
        <icsm-tag type="primary" size="medium">{{ t('tag') }}</icsm-tag>
      </template>
    </icsm-cell>
    <icsm-cell :title="t('largeSize')">
      <template #value>
        <icsm-tag type="primary" size="large">{{ t('tag') }}</icsm-tag>
      </template>
    </icsm-cell>
  </demo-block>

  <demo-block card :title="t('customColor')">
    <icsm-cell :title="t('customBgColor')">
      <template #value>
        <icsm-tag color="#7232dd">{{ t('tag') }}</icsm-tag>
      </template>
    </icsm-cell>
    <icsm-cell :title="t('customTextColor')">
      <template #value>
        <icsm-tag color="#ffe1e1" text-color="#ad0000">{{ t('tag') }}</icsm-tag>
      </template>
    </icsm-cell>
    <icsm-cell :title="t('customPlainColor')">
      <template #value>
        <icsm-tag color="#7232dd" plain>{{ t('tag') }}</icsm-tag>
      </template>
    </icsm-cell>
  </demo-block>
</template>

<style lang="scss">
.demo-tag {
  .icsm-tag + .icsm-tag {
    margin-left: var(--icsm-padding-xs);
  }
}
</style>
