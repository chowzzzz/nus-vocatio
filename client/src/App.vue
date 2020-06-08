<template>
    <div id="app">
        <navBar />
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
    name: "NusVocatio",
    components: {
        navBar: NavBar
    },
    data() {
        this.$route.path === "/"
            ? (this.showSearch = false)
            : (this.showSearch = true);
    }
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

h1,
h2,
h3,
h4,
ul {
    margin: 0;
    padding: 0;
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
</style>
