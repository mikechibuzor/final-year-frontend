<script setup lang="ts">
// icons
import EmailIcon from '@/assets/icons/EmailIcon.vue'

// handle error composable
import { useHandleError } from '@/composables/useHandleError'

import { useAuthStore } from '@/store/auth.store'

// composable
const { getResendLinkEmail, resendAccountVerificationLink } = useAuthStore()
const { handleErrorResponseNotification, isLoading, notify } = useHandleError()

// functions
const handleResendLink = () => {
  isLoading.value = true
  const payload = {
    email: getResendLinkEmail,
    type: 'create-account'
  }
  resendAccountVerificationLink(payload)
    .then(() => {
      isLoading.value = false
      notify({
        title: 'Success',
        type: 'success',
        text: 'Link has been re-sent to your mail!'
      })
    })
    .catch((error) => {
      handleErrorResponseNotification(error)
    })
}
</script>
<template>
  <main
    class="flex items-center mt-[10rem] lg:mt-0 lg:justify-center flex-col max-w-[20rem] mx-auto"
  >
    <email-icon size="lg:h-[8rem] lg:w-[8rem] h-[4rem] w-[4rem]" stroke="#76453B" />
    <h3 class="text-primary my-3 text-lg lg:text-xl">Check Your Email</h3>
    <p class="text-center text-xs lg:text-sm">
      Please click on the link sent to your email to verify your email.
    </p>
    <el-button
      @click="handleResendLink"
      :disabled="isLoading"
      class="bg-primary text-xs lg:text-base text-white w-[13rem] lg:w-[20rem] mt-10 py-6 px-8 rounded-lg cursor-pointer shadow-sm"
      >{{ isLoading ? 'Resending...' : 'Resend Link' }}</el-button
    >
  </main>
</template>
