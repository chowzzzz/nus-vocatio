import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

// import StudentSearch from "../views/Student/StudentSearch.vue";
// import StudentJobListing from "../views/Student/StudentJobListing.vue";

// import EmployerJobPosting from "../views/Employer/EmployerJobPosting.vue";
import EmployerApp from "../views/Employer/EmployerApp.vue";
import EmployerIndivApp from "../views/Employer/EmployerIndivApp.vue";
import EmployerAddJob from "../views/Employer/EmployerAddJob.vue";
import EmployerEditJob from "../views/Employer/EmployerEditJob.vue";

import AdminStuAcc from "../views/Admin/AdminStuAcc.vue";
import AdminStuAccIndiv from "../views/Admin/AdminStuAccIndiv.vue";
import AdminEmpAcc from "../views/Admin/AdminEmpAcc.vue";
import AdminEmpAccIndiv from "../views/Admin/AdminEmpAccIndiv.vue";
// import AdminPosts from "../views/Admin/AdminPosts.vue";
// import AdminPostEdit from "../views/Admin/AdminPostEdit.vue";
import AdminPostsPending from "../views/Admin/AdminPostsPending.vue";
import AdminPostsPendingIndiv from "../views/Admin/AdminPostsPendingIndiv.vue";
import AdminPostsPendingEdit from "../views/Admin/AdminPostsPendingEdit.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: () => {
            switch (store.state.user) {
                case "admin":
                    return import("../views/Admin/AdminHome.vue");
                case "employer":
                    return import("../views/Employer/EmployerHome.vue");
                case "student":
                    return import("../views/Student/StudentHome.vue");
            }
        },
        beforeEnter: (to, from, next) => {
            if (!store.state.isAuthenticated) next("/login");
            else next();
        },
        meta: { hideSearch: true }
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Home.vue")
    },
    {
        path: "/login/student",
        name: "login-student",
        component: () => import("../views/Student/StudentLogin.vue")
    },
    {
        path: "/login/employer",
        name: "login-employer",
        component: () => import("../views/Employer/EmployerLogin.vue")
    },
    {
        path: "/login/admin",
        name: "login-admin",
        component: () => import("../views/Admin/AdminLogin.vue")
    },
    {
        path: "/register/student",
        name: "register-student",
        component: () => import("../views/Student/StudentRegister.vue")
    },
    {
        path: "/register/employer",
        name: "register-employer",
        component: () => import("../views/Employer/EmployerRegister.vue")
    },
    {
        path: "/jobPosts",
        name: "jobPosts",
        component: () => {
            switch (store.state.user) {
                case "admin":
                    return import("../views/Admin/AdminPosts.vue");
                case "student":
                    return import("../views/Student/StudentSearch.vue");
            }
        }
    },
    {
        path: "/jobPosts/:jobID",
        name: "job-details",
        component: () => {
            switch (store.state.user) {
                case "admin":
                    return import("../views/Admin/AdminPostEdit.vue");
                case "employer":
                    return import("../views/Employer/EmployerJobPosting.vue");
                case "student":
                    return import("../views/Student/StudentJobListing.vue");
            }
        }
    },
    {
        path: "/profile",
        name: "profile",
        component: () => {
            switch (store.state.user) {
                case "admin":
                    return import("../views/Admin/AdminProfile.vue");
                case "employer":
                    return import("../views/Employer/EmployerProfile.vue");
                case "student":
                    return import("../views/Student/StudentProfile.vue");
            }
        }
    },
    {
        path: "/settings",
        name: "settings",
        component: () => {
            switch (store.state.user) {
                case "employer":
                    return import("../views/Employer/EmployerSettings.vue");
                case "student":
                    return import("../views/Student/StudentSettings.vue");
            }
        }
    },
    {
        path: "/applicants/:jobID",
        name: "applicants",
        component: EmployerApp
    },
    {
        path: "/applicants/:jobID/:stuID",
        name: "indiv-applicant",
        component: EmployerIndivApp
    },
    {
        path: "/jobPosts-add",
        name: "add-post",
        component: EmployerAddJob
    },
    {
        path: "/jobPosts/:jobID/edit",
        name: "edit-post",
        component: EmployerEditJob
    },
    {
        path: "/viewStudents",
        name: "admin-stu-acc",
        component: AdminStuAcc
    },
    {
        path: "/viewStudents/:id",
        name: "admin-stu-acc-indiv",
        component: AdminStuAccIndiv
    },
    {
        path: "/viewEmployers",
        name: "admin-emp-acc",
        component: AdminEmpAcc
    },
    {
        path: "/viewEmployers/:id",
        name: "admin-emp-acc-indiv",
        component: AdminEmpAccIndiv
    },
    {
        path: "/jobPostsPending",
        name: "admin-posts-pending",
        component: AdminPostsPending
    },
    {
        path: "/jobPostsPending/:jobID",
        name: "admin-posts-pending-indiv",
        component: AdminPostsPendingIndiv
    },
    {
        path: "/jobPostsPending/:jobID/edit",
        name: "admin-posts-pending-edit",
        component: AdminPostsPendingEdit
    }
];

const router = new VueRouter({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});

export default router;
