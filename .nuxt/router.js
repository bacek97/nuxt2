import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3a381d3c = () => interopDefault(import('..\\pages\\posts\\_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _11745887 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _0c560940 = () => interopDefault(import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages/_lang/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/posts/:id?",
    component: _3a381d3c,
    name: "posts-id"
  }, {
    path: "/",
    component: _11745887,
    name: "index"
  }, {
    path: "/:lang",
    component: _0c560940,
    name: "lang"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
