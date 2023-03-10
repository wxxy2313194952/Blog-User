import Vue from 'vue'
import App from './App.vue'

//注册全局组件
import Left from '@/components/Left'
import Right from '@/components/Right'
import Pagination from '@/components/Pagination'

Vue.component(Left.name,Left)
Vue.component(Right.name,Right)
Vue.component(Pagination.name,Pagination)


import VueParticles from 'vue-particles'
Vue.use(VueParticles)

// 引入路由
import router from '@/router'
//引入vuex
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
