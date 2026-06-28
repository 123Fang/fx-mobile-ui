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
    <fx-cell :title="`primary ${t('type')}`">
      <template #value>
        <fx-tag type="primary">{{ t('tag') }}</fx-tag>
      </template>
   </fx-cell>
    <fx-cell :title="`success ${t('type')}`">
      <template #value>
        <fx-tag type="success">{{ t('tag') }}</fx-tag>
      </template>
   </fx-cell>
    <fx-cell :title="`danger ${t('type')}`">
      <template #value>
        <fx-tag type="danger">{{ t('tag') }}</fx-tag>
      </template>
   </fx-cell>
    <fx-cell :title="`warning ${t('type')}`">
      <template #value>
        <fx-tag type="warning">{{ t('tag') }}</fx-tag>
      </template>
   </fx-cell>
  </demo-block>

  <demo-block card :title="t('tagStyle')">
    <fx-cell :title="t('plain')">
      <template #value>
        <fx-tag plain type="primary">{{ t('tag') }}</fx-tag>
      </template>
   </fx-cell>
    <fx-cell :title="t('round')">
      <template #value>
        <fx-tag round type="primary">{{ t('tag') }}</fx-tag>
      </template>
   </fx-cell>
    <fx-cell :title="t('mark')">
      <template #value>
        <fx-tag mark type="primary">{{ t('tag') }}</fx-tag>
      </template>
   </fx-cell>
    <fx-cell :title="t('closeable')">
      <template #value>
        <fx-tag
          closeable
          :show="show"
          size="medium"
          type="primary"
          @close="close"
        >
          {{ t('tag') }}
       </fx-tag>
      </template>
   </fx-cell>
  </demo-block>

  <demo-block card :title="t('customSize')">
    <fx-cell :title="t('smallSize')">
      <template #value>
        <fx-tag type="primary">{{ t('tag') }}</fx-tag>
      </template>
   </fx-cell>
    <fx-cell :title="t('mediumSize')">
      <template #value>
        <fx-tag type="primary" size="medium">{{ t('tag') }}</fx-tag>
      </template>
   </fx-cell>
    <fx-cell :title="t('largeSize')">
      <template #value>
        <fx-tag type="primary" size="large">{{ t('tag') }}</fx-tag>
      </template>
   </fx-cell>
  </demo-block>

  <demo-block card :title="t('customColor')">
    <fx-cell :title="t('customBgColor')">
      <template #value>
        <fx-tag color="#7232dd">{{ t('tag') }}</fx-tag>
      </template>
   </fx-cell>
    <fx-cell :title="t('customTextColor')">
      <template #value>
        <fx-tag color="#ffe1e1" text-color="#ad0000">{{ t('tag') }}</fx-tag>
      </template>
   </fx-cell>
    <fx-cell :title="t('customPlainColor')">
      <template #value>
        <fx-tag color="#7232dd" plain>{{ t('tag') }}</fx-tag>
      </template>
   </fx-cell>
  </demo-block>
</template>

<style lang="scss">
.demo-tag {
  .fx-tag + .fx-tag {
    margin-left: var(--fx-padding-xs);
  }
}
</style>
