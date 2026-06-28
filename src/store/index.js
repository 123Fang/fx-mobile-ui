import {defineStore} from 'pinia' 
export const useMainStore = defineStore('main',{
  state: ()=>{
    return {
      lang:'CN',
      iframePath: ''
    }
  },
  actions:{
    setLang(lang){
      this.lang = lang
    },
    setIframePath(iframePath) {
      this.iframePath = iframePath
    }
  },
  getters:{
    getLang:(state)=>{
			return state.lang
		},
    getIframePath:(state)=>{
			return state.iframePath
		}
  }
})