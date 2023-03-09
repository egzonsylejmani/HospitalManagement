import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorPage from '../components/pages/errorpage.vue'
import Wards from '../components/Wards/Wards.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../components/Dashboard/Dashboard.vue'
import { auth } from '../components/firebase/index'

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        requiresAuth : false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login 
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: HomeView
    },
    {
      path: '/404',
      name: '404',
      component: ErrorPage
    },
    {
      path: '/wards',
      name: 'Wards',
      component: Wards,
      meta:{
        requiresAuth : true
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
router.beforeEach((to, from, next) => {
  if(to.path === '/login' &&  auth.currentUser){
    next('/')
    return;  
  }

  if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }
  // if (router.options.routes.some(route => route.path === to.path)) {
  //   next()
  // } else {
  //   // if the route doesn't exist, redirect to your 404 page
  //   next({ name: '404' })
  // }
  next();
  // check if the route being navigated to exists in your routes
})


export default router
  