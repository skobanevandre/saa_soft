import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import PrimeVue from 'primevue/config'
import Lara from '@primevue/themes/lara'
import './main.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use( createPinia() )
app.use( PrimeVue, { theme: { preset: Lara }, } )

app.mount('#app')
