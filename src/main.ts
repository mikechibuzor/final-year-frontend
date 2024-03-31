import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './element-variable.scss'
import './assets/css/main.css'
import Notifications from '@kyvg/vue3-notification'
import Vue3Lottie from 'vue3-lottie'



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

// registering global components
app.component('ProjectName', ProjectName)

app.mount('#app')
