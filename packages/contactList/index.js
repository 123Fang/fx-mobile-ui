
import icsmContactList from './index.vue'

icsmContactList.install = app => {
  app.component(icsmContactList.name, icsmContactList)
} 

export default icsmContactList
