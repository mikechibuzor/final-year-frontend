import axios from 'axios'
const baseUrl = `${import.meta.env.VITE_API_BASE_URL}`
const baseUrlAuth = `${baseUrl}/auth`

interface CreateAccountDetails {
  email: string
}

export async function createAccountService(payload: CreateAccountDetails) {
  const res = await axios.post(`${baseUrlAuth}/register`, {
    ...payload
  })
  return res
}
interface ResentAccountVerificationPayload {
  email: string
  type: string
}
export async function resendAccountVerificationLinkService(payload: ResentAccountVerificationPayload) {
  const res = await axios.post(`${baseUrlAuth}/resend-link?type=${payload.type}`, {
    ...payload
  })
  return res
}
interface VerifyEmailPayload {
  code: string
  id: string
}
export async function verifyEmailService(payload: VerifyEmailPayload) {
  const res = await axios.post(`${baseUrlAuth}/verify-email`, {
    ...payload
  })
  return res
}
