// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/stylus/index.css'
import './common/stylus/iconfont.css'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false

let store = new Vuex.Store({
  state:{
    isLogin:false,
    title:"admin",
  },
  mutations:{
    setToken(state,token){
      if (token){
         state.navTabIndex = token;

      }
    }
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data(){
    return{

    }
  },
  components: {
     App
  },
  template: '<App/>'
})
