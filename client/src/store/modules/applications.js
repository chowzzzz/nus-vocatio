import axios from "axios";

const url = "http://localhost:8081/api/application/";
const create_url = "http://localhost:8081/api/application/";

const state = {
    applications: [
        /* {
            id: 1,
            jobID: 1,
            stuID: 1,
            applyDate: new Date(),
            status: "PENDING"
        },
        {
            id: 2,
            jobID: 2,
            stuID: 1,
            applyDate: new Date(),
            status: "REJECTED"
        },
        {
            id: 3,
            jobID: 9,
            stuID: 1,
            applyDate: new Date(),
            status: "ACCEPTED"
        },
        {
            id: 4,
            jobID: 7,
            stuID: 2,
            applyDate: new Date(),
            status: "PENDING"
        },
        {
            id: 5,
            jobID: 8,
            stuID: 2,
            applyDate: new Date(),
            status: "REJECTED"
        },
        {
            id: 6,
            jobID: 2,
            stuID: 3,
            applyDate: new Date(),
            status: "PENDING"
        },
        {
            id: 7,
            jobID: 7,
            stuID: 3,
            applyDate: new Date(),
            status: "ACCEPTED"
        },
        {
            id: 8,
            jobID: 9,
            stuID: 3,
            applyDate: new Date(),
            status: "PENDING"
        },
        {
            id: 9,
            jobID: 1,
            stuID: 4,
            applyDate: new Date(),
            status: "REJECTED"
        },
        {
            id: 10,
            jobID: 2,
            stuID: 4,
            applyDate: new Date(),
            status: "REJECTED"
        },
        {
            id: 11,
            jobID: 8,
            stuID: 4,
            applyDate: new Date(),
            status: "PENDING"
        },
        {
            id: 12,
            jobID: 7,
            stuID: 5,
            applyDate: new Date(),
            status: "PENDING"
        },
        {
            id: 13,
            jobID: 6,
            stuID: 5,
            applyDate: new Date(),
            status: "PENDING"
        },
        {
            id: 14,
            jobID: 1,
            stuID: 6,
            applyDate: new Date(),
            status: "ACCEPTED"
        },
        {
            id: 15,
            jobID: 2,
            stuID: 6,
            applyDate: new Date(),
            status: "ACCEPTED"
        },
        {
            id: 16,
            jobID: 6,
            stuID: 6,
            applyDate: new Date(),
            status: "PENDING"
        } */
    ]
};

const getters = {
    getAppById: (state) => (id) => {
        return state.applications.find((application) => application.id == id);
    },
    getAppByJobId: (state) => (jobpostId) => {
        return state.applications.filter(
            (application) => application.jobpostId == jobpostId
        );
    },
    getNoOfAppByJobId: (state) => (jobpostId) => {
        return state.applications.filter(
            (application) => application.jobpostId == jobpostId
        ).length;
    }
};

const actions = {
    async fetchApplications({ commit }) {
        const response = await axios.get(url);
        commit("SET_APPLICATIONS", response.data);
    },
    async addApplication({ commit }, application) {
        const response = await axios.post(create_url, application);
        commit("ADD_APPLICATION", response.data);
    },
    async deleteApplication(context, id) {
        await axios.delete(`${url}${id}`);
        context.commit("DELETE_APPLICATION", id);
    },
    async updateApplication({ commit }, updApp) {
        const response = await axios.put(`${url}${updApp.id}`, updApp);
        commit("UPDATE_APPLICATION", response.data);
    }
};

const mutations = {
    SET_APPLICATIONS: (state, applications) =>
        (state.applications = applications),

    ADD_APPLICATION: (state, application) => {
        state.applications.unshift(application);
    },
    DELETE_APPLICATION: (state, id) => {
        state.applications = state.applications.filter(
            (application) => application.id !== id
        );
    },
    UPDATE_APPLICATION: (state, updApp) => {
        const index = state.applications.findIndex(
            (application) => application.id === updApp.id
        );
        if (index !== -1) {
            state.applications.splice(index, 1, updApp);
            // state.applications[index].status = payload.status;
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
