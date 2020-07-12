<template>
    <div class="search-box">
        <input
            type="text"
            v-bind:class="{ 'custom-search' : $route.path == '/'}"
            name="searchBar"
            id="searchBar"
            placeholder="Search for a job"
            autocomplete="on"
        />
        <span v-bind:class="{ 'custom-fa-search' : $route.path == '/' }">
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
    padding: 0.3em;
    text-indent: 2.5em;
    border-radius: 25px;
    border: 0;
    cursor: text;
    background: #f2f2f2;
    height: 25px;
    font-size: 13px;
    width: 100%;
}

.fa-search {
    font-size: 14px;
    position: absolute;
    top: 38%;
    left: 5%;
    color: #9ecde9;
}

.custom-search {
    background: #dce2e8;
    height: 2em;
    font-size: 1em;
    width: 80%;
}

.custom-fa-search {
    position: absolute;
    left: 3%;
    top: -3%;
    bottom: 0;
    margin: auto auto auto 0;
}

@media screen and (max-width: 950px) {
    input {
        width: 90%;
        font-size: 0.8em;
    }

    .custom-search {
        height: 24px;
        font-size: 12px;
        padding-left: 0;
    }

    .custom-fa-search {
        font-size: 14px;
        position: absolute;
        top: 55%;
        left: 5%;
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