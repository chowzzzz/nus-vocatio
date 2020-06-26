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
        const applicants = this.$store.getters.getAppByJobId(jobID);
        let students = [];
        applicants.forEach(applicant => {
            let student = this.$store.getters.getStuById(applicant.stuID);
            student.status = applicant.status;
            students.push(student);
        });
        return {
            posts: students,
            path: `application/${jobID}`,
            home: false
        };
    },
    beforeCreate() {
        document.body.className = "bg";
    }
};
</script>

<style>
</style>