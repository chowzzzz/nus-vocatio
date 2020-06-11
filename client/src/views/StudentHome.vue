<template>
    <div>
        <div class="search-container">
            <section id="search">
                <h2 class="title">Find the best school job this summer!</h2>
                <form method="get">
                    <search-bar />
                    <div class="btns">
                        <button class="btn" id="searchBtn">Search</button>
                        <router-link to="/jobs">
                            <button class="btn" id="allBtn">Look at all jobs</button>
                        </router-link>
                    </div>
                </form>
            </section>
            <img src="../assets/job.jpg" alt="searching for jobs" class="jobPic" />
        </div>
        <about />
    </div>
</template>

<script>
// import NavBar from "../components/NavBar.vue";
import StudentAbout from "../components/StudentAbout.vue";
import StudentSearchBar from "../components/StudentSearchBar.vue";

export default {
    name: "StudentHome",
    components: {
        // navbar: NavBar
        about: StudentAbout,
        searchBar: StudentSearchBar
    }
};
</script>

<style scoped>
.search-container {
    display: grid;
    grid-template-columns: 60% auto;
    justify-content: center;
    margin: 1em 6em;
}

#search {
    grid-column: 1 / 2;
    grid-row: 2 / 2;
    align-self: center;
}

h2 {
    margin: 0;
    padding-bottom: 0.5em;
}

.btns {
    margin-top: 0.8em;
}

.btn {
    border: none;
    padding: 0.8em 2em;
    border-radius: 12px;
    outline: none;
}

#searchBtn {
    margin-right: 1em;
    background: #f2dadd;
    color: #af6675;
    transition-duration: 0.4s;
}

#searchBtn:hover {
    background-color: #d398a5;
    color: #fff;
}

#allBtn {
    background: #fff;
    border: 2px solid #f2dadd;
    color: #af6675;
    transition-duration: 0.4s;
}

#allBtn:hover {
    border: 2px solid #d398a5;
    background-color: #d398a5;
    color: #fff;
}

.jobPic {
    grid-column: 2 / 3;
    grid-row: 1 / 4;
    width: 100%;
}
</style>