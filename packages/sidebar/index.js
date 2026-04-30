
import icsmSidebar from './index.vue'

icsmSidebar.install = app => {
  app.component(icsmSidebar.name, icsmSidebar)
} 

export default icsmSidebar
