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
    path: '/student/:id/profile', /*id:104*/
    name: 'StudentProfile',
    component: ()=> import('../views/student/student-profile')
  },
  {
    path: '/tutor/:id/profile', /*id:102*/
    name: 'TutorProfile',
    component: ()=> import('../views/tutor/tutor-profile')
  },
  {
    path: '/coordinator/:id/profile', /*id:103*/
    name: 'CoordinatorProfile',
    component: ()=> import('../views/coordinator/coordinator-profile')
  },
  {
    path: '/menu-schedule', /*id:103*/
    name: 'MenuSchedule',
    component: ()=> import('../views/coordinator/menu-schedule')
  },
  {
    path: '/add-schedule', /*id:103*/
    name: 'AddSchedule',
    component: ()=> import('../views/coordinator/add-schedule')
  },
  {
    path: '/modify-schedule', /*id:103*/
    name: 'ModifySchedule',
    component: ()=> import('../views/coordinator/modify-schedule')
  },
  {
    path: '/class-assistance',  /*id:103*/
    name: 'ClassAssistance',
    component: ()=> import('../views/coordinator/class-assistance')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
