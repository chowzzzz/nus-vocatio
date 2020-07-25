<template>
    <div v-if="student && application">
        <back-btn title="applicants" />

        <div class="app-container">
            <div class="prevNext" id="prev">
                <router-link to="/">
                    <img src="../../assets/left.svg" alt="previous" />
                </router-link>
            </div>

            <div class="stu-container">
                <div class="stu-title">
                    <div class="stu-img">
                        <img src="../../assets/selfmade/avatar.svg" alt="avatar" />
                    </div>
                    <div class="stu-tags">
                        <p id="app-id">Application ID#{{ application.id }}</p>
                        <p
                            id="status"
                            v-bind:class="{
                            green: application.status === 1,
                            blue: application.status === 2,
                            grey: application.status === 3
                            }"
                        >{{ application.status | appStatus }}</p>
                    </div>
                    <div class="stu-name">
                        <h2>{{ student.stu_name }}</h2>
                        <p>Student ID: {{ student.stu_id }}</p>
                    </div>
                </div>

                <div class="stu-info">
                    <h4>Personal Information</h4>
                    <p>D.O.B.: {{ student.stu_dob | formatDate }}</p>
                    <p>Degree: {{ student.stu_degree }}</p>
                    <p>Current year: {{ student.stu_year }}</p>
                </div>

                <div class="stu-contact">
                    <h4>Contact Information</h4>
                    <p>Phone no.: {{ student.stu_mobile }}</p>
                    <p>Email: {{ student.stu_email }}</p>
                </div>

                <div class="links">
                    <h4>Resume and Links</h4>
                    <p>
                        Resume: file.pdf
                        <span class="uploadFileBtn">
                            <i class="fas fa-file-upload"></i>
                        </span>
                    </p>
                    <p>
                        LinkedIn Link:
                        <a href="www.linkedin.com">{{ student.stu_linkedIn }}</a>
                    </p>
                </div>

                <div class="btns">
                    <button id="acceptBtn" @click="accept">Accept</button>
                    <button @click="reject">Reject</button>
                </div>
            </div>

            <div class="prevNext" id="next">
                <router-link to="/">
                    <img src="../../assets/left.svg" alt="next" />
                </router-link>
            </div>

            <div class="prevNextBtns">
                <button id="prevBtn">Previous</button>
                <button>Next</button>
            </div>
        </div>
    </div>
</template>

<script>
import BackBtn from "../../components/BackBtn.vue";
import { mapActions } from "vuex";
export default {
    name: "EmployerIndivApp",
    components: {
        BackBtn,
    },
    data() {
        const appID = this.$route.query.appID;
        return {
            appID: appID,
        };
    },
    computed: {
        application() {
            const application = this.$store.getters.getAppById(this.appID);
            return application;
        },
        student() {
            const stuID = this.$route.params.stuID;
            const student = this.$store.getters.getStuById(stuID);
            return student;
        },
    },
    filters: {
        appStatus(value) {
            let status;
            switch (value) {
                case 1:
                    status = "ACCEPTED";
                    break;
                case 2:
                    status = "PENDING";
                    break;
                case 3:
                    status = "REJECTED";
                    break;
                default:
                    status = "";
                    break;
            }
            return status;
        },
    },
    methods: {
        ...mapActions(["updateAppStatus"]),
        accept() {
            let app = {
                appID: this.appID,
                status: "ACCEPTED",
            };
            this.$swal({
                title: "Accept",
                text: "Are you sure you want to accept?",
                buttons: {
                    no: {
                        value: "no",
                        text: "No",
                    },
                    yes: {
                        value: "yes",
                        text: "Yes",
                    },
                },
                icon: "info",
            }).then((value) => {
                switch (value) {
                    case "yes":
                        this.updateAppStatus(app)
                            .then(
                                this.$swal({
                                    text: "Student accepted",
                                    icon: "success",
                                })
                            )
                            .then(this.$router.go(-1));
                        break;
                }
            });
        },
        reject() {
            let app = {
                appID: this.appID,
                status: "REJECTED",
            };

            this.$swal({
                title: "Reject",
                text: "Are you sure you want to reject?",
                buttons: {
                    no: {
                        value: "no",
                        text: "No",
                    },
                    yes: {
                        value: "yes",
                        text: "Yes",
                    },
                },
                icon: "warning",
            }).then((value) => {
                switch (value) {
                    case "yes":
                        this.updateAppStatus(app)
                            .then(
                                this.$swal({
                                    text: "Student rejected",
                                    icon: "info",
                                })
                            )
                            .then(this.$router.go(-1));
                        break;
                }
            });
        },
    },
};
</script>

<style scoped>
.app-container {
    display: grid;
    grid-template-columns: auto auto auto;
    margin: 2em auto 3em;
}

.prevNext img {
    width: 15px;
    margin-top: 1em;
}

#prev {
    justify-self: end;
}

#next img {
    transform: rotate(180deg);
}

.prevNextBtns {
    display: none;
}

.stu-container {
    background: #f8fbff;
    padding: 2em 3em;
    margin: 0 2em;
    display: grid;
    grid-template-columns: auto 300px;
    grid-template-rows: 110px auto auto;
    grid-template-areas:
        "title title"
        "info links"
        "contact btns";
}

.stu-title {
    grid-area: title;
    display: grid;
    grid-template-columns: 130px auto;
    grid-template-rows: 40px auto;
    grid-template-areas:
        "img tags"
        "img name";
}

.stu-img {
    grid-area: img;
}

.stu-img img {
    width: 110px;
}

.stu-tags {
    grid-area: tags;
    display: flex;
    flex-wrap: wrap;
}

#app-id,
#status {
    margin-right: 0.8em;
    margin-bottom: 0.8em;
    border: none;
    padding: 0.2em 1em;
    border-radius: 25px;
    outline: none;
    transition-duration: 0.4s;
    cursor: pointer;
}

#app-id {
    background: #f2f2f2;
    color: #a3a3a3;
}

.grey {
    background: #a3a3a3;
    color: #eceff3;
}

.green,
#acceptBtn {
    background: #d6ead6;
    color: #5a845a;
}

.blue {
    background: #c1e2f5;
    color: #2b839e;
}

.stu-name {
    grid-area: name;
}

.stu-info {
    grid-area: info;
    padding: 1em 1em 1.5em 0;
}

.stu-contact {
    grid-area: contact;
    padding: 0 1em 1.5em 0;
}

h4 {
    margin-bottom: 0.3em;
}

.links {
    grid-area: links;
    padding: 1em 1em 1.5em 0;
}

.btns {
    display: flex;
    flex-wrap: wrap;
    grid-area: btns;
    justify-self: center;
    align-self: center;
}

.btns button,
.prevNextBtns button {
    margin: 0.5em 0;
    border: none;
    padding: 1em;
    border-radius: 12px;
    outline: none;
    background: #f2dadd;
    color: #af6675;
    transition-duration: 0.4s;
    cursor: pointer;
    font-weight: bold;
    width: 300px;
}

.btns button:hover {
    background-color: #d398a5;
    color: #fff;
}

#acceptBtn:hover {
    background: #78aa78;
    color: #fff;
}

@media screen and (max-width: 800px) {
    .prevNext {
        display: none;
    }

    .container {
        margin: 2em auto;
        display: block;
    }

    .stu-container {
        grid-template-columns: 50% 50%;
    }

    .prevNextBtns {
        display: flex;
        justify-content: space-between;
        margin: 1em 2em;
    }

    .prevNextBtns button {
        width: 150px;
        background: #eceef1;
        color: #a3a3a3;
    }

    .btns {
        width: 100%;
    }
}
@media screen and (max-width: 570px) {
    .stu-container {
        grid-template-columns: 100%;
        grid-template-rows: auto auto auto auto auto;
        grid-template-areas:
            "title"
            "info"
            "contact"
            "links"
            "btns";
    }

    .stu-title {
        grid-template-columns: auto;
        grid-template-rows: 130px auto auto;
        grid-template-areas:
            "img"
            "name"
            "tags";
        justify-self: center;
        text-align: center;
    }

    .stu-name {
        margin-bottom: 0.7em;
    }

    .stu-info,
    .stu-contact,
    .links {
        padding-bottom: 0.5em;
        padding-top: 1em;
    }

    .btns {
        justify-content: center;
        margin-top: 1em;
    }
}

@media screen and (max-width: 450px) {
    .stu-container {
        margin: 0;
        padding: 2em;
    }

    h2 {
        font-size: 18px;
    }

    h4 {
        font-size: 14px;
    }

    p,
    button {
        font-size: 12px;
    }

    .prevNextBtns button {
        width: 100px;
        font-size: 12px;
    }
}
</style>