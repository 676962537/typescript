import Vue from "vue";
import Router from 'vue-router'
Vue.use(Router);
let Index = () => import(/* webpackChunkName:'index' */ '../components/index.vue');
let About = () => import(/* webpackChunkName:'about' */ '../components/about.vue');
let Normal = () => import(/* webpackChunkName:'normal' */ '../components/normal.vue');
let Popup = () => import(/* webpackChunkName:'popup' */ '../components/popup.vue');
let Directive = () => import(/* webpackChunkName:'directive' */ '../components/directive.vue');
let Router1 = () => import(/* webpackChunkName:'router1' */ '../components/router1.vue');
let Router2 = () => import(/* webpackChunkName:'router2' */ '../components/router2.vue');
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
    },
    {
      path:"/directive",
      name:"directive",
      component: Directive
    },
    {
      path:"/router1",
      name:"router1",
      component: Router1
    },
    {
      path:"/router2",
      name:"router2",
      component: Router2
    }
  ]
});
// console.log("router:",router);
// console.log("Router:",Router);
export default router;
