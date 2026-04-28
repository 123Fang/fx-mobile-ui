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
    <icsm-form @submit="onSubmit">
      <icsm-cell-group inset>
        <icsm-field name="switch" :label="t('switch')">
          <template #input>
            <icsm-switch v-model="switchChecked" />
          </template>
        </icsm-field>

        <icsm-field name="checkbox" :label="t('checkbox')">
          <template #input>
            <icsm-checkbox v-model="checkbox" shape="square" />
          </template>
        </icsm-field>

        <icsm-field name="checkboxGroup" :label="t('checkboxGroup')">
          <template #input>
            <icsm-checkbox-group v-model="checkboxGroup" direction="horizontal">
              <icsm-checkbox name="1" shape="square">
                {{ t('checkbox') }} 1
              </icsm-checkbox>
              <icsm-checkbox name="2" shape="square">
                {{ t('checkbox') }} 2
              </icsm-checkbox>
            </icsm-checkbox-group>
          </template>
        </icsm-field>

        <icsm-field name="radio" :label="t('radio')">
          <template #input>
            <icsm-radio-group v-model="radio" direction="horizontal">
              <icsm-radio name="1">{{ t('radio') }} 1</icsm-radio>
              <icsm-radio name="2">{{ t('radio') }} 2</icsm-radio>
            </icsm-radio-group>
          </template>
        </icsm-field>

        <icsm-field name="stepper" :label="t('stepper')">
          <template #input>
            <icsm-stepper v-model="stepper" />
          </template>
        </icsm-field>

        <icsm-field name="rate" :label="t('rate')">
          <template #input>
            <icsm-rate v-model="rate" />
          </template>
        </icsm-field>

        <icsm-field name="slider" :label="t('slider')">
          <template #input>
            <icsm-slider v-model="slider" />
          </template>
        </icsm-field>

        <icsm-field name="uploader" :label="t('uploader')">
          <template #input>
            <icsm-uploader v-model="uploader" max-count="2" />
          </template>
        </icsm-field>

        <field-type-picker />
        <field-type-date-picker />
        <field-type-area />
        <field-type-calendar />
      </icsm-cell-group>

      <div style="margin: 16px 16px 0">
        <icsm-button round block type="primary" native-type="submit">
          {{ t('submit') }}
        </icsm-button>
      </div>
    </icsm-form>
  </demo-block>
</template>
