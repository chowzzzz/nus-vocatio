<template>
    <div>
        <div class="applicants" @click="navigateTo()">
            <h3 class="applicantNo">{{ post.applicants }} Applicants</h3>
            <div class="applicants-side">
                <p>View Applicants</p>
                <img src="../../assets/left.svg" alt="click" />
            </div>
        </div>

        <div class="posting-container">
            <jobListing />

            <div class="editBtns">
                <span class="delete">
                    <img src="../../assets/selfmade/delete.svg" alt="delete" />
                    <span class="tooltip" id="delete">Delete</span>
                </span>
                <span class="edit">
                    <img src="../../assets/selfmade/edit.svg" alt="edit" />
                    <span class="tooltip" id="edit">Edit</span>
                </span>
                <span class="cancel">
                    <img src="../../assets/selfmade/cancel.svg" alt="stop receiving applications" />
                    <span class="tooltip" id="cancel">Stop receiving applications</span>
                </span>
            </div>

            <employerContact class="contact" user="employer" />

            <div class="mobileEditBtns">
                <div class="deleteBtn">
                    <button @click="deletePost">Delete</button>
                </div>
                <div class="editBtn">
                    <button>Edit</button>
                </div>
                <div class="cancelBtn">
                    <button @click="cancelPost">Stop receiving applications</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import JobListing from "../../components/JobListing.vue";
import EmployerContact from "../../components/EmployerContactSideMenu.vue";

export default {
    name: "EmployerJobPosting",
    components: {
        jobListing: JobListing,
        employerContact: EmployerContact
    },
    data() {
        const post = this.$store.getters.getJobById(this.$route.params.id);
        return {
            post: post
        };
    },
    methods: {
        deletePost() {
            this.$swal({
                title: "Delete",
                text: "Are you sure you want to delete?",
                buttons: ["No", "Yes"],
                icon: "warning"
            });
        },
        cancelPost() {
            this.$swal({
                text:
                    "Are you sure you want to stop receiving applications for this job post?",
                buttons: ["No", "Yes"],
                icon: "warning"
            });
        }
    }
};
</script>

<style scoped>
.applicants {
    margin: 1em 3em;
    padding: 1em 1.5em;
    background: #f2f2f2;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.applicantNo {
    padding: 0.5em 0.8em;
    background: #c1e2f5;
    color: #2b839e;
    width: fit-content;
    border-radius: 20px;
}

.applicants-side {
    text-align: right;
    display: flex;
}

.applicants-side p {
    color: #b8b8b8;
    margin-right: 10px;
    font-size: 13px;
}

.applicants-side img {
    width: 15px;
    transform: rotate(180deg);
}

.posting-container {
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
    margin-left: -43px;
    font-size: 11px;
}

#edit {
    margin-left: -37px;
}

#cancel:before {
    margin-left: 59px;
}

#cancel {
    margin-left: -159px;
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

.delete:hover #delete,
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
    .posting-container {
        grid-template-columns: auto 320px;
    }

    .editBtns {
        margin-right: 5%;
    }
}

@media screen and (max-width: 950px) {
    .posting-container {
        grid-template-columns: auto 300px;
    }
}

@media screen and (max-width: 800px) {
    .posting-container {
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
    .applicants,
    .posting-container {
        margin: 1.5em 2em;
    }

    .applicantNo {
        font-size: 80%;
    }

    .applicants-side p {
        font-size: 11px;
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
    .applicants,
    .posting-container {
        margin: 1.5em;
    }

    .applicants {
        padding: 0.7em 0.8em;
        border-radius: 14px;
    }

    .applicantNo {
        border-radius: 12px;
    }

    .applicants-side p {
        font-size: 10px;
    }

    .applicants-side img {
        width: 12px;
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