
import icsmUploader from './index.vue'

icsmUploader.install = app => {
  app.component(icsmUploader.name, icsmUploader)
} 

export default icsmUploader
