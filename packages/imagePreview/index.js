
import icsmImagePreview from './imagePreview.js'

icsmImagePreview.install = app => {
  app.component(icsmImagePreview.name, icsmImagePreview)
} 

export default icsmImagePreview
