import axios, { type AxiosResponse, type AxiosRequestConfig } from 'axios'
import { useAuthStore } from '@/store/auth.store'

const setupInterceptors = () => {
  const { getAccessToken } = useAuthStore()
  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      return response
    },
    (error) => {
      if (error.response?.data) {
        if (error.response.data.code === 401) {
          window.location.assign(`${import.meta.env.VITE_API_BASE_URL}/login`)
          setTimeout(() => {
            localStorage.clear()
          }, 500)
        }
      } else if (error.toJSON().message === 'Network Error') {
        error.name = ''
        error.message = 'Could not establish connection'
      }
      return Promise.reject(error)
    }
  )

  axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const accessToken = getAccessToken
      if (accessToken) {
        config.headers = {
          Authorization: `Bearer ${accessToken}`
        }
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}
export default setupInterceptors
