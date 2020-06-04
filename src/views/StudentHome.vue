<template>
    <div>
        <!-- <navbar /> -->
        <div class="search-container">
            <section id="search">
                <h2 class="title">Find the best school job this summer!</h2>
                <form method="get">
                    <div class="search-box">
                        <input
                            type="text"
                            name="searchBar"
                            id="searchBar"
                            placeholder="Search for a job"
                            autocomplete="on"
                        />
                        <i class="fas fa-search"></i>
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

export default {
    name: "StudentHome",
    components: {
        // navbar: NavBar
        about: StudentAbout
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

.search-box {
    position: relative;
}

input {
    outline: none;
    font-size: 1em;
    width: 80%;
    height: 2em;
    background: #dce2e8;
    padding: 0.3em;
    text-indent: 2.5em;
    border-radius: 25px;
    border: 0;
    cursor: text;
}

.fa-search {
    position: absolute;
    color: #9ecde9;
    left: 3%;
    top: 0;
    bottom: 0;
    margin: auto auto auto 0;
}

.jobPic {
    grid-column: 2 / 3;
    grid-row: 1 / 4;
    width: 100%;
}
</style>