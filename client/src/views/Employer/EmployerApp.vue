<template>
    <div>
        <employerListView
            title="Applicants"
            v-bind:posts="posts"
            v-bind:path="path"
            v-bind:home="home"
        ></employerListView>
    </div>
</template>

<script>
import EmployerListView from "../../components/EmployerListView.vue";

export default {
    name: "EmployerApp",
    components: {
        EmployerListView
    },
    data() {
        const jobID = this.$route.params.jobID;
        const applicants = this.$store.getters.getAppByJobID(jobID);
        return {
            posts: applicants,
            path: `application/${jobID}`,
            home: false
        };
    }
};
</script>

<style>
</style>