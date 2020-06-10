const state = {
    jobs: [
        {
            jobID: 1,
            title: "Web Developer Intern",
            employer: "Company 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            requirements: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Maecenas porta augue sed odio commodo, eu gravida elit"
            ],
            type: "Internship",
            faculty: "Computing",
            salary: "$1000",
            date: new Date()
        },
        {
            jobID: 2,
            title: "Mobile Developer Intern",
            employer: "Company 1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            requirements: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Maecenas porta augue sed odio commodo, eu gravida elit"
            ],
            type: "Internship",
            faculty: "Computing",
            salary: "$1000",
            date: new Date()
        },
        {
            jobID: 3,
            title:
                "Study on Impact of the Built Environment on Community Bonding",
            employer: "NUS-SDE (Architecture)",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            requirements: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Maecenas porta augue sed odio commodo, eu gravida elit"
            ],
            type: "Research Study",
            faculty: "Design and Environment",
            salary: "$400",
            date: new Date()
        },
        {
            jobID: 4,
            title: "Survey on school environment satisfaction",
            employer: "NUS",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            requirements: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Maecenas porta augue sed odio commodo, eu gravida elit"
            ],
            type: "Survey",
            faculty: null,
            salary: null,
            date: new Date()
        },
        {
            jobID: 5,
            title: "A New History of Southeast Asia",
            employer: "NUS-FASS (History)",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            requirements: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Maecenas porta augue sed odio commodo, eu gravida elit"
            ],
            type: "Research Study",
            faculty: "FASS",
            salary: "$100",
            date: new Date()
        },
        {
            jobID: 6,
            title: "Analyst Intern",
            employer: "Company 2",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dictum nulla, quis consequat tellus convallis sed.",
            requirements: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Maecenas porta augue sed odio commodo, eu gravida elit"
            ],
            type: "Internship",
            faculty: "Business",
            salary: "$900",
            date: new Date()
        }
    ]
};
const getters = {
    allJobs: (state) => state.jobs,
    getJobById: (state) => (id) => {
        return state.jobs.find((job) => job.jobID == id);
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
