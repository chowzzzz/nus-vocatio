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
import EmployerIndivApp from "../views/Employer/EmployerIndivApp.vue";
import EmployerAddJob from "../views/Employer/EmployerAddJob.vue";
import EmployerEditJob from "../views/Employer/EmployerEditJob.vue";
import EmployerProfile from "../views/Employer/EmployerProfile.vue";
import EmployerSettings from "../views/Employer/EmployerSettings.vue";

import AdminHome from "../views/Admin/AdminHome.vue";
import AdminStuAcc from "../views/Admin/AdminStuAcc.vue";
import AdminEmpAcc from "../views/Admin/AdminEmpAcc.vue";

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
        path: "/jobs/:jobID",
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
        path: "/employer-home/:jobID",
        name: "post-details",
        component: EmployerJobPosting
    },
    {
        path: "/applicants/:jobID",
        name: "applicants",
        component: EmployerApp
    },
    {
        path: "/application/:jobID/:stuID",
        name: "indiv-applicant",
        component: EmployerIndivApp
    },
    {
        path: "/add-post",
        name: "add-post",
        component: EmployerAddJob
    },
    {
        path: "/employer-home/:jobID/edit",
        name: "edit-post",
        component: EmployerEditJob
    },
    {
        path: "/employer-profile",
        name: "employer-profile",
        component: EmployerProfile
    },
    {
        path: "/employer-settings",
        name: "employer-settings",
        component: EmployerSettings
    },
    {
        path: "/admin-home",
        name: "admin-home",
        component: AdminHome
    },
    {
        path: "/admin-stu-acc",
        name: "/admin-stu-acc",
        component: AdminStuAcc
    },
    {
        path: "/admin-emp-acc",
        name: "/admin-emp-acc",
        component: AdminEmpAcc
    }
];

const router = new VueRouter({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});

export default router;
