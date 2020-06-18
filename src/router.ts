import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Pokemon from './views/Pokemon.vue';
import PageNotFound from './views/404.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/pokemon/:name',
      name: 'pokemon',
      component: Pokemon,
    },
    {
      path: '*',
      component: PageNotFound,
    },
  ],
});
