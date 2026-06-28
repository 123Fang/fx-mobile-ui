<script setup lang="ts">

import { ref, reactive } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';
import { useRefs } from '@/docs/composables/use-refs';


const t = useTranslate({
  'zh-CN': {
    checkbox: '复选框',
    customIcon: '自定义图标',
    customIconSize: '自定义大小',
    customColor: '自定义颜色',
    customShape: '自定义形状',
    leftLabel: '左侧文本',
    title3: '复选框组',
    title4: '限制最大可选数',
    title5: '搭配单元格组件使用',
    toggleAll: '全选与反选',
    checkAll: '全选',
    inverse: '反选',
    horizontal: '水平排列',
    disableLabel: '禁用文本点击',
    indeterminate: '不确定状态',
  },
  'en-US': {
    checkbox: 'Checkbox',
    customIcon: 'Custom Icon',
    customIconSize: 'Custom Icon Size',
    customColor: 'Custom Color',
    customShape: 'Custom Shape',
    leftLabel: 'Left Label',
    title3: 'Checkbox Group',
    title4: 'Maximum amount of checked options',
    title5: 'Inside a Cell',
    toggleAll: 'Toggle All',
    checkAll: 'Check All',
    inverse: 'Inverse',
    horizontal: 'Horizontal',
    disableLabel: 'Disable label click',
    indeterminate: 'indeterminate',
  },
});

const state = reactive({
  checkbox1: true,
  checkbox2: true,
  checkbox3: true,
  isCheckAll: false,
  isIndeterminate: true,
  checkboxLabel: true,
  checkboxIcon: true,
  leftLabel: false,
  list: ['a', 'b'],
  result: ['a', 'b'],
  checkboxShape: ['a', 'b'],
  result2: [],
  result3: [],
  result4: ['a', 'b', 'd'],
  checkAllResult: [],
  horizontalResult: [],
});

const list = ['a', 'b', 'c', 'd'];

const activeIcon = cdnURL('user-active.png');
const inactiveIcon = cdnURL('user-inactive.png');

const group = ref<CheckboxGroupInstance>();
const [refs, setRefs] = useRefs<CheckboxInstance>();

const toggle = (index: number) => {
  refs.value[index].toggle();
};

const checkAll = () => {
  group.value?.toggleAll(true);
};

const toggleAll = () => {
  group.value?.toggleAll();
};

const checkAllChange = (val: boolean) => {
  state.result4 = val ? list : [];
  state.isIndeterminate = false;
};

const checkedResultChange = (value: string[]) => {
  const checkedCount = value.length;
  state.isCheckAll = checkedCount === list.length;
  state.isIndeterminate = checkedCount > 0 && checkedCount < list.length;
};
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <fx-checkbox v-model="state.checkbox1">{{ t('checkbox') }}</fx-checkbox>
  </demo-block>

  <demo-block :title="t('disabled')">
    <fx-checkbox :model-value="false" disabled>
      {{ t('checkbox') }}
   </fx-checkbox>
    <fx-checkbox :model-value="true" disabled>
      {{ t('checkbox') }}
   </fx-checkbox>
  </demo-block>

  <demo-block :title="t('customShape')">
    <fx-checkbox-group v-model="state.checkboxShape" shape="square">
      <fx-checkbox name="a">{{ t('customShape') }} a</fx-checkbox>
      <fx-checkbox name="b">{{ t('customShape') }} b</fx-checkbox>
   </fx-checkbox-group>
  </demo-block>

  <demo-block :title="t('customColor')">
    <fx-checkbox v-model="state.checkbox2" checked-color="#ee0a24">
      {{ t('customColor') }}
   </fx-checkbox>
  </demo-block>

  <demo-block :title="t('customIconSize')">
    <fx-checkbox v-model="state.checkboxIcon" icon-size="24px">
      {{ t('customIconSize') }}
   </fx-checkbox>
  </demo-block>

  <demo-block :title="t('customIcon')">
    <fx-checkbox v-model="state.checkbox3">
      {{ t('customIcon') }}
      <template #icon="{ checked }">
        <img :src="checked ? activeIcon : inactiveIcon" />
      </template>
   </fx-checkbox>
  </demo-block>

  <demo-block :title="t('leftLabel')">
    <fx-checkbox v-model="state.leftLabel" label-position="left">
      {{ t('leftLabel') }}
   </fx-checkbox>
  </demo-block>

  <demo-block :title="t('disableLabel')">
    <fx-checkbox v-model="state.checkboxLabel" label-disabled>
      {{ t('checkbox') }}
   </fx-checkbox>
  </demo-block>

  <demo-block :title="t('title3')">
    <fx-checkbox-group v-model="state.result">
      <fx-checkbox name="a">{{ t('checkbox') }} a</fx-checkbox>
      <fx-checkbox name="b">{{ t('checkbox') }} b</fx-checkbox>
   </fx-checkbox-group>
  </demo-block>

  <demo-block :title="t('horizontal')">
    <fx-checkbox-group v-model="state.horizontalResult" direction="horizontal">
      <fx-checkbox name="a">{{ t('checkbox') }} a</fx-checkbox>
      <fx-checkbox name="b">{{ t('checkbox') }} b</fx-checkbox>
   </fx-checkbox-group>
  </demo-block>

  <demo-block :title="t('title4')">
    <fx-checkbox-group v-model="state.result2" :max="2">
      <fx-checkbox name="a">{{ t('checkbox') }} a</fx-checkbox>
      <fx-checkbox name="b">{{ t('checkbox') }} b</fx-checkbox>
      <fx-checkbox name="c">{{ t('checkbox') }} c</fx-checkbox>
   </fx-checkbox-group>
  </demo-block>

  <demo-block :title="t('toggleAll')">
    <fx-checkbox-group v-model="state.checkAllResult" ref="group">
      <fx-checkbox name="a">{{ t('checkbox') }} a</fx-checkbox>
      <fx-checkbox name="b">{{ t('checkbox') }} b</fx-checkbox>
      <fx-checkbox name="c">{{ t('checkbox') }} c</fx-checkbox>
   </fx-checkbox-group>

    <div class="demo-checkbox-buttons">
      <fx-button type="primary" @click="checkAll">
        {{ t('checkAll') }}
     </fx-button>
      <fx-button type="primary" @click="toggleAll">
        {{ t('inverse') }}
     </fx-button>
    </div>
  </demo-block>

  <demo-block :title="t('title5')">
    <fx-checkbox-group v-model="state.result3">
      <fx-cell-group inset>
        <fx-cell
          v-for="(item, index) in state.list"
          clickable
          :key="index"
          :title="`${t('checkbox')} ${item}`"
          @click="toggle(index)"
        >
          <template #right-icon>
            <fx-checkbox :ref="setRefs(index)" :name="item" @click.stop />
          </template>
       </fx-cell>
     </fx-cell-group>
   </fx-checkbox-group>
  </demo-block>

  <demo-block :title="t('indeterminate')">
    <fx-checkbox
      v-model="state.isCheckAll"
      :indeterminate="state.isIndeterminate"
      @change="checkAllChange"
    >
      {{ t('checkAll') }}
   </fx-checkbox>
    <div class="divider" />
    <fx-checkbox-group v-model="state.result4" @change="checkedResultChange">
      <fx-checkbox v-for="item in list" :key="item" :name="item">
        {{ t('checkbox') }} {{ item }}
     </fx-checkbox>
   </fx-checkbox-group>
  </demo-block>
</template>

<style lang="scss">
.demo-checkbox {
  .fx-checkbox {
    margin: 0 0 8px 20px;
  }

  .fx-cell {
    .fx-checkbox {
      margin: 0;
    }
  }

  img {
    height: 20px;
  }

  &-buttons {
    margin-top: var(--fx-padding-md);

    .fx-button {
      margin-left: var(--fx-padding-md);
    }
  }

  .fx-doc-demo-block__title {
    margin-top: -8px;
  }
}

.divider {
  margin: 20px;
  height: 1px;
  background: #ccc;
}
</style>
