<script setup lang="ts">
// vue
import { ref } from 'vue'

import { VuePDF, usePDF } from '@tato30/vue-pdf'

import '@tato30/vue-pdf/style.css'

// icons
import ArrowIcon from '@/assets/icons/ArrowIcon.vue'
// components
import TheHeader from '@/components/app/home-page/layouts/TheHeader.vue'

// composable
import { useRouter } from 'vue-router'
import { useProjectStore } from '@/store/project.store.ts'

// composable
const router = useRouter()
const { getCurrentProjectDetails } = useProjectStore()
const { pdf, pages } = usePDF(getCurrentProjectDetails.link)

// refs
const scale = ref(1.5)
const watermarkText = ref('University of Ibadan')
const watermarkOptions = ref({
  columns: 1,
  rows: 1,
  color: '#FEF0E9',
  rotation: 45,
  fontSize: 120
})

// functions
const handleSize = (type: string) => {
  if (type === 'decrease') {
    scale.value = scale.value > 0.25 ? scale.value - 0.25 : scale.value
  } else {
    scale.value = scale.value < 2 ? scale.value + 0.25 : scale.value
  }
}
const goBack = () => router.go(-1)
const handleDownload = () => {
  pdf.value.promise.then((doc) => {
    doc.getData()
  })
}
</script>
<template>
  <main class="p-4 lg:p-8">
    <!-- header -->
    <the-header />
    <!-- back button -->
    <div
      @click="goBack"
      class="p-2 rounded-full shadow-xs cursor-pointer w-20 bg-transparent border flex gap-x-2 items-center justify-center my-6"
    >
      <arrow-icon />
      <span class="text-xs">Back</span>
    </div>
    <div class="lg:w-8/12 mx-auto">
      <!-- project title -->
      <div
        class="flex items-center justify-center text-primary text-3xl font-medium"
        style="word-break: normal"
      >
        {{ getCurrentProjectDetails.title }}
      </div>
      <!-- author and year -->
      <p class="flex items-center lg:text-xl justify-center gap-x-6 my-6">
        <span>{{ getCurrentProjectDetails.author }}</span>
        <span>{{ getCurrentProjectDetails.year }}</span>
      </p>
      <!-- preview pdf -->
      <section class="flex flex-col items-center justify-center px-5">
        <div class="flex items-center gap-x-2 mt-16">
          <button @click="handleSize('decrease')" class="text-white bg-primary p-2 w-8">-</button>
          <span>{{ scale * 100 }}%</span>
          <button @click="handleSize('increase')" class="text-white bg-primary p-2 w-8">+</button>
        </div>
        <!-- cite and download -->
        <p class="flex items-center justify-between w-full text-primary">
          <span class="cursor-pointer hover:underline"> Cite </span>
          <span class="cursor-pointer hover:underline" @click="handleDownload"> Download </span>
        </p>
        <div class="border-4 rounded-lg border-black p-4 mt-10">
          <div v-for="page in pages" :key="page">
            <VuePDF
              :pdf="pdf"
              :text-layer="true"
              :scale="scale"
              :watermark-text="watermarkText"
              :watermark-options="watermarkOptions"
            >
              <div>Fetching Project...</div>
            </VuePDF>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
