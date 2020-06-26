const state = {
    students: [
        {
            stuID: 1,
            name: "Andy Woo",
            password: "123",
            image:
                "file:///file:///C:/Users/MOK/Desktop/code/vocatio/src/assets/picture.svg",
            number: "+65-91234567",
            email: "andywoo@email.com",
            linkedIn: "linkedin.com/AndyWoo",
            resume: "resume.pdf",
            faculty: "FASS",
            settings: {
                email: {
                    statusChange: true,
                    newJobs: true,
                    newsletter: false
                },
                subscription: true
            }
        },
        {
            stuID: 2,
            name: "Ben Tan",
            password: "123",
            image:
                "file:///file:///C:/Users/MOK/Desktop/code/vocatio/src/assets/picture.svg",
            number: "+65-91234567",
            email: "bentan@email.com",
            linkedIn: "linkedin.com/BenTan",
            resume: "resume.pdf",
            faculty: "Computing",
            settings: {
                email: {
                    statusChange: true,
                    newJobs: true,
                    newsletter: true
                },
                subscription: true
            }
        },
        {
            stuID: 3,
            name: "Claire Lee",
            password: "123",
            image:
                "file:///file:///C:/Users/MOK/Desktop/code/vocatio/src/assets/picture.svg",
            number: "+65-91234567",
            email: "clairelee@email.com",
            linkedIn: "linkedin.com/ClaireLee",
            resume: "resume.pdf",
            faculty: "Business",
            settings: {
                email: {
                    statusChange: true,
                    newJobs: true,
                    newsletter: false
                },
                subscription: false
            }
        },
        {
            stuID: 4,
            name: "David Ho",
            password: "123",
            image:
                "file:///file:///C:/Users/MOK/Desktop/code/vocatio/src/assets/picture.svg",
            number: "+65-91234567",
            email: "davidho@email.com",
            linkedIn: "linkedin.com/DavidHo",
            resume: "resume.pdf",
            faculty: "Medicine",
            settings: {
                email: {
                    statusChange: false,
                    newJobs: true,
                    newsletter: false
                },
                subscription: true
            }
        },
        {
            stuID: 5,
            name: "Elaine Low",
            password: "123",
            image:
                "file:///file:///C:/Users/MOK/Desktop/code/vocatio/src/assets/picture.svg",
            number: "+65-91234567",
            email: "elainelow@email.com",
            linkedIn: "linkedin.com/ElaineLow",
            resume: "resume.pdf",
            faculty: "Design and Environment",
            settings: {
                email: {
                    statusChange: true,
                    newJobs: false,
                    newsletter: true
                },
                subscription: true
            }
        },
        {
            stuID: 6,
            name: "Nurul Syafiq",
            password: "123",
            image:
                "file:///file:///C:/Users/MOK/Desktop/code/vocatio/src/assets/picture.svg",
            number: "+65-91234567",
            email: "nurul@email.com",
            linkedIn: "linkedin.com/NurulSyafiq",
            resume: "resume.pdf",
            faculty: "FASS",
            settings: {
                email: {
                    statusChange: true,
                    newJobs: false,
                    newsletter: false
                },
                subscription: false
            }
        }
    ]
};
const getters = {
    allStudents: (state) => state.students,
    getStuById: (state) => (id) => {
        return state.students.find((student) => student.stuID == id);
    },
    getAppByJobID: (state) => (jobID) => {
        return state.students.filter((student) =>
            student.applications.filter(
                (application) => application.jobID == jobID
            )
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
