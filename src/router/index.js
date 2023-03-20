import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/counter',
    name: 'counter',
 
    component: () => import(/* webpackChunkName: "about" */ '../views/CounterView.vue')
  },

  {
      path: '/:pathMatch(.*)*',
      name:"404",
      component: NotFoundView
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
