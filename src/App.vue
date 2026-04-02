<template>
  <headerBlockVue @changeTheme="changeTheme"/>
  <van-config-provider :theme="theme">    
    <router-view></router-view>
  </van-config-provider>
</template>
<script setup>
import { watch,ref, computed } from "vue";
import { useRoute,useRouter } from 'vue-router'
import headerBlockVue from "./components/header-block.vue";


const route = useRoute()
const router = useRouter()
const show = ref(true)

const theme = ref('light')



watch(theme, (value)=>{
   if( window.myIframe?.contentWindow?.iframetheme){
     window.myIframe.contentWindow.iframetheme.value = value
   }
 
})


const  isInIframe = computed(()=> {
  try {
    return (window.self !== window.top)
  } catch (e) {
    return false;
  }
})
if (isInIframe.value) { // 在内部的 iframe 中渲染
  window.iframeRoute = router
  window.iframetheme = theme
}
watch(()=>route.path, ()=>{
   if (route.meta.iframe) {
    window.myIframe?.contentWindow?.iframeRoute?.push(`/iframe${route.path}`)
  } else {
    window.myIframe?.contentWindow?.iframeRoute?.push(`/iframe/404`)
  }
})

const changeTheme = (themeType)=>{
  theme.value = themeType || 'light'
}

</script>
<style lang="scss">
@import './styles/style.scss';
#app {
  overflow: hidden;
}
</style>
