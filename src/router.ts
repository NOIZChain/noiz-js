import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import McDonaldsChat from './views/McDonaldsChat.vue'
import ParisHotel from './views/ParisHotel/index.vue'

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
      path: '/mcdonalds',
      name: 'mcdonalds',
      component: McDonaldsChat
    },
    {
      path: '/paris-hotel',
      name: 'paris-hotel',
      component: ParisHotel
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
