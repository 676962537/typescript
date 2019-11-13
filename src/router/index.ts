import Vue from "vue";
import Router from 'vue-router'
Vue.use(Router);
// const normal = (r: any) => (require as any).ensure([], () => r(require('../vue/normal.vue'))); // 新建
// const popup = (r: any) => (require as any).ensure([], () => r(require('../vue/popup.vue'))); // 新建
let router = new Router({
  mode: 'hash',
  routes: [
    {
      path:"/index",
      name:"index",
      component: () => import(/* webpackChunkName:'index' */ '../components/index.vue')
    },
    {
      path:"/about",
      name:"about",
      component: () => import(/* webpackChunkName:'about' */ "../components/about.vue")
    },
    {
      path:"/normal",
      name:"normal",
      component: () => import(/* webpackChunkName:'normal' */ "../components/normal.vue")
    },
    {

      path:"/popup",
      name:"popup",
      component: () => import(/* webpackChunkName:'popup' */ "../components/popup.vue")
    }
  ]
})
export default router;
