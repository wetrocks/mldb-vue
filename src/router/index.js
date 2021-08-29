import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sites from '../views/Sites.vue'
import Surveys from '../views/Surveys.vue'
import SiteSurvey from '../views/SiteSurvey.vue'

import Profile from "../views/Profile.vue";
import { authGuard } from "../auth/authGuard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    beforeEnter: authGuard
  },
  {
    path: "/sites",
    name: "sites",
    component: Sites,
    beforeEnter: authGuard
  },
  {
    path: "/surveys",
    name: "surveys",
    component: Surveys,
    beforeEnter: authGuard
  },
  {
    path: "/siteSurvey",
    name: "siteSurvey",
    component: SiteSurvey,
    beforeEnter: authGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
