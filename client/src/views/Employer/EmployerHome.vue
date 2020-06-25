<template>
    <div>
        <employerListView v-bind:posts="posts" v-bind:name="name" v-bind:applicantNo="applicantNo"></employerListView>
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