<template>
    <div>
        <div class="accounts">
            <ul v-if="student">
                <li
                    v-for="account in accounts"
                    :key="account.stuID"
                    @click="navigateTo({ name: 'admin-stu-acc-indiv', params: { id: account.stuID }})"
                >
                    <div class="account-img">
                        <img src="../assets/selfmade/picture.svg" alt="account image" />
                    </div>
                    <div class="account-title">
                        <h3>{{ account.name }}</h3>
                        <p>{{ account.studentID }}</p>
                    </div>
                    <div class="click">
                        <p>
                            <img src="../assets/left.svg" alt="click" />
                        </p>
                    </div>
                </li>
            </ul>
            <ul v-else>
                <li
                    v-for="account in accounts"
                    :key="account.empID"
                    @click="navigateTo({ name: 'admin-emp-acc-indiv', params: { id: account.empID }})"
                >
                    <div class="account-img">
                        <img src="../assets/selfmade/picture.svg" alt="account image" />
                    </div>
                    <div class="account-title">
                        <h3>{{ account.name }}</h3>
                        <p v-if="student">{{ account.studentID }}</p>
                        <p v-else>{{ account.companyName }}</p>
                    </div>
                    <div class="click">
                        <p>
                            <img src="../assets/left.svg" alt="click" />
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <ScrollToTopBtn />
    </div>
</template>

<script>
import ScrollToTopBtn from "./ScrollToTopBtn.vue";

export default {
    name: "AdminListView",
    components: {
        ScrollToTopBtn
    },
    props: ["accounts", "student"],
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        }
    }
};
</script>

<style scoped>
.accounts {
    padding: 0 4em 3em;
}

li {
    list-style-type: none;
    margin-top: 1em;
    background: #fff;
    padding: 1.2em 1.8em;
    cursor: pointer;
    display: grid;
    grid-template-columns: 90px auto 75px;
    grid-template-rows: auto;
    grid-template-areas: "img title click";
    align-items: center;
    border-radius: 12px;
    z-index: 1;
}

.account-img {
    grid-area: img;
}

.account-img img {
    width: 65px;
    height: 65px;
    border: 1px solid #b8b8b8;
}

.account-title {
    margin-right: 0.5em;
    grid-area: title;
}

.click {
    grid-area: click;
    text-align: center;
}

.click p {
    text-align: right;
}

.click img {
    width: 22px;
    transform: rotate(180deg);
}

@media screen and (max-width: 700px) {
    .accounts {
        padding: 0 0 4em;
    }

    li {
        grid-template-columns: 90px auto 55px;
    }
}

@media screen and (max-width: 570px) {
    .account-img img {
        width: 60px;
        height: 60px;
    }

    li {
        grid-template-columns: 80px auto 55px;
    }
}
@media screen and (max-width: 450px) {
    ul {
        margin-top: 1em;
    }

    li {
        margin-top: 0;
        border-top: 0.5px #e6e6e6 solid;
        border-bottom: 0.5px #e6e6e6 solid;
    }

    .account-img img {
        width: 50px;
        height: 50px;
    }

    li {
        grid-template-columns: 65px auto 45px;
    }

    .post-title h3 {
        font-size: 15px;
    }
}
</style>