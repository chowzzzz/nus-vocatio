import moment from "moment";

const state = {
    jobs: [
        {
            jobID: 1,
            title: "Web Developer Intern",
            empID: 1,
            shortDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            requirements: [
                {
                    req:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                },
                {
                    req:
                        "Maecenas porta augue sed odio commodo, eu gravida elit"
                }
            ],
            type: "Internship",
            faculty: "Computing",
            industry: "Consumer Business",
            department: "Business",
            salary: 1000,
            date: new Date(),
            applicants: 3,
            maxApplicants: 30,
            status: "Accepting applications",
            expiry: moment().add(1, "days")
        },
        {
            jobID: 2,
            title: "Mobile Developer Intern",
            empID: 1,
            shortDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            requirements: [
                {
                    req:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                },
                {
                    req:
                        "Maecenas porta augue sed odio commodo, eu gravida elit"
                }
            ],
            type: "Internship",
            faculty: "Computing",
            industry: "Consumer Business",
            department: "Business",
            salary: 1000,
            date: new Date(),
            applicants: 4,
            maxApplicants: 30,
            status: "Accepting applications",
            expiry: moment().add(1, "days")
        },
        {
            jobID: 3,
            title:
                "Study on Impact of the Built Environment on Community Bonding",
            empID: 2,
            shortDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            requirements: [
                {
                    req:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                },
                {
                    req:
                        "Maecenas porta augue sed odio commodo, eu gravida elit"
                }
            ],
            type: "Research Study",
            faculty: "Design and Environment",
            industry: "Consumer Business",
            department: "Business",
            salary: 400,
            date: new Date(),
            applicants: 30,
            maxApplicants: 30,
            status: "Max applicants",
            expiry: moment().add(1, "days")
        },
        {
            jobID: 4,
            title: "Survey on school environment satisfaction",
            empID: 3,
            shortDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            requirements: [
                {
                    req:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                },
                {
                    req:
                        "Maecenas porta augue sed odio commodo, eu gravida elit"
                }
            ],
            type: "Survey",
            faculty: "All",
            industry: "NIL",
            department: "Business",
            salary: null,
            date: new Date(),
            applicants: 24,
            maxApplicants: 30,
            status: "Accepting applications",
            expiry: moment().add(1, "days")
        },
        {
            jobID: 5,
            title: "A New History of Southeast Asia",
            empID: 4,
            shortDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            requirements: [
                {
                    req:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                },
                {
                    req:
                        "Maecenas porta augue sed odio commodo, eu gravida elit"
                }
            ],
            type: "Research Study",
            faculty: "FASS",
            industry: "Consumer Business",
            department: "Business",
            salary: 100,
            date: new Date(),
            applicants: 24,
            maxApplicants: 30,
            status: "Not accepting applications",
            expiry: moment().subtract(1, "days")
        },
        {
            jobID: 6,
            title: "Analyst Intern",
            empID: 5,
            shortDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            requirements: [
                {
                    req:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                },
                {
                    req:
                        "Maecenas porta augue sed odio commodo, eu gravida elit"
                }
            ],
            type: "Internship",
            faculty: "Business",
            industry: "Consumer Business",
            department: "Business",
            salary: 900,
            date: new Date(),
            applicants: 24,
            maxApplicants: 30,
            status: "Accepting applications",
            expiry: moment().add(1, "days")
        },
        {
            jobID: 7,
            title: "Software Developer Intern",
            empID: 1,
            shortDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            requirements: [
                {
                    req:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                },
                {
                    req:
                        "Maecenas porta augue sed odio commodo, eu gravida elit"
                }
            ],
            type: "Internship",
            faculty: "Computing",
            industry: "Consumer Business",
            department: "Business",
            salary: 1000,
            date: new Date(),
            applicants: 3,
            maxApplicants: 2,
            status: "Max applications",
            expiry: moment().add(1, "days")
        },
        {
            jobID: 8,
            title: "Data Analyst Intern",
            empID: 1,
            shortDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            requirements: [
                {
                    req:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                },
                {
                    req:
                        "Maecenas porta augue sed odio commodo, eu gravida elit"
                }
            ],
            type: "Internship",
            faculty: "Computing",
            industry: "Consumer Business",
            department: "Business",
            salary: 1000,
            date: new Date(),
            applicants: 2,
            maxApplicants: 4,
            status: "Not accepting applications",
            expiry: moment().subtract(1, "days")
        },
        {
            jobID: 9,
            title: "Accountant Intern",
            empID: 1,
            shortDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            requirements: [
                {
                    req:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                },
                {
                    req:
                        "Maecenas porta augue sed odio commodo, eu gravida elit"
                }
            ],
            type: "Internship",
            faculty: "Business",
            industry: "Consumer Business",
            department: "Business",
            salary: 1000,
            date: new Date(),
            applicants: 2,
            maxApplicants: 2,
            status: "Removed",
            expiry: moment().subtract(1, "days")
        }
    ]
};
const getters = {
    allJobs: (state) => state.jobs,
    getJobById: (state) => (id) => {
        return state.jobs.find((job) => job.jobID == id);
    },
    getJobByEmpId: (state) => (empID) => {
        return state.jobs.filter((job) => job.empID == empID);
    }
};
const mutations = {
    ADD_JOBPOST: (state, payload) => {
        payload.jobID = state.jobs.length + 1;
        console.log(payload);
        state.jobs.push(payload);
    },
    DELETE_JOBPOST: (state, jobID) => {
        const index = state.jobs.findIndex((job) => job.jobID == jobID);
        state.jobs.splice(index, 1);
    },
    UPDATE_JOBPOST: (state, payload) => {
        console.log(payload);
        const index = state.jobs.map((job) => job.jobID).indexOf(payload.jobID);
        // console.log(index);
        state.jobs.splice(index, 1, payload);
    }
};
const actions = {
    addJobPost: ({ commit }, payload) => {
        commit("ADD_JOBPOST", payload);
    },
    deleteJobPost: (context, jobID) => {
        context.commit("DELETE_JOBPOST", jobID);
    },
    updateJobPost: ({ commit }, payload) => {
        commit("UPDATE_JOBPOST", payload);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
