<template>
    <div class="container">
        <employerListView
            title="Postings"
            v-bind:posts="posts"
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
            let posts = this.$store.getters.getJobByEmpId(1);
            posts.forEach((post) => {
                const applicants = this.$store.getters.getNoOfAppByJobId(
                    post.id
                );
                post.post_applicants = applicants;
            });

            return posts;
        },
    },
};
</script>

<style scoped>
</style>