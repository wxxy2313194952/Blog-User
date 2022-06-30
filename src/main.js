import Vue from 'vue'
import App from './App.vue'

import Left from '@/components/Left'
import Right from '@/components/Right'

Vue.component(Left.name,Left)
Vue.component(Right.name,Right)

// Element UI
// import { Select, Form, Input, } from 'element-ui';
// Vue.use(Select);
// Vue.use(Form);
// Vue.use(Input);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


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
