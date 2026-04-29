<template>
  <div class="header-block-box">
    <div class="logoBox">
      <a href="javascript:;" @click="toHome">CTF-ICS-MOBILE-UI</a>
      <template v-if="isInIframe">
        <icsm-tag color="rgba(36, 149, 86, .9)" style="margin-right: 10px;">ctf-ics-mobile-ui@{{icsVersion}}</icsm-tag>
        <icsm-tag color="rgba(36, 149, 86, .9)" style="margin-right: 10px;">vant@{{vantVersion}}</icsm-tag>
        <icsm-tag color="rgba(36, 149, 86, .9)">vue@{{vueVersion}}</icsm-tag>
      </template>
    </div>

    <div class="toolsBox" v-if="isInIframe">
      <template v-for="(item, index) in tools" :key="index">
        <a
          v-if="item.name !== 'theme' && item.name !== 'themeColor'"
          href="javascript:;"
          :class="{ active: tabIndex == index }"
          @click="pageView(item, index)"
          >{{ item.name }}</a
        >
        <a v-else-if="item.name === 'themeColor'" :class="{ active: tabIndex == index }">
          <el-color-picker
            v-model="color"
            show-alpha
            :predefine="predefineColors"
            @change="colorChange"
          />
        </a>

        <a v-else :class="{ active: tabIndex == index }">
          <img :src="darkOrLight" class="img-theme" @click="pageView(item, index)"
        /></a>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { reactive, ref, onMounted, computed } from 'vue'
import  { version as  vantVersion} from 'vant'
import  { version as  vueVersion} from 'vue'
import  icsUIPKG  from '../../package.json'
const icsVersion = icsUIPKG.version

const color = ref('#249556')
const predefineColors = ref([
  '#A10D1F', // franchised
  '#911C2D', // smartPortal
  '#249556', // ics
  '#0061bc' // oneics
  
])
const colorChange = (val) => {
  const namespace = 'icsm'
  const pre = `--${namespace}-primary-color`
  window.iphoneIframeWindow?.document?.documentElement?.style?.setProperty(pre, val)
}
const darkOrLight = ref('https://b.yzcdn.cn/vant/light-theme.svg')

const emit = defineEmits(['changeTheme'])
const isInIframe = computed(() => {
  try {
    return !(window.self !== window.top)
  } catch (e) {
    return false
  }
})
const initLang = () => {
  const lang = localStorage.getItem('lang')
  if (lang === 'zh-CN') {
    return '多语言-简体中文'
  }
  if (lang === 'zh-TW') {
    return '多语言-繁体中文'
  }
  if (lang === 'en-US') {
    return '多语言-英文'
  }
  return '多语言-简体中文'
}
const changeDevice = () => {
  const platform = sessionStorage.getItem('franchised-platform') || 'PC'
  if (platform === 'PC') {
    const ics = sessionStorage.getItem('ics')
    if (ics) {
      localStorage.setItem('parentName', 'ics2plus')
    } else {
      localStorage.removeItem('parentName')
    }
    return `当前设备-PC${ics ? '(' + ics + ')' : ''}`
  }
  if (platform === 'ipad') {
    localStorage.removeItem('parentName')
    return '当前设备-ipad'
  }
  return '当前设备-PC'
}

const { push, currentRoute } = useRouter()
const toHome = () => push('/')
const fullPath = ref(currentRoute.value.fullPath)
const tabIndex = ref(fullPath.value == '/fx' ? 1 : sessionStorage.getItem('tabIndex') || 0)
const state = reactive({
  tools: [
    // {
    //   name: '首页',
    //   path: '/'
    // },
    // {
    //   name: '组件',
    //   path: '/ics'
    // },
    // {
    //   name: '更新日志',
    //   path: '/ics/updatelog'
    // },
    {
      name: 'theme',
      imgDark: 'https://b.yzcdn.cn/vant/dark-theme.svg',
      imgLight: 'https://b.yzcdn.cn/vant/light-theme.svg'
    },
    {
      name: 'themeColor'
    },
    {
      name: initLang(),
      path: 'lang',
      url: ''
    },
    // {
    //   name: changeDevice(),
    //   path: 'device',
    //   url: ''
    // }
    // {
    //   name: changePlatform(),
    //   path: "platfrom",
    //   url: "",
    // },
  ]
})
const { tools } = state
const pageView = (item, index) => {
  if (item.name === 'theme') {
    if (darkOrLight.value === item.imgLight) {
      darkOrLight.value = item.imgDark
      emit('changeTheme', 'dark')
    } else {
      darkOrLight.value = item.imgLight
      emit('changeTheme', 'light')
    }
    return
  }

  // if (item.path === 'device') {
  //   let platform = sessionStorage.getItem('franchised-platform')

  //   if (item.name === '当前设备-PC') {
  //     sessionStorage.setItem('ics', 'ics')
  //     platform = 'PC'
  //     localStorage.setItem('props', JSON.stringify({ pedestalName: 'ics2plus-parent-web' }))
  //   }
  //   if (item.name === '当前设备-PC(ics)') {
  //     sessionStorage.setItem('ics', 'oneics')

  //     platform = 'PC'
  //     localStorage.setItem(
  //       'props',
  //       JSON.stringify({ pedestalName: 'oneics-parent', theme: '#0061bc' })
  //     )
  //   }
  //   if (item.name === '当前设备-PC(oneics)') {
  //     sessionStorage.removeItem('ics')
  //     platform = 'ipad'
  //     localStorage.setItem('props', JSON.stringify({ pedestalName: 'franchised-parent-web' }))
  //   }
  //   if (item.name === '当前设备-ipad') {
  //     platform = 'PC'
  //     localStorage.setItem('props', JSON.stringify({ pedestalName: 'franchised-parent-web' }))
  //   }
  //   sessionStorage.setItem('franchised-platform', platform)
  //   setTimeout(() => {
  //     location.reload()
  //   })
  //   return
  // }

  if (item.path === 'lang') {
    if (item.name === '多语言-简体中文') {
      item.name = '多语言-繁体中文'
      localStorage.setItem('lang', 'zh-TW')
      setTimeout(() => {
        location.reload()
      })

      return
    }
    if (item.name === '多语言-繁体中文') {
      item.name = '多语言-英文'
      localStorage.setItem('lang', 'en-US')
      setTimeout(() => {
        location.reload()
      })
      return
    }
    if (item.name === '多语言-英文') {
      item.name = '多语言-简体中文'
      localStorage.setItem('lang', 'zh-CN')
      setTimeout(() => {
        location.reload()
      })
      return
    }
  }

  console.log(item, index)
  tabIndex.value = index
  sessionStorage.setItem('tabIndex', index)
  if (item.path == 'open') {
    window.open(item.url)
  } else {
    push(item.path)
    // if (item.path != fullPath.value) {
    //   push(item.path);
    // }
  }
}
onMounted(() => {
  if (fullPath.value == '/fx') {
    sessionStorage.setItem('tabIndex', 1)
  }
  let platform = sessionStorage.getItem('franchised-platform')
  if (platform) {
    document.body.setAttribute('platform', platform)
    // if (sessionStorage.getItem('ics')) {
    //   document.body.setAttribute('platform', 'ics2plus')
    // }
  }
})
</script>

<style scoped lang="scss">
.header-block-box {
  width: 100%;
  height: 64px;
  padding: 0 40px;
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logoBox {
    display: flex;
    align-items: center;

    img {
      width: 22px;
      height: 22px;
      margin-right: 10px;
      cursor: pointer;
    }

    a {
      padding-right: 10px;
      color: #4a5264;
      font-weight: 700;
      font-size: 18px;
      font-family: PuHuiTi, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue,
        Arial, Noto Sans, sans-serif, apple color emoji, segoe ui emoji, Segoe UI Symbol,
        noto color emoji, sans-serif;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
    }
  }

  .toolsBox {
    a {
      font-weight: normal;
      font-size: 16px;
      padding: 8px 3px;
      margin-left: 25px;
      border-bottom: 2px solid #fff;
      display: inline-block;
      float: none;
      line-height: normal;
      transition: all 0.2s ease;
      text-decoration: none;
      color: #4a5264;

      &:hover {
        color: #0e80eb;
        border-color: #0e80eb;
      }
    }

    a.active {
      color: #0e80eb;
      border-color: #0e80eb;
    }
  }
  .img-theme {
    width: 36px;
    position: absolute;
    top: 14px;
    transform: translateX(-18px);
  }
}
</style>
