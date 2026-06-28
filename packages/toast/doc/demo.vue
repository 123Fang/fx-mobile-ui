<script setup lang="ts">
import { ref } from 'vue';
import { cdnURL, useTranslate } from '@/docs/site';
import {
  showToast,
  closeToast,
  showFailToast,
  showSuccessToast,
  showLoadingToast,
  // 修改默认配置
  setToastDefaultOptions, 
  resetToastDefaultOptions
} from 'fx-mobile-ui';


const t = useTranslate({
  'zh-CN': {
    fail: '失败提示',
    text: '提示内容',
    text2: '成功文案',
    text3: '失败文案',
    text4: (second: number) => `倒计时 ${second} 秒`,
    title1: '文字提示',
    title2: '加载提示',
    title3: '成功/失败提示',
    success: '成功提示',
    breakAll: '换行时截断单词',
    breakWord: '换行时不截断单词',
    wordBreak: '文字换行方式',
    customIcon: '自定义图标',
    customImage: '自定义图片',
    loadingType: '自定义加载图标',
    positionTop: '顶部展示',
    useComponent: '使用 Toast 组件',
    updateMessage: '动态更新提示',
    positionBottom: '底部展示',
    customPosition: '自定义位置',
  },
  'en-US': {
    fail: 'Fail',
    text: 'Some messages',
    text2: 'Success',
    text3: 'Fail',
    text4: (second: number) => `${second} seconds`,
    title1: 'Text',
    title2: 'Loading',
    title3: 'Success/Fail',
    success: 'Success',
    wordBreak: 'Word Break',
    breakAll: 'Break All',
    breakWord: 'Break Word',
    customIcon: 'Custom Icon',
    customImage: 'Custom Image',
    loadingType: 'Loading Type',
    positionTop: 'Top',
    useComponent: 'Use Toast Component',
    updateMessage: 'Update Message',
    positionBottom: 'Bottom',
    customPosition: 'Custom Position',
  },
  'zh-TW': {
    fail: '失敗提示',
    text: '提示內容',
    text2: '成功文案',
    text3: '失敗文案',
    text4: (second: number) => `倒計時 ${second} 秒`,
    title1: '文字提示',
    title2: '加載提示',
    title3: '成功/失敗提示',
    success: '成功提示',
    breakAll: '換行時截斷單詞',
    breakWord: '換行時不截斷單詞',
    wordBreak: '文字換行方式',
    customIcon: '自定義圖標',
    customImage: '自定義圖片',
    loadingType: '自定義加載圖標',
    positionTop: '頂部展示',
    useComponent: '使用 Toast 組件',
    updateMessage: '動態更新提示',
    positionBottom: '底部展示',
    customPosition: '自定義位置',
  },
});

const showLoadingToastWithType = (loadingType?: LoadingType) => {
  showLoadingToast({
    forbidClick: true,
    message: t('loading'),
    loadingType,
  });
};

const showTopToast = () => {
  showToast({
    message: t('positionTop'),
    position: 'top',
  });
};

const showBottomToast = () => {
  showToast({
    message: t('positionBottom'),
    position: 'bottom',
  });
};

const showIconToast = () => {
  showToast({
    message: t('customIcon'),
    icon: 'like-o',
  });
};

const showImageToast = () => {
  showToast({
    message: t('customImage'),
    icon: cdnURL('logo.png'),
  });
};

const showCustomToast = () => {
  const toast = showLoadingToast({
    duration: 0,
    forbidClick: true,
    message: t('text4', 3),
  });

  let second = 3;
  const timer = setInterval(() => {
    second--;
    if (second) {
      toast.message = t('text4', second);
    } else {
      clearInterval(timer);
      closeToast();
    }
  }, 1000);
};

const showWordBreakToast = (wordBreak: ToastWordBreak) => {
  showToast({
    message: 'This message will contain a incomprehensibilities long word.',
    wordBreak,
  });
};

const show = ref(false);
const image = cdnURL('cat.jpeg');
</script>

<template>
  <demo-block card :title="t('basicUsage')">
    <fx-cell is-link :title="t('title1')" @click="showToast(t('text'))" />
    <fx-cell
      is-link
      :title="t('title2')"
      @click="showLoadingToastWithType()"
    />
    <fx-cell
      is-link
      :title="t('success')"
      @click="showSuccessToast(t('text2'))"
    />
    <fx-cell is-link :title="t('fail')" @click="showFailToast(t('text3'))" />
  </demo-block>

  <demo-block card :title="t('customIcon')">
    <fx-cell is-link :title="t('customIcon')" @click="showIconToast" />
    <fx-cell is-link :title="t('customImage')" @click="showImageToast" />
    <fx-cell
      is-link
      :title="t('loadingType')"
      @click="showLoadingToastWithType('spinner')"
    />
  </demo-block>

  <demo-block card :title="t('customPosition')">
    <fx-cell is-link :title="t('positionTop')" @click="showTopToast" />
    <fx-cell is-link :title="t('positionBottom')" @click="showBottomToast" />
  </demo-block>

  <demo-block card :title="t('wordBreak')">
    <fx-cell
      is-link
      :title="t('breakAll')"
      @click="showWordBreakToast('break-all')"
    />
    <fx-cell
      is-link
      :title="t('breakWord')"
      @click="showWordBreakToast('break-word')"
    />
  </demo-block>

  <demo-block card :title="t('updateMessage')">
    <fx-cell is-link :title="t('updateMessage')" @click="showCustomToast" />
  </demo-block>

  <demo-block card :title="t('useComponent')">
    <fx-cell is-link :title="t('useComponent')" @click="show = true" />
    <fx-toast v-model:show="show" style="padding: 0">
      <template #message>
        <fx-image
          :src="image"
          width="200"
          height="140"
          style="display: block"
        />
      </template>
   </fx-toast>
  </demo-block>



  <demo-block card title="修改默认配置">
    <fx-cell is-link title="setToastDefaultOptions({ duration: 9000 });" @click="setToastDefaultOptions({ duration: 9000 });" />
    <fx-cell is-link title="setToastDefaultOptions('loading', { forbidClick: true });" @click="setToastDefaultOptions('loading', { forbidClick: false });" />
    <fx-cell is-link title="resetToastDefaultOptions();" @click="resetToastDefaultOptions();" />
    <fx-cell is-link title="resetToastDefaultOptions('loading');" @click="resetToastDefaultOptions('loading');" />
   
  </demo-block>
</template>
