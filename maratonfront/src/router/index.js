import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AtletaForm',
      component: () => import('../views/AtletaForm.vue'),
    },
    {
      path: '/atletalist',
      name: 'AtletaList',
      component: () => import('../views/AtletaList.vue')
    },
    {
      path: '/ciudadform',
      name: 'CiudadForm',
      component: () => import('../views/CiudadForm.vue'),
    },
    {
      path: '/ciudadlist',
      name:'CiudadList',
      component: () => import('../views/CiudadList.vue'),
    },
  ],
})

export default router
