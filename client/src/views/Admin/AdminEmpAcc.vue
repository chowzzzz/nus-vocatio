<template>
    <div class="container">
        <div class="title">
            <h2>Employer Accounts</h2>
        </div>

        <admin-list-view v-bind:accounts="employers" v-bind:employer="student"></admin-list-view>
    </div>
</template>

<script>
import AdminListView from "../../components/AdminListView.vue";

export default {
    name: "AdminEmpAcc",
    components: {
        AdminListView
    },
    data() {
        const employers = this.$store.getters.allEmployers;
        return {
            employers: employers,
            student: false
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