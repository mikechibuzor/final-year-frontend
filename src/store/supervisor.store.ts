import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

import { getAllSupervisorsService } from '@/services/supervisor'


export const useSupervisorStore = defineStore('useSupervisorStore', () => {
  // default state
  const getDefaultState = () => {
    const savedState = localStorage.getItem('supervisorStore')
    return savedState
      ? JSON.parse(savedState)
      : {
          supervisors: []
        }
  }

  // refs
  const state = ref(getDefaultState())

  // computed properties
  const getAllSupervisors = computed(() => state.value.supervisors || [])

  // functions
  const fetchAllSupervisors = async () => {
    const response = await getAllSupervisorsService()
    state.value.supervisors = response.data
  }

  watch(
    () => state,
    () => {
      localStorage.setItem('supervisorStore', JSON.stringify(state.value))
    },
    { deep: true }
  )
  return {
    state,
    getAllSupervisors,
    fetchAllSupervisors,
  }
})
