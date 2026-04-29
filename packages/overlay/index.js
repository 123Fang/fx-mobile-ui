
import icsmOverlay from './index.vue'

icsmOverlay.install = app => {
  app.component(icsmOverlay.name, icsmOverlay)
} 

export default icsmOverlay
