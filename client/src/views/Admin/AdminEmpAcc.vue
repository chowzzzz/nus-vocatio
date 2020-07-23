<template>
    <div class="container">
        <div class="title">
            <h2>Employer Accounts</h2>
            <router-link to="/viewStudents">
                <button>Student Accounts</button>
            </router-link>
        </div>

        <admin-list-view v-if="employers" v-bind:accounts="employers" v-bind:employer="student"></admin-list-view>
    </div>
</template>

<script>
import AdminListView from "../../components/AdminListView.vue";

export default {
    name: "AdminEmpAcc",
    components: {
        AdminListView,
    },
    data() {
        return {
            student: false,
        };
    },
    computed: {
        employers() {
            const employers = this.$store.getters.allEmployers;
            return employers;
        },
    },
};
</script>

<style scoped>
.title {
    padding: 1em 2.5em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title h2 {
    font-size: 24px;
}

button {
    margin: 0.5em;
    border: none;
    padding: 1em;
    border-radius: 12px;
    outline: none;
    background: #aeccdf;
    color: #2b839e;
    font-weight: bold;
    transition-duration: 0.4s;
    cursor: pointer;
    width: 100%;
    font-size: 12px;
}

button:hover {
    background: #317083;
    color: #fff;
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