<template>
    <div class="container">
        <div class="title">
            <h4>{{ title }} Job Posting</h4>

            <div class="btns">
                <span v-if="edit && !pending" class="delete" @click="deletePost">
                    <img src="../assets/selfmade/delete.svg" alt="delete" />
                    <span class="tooltip" id="delete">Delete</span>
                </span>
                <span v-if="edit && !pending" class="confirm" @click="confirmEdit">
                    <img src="../assets/selfmade/confirm.svg" alt="confirm" />
                    <span class="tooltip" id="confirm">Confirm</span>
                </span>
                <span v-else-if="edit && pending" class="confirm" @click="confirmPost">
                    <img src="../assets/selfmade/confirm.svg" alt="accept" />
                    <span class="tooltip" id="confirm">Accept</span>
                </span>
                <span v-else class="confirm" @click="confirmAdd">
                    <img src="../assets/selfmade/confirm.svg" alt="confirm" />
                    <span class="tooltip" id="confirm">Confirm</span>
                </span>

                <span v-if="pending" class="cancel" @click="rejectPost">
                    <img src="../assets/selfmade/cancel-red.svg" alt="reject" />
                    <span class="tooltip" id="cancel">Reject</span>
                </span>
                <span class="cancel" @click="cancel">
                    <img src="../assets/selfmade/cancel.svg" alt="cancel" />
                    <span class="tooltip" id="cancel">Cancel</span>
                </span>
            </div>
        </div>

        <job-form ref="sendData" @post="newPost" />

        <div class="mobile-btns">
            <div v-if="edit && !pending" class="deleteBtn">
                <button @click="deletePost">Delete</button>
            </div>
            <div v-if="edit && !pending" class="confirmBtn">
                <button @click="confirmEdit">Save</button>
            </div>
            <div v-else-if="edit && pending" class="confirmBtn">
                <button @click="confirmPost">Accept</button>
            </div>
            <div v-else class="confirmBtn">
                <button @click="confirmAdd">Save</button>
            </div>
            <div v-if="pending" class="deleteBtn">
                <button @click="rejectPost">Reject</button>
            </div>
            <div class="cancelBtn">
                <button @click="cancel">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
import JobForm from "./JobForm.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "EmployerJobForm",
    components: {
        JobForm,
    },
    props: ["title", "edit", "pending"],
    data() {
        return {
            post: {},
        };
    },
    computed: {
        ...mapGetters(["getCurrentUser"]),
        currentPost() {
            const jobpost = this.$store.getters.getJobById(
                this.$route.params.jobID
            );
            return jobpost;
        },
        currentUser() {
            const user = this.getCurrentUser;
            return user;
        },
    },
    methods: {
        ...mapActions(["addJobPost", "deleteJobPost", "updateJobPost"]),
        newPost(post) {
            this.post = post;
        },
        confirmAdd() {
            this.$refs.sendData.sendPost();
            this.post.post_status = 0;
            this.post.employerId = this.currentUser.id;
            this.post.post_requirements = this.post.post_requirements.replace(
                /\n/gi,
                "\\n"
            );

            const jobpost = new FormData();
            jobpost.append("post_title", this.post.post_title);
            jobpost.append("post_short_des", this.post.post_short_des);
            jobpost.append("post_long_des", this.post.post_long_des);
            jobpost.append("post_requirements", this.post.post_requirements);
            jobpost.append("post_type", this.post.post_type);
            jobpost.append("post_pay", this.post.post_pay);
            jobpost.append("post_status", this.post.post_status);
            jobpost.append("post_expiry", this.post.post_expiry);
            jobpost.append("post_industry", this.post.post_industry);
            jobpost.append("post_faculty", this.post.post_faculty);
            jobpost.append(
                "post_max_applicants",
                this.post.post_max_applicants
            );
            jobpost.append("post_contract", this.post.post_contract);
            jobpost.append("employerId", this.post.employerId);

            // console.log(jobpost);

            this.addJobPost(jobpost)
                .then(
                    this.$swal({
                        title: "Confirm",
                        text: "New job created",
                        buttons: {
                            close: {
                                value: "close",
                                text: "Close",
                            },
                        },
                        icon: "success",
                    }).then((value) => {
                        if (value === "close") this.$router.go(-1);
                    })
                )
                .catch((err) => {
                    console.log(err);
                    this.$swal({
                        text: "Error in creating new job",
                        buttons: {
                            close: {
                                value: "close",
                                text: "Close",
                            },
                        },
                        icon: "warning",
                    });
                });
        },
        confirmEdit() {
            this.$refs.sendData.sendPost();
            this.post.id = this.currentPost.id;
            this.post.post_status = this.currentPost.post_status;
            this.post.employerId = this.currentPost.employerId;
            this.post.post_requirements = this.post.post_requirements.replace(
                /\n/gi,
                "\\n"
            );

            const jobpost = new FormData();
            jobpost.append("id", this.post.id);
            jobpost.append("post_title", this.post.post_title);
            jobpost.append("post_short_des", this.post.post_short_des);
            jobpost.append("post_long_des", this.post.post_long_des);
            jobpost.append("post_requirements", this.post.post_requirements);
            jobpost.append("post_type", this.post.post_type);
            jobpost.append("post_pay", this.post.post_pay);
            jobpost.append("post_status", this.post.post_status);
            jobpost.append("post_expiry", this.post.post_expiry);
            jobpost.append("post_industry", this.post.post_industry);
            jobpost.append("post_faculty", this.post.post_faculty);
            jobpost.append(
                "post_max_applicants",
                this.post.post_max_applicants
            );
            jobpost.append("post_contract", this.post.post_contract);
            jobpost.append("employerId", this.post.employerId);

            this.updateJobPost(jobpost)
                .then(
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
                    })
                )
                .catch((err) => {
                    console.log(err);
                    this.$swal({
                        text: "Error in editing job post",
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
        },
        deletePost() {
            this.$swal({
                title: "Delete",
                text: "Are you sure you want to delete this post?",
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
                        this.deleteJobPost(this.currentPost.id).then(
                            this.$swal({
                                title: "Confirm",
                                text: "Job post deleted",
                                buttons: {
                                    close: {
                                        value: "close",
                                        text: "Close",
                                    },
                                },
                                icon: "success",
                            }),
                            this.$router.go(-2)
                        );
                        break;
                }
            });
        },
        confirmPost() {
            this.$refs.sendData.sendPost();
            this.post.id = this.currentPost.id;
            this.post.post_status = 1;
            this.post.employerId = this.currentPost.employerId;
            this.post.post_requirements = this.post.post_requirements.replace(
                /\n/gi,
                "\\n"
            );
            // console.log(this.post);

            this.updateJobPost(this.post)
                .then(
                    this.$swal({
                        title: "Confirm",
                        text: "Job post approved",
                        buttons: {
                            close: {
                                value: "close",
                                text: "Close",
                            },
                        },
                        icon: "success",
                    }).then((value) => {
                        if (value === "close") this.$router.go(-2);
                    })
                )
                .catch((err) => {
                    console.log(err);
                    this.$swal({
                        text: "Error in approving job post",
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
        },
        rejectPost() {
            this.$refs.sendData.sendPost();

            this.$swal({
                text: "Are you sure you wish to reject this posting?",
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
                        this.post.id = this.currentPost.id;
                        this.post.post_status = 4;
                        this.post.employerId = this.currentPost.employerId;
                        this.post.post_requirements = this.post.post_requirements.replace(
                            /\n/gi,
                            "\\n"
                        );
                        this.updateJobPost(this.post)
                            .then(
                                this.$swal({
                                    title: "Confirm",
                                    text: "Job post rejected",
                                    buttons: {
                                        close: {
                                            value: "close",
                                            text: "Close",
                                        },
                                    },
                                    icon: "success",
                                }).then((value) => {
                                    if (value === "close") this.$router.go(-2);
                                })
                            )
                            .catch((err) => {
                                console.log(err);
                                this.$swal({
                                    text: "Error in approving job post",
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
                        break;
                }
            });
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
    padding: 2em 6em 3em;
    background: #f8fbff;
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

#delete {
    margin-left: -46px;
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

.delete:hover #delete,
.confirm:hover #confirm,
.cancel:hover #cancel {
    visibility: visible;
}

.mobile-btns {
    display: none;
    justify-self: center;
    margin-top: 1em;
}

.deleteBtn,
.confirmBtn,
.cancelBtn {
    width: 90%;
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

.deleteBtn button {
    background: #f2dadd;
    color: #af6675;
}

.cancelBtn button {
    background: #e6e6e6;
    color: #7c7c7c;
}

@media screen and (max-width: 800px) {
    .container {
        padding: 2em 3em 3em;
    }
    h4 {
        font-size: 22px;
    }
}

@media screen and (max-width: 700px) {
    h4 {
        font-size: 20px;
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
        font-size: 12px;
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
}
</style>