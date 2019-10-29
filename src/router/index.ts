import Vue from "vue";
import Router from 'vue-router'
Vue.use(Router);
const index = () => import(/* webpackChunkName:'index' */ '../vue/index.vue');
const about = () => import(/* webpackChunkName:'about' */ "../vue/about.vue");
const normal = () => import(/* webpackChunkName:'normal' */ "../vue/normal.vue");
const popup = () => import(/* webpackChunkName:'popup' */ "../vue/popup.vue");
// const normal = (r: any) => (require as any).ensure([], () => r(require('../vue/normal.vue'))); // 新建
// const popup = (r: any) => (require as any).ensure([], () => r(require('../vue/popup.vue'))); // 新建
let router = new Router({
  mode: 'hash',
  routes: [
    {
      path:"/index",
      name:"index",
      component: index
    },
    {
      path:"/about",
      name:"about",
      component: about
    },
    {
      path:"/normal",
      name:"normal",
      component: normal
    },
    {
      path:"/popup",
      name:"popup",
      component: popup
    }
  ]
})
export default router;
