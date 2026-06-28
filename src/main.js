import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import icsUI from "../packages/index";

/** 
 * 测试 npm包 ：
 * **/
// import icsUI from "ctf-ics-mobile-ui";
// import 'ctf-ics-mobile-ui/dist/style.css'


import hljs from "highlight.js";

// 文档code示例样式 ------  主题色
import 'highlight.js/styles/atom-one-light.css'; 
// import 'highlight.js/styles/idea.css';
// import 'highlight.js/styles/rainbow.css';  
// import "highlight.js/styles/color-brewer.css";
// 文档code示例样式 ------- 主题色


// 导入 start
// 这里的导后，才有 element plus 的 css变量！
import 'element-plus/theme-chalk/index.css';
import 'element-plus/theme-chalk/src/index.scss';
// 导入 end 
import router from "@/router";
import '@vant/touch-emulator'; // 桌面端自动将 mouse 事件转换成对应的 touch 事件


if( window.self !== window.top) {
  /** 子window 把自己放在 父window 的 iphoneIframeWindow 属性上 **/ 
  window.top.iphoneIframeWindow = window
}



const app = createApp(App);
window.app = app
// 模拟基座传入的 props
const props = JSON.parse(localStorage.getItem('props')) || {}
app.use(icsUI, props);
app.use(router);
app.use(createPinia());
hljs.configure({
  ignoreUnescapedHTML: true,
  languages: [
    "javascript",
    "css",
    "python",
    "html",
    "bash",
    "java",
    "sql",
    "json",
    "http",
    "go",
    "c++",
    "c#",
    "",
  ],
});
app.directive("highlight", function (el) {
  const blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});
app.mount("#app");
