<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';

import FieldTypeArea from './FieldTypeArea.vue';
import FieldTypePicker from './FieldTypePicker.vue';
import FieldTypeCalendar from './FieldTypeCalendar.vue';
import FieldTypeDatePicker from './FieldTypeDatePicker.vue';

const t = useTranslate({
  'zh-CN': {
    rate: '评分',
    radio: '单选框',
    submit: '提交',
    switch: '开关',
    slider: '滑块',
    picker: '选择器',
    stepper: '步进器',
    checkbox: '复选框',
    uploader: '文件上传',
    fieldType: '表单项类型',
    checkboxGroup: '复选框组',
    requireCheckbox: '请勾选复选框',
  },
  'en-US': {
    rate: 'Rate',
    radio: 'Radio',
    submit: 'Submit',
    switch: 'Switch',
    slider: 'Slider',
    picker: 'Picker',
    stepper: 'Stepper',
    checkbox: 'Checkbox',
    uploader: 'Uploader',
    fieldType: 'Field Type',
    checkboxGroup: 'Checkbox Group',
    requireCheckbox: 'Checkbox is required',
  },
});

const rate = ref(3);
const radio = ref('1');
const slider = ref(50);
const stepper = ref(1);
const uploader = ref([{ url: cdnURL('leaf.jpeg') }]);
const checkbox = ref(false);
const checkboxGroup = ref([]);
const switchChecked = ref(false);

const onSubmit = (values: Record<string, string>) => {
  console.log(values);
};
</script>

<template>
  <demo-block :title="t('fieldType')">
    <fx-form @submit="onSubmit">
      <fx-cell-group inset>
        <fx-field name="switch" :label="t('switch')">
          <template #input>
            <fx-switch v-model="switchChecked" />
          </template>
       </fx-field>

        <fx-field name="checkbox" :label="t('checkbox')">
          <template #input>
            <fx-checkbox v-model="checkbox" shape="square" />
          </template>
       </fx-field>

        <fx-field name="checkboxGroup" :label="t('checkboxGroup')">
          <template #input>
            <fx-checkbox-group v-model="checkboxGroup" direction="horizontal">
              <fx-checkbox name="1" shape="square">
                {{ t('checkbox') }} 1
             </fx-checkbox>
              <fx-checkbox name="2" shape="square">
                {{ t('checkbox') }} 2
             </fx-checkbox>
           </fx-checkbox-group>
          </template>
       </fx-field>

        <fx-field name="radio" :label="t('radio')">
          <template #input>
            <fx-radio-group v-model="radio" direction="horizontal">
              <fx-radio name="1">{{ t('radio') }} 1</fx-radio>
              <fx-radio name="2">{{ t('radio') }} 2</fx-radio>
           </fx-radio-group>
          </template>
       </fx-field>

        <fx-field name="stepper" :label="t('stepper')">
          <template #input>
            <fx-stepper v-model="stepper" />
          </template>
       </fx-field>

        <fx-field name="rate" :label="t('rate')">
          <template #input>
            <fx-rate v-model="rate" />
          </template>
       </fx-field>

        <fx-field name="slider" :label="t('slider')">
          <template #input>
            <fx-slider v-model="slider" />
          </template>
       </fx-field>

        <fx-field name="uploader" :label="t('uploader')">
          <template #input>
            <fx-uploader v-model="uploader" max-count="2" />
          </template>
       </fx-field>

        <field-type-picker />
        <field-type-date-picker />
        <field-type-area />
        <field-type-calendar />
     </fx-cell-group>

      <div style="margin: 16px 16px 0">
        <fx-button round block type="primary" native-type="submit">
          {{ t('submit') }}
       </fx-button>
      </div>
   </fx-form>
  </demo-block>
</template>
