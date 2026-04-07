
import icsmPopup from './index.vue'

icsmPopup.install = app => {
  app.component(icsmPopup.name, icsmPopup)
} 

export default icsmPopup
