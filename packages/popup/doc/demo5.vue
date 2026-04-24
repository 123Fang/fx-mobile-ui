<template>
    <icsm-cell
      title="监听点击事件"
      is-link
      @click="showClickEvents = true"
    />
    <icsm-popup
      v-model:show="showClickEvents"
      position="bottom"
      :style="{ height: '30%' }"
      closeable
      @click-overlay="showToast('click-overlay')"
      @click-close-icon="showToast('click-close-icon')"
    />

    <icsm-cell
      title="监听显示事件"
      is-link
      @click="showDisplayEvents = true"
    />
    <icsm-popup
      v-model:show="showDisplayEvents"
      position="bottom"
      :style="{ height: '30%' }"
      @open="showToast('open')"
      @opened="showToast('opened')"
      @close="showToast('close')"
      @closed="showToast('closed')"
    />
</template>

<script setup>
import { ref } from 'vue'
import { showToast } from 'vant';


const showClickEvents = ref(false);
const showDisplayEvents = ref(false);
// init
</script>
