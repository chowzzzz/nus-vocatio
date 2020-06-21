import Vue from "vue";
import VueRouter from "vue-router";
import StudentHome from "../views/Student/StudentHome.vue";
import StudentSearch from "../views/Student/StudentSearch.vue";
import StudentJobListing from "../views/Student/StudentJobListing.vue";
import StudentProfile from "../views/Student/StudentProfile.vue";
import StudentSettings from "../views/Student/StudentSettings.vue";
import StudentNotification from "../views/Student/StudentNotification.vue";
import Signup from "../views/Employer/EmployerSignup.vue";

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
    },
    {
        path: "/profile",
        name: "profile",
        component: StudentProfile
    },
    {
        path: "/settings",
        name: "settings",
        component: StudentSettings
    },
    {
        path: "/notification",
        name: "notification",
        component: StudentNotification
    }
];

const router = new VueRouter({
    routes
});

export default router;
