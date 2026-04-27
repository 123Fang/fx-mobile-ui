
import icsmList from './index.vue'

icsmList.install = app => {
  app.component(icsmList.name, icsmList)
} 

export default icsmList
