<template>
    <div class="container">
        <backBtn title="post"></backBtn>
        <employerListView
            title="Applicants"
            v-bind:allPosts="posts"
            v-bind:path="path"
            v-bind:home="home"
            v-if="posts"
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
        EmployerListView,
    },
    data() {
        const jobID = this.$route.params.jobID;
        return {
            jobID: jobID,
            path: `applicants/${jobID}`,
            home: false,
        };
    },
    computed: {
        posts() {
            const applicants = this.$store.getters.getAppByJobId(this.jobID);
            let students = [];
            applicants.forEach((applicant) => {
                let student = this.$store.getters.getStuById(
                    applicant.studentId
                );
                student.status = applicant.status;
                student.applyDate = applicant.createdAt;
                student.appID = applicant.id;
                students.push(student);
            });
            return students;
        },
    },
};
</script>

<style>
</style>