import Vue from "vue";
import VueRouter from "vue-router";
import StudentHome from "../views/StudentHome.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "StudentHome",
        component: StudentHome
    },
    {
        path: "/search",
        name: "StudentSearch",
        component: () => import("../views/StudentSearch.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;
