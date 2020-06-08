import Vue from "vue";
import VueRouter from "vue-router";
import StudentHome from "../views/StudentHome.vue";
import StudentSearch from "../views/StudentSearch.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: StudentHome,
        meta: { hideSearch: true }
    },
    {
        path: "/search",
        name: "search",
        component: StudentSearch
    }
];

const router = new VueRouter({
    routes
});

export default router;
