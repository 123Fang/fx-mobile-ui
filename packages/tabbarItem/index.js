
import icsmTabbarItem from './index.vue'

icsmTabbarItem.install = app => {
  app.component(icsmTabbarItem.name, icsmTabbarItem)
} 

export default icsmTabbarItem
