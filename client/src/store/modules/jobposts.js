// import moment from "moment";
import axios from "axios";

const url = "http://localhost:8081/api/jobpost/";
const create_url = "http://localhost:8081/api/employer/jobpost";

const state = {
    jobposts: [
        /* {
            id: 1,
            title: "Web Developer Intern",
            empID: 1,
            shortDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            requirements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nIn a odio in ex tincidunt rhoncus.\nAliquam venenatis est sed sem iaculis fermentum sit amet luctus est.\nMauris finibus ipsum a nibh posuere, consequat mattis odio consectetur.\n",
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
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
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
            id: 6,
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
            id: 7,
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
            id: 8,
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
            id: 9,
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
        } */
    ]
};
const getters = {
    allJobs: (state) =>
        state.jobposts.filter(
            (jobpost) => jobpost.post_status != 0 && jobpost.post_status != 4
        ),
    allAvailJobs: (state) =>
        state.jobposts.filter((jobpost) => jobpost.post_status == 1),
    allPendingJobs: (state) =>
        state.jobposts.filter((jobpost) => jobpost.post_status == 0),
    getJobById: (state) => (id) => {
        return state.jobposts.find((jobpost) => jobpost.id == id);
    },
    getJobByEmpId: (state) => (employerId) => {
        return state.jobposts.filter(
            (jobpost) => jobpost.employerId == employerId
        );
    },
    getJobsBySearch: (state) => (search, checkedTypes, checkedFac, salary) => {
        let jobposts = state.jobposts.filter(
            (jobpost) => jobpost.post_status != 0
        );
        jobposts = jobposts.filter((jobpost) =>
            jobpost.post_title.toLowerCase().includes(search.toLowerCase())
        );

        if (checkedTypes.length > 0)
            jobposts = jobposts.filter((jobpost) =>
                checkedTypes.includes(jobpost.post_type)
            );
        if (checkedFac.length > 0)
            jobposts = jobposts.filter((jobpost) =>
                checkedFac.includes(jobpost.post_faculty)
            );
        if (salary.length > 0)
            jobposts = jobposts.filter((jobpost) => {
                return (
                    parseInt(jobpost.post_pay) >= salary[0] &&
                    parseInt(jobpost.post_pay) <= salary[1]
                );
            });

        return jobposts;
    },
    getPendingJobsBySearch: (state) => (
        search,
        checkedTypes,
        checkedFac,
        salary
    ) => {
        let jobposts = state.jobposts.filter(
            (jobpost) => jobpost.post_status == 0
        );
        jobposts = jobposts.filter((jobpost) =>
            jobpost.post_title.toLowerCase().includes(search.toLowerCase())
        );
        if (checkedTypes.length > 0)
            jobposts = jobposts.filter((jobpost) =>
                checkedTypes.includes(jobpost.post_type)
            );
        if (checkedFac.length > 0)
            jobposts = jobposts.filter((jobpost) =>
                checkedFac.includes(jobpost.post_faculty)
            );
        if (salary.length > 0)
            jobposts = jobposts.filter((jobpost) => {
                return (
                    parseInt(jobpost.post_pay) >= salary[0] &&
                    parseInt(jobpost.post_pay) <= salary[1]
                );
            });

        return jobposts;
    }
};
const actions = {
    async fetchJobPosts({ commit }) {
        const response = await axios.get(url);
        commit("SET_JOBPOST", response.data);
    },
    async addJobPost({ commit }, jobpost) {
        const response = await axios.post(create_url, jobpost);
        commit("ADD_JOBPOST", response.data);
    },
    async deleteJobPost(context, id) {
        await axios.delete(`${url}${id}`);
        context.commit("DELETE_JOBPOST", id);
    },
    async updateJobPost({ commit }, updJobpost) {
        const response = await axios.put(`${url}${updJobpost.id}`, updJobpost);
        commit("UPDATE_JOBPOST", response.data);
    }
};

const mutations = {
    SET_JOBPOST: (state, jobposts) => (state.jobposts = jobposts),

    ADD_JOBPOST: (state, jobpost) => {
        // jobpost.id = state.jobposts.length + 1;
        // console.log(jobpost);
        state.jobposts.unshift(jobpost);
    },
    DELETE_JOBPOST: (state, id) => {
        const index = state.jobposts.findIndex((jobpost) => jobpost.id == id);
        state.jobposts.splice(index, 1);
    },
    UPDATE_JOBPOST: (state, updJobpost) => {
        /*  console.log(updJobpost);
        const index = state.jobposts
            .map((updJobpost) => updJobpost.id)
            .indexOf(updJobpost.id);
        // console.log(index);
        state.jobposts.splice(index, 1, updJobpost); */
        const index = state.jobposts.findIndex(
            (jobpost) => jobpost.id === updJobpost.id
        );
        if (index !== -1) {
            state.jobposts.splice(index, 1, updJobpost);
        }
    }
};
export default {
    state,
    getters,
    actions,
    mutations
};
