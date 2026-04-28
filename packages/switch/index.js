
import icsmSwitch from './index.vue'

icsmSwitch.install = app => {
  app.component(icsmSwitch.name, icsmSwitch)
} 

export default icsmSwitch
