<script setup lang="ts">
// vue
import { computed } from 'vue'
// utils
import { USER_MENU_VISIBLE_ROUTE } from '@/utils/constants'

// vue-router
import { useRouter, useRoute } from 'vue-router'
// icons
import UserIcon from '@/assets/icons/UserIcon.vue'

export interface ProjectNameProps {
  scale?: string
}

const props = withDefaults(defineProps<ProjectNameProps>(), {
  scale: 'scale=100'
})

// composable
const router = useRouter()
const route = useRoute()
// computed
const showUserMenu = computed(() => {
  return USER_MENU_VISIBLE_ROUTE.includes(route.name) || route.query.type === 'one-time-upload'
})
const showProfileOption = computed(() => route.query.type !== 'one-time-upload')

// functions
const logoutHandler = () => {
  localStorage.clear()
  router.push('/login')
}
</script>
<template>
  <section class="transform flex gap-x-6" :class="props.scale">
    <div>
      <h3 class="text-2xl lg:text-3xl text-center font-medium">
        Web-Based Past Projects Repository
      </h3>
      <p class="text-xs lg:text-sm text-center text-gray-1 font-normal">
        ...of Computer Science Department, University of Ibadan.
      </p>
    </div>
    <el-dropdown v-if="showUserMenu">
      <user-icon />
      <template #dropdown>
        <el-dropdown-menu v-if="showProfileOption">
          <el-dropdown-item>Profile</el-dropdown-item>
        </el-dropdown-menu>
        <el-dropdown-menu>
          <el-dropdown-item @click="logoutHandler">Logout</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </section>
</template>
