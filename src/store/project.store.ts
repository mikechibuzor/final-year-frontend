import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

import { uploadProjectService, type UploadProjectPayload, getAllProjectsService } from '@/services/project'


export const useProjectStore = defineStore('useProjectStore', () => {
  // default state
  const getDefaultState = () => {
    const savedState = localStorage.getItem('projectStore')
    return savedState
      ? JSON.parse(savedState)
      : {
        currentProjectDetails: {},
        projects: []
        }
  }

  // refs
  const state = ref(getDefaultState())

  // computed properties
  const getCurrentProjectDetails = computed(() => state.value.currentProjectDetails)
  const getProjects = computed(() => state.value.projects)

  // functions
  const setCurrentProjectDetails = (payload: any) => {
    state.value.currentProjectDetails = payload
  }

  const uploadProject = async (payload: UploadProjectPayload) => {
    const response = await uploadProjectService(payload)
    return response
  }
    const fetchAllProjects = async () => {
    const response = await getAllProjectsService()
    state.value.projects = response.data
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
    getCurrentProjectDetails,
    uploadProject,
    getProjects,
    fetchAllProjects
  }
})
