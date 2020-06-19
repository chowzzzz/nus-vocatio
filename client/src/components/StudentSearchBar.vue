<template>
    <div class="search-box">
        <input
            type="text"
            v-bind:class="{ 'custom-search' : $route.path == '/jobs'}"
            name="searchBar"
            id="searchBar"
            placeholder="Search for a job"
            autocomplete="on"
        />
        <span v-bind:class="{ 'custom-fa-search' : $route.path == '/jobs' }">
            <i class="fas fa-search"></i>
        </span>
    </div>
</template>

<script>
export default {
    name: "StudentSearchBar"
};
</script>

<style scoped>
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

.custom-search {
    background: #f2f2f2;
    height: 1.4em;
    font-size: 0.4em;
    width: 100%;
}

.custom-fa-search {
    font-size: 0.5em;
    position: absolute;
    top: 70%;
    left: 5%;
}

@media screen and (max-width: 950px) {
    input {
        width: 90%;
        font-size: 0.8em;
    }

    .fa-search {
        font-size: 0.9em;
    }
}

@media screen and (max-width: 700px) {
    input {
        font-size: 0.7em;
    }

    .fa-search {
        font-size: 0.8em;
    }

    .custom-search {
        background: #e6e6e6;
        height: 20px;
        font-size: 12px;
        width: 200px;
        margin-top: 0.5em;
    }

    .custom-fa-search {
        font-size: 16px;
        top: 60%;
    }
}

@media screen and (max-width: 500px) {
    input {
        width: 80%;
        font-size: 0.7em;
        display: block;
        margin: 0 auto;
    }

    .fa-search {
        font-size: 0.8em;
        left: 12%;
    }
}
</style>