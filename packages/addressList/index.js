
import icsmAddressList from './index.vue'

icsmAddressList.install = app => {
  app.component(icsmAddressList.name, icsmAddressList)
} 

export default icsmAddressList
