const state = {
    students: [
        {
            stuID: 1,
            name: "Andy Woo",
            password: "123",
            dob: new Date(1998, 1, 1),
            image:
                "file:///file:///C:/Users/MOK/Desktop/code/vocatio/src/assets/picture.svg",
            number: "+65-91234567",
            email: "andywoo@email.com",
            linkedIn: "linkedin.com/AndyWoo",
            resume: "resume.pdf",
            faculty: "FASS",
            degree: "Bachelor in Sociology",
            year: 2,
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
            dob: new Date(2000, 1, 1),
            image:
                "file:///file:///C:/Users/MOK/Desktop/code/vocatio/src/assets/picture.svg",
            number: "+65-91234567",
            email: "bentan@email.com",
            linkedIn: "linkedin.com/BenTan",
            resume: "resume.pdf",
            faculty: "Computing",
            degree: "Bachelor in Information Systems",
            year: 1,
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
            dob: new Date(1999, 1, 1),
            image:
                "file:///file:///C:/Users/MOK/Desktop/code/vocatio/src/assets/picture.svg",
            number: "+65-91234567",
            email: "clairelee@email.com",
            linkedIn: "linkedin.com/ClaireLee",
            resume: "resume.pdf",
            faculty: "Business",
            degree: "Bachelor in Business Adminstration",
            year: 4,
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
            dob: new Date(1997, 1, 1),
            image:
                "file:///file:///C:/Users/MOK/Desktop/code/vocatio/src/assets/picture.svg",
            number: "+65-91234567",
            email: "davidho@email.com",
            linkedIn: "linkedin.com/DavidHo",
            resume: "resume.pdf",
            faculty: "Medicine",
            degree: "Bachelor in Medicine",
            year: 2,
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
            dob: new Date(2000, 1, 1),
            image:
                "file:///file:///C:/Users/MOK/Desktop/code/vocatio/src/assets/picture.svg",
            number: "+65-91234567",
            email: "elainelow@email.com",
            linkedIn: "linkedin.com/ElaineLow",
            resume: "resume.pdf",
            faculty: "Design and Environment",
            degree: "Bachelor in Industrial Design",
            year: 3,
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
            dob: new Date(1999, 1, 1),
            image:
                "file:///file:///C:/Users/MOK/Desktop/code/vocatio/src/assets/picture.svg",
            number: "+65-91234567",
            email: "nurul@email.com",
            linkedIn: "linkedin.com/NurulSyafiq",
            resume: "resume.pdf",
            faculty: "FASS",
            degree: "Bachelor in Asian Studies",
            year: 3,
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
