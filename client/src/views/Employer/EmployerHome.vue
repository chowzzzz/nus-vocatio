<template>
    <div>
        <employerListView
            title="Postings"
            v-bind:posts="posts"
            v-bind:name="name"
            v-bind:applicantNo="applicantNo"
        ></employerListView>
    </div>
</template>

<script>
import EmployerListView from "../../components/EmployerListView.vue";

export default {
    name: "EmployerHome",
    components: {
        EmployerListView
    },
    data() {
        // for now it will show employer 1's posts
        // after setting up authentication, change to search based on user
        const posts = this.$store.getters.getJobByEmpId(1);
        return {
            posts: posts,
            name: "post-details",
            applicantNo: true
        };
    }
};
</script>

<style scoped>
</style>