import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'


export const useProjectStore = defineStore('useProjectStore', () => {
  // default state
  const getDefaultState = () => {
    const savedState = localStorage.getItem('projectStore')
    return savedState
      ? JSON.parse(savedState)
      : {
          currentProjectDetails: {}
        }
  }

  // refs
  const state = ref(getDefaultState())

  // computed properties
  const getCurrentProjectDetails = computed(() => state.value.currentProjectDetails)

  // functions
  const setCurrentProjectDetails = (payload: any) => {
    state.value.currentProjectDetails = payload
  }

  watch(
    () => state,
    () => {
      localStorage.setItem('projectStore', JSON.stringify(state.value))
    },
    { deep: true }
  )
  return {
    state,
    setCurrentProjectDetails,
    getCurrentProjectDetails
  }
})
