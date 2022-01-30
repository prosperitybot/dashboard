import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/leaderboard/:id',
    name: 'Leaderboard',
    component: () => import(/* webpackChunkName: "leaderboard" */ '@/views/Leaderboard.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
