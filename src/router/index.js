import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Login'
      }
    },
    {
      path: '/main',
      name: 'Main',
      component: ()=>import('@/views/Main')
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=>import('@/views/Login')
    },
    {
      path: '/register',
      name: 'Register',
      component: ()=>import('@/views/Register')
    }
  ]
})