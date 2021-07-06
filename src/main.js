// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueCookies from 'vue-cookies'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/base.css'

// 设置token值
// axios.defaults.headers.common['token] = ""

// 设置post的请求头
// axios.defaults.headers.post["Content-type"] = "application/json"

// 设置axios的baseURL
axios.defaults.baseURL = process.env.API_ROOT

Vue.use(VueAxios, axios)
Vue.use(VueCookies)
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
