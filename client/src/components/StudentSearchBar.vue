<template>
    <div class="search-box">
        <input
            type="text"
            v-bind:class="{ 'custom-search' : $route.path == '/jobs' }"
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
</style>