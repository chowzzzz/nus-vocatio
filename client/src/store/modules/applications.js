const state = {
    applications: [
        {
            appID: 1,
            jobID: 1,
            stuID: 1,
            applyDate: new Date(),
            status: "PENDING"
        },
        {
            appID: 2,
            jobID: 2,
            stuID: 1,
            applyDate: new Date(),
            status: "REJECTED"
        },
        {
            appID: 3,
            jobID: 5,
            stuID: 1,
            applyDate: new Date(),
            status: "ACCEPTED"
        },
        {
            appID: 4,
            jobID: 3,
            stuID: 2,
            applyDate: new Date(),
            status: "PENDING"
        },
        {
            appID: 5,
            jobID: 4,
            stuID: 2,
            applyDate: new Date(),
            status: "REJECTED"
        },
        {
            appID: 6,
            jobID: 2,
            stuID: 3,
            applyDate: new Date(),
            status: "PENDING"
        },
        {
            appID: 7,
            jobID: 3,
            stuID: 3,
            applyDate: new Date(),
            status: "ACCEPTED"
        },
        {
            appID: 8,
            jobID: 5,
            stuID: 3,
            applyDate: new Date(),
            status: "PENDING"
        },
        {
            appID: 9,
            jobID: 1,
            stuID: 4,
            applyDate: new Date(),
            status: "REJECTED"
        },
        {
            appID: 10,
            jobID: 2,
            stuID: 4,
            applyDate: new Date(),
            status: "REJECTED"
        },
        {
            appID: 11,
            jobID: 4,
            stuID: 4,
            applyDate: new Date(),
            status: "PENDING"
        },
        {
            appID: 12,
            jobID: 3,
            stuID: 5,
            applyDate: new Date(),
            status: "PENDING"
        },
        {
            appID: 13,
            jobID: 6,
            stuID: 5,
            applyDate: new Date(),
            status: "PENDING"
        },
        {
            appID: 14,
            jobID: 1,
            stuID: 6,
            applyDate: new Date(),
            status: "ACCEPTED"
        },
        {
            appID: 15,
            jobID: 2,
            stuID: 6,
            applyDate: new Date(),
            status: "ACCEPTED"
        },
        {
            appID: 16,
            jobID: 6,
            stuID: 6,
            applyDate: new Date(),
            status: "PENDING"
        }
    ]
};

const getters = {
    getAppByJobId: (state) => (jobID) => {
        return state.applications.filter(
            (application) => application.jobID == jobID
        );
    }
};

const actions = {};
const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
};
