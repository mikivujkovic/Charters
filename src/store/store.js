import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      lang: 'en'
    },
    mutations: {
        changeToMne (state, payload){
          return state.lang = payload.newLang;
        },
        changeToEn (state, payload){
          return state.lang = payload.newLang;
        }
    },
    actions: {
        changeToMne (context, payload) {
          context.commit('changeToMne', payload)
        },
        changeToEn (context, payload) {
          context.commit('changeToMne', payload)
        }
      }
  })
export default store;