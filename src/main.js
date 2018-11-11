// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'

Vue.use(vuex)

const store = new vuex.Store({
  state: {
    count: 0
  },

  mutations: {
    add (state) {
      state.count++
    },

    remove (state, num = 1) {
      state.count -= num
    }
  },

  getters: {
    optCount: (state) => {
      return state.count + 'hello world'
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
