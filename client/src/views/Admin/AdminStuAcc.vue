<template>
    <div class="container">
        <div class="title">
            <h2>Student Accounts</h2>
            <router-link to="/viewEmployers">
                <button>Employer Accounts</button>
            </router-link>
        </div>

        <admin-list-view v-if="students" v-bind:accounts="students" v-bind:student="student"></admin-list-view>
    </div>
</template>

<script>
import AdminListView from "../../components/AdminListView.vue";

export default {
    name: "AdminStuAcc",
    components: {
        AdminListView,
    },
    data() {
        return {
            student: true,
        };
    },
    computed: {
        students() {
            const students = this.$store.getters.allStudents;
            return students;
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
    background: #bed8be;
    color: #5a845a;
    transition-duration: 0.4s;
    cursor: pointer;
    font-weight: bold;
    width: 100%;
    font-size: 12px;
}

button:hover {
    background: #648a64;
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