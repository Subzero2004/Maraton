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
      path: '/ciudadform',
      name: 'CiudadForm',
      component: () => import('../views/CiudadForm.vue'),
    },
  ],
})

export default router
