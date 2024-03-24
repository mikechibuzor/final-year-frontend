<script setup lang="ts">
// components
import ForgotPasswordForm from '@/components/auth/forms/ForgotPasswordForm.vue'

// emits
const emit = defineEmits<{
  (e: 'toggleLoginForm', index: number): void
}>()
</script>
<template>
  <main
    class="w-[86%] md:w-[65%] lg:w-[49.69%] 2xl:w-[35rem] mx-auto flex flex-col items lg:justify-center max-lg:mt-32"
  >
    <!-- header -->
    <project-name />
    <!-- paragraph -->
    <p
      class="flex items-center justify-center text-center text-primary text-sm lg:text-lg flex-col mt-20 mb-4 font-normal"
    >
      Provide your email address to setup a new password
    </p>
    <!-- form -->
    <forgot-password-form />
  </main>
</template>
