import Vue from 'vue-router'
import VueRouter from 'vue-router'

import LogIn from '../components/LogIN.vue'
import SignUp from '../components/SignUp.vue'
import ForgotPass from '../components/ForgotPass.vue'
import Home from '../components/Home.vue'
import Homeview from '../views/HomeView.vue'


Vue.use(VueRouter) 
const routes=[
  {
    path: '/',
    name: 'Homeview',
    component: Homeview
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component:LogIn
  },
  {
    path: '/forgot-pass',
    name: 'ForgotPass',
    component: ForgotPass
  },
  {
    path: '/home',
    name: 'Home',
    component:Home 
  }
]

const router = new VueRouter({
  
  mode:'history',
  routes
})

export default router







