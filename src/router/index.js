import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    component: () => import('../views/About.vue')
  },{
    path: '/main/tutor',
    name: 'Home',
    component: () => import('../components/main/main-tutor.vue')

  },
  {
    path:'/lessons',
    name: 'lessons',
    component: () => import('../components/lessons/lessons.vue')
  },
  {
    path: '/trainings',
    name: 'trainings',
    component: () => import('../components/trainings/trainings.vue')
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
    path: '/findworkshops',
    name: 'FindWorkshops',
    component: () => import('../components/students/find-workshops')
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
  routes
})

export default router
