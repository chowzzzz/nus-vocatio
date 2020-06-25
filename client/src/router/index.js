import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import StudentHome from "../views/Student/StudentHome.vue";
import StudentSearch from "../views/Student/StudentSearch.vue";
import StudentJobListing from "../views/Student/StudentJobListing.vue";
import StudentProfile from "../views/Student/StudentProfile.vue";
import StudentSettings from "../views/Student/StudentSettings.vue";
import StudentNotification from "../views/Student/StudentNotification.vue";
import Signup from "../views/Employer/EmployerSignup.vue";

import EmployerHome from "../views/Employer/EmployerHome.vue";
import EmployerJobPosting from "../views/Employer/EmployerJobPosting.vue";
import EmployerApp from "../views/Employer/EmployerApp.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "student home",
        component: StudentHome,
        meta: { hideSearch: true }
    },
    {
        path: "/login",
        name: "login",
        component: Home
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
        path: "/jobs/:id",
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
    },
    {
        path: "/employer-home",
        name: "employer home",
        component: EmployerHome
    },
    {
        path: "/employer-home/:id",
        name: "post-details",
        component: EmployerJobPosting
    },
    {
        path: "/applicants/:id",
        name: "applicants",
        component: EmployerApp
    }
];

const router = new VueRouter({
    routes
});

export default router;
