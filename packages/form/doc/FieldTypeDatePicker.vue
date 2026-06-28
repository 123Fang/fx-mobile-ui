<script setup lang="ts">
// import VanField from '../../field';
// import VanPopup from '../../popup';
// import VanDatePicker from '../../date-picker';
import { ref } from 'vue';
// import { useTranslate } from '../../../docs/site';
import { cdnURL, useTranslate } from '@/docs/site';

// import type { PickerConfirmEventParams } from '../../picker';

const t = useTranslate({
  'zh-CN': {
    label: '时间选择',
    placeholder: '点击选择时间',
  },
  'en-US': {
    label: 'Datetime Picker',
    placeholder: 'Select time',
  },
});

const result = ref('');
const pickerValue = ref<string[]>([]);
const showPicker = ref(false);

const onConfirm = ({ selectedValues }: PickerConfirmEventParams) => {
  result.value = selectedValues.join('/');
  pickerValue.value = selectedValues as string[];
  showPicker.value = false;
};

const onCancel = () => {
  showPicker.value = false;
};
</script>

<template>
  <fx-field
    v-model="result"
    is-link
    readonly
    name="datePicker"
    :label="t('label')"
    :placeholder="t('placeholder')"
    @click="showPicker = true"
  />
  <fx-popup
    v-model:show="showPicker"
    destroy-on-close
    round
    position="bottom"
    teleport="body"
  >
    <fx-date-picker
      :model-value="pickerValue"
      @confirm="onConfirm"
      @cancel="onCancel"
    />
 </fx-popup>
</template>
