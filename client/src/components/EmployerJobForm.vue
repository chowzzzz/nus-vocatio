<template>
    <div class="container">
        <div class="title">
            <h4>{{ title }} Job Posting</h4>

            <div class="btns">
                <span v-if="edit" class="delete" @click="deletePost">
                    <img src="../assets/selfmade/delete.svg" alt="delete" />
                    <span class="tooltip" id="delete">Delete</span>
                </span>
                <span v-if="edit" class="confirm" @click="confirmEdit">
                    <img src="../assets/selfmade/confirm.svg" alt="confirm" />
                    <span class="tooltip" id="confirm">Confirm</span>
                </span>
                <span v-else class="confirm" @click="confirmAdd">
                    <img src="../assets/selfmade/confirm.svg" alt="confirm" />
                    <span class="tooltip" id="confirm">Confirm</span>
                </span>
                <span class="cancel" @click="cancel">
                    <img src="../assets/selfmade/cancel.svg" alt="cancel" />
                    <span class="tooltip" id="cancel">Cancel</span>
                </span>
            </div>
        </div>

        <job-form @post="newPost" />

        <div class="mobile-btns">
            <div v-if="edit" class="deleteBtn">
                <button @click="deletePost">Delete</button>
            </div>
            <div v-if="edit" class="confirmBtn">
                <button @click="confirmEdit">Save</button>
            </div>
            <div v-else class="confirmBtn">
                <button @click="confirmAdd">Save</button>
            </div>
            <div class="cancelBtn">
                <button @click="cancel">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
import JobForm from "./JobForm.vue";
import { mapActions } from "vuex";

export default {
    name: "EmployerJobForm",
    components: {
        JobForm,
    },
    props: ["title", "edit"],
    data() {
        return {
            post: {},
        };
    },
    computed: {
        currentPost() {
            const jobpost = this.$store.getters.getJobById(
                this.$route.params.jobID
            );
            return jobpost;
        },
    },
    methods: {
        ...mapActions(["addJobPost", "deleteJobPost", "updateJobPost"]),
        newPost(post) {
            this.post = post;
        },
        confirmAdd() {
            this.post.post_status = 0;
            this.post.employerId = 1; // change this
            this.post.post_requirements = this.post.post_requirements.replace(
                /\n/gi,
                "\\n"
            );

            this.addJobPost(this.post)
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
                    }).then((value) => {
                        if (value === "close") this.$router.go(-1);
                    });
                });
        },
        confirmEdit() {
            this.post.id = this.currentPost.id;
            this.post.post_status = this.currentPost.post_status;
            this.post.employerId = this.currentPost.employerId; // change this
            this.post.post_requirements = this.post.post_requirements.replace(
                /\n/gi,
                "\\n"
            );

            this.updateJobPost(this.post)
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
                            this.$router.h(-2)
                        );
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