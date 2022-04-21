import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ref_reactivity from '../views/Ref_reactivity.vue'
import computedValue from '../views/computedValue.vue'
import watchWatcheffect from '../views/watchWatcheffect.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/reactivity',
    name: 'reactivity',
    component: Ref_reactivity
  },
  {
    path: '/computedvalue',
    name: 'computedValue',
    component: computedValue
  },
  {
  path: '/watch',
  name: 'watchWatcheffect',
  component: watchWatcheffect
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
