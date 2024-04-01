// notification
import { useNotification } from '@kyvg/vue3-notification'
// vue
import { ref } from 'vue'

export function useHandleError() {
  // ref
  const isLoading = ref(false)
  // composable
  const { notify } = useNotification()

  const handleErrorResponseNotification = (error: any) => {
    isLoading.value = false
    const err = error.response?.data?.errorMessages[0] || 'Something went wrong'
    notify({
      title: 'Error',
      type: 'error',
      text: err
    })
  }

  return {
    handleErrorResponseNotification,
    notify,
    isLoading
  }
}
