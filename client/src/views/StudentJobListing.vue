<template>
    <div>
        <button id="back">Back to jobs</button>
        <div class="job-container">
            <h1>{{ job.title }}</h1>
            <p>{{ job.employer }}</p>
            <p></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "StudentJobListing",
    data() {
        return {
            job: this.$store.getters.getJobById(this.$route.params.jobId)
        };
    }
};
</script>

<style>
</style>