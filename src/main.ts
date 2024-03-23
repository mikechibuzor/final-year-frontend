import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/css/main.css'
import Notifications from '@kyvg/vue3-notification'



import App from './App.vue'
import router from './router'

// global components
import ProjectName from '@/components/global/layouts/ProjectName.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(Notifications)

// registering global components
app.component('ProjectName', ProjectName)

app.mount('#app')
