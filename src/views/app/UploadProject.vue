<script lang="ts" setup>
// components
import TheHeader from '@/components/app/home-page/layouts/TheHeader.vue'
// icons
import ArrowIcon from '@/assets/icons/ArrowIcon.vue'

// vue router
import { useRouter } from 'vue-router'

// composable
const router = useRouter()

// functions
const goBack = () => router.go(-1)
</script>
<template>
  <main class="p-4 lg:p-8">
    <!-- header -->
    <the-header />
    <!-- body -->
    <section>
      <div
        @click="goBack"
        class="p-2 rounded-full shadow-xs cursor-pointer w-20 bg-transparent border flex gap-x-2 items-center justify-center mt-5 mb-3"
      >
        <arrow-icon />
        <span class="text-xs">Back</span>
      </div>
      <h4 class="text-center text-lg lg:text-2xl text-primary font-medium mt-12">Upload Project</h4>
    </section>
  </main>
</template>
