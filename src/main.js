 

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
// import ToastService from 'primevue/toastservice';
 

import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'
const app = createApp(App)

app.use(router)
app.mount('#app')
app.use(PrimeVue);
// app.use(ToastService)
 
 
