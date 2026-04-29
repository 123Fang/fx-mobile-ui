
import icsmConfigProvider from './index.vue'

icsmConfigProvider.install = app => {
  app.component(icsmConfigProvider.name, icsmConfigProvider)
} 

export default icsmConfigProvider
