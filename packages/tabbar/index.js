
import icsmTabbar from './index.vue'

icsmTabbar.install = app => {
  app.component(icsmTabbar.name, icsmTabbar)
} 

export default icsmTabbar
