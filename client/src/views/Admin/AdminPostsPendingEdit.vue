<template>
    <div class="container">
        <employer-job-form title="Edit" v-bind:edit="true"></employer-job-form>
    </div>
</template>

<script>
import EmployerJobForm from "../../components/EmployerJobForm.vue";

export default {
    name: "AdminPostsPendingEdit",
    components: {
        EmployerJobForm
    }
};
</script>

<style>
</style>