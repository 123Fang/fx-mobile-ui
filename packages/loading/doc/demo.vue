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
    <icsm-loading />
    <icsm-loading type="spinner" />
  </demo-block>

  <demo-block :title="t('color')">
    <icsm-loading color="#1989fa" />
    <icsm-loading type="spinner" color="#1989fa" />
  </demo-block>

  <demo-block :title="t('size')">
    <icsm-loading size="24" />
    <icsm-loading type="spinner" size="24" />
  </demo-block>

  <demo-block :title="t('text')">
    <icsm-loading size="24px">
      {{ t('loading') }}
    </icsm-loading>
  </demo-block>

  <demo-block :title="t('vertical')">
    <icsm-loading size="24px" vertical>
      {{ t('loading') }}
    </icsm-loading>
  </demo-block>

  <demo-block :title="t('textColor')">
    <icsm-loading size="24px" vertical color="#0094ff">
      {{ t('loading') }}
    </icsm-loading>
    <icsm-loading size="24px" vertical text-color="#0094ff">
      {{ t('loading') }}
    </icsm-loading>
  </demo-block>

  <demo-block :title="t('customIcon')">
    <icsm-loading vertical>
      <template #icon>
        <icsm-icon name="star-o" size="30" />
      </template>
      {{ t('loading') }}
    </icsm-loading>
  </demo-block>
</template>

<style lang="scss">
.demo-loading {
  .icsm-loading {
    display: inline-block;
    margin: 5px 0 5px 20px;

    &--vertical {
      display: inline-flex;
    }
  }
}
</style>

