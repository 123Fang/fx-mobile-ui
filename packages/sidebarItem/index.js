
import icsmSidebarItem from './index.vue'

icsmSidebarItem.install = app => {
  app.component(icsmSidebarItem.name, icsmSidebarItem)
} 

export default icsmSidebarItem
