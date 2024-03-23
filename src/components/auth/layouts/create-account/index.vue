<script setup lang="ts">
// components
import CreateAccountForm from '@/components/auth/forms/CreateAccountForm.vue'

// emits
const emit = defineEmits<{
  (e: 'toggleLoginForm', index: number): void
}>()

// functions
const handleToggleLoginForm = (index: number) => emit('toggleLoginForm', index)
</script>
<template>
  <main
    class="w-[86%] md:w-[65%] lg:w-[49.69%] 2xl:w-[35rem] mx-auto flex flex-col items lg:justify-center max-lg:mt-32"
  >
    <!-- header -->
    <project-name />
    <!-- paragraph -->
    <p class="flex flex-col mt-16">
      <span class="text-fg-default text-xl font-medium">Create Account</span>
      <span
        class="flex items-center gap-x-1 text-xs lg:text-sm text-center text-gray-1 font-normal"
      >
        <span>Already have an account?</span>
        <router-link to="/login" class="text-primary underline">Login</router-link>
      </span>
    </p>
    <!-- form -->
    <create-account-form @toggle-login-form="handleToggleLoginForm" />
  </main>
</template>
