import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const HomePage = () => import('./pages/home/Home.vue');
const AboutPage = () => import('./pages/about/About.vue');

export const router = new Router({
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/about', name: 'about', component: AboutPage },
  ],
});
