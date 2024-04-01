<script setup lang="ts">
// components
import SetPasswordForm from '@/components/auth/forms/SetPasswordForm.vue'

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
    <section>
      <project-name />
      <div class="flex items-center justify-end gap-x-5 mt-6 w-full text-xs lg:text-sm">
        <router-link to="/login" class="text-primary cursor-pointer underline">Login</router-link>
      </div>
    </section>
    <!-- form -->
    <set-password-form @toggle-login-form="handleToggleLoginForm" />
  </main>
</template>
