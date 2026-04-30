
import icsmNavBar from './index.vue'

icsmNavBar.install = app => {
  app.component(icsmNavBar.name, icsmNavBar)
} 

export default icsmNavBar
