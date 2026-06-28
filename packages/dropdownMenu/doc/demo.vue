<script setup lang="ts">
import { computed, ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';

const t = useTranslate({
  'zh-CN': {
    disableMenu: '禁用菜单',
    switchTitle1: '包邮',
    switchTitle2: '团购',
    itemTitle: '筛选',
    expandDirection: '向上展开',
    customContent: '自定义菜单内容',
    customActiveColor: '自定义选中态颜色',
    swipeItems: '横向滚动',
    option1: [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ],
    option2: [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ],
  },
  'en-US': {
    disableMenu: 'Disable Menu',
    switchTitle1: 'Title',
    switchTitle2: 'Title',
    itemTitle: 'Title',
    expandDirection: 'Expand Direction',
    customContent: 'Custom Content',
    customActiveColor: 'Custom Active Color',
    swipeItems: 'Swipe Items',
    option1: [
      { text: 'Option1', value: 0 },
      { text: 'Option2', value: 1 },
      { text: 'Option3', value: 2 },
    ],
    option2: [
      { text: 'Option A', value: 'a' },
      { text: 'Option B', value: 'b' },
      { text: 'Option C', value: 'c' },
    ],
  },
});

const item = ref<DropdownItemInstance>();

const switch1 = ref(true);
const switch2 = ref(false);
const value1 = ref(0);
const value2 = ref('a');

const option1 = computed(() => t('option1'));
const option2 = computed(() => t('option2'));

const onConfirm = () => {
  item.value?.innerRef?.toggle();
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <fx-dropdown-menu>
      <fx-dropdown-item v-model="value1" :options="option1" />
      <fx-dropdown-item v-model="value2" :options="option2" />
   </fx-dropdown-menu>
  </demo-block>

  <demo-block :title="t('customContent')">
    <fx-dropdown-menu>
      <fx-dropdown-item v-model="value1" :options="option1" />
      <fx-dropdown-item :title="t('itemTitle')" ref="item">
        <fx-cell center :title="t('switchTitle1')">
          <template #right-icon>
            <fx-switch v-model="switch1" />
          </template>
       </fx-cell>
        <fx-cell center :title="t('switchTitle2')">
          <template #right-icon>
            <fx-switch v-model="switch2" />
          </template>
       </fx-cell>
        <div style="padding: 5px 16px">
          <fx-button
            type="primary"
            block
            round
            style="height: 40px"
            @click="onConfirm"
          >
            {{ t('confirm') }}
         </fx-button>
        </div>
     </fx-dropdown-item>
   </fx-dropdown-menu>
  </demo-block>

  <demo-block :title="t('customActiveColor')">
    <fx-dropdown-menu active-color="#ee0a24">
      <fx-dropdown-item v-model="value1" :options="option1" />
      <fx-dropdown-item v-model="value2" :options="option2" />
   </fx-dropdown-menu>
  </demo-block>

  <demo-block :title="t('swipeItems')">
    <fx-dropdown-menu swipe-threshold="4">
      <fx-dropdown-item v-model="value1" :options="option1" />
      <fx-dropdown-item v-model="value2" :options="option2" />
      <fx-dropdown-item v-model="value2" :options="option2" />
      <fx-dropdown-item v-model="value2" :options="option2" />
      <fx-dropdown-item v-model="value2" :options="option2" />
   </fx-dropdown-menu>
  </demo-block>

  <demo-block :title="t('expandDirection')">
    <fx-dropdown-menu direction="up">
      <fx-dropdown-item v-model="value1" :options="option1" />
      <fx-dropdown-item v-model="value2" :options="option2" />
   </fx-dropdown-menu>
  </demo-block>

  <demo-block :title="t('disableMenu')">
    <fx-dropdown-menu>
      <fx-dropdown-item v-model="value1" disabled :options="option1" />
      <fx-dropdown-item v-model="value2" disabled :options="option2" />
   </fx-dropdown-menu>
  </demo-block>
</template>


