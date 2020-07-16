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
        height: 24px;
        font-size: 12px;
        padding-left: 0;
    }

    .fa-search {
        font-size: 14px;
        position: absolute;
        top: 40%;
        left: 5%;
    }

    .custom-search {
        width: 90%;
        font-size: 0.8em;
    }

    .custom-fa-search {
        font-size: 0.9em;
        top: -13%;
    }
}

@media screen and (max-width: 700px) {
    input {
        background: #e6e6e6;
        height: 28px;
        font-size: 12px;
        margin-top: 0.5em;
    }

    .fa-search {
        font-size: 13px;
        top: 36%;
        left: 4%;
    }

    .custom-search {
        font-size: 0.7em;
    }

    .custom-fa-search {
        font-size: 0.8em;
    }

    .custom-fa-search .fa-search {
        font-size: 11px;
        top: 42%;
    }
}

@media screen and (max-width: 570px) {
    .fa-search {
        top: 32%;
    }
}
@media screen and (max-width: 500px) {
    .fa-search {
        left: 6%;
        top: 35%;
    }
    .custom-search input {
        width: 80%;
        font-size: 0.7em;
        display: block;
        margin: 0 auto;
    }

    .custom-fa-search .fa-search {
        font-size: 0.8em;
        left: 12%;
    }
}
</style>