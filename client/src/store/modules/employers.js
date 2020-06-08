const state = {
    employers: [
        {
            empID: 1,
            companyName: "ABC Co",
            name: "John Doe",
            password: "123",
            logo:
                "file:///file:///C:/Users/MOK/Desktop/code/vocatio/src/assets/picture.svg",
            number: "+65-61234567",
            email: "johndoe@email.com"
        },
        {
            empID: 2,
            companyName: "XYZ Co",
            name: "Jane Smith",
            password: "123",
            logo:
                "file:///file:///C:/Users/MOK/Desktop/code/vocatio/src/assets/picture.svg",
            number: "+65-61234127",
            email: "janesmith@email.com"
        },
        {
            empID: 1,
            companyName: "NewCo",
            name: "Amy Tan",
            password: "123",
            logo:
                "file:///file:///C:/Users/MOK/Desktop/code/vocatio/src/assets/picture.svg",
            number: "+65-64434567",
            email: "amytan@email.com"
        },
        {
            empID: 1,
            companyName: "Company XXX",
            name: "Bob Chan",
            password: "123",
            logo:
                "file:///file:///C:/Users/MOK/Desktop/code/vocatio/src/assets/picture.svg",
            number: "+65-61244367",
            email: "bobchan@email.com"
        }
    ]
};
const getters = {
    allEmployers: (state) => state.employers
};
const actions = {};
const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
};
