
import icsmToast from './toast.js'

icsmToast.install = app => {
  app.component(icsmToast.name, icsmToast)
} 

export default icsmToast
