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
    name: 'list-workshops',
    component: () => import('../components/tutors/list-workshops')
  },
  {
    path: '/tutor/:id/workshops/:workshopId', //acca seria /tutor/:id/workshops/:id
    name: 'see-specific-workshop',
    component: () => import('../components/tutors/see-specific-workshop')
  },
  {
    path: '/student/:id',
    name:'main-student',
    component: () => import('../components/students/general-header-side-var')
  },

  {
    path:'/coordinator/:id/options',
    name: 'see-options',
    component: () => import('../components/coordinators/see-specific-class-options')
  },
  {
    path:'/coordinator/:id/lessons/:lessonId/seecomments',
    name: 'see-comments',
    component:() => import('../components/coordinators/see-comments')
  },
  {
    path:'/coordinator/:id/lessons/:lessonId/seecomments/:studentId',
    name: 'see-specific-comment',
    component:() => import('../components/coordinators/see-specific-comment')
    },
  {
    path: '/coordinator/:id',
    name: 'main-coordinator',
    component: ()=> import('../views/coordinator/main-coordinator')
  },

  {
    path: '/tutor/:id/assistance',
    name: 'Assistance',
    component: ()=> import('../components/tutors/assistance')
  },

  {
    path: '/student/:id/reservationtutorials',
    name: 'Reservation',
    component: ()=> import('../components/students/reservar-tutoria')
  },
  {
    path: '/student/:id/mainstudent',
    name: 'Assistance',
    component: ()=> import('../views/student/main-student')
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
    path: '/coordinator/:id/menu-schedule', /*id:103*/
    name: 'MenuSchedule',
    component: ()=> import('../views/coordinator/menu-schedule')
  },
  {
    path: '/coordinator/:id/add-schedule', /*id:103*/
    name: 'AddSchedule',
    component: ()=> import('../views/coordinator/add-schedule')
  },
  {
    path: '/coordinator/:id/modify-schedule', /*id:103*/
    name: 'ModifySchedule',
    component: ()=> import('../views/coordinator/modify-schedule')
  },
  {
    path: '/coordinator/:id/class-assistance',  /*id:1*/
    name: 'ClassAssistance',
    component: ()=> import('../views/coordinator/class-assistance')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
