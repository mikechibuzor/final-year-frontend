import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized
} from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import(`@/views/app/index.vue`),
      beforeEnter: guardAppRoutes,
      children: [
       {
          path: '/home',
          name: 'HomePage',
          component: () => import('@/views/app/HomePage.vue'),
          meta: { title: `Web-Based Past Projects -`, pageTitle: 'Home' }
        },
        {
          path: '/project-details/:id',
          name: 'ProjectDetails',
          component: () => import('@/views/app/ProjectDetails.vue'),
          meta: { title: `Web-Based Past Projects -`, pageTitle: 'Project Details' }
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
          meta: { title: `Web-Based Past Projects - Login` }
        },
        {
          path: '/create-account',
          name: 'Create Account',
          component: () => import('@/views/auth/CreateAccount.vue'),
          meta: { title: `Web-Based Past Projects - Create Account` }
        },
        {
          path: '/check-your-email',
          name: 'Check Your Email',
          component: () => import('@/views/auth/CheckYourEmail.vue'),
          meta: { title: `Web-Based Past Projects - Check Your Email` }
        },
        {
          path: '/forgot-password',
          name: 'Forgot Password',
          component: () => import('@/views/auth/ForgotPassword.vue'),
          meta: { title: `Web-Based Past Projects - Forgot Password` }
        }
      ]
    }
  ]
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
