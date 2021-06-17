import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    path: '/tutor/:id/workshops/1', //acca seria /tutor/:id/workshops/:wsid
    name: 'SeeSpecificWorkshop',
    component: () => import('../components/tutors/see-specific-workshop')
  },
  {
    path: '/tutor/:id/workshops',
    name: 'ListWorkshops',
    component: () => import('../components/tutors/list-workshops')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
