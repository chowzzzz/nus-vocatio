<template>
    <div class="container">
        <employerListView
            title="Postings"
            v-bind:allPosts="posts"
            v-bind:path="path"
            v-bind:home="home"
            v-if="posts"
        ></employerListView>
        <p v-if="errorMsg">{{ errorMsg }}</p>
    </div>
</template>

<script>
import EmployerListView from "../../components/EmployerListView.vue";
import { mapGetters } from "vuex";

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
            errorMsg: "",
        };
    },
    computed: {
        ...mapGetters(["getJobByEmpId", "getNoOfAppByJobId", "getCurrentUser"]),
        ...mapGetters("employers", ["getEmpById"]),
        posts() {
            let posts = this.getJobByEmpId(this.getCurrentUser.id);
            posts.forEach((post) => {
                const applicants = this.getNoOfAppByJobId(post.id);
                const emp_logo = this.getEmpById(post.employerId).emp_logo;
                post.post_applicants = applicants;
                post.emp_logo = emp_logo;
            });
            // console.log(posts);
            return posts;
        },
    },
    watch: {
        posts: function (loadedPosts) {
            if (loadedPosts.length == 0)
                this.errorMsg =
                    "You have no current posts, click the add button to add one!";
            else this.errorMsg = "";
        },
    },
};
</script>

<style scoped>
p {
    text-align: center;
}
</style>