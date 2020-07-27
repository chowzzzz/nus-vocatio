import Vue from "vue";
import Vuex from "vuex";
import jobposts from "./modules/jobposts";
import employers from "./modules/employers";
import students from "./modules/students";
import admins from "./modules/admins";
import applications from "./modules/applications";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        /* user: "admin",
        isAuthenticated: true,
        isAdmin: true */
        status: "",
        token: localStorage.getItem("token") || "",
        user: {},
        currentUser: ""
    },
    mutations: {
        auth_request(state) {
            state.status = "loading";
        },
        auth_success(state, payload) {
            console.log(payload);
            state.status = "success";
            state.token = payload.token;
            state.user = payload.user;
            state.currentUser = payload.currentUser;
        },
        auth_error(state) {
            state.status = "error";
        },
        logout(state) {
            state.status = "";
            state.token = "";
            state.user = {};
            state.currentUser = "";
        }
    },
    actions: {
        logout({ commit }) {
            return new Promise((resolve) => {
                commit("logout");
                localStorage.removeItem("token");
                delete axios.defaults.headers.common["Authorization"];
                resolve();
            });
        }
    },
    getters: {
        isLoggedIn: (state) => !!state.token,
        isAdmin: (state) => state.currentUser == "admin",
        authStatus: (state) => state.status
    },
    modules: {
        jobposts,
        employers,
        students,
        admins,
        applications
    }
});
