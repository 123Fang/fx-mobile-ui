<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';

const t = useTranslate({
  'zh-CN': {
    setZIndex: '设置 z-index',
    showOverlay: '显示遮罩层',
    embeddedContent: '嵌入内容',
  },
  'en-US': {
    setZIndex: 'Set z-index',
    showOverlay: 'Show Overlay',
    embeddedContent: 'Embedded Content',
  },
});

const show = ref(false);
const showEmbedded = ref(false);
const showZIndex = ref(false);
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <icsm-button
      type="primary"
      :text="t('showOverlay')"
      style="margin-left: 16px"
      @click="show = true"
    />
    <icsm-overlay :show="show" @click="show = false" />
  </demo-block>

  <demo-block :title="t('embeddedContent')">
    <icsm-button
      type="primary"
      :text="t('embeddedContent')"
      style="margin-left: 16px"
      @click="showEmbedded = true"
    />
    <icsm-overlay :show="showEmbedded" @click="showEmbedded = false">
      <div class="wrapper">
        <div class="block" @click.stop />
      </div>
    </icsm-overlay>
  </demo-block>

  <demo-block :title="t('setZIndex')">
    <icsm-button
      type="primary"
      :text="t('setZIndex')"
      style="margin-left: 16px"
      @click="showZIndex = true"
    />
    <icsm-overlay :show="showZIndex" @click="showZIndex = false" z-index="100" />
  </demo-block>
</template>

<style lang="scss">
.demo-overlay {
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: var(--icsm-background-2);
    border-radius: 4px;
  }
}
</style>


