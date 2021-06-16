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
    path: '/student/:id/profile',
    name: 'StudentProfile',
    component: ()=> import('../views/student/student-profile')
  },
  {
    path: '/tutor/:id/profile',
    name: 'StudentProfile',
    component: ()=> import('../views/tutor/tutor-profile')
  },
  {
    path: '/coordinator/:id/profile',
    name: 'CoordinatorProfile',
    component: ()=> import('../views/coordinator/coordinator-profile')
  },
  {
    path: '/coordinator/:id/menu-schedule',
    name: 'MenuSchedule',
    component: ()=> import('../views/coordinator/menu-schedule')
  },
  {
    path: '/coordinator/:id/add-schedule',
    name: 'AddSchedule',
    component: ()=> import('../views/coordinator/add-schedule')
  },
  {
    path: '/coordinator/:id/modify-schedule',
    name: 'ModifySchedule',
    component: ()=> import('../views/coordinator/modify-schedule')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
