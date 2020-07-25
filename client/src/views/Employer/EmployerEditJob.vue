<template>
    <div class="container">
        <employer-job-form title="Edit" v-bind:edit="true" v-bind:pending="false"></employer-job-form>
    </div>
</template>

<script>
import EmployerJobForm from "../../components/EmployerJobForm.vue";

export default {
    name: "EmployerEditJob",
    components: {
        EmployerJobForm,
    },
};
</script>

<style scoped>
</style>