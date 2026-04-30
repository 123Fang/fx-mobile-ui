
import icsmActionBar from './index.vue'

icsmActionBar.install = app => {
  app.component(icsmActionBar.name, icsmActionBar)
} 

export default icsmActionBar
