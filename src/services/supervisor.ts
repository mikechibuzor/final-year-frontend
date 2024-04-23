import axios from 'axios'
const baseUrl = `${import.meta.env.VITE_API_BASE_URL}`
const baseUrlSupervisors = `${baseUrl}/supervisors`

export async function getAllSupervisorsService() {
  const res = await axios.get(`${baseUrlSupervisors}`, {
  })
  return res
}