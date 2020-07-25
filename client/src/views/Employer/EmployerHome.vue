<template>
    <div class="container">
        <employerListView
            title="Postings"
            v-bind:allPosts="posts"
            v-bind:path="path"
            v-bind:home="home"
            v-if="posts"
        ></employerListView>
    </div>
</template>

<script>
import EmployerListView from "../../components/EmployerListView.vue";
// import { mapActions } from "vuex";

export default {
    name: "EmployerHome",
    components: {
        EmployerListView,
    },
    data() {
        // for now it will show employer 1's posts
        // after setting up authentication, change to search based on user
        return {
            path: "jobPosts",
            home: true,
        };
    },
    computed: {
        posts() {
            // change this
            let posts = this.$store.getters.getJobByEmpId(1);
            posts.forEach((post) => {
                const applicants = this.$store.getters.getNoOfAppByJobId(
                    post.id
                );
                const emp_logo = this.$store.getters.getEmpById(post.employerId)
                    .emp_logo;
                post.post_applicants = applicants;
                post.emp_logo = emp_logo;
            });
            return posts;
        },
    },
};
</script>

<style scoped>
</style>