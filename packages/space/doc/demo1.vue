<!-- html -->
<template>
  <icsm-space>
    <icsm-button type="primary">按钮</icsm-button>
    <icsm-button type="primary">按钮</icsm-button>
    <icsm-button type="primary">按钮</icsm-button>
    <icsm-button type="primary">按钮</icsm-button>
  </icsm-space>

  <div class="dome-icsm-space-text">垂直排列</div>

  <icsm-space direction="vertical" fill>
    <icsm-button type="primary" block>按钮</icsm-button>
    <icsm-button type="primary" block>按钮</icsm-button>
    <icsm-button type="primary" block>按钮</icsm-button>
  </icsm-space>

  <div class="dome-icsm-space-text">自定义间距 20px</div>

  <!-- 20px -->
  <icsm-space :size="20">
    <icsm-button type="primary">按钮</icsm-button>
    <icsm-button type="primary">按钮</icsm-button>
    <icsm-button type="primary">按钮</icsm-button>
  </icsm-space>

  <div class="dome-icsm-space-text">自定义间距 2rem</div>
  <!-- 2rem -->
  <icsm-space size="2rem">
    <icsm-button type="primary">按钮</icsm-button>
    <icsm-button type="primary">按钮</icsm-button>
    <icsm-button type="primary">按钮</icsm-button>
  </icsm-space>

  <div class="dome-icsm-space-text">对齐方式</div>

  <icsm-radio-group v-model="align" direction="horizontal" style="margin-bottom: 16px">
    <icsm-radio name="start">start</icsm-radio>
    <icsm-radio name="center">center</icsm-radio>
    <icsm-radio name="end">end</icsm-radio>
    <icsm-radio name="baseline">baseline</icsm-radio>
  </icsm-radio-group>

  <icsm-space :align="align" style="padding: 16px; background: #f3f2f5">
    <icsm-button type="primary">{{ align }}</icsm-button>
    <div style="padding: 40px 20px; background: #fff">Block</div>
  </icsm-space>

  <div class="dome-icsm-space-text">自动换行</div>

  <icsm-space wrap>
    <icsm-button type="primary" block>按钮</icsm-button>
    <icsm-button type="primary" block>按钮</icsm-button>
    <icsm-button type="primary" block>按钮</icsm-button>
    <icsm-button type="primary" block>按钮</icsm-button>
    <icsm-button type="primary" block>按钮</icsm-button>
    <icsm-button type="primary" block>按钮</icsm-button>
    <icsm-button type="primary" block>按钮</icsm-button>
    <icsm-button type="primary" block>按钮</icsm-button>
  </icsm-space>
</template>

<!-- js -->
<script setup>
import { ref } from 'vue'

const align = ref('center')
</script>

<style>
.dome-icsm-space-text {
  padding: 18px 0px;
}
.dome-icsm-space-line {
  padding: 10px 0px;
}
</style>
