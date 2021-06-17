import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/tutor/:id/workshops',
    name: 'ListWorkshops',
    component: () => import('../components/tutors/list-workshops')
  },
  {
    path: '/tutor/:id/workshops/1', //acca seria /tutor/:id/workshops/:wsid
    name: 'SeeSpecificWorkshop',
    component: () => import('../components/tutors/see-specific-workshop')
  },
  {
    path: '/student/:id',
    name:'MainStudent',
    component: () => import('../components/students/general-header-side-var')
  },

  {
    path:'/coordinator/:id/options',
    name: 'SeeOptions',
    component: () => import('../components/coordinators/see-specific-class-options')
  },
  {
      path: '/coordinator/:id',
      name: 'MainCoordinator',
      component: ()=> import('../views/coordinator/main-coordinator')
  },

  {
    path: '/tutor/:id/assistance',
    name: 'Assistance',
    component: ()=> import('../components/tutors/assistance')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
