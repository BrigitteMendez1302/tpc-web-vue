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
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
