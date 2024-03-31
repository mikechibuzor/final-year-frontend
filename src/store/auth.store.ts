import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {
  createAccountService,
  resendAccountVerificationLinkService,
  verifyEmailService
} from '@/services/auth'

interface CreateAccountDetails {
  email: string
}
interface ResentAccountVerificationPayload {
  email: string
  type: string
}
interface VerifyEmailPayload {
  code: string
  id: string
}
export const useAuthStore = defineStore('counter', () => {
  // default state
  const getDefaultState = () => {
    return {
      count: 0,
      userDetails: {},
      resendLinkEmail: ''
    }
  }

  // refs
  const state = ref(getDefaultState())

  // computed properties
  const doubleCount = computed(() => state.value.count * 2)
  const getUserDetails = computed(() => state.value.userDetails)
  const getResendLinkEmail = computed(() => state.value.resendLinkEmail)

  // functions
  const incrementCount = () => {
    state.value.count++
  }
  const resetState = () => {
    Object.assign(state.value, getDefaultState())
  }
  const createAccount = (payload: CreateAccountDetails) => {
    return createAccountService(payload)
  }
  const setResentLinkEmail = (payload: string) => {
    state.value.resendLinkEmail = payload
  }
  const resendAccountVerificationLink = (payload: ResentAccountVerificationPayload) => {
    return resendAccountVerificationLinkService(payload)
  }
  const verifyEmail = (payload: VerifyEmailPayload) => {
    return verifyEmailService(payload)
  }

  return {
    state,
    doubleCount,
    incrementCount,
    resetState,
    createAccount,
    getUserDetails,
    getResendLinkEmail,
    setResentLinkEmail,
    resendAccountVerificationLink,
    verifyEmail
  }
})
