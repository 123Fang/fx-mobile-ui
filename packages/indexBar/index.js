
import icsmIndexBar from './index.vue'

icsmIndexBar.install = app => {
  app.component(icsmIndexBar.name, icsmIndexBar)
} 

export default icsmIndexBar
