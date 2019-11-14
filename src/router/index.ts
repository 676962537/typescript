import Vue from "vue";
import Router from 'vue-router'
Vue.use(Router);
// const normal = (r: any) => (require as any).ensure([], () => r(require('../vue/normal.vue'))); // 新建
// const popup = (r: any) => (require as any).ensure([], () => r(require('../vue/popup.vue'))); // 新建

let Index = () => import(/* webpackChunkName:'index' */ '../components/index.vue');
let About = () => import(/* webpackChunkName:'about' */ '../components/about.vue');
let Normal = () => import(/* webpackChunkName:'normal' */ '../components/normal.vue');
let Popup = () => import(/* webpackChunkName:'popup' */ '../components/popup.vue');
// import Index from "../components/index.vue"
// import About from "../components/about.vue"
// import Normal from "../components/normal.vue"
// import Popup from "../components/popup.vue"
let router = new Router({
  mode: 'hash',
  routes: [
    {
      path:"/about",
      name:"about",
      component: About
    },
    {
      path:"/index",
      name:"index",
      component: Index
    },
    {
      path:"/normal",
      name:"normal",
      component: Normal
    },
    {

      path:"/popup",
      name:"popup",
      component: Popup
    }
  ]
});
export default router;
