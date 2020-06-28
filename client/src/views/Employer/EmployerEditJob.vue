<template>
    <div class="container">
        <employer-job-form title="Edit" v-bind:edit="true"></employer-job-form>
    </div>
</template>

<script>
import EmployerJobForm from "../../components/EmployerJobForm.vue";

export default {
    name: "EmployerEditJob",
    components: {
        EmployerJobForm
    },
    beforeCreate() {
        document.body.className = "bg";
    },
    destroyed() {
        document.body.classList.remove("bg");
    }
};
</script>

<style scoped>
</style>