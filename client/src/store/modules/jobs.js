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
            salary: "$1000",
            date: new Date(),
            applicants: 21,
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
            salary: "$1000",
            date: new Date(),
            applicants: 15,
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
            salary: "$400",
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
            salary: "$100",
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
            salary: "$900",
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
            salary: "$1000",
            date: new Date(),
            applicants: 25,
            maxApplicants: 25,
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
            salary: "$1000",
            date: new Date(),
            applicants: 42,
            maxApplicants: 50,
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
            salary: "$1000",
            date: new Date(),
            applicants: 23,
            maxApplicants: 23,
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
const actions = {};
const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
};
