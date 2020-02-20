import App from "./App.vue";
import router from "./router/index"
import store from "./store/index2"
import "./app.css";
import "./componentRegistration/button-counter"
import {Component,Vue} from "vue-property-decorator"
// 注册组件内路由守卫
Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate'
]);
Vue.directive('color',{
    inserted(el){
        el.style.color = 'red';
        el.style.fontSize = '20px';
    }
})
Vue.prototype.$mahenan = "mahenan";
new Vue({
    router,
    store,
    render:h => h(App)
}).$mount("#app");

