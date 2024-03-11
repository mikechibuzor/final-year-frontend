import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      redirect: '/',
      path: '/home',
      component: () => import('@/views/app/index.vue'),
      children: [
        {
          path: '/project-details/:id',
          name: 'ProjectDetails',
          component: () => import('@/views/app/ProjectDetails.vue'),
          meta: { title: `Online Past Project -`, pageTitle: 'Project Details' }
        }
      ]
    },
    {
      redirect: '/',
      path: '/login',
      component: () => import(`@/views/auth/index.vue`),
      children: [
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/auth/index.vue'),
          meta: { title: `Online Past Project - Login` }
        },
      ]
    }]
})

export default router
