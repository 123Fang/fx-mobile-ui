<script setup lang="ts">
;
import { ref } from 'vue';
// import { useTranslate } from '../../../docs/site';
import { cdnURL, useTranslate } from '@/docs/site';

import { showToast } from 'fx-mobile-ui';

const t = useTranslate({
  'zh-CN': {
    reset: '重置',
    pause: '暂停',
    start: '开始',
    finished: '倒计时结束',
    millisecond: '毫秒级渲染',
    customStyle: '自定义样式',
    customFormat: '自定义格式',
    manualControl: '手动控制',
    formatWithDay: 'DD 天 HH 时 mm 分 ss 秒',
  },
  'en-US': {
    reset: 'Reset',
    pause: 'Pause',
    start: 'Start',
    finished: 'Finished',
    millisecond: 'Millisecond',
    customStyle: 'Custom Style',
    customFormat: 'Custom Format',
    manualControl: 'Manual Control',
    formatWithDay: 'DD Day, HH:mm:ss',
  },
});

const time = ref(30 * 60 * 60 * 1000);
const countDown = ref<CountDownInstance>();

const start = () => {
  countDown.value?.innerRef?.start();
};
const pause = () => {
  countDown.value?.innerRef?.pause();
};
const reset = () => {
  countDown.value?.innerRef?.reset();
};
const onFinish = () => showToast(t('finished'));
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <fx-count-down :time="time" />
  </demo-block>

  <demo-block :title="t('customFormat')">
    <fx-count-down :time="time" :format="t('formatWithDay')" />
  </demo-block>

  <demo-block :title="t('millisecond')">
    <fx-count-down millisecond :time="time" format="HH:mm:ss:SS" />
  </demo-block>

  <demo-block :title="t('customStyle')">
    <fx-count-down :time="time">
      <template #default="currentTime">
        <span class="block">{{ currentTime.hours }}</span>
        <span class="colon">:</span>
        <span class="block">{{ currentTime.minutes }}</span>
        <span class="colon">:</span>
        <span class="block">{{ currentTime.seconds }}</span>
      </template>
   </fx-count-down>
  </demo-block>

  <demo-block :title="t('manualControl')">
    <fx-count-down
      ref="countDown"
      millisecond
      :time="3000"
      :auto-start="false"
      format="ss:SSS"
      @finish="onFinish"
    />
    <fx-grid clickable :column-num="3">
      <fx-grid-item icon="play-circle-o" :text="t('start')" @click="start" />
      <fx-grid-item icon="pause-circle-o" :text="t('pause')" @click="pause" />
      <fx-grid-item icon="replay" :text="t('reset')" @click="reset" />
   </fx-grid>
  </demo-block>
</template>

<style lang="scss">
.demo-count-down {
  background-color: var(--fx-background-2);

  .fx-count-down {
    margin-left: var(--fx-padding-md);
  }

  .colon {
    display: inline-block;
    margin: 0 4px;
    color: var(--fx-primary-color);
  }

  .block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: var(--fx-primary-color);
    border-radius: 4px;
  }

  .fx-grid {
    margin-top: 10px;
  }
}
</style>



