import axios from 'axios'
const baseUrl = `${import.meta.env.VITE_API_BASE_URL}`
const baseUrlAuth = `${baseUrl}/auth`

export interface CreateAccountDetails {
  email: string
}

export async function createAccountService(payload: CreateAccountDetails) {
  const res = await axios.post(`${baseUrlAuth}/register`, {
    ...payload
  })
  return res
}
export interface ResentAccountVerificationPayload {
  email: string
  type: string
}
export async function resendAccountVerificationLinkService(payload: ResentAccountVerificationPayload) {
  const res = await axios.post(`${baseUrlAuth}/resend-link?type=${payload.type}`, {
    ...payload
  })
  return res
}
export interface VerifyEmailPayload {
  code: string
  id: string
}
export async function verifyEmailService(payload: VerifyEmailPayload) {
  const res = await axios.post(`${baseUrlAuth}/verify-email`, {
    ...payload
  })
  return res
}
export interface SetPasswordPayload {
  password: string
  id: string
  username: string
}
export async function setPasswordService(payload: SetPasswordPayload) {
  const res = await axios.patch(`${baseUrlAuth}/set-details`, {
    ...payload
  })
  return res
}
export interface LoginPayload{
  email: string
  password: string
}
export async function loginService(payload: LoginPayload) {
  const res = await axios.post(`${baseUrlAuth}/login`, {
    ...payload
  })
  return res
}
export interface AdminLoginPayload{
code: string
}
export async function adminLoginService(payload: AdminLoginPayload) {
  const res = await axios.post(`${baseUrlAuth}/admin-login`, {
    ...payload
  })
  return res
}