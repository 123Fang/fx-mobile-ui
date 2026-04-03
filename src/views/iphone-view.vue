<template>
  <div class="iphone-view-content">
    <iframe ref="myIframe" :src="srciframe" width="100%" height="100%"></iframe>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, reactive, onMounted } from 'vue'

const route = useRoute()
// const srciframe = ref('http://localhost:5173/#/iframe/input')
const srciframe = ref(window.location.href.split('#')[0] + '#/404')
const myIframe = ref(null)

const isInIframe = computed(() => {
  try {
    return !(window.self !== window.top)
  } catch (e) {
    return false
  }
})

onMounted(() => {
  myIframe.value.onload = () => {
    const iframeDoc = myIframe.value.contentDocument || myIframe.value.contentWindow.document

    const style = iframeDoc.createElement('style')
    style.textContent = `
      body {
        background-color: #f0f0f0;
        margin: 0!important;
        padding:0!important;
      }
      body::-webkit-scrollbar {
        width: 0px; /* Chrome/Safari/Edge */
        background: transparent;
      }
    `
    iframeDoc.head.appendChild(style)

    // 全局变量 myIframe 获取 iframe 引用
    window.myIframe = myIframe.value
    if (route.meta?.iframe) {
      window.myIframe?.contentWindow?.iframeRoute?.push(`/iframe${route.path}`)
    }
  }
})
</script>

<style lang="scss" scoped>
.iphone-view-content {
  width: 100%;
  height: 667px;
  background-color: #f7f8fa;
  border-radius: 44px; /* 圆角边框 */
  box-shadow: 0 30px 50px -20px rgba(0, 0, 0, 0.3), 0 0 0 8px #e0e0e0, 0 0 0 12px #ccc;
  overflow: hidden;
  position: relative;
  margin: 20px auto;
}
</style>
