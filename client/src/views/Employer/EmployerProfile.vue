<template>
    <div class="container">
        <div class="profile-container">
            <div class="title">
                <h4>Profile</h4>
                <div class="btns">
                    <span class="confirm" @click="confirmEdit">
                        <img src="../../assets/selfmade/confirm.svg" alt="confirm" />
                        <span class="tooltip" id="confirm">Confirm</span>
                    </span>
                    <span class="cancel" @click="cancel">
                        <img src="../../assets/selfmade/cancel.svg" alt="cancel" />
                        <span class="tooltip" id="cancel">Cancel</span>
                    </span>
                </div>
            </div>

            <employer-profile-comp v-if="employer" v-bind:employer="employer"></employer-profile-comp>

            <div class="mobile-btns">
                <div class="confirmBtn">
                    <button @click="confirmEdit">Save</button>
                </div>
                <div class="cancelBtn">
                    <button @click="cancel">Cancel</button>
                </div>
            </div>

            <change-password></change-password>
        </div>
    </div>
</template>

<script>
import EmployerProfileComp from "../../components/EmployerProfileComp.vue";
import ChangePassword from "../../components/ChangePassword.vue";
import { mapGetters } from "vuex";

export default {
    name: "EmployerProfile",
    components: {
        EmployerProfileComp,
        ChangePassword,
    },
    computed: {
        ...mapGetters("employers", ["getEmpById"]),
        ...mapGetters(["getCurrentUser"]),
        currentUser() {
            const currentUser = this.getCurrentUser;
            return currentUser;
        },
        employer() {
            const employer = this.getEmpById(this.currentUser.id);
            return employer;
        },
    },
    methods: {
        // ...mapActions(["addJobPost", "deleteJobPost", "updateJobPost"]),
        confirmEdit() {
            /* let jobID = this.$refs.newPost.$data.jobID;
            let title = this.$refs.newPost.$data.title;
            let industry = this.$refs.newPost.$data.industry;
            let department = this.$refs.newPost.$data.department;
            let salary = this.$refs.newPost.$data.salary;
            let maxApplicants = this.$refs.newPost.$data.maxApplicants;
            let type = this.$refs.newPost.$data.type;
            let faculty = this.$refs.newPost.$data.faculty;
            let shortdesc = this.$refs.newPost.$data.shortdesc;
            let desc = this.$refs.newPost.$data.desc;
            let date = this.$refs.newPost.$data.date;
            let req = this.$refs.newPost.$data.requirements;
            let temp = req.split("\n");
            let requirements = [];
            temp.forEach(requirement => {
                requirements.push({ req: requirement });
            });

            const post = {
                jobID: jobID,
                title: title,
                empID: 1, // change to current employer
                shortDescription: shortdesc,
                description: desc,
                requirements: requirements,
                type: type,
                faculty: faculty,
                industry: industry,
                department: department,
                salary: salary,
                date: new Date(),
                applicants: 0,
                maxApplicants: maxApplicants,
                status: "Accepting applications",
                expiry: date
            };

            this.updateJobPost(post).then( */
            this.$swal({
                title: "Confirm",
                text: "Job post edited",
                buttons: {
                    close: {
                        value: "close",
                        text: "Close",
                    },
                },
                icon: "success",
            }).then((value) => {
                if (value === "close") this.$router.go(-1);
            });
            // );
        },
        cancel() {
            this.$swal({
                text: "Are you sure you want to discard your changes?",
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
                        this.$router.go(-1);
                        break;
                }
            });
        },
    },
};
</script>

<style scoped>
.container {
    padding: 2em 11em;
}

.title {
    display: flex;
    justify-content: space-between;
}

.btns img {
    width: 30px;
    cursor: pointer;
    margin-left: 0.4em;
}

.btns .tooltip {
    visibility: hidden;
    position: absolute;
    z-index: 1;
    width: fit-content;
    background: #e6e6e6;
    border-radius: 7px;
    padding: 0.3em 1em 0.4em;
    margin-top: 36px;
    font-size: 11px;
}

#confirm {
    margin-left: -50px;
}

#cancel:before {
    margin-left: -5px;
}

#cancel {
    margin-left: -46px;
}

.btns .tooltip:before {
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-bottom: 5px solid #e6e6e6;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    content: " ";
}

.confirm:hover #confirm,
.cancel:hover #cancel {
    visibility: visible;
}

.mobile-btns {
    display: none;
    justify-self: center;
    margin-top: 1em;
}

.confirmBtn,
.cancelBtn {
    width: 80%;
}

button {
    margin: 0.5em;
    border: none;
    padding: 1em;
    border-radius: 12px;
    outline: none;
    background: #d6ead6;
    color: #5a845a;
    transition-duration: 0.4s;
    cursor: pointer;
    font-weight: bold;
    width: 100%;
    font-size: 80%;
}
.cancelBtn button {
    background: #e6e6e6;
    color: #7c7c7c;
}

.form-container {
    margin: 1em 0;
    padding: 1.5em 4em;
    background: #fff;
    border-radius: 25px;
}

@media screen and (max-width: 1150px) {
    .container {
        padding: 3em 9em;
    }
}

@media screen and (max-width: 1150px) {
    .container {
        padding: 3em 5em;
    }
}

@media screen and (max-width: 900px) {
    .form-container {
        padding: 1.5em 2em;
    }
}

@media screen and (max-width: 800px) {
    .container {
        padding: 1.5em 3em;
    }
    h4 {
        font-size: 22px;
    }
}

@media screen and (max-width: 700px) {
    .container {
        padding: 1.5em 0;
    }

    .title {
        padding: 0 1em;
    }

    h4 {
        font-size: 20px;
    }

    .form-container {
        margin: 0.5em 0 1em;
        border-radius: 0;
    }
}

@media screen and (max-width: 570px) {
    .btns {
        display: none;
    }

    .mobile-btns {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 2em;
    }

    .mobile-btns button {
        font-size: 11px;
    }

    .form-container {
        padding: 1em 2.5em;
    }
}
@media screen and (max-width: 450px) {
    .title {
        display: block;
        text-align: center;
    }

    .container {
        padding: 2em 0 3em;
    }

    .form-container {
        padding: 1em 2em;
        border-radius: 0;
    }

    .mobile-btns button {
        font-size: 9px;
    }
}
</style>