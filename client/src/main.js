import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { sync } from "vuex-router-sync";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import moment from "moment";

Vue.config.productionTip = false;

// format date using moment
Vue.filter("formatDate", function(value) {
    if (value) {
        return moment(String(value)).format("DD MMM YYYY");
    }
});

// sync(store, router);

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount("#app");
