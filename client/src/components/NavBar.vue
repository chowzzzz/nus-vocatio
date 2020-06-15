<template>
    <div>
        <div class="nav-container">
            <div id="backBtn" class="mobile-show" @click="$router.go(-1)">
                <img src="../assets/left.svg" alt="back" />
            </div>
            <div id="logoSearch" v-bind:class="{ 'custom-logo-search' : $route.path != '/' }">
                <router-link to="/">
                    <img id="navLogo" alt="NUSVocatio logo" src="../assets/logo2.svg" />
                </router-link>
                <img id="navLogoMobile" alt="NUSVocatio logo" src="../assets/logo3.svg" />
            </div>

            <nav>
                <span class="mobile-show" @click="toggle">
                    <i class="fas fa-bars"></i>
                </span>

                <ul class="mobile-hide">
                    <li class="mobile-nav">
                        <router-link to="/profile">
                            <img src="../assets/selfmade/user.svg" alt="User" />
                        </router-link>
                    </li>
                    <li class="mobile-nav">
                        <router-link to="/">
                            <img src="../assets/selfmade/noti.svg" alt="Notification" />
                        </router-link>
                    </li>
                    <li class="mobile-nav">
                        <router-link to="/settings">
                            <img src="../assets/selfmade/settings.svg" alt="Settings" />
                        </router-link>
                    </li>
                </ul>

                <ul class="mobile-show" :style="{ display: toggleDisplay }">
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
                        <router-link to="/">
                            <span>Notifications</span>
                        </router-link>
                    </li>
                    <li class="mobile-nav">
                        <router-link to="/settings">
                            <span id="settings">Settings</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "NavBar",
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
    float: right;
    padding: 0.5em;
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

.mobile-show,
#navLogoMobile {
    display: none;
}

@media screen and (max-width: 570px) {
    .nav-container {
        display: flex;
        justify-content: space-between;
        padding: 0 1.5em;
        align-items: center;
    }

    .mobile-show {
        display: inherit;
    }

    #backBtn img {
        width: 15px;
        height: 15px;
    }

    .mobile-hide {
        display: none;
    }

    .fa-bars {
        color: #000;
        width: 30px;
        cursor: pointer;
    }

    nav ul {
        position: fixed;
        text-align: right;
        background: rgba(0, 0, 0, 0.842);
        top: 0;
        right: 0;
        width: 35%;
    }

    .mobile-nav {
        background: rgba(71, 71, 71, 0.842);
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
        display: inherit;
        width: 40px;
        margin: 0.5em 0;
    }
    #navLogo {
        display: none;
    }

    nav ul {
        width: 45%;
    }
}
</style>