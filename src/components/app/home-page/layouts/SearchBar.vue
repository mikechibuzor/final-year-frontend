<script setup lang="ts">
// vue
import { ref } from 'vue'

// icons
import SearchIcon from '@/assets/icons/SearchIcon.vue'
import FilterIcon from '@/assets/icons/FilterIcon.vue'

// refs
const searchInput = ref('')
const selectedSearchParam = ref('')

// search params
const searchParams = [
  {
    label: 'Author First Name',
    value: 'Author First Name'
  },
  {
    label: 'Author Last Name',
    value: 'Author Last Name'
  },
  {
    label: 'Project Title',
    value: 'Project Title'
  },
  {
    label: 'Supervisor Name',
    value: 'Supervisor Name'
  },
  {
    label: 'Year',
    value: 'Year'
  },
  {
    label: 'Key Words',
    value: 'Key Words'
  }
]
</script>
<template>
  <section class="flex items-center justify-center mt-[5rem]">
    <div class="flex w-[45rem]">
      <!-- dropdown select -->
      <el-select v-model="selectedSearchParam" class="lg:[18%] w-[15%]">
        <el-option v-for="(params, index) in searchParams" :key="index" :value="params.value">{{
          params.label
        }}</el-option>
      </el-select>
      <!-- input -->
      <el-input
        style="border: none"
        v-model="searchInput"
        class="w-[70%]"
        placeholder="Search for a past project..."
      >
        <template #suffix>
          <div
            class="cursor-pointer radius-lg shadow-sm bg-secondary h-full w-full p-4 flex items-center justify-center -mr-2.5"
          >
            <search-icon />
          </div>
        </template>
      </el-input>
      <!-- filter -->
      <div
        class="w-[15%] lg:w-[10%] flex items-center justify-center rounded bg-primary cursor-pointer"
      >
        <filter-icon />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
:deep(.el-input),
:deep(.el-select__wrapper) {
  height: 50px;
  border: none !important;
  color: #76453b !important;
}

@media screen and (max-width: 768px) {
  :deep(.el-select__placeholder),
  :deep(.el-input__inner) {
    font-size: 11px;
    color: #76453b !important;
  }
  :deep(.el-input),
  :deep(.el-select__wrapper) {
    height: 40px;
    border: none !important;
  }
}
</style>
