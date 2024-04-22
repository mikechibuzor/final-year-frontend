
// vue
import { computed } from 'vue'
// auth store
import { useAuthStore } from '@/store/auth.store'

export function useSystemSession() {
  const { getUserDetails } = useAuthStore()
  // computed properties
  const isUserSession = computed(() => getUserDetails.role === 'user')
  const isAdminSession = computed(() => getUserDetails.role === 'admin')

  return {
    isUserSession,
    isAdminSession
  }
}
