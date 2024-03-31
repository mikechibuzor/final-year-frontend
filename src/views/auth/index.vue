<script setup lang="ts">
// vue
import { computed } from 'vue'
// route
import { useRoute } from 'vue-router'

const route = useRoute()
// components
import ScholarComponent from '@/components/auth/layouts/scholar-component/index.vue'

// computed properties
const isVerifyEmailScreen = computed(() => {
  return route.path === '/verify-email'
})
</script>
<template>
  <main class="min-h-screen" :class="{ main: !isVerifyEmailScreen }">
    <scholar-component v-if="!isVerifyEmailScreen" />
    <router-view />
  </main>
</template>
