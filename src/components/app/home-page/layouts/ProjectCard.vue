<script setup lang="ts">
// vue router
import { useRouter } from 'vue-router'
import { useProjectStore } from '@/store/project.store.ts'

// composable
const router = useRouter()
const { setCurrentProjectDetails } = useProjectStore()

const props = defineProps({
  details: {
    type: Object,
    default: () => {}
  }
})

// functions

const goToProjectDetails = () => {
  setCurrentProjectDetails(props.details)
  router.push(`/project-details/${props.details.id}`)
}
</script>

<template>
  <section
    class="border border-primary rounded-xl shadow-sm flex flex-col px-8 py-6 cursor-pointer transition-all duration-300 hover:shadow-2xl"
    @click="goToProjectDetails"
  >
    <!-- image -->
    <div class="h-48 w-32 bg-primary rounded-sm shadow-sm mx-auto"></div>
    <!-- title -->
    <p class="text-center font-semibold mt-4 h-20 overflow-hidden overflow-ellipsis">
      {{ props.details.title }}
    </p>
    <!-- author -->
    <p class="text-sm font-normal mt-10">{{ props.details.author }}</p>
    <!-- year -->
    <p class="text-sm font-normal text-left">{{ props.details.year }}</p>
    <!-- buttons -->
    <div class="w-full flex items-center justify-between mt-8 text-primary font-normal text-sm">
      <p class="cursor-pointer">Citation</p>
      <p class="cursor-pointer">Download as PDF</p>
    </div>
  </section>
</template>
