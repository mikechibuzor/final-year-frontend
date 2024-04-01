<script setup lang="ts">
// vue
import { onMounted } from 'vue'
// json
import VerifyJsonLoader from '@/assets/lottie/VerifyJsonLoader.json'

import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// handle error composable
import { useHandleError } from '@/composables/useHandleError'
// auth store
import { useAuthStore } from '@/store/auth.store'

// composable
const { verifyEmail, setExtractedEmailVerificationId } = useAuthStore()
const { handleErrorResponseNotification, isLoading, notify } = useHandleError()

const verifyEmailHandler = () => {
  console.log(route)
  isLoading.value = true
  if (!route.query.code || !route.query.code) {
    router.push('/create-account')
    return
  }
  const payload = {
    id: route.query.id,
    code: route.query.code
  }
  verifyEmail(payload)
    .then(() => {
      isLoading.value = false
      setExtractedEmailVerificationId(payload.id)
      notify({
        title: 'Success',
        type: 'success',
        text: 'Email verified successfully!'
      })
      router.push('/set-password')
    })
    .catch((error) => {
      isLoading.value = false
      handleErrorResponseNotification(error)
    })
}

// hooks
onMounted(() => {
  verifyEmailHandler()
})
</script>

<template>
  <main>
    <div class="w-full flex flex-col h-screen items-center justify-center">
      <Vue3Lottie
        :animation-data="VerifyJsonLoader"
        :loop="true"
        :autoPlay="true"
        :width="200"
        :height="200"
      />
      <span class="text-primary text-sm flex justify-center">Verifying...</span>
    </div>
  </main>
</template>
