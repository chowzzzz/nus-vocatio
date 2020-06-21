<template>
    <div>
        <button id="backBtn" @click="$router.go(-1)">
            <img src="../../assets/left.svg" alt="back button" /> Back to jobs
        </button>
        <jobListing />
    </div>
</template>

<script>
import JobListing from "../../components/JobListing.vue";

export default {
    name: "StudentJobListing",
    components: {
        jobListing: JobListing
    }
};
</script>


<style scoped>
#backBtn {
    margin: 2em 3em 0;
    border: none;
    padding: 0.5em 1em;
    border-radius: 25px;
    outline: none;
    background: #d0e1eb;
    color: #2b839e;
    transition-duration: 0.4s;
    cursor: pointer;
}

#backBtn:hover {
    background-color: #47a1bd;
    color: #fff;
}

#backBtn img {
    padding-top: 3px;
    width: 10px;
    border: none;
}

@media screen and (max-width: 570px) {
    #backBtn {
        display: none;
    }
}
</style>