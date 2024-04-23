import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import {
  createAccountService,
  type CreateAccountDetails,
  resendAccountVerificationLinkService,
  type ResentAccountVerificationPayload,
  verifyEmailService,
  type VerifyEmailPayload,
  setPasswordService,
  type SetPasswordPayload,
  loginService,
  type LoginPayload,
  adminLoginService,
  type AdminLoginPayload
} from '@/services/auth'

export const useAuthStore = defineStore('useAuthStore', () => {
  // default state
  const getDefaultState = () => {
    const savedState = localStorage.getItem('authState')
    return savedState
      ? JSON.parse(savedState)
      : {
          count: 0,
          userDetails: {},
          resendLinkEmail: '',
          extractedEmailVerificationId: '',
          accessToken: '',
          refreshToke: ''
        }
  }

  // refs
  const state = ref(getDefaultState())

  // computed properties
  const doubleCount = computed(() => state.value.count * 2)
  const getUserDetails = computed(() => state.value.userDetails)
  const getResendLinkEmail = computed(() => state.value.resendLinkEmail)
  const getExtractedEmailVerificationId = computed(() => state.value.extractedEmailVerificationId)
  const getAccessToken = computed(() => state.value.accessToken)

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
  const setPassword = (payload: SetPasswordPayload) => {
    return setPasswordService(payload)
  }
  const adminLogin = async (payload: AdminLoginPayload) => {
    const response = await adminLoginService(payload)
    state.value.accessToken = response.data.accessToken
    state.value.refreshToken = response.data.refreshToken
        console.log(response.data.userDetails)
    state.value.userDetails = response.data.userDetails
    localStorage.setItem('token', state.value.accessToken)
  }
  const setExtractedEmailVerificationId = (payload: string) =>
    (state.value.extractedEmailVerificationId = payload)

  const login = async (payload: LoginPayload) => {
    const response = await loginService(payload)
    state.value.accessToken = response.data.accessToken
    state.value.refreshToken = response.data.refreshToken
    state.value.userDetails = response.data.userDetails
    localStorage.setItem('token', state.value.accessToken)
  }

  watch(
    () => state,
    () => {
      localStorage.setItem('authState', JSON.stringify(state.value))
    },
    { deep: true }
  )
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
    verifyEmail,
    setPassword,
    getExtractedEmailVerificationId,
    setExtractedEmailVerificationId,
    login,
    adminLogin,
    getAccessToken
  }
})
