import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { sync } from "vuex-router-sync";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import moment from "moment";
import VueSwal from "vue-swal";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;

// format date using moment
Vue.filter("formatDate", function(value) {
    if (value) {
        return moment(String(value)).format("DD MMM YYYY");
    }
});

// sync(store, router);

// vue sweet alert
Vue.use(VueSwal);

// vuelidate
Vue.use(Vuelidate);

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount("#app");
