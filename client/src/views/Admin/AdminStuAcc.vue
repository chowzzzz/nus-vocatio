<template>
    <div class="container">
        <div class="title">
            <h2>Student Accounts</h2>
        </div>

        <admin-list-view v-bind:accounts="students" v-bind:student="student"></admin-list-view>
    </div>
</template>

<script>
import AdminListView from "../../components/AdminListView.vue";

export default {
    name: "AdminStuAcc",
    components: {
        AdminListView
    },
    data() {
        const students = this.$store.getters.allStudents;
        return {
            students: students,
            student: true
        };
    }
};
</script>

<style scoped>
.title {
    padding: 1em 2.5em 0;
}

.title h2 {
    font-size: 24px;
}

@media screen and (max-width: 700px) {
    .title {
        padding: 1em 1em 0;
    }

    .title h2 {
        font-size: 20px;
    }
}
</style>