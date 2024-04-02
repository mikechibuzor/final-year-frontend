<script setup lang="ts">
import { computed } from 'vue'
// components
import TheHeader from '@/components/app/home-page/layouts/TheHeader.vue'
import SearchBar from '@/components/app/home-page/layouts/SearchBar.vue'
import ProjectCard from '@/components/app/home-page/layouts/ProjectCard.vue'

interface ProjectDetails {
  author: string
  title: string
  supervisor: string
  year: string
  id: string
}

// computed properties
const allProjects = computed<ProjectDetails[]>(() => [
  {
    author: 'Iwuagwu Chibuzor Michael',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. 0. Adeleke',
    year: '2024',
    id: '1'
  },
  {
    author: 'Hassan Jolaoluwa Batin',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. K.J',
    year: '2024',
    id: '2'
  },
  {
    author: 'Olawole Akindele Michael',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. Aderonke Sakpere',
    year: '2024',
    id: '3'
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
    id: '5'
  },
  {
    author: 'Hassan Jolaoluwa Batin',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. K.J',
    year: '2024',
    id: '6'
  },
  {
    author: 'Olawole Akindele Michael',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. Aderonke Sakpere',
    year: '2024',
    id: '7'
  },
  {
    author: 'Adeosun Oluwatunmise',
    title:
      'The Influence of Parenting style, Perceived Social Norms and Risk Propensity on Risky Behaviour among Undergraduates, University of Ibadan',
    supervisor: 'Dr. Aderonke Sakpere',
    year: '2023',
    id: '8'
  },
  {
    author: 'Iwuagwu Chibuzor Michael',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. 0. Adeleke',
    year: '2024',
    id: '9'
  },
  {
    author: 'Hassan Jolaoluwa Batin',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. K.J',
    year: '2024',
    id: '10'
  },
  {
    author: 'Olawole Akindele Michael',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. Aderonke Sakpere',
    year: '2024',
    id: '11'
  },
  {
    author: 'Adeosun Oluwatunmise',
    title:
      'The Influence of Parenting style, Perceived Social Norms and Risk Propensity on Risky Behaviour among Undergraduates, University of Ibadan',
    supervisor: 'Dr. Aderonke Sakpere',
    year: '2023',
    id: '12'
  },
  {
    author: 'Iwuagwu Chibuzor Michael',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. 0. Adeleke',
    year: '2024',
    id: '13'
  },
  {
    author: 'Hassan Jolaoluwa Batin',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. K.J',
    year: '2024',
    id: '14'
  },
  {
    author: 'Olawole Akindele Michael',
    title: 'Development of a Web-Based Past Projects Repository',
    supervisor: 'Dr. Aderonke Sakpere',
    year: '2024',
    id: '15'
  },
  {
    author: 'Adeosun Oluwatunmise',
    title:
      'The Influence of Parenting style, Perceived Social Norms and Risk Propensity on Risky Behaviour among Undergraduates, University of Ibadan',
    supervisor: 'Dr. Aderonke Sakpere',
    year: '2023',
    id: '16'
  }
])

// functions
const handleCurrentChange = (page: number) => {
  return page
}
</script>

<template>
  <main class="p-4 lg:p-8">
    <!-- header -->
    <the-header />
    <!-- search bar -->
    <search-bar />
    <!-- projects -->
    <section class="grid gap-12 lg:grid-cols-3 items-center justify-center px-8 lg:px-48 mt-20">
      <project-card v-for="(details, index) in allProjects" :key="index" :details="details" />
    </section>
    <!-- pagination -->
    <section class="flex items-center justify-center mt-10 lg:px-48">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="allProjects.length"
        @current-change="handleCurrentChange"
      />
    </section>
  </main>
</template>
