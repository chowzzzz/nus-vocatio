<template>
    <div>
        <button id="backBtn" @click="$router.go(-1)">
            <img src="../../assets/left.svg" alt="back button" /> Back to jobs
        </button>
        <div class="joblist-container">
            <jobListing />
            <employerContact user="student" />
        </div>
    </div>
</template>

<script>
import JobListing from "../../components/JobListing.vue";
import EmployerContact from "../../components/EmployerContactSideMenu.vue";

export default {
    name: "StudentJobListing",
    components: {
        jobListing: JobListing,
        employerContact: EmployerContact
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

.joblist-container {
    display: grid;
    grid-template-columns: 70% auto;
    grid-template-areas: "job contact";
    margin: 1.5em 3em;
}

@media screen and (max-width: 1150px) {
    .joblist-container {
        grid-template-columns: auto 320px;
    }
}

@media screen and (max-width: 950px) {
    .joblist-container {
        grid-template-columns: auto 300px;
    }
}

@media screen and (max-width: 800px) {
    .joblist-container {
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        grid-template-areas:
            "job"
            "contact";
    }
}

@media screen and (max-width: 570px) {
    #backBtn {
        display: none;
    }

    .joblist-container {
        margin: 1.5em 2em;
    }
}

@media screen and (max-width: 400px) {
    .joblist-container {
        margin: 1.5em;
    }
}
</style>