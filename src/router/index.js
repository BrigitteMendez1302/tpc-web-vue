import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
<<<<<<< HEAD
    path: '/',
<<<<<<< HEAD
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/tutor/:id/workshops',
    name: 'list-workshops',
    component: () => import('../components/tutors/list-workshops')
=======
    name: 'About',
    component: () => import('../views/About.vue')
  },{
    path: '/tutors/:id',
    name: 'Home',
    component: () => import('../components/main/main-tutor.vue')

  },
  {
    path:'/lesson/student/:id',
    name: 'find-workshops',
    component: () => import('../components/students/find-workshops.vue')
  },
  {
    path: '/trainings',
    name: 'trainings',
    component: () => import('../components/trainings/trainings.vue')
  },
  {
    path: '/lesson',
    name: 'lesson',
    component: () => import('../components/lessons/lessons.vue')
>>>>>>> feature/components-Josias
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
<<<<<<< HEAD
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
=======
    path: '/coordinator/:id/main',
    name: 'MainCoordinator',
    component: ()=> import('../views/coordinator/main-coordinator')
  },
  {
    path: '/coordinator/:id/reports',
    name: 'VerReportes',
    component: ()=> import('../views/coordinator/ver-reportes')
  },
  {
    path: '/coordinator/:id/reports/complaints',
    name: 'VerQuejas',
    component: ()=> import('../views/coordinator/ver-quejas')
  },
  {
    path: '/coordinator/:id/reports/complaints/:cid',
    name: 'DetalleQueja',
    component: ()=> import('../views/coordinator/detalle-queja')
>>>>>>> feature/components-julissa
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
=======
    path: '/tutor/:id/workshops/1', //acca seria /tutor/:id/workshops/:wsid
    name: 'SeeSpecificWorkshop',
    component: () => import('../components/tutors/see-specific-workshop')
  },
  {
    path: '/tutor/:id/workshops',
    name: 'ListWorkshops',
    component: () => import('../components/tutors/list-workshops')
>>>>>>> feature/components-Josias
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
