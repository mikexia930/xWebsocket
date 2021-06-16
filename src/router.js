import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/socket1',
    name: 'Socket1',
    component: () => import('./components/Socket1.vue'),
  },
  {
    path: '/socket2',
    name: 'Socket2',
    component: () => import('./components/Socket2.vue'),
  },
  {
    path: '/other1',
    name: 'Other1',
    component: () => import('./components/Other1.vue'),
  },
  {
    path: '/other2',
    name: 'Other2',
    component: () => import('./components/Other2.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
