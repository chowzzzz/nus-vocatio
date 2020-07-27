import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import EmployerApp from "../views/Employer/EmployerApp.vue";
import EmployerIndivApp from "../views/Employer/EmployerIndivApp.vue";
import EmployerAddJob from "../views/Employer/EmployerAddJob.vue";
import EmployerEditJob from "../views/Employer/EmployerEditJob.vue";

import AdminStuAcc from "../views/Admin/AdminStuAcc.vue";
import AdminStuAccIndiv from "../views/Admin/AdminStuAccIndiv.vue";
import AdminEmpAcc from "../views/Admin/AdminEmpAcc.vue";
import AdminEmpAccIndiv from "../views/Admin/AdminEmpAccIndiv.vue";
import AdminPostsPending from "../views/Admin/AdminPostsPending.vue";
import AdminPostsPendingIndiv from "../views/Admin/AdminPostsPendingIndiv.vue";
import AdminPostsPendingEdit from "../views/Admin/AdminPostsPendingEdit.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: () => {
            switch (store.state.currentUser) {
                case "admin":
                    return import("../views/Admin/AdminHome.vue");
                case "employer":
                    return import("../views/Employer/EmployerHome.vue");
                case "student":
                    console.log("ya");
                    return import("../views/Student/StudentHome.vue");
                default:
                    return;
            }
        },
        meta: { hideSearch: true, requiresAuth: true }
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Home.vue"),
        meta: { loggedOut: true }
    },
    {
        path: "/login/student",
        name: "login-student",
        component: () => import("../views/Student/StudentLogin.vue"),
        meta: { loggedOut: true }
    },
    {
        path: "/login/employer",
        name: "login-employer",
        component: () => import("../views/Employer/EmployerLogin.vue"),
        meta: { loggedOut: true }
    },
    {
        path: "/login/admin",
        name: "login-admin",
        component: () => import("../views/Admin/AdminLogin.vue"),
        meta: { loggedOut: true }
    },
    {
        path: "/register/student",
        name: "register-student",
        component: () => import("../views/Student/StudentRegister.vue"),
        meta: { loggedOut: true }
    },
    {
        path: "/register/employer",
        name: "register-employer",
        component: () => import("../views/Employer/EmployerRegister.vue"),
        meta: { loggedOut: true }
    },
    {
        path: "/jobPosts",
        name: "jobPosts",
        component: () => {
            switch (store.state.currentUser) {
                case "admin":
                    return import("../views/Admin/AdminPosts.vue");
                case "student":
                    return import("../views/Student/StudentSearch.vue");
            }
        },
        meta: { requiresAuth: true }
    },
    {
        path: "/jobPosts/:jobID",
        name: "job-details",
        component: () => {
            switch (store.state.currentUser) {
                case "admin":
                    return import("../views/Admin/AdminPostEdit.vue");
                case "employer":
                    return import("../views/Employer/EmployerJobPosting.vue");
                case "student":
                    return import("../views/Student/StudentJobListing.vue");
            }
        },
        meta: { requiresAuth: true }
    },
    {
        path: "/profile",
        name: "profile",
        component: () => {
            switch (store.state.currentUser) {
                case "admin":
                    return import("../views/Admin/AdminProfile.vue");
                case "employer":
                    return import("../views/Employer/EmployerProfile.vue");
                case "student":
                    return import("../views/Student/StudentProfile.vue");
            }
        },
        meta: { requiresAuth: true }
    },
    {
        path: "/settings",
        name: "settings",
        component: () => {
            switch (store.state.currentUser) {
                case "employer":
                    return import("../views/Employer/EmployerSettings.vue");
                case "student":
                    return import("../views/Student/StudentSettings.vue");
            }
        },
        meta: { requiresAuth: true }
    },
    {
        path: "/applicants/:jobID",
        name: "applicants",
        component: EmployerApp,
        meta: { requiresAuth: true }
    },
    {
        path: "/applicants/:jobID/:stuID",
        name: "indiv-applicant",
        component: EmployerIndivApp,
        meta: { requiresAuth: true }
    },
    {
        path: "/jobPosts-add",
        name: "add-post",
        component: EmployerAddJob,
        meta: { requiresAuth: true }
    },
    {
        path: "/jobPosts/:jobID/edit",
        name: "edit-post",
        component: EmployerEditJob,
        meta: { requiresAuth: true }
    },
    {
        path: "/viewStudents",
        name: "admin-stu-acc",
        component: AdminStuAcc,
        meta: { requiresAuth: true }
    },
    {
        path: "/viewStudents/:id",
        name: "admin-stu-acc-indiv",
        component: AdminStuAccIndiv,
        meta: { requiresAuth: true }
    },
    {
        path: "/viewEmployers",
        name: "admin-emp-acc",
        component: AdminEmpAcc,
        meta: { requiresAuth: true }
    },
    {
        path: "/viewEmployers/:id",
        name: "admin-emp-acc-indiv",
        component: AdminEmpAccIndiv,
        meta: { requiresAuth: true }
    },
    {
        path: "/jobPostsPending",
        name: "admin-posts-pending",
        component: AdminPostsPending,
        meta: { requiresAuth: true }
    },
    {
        path: "/jobPostsPending/:jobID",
        name: "admin-posts-pending-indiv",
        component: AdminPostsPendingIndiv,
        meta: { requiresAuth: true }
    },
    {
        path: "/jobPostsPending/:jobID/edit",
        name: "admin-posts-pending-edit",
        component: AdminPostsPendingEdit,
        meta: { requiresAuth: true }
    }
];

const router = new VueRouter({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.loggedOut)) {
        if (!store.getters.isLoggedIn) {
            next();
            return;
        }
        next("/");
    } else {
        next();
    }
});

export default router;
