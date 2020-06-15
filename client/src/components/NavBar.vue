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
                            <router-link to="/profile">
                                <img src="../assets/selfmade/user.svg" alt="User" />
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/notification">
                                <img src="../assets/selfmade/noti.svg" alt="Notification" />
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/settings">
                                <img src="../assets/selfmade/settings.svg" alt="Settings" />
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
                        <li class="mobile-nav">
                            <router-link to="/profile">
                                <span>User</span>
                            </router-link>
                        </li>
                        <li class="mobile-nav">
                            <router-link to="/notification">
                                <span>Notifications</span>
                            </router-link>
                        </li>
                        <li class="mobile-nav">
                            <router-link to="/settings">
                                <span id="settings">Settings</span>
                            </router-link>
                        </li>
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
    name: "NavBar",
    components: {
        hideAt,
        showAt
    },
    data() {
        return {
            toggleDisplay: "none"
        };
    },
    methods: {
        toggle() {
            this.toggleDisplay == "none"
                ? (this.toggleDisplay = "block")
                : (this.toggleDisplay = "none");
        }
    }
};
</script>

<style scoped>
.nav-container {
    background: #eceff3;
    display: flex;
    justify-content: space-between;
    padding: 0.1em 2.3em;
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
    margin: 0 0.3em;
}

nav img {
    width: 30px;
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