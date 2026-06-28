<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    type: '加载类型',
    text: '加载文案',
    size: '自定义大小',
    color: '自定义颜色',
    vertical: '垂直排列',
    textColor: '自定义文本颜色',
    customIcon: '自定义图标',
  },
  'en-US': {
    type: 'Type',
    text: 'Text',
    size: 'Size',
    color: 'Color',
    vertical: 'Vertical',
    textColor: 'Text Color',
    customIcon: 'Custom Icon',
  },
});
</script>

<template>
  <demo-block :title="t('type')">
    <fx-loading />
    <fx-loading type="spinner" />
  </demo-block>

  <demo-block :title="t('color')">
    <fx-loading color="#1989fa" />
    <fx-loading type="spinner" color="#1989fa" />
  </demo-block>

  <demo-block :title="t('size')">
    <fx-loading size="24" />
    <fx-loading type="spinner" size="24" />
  </demo-block>

  <demo-block :title="t('text')">
    <fx-loading size="24px">
      {{ t('loading') }}
   </fx-loading>
  </demo-block>

  <demo-block :title="t('vertical')">
    <fx-loading size="24px" vertical>
      {{ t('loading') }}
   </fx-loading>
  </demo-block>

  <demo-block :title="t('textColor')">
    <fx-loading size="24px" vertical color="#0094ff">
      {{ t('loading') }}
   </fx-loading>
    <fx-loading size="24px" vertical text-color="#0094ff">
      {{ t('loading') }}
   </fx-loading>
  </demo-block>

  <demo-block :title="t('customIcon')">
    <fx-loading vertical>
      <template #icon>
        <fx-icon name="star-o" size="30" />
      </template>
      {{ t('loading') }}
   </fx-loading>
  </demo-block>
</template>

<style lang="scss">
.demo-loading {
  .fx-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
}
</style>

