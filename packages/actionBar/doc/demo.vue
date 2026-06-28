<script setup lang="ts">
import { cdnURL, useTranslate } from '@/docs/site';
import { showToast } from 'fx-mobile-ui';

const t = useTranslate({
  'zh-CN': {
    icon1: '客服',
    icon2: '购物车',
    icon3: '店铺',
    button1: '加入购物车',
    button2: '立即购买',
    iconBadge: '徽标提示',
    collected: '已收藏',
    clickIcon: '点击图标',
    clickButton: '点击按钮',
    customIconColor: '自定义图标颜色',
    customButtonColor: '自定义按钮颜色',
  },
  'en-US': {
    icon1: 'Icon1',
    icon2: 'Icon2',
    icon3: 'Icon3',
    button1: 'Button',
    button2: 'Button',
    iconBadge: 'Icon Badge',
    collected: 'Collected',
    clickIcon: 'Click Icon',
    clickButton: 'Click Button',
    customIconColor: 'Custom Icon Color',
    customButtonColor: 'Custom Button Color',
  },
});
const onClickIcon = () => showToast(t('clickIcon'));
const onClickButton = () => showToast(t('clickButton'));
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <fx-action-bar>
      <fx-action-bar-icon
        icon="chat-o"
        :text="t('icon1')"
        @click="onClickIcon"
      />
      <fx-action-bar-icon
        icon="cart-o"
        :text="t('icon2')"
        @click="onClickIcon"
      />
      <fx-action-bar-icon
        icon="shop-o"
        :text="t('icon3')"
        @click="onClickIcon"
      />
      <fx-action-bar-button
        type="danger"
        :text="t('button2')"
        @click="onClickButton"
      />
   </fx-action-bar>
  </demo-block>

  <demo-block :title="t('iconBadge')">
    <fx-action-bar>
      <fx-action-bar-icon icon="chat-o" dot :text="t('icon1')" />
      <fx-action-bar-icon icon="cart-o" badge="5" :text="t('icon2')" />
      <fx-action-bar-icon icon="shop-o" badge="12" :text="t('icon3')" />
      <fx-action-bar-button type="warning" :text="t('button1')" />
      <fx-action-bar-button type="danger" :text="t('button2')" />
   </fx-action-bar>
  </demo-block>

  <demo-block :title="t('customIconColor')">
    <fx-action-bar>
      <fx-action-bar-icon icon="chat-o" :text="t('icon1')" color="#ee0a24" />
      <fx-action-bar-icon icon="cart-o" :text="t('icon2')" />
      <fx-action-bar-icon icon="star" :text="t('collected')" color="#ff5000" />
      <fx-action-bar-button type="warning" :text="t('button1')" />
      <fx-action-bar-button type="danger" :text="t('button2')" />
   </fx-action-bar>
  </demo-block>

  <demo-block :title="t('customButtonColor')">
    <fx-action-bar>
      <fx-action-bar-icon icon="chat-o" :text="t('icon1')" />
      <fx-action-bar-icon icon="cart-o" :text="t('icon2')" />
      <fx-action-bar-button
        color="#be99ff"
        type="warning"
        :text="t('button1')"
      />
      <fx-action-bar-button
        color="#7232dd"
        type="danger"
        :text="t('button2')"
      />
   </fx-action-bar>
  </demo-block>
</template>

<style lang="scss">
.demo-action-bar {
  .fx-action-bar {
    position: relative;
    padding-bottom: 0;
  }
}
</style>




