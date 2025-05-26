import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css';
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'

import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar';


const app = createApp(App)

const DarkOnlyTheme = definePreset(Aura, {
  dark: true, 

  semantic: {
    primary: '#ff6f00',       // Orange
    surface: '#2e2e2e',       // Card & Panel background
    background: '#121212',    // Page background
    content: '#fdf6ec',       // Creamy text
  },

  palette: {
    neutral: {
      0: '#121212',       // background
      100: '#2e2e2e',     // surface
      900: '#fdf6ec',     // for contrast
    },
    primary: {
      500: '#ff6f00',
    }
  },

  states: {
    hover: {
      surface: '#1e1e1e'
    },
    focus: {
      ring: '#ff6f00'
    },
    pressed: {
      surface: '#333'
    }
  },

  typography: {
    fontFamily: 'Segoe UI, sans-serif',
    fontSize: '1rem',
    fontWeight: '400',
  },

  shape: {
    borderRadius: '8px'
  }
})

app.use(PrimeVue, {
  theme: {
    preset: DarkOnlyTheme
  }
})

app.use(router)

app.component('Menubar', Menubar);

app.mount('#app')
