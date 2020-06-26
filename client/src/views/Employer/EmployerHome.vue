<template>
    <div>
        <employerListView
            title="Postings"
            v-bind:posts="posts"
            v-bind:path="path"
            v-bind:home="home"
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
            path: "applicants",
            home: true
        };
    },
    beforeCreate() {
        document.body.className = "bg";
    }
};
</script>

<style scoped>
</style>