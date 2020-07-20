<template>
    <div>
        <backBtn title="jobs"></backBtn>
        <div class="joblist-container">
            <jobListing />
            <employerContact user="student" />
        </div>
    </div>
</template>

<script>
import BackBtn from "../../components/BackBtn.vue";
import JobListing from "../../components/JobListing.vue";
import EmployerContact from "../../components/EmployerContactSideMenu.vue";
import { mapGetters, mapState, mapActions } from "vuex";

export default {
    name: "StudentJobListing",
    components: {
        backBtn: BackBtn,
        jobListing: JobListing,
        employerContact: EmployerContact
    }
};
</script>


<style scoped>
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