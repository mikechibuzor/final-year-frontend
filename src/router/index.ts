import { createRouter, createWebHistory,  type NavigationGuardNext,
  type RouteLocationNormalized } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      beforeEnter: guardAppRoutes,
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
      path: '/',
      component: () => import(`@/views/auth/index.vue`),
      children: [
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/auth/Login.vue'),
          meta: { title: `Online Past Project - Login` }
        },
      ]
    }]
})
function guardAppRoutes(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) { 

  const token = localStorage.getItem('token')
  if (token) {
    next()
  } else {
    next('/login')
  }
}
export default router
