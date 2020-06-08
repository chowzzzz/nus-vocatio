<template>
    <div>
        <div class="nav-container">
            <div id="logoSearch" v-bind:class="{ 'custom-logo-search' : $route.path != '/' }">
                <router-link to="/">
                    <img id="navLogo" alt="NUSVocatio logo" src="../assets/logo2.svg" />
                </router-link>
            </div>
            <nav>
                <ul>
                    <li>
                        <router-link to="/">
                            <img src="../assets/selfmade/user.svg" alt="User" />
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            <img src="../assets/selfmade/noti.svg" alt="Notification" />
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            <img src="../assets/selfmade/settings.svg" alt="Settings" />
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
    name: "NavBar"
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
</style>