<script setup lang="ts">
// vue
import { ref } from 'vue'

// notification
import { useNotification } from '@kyvg/vue3-notification'

// vue router
import { useRouter } from 'vue-router'
import { useProjectStore } from '@/store/project.store.ts'

// icons
import BookmarkIcon from '@/assets/icons/BookmarkIcon.vue'

// composable
const router = useRouter()
const { notify } = useNotification()
const { setCurrentProjectDetails } = useProjectStore()

const props = defineProps({
  details: {
    type: Object,
    default: () => {}
  }
})

// refs
const isBookmarked = ref(false)

// functions
const goToProjectDetails = () => {
  setCurrentProjectDetails(props.details)
  router.push(`/project-details/${props.details.id}`)
}
const handleToggleBookmark = () => {
  isBookmarked.value = !isBookmarked.value
  notify({
    title: 'Success',
    type: 'success',
    text: isBookmarked.value ? 'Saved Successfully!' : 'Removed Successfully!'
  })
}
</script>

<template>
  <section
    class="border border-primary rounded-xl shadow-sm flex flex-col px-8 py-6 cursor-pointer transition-all duration-300 hover:shadow-2xl"
    @click.self="goToProjectDetails"
  >
    <!-- image -->
    <div
      @click.self="goToProjectDetails"
      class="h-48 w-32 bg-primary rounded-sm shadow-sm mx-auto"
    ></div>
    <!-- title -->
    <p class="text-center font-semibold mt-4 h-20 overflow-hidden overflow-ellipsis">
      {{ props.details.title }}
    </p>
    <!-- author -->
    <p @click.self="goToProjectDetails" class="text-sm font-normal mt-10">
      {{ props.details.author }}
    </p>
    <!-- year -->
    <p @click.self="goToProjectDetails" class="text-sm font-normal text-left">
      {{ props.details.year }}
    </p>
    <!-- buttons -->
    <div class="w-full flex items-center justify-end mt-8 text-primary font-normal text-sm">
      <bookmark-icon @click="handleToggleBookmark" :active="isBookmarked" />
    </div>
  </section>
</template>
