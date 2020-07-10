const state = {
    employers: [
        {
            empID: 1,
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
            empID: 2,
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
            empID: 3,
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
            empID: 4,
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
            empID: 5,
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
