<script setup lang="ts">
// components
import UserLoginForm from '@/components/auth/forms/UserLoginForm.vue'

// emits
const emit = defineEmits<{
  (e: 'toggleLoginForm', index: number): void
}>()

// functions
const handleToggleLoginForm = (index: number) => emit('toggleLoginForm', index)
</script>
<template>
  <main class="w-[86%] md:w-[65%] lg:w-[49.69%] 2xl:w-[35rem] mx-auto flex flex-col items lg:justify-center max-lg:mt-32">
    <!-- header -->
    <section>
      <project-name />
      <div class="flex items-center justify-end gap-x-5 mt-6 w-full text-xs lg:text-sm">
        <h4>Don't have an account?</h4>
        <router-link to="/create-account" class="text-primary cursor-pointer underline">Create one here</router-link>
      </div>
    </section>
    <!-- form -->
    <user-login-form @toggle-login-form="handleToggleLoginForm" />
  </main>
</template>