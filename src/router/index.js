import { createRouter, createWebHistory } from 'vue-router'
import AppHeader from '../views/AppHeader.vue'
import HomeView from '../views/HomeView.vue'  
import AboutView from '../views/AboutView.vue'
import EducationView from '@/views/EducationView.vue'

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
        {
          path: 'education',
          name: 'Education',
          component: EducationView
        },
      ],
    }
  ],
})

export default router
