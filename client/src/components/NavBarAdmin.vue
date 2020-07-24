<template>
    <div>
        <div class="nav-container">
            <show-at :breakpoints="{small: 400, medium: 570}" breakpoint="mediumAndBelow">
                <div id="backBtn" @click="$router.go(-1)">
                    <img src="../assets/left.svg" alt="back" />
                </div>
            </show-at>
            <div id="logoSearch" v-bind:class="{ 'custom-logo-search' : $route.path != '/' }">
                <hide-at breakpoint="small">
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
                        <li>
                            <router-link to="/viewStudents">Accounts</router-link>
                        </li>
                        <li>
                            <router-link to="/jobPosts">Posts</router-link>
                        </li>
                        <li>
                            <router-link to="/jobPostsPending">Pending posts</router-link>
                        </li>
                        <li>
                            <router-link to="/profile">
                                <img src="../assets/selfmade/user.svg" alt="User" />
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/settings">
                                <img src="../assets/selfmade/settings.svg" alt="Settings" />
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/logout">
                                <img src="../assets/selfmade/logout.png" alt="logout" />
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
                        <router-link to="/">
                            <li class="mobile-nav" @click="toggle">
                                <span>Home</span>
                            </li>
                        </router-link>
                        <router-link to="/viewStudents">
                            <li class="mobile-nav" @click="toggle">
                                <span>Accounts</span>
                            </li>
                        </router-link>
                        <router-link to="/jobPosts">
                            <li class="mobile-nav" @click="toggle">
                                <span>Posts</span>
                            </li>
                        </router-link>
                        <router-link to="/jobPostsPending">
                            <li class="mobile-nav" @click="toggle">
                                <span>Pending posts</span>
                            </li>
                        </router-link>
                        <router-link to="/profile">
                            <li class="mobile-nav" @click="toggle">
                                <span>User</span>
                            </li>
                        </router-link>
                        <router-link to="/settings">
                            <li class="mobile-nav" @click="toggle">
                                <span id="settings">Settings</span>
                            </li>
                        </router-link>
                        <router-link to="/logout">
                            <li class="mobile-nav" @click="toggle">
                                <span id="logout">Logout</span>
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
    name: "NavBarAdmin",
    components: {
        hideAt,
        showAt,
    },
    data() {
        return {
            toggleDisplay: "none",
        };
    },
    methods: {
        toggle() {
            this.toggleDisplay == "none"
                ? (this.toggleDisplay = "block")
                : (this.toggleDisplay = "none");
        },
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap");
.nav-container {
    background: #eceff3;
    display: flex;
    justify-content: space-between;
    padding: 0.1em 2.3em;
    height: 50px;
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
    display: flex;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0.2em 0 0;
}

nav ul li {
    display: inline-block;
    margin: 0 0.3em;
}

nav img {
    width: 30px;
}

a {
    text-decoration: none;
    color: #636363;
    font-size: 13px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    transition-duration: 0.4s;
    margin-right: 0.5em;
}

a:hover {
    color: #000;
}

@media screen and (max-width: 570px) {
    .nav-container {
        display: flex;
        justify-content: space-between;
        padding: 0 1.5em;
        align-items: center;
    }

    #backBtn img {
        width: 15px;
        height: 15px;
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