import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './element-variable.scss'
import './assets/css/main.css'
import Notifications from '@kyvg/vue3-notification'
import Vue3Lottie from 'vue3-lottie'
import vue3Spinner from 'vue3-spinner'
import setupInterceptors from '@/services/setupInterceptors'

import App from './App.vue'
import router from './router'

// global components
import ProjectName from '@/components/global/layouts/ProjectName.vue'



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(Notifications)
app.use(Vue3Lottie, { name: 'Vue3Lottie' })
app.use(vue3Spinner)

// registering global components
app.component('ProjectName', ProjectName)
setupInterceptors()
app.mount('#app')
