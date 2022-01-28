import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Leaderboard from '../views/Leaderboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/leaderboard/:id',
    name: 'Leaderboard',
    component: Leaderboard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
