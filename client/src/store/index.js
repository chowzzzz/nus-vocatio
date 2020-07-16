import Vue from "vue";
import Vuex from "vuex";
import jobposts from "./modules/jobposts";
import employers from "./modules/employers";
import students from "./modules/students";
import admins from "./modules/admins";
import applications from "./modules/applications";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: "student"
    },
    mutations: {},
    actions: {},
    modules: {
        jobposts,
        employers,
        students,
        admins,
        applications
    }
});
