import { createRouter, createWebHistory } from 'vue-router'
import AppHeader from '../views/AppHeader.vue'
import HomeView from '../views/HomeView.vue'  
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      component: AppHeader,
      children: [
        {
          path: '/',
          name: 'Home',
          component: HomeView
        },
        {
          path: 'about',
          name: 'About',
          component: AboutView
        },
      ],
    }
  ],
})

export default router
