<template>
    <div class="container">
        <div class="title">
            <h4>Add New Job Posting</h4>

            <div class="btns">
                <span class="confirm" @click="confirmAdd">
                    <img src="../../assets/selfmade/confirm.svg" alt="confirm" />
                    <span class="tooltip" id="confirm">Confirm</span>
                </span>
                <span class="cancel" @click="cancelAdd">
                    <img src="../../assets/selfmade/cancel.svg" alt="stop receiving applications" />
                    <span class="tooltip" id="cancel">Cancel</span>
                </span>
            </div>
        </div>

        <job-form />

        <div class="mobile-btns">
            <div class="confirmBtn">
                <button @click="confirmAdd">Save</button>
            </div>
            <div class="cancelBtn">
                <button @click="cancelAdd">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
import JobForm from "../../components/JobForm.vue";

export default {
    name: "EmployerAddJob",
    components: {
        JobForm
    },
    beforeCreate() {
        document.body.className = "bg";
    },
    destroyed() {
        document.body.classList.remove("bg");
    },
    methods: {
        confirmAdd() {
            this.$swal({
                title: "Confirm",
                text: "New job created",
                buttons: {
                    close: {
                        value: "close",
                        text: "Close"
                    }
                },
                icon: "success"
            }).then(value => {
                if (value === "close") this.$router.go(-1);
            });
        },
        cancelAdd() {
            this.$swal({
                text: "Are you sure you want to discard your changes?",
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
                        this.$router.go(-1);
                        break;
                }
            });
        }
    }
};
</script>

<style scoped>
.container {
    margin: 2em 6em 3em;
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

.cancelBtn button {
    background: #e6e6e6;
    color: #7c7c7c;
}

@media screen and (max-width: 800px) {
    .container {
        margin: 2em 3em 3em;
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
        margin: 2em 0 3em;
    }
}
</style>