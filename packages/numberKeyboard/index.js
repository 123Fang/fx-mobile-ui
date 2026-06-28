
import icsmNumberKeyboard from './index.vue'

icsmNumberKeyboard.install = app => {
  app.component(icsmNumberKeyboard.name, icsmNumberKeyboard)
} 

export default icsmNumberKeyboard
