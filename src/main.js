import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css';
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'


const app = createApp(App)

const MyPreset = definePreset(Aura, {})

app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
    }
});
app.use(router)

app.mount('#app')
