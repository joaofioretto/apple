import Vue from 'vue'
import Router from 'vue-router'
import Index from '~/pages/index.vue'
import Todos from '~/pages/todos.vue'
import Shop from '~/pages/shop.vue'
import SignUp from '~/pages/sign-up.vue'

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  routes: [
    {path: '/', component: Index, name: 'index'},
    {path: '/todos', component: Todos, name: 'todos'},
    {path: '/shop', component: Shop, name: 'shop'},
    {path: '/signup', component: SignUp, name: 'signup'}
  ]
}

export function createRouter (ctx) {
  return new Router(routerOptions)
}
