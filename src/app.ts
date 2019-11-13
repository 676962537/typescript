import Vue from "vue";
import router from "./router/index"
import store from "./store/index"
import App from "./App.vue";
import "./app.css";
import Swiper from "swiper";
new Vue({
    router,
    store,
    render:h => h(App)
}).$mount("#app");

