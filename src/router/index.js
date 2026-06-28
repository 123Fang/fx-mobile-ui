/* eslint-disable no-unused-vars */
import { computed } from 'vue'
import { createRouter, createWebHashHistory, createMemoryHistory } from "vue-router";
import pagesRouter from "./routerPage/page.js";


const isInIframe = computed(() => {
  try {
    return (window.self !== window.top)
  } catch (e) {
    return false;
  }
})




const router = createRouter({
  history: isInIframe.value ? createMemoryHistory() : createWebHashHistory(),
  scrollBehavior: (to, from, savedPosition) => {
    document.title = to.name;
    if (to.fullPath != "/") {
      // document.querySelector(".fxrightView").scrollTop = 0;
    }
  },
  routes: [...pagesRouter],
});
export default router;
