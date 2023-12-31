import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView
        }
      ]
    }
  ]
})

export default router
