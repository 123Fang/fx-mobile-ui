
import icsmNotify from './notify.js'

icsmNotify.install = app => {
  app.component(icsmNotify.name, icsmNotify)
} 

export default icsmNotify
