<template>
    <div id="app">
        <div class="nav-container">
            <router-link to="/">
                <img id="navLogo" alt="NUSVocatio logo" src="./assets/logo2.svg" />
            </router-link>
            <nav>
                <ul>
                    <li>
                        <router-link to="/">
                            <img src="./assets/selfmade/user.svg" alt="User" />
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            <img src="./assets/selfmade/noti.svg" alt="Notification" />
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            <img src="./assets/selfmade/settings.svg" alt="Settings" />
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
    name: "NusVocatio"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap");
body {
    margin: 0;
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

p {
    font-size: 0.9em;
    line-height: 1.6em;
}

.title {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 1.8em;
}

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
