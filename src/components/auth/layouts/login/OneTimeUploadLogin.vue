<script setup lang="ts">
// components
import OneTimeUploadLoginForm from '@/components/auth/forms/OneTimeUploadLoginForm.vue'

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
    <!-- form -->
    <one-time-upload-login-form @toggle-login-form="handleToggleLoginForm" />
  </main>
</template>
