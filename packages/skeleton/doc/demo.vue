<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    showAvatar: '显示头像',
    showChildren: '显示子组件',
    title: '关于 Vant',
    desc: 'Vant 是一套轻量、可定制的移动端 Vue 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。',
    customContent: '自定义展示内容',
  },
  'en-US': {
    showAvatar: 'Show Avatar',
    showChildren: 'Show Children',
    title: 'About Vant',
    desc: 'Vant is a set of Mobile UI Components built on Vue.',
    customContent: 'Custom Content',
  },
});

const show = ref(false);
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <fx-skeleton title :row="3" />
  </demo-block>

  <demo-block :title="t('showAvatar')">
    <fx-skeleton title avatar :row="3" />
  </demo-block>

  <demo-block :title="t('showChildren')">
    <fx-switch v-model="show" />
    <fx-skeleton title avatar :row="3" :loading="!show">
      <div class="demo-preview">
        <img :src="cdnURL('logo.png')" />
        <div class="demo-content">
          <h3>{{ t('title') }}</h3>
          <p>{{ t('desc') }}</p>
        </div>
      </div>
   </fx-skeleton>
  </demo-block>

  <demo-block :title="t('customContent')">
    <fx-skeleton>
      <template #template>
        <div :style="{ display: 'flex', width: '100%' }">
          <fx-skeleton-image />
          <div :style="{ flex: 1, marginLeft: '16px' }">
            <fx-skeleton-paragraph row-width="60%" />
            <fx-skeleton-paragraph />
            <fx-skeleton-paragraph />
            <fx-skeleton-paragraph />
          </div>
        </div>
      </template>
   </fx-skeleton>
  </demo-block>
</template>

<style lang="scss">
.demo-skeleton {
  background-color: var(--fx-background-2);

  .fx-switch {
    margin: 0 var(--fx-padding-md) var(--fx-padding-xs);
  }

  .demo-preview {
    display: flex;
    padding: 0 var(--fx-padding-md);

    .demo-content {
      padding-top: 6px;

      h3 {
        margin: 0;
        font-size: 18px;
        line-height: 20px;
      }

      p {
        margin: 13px 0 0;
        font-size: 14px;
        line-height: 20px;
      }
    }

    img {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      margin-right: var(--fx-padding-md);
    }
  }
}
</style>



