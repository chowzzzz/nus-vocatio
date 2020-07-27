<template>
    <div>
        <div class="search-container">
            <section id="search">
                <h2 class="title">Find the best school job this summer!</h2>
                <form @submit.prevent>
                    <student-search-bar @searching="search" />
                    <div class="btns">
                        <button class="btn" id="searchBtn">Search</button>
                        <router-link to="/jobPosts">
                            <button class="btn" id="allBtn">Look at all jobs</button>
                        </router-link>
                    </div>
                </form>
            </section>
            <img src="../../assets/job.jpg" alt="searching for jobs" class="jobPic" />
        </div>
        <student-about />
    </div>
</template>

<script>
// import NavBar from "../components/NavBar.vue";
import StudentAbout from "../../components/StudentAbout.vue";
import StudentSearchBar from "../../components/StudentSearchBar.vue";

export default {
    name: "StudentHome",
    components: {
        StudentAbout,
        StudentSearchBar,
    },
    methods: {
        search(searchKeyword) {
            // console.log(searchKeyword);
            this.$router.push({
                path: "/jobPosts",
                query: { search: searchKeyword },
            });
        },
    },
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

@media screen and (max-width: 950px) {
    .search-container {
        margin: 3em 6em;
    }

    h2 {
        font-size: 1.4em;
    }

    button {
        font-size: 0.8em;
    }
}

@media screen and (max-width: 700px) {
    .search-container {
        margin: 3em;
    }

    h2 {
        font-size: 1.2em;
    }

    button {
        font-size: 0.7em;
    }
}

@media screen and (max-width: 500px) {
    .search-container {
        grid-template-rows: auto auto;
        grid-template-columns: auto;
        grid-template-areas:
            "img"
            "search";
        justify-items: center;
        margin: 1em 3em 2em;
    }

    h2 {
        text-align: center;
    }

    #search {
        grid-area: search;
    }

    .jobPic {
        grid-area: img;
        width: 80%;
    }

    .btns {
        text-align: center;
    }
}
</style>