import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('@/views/About.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
