import axios from 'axios'
const baseUrl = `${import.meta.env.VITE_API_BASE_URL}`
const baseUrlProjects = `${baseUrl}/projects`

export interface UploadProjectPayload{
  projectDoc: File | null
  title: string
  matricNo: string
  authorFirstName: string
  authorLastName: string
  supervisorId: string
  year: string
  citation: string
}
export async function uploadProjectService(payload: UploadProjectPayload) {
  console.log('inside ', payload)
  const res = await axios.post(`${baseUrlProjects}`, {
    ...payload
  })
  return res
}
export async function getAllProjectsService() {
  const res = await axios.get(`${baseUrlProjects}`, {
  })
  return res
}