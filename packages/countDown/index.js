
import icsmCountDown from './index.vue'

icsmCountDown.install = app => {
  app.component(icsmCountDown.name, icsmCountDown)
} 

export default icsmCountDown
