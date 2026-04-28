
import icsmStepper from './index.vue'

icsmStepper.install = app => {
  app.component(icsmStepper.name, icsmStepper)
} 

export default icsmStepper
