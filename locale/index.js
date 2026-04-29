import { Locale } from 'vant';
// import zhCN from 'vant/es/locale/lang/zh-CN';
// import zhTW from 'vant/es/locale/lang/zh-TW';
// import enUS from 'vant/es/locale/lang/en-US';

import zhCN from './lang/vant/zh-CN.ts';
import zhTW from './lang/vant/zh-TW.ts';
import enUS from './lang/vant/en-US.ts';

import zhCn from './lang/zh-cn.js'
import zhTw from './lang/zh-tw.js'
import en from './lang/en.js'

function initLang() {
    const lang = localStorage.getItem('lang');
    switch (lang) {
        case 'zh-CN':
            Locale.use('zh-CN', zhCN);
            return zhCn
        case 'zh-TW':
            Locale.use('zh-TW', zhTW);
            return zhTw
        case 'en-US':
            Locale.use('en-US', enUS);
            return en
        default:
            Locale.use('zh-CN', zhCN);
            return zhCn // 默认返回简体中文
    }
}

export const switchLocaleLang = (key='zh-CN') => {
    
    const message = {
        'zh-CN': zhCN,
        'zh-TW': zhTW,
        'en-US': enUS
    }
    setTimeout(()=>{
        Locale.use(key, message[key])
    })
    
}
window.switchLocaleLang = switchLocaleLang


const locale = initLang()

export const vantLocale = Locale

export default locale
