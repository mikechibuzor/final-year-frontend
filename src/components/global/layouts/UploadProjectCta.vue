<script setup lang="ts">
// icons
import UploadProjectIcon from '@/assets/icons/UploadProjectIcon.vue'

// functions
const goToUploadScreen = () => {}
</script>

<template>
  <div
    class="fixed left-4 lg:left-10 lg:bottom-10 bottom-5 flex items-center gap-x-1 border border-primary rounded-3xl shadow px-4 py-2 cursor-pointer"
    @click="goToUploadScreen"
  >
    <upload-project-icon />
    <span class="text-xs lg:text-sm">Upload Project</span>
  </div>
</template>
