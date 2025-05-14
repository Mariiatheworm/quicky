import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/pages/Login.vue';
import Registration from '@/pages/Registration.vue';
import Layout from '@/layout/Layout.vue';
import Home from '@/pages/Home.vue';

const routes = [
  { path: '/', name: 'Main Layout', component: Layout, children: [
    { path: '', name: 'Home', component: Home },
  ] },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Registration', component: Registration },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
