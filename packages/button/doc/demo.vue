<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';


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

// window.switchLocaleLang = switchLocaleLang

</script>

<template>
  <demo-block :title="t('type')">
    <div class="demo-button-row">
      <fx-button type="primary">{{ t('primary') }}</fx-button>
      <fx-button type="success">{{ t('success') }}</fx-button>
      <fx-button type="default">{{ t('default') }}</fx-button>
    </div>
    <fx-button type="danger">{{ t('danger') }}</fx-button>
    <fx-button type="warning">{{ t('warning') }}</fx-button>
  </demo-block>

  <demo-block :title="t('plain')">
    <fx-button plain type="primary" :text="t('plain')" />
    <fx-button plain type="success" :text="t('plain')" />
  </demo-block>

  <demo-block :title="t('hairline')">
    <fx-button plain hairline type="primary" :text="t('hairlineButton')" />
    <fx-button plain hairline type="success" :text="t('hairlineButton')" />
  </demo-block>

  <demo-block :title="t('disabled')">
    <fx-button disabled type="primary" :text="t('disabled')" />
    <fx-button disabled type="success" :text="t('disabled')" />
  </demo-block>

  <demo-block :title="t('loadingStatus')">
    <fx-button loading type="primary" />
    <fx-button loading type="primary" loading-type="spinner" />
    <fx-button loading :loading-text="t('loadingText')" type="success" />
  </demo-block>

  <demo-block :title="t('shape')">
    <fx-button type="primary" square :text="t('square')" />
    <fx-button type="success" round :text="t('round')" />
  </demo-block>

  <demo-block :title="t('icon')">
    <fx-button type="primary" icon="plus" />
    <fx-button type="primary" icon="plus" :text="t('button')" />
    <fx-button
      plain
      type="primary"
      :icon="cdnURL('user-active.png')"
      :text="t('button')"
    />
  </demo-block>

  <demo-block :title="t('size')">
    <fx-button type="primary" size="large">{{ t('large') }}</fx-button>
    <fx-button type="primary" size="normal">{{ t('normal') }}</fx-button>
    <fx-button type="primary" size="small">{{ t('small') }}</fx-button>
    <fx-button type="primary" size="mini">{{ t('mini') }}</fx-button>
  </demo-block>

  <demo-block :title="t('blockElement')">
    <fx-button type="primary" block>{{ t('blockElement') }}</fx-button>
  </demo-block>

  <demo-block :title="t('router')">
    <fx-button
      :text="t('urlRoute')"
      type="primary"
      url="https://github.com/vant-ui/vant"
    />
    <fx-button :text="t('vueRoute')" type="primary" to="index" />
  </demo-block>

  <demo-block :title="t('customColor')">
    <fx-button color="#7232dd" :text="t('pure')" />
    <fx-button plain color="#7232dd" :text="t('pure')" />
    <fx-button
      color="linear-gradient(to right, #ff6034, #ee0a24)"
      :text="t('gradient')"
    />
  </demo-block>

  <demo-block :title="t('animatedButton')">
    <fx-button type="danger" round>
      <fx-swipe
        vertical
        class="notice-swipe"
        :autoplay="2000"
        :touchable="false"
        :show-indicators="false"
      >
        <fx-swipe-item>{{ t('doTask') }}</fx-swipe-item>
        <fx-swipe-item>{{ t('lottery') }}</fx-swipe-item>
     </fx-swipe>
   </fx-button>
  </demo-block>
</template>

<style lang="scss">
.demo-button {
  .fx-button {
    &--large {
      margin-bottom: var(--fx-padding-md);
    }

    &--small,
    &--normal:not(:last-child) {
      margin-right: var(--fx-padding-md);
    }
  }

  .fx-doc-demo-block {
    padding: 0 var(--fx-padding-md);
  }

  .fx-doc-demo-block__title {
    padding-left: 0;
  }

  &-row {
    margin-bottom: var(--fx-padding-sm);
  }

  .notice-swipe {
    height: 40px;
    line-height: 40px;
  }
}
</style>
