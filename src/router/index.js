import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
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
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
