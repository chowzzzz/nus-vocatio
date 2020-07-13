<template>
    <div class="container">
        <backBtn title="post"></backBtn>
        <employerListView
            title="Applicants"
            v-bind:posts="posts"
            v-bind:path="path"
            v-bind:home="home"
        ></employerListView>
    </div>
</template>

<script>
import BackBtn from "../../components/BackBtn.vue";
import EmployerListView from "../../components/EmployerListView.vue";

export default {
    name: "EmployerApp",
    components: {
        BackBtn,
        EmployerListView
    },
    data() {
        const jobID = this.$route.params.jobID;
        const applicants = this.$store.getters.getAppByJobId(jobID);
        let students = [];
        applicants.forEach(applicant => {
            let student = this.$store.getters.getStuById(applicant.stuID);
            student.status = applicant.status;
            student.applyDate = applicant.applyDate;
            student.appID = applicant.appID;
            students.push(student);
        });
        return {
            posts: students,
            path: `applicants/${jobID}`,
            home: false
        };
    }
};
</script>

<style>
</style>