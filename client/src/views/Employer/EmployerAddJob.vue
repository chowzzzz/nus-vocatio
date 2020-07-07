<template>
    <div class="container">
        <employer-job-form title="Add New" v-bind:edit="false"></employer-job-form>
    </div>
</template>

<script>
import EmployerJobForm from "../../components/EmployerJobForm.vue";

export default {
    name: "EmployerAddJob",
    components: {
        EmployerJobForm
    }
};
</script>

<style scoped>
</style>