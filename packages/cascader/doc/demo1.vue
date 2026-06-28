<script setup lang="ts">
import { ref } from 'vue'
// import VanField from '../../field';
// import VanPopup from '../../popup';
// import VanCascader, { CascaderOption } from '..';
import { computed, reactive } from 'vue';
// import { useTranslate } from '../../../docs/site';
import { cdnURL, useTranslate } from '@/docs/site';

import { deepClone } from '@/docs/utils/deep-clone';
import zhCNOptions from './area-zh-CN';
import enUSOptions from './area-en-US';
// import { useCurrentLang } from '../../locale';
//Vant 提供了一份中国省市区数据，你可以安装 @vant/area-data npm 包来引入
import { useCascaderAreaData } from '@vant/area-data';
import { closeToast, showLoadingToast } from 'fx-mobile-ui';
// import type { Numeric } from '../../utils';

const lang = ref(localStorage.getItem('lang') || 'zh-CN')

const cascaderAreaData = useCascaderAreaData();

const t = useTranslate({
  'zh-CN': {
    area: '地区',
    options: zhCNOptions,
    selectArea: '请选择地区',
    customColor: '自定义颜色',
    asyncOptions: '异步加载选项',
    asyncOptions1: [
      {
        text: '浙江省',
        value: '330000',
        children: [],
      },
    ],
    asyncOptions2: [
      { text: '杭州市', value: '330100' },
      { text: '宁波市', value: '330200' },
    ],
    currentLevel: (level: number) => `当前为第 ${level} 级`,
    chinaAreaData: '中国省市区数据',
    customContent: '自定义选项上方内容',
    customFieldNames: '自定义字段名',
  },
  'en-US': {
    area: 'Area',
    options: enUSOptions,
    selectArea: 'Select Area',
    customColor: 'Custom Color',
    asyncOptions: 'Async Options',
    asyncOptions1: [
      {
        text: 'Zhejiang',
        value: '330000',
        children: [],
      },
    ],
    asyncOptions2: [
      { text: 'Hangzhou', value: '330100' },
      { text: 'Ningbo', value: '330200' },
    ],
    currentLevel: (level: number) => `Current level is ${level}`,
    chinaAreaData: 'China Area Data',
    customContent: 'Custom Content',
    customFieldNames: 'Custom Field Names',
  },
});

type StateItem = {
  show: boolean;
  value: Numeric | undefined;
  result: string;
  options?: CascaderOption[];
  tabIndex?: number;
};

const baseState = reactive<StateItem>({
  show: false,
  value: '',
  result: '',
});
const chinaAreaDataState = reactive<StateItem>({
  show: false,
  value: '',
  result: '',
});
const customColorState = reactive<StateItem>({
  show: false,
  value: undefined,
  result: '',
});
const asyncState = reactive<StateItem>({
  show: false,
  value: undefined,
  result: '',
  options: t('asyncOptions1'),
});
const customFieldState = reactive<StateItem>({
  show: false,
  value: undefined,
  result: '',
});

const fieldNames = {
  text: 'name',
  value: 'code',
  children: 'items',
};

const customContentState = reactive<StateItem>({
  show: false,
  value: undefined,
  result: '',
});

const customFieldOptions = computed(() => {
  const options = deepClone(t('options'));
  const adjustFieldName = (item: CascaderOption) => {
    if ('text' in item) {
      item.name = item.text;
      delete item.text;
    }
    if ('value' in item) {
      item.code = item.value;
      delete item.value;
    }
    if ('children' in item) {
      item.items = item.children;
      delete item.children;
      item.items.forEach(adjustFieldName);
    }
  };
  options.forEach(adjustFieldName);
  return options;
});

const loadDynamicOptions = ({ value }: CascaderOption) => {
  if (value === '330000' && asyncState.options![0].children?.length === 0) {
    showLoadingToast(t('loading'));
    setTimeout(() => {
      asyncState.options![0].children = t('asyncOptions2');
      closeToast();
    }, 1000);
  }
};

const onFinish = (
  state: StateItem,
  {
    value,
    selectedOptions,
  }: { value: Numeric; selectedOptions: CascaderOption[] },
) => {
  const result = selectedOptions
    .map((option) => option.text || option.name)
    .join('/');

  state.show = false;
  state.value = value;
  state.result = result;
};
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <fx-field
      v-model="baseState.result"
      is-link
      readonly
      :label="t('area')"
      :placeholder="t('selectArea')"
      @click="baseState.show = true"
    />
    <fx-popup
      v-model:show="baseState.show"
      round
      teleport="body"
      position="bottom"
    >
      <fx-cascader
        v-model="baseState.value"
        :title="t('selectArea')"
        :options="t('options')"
        @close="baseState.show = false"
        @finish="onFinish(baseState, $event)"
      />
   </fx-popup>
  </demo-block>

  <demo-block v-if="lang === 'zh-CN'" card :title="t('chinaAreaData')">
    <fx-field
      v-model="chinaAreaDataState.result"
      is-link
      readonly
      :label="t('area')"
      :placeholder="t('selectArea')"
      @click="chinaAreaDataState.show = true"
    />
    <fx-popup
      v-model:show="chinaAreaDataState.show"
      round
      teleport="body"
      position="bottom"
    >
      <fx-cascader
        v-model="chinaAreaDataState.value"
        :title="t('selectArea')"
        :options="cascaderAreaData"
        @close="chinaAreaDataState.show = false"
        @finish="onFinish(chinaAreaDataState, $event)"
      />
   </fx-popup>
  </demo-block>

  <demo-block card :title="t('customColor')">
    <fx-field
      v-model="customColorState.result"
      is-link
      readonly
      :label="t('area')"
      :placeholder="t('selectArea')"
      @click="customColorState.show = true"
    />
    <fx-popup
      v-model:show="customColorState.show"
      round
      teleport="body"
      position="bottom"
    >
      <fx-cascader
        v-model="customColorState.value"
        :title="t('selectArea')"
        :options="t('options')"
        active-color="#ee0a24"
        @close="customColorState.show = false"
        @finish="onFinish(customColorState, $event)"
      />
   </fx-popup>
  </demo-block>

  <demo-block card :title="t('asyncOptions')">
    <fx-field
      v-model="asyncState.result"
      is-link
      readonly
      :label="t('area')"
      :placeholder="t('selectArea')"
      @click="asyncState.show = true"
    />
    <fx-popup
      v-model:show="asyncState.show"
      round
      teleport="body"
      position="bottom"
    >
      <fx-cascader
        v-model="asyncState.value"
        :title="t('selectArea')"
        :options="asyncState.options"
        @close="asyncState.show = false"
        @change="loadDynamicOptions"
        @finish="onFinish(asyncState, $event)"
      />
   </fx-popup>
  </demo-block>

  <demo-block card :title="t('customFieldNames')">
    <fx-field
      v-model="customFieldState.result"
      is-link
      readonly
      :label="t('area')"
      :placeholder="t('selectArea')"
      @click="customFieldState.show = true"
    />
    <fx-popup
      v-model:show="customFieldState.show"
      round
      teleport="body"
      position="bottom"
      safe-area-inset-bottom
    >
      <fx-cascader
        v-model="customFieldState.value"
        :title="t('selectArea')"
        :options="customFieldOptions"
        :field-names="fieldNames"
        @close="customFieldState.show = false"
        @finish="onFinish(customFieldState, $event)"
      />
   </fx-popup>
  </demo-block>

  <demo-block card :title="t('customContent')">
    <fx-field
      v-model="customContentState.result"
      is-link
      readonly
      :label="t('area')"
      :placeholder="t('selectArea')"
      @click="customContentState.show = true"
    />
    <fx-popup
      v-model:show="customContentState.show"
      round
      teleport="body"
      position="bottom"
      safe-area-inset-bottom
    >
      <fx-cascader
        v-model="customContentState.value"
        :title="t('selectArea')"
        :options="customFieldOptions"
        :field-names="fieldNames"
        @close="customContentState.show = false"
        @finish="onFinish(customContentState, $event)"
      >
        <template #options-top="{ tabIndex }">
          <div class="current-level">{{ t('currentLevel', tabIndex + 1) }}</div>
        </template>
     </fx-cascader>
   </fx-popup>
  </demo-block>
</template>

<style lang="scss">
.current-level {
  font-size: 14px;
  padding: 16px 16px 0;
  color: var(--fx-gray-6);
}
</style>
