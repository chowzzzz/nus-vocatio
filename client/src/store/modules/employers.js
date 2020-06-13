const state = {
    employers: [
        {
            empID: 1,
            companyName: "ABC Co",
            name: "John Doe",
            password: "123",
            avatar: "user.svg",
            logo: "picture.svg",
            contactNo: "+65-91234567",
            email: "johndoe@email.com",
            website: "www.abco.com",
            linkedin: "linkedin.com/JohnDoe"
        },
        {
            empID: 2,
            companyName: "NUS (Architecture)",
            name: "Jane Smith",
            password: "123",
            avatar: "user.svg",
            logo: "picture.svg",
            contactNo: "+65-61234127",
            email: "janesmith@u.nus.edu",
            website: "https://www.sde.nus.edu.sg/",
            linkedin: null
        },
        {
            empID: 3,
            companyName: "NUS",
            name: "Amy Tan",
            password: "123",
            avatar: "user.svg",
            logo: "picture.svg",
            contactNo: "+65-64434567",
            email: "amytan@u.nus.edu",
            website: "http://www.nus.edu.sg/",
            linkedin: null
        },
        {
            empID: 4,
            companyName: "NUS-FASS (History)",
            name: "Jason Mak",
            password: "123",
            avatar: "user.svg",
            logo: "picture.svg",
            contactNo: "+65-61244367",
            email: "jasonmak@u.nus.edu",
            website: "https://www.fas.nus.edu.sg/",
            linkedin: null
        },
        {
            empID: 5,
            companyName: "XYZ Co",
            name: "Bob Chan",
            password: "123",
            avatar: "user.svg",
            logo: "picture.svg",
            contactNo: "+65-91244367",
            email: "bobchan@email.com",
            website: "www.xyzCo.com",
            linkedin: "linkedin.com/BobChan"
        }
    ]
};
const getters = {
    allEmployers: (state) => state.employers,
    getEmpById: (state) => (id) => {
        return state.employers.find((employer) => employer.empID == id);
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
