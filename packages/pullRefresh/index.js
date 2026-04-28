
import icsmPullRefresh from './index.vue'

icsmPullRefresh.install = app => {
  app.component(icsmPullRefresh.name, icsmPullRefresh)
} 

export default icsmPullRefresh
