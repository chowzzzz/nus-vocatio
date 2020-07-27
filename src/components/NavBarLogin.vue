<template>
    <div>
        <div class="nav-container">
            <div v-bind:class="{ 'custom-logo-search' : $route.path != '/' }">
                <hide-at :breakpoints="{small: 400, medium: 570}" breakpoint="small">
                    <router-link to="/">
                        <img id="navLogo" alt="NUSVocatio logo" src="../assets/logo2.svg" />
                    </router-link>
                </hide-at>

                <show-at breakpoint="small">
                    <img id="navLogoMobile" alt="NUSVocatio logo" src="../assets/logo3.svg" />
                </show-at>
            </div>

            <nav>
                <show-at :breakpoints="{small: 400, medium: 571}" breakpoint="mediumAndBelow">
                    <span @click="toggle">
                        <i class="fas fa-bars"></i>
                    </span>
                </show-at>

                <hide-at :breakpoints="{small: 400, medium: 571}" breakpoint="mediumAndBelow">
                    <ul>
                        <li class="redirect-buttons" v-if="studentShow">
                            <router-link to="/login/student">
                                <img src="../assets/selfmade/student.svg" alt="Student" />
                                <p>Student</p>
                            </router-link>
                        </li>
                        <li class="redirect-buttons" v-if="employerShow">
                            <router-link to="/login/employer">
                                <img src="../assets/selfmade/employer.svg" alt="Employer" />
                                <p>Employer</p>
                            </router-link>
                        </li>
                        <li class="redirect-buttons" v-if="adminShow">
                            <router-link to="/login/admin">
                                <img src="../assets/selfmade/user.svg" alt="Admin" />
                                <p>Admin</p>
                            </router-link>
                        </li>
                    </ul>
                </hide-at>

                <show-at :breakpoints="{small: 400, medium: 571}" breakpoint="mediumAndBelow">
                    <ul :style="{ display: toggleDisplay }">
                        <li>
                            <span class="close-btn" @click="toggle">
                                <i class="fas fa-times"></i>
                            </span>
                        </li>
                        <router-link to="/login/student">
                            <li class="mobile-nav" @click="toggle" v-if="studentShow">
                                <span>Student Login</span>
                            </li>
                        </router-link>
                        <router-link to="/login/employer">
                            <li class="mobile-nav" @click="toggle" v-if="employerShow">
                                <span>Employer Login</span>
                            </li>
                        </router-link>
                        <router-link to="/login/admin">
                            <li class="mobile-nav" @click="toggle" v-if="adminShow">
                                <span id="admin">Admin Login</span>
                            </li>
                        </router-link>
                    </ul>
                </show-at>
            </nav>
        </div>
        <router-view />
    </div>
</template>

<script>
import { showAt, hideAt } from "vue-breakpoints";

export default {
    name: "NavBarLogin",
    components: {
        hideAt,
        showAt,
    },
    data() {
        return {
            toggleDisplay: "none",
            studentShow: false,
            employerShow: false,
            adminShow: false,
        };
    },
    methods: {
        toggle() {
            this.toggleDisplay == "none"
                ? (this.toggleDisplay = "block")
                : (this.toggleDisplay = "none");
        },
    },
    watch: {
        $route: function () {
            if (
                this.$route.path === "/login/student" ||
                this.$route.path === "/register/student"
            ) {
                this.studentShow = false;
                this.employerShow = true;
                this.adminShow = true;
            } else if (
                this.$route.path === "/login/employer" ||
                this.$route.path === "/register/employer"
            ) {
                this.studentShow = true;
                this.employerShow = false;
                this.adminShow = true;
            } else if (this.$route.path === "/login/admin") {
                this.studentShow = true;
                this.employerShow = true;
                this.adminShow = false;
            } else {
                this.studentShow = false;
                this.employerShow = false;
                this.adminShow = true;
            }
        },
    },
};
</script>

<style scoped>
.nav-container {
    display: flex;
    justify-content: space-between;
    padding: 2em 4em;
}

#navLogo {
    float: left;
    width: 130px;
}

#logoSearch {
    display: flex;
    justify-content: start;
}

nav {
    display: flex;
    align-items: center;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0.2em 0 0;
}

nav ul li {
    display: inline-block;
    margin: 0 0.5em;
}

nav img {
    width: 30px;
}

.redirect-buttons {
    text-align: center;
}

a {
    color: #000;
    font-weight: 600;
    text-decoration: none;
}

@media screen and (max-width: 570px) {
    .nav-container {
        display: flex;
        justify-content: space-between;
        padding: 1em 2em;
        align-items: center;
    }

    .fa-bars {
        color: #000;
        width: 30px;
        cursor: pointer;
    }

    nav ul {
        position: fixed;
        text-align: right;
        background: rgb(43, 43, 43);
        top: 0;
        right: 0;
        width: 35%;
    }

    .mobile-nav {
        background: rgb(59, 59, 59);
        margin: 0;
    }

    nav ul li {
        display: block;
        padding: 0.5em;
    }

    #settings {
        padding-bottom: 0.5em;
    }

    nav ul li span {
        color: #fff;
    }

    nav ul li a {
        text-decoration: none;
    }

    .mobile-nav:hover {
        background: rgba(148, 147, 147, 0.842);
        color: #000;
    }

    .close-btn {
        cursor: pointer;
        color: #fff;
    }
}

@media screen and (max-width: 400px) {
    #navLogoMobile {
        width: 40px;
        margin: 0.5em 0;
    }

    nav ul {
        width: 45%;
    }
}
</style>
