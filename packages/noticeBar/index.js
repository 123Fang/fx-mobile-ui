
import icsmNoticeBar from './index.vue'

icsmNoticeBar.install = app => {
  app.component(icsmNoticeBar.name, icsmNoticeBar)
} 

export default icsmNoticeBar
