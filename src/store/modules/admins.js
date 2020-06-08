const state = {
    admins: [
        {
            adminID: 1,
            username: "admin1",
            password: "123"
        },
        {
            adminID: 2,
            username: "admin2",
            password: "456"
        },
        {
            adminID: 3,
            username: "admin3",
            password: "789"
        }
    ]
};
const getters = {
    allAdmins: (state) => state.admins
};
const actions = {};
const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
};
