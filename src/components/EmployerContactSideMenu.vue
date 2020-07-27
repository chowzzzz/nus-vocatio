<template>
    <div class="side" v-if="employer && job">
        <div class="employer-info">
            <div class="employer-title">
                <img :src="employer.emp_picture" alt="employer avatar" />
                <p>{{ employer.emp_name }}</p>
                <p>{{ employer.emp_company }}</p>
            </div>
            <div class="employer-contacts">
                <ul>
                    <li>
                        <img src="../assets/selfmade/email.svg" alt="email" />
                        <span>{{ employer.emp_email }}</span>
                    </li>
                    <li>
                        <img src="../assets/selfmade/phone.svg" alt="contactNo" />
                        <span>{{ employer.emp_mobile }}</span>
                    </li>
                    <li v-if="employer.emp_website !== null">
                        <img src="../assets/selfmade/web.svg" alt="website" />
                        <span>{{ employer.emp_website }}</span>
                    </li>
                    <li v-if="employer.emp_linkedin !== null">
                        <img src="../assets/linkedin.svg" alt="linkedin" />
                        <span>{{ employer.emp_linkedin }}</span>
                    </li>
                </ul>
            </div>
            <div
                class="editBtn"
                v-bind:class="{ 'employer-view' : currentUser === 'student' || currentUser === 'admin' }"
                @click="navigateTo({name: 'profile'})"
            >
                <button>Edit contact details</button>
            </div>
            <div
                class="editBtn"
                v-bind:class="{ 'employer-view' : currentUser === 'student' || currentUser === 'employer' }"
                @click="navigateTo({name: 'admin-emp-acc-indiv', params: {id: employer.id}})"
            >
                <button>Edit contact details</button>
            </div>
        </div>
        <div
            class="applyBtn"
            v-bind:class="{ 'student-view' : currentUser === 'employer' || currentUser === 'admin'}"
        >
            <button @click="apply">Apply now</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "EmployerContactSideMenu",
    data() {
        return {
            currentUser: this.user,
        };
    },
    props: ["user"],
    computed: {
        ...mapGetters("employers", ["getEmpById"]),
        ...mapGetters(["getJobById", "getCurrentUser"]),
        job() {
            const job = this.getJobById(this.$route.params.jobID);
            return job;
        },
        employer() {
            const employer = this.getEmpById(this.job.employerId);
            return employer;
        },
        student() {
            const student = this.getCurrentUser;
            return student;
        },
    },
    methods: {
        ...mapActions(["addApplication"]),
        apply() {
            this.$swal({
                title: "Confirmation",
                text: "Are you sure you wish to apply?",
                buttons: ["No", "Yes"],
            }).then((confirm) => {
                if (confirm) {
                    const studentId = this.student.id;
                    const application = {
                        status: 2,
                        studentId: studentId,
                        jobpostId: this.job.id,
                    };

                    this.addApplication(application)
                        .then(
                            this.$swal({
                                text: "Your application has been submitted!",
                                buttons: {
                                    close: {
                                        value: "close",
                                        text: "Close",
                                    },
                                },
                                icon: "success",
                            })
                        )
                        .catch((err) => {
                            console.log(err);
                            this.$swal({
                                text:
                                    "Your application was not submitted successfully",
                                buttons: {
                                    close: {
                                        value: "close",
                                        text: "Close",
                                    },
                                },
                                icon: "warning",
                            }).then((value) => {
                                if (value === "close") this.$router.go(-1);
                            });
                        });
                }
            });
        },
        navigateTo(route) {
            this.$router.push(route);
        },
    },
};
</script>

<style scoped>
.side {
    grid-area: contact;
    justify-self: center;
    width: 80%;
}

.employer-info {
    border: 1px solid #e6e6e6;
    border-radius: 12px;
    margin-bottom: 2em;
}

.employer-title {
    text-align: center;
    margin: 1.5em 0;
}

.employer-title img {
    width: 30%;
}

.employer-contacts {
    margin: 0 auto 1.5em;
    width: 80%;
}

.employer-contacts li {
    display: flex;
    justify-content: start;
}

.employer-contacts img {
    width: 28px;
    margin: 0.2em 0;
}

.employer-contacts span {
    margin: 5px 20px;
}

ul {
    list-style-type: none;
}

button {
    margin: 1em 0;
    border: none;
    padding: 1em;
    border-radius: 12px;
    outline: none;
    background: #f2dadd;
    color: #af6675;
    transition-duration: 0.4s;
    cursor: pointer;
    font-weight: bold;
    width: 100%;
}

button:hover {
    background-color: #d398a5;
    color: #fff;
}

.editBtn {
    width: 80%;
    margin: -1em auto 0.5em;
}

.editBtn button {
    background: #e6e6e6;
    color: #7c7c7c;
}

.employer-view,
.student-view {
    display: none;
}

@media screen and (max-width: 1150px) {
    .side {
        width: 90%;
    }
}

@media screen and (max-width: 800px) {
    .side {
        width: 300px;
        justify-self: center;
    }
}

@media screen and (max-width: 570px) {
    .side {
        width: 70%;
        font-size: 0.8em;
    }
}

@media screen and (max-width: 400px) {
    .side {
        width: 80%;
    }
}
</style>