
import icsmRadio from './index.vue'

icsmRadio.install = app => {
  app.component(icsmRadio.name, icsmRadio)
} 

export default icsmRadio
