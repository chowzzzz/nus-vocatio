import Vue from "vue";
import VueRouter from "vue-router";
import StudentHome from "../views/StudentHome.vue";
import StudentSearch from "../views/StudentSearch.vue";
import StudentJobListing from "../views/StudentJobListing.vue";
import Signup from "../views/Signup.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: StudentHome,
        meta: { hideSearch: true }
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup
    },
    {
        path: "/jobs",
        name: "jobs",
        component: StudentSearch
    },
    {
        path: "/jobs/:jobId",
        name: "job-details",
        component: StudentJobListing
    }
];

const router = new VueRouter({
    routes
});

export default router;
