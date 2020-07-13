<template>
    <div>
        <backBtn title="jobs"></backBtn>
        <div class="joblist-container">
            <jobListing />

            <div class="editBtns">
                <span
                    class="edit"
                    @click="navigateTo({name: 'admin-posts-pending-edit', params: {jobID: post.jobID}})"
                >
                    <img src="../../assets/selfmade/edit-grey.svg" alt="edit" />
                    <span class="tooltip" id="edit">Edit</span>
                </span>
                <span class="confirm" @click="confirmPost">
                    <img src="../../assets/selfmade/confirm.svg" alt="confirm" />
                    <span class="tooltip" id="confirm">Confirm</span>
                </span>
                <span class="cancel" @click="cancelPost">
                    <img src="../../assets/selfmade/cancel-red.svg" alt="reject post" />
                    <span class="tooltip" id="cancel">Reject post</span>
                </span>
            </div>

            <employerContact class="contact" user="student" />

            <div class="mobileEditBtns">
                <div
                    class="editBtn"
                    @click="navigateTo({name: 'admin-posts-pending-edit', params: {jobID: post.jobID}})"
                >
                    <button>Edit</button>
                </div>
                <div class="confirmBtn">
                    <button @click="confirmPost">Confirm</button>
                </div>
                <div class="cancelBtn">
                    <button @click="cancelPost">Reject post</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BackBtn from "../../components/BackBtn.vue";
import JobListing from "../../components/JobListing.vue";
import EmployerContact from "../../components/EmployerContactSideMenu.vue";

export default {
    name: "AdminPostsPendingIndiv",
    components: {
        backBtn: BackBtn,
        jobListing: JobListing,
        employerContact: EmployerContact
    },
    data() {
        const jobID = this.$route.params.jobID;
        const post = this.$store.getters.getJobById(jobID);
        return {
            post: post,
            jobID: jobID
        };
    },
    methods: {
        confirmPost() {
            this.$swal({
                title: "Confirm",
                text: "Do you wish to approve this post?",
                buttons: {
                    no: {
                        value: "no",
                        text: "Cancel"
                    },
                    yes: {
                        value: "yes",
                        text: "Yes"
                    }
                },
                icon: "warning"
            }).then(value => {
                switch (value) {
                    case "yes":
                        // this.deleteJobPost(this.jobID);
                        this.$router.go(-1);
                        break;
                }
            });
        },
        cancelPost() {
            this.$swal({
                title: "Reject",
                text: "Are you sure you want to reject this post?",
                buttons: {
                    no: {
                        value: "no",
                        text: "No"
                    },
                    yes: {
                        value: "yes",
                        text: "Yes"
                    }
                },
                icon: "warning"
            }).then(value => {
                switch (value) {
                    case "yes":
                        // this.deleteJobPost(this.jobID);
                        this.$router.go(-1);
                        break;
                }
            });
        },
        navigateTo(route) {
            this.$router.push(route);
        }
    }
};
</script>


<style scoped>
.joblist-container {
    display: grid;
    grid-template-columns: 70% auto;
    grid-template-rows: 50px auto;
    grid-template-areas:
        "job btns"
        "job contact";
    margin: 2em 3em;
}

.editBtns {
    justify-self: end;
    margin-right: 10%;
    grid-area: btns;
}

.editBtns img {
    width: 30px;
    cursor: pointer;
    margin-left: 0.5em;
}

.editBtns .tooltip {
    visibility: hidden;
    position: absolute;
    z-index: 1;
    width: fit-content;
    background: #e6e6e6;
    border-radius: 7px;
    padding: 0.3em 1em 0.4em;
    margin-top: 36px;
    margin-left: -47px;
    font-size: 11px;
}

#edit {
    margin-left: -37px;
}

#cancel:before {
    margin-left: 20px;
}

#cancel {
    margin-left: -79px;
}

.editBtns .tooltip:before {
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
.edit:hover #edit,
.cancel:hover #cancel {
    visibility: visible;
}

.mobileEditBtns {
    display: none;
    justify-self: center;
    margin-top: 1em;
}

button {
    margin: 0.5em 0.8em;
    border: none;
    padding: 1em;
    border-radius: 12px;
    outline: none;
    background: #f2dadd;
    color: #af6675;
    transition-duration: 0.4s;
    cursor: pointer;
    font-weight: bold;
    width: 210px;
    font-size: 80%;
}

button:hover {
    background-color: #d398a5;
    color: #fff;
}

.editBtn button {
    background: #d6ead6;
    color: #5a845a;
}

.cancelBtn button {
    background: #e6e6e6;
    color: #7c7c7c;
}

@media screen and (max-width: 1150px) {
    .joblist-container {
        grid-template-columns: auto 320px;
    }

    .editBtns {
        margin-right: 5%;
    }
}

@media screen and (max-width: 950px) {
    .joblist-container {
        grid-template-columns: auto 300px;
    }
}

@media screen and (max-width: 800px) {
    .joblist-container {
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        grid-template-areas:
            "job"
            "btns";
        margin: 1.5em 3em;
    }

    .contact,
    .editBtns {
        display: none;
    }

    .mobileEditBtns {
        display: flex;
        flex-wrap: wrap;
        grid-area: btns;
        margin-top: 0;
        margin-bottom: 2em;
    }
}

@media screen and (max-width: 570px) {
    .joblist-container {
        margin: 1.5em 2em;
    }
}

@media screen and (max-width: 500px) {
    button {
        width: 250px;
    }

    .mobileEditBtns {
        display: inherit;
    }
}

@media screen and (max-width: 400px) {
    .joblist-container {
        margin: 1.5em;
    }

    .mobileEditBtns {
        width: 90%;
    }

    button {
        width: 100%;
        margin: 0.3em 0;
    }
}
</style>