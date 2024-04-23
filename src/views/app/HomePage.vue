<script setup lang="ts">
// vue
import { computed, onMounted, ref } from 'vue'

// components
import TheHeader from '@/components/app/home-page/layouts/TheHeader.vue'
import SearchBar from '@/components/app/home-page/layouts/SearchBar.vue'
import ProjectCard from '@/components/app/home-page/layouts/ProjectCard.vue'
import { ScaleLoader, MoonLoader } from 'vue3-spinner'

// store
import { useProjectStore } from '@/store/project.store'

interface ProjectDetails {
  author: string
  title: string
  supervisor: string
  year: string
  id: string
}

// constants
const TABS = [
  {
    label: 'All Projects',
    value: 'all_projects'
  },
  {
    label: 'Saved Projects',
    value: 'saved_projects'
  },
  {
    label: 'History',
    value: 'history'
  }
]
// composable
const { fetchAllProjects } = useProjectStore()
// refs
const isLoading = ref(false)
const isLoadingTab = ref(false)
const isActiveTab = ref('all_projects')

// computed properties
const allProjects = computed<ProjectDetails[]>(() => [
  {
    author: 'Iwuagwu Chibuzor Michael',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. 0. Adeleke',
    year: '2024',
    id: '1',
    link: 'https://aws-final-year-project.s3.eu-north-1.amazonaws.com/ef88db8c-09b3-47eb-a380-0285686f7295.pdf'
  },
  {
    author: 'Hassan Jolaoluwa Batin',
    title: 'Electronic assessment of intellectual disability',
    supervisor: 'Dr. K.J',
    year: '2024',
    id: '2',
    link: 'https://aws-final-year-project.s3.eu-north-1.amazonaws.com/ef88db8c-09b3-47eb-a380-0285686f7295.pdf'
  },
  {
    author: 'Olawole Akindele Michael',
    title:
      'The Development of Lightweight Automatic Diacritization Model for Yorùbá to Facilitate Language Learning',
    supervisor: 'Dr. Aderonke Sakpere',
    year: '2024',
    id: '3',
    link: 'https://aws-final-year-project.s3.eu-north-1.amazonaws.com/ef88db8c-09b3-47eb-a380-0285686f7295.pdf'
  },
  {
    author: 'Adeosun Oluwatunmise',
    title:
      'The Influence of Parenting style, Perceived Social Norms and Risk Propensity on Risky Behaviour among Undergraduates, University of Ibadan',
    supervisor: 'Dr. Aderonke Sakpere',
    year: '2023',
    id: '4'
  },
  {
    author: 'Iwuagwu Chibuzor Michael',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. 0. Adeleke',
    year: '2024',
    id: '5',
    link: 'https://aws-final-year-project.s3.eu-north-1.amazonaws.com/ef88db8c-09b3-47eb-a380-0285686f7295.pdf'
  },
  {
    author: 'Hassan Jolaoluwa Batin',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. K.J',
    year: '2024',
    id: '6',
    link: 'https://aws-final-year-project.s3.eu-north-1.amazonaws.com/ef88db8c-09b3-47eb-a380-0285686f7295.pdf'
  },
  {
    author: 'Olawole Akindele Michael',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. Aderonke Sakpere',
    year: '2024',
    id: '7',
    link: 'https://aws-final-year-project.s3.eu-north-1.amazonaws.com/ef88db8c-09b3-47eb-a380-0285686f7295.pdf'
  },
  {
    author: 'Adeosun Oluwatunmise',
    title:
      'The Influence of Parenting style, Perceived Social Norms and Risk Propensity on Risky Behaviour among Undergraduates, University of Ibadan',
    supervisor: 'Dr. Aderonke Sakpere',
    year: '2023',
    id: '8',
    link: 'https://aws-final-year-project.s3.eu-north-1.amazonaws.com/ef88db8c-09b3-47eb-a380-0285686f7295.pdf'
  },
  {
    author: 'Iwuagwu Chibuzor Michael',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. 0. Adeleke',
    year: '2024',
    id: '9',
    link: 'https://aws-final-year-project.s3.eu-north-1.amazonaws.com/ef88db8c-09b3-47eb-a380-0285686f7295.pdf'
  },
  {
    author: 'Hassan Jolaoluwa Batin',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. K.J',
    year: '2024',
    id: '10',
    link: 'https://aws-final-year-project.s3.eu-north-1.amazonaws.com/ef88db8c-09b3-47eb-a380-0285686f7295.pdf'
  },
  {
    author: 'Olawole Akindele Michael',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. Aderonke Sakpere',
    year: '2024',
    id: '11',
    link: 'https://aws-final-year-project.s3.eu-north-1.amazonaws.com/ef88db8c-09b3-47eb-a380-0285686f7295.pdf'
  },
  {
    author: 'Adeosun Oluwatunmise',
    title:
      'The Influence of Parenting style, Perceived Social Norms and Risk Propensity on Risky Behaviour among Undergraduates, University of Ibadan',
    supervisor: 'Dr. Aderonke Sakpere',
    year: '2023',
    id: '12',
    link: 'https://aws-final-year-project.s3.eu-north-1.amazonaws.com/ef88db8c-09b3-47eb-a380-0285686f7295.pdf'
  },
  {
    author: 'Iwuagwu Chibuzor Michael',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. 0. Adeleke',
    year: '2024',
    id: '13',
    link: 'https://aws-final-year-project.s3.eu-north-1.amazonaws.com/ef88db8c-09b3-47eb-a380-0285686f7295.pdf'
  },
  {
    author: 'Hassan Jolaoluwa Batin',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. K.J',
    year: '2024',
    id: '14',
    link: 'https://aws-final-year-project.s3.eu-north-1.amazonaws.com/ef88db8c-09b3-47eb-a380-0285686f7295.pdf'
  },
  {
    author: 'Olawole Akindele Michael',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. Aderonke Sakpere',
    year: '2024',
    id: '15',
    link: 'https://aws-final-year-project.s3.eu-north-1.amazonaws.com/ef88db8c-09b3-47eb-a380-0285686f7295.pdf'
  },
  {
    author: 'Adeosun Oluwatunmise',
    title:
      'The Influence of Parenting style, Perceived Social Norms and Risk Propensity on Risky Behaviour among Undergraduates, University of Ibadan',
    supervisor: 'Dr. Aderonke Sakpere',
    year: '2023',
    id: '16',
    link: 'https://aws-final-year-project.s3.eu-north-1.amazonaws.com/ef88db8c-09b3-47eb-a380-0285686f7295.pdf'
  }
])

// functions
const handleCurrentChange = (page: number) => {
  return page
}
const getAllProjects = async () => {
  isLoading.value = true
  await fetchAllProjects()
    .then(() => {
      isLoading.value = false
    })
    .catch(() => {
      isLoading.value = false
    })
}
const activeTabClass = (tab: string) => {
  return isActiveTab.value === tab ? 'text-primary font-medium  border-b-2 border-b-primary' : ''
}
const setActiveTab = (tab: string) => {
  isActiveTab.value = tab
  isLoadingTab.value = true
  setTimeout(() => {
    isLoadingTab.value = false
  }, 1000)
}

// hooks
onMounted(() => {
  getAllProjects()
})
</script>

<template>
  <main class="p-4 lg:p-8">
    <template v-if="!isLoading">
      <!-- header -->
      <the-header />
      <!-- search bar -->
      <search-bar />
      <!-- tabs -->
      <section class="lg:px-48 mt-20">
        <div class="flex items-center justify-center lg:justify-start gap-x-8">
          <div
            v-for="(tab, index) in TABS"
            :key="index"
            class="cursor-pointer transition-all duration-50 ease-in text-sm lg:text-base"
            :class="activeTabClass(tab.value)"
            @click="setActiveTab(tab.value)"
          >
            {{ tab.label }}
          </div>
        </div>
      </section>
      <!-- projects -->
      <section
        v-if="!isLoadingTab"
        class="grid gap-8 lg:grid-cols-3 items-center justify-center px-6 lg:px-48 mt-10"
      >
        <project-card v-for="(details, index) in allProjects" :key="index" :details="details" />
      </section>
      <div v-else class="h-[20rem] w-10/12 mx-auto flex items-center justify-center">
        <moon-loader :loading="isLoadingTab" color="#76453B" size="35px" />
      </div>
      <!-- pagination -->
      <section class="flex items-center justify-center mt-10 lg:px-48">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="allProjects.length"
          @current-change="handleCurrentChange"
        />
      </section>
    </template>
    <div v-else class="h-screen flex items-center justify-center">
      <scale-loader :loading="isLoading" color="#76453B" />
    </div>
  </main>
</template>
