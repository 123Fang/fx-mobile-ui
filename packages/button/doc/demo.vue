<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';
import type {
  ButtonType,
  ButtonSize,
  ButtonProps,
  ButtonNativeType,
  ButtonIconPosition,
} from 'ctf-ics-mobile-ui';

import  {
  useClickAway 
} from 'ctf-ics-mobile-ui/use';

import { useCascaderAreaData } from 'ctf-ics-mobile-ui/area-data';

console.log('useClickAway',useClickAway)
console.log('useCascaderAreaData',useCascaderAreaData)



const t = useTranslate({
  'zh-CN': {
    type: '按钮类型',
    size: '按钮尺寸',
    icon: '图标按钮',
    loading: '加载状态',
    shape: '按钮形状',
    default: '默认按钮',
    primary: '主要按钮',
    success: '成功按钮',
    danger: '危险按钮',
    warning: '警告按钮',
    large: '大号按钮',
    normal: '普通按钮',
    small: '小型按钮',
    mini: '迷你按钮',
    plain: '朴素按钮',
    square: '方形按钮',
    round: '圆形按钮',
    hairline: '细边框',
    hairlineButton: '细边框按钮',
    loadingText: '加载中...',
    router: '页面导航',
    urlRoute: 'URL 跳转',
    vueRoute: '路由跳转',
    customColor: '自定义颜色',
    pure: '单色按钮',
    gradient: '渐变色按钮',
    blockElement: '块级元素',
    animatedButton: '动画按钮',
    doTask: '做任务',
    lottery: '抽大奖',
  },
  'en-US': {
    type: 'Type',
    size: 'Size',
    icon: 'Icon',
    loading: 'Loading',
    shape: 'Shape',
    default: 'Default',
    primary: 'Primary',
    success: 'Success',
    danger: 'Danger',
    warning: 'Warning',
    large: 'Large',
    normal: 'Normal',
    small: 'Small',
    mini: 'Mini',
    plain: 'Plain',
    square: 'Square',
    round: 'Round',
    hairline: 'Hairline',
    hairlineButton: 'Hairline',
    loadingText: 'Loading...',
    router: 'Router',
    urlRoute: 'URL',
    vueRoute: 'Vue Router',
    customColor: 'Custom Color',
    pure: 'Pure',
    gradient: 'Gradient',
    blockElement: 'Block Element',
    animatedButton: 'Animated Button',
    doTask: 'Do Task',
    lottery: 'Lottery',
  },
});
</script>

<template>
  <demo-block :title="t('type')">
    <div class="demo-button-row">
      <icsm-button type="primary">{{ t('primary') }}</icsm-button>
      <icsm-button type="success">{{ t('success') }}</icsm-button>
      <icsm-button type="default">{{ t('default') }}</icsm-button>
    </div>
    <icsm-button type="danger">{{ t('danger') }}</icsm-button>
    <icsm-button type="warning">{{ t('warning') }}</icsm-button>
  </demo-block>

  <demo-block :title="t('plain')">
    <icsm-button plain type="primary" :text="t('plain')" />
    <icsm-button plain type="success" :text="t('plain')" />
  </demo-block>

  <demo-block :title="t('hairline')">
    <icsm-button plain hairline type="primary" :text="t('hairlineButton')" />
    <icsm-button plain hairline type="success" :text="t('hairlineButton')" />
  </demo-block>

  <demo-block :title="t('disabled')">
    <icsm-button disabled type="primary" :text="t('disabled')" />
    <icsm-button disabled type="success" :text="t('disabled')" />
  </demo-block>

  <demo-block :title="t('loadingStatus')">
    <icsm-button loading type="primary" />
    <icsm-button loading type="primary" loading-type="spinner" />
    <icsm-button loading :loading-text="t('loadingText')" type="success" />
  </demo-block>

  <demo-block :title="t('shape')">
    <icsm-button type="primary" square :text="t('square')" />
    <icsm-button type="success" round :text="t('round')" />
  </demo-block>

  <demo-block :title="t('icon')">
    <icsm-button type="primary" icon="plus" />
    <icsm-button type="primary" icon="plus" :text="t('button')" />
    <icsm-button
      plain
      type="primary"
      :icon="cdnURL('user-active.png')"
      :text="t('button')"
    />
  </demo-block>

  <demo-block :title="t('size')">
    <icsm-button type="primary" size="large">{{ t('large') }}</icsm-button>
    <icsm-button type="primary" size="normal">{{ t('normal') }}</icsm-button>
    <icsm-button type="primary" size="small">{{ t('small') }}</icsm-button>
    <icsm-button type="primary" size="mini">{{ t('mini') }}</icsm-button>
  </demo-block>

  <demo-block :title="t('blockElement')">
    <icsm-button type="primary" block>{{ t('blockElement') }}</icsm-button>
  </demo-block>

  <demo-block :title="t('router')">
    <icsm-button
      :text="t('urlRoute')"
      type="primary"
      url="https://github.com/vant-ui/vant"
    />
    <icsm-button :text="t('vueRoute')" type="primary" to="index" />
  </demo-block>

  <demo-block :title="t('customColor')">
    <icsm-button color="#7232dd" :text="t('pure')" />
    <icsm-button plain color="#7232dd" :text="t('pure')" />
    <icsm-button
      color="linear-gradient(to right, #ff6034, #ee0a24)"
      :text="t('gradient')"
    />
  </demo-block>

  <demo-block :title="t('animatedButton')">
    <icsm-button type="danger" round>
      <icsm-swipe
        vertical
        class="notice-swipe"
        :autoplay="2000"
        :touchable="false"
        :show-indicators="false"
      >
        <icsm-swipe-item>{{ t('doTask') }}</icsm-swipe-item>
        <icsm-swipe-item>{{ t('lottery') }}</icsm-swipe-item>
      </icsm-swipe>
    </icsm-button>
  </demo-block>
</template>

<style lang="scss">
.demo-button {
  .icsm-button {
    &--large {
      margin-bottom: var(--icsm-padding-md);
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: var(--icsm-padding-md);
    }
  }

  .icsm-doc-demo-block {
    padding: 0 var(--icsm-padding-md);
  }

  .icsm-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: var(--icsm-padding-sm);
  }

  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
}
</style>
