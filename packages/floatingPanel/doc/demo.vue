
<script setup lang="ts">
import { ref } from 'vue';

import { cdnURL, useTranslate } from '@/docs/site';

import { useWindowSize } from '@vant/use';

const { height: windowHeight } = useWindowSize();

const t = useTranslate({
  'zh-CN': {
    customAnchors: '自定义锚点',
    headDragOnly: '仅头部拖拽',
    disableMagnetic: '禁用吸附',
    disableDragging: '禁用拖拽',
    panelUnDrag: '该面板不可拖拽',
    panelShowHeight: '面板显示高度',
    contentUnDrag: '内容不可拖拽',
    magneticDisabled: '已禁用磁力吸附，可在边界内任意停留',
  },
  'en-US': {
    customAnchors: 'Custom Anchors',
    headDragOnly: 'Head Drag Only',
    disableMagnetic: 'Disable Magnetic',
    disableDragging: 'Disable Dragging',
    panelUnDrag: 'This panel cannot be dragged',
    panelShowHeight: 'Panel Show Height',
    contentUnDrag: 'Content cannot be dragged',
    magneticDisabled: 'Magnetic disabled, free positioning within boundaries',
  },
});

const anchors = [
  100,
  Math.round(0.4 * windowHeight.value),
  Math.round(0.7 * windowHeight.value),
];

const height = ref(anchors[0]);
</script>

<template>
  <fx-tabs swipe-threshold="3">
    <fx-tab :title="t('basicUsage')">
      <fx-floating-panel>
        <fx-cell-group>
          <fx-cell
            v-for="i in 26"
            :key="i"
            :title="String.fromCharCode(i + 64)"
            size="large"
          />
       </fx-cell-group>
     </fx-floating-panel>
   </fx-tab>

    <fx-tab :title="t('customAnchors')">
      <fx-floating-panel v-model:height="height" :anchors="anchors">
        <div style="text-align: center; padding: 15px">
          <p>{{ t('panelShowHeight') }} {{ height.toFixed(0) }} px</p>
        </div>
     </fx-floating-panel>
   </fx-tab>

    <fx-tab :title="t('headDragOnly')">
      <fx-floating-panel :content-draggable="false">
        <div style="text-align: center; padding: 15px">
          <p>{{ t('contentUnDrag') }}</p>
        </div>
     </fx-floating-panel>
   </fx-tab>

    <fx-tab :title="t('disableMagnetic')">
      <fx-floating-panel :magnetic="false">
        <div style="text-align: center; padding: 15px">
          <p>{{ t('magneticDisabled') }}</p>
        </div>
     </fx-floating-panel>
   </fx-tab>

    <fx-tab :title="t('disableDragging')">
      <fx-floating-panel :draggable="false">
        <div style="text-align: center; padding: 15px">
          <p>{{ t('panelUnDrag') }}</p>
        </div>
     </fx-floating-panel>
   </fx-tab>
 </fx-tabs>
</template>



