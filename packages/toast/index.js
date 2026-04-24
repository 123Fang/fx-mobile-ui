
import icsmToast from './index.vue'

icsmToast.install = app => {
  app.component(icsmToast.name, icsmToast)
} 

export default icsmToast
