import axios from "axios";

const url = "https://nusvocatio-server.herokuapp.com/api/admin/";

const namespaced = true;

const state = {
    admins: [
        /* {
            id: 1,
            username: "admin1",
            password: "123"
        },
        {
            id: 2,
            username: "admin2",
            password: "456"
        },
        {
            id: 3,
            username: "admin3",
            password: "789"
        } */
    ]
};
const getters = {
    allAdmins: (state) => state.admins,
    getAdminById: (state) => (id) => {
        return state.admins.find((admin) => admin.id == id);
    }
};
const actions = {
    async fetchAdmins({ commit }) {
        const response = await axios.get(url);
        commit("SET_ADMINS", response.data);
    },
    addAdmin({ commit }, user) {
        return new Promise((resolve, reject) => {
            commit("auth_request", { root: true });
            axios
                .post(url, user)
                .then((res) => {
                    const token = res.data.token;
                    const user = res.data.user;
                    localStorage.setItem("token", token);
                    axios.defaults.headers.common["Authorization"] = token;
                    commit(
                        "auth_success",
                        { token, user, currentUser: "admin" },
                        { root: true }
                    );
                    commit("ADD_ADMIN", res.data);
                    resolve(res);
                })
                .catch((err) => {
                    commit("auth_error", { root: true });
                    localStorage.removeItem("token");
                    reject(err);
                });
        });
        /* const response = await axios.post(url, admin);
        commit("ADD_ADMIN", response.data); */
    },
    async deleteAdmin(context, id) {
        await axios.delete(`${url}${id}`);
        context.commit("DELETE_ADMIN", id);
    },
    async updateAdmin({ commit }, updAdmin) {
        const response = await axios.put(`${url}${updAdmin.id}`, updAdmin);
        commit("UPDATE_ADMIN", response.data);
    },
    loginAdmin({ commit }, user) {
        return new Promise((resolve, reject) => {
            console.log("logging in");
            commit("auth_request", null, { root: true });
            axios
                .post(`${url}login`, user)
                .then((res) => {
                    console.log("logged in");
                    const token = res.data.token;
                    const user = res.data.user;
                    localStorage.setItem("token", token);
                    axios.defaults.headers.common["Authorization"] = token;
                    commit(
                        "auth_success",
                        { token, user, currentUser: "admin" },
                        { root: true }
                    );
                    resolve(res);
                })
                .catch((err) => {
                    commit("auth_error", null, { root: true });
                    localStorage.removeItem("token");
                    reject(err);
                });
        });
    }
};

const mutations = {
    SET_ADMINS: (state, admins) => (state.admins = admins),

    ADD_ADMIN: (state, admin) => {
        state.admins.unshift(admin);
    },
    DELETE_ADMIN: (state, id) => {
        const index = state.admins.findIndex((admin) => admin.id == id);
        state.admins.splice(index, 1);
    },
    UPDATE_ADMIN: (state, updAdmin) => {
        const index = state.admins.findIndex(
            (admin) => admin.id === updAdmin.id
        );
        if (index !== -1) {
            state.admins.splice(index, 1, updAdmin);
        }
    }
};

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
