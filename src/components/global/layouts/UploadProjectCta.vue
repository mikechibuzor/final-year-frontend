<script setup lang="ts">
// vue
import { computed } from 'vue'
// icons
import UploadProjectIcon from '@/assets/icons/UploadProjectIcon.vue'

// vue router
import { useRouter, useRoute } from 'vue-router'
// utils
import { UPLOAD_PROJECT_CTA_ROUTE_EXCLUDED } from '@/utils/constants/index.ts'

import { useSystemSession } from '@/composables/useSystemSession.ts'

// composables
const router = useRouter()
const route = useRoute()
const { isAdminSession } = useSystemSession()
// computed
const showUploadProjectCta = computed(() => {
  console.log(isAdminSession.value)
  return !UPLOAD_PROJECT_CTA_ROUTE_EXCLUDED.includes(route.name) && isAdminSession.value
})

// functions
const goToUploadScreen = () => {
  router.push('/upload-project?type=admin')
}
</script>

<template>
  <div
    v-if="showUploadProjectCta"
    class="fixed left-4 lg:left-10 lg:bottom-10 bottom-5 flex items-center gap-x-1 border border-primary rounded-3xl shadow px-4 py-2 cursor-pointer"
    @click="goToUploadScreen"
  >
    <upload-project-icon />
    <span class="text-xs lg:text-sm">Upload Project</span>
  </div>
</template>
