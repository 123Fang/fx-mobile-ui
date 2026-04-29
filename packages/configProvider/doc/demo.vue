<script setup lang="ts">
import { ref, onActivated } from 'vue';

import { cdnURL, useTranslate } from '@/docs/site';


const t = useTranslate({
  'zh-CN': {
    rate: '评分',
    slider: '滑块',
    switch: '开关',
    submit: '提交',
    customTheme: '定制主题',
    defaultTheme: '默认主题',
    darkMode: '深色模式',
    switchDarkMode: '请点击文档右上角的按钮，切换深浅模式。',
  },
  'en-US': {
    rate: 'Rate',
    slider: 'Slider',
    switch: 'Switch',
    submit: 'Submit',
    customTheme: 'Custom Theme',
    defaultTheme: 'DefaultTheme',
    darkMode: 'Dark Mode',
    switchDarkMode:
      'Please click the button in the upper right corner to switch between dark and light modes.',
  },
});

const rate = ref(4);
const slider = ref(50);
const themeVars = {
  rateIconFullColor: '#07c160',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
  sliderActiveBackground: '#07c160',
  buttonPrimaryBackground: '#07c160',
  buttonPrimaryBorderColor: '#07c160',
};
// fix https://github.com/youzan/vant/issues/13179
const removeUselessStyle = () => {
  const element = document.documentElement;
  if (
    element.classList.contains('icsm-theme-dark') &&
    element.classList.contains('icsm-theme-light')
  ) {
    element.classList.remove('icsm-theme-light');
  }
};
onActivated(removeUselessStyle);
</script>

<template>
  <div :style="{ minHeight: '100vh' }">
    <demo-block :title="t('darkMode')">
      <icsm-cell :title="t('switchDarkMode')" />
    </demo-block>

    <demo-block :title="t('defaultTheme')">
      <icsm-form>
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

        <div style="margin: 16px">
          <icsm-button round block type="primary" native-type="submit">
            {{ t('submit') }}
          </icsm-button>
        </div>
      </icsm-form>
    </demo-block>

    <demo-block :title="t('customTheme')">
      <icsm-config-provider :theme-vars="themeVars">
        <icsm-form>
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

          <div style="margin: 16px">
            <icsm-button round block type="primary" native-type="submit">
              {{ t('submit') }}
            </icsm-button>
          </div>
        </icsm-form>
      </icsm-config-provider>
    </demo-block>
  </div>
</template>

<style lang="scss">
.demo-collapse {
  .icsm-icon-question-o {
    margin-left: 5px;
    color: var(--icsm-blue);
    font-size: 15px;
    vertical-align: -3px;
  }
}
</style>



