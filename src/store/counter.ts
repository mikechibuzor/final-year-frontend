import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // default state
  const getDefaultState = () => {
    return {
      count: 0
    }
  }

  // refs
  const state = ref(getDefaultState())

  // computed properties
  const doubleCount = computed(() => state.value.count * 2)

  // functions
  const incrementCount = () => {
    state.value.count++
  }
  const resetState = () => {
    Object.assign(state.value, getDefaultState())
  }

  return { state, doubleCount, incrementCount, resetState }
})
