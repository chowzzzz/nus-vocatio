import axios from "axios";

const url = "https://nusvocatio-server.herokuapp.com/api/student/";

const namespaced = true;

const state = {
    students: [
        /* {
            id: 1,
            studentID: "A1234567B",
            name: "Andy Woo",
            password: "123",
            dob: new Date(1998, 1, 1),
            image: "selfmade/avatar.svg",
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
            id: 2,
            studentID: "A1234567B",
            name: "Ben Tan",
            password: "123",
            dob: new Date(2000, 1, 1),
            image: "selfmade/avatar.svg",
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
            id: 3,
            studentID: "A1234567B",
            name: "Claire Lee",
            password: "123",
            dob: new Date(1999, 1, 1),
            image: "selfmade/avatar.svg",
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
            id: 4,
            studentID: "A1234567B",
            name: "David Ho",
            password: "123",
            dob: new Date(1997, 1, 1),
            image: "selfmade/avatar.svg",
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
            id: 5,
            studentID: "A1234567B",
            name: "Elaine Low",
            password: "123",
            dob: new Date(2000, 1, 1),
            image: "selfmade/avatar.svg",
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
            id: 6,
            studentID: "A1234567B",
            name: "Nurul Syafiq",
            password: "123",
            dob: new Date(1999, 1, 1),
            image: "selfmade/avatar.svg",
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
        } */
    ]
};
const getters = {
    allStudents: (state) => state.students,
    getStuById: (state) => (id) => {
        return state.students.find((student) => student.id == id);
    },
    getStuByEmail: (state) => (email) => {
        return state.students.find((student) => student.stu_email == email);
    }
};
const actions = {
    async fetchStudents({ commit }) {
        const response = await axios.get(url);
        commit("SET_STUDENTS", response.data);
    },
    addStudent({ commit }, user) {
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
                        { token, user, currentUser: "student" },
                        { root: true }
                    );
                    commit("ADD_STUDENT", res.data);
                    resolve(res);
                })
                .catch((err) => {
                    commit("auth_error", { root: true });
                    localStorage.removeItem("token");
                    reject(err);
                });
        });
        /* const response = await axios.post(url, student);

        commit("ADD_STUDENT", response.data); */
    },
    async deleteStudent(context, id) {
        await axios.delete(`${url}${id}`);
        context.commit("DELETE_STUDENT", id);
    },
    async updateStudent({ commit }, updStu) {
        const response = await axios.put(`${url}${updStu.id}`, updStu);
        commit("UPDATE_STUDENT", response.data);
    },
    loginStudent({ commit }, user) {
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
                        { token, user, currentUser: "student" },
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
    SET_STUDENTS: (state, students) => {
        state.students = students;
    },

    ADD_STUDENT: (state, student) => {
        state.students.unshift(student);
    },
    DELETE_STUDENT: (state, id) => {
        const index = state.students.findIndex((student) => student.id == id);
        state.students.splice(index, 1);
    },
    UPDATE_STUDENT: (state, updStu) => {
        const index = state.students.findIndex(
            (student) => student.id === updStu.id
        );
        if (index !== -1) {
            state.students.splice(index, 1, updStu);
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
