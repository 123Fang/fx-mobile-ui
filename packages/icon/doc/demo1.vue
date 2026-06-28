<script setup lang="ts">
import icons from '@vant/icons';
import { showNotify } from 'fx-mobile-ui';
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';

// from https://30secondsofcode.org
function copyToClipboard(str: string) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);

  const selection = document.getSelection();

  if (!selection) {
    return;
  }

  const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;

  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    selection.removeAllRanges();
    selection.addRange(selected);
  }
}

const t = useTranslate({
  'zh-CN': {
    title: '图标列表',
    badge: '徽标提示',
    basic: '基础图标',
    copied: '复制成功',
    outline: '线框风格',
    filled: '实底风格',
    demo: '用法示例',
    color: '图标颜色',
    size: '图标大小',
  },
  'en-US': {
    title: 'Icon List',
    badge: 'Show Badge',
    basic: 'Basic',
    copied: 'Copied',
    outline: 'Outline',
    filled: 'Filled',
    demo: 'Demo',
    color: 'Icon Color',
    size: 'Icon Size',
  },
});

const tab = ref(0);
const demoIcon = 'chat-o';
const demoImage = cdnURL('icon-demo.png');

const copy = (icon: string, option: Record<string, unknown> = {}) => {
  let tag = `<fx-icon name="${icon}"`;
  if ('dot' in option) {
    tag = `${tag} ${option.dot ? 'dot' : ''}`;
  }
  if ('badge' in option) {
    tag = `${tag} badge="${option.badge}"`;
  }
  if ('color' in option) {
    tag = `${tag} color="${option.color}"`;
  }
  if ('size' in option) {
    tag = `${tag} size="${option.size}"`;
  }
  tag = `${tag} />`;
  copyToClipboard(tag);

  showNotify({
    type: 'success',
    duration: 1500,
    className: 'demo-icon-notify',
    message: `${t('copied')}：${tag}`,
  });
};
</script>

<template>
  <fx-tabs v-model:active="tab" sticky>
    <fx-tab class="demo-icon-tab-panel" :title="t('demo')">
      <demo-block :title="t('basicUsage')">
        <fx-row>
          <fx-col span="6" @click="copy(demoIcon)">
            <fx-icon :name="demoIcon" />
         </fx-col>
       </fx-row>
      </demo-block>

      <demo-block :title="t('usingUrl')">
        <fx-row>
          <fx-col span="6" @click="copy(demoImage)">
            <fx-icon :name="demoImage" />
         </fx-col>
       </fx-row>
      </demo-block>

      <demo-block :title="t('badge')">
        <fx-row>
          <fx-col span="6" @click="copy(demoIcon, { dot: true })">
            <fx-icon :name="demoIcon" dot />
         </fx-col>
          <fx-col span="6" @click="copy(demoIcon, { badge: '9' })">
            <fx-icon :name="demoIcon" badge="9" />
         </fx-col>
          <fx-col span="6" @click="copy(demoIcon, { badge: '99+' })">
            <fx-icon :name="demoIcon" badge="99+" />
         </fx-col>
       </fx-row>
      </demo-block>

      <demo-block :title="t('color')">
        <fx-row>
          <fx-col span="6" @click="copy('cart-o', { color: '#1989fa' })">
            <fx-icon name="cart-o" color="#1989fa" />
         </fx-col>
          <fx-col span="6" @click="copy('fire-o', { color: '#ee0a24' })">
            <fx-icon name="fire-o" color="#ee0a24" />
         </fx-col>
       </fx-row>
      </demo-block>

      <demo-block :title="t('size')">
        <fx-row>
          <fx-col span="6" @click="copy(demoIcon, { size: '40' })">
            <fx-icon :name="demoIcon" size="40" />
         </fx-col>
          <fx-col span="6" @click="copy(demoIcon, { size: '3rem' })">
            <fx-icon :name="demoIcon" size="3rem" />
         </fx-col>
       </fx-row>
      </demo-block>
   </fx-tab>

    <fx-tab class="demo-icon-tab-panel" :title="t('basic')">
      <fx-row>
        <fx-col
          v-for="icon in icons.basic"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <fx-icon :name="icon" />
          <span>{{ icon }}</span>
       </fx-col>
     </fx-row>
   </fx-tab>

    <fx-tab class="demo-icon-tab-panel" :title="t('outline')">
      <fx-row>
        <fx-col
          v-for="icon in icons.outline"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <fx-icon :name="icon" />
          <span>{{ icon }}</span>
       </fx-col>
     </fx-row>
   </fx-tab>

    <fx-tab class="demo-icon-tab-panel" :title="t('filled')">
      <fx-row>
        <fx-col
          v-for="icon in icons.filled"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <fx-icon :name="icon" />
          <span>{{ icon }}</span>
       </fx-col>
     </fx-row>
   </fx-tab>
 </fx-tabs>
</template>

<style lang="scss">
.demo-icon {
  font-size: 0;

  &-notify {
    font-size: 13px;
  }

  &-tab-panel {
    width: auto;
    margin: 20px;
    background-color: var(--fx-background-2);
    border-radius: 12px;
  }

  .fx-col {
    display: inline-block;
    float: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;

    span {
      display: block;
      height: 36px;
      margin: -4px 0 4px;
      padding: 0 5px;
      color: var(--fx-text-color);
      font-size: 12px;
      line-height: 18px;
    }

    &:active {
      background-color: var(--fx-active-color);
    }
  }

  .fx-icon {
    margin: 16px 0 16px;
    color: var(--fx-text-color);
    font-size: 32px;
  }
}
</style>
