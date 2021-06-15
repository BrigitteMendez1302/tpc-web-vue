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
    path:'/seecomments',
    name: 'SeeComments',
    component:() => import('../components/coordinators/see-comments')
  },
  {
    path:'/seecomments/1',
    name: 'SeeComments',
    component:() => import('../components/coordinators/see-specific-comment')
    },
  {
    path: '/coordinator/:id',
    name: 'MainCoordinator',
    component: ()=> import('../views/coordinator/main-coordinator')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
