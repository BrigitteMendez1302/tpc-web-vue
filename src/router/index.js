import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/listworkshops',
    name: 'ListWorkshops',
    component: () => import('../components/tutors/list-workshops')
  },
  {
    path: '/listworkshops/1',
    name: 'SeeSpecificWorkshop',
    component: () => import('../components/tutors/see-specific-workshop')
  },
  {
    path: '/mainstudent',
    name:'MainStudent',
    component: () => import('../components/students/general-header-side-var')
  },
  {
    path:'/seeoptions',
    name: 'SeeOptions',
    component: () => import('../components/coordinators/see-specific-class-options')
  },
  {
      path: '/coordinator/:id',
      name: 'MainCoordinator',
      component: ()=> import('../views/coordinator/main-coordinator')
  },
]

const router = new VueRouter({
  routes
})

export default router
