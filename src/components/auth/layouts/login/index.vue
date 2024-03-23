<script lang="ts" setup>
// vue
import { type Component, computed, ref } from 'vue'

//components
import AdminLogin from '@/components/auth/layouts/login/AdminLogin.vue'
import UserLogin from '@/components/auth/layouts/login/UserLogin.vue'

const ComponentLists: Component = [UserLogin, AdminLogin]

// ref
const activeComponentIndex = ref(0)

// computed
const activeComponent = computed(() => ComponentLists[activeComponentIndex.value])

// functions
const handleToggleLoginForm = (index: number) => (activeComponentIndex.value = index)
</script>
<template>
  <transition name="fade" mode="out-in">
    <component :is="activeComponent" @toggle-login-form="handleToggleLoginForm" />
  </transition>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
