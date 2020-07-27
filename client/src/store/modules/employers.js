import axios from "axios";

const url = "http://localhost:8081/api/employer/";

const namespaced = true;

const state = {
    employers: [
        /* {
            id: 1,
            companyName: "ABC Co",
            coRegNo: 1,
            coNo: 61234567,
            coEmail: "company@email.com",
            coAdd: "123 Singapore Road",
            coCountry: "Singapore",
            coLogo: "picture.svg",
            coDesc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus at urna at hendrerit. Aliquam lobortis nunc sem, et iaculis quam dapibus ac. Sed id risus porttitor, ultricies tellus euismod, maximus mauris. Praesent ultrices in magna vitae porta. Nullam feugiat, dolor et faucibus iaculis, turpis massa fermentum arcu, eu ultricies dui nisl et erat. Nunc vulputate, odio iaculis ultrices scelerisque, odio mauris accumsan mauris, quis accumsan eros eros sit amet erat. Etiam vitae enim sit amet purus lobortis molestie accumsan sed sem.",
            name: "John Doe",
            salutation: "Mr.",
            password: "123",
            avatar: "selfmade/avatar.svg",

            logo: "picture.svg",
            contactNo: "+65-91234567",
            email: "johndoe@email.com",
            website: "www.abco.com",
            linkedin: "linkedin.com/JohnDoe",
            settings: {
                email: {
                    newStu: true,
                    maxApp: true,
                    newsletter: false
                },
                subscription: true
            }
        },
        {
            id: 2,
            companyName: "NUS (Architecture)",
            coRegNo: 1,
            coNo: 61234567,
            coEmail: "company@email.com",
            coAdd: "123 Singapore Road",
            coCountry: "Singapore",
            coLogo: "picture.svg",
            coDesc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus at urna at hendrerit. Aliquam lobortis nunc sem, et iaculis quam dapibus ac. Sed id risus porttitor, ultricies tellus euismod, maximus mauris. Praesent ultrices in magna vitae porta. Nullam feugiat, dolor et faucibus iaculis, turpis massa fermentum arcu, eu ultricies dui nisl et erat. Nunc vulputate, odio iaculis ultrices scelerisque, odio mauris accumsan mauris, quis accumsan eros eros sit amet erat. Etiam vitae enim sit amet purus lobortis molestie accumsan sed sem.",
            name: "Jane Smith",
            salutation: "Ms.",
            password: "123",
            avatar: "selfmade/avatar.svg",

            logo: "picture.svg",
            contactNo: "+65-61234127",
            email: "janesmith@u.nus.edu",
            website: "https://www.sde.nus.edu.sg/",
            linkedin: null,
            settings: {
                email: {
                    newStu: true,
                    maxApp: true,
                    newsletter: false
                },
                subscription: false
            }
        },
        {
            id: 3,
            companyName: "NUS",
            coRegNo: 1,
            coNo: 61234567,
            coEmail: "company@email.com",
            coAdd: "123 Singapore Road",
            coCountry: "Singapore",
            coLogo: "picture.svg",
            coDesc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus at urna at hendrerit. Aliquam lobortis nunc sem, et iaculis quam dapibus ac. Sed id risus porttitor, ultricies tellus euismod, maximus mauris. Praesent ultrices in magna vitae porta. Nullam feugiat, dolor et faucibus iaculis, turpis massa fermentum arcu, eu ultricies dui nisl et erat. Nunc vulputate, odio iaculis ultrices scelerisque, odio mauris accumsan mauris, quis accumsan eros eros sit amet erat. Etiam vitae enim sit amet purus lobortis molestie accumsan sed sem.",
            name: "Amy Tan",
            salutation: "Mrs.",
            password: "123",
            avatar: "selfmade/avatar.svg",

            contactNo: "+65-64434567",
            email: "amytan@u.nus.edu",
            website: "http://www.nus.edu.sg/",
            linkedin: null,
            settings: {
                email: {
                    newStu: true,
                    maxApp: true,
                    newsletter: true
                },
                subscription: true
            }
        },
        {
            id: 4,
            companyName: "NUS-FASS (History)",
            coRegNo: 1,
            coNo: 61234567,
            coEmail: "company@email.com",
            coAdd: "123 Singapore Road",
            coCountry: "Singapore",
            coLogo: "picture.svg",
            coDesc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus at urna at hendrerit. Aliquam lobortis nunc sem, et iaculis quam dapibus ac. Sed id risus porttitor, ultricies tellus euismod, maximus mauris. Praesent ultrices in magna vitae porta. Nullam feugiat, dolor et faucibus iaculis, turpis massa fermentum arcu, eu ultricies dui nisl et erat. Nunc vulputate, odio iaculis ultrices scelerisque, odio mauris accumsan mauris, quis accumsan eros eros sit amet erat. Etiam vitae enim sit amet purus lobortis molestie accumsan sed sem.",
            name: "Jason Mak",
            salutation: "Prof.",
            password: "123",
            avatar: "selfmade/avatar.svg",

            contactNo: "+65-61244367",
            email: "jasonmak@u.nus.edu",
            website: "https://www.fas.nus.edu.sg/",
            linkedin: null,
            settings: {
                email: {
                    newStu: true,
                    maxApp: false,
                    newsletter: false
                },
                subscription: false
            }
        },
        {
            id: 5,
            companyName: "XYZ Co",
            coRegNo: 1,
            coNo: 61234567,
            coEmail: "company@email.com",
            coAdd: "123 Singapore Road",
            coCountry: "Singapore",
            coLogo: "picture.svg",
            coDesc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus at urna at hendrerit. Aliquam lobortis nunc sem, et iaculis quam dapibus ac. Sed id risus porttitor, ultricies tellus euismod, maximus mauris. Praesent ultrices in magna vitae porta. Nullam feugiat, dolor et faucibus iaculis, turpis massa fermentum arcu, eu ultricies dui nisl et erat. Nunc vulputate, odio iaculis ultrices scelerisque, odio mauris accumsan mauris, quis accumsan eros eros sit amet erat. Etiam vitae enim sit amet purus lobortis molestie accumsan sed sem.",
            name: "Bob Chan",
            salutation: "Mr.",
            password: "123",
            avatar: "selfmade/avatar.svg",
            contactNo: "+65-91244367",
            email: "bobchan@email.com",
            website: "www.xyzCo.com",
            linkedin: "linkedin.com/BobChan",
            settings: {
                email: {
                    newStu: false,
                    maxApp: true,
                    newsletter: false
                },
                subscription: true
            }
        } */
    ]
};
const getters = {
    allEmployers: (state) => state.employers,
    getEmpById: (state) => (id) => {
        return state.employers.find((employer) => employer.id == id);
    }
};

const actions = {
    async fetchEmployers({ commit }) {
        const response = await axios.get(url);
        commit("SET_EMPLOYERS", response.data);
    },
    addEmployer({ commit }, user) {
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
                        { token, user, currentUser: "employer" },
                        { root: true }
                    );
                    commit("ADD_EMPLOYER", res.data);
                    resolve(res);
                })
                .catch((err) => {
                    commit("auth_error", { root: true });
                    localStorage.removeItem("token");
                    reject(err);
                });
        });
        /* const response = await axios.post(url, employer);
        commit("ADD_EMPLOYER", response.data); */
    },
    async deleteEmployer({ commit }, id) {
        await axios.delete(`${url}${id}`);
        commit("DELETE_EMPLOYER", id);
    },
    async updateEmployer({ commit }, updEmp) {
        const response = await axios.put(`${url}${updEmp.id}`, updEmp);
        commit("UPDATE_EMPLOYER", response.data);
    }
};

const mutations = {
    SET_EMPLOYERS: (state, employers) => {
        state.employers = employers;
    },

    ADD_EMPLOYER: (state, employer) => {
        state.employers.unshift(employer);
    },
    DELETE_EMPLOYER: (state, id) => {
        const index = state.employers.findIndex(
            (employer) => employer.id == id
        );
        state.employers.splice(index, 1);
    },
    UPDATE_EMPLOYER: (state, updEmp) => {
        const index = state.employers.findIndex(
            (employer) => employer.id === updEmp.id
        );
        if (index !== -1) {
            state.employers.splice(index, 1, updEmp);
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
