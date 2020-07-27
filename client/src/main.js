import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import moment from "moment";
import VueSwal from "vue-swal";
import Vuelidate from "vuelidate";
import axios from "axios";

Vue.config.productionTip = false;

// format date using moment
Vue.filter("formatDate", function(value) {
    if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
    }
});

// vue sweet alert
Vue.use(VueSwal);

// vuelidate
Vue.use(Vuelidate);

// token for user auth
const token = localStorage.getItem("token");
if (token) {
    axios.defaults.headers.common["Authorization"] = token;
}

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount("#app");
