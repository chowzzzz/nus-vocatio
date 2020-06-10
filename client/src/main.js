import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { sync } from "vuex-router-sync";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.config.productionTip = false;

// sync(store, router);

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount("#app");
