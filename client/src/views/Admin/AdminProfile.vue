<template>
    <div class="container">
        <div class="profile-title">
            <h2>Admin Profile</h2>
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
        <div class="profile-container" v-if="admin">
            <div class="info">
                <div class="inputs">
                    <label for="usr">Username</label>
                    <br />
                    <input v-model="admin.adm_user" type="text" name="usr" id="usr" />
                </div>

                <div class="inputs">
                    <label for="email">Email</label>
                    <br />
                    <input v-model="admin.adm_email" type="email" name="email" id="email" />
                </div>
            </div>

            <h5>Change Password</h5>
            <div class="info pwd">
                <div class="inputs">
                    <label for="oldPwd">Old Password</label>
                    <input v-model="oldPwd" type="password" name="oldPwd" id="oldPwd" />
                </div>
                <div class="inputs">
                    <label for="newPwd">New Password</label>
                    <input v-model="newPwd" type="password" name="newPwd" id="newPwd" />
                </div>
            </div>
            <button @click="changePwd" class="pwdBtn">Change password</button>
        </div>

        <div class="mobile-btns">
            <div class="confirmBtn">
                <button @click="confirmEdit">Save</button>
            </div>
            <div class="cancelBtn">
                <button @click="cancel">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "AdminProfile",
    data() {
        return {
            oldPwd: "",
            newPwd: "",
        };
    },
    computed: {
        admin() {
            const admin = this.$store.getters.getAdminById(1);
            return admin;
        },
    },
    methods: {
        ...mapActions(["updateAdmin"]),
        confirmEdit() {
            const updatedAdmin = {
                // change this
                id: 1,
                adm_user: this.admin.adm_user,
                adm_email: this.admin.adm_email,
                adm_password: this.admin.adm_password,
            };

            this.updateAdmin(updatedAdmin).then(
                this.$swal({
                    title: "Confirm",
                    text: "Admin details updated",
                    buttons: {
                        close: {
                            value: "close",
                            text: "Close",
                        },
                    },
                    icon: "success",
                })
                    .then((value) => {
                        if (value === "close") this.$router.go(-1);
                    })
                    .catch((err) => {
                        console.log(err);
                        this.$swal({
                            title: "Error",
                            text: "Error in updating admin details",
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
                    })
            );
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
        changePwd() {
            const updatedAdmin = {
                // change this
                id: 1,
                adm_user: this.admin.adm_user,
                adm_email: this.admin.adm_email,
                adm_password: this.admin.adm_password,
            };
            console.log(updatedAdmin);
            // change this
            // this.updateAdmin(updatedAdmin).then(
            this.$swal({
                title: "Confirm",
                text: "Password changed",
                buttons: {
                    close: {
                        value: "close",
                        text: "Close",
                    },
                },
                icon: "success",
            })
                .then((value) => {
                    if (value === "close") this.$router.go(-1);
                })
                .catch((err) => console.log(err));
            // );
        },
    },
};
</script>

<style scoped>
.container {
    padding: 2em 15em 3em;
    height: calc(100vh - 53px);
}

.profile-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h2 {
    font-size: 20px;
}

.profile-container {
    margin-top: 0.8em;
    padding: 1.2em 4em;
    background: #fff;
    border-radius: 12px;
}

.info {
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 2em;
}

h5 {
    font-size: 14px;
}

label {
    font-size: 13px;
}

.inputs {
    width: 80%;
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

.pwd {
    margin-bottom: 0.5em;
}

.pwdBtn {
    width: 40%;
    margin: 0 0 1em;
}

@media screen and (max-width: 1150px) {
    .container {
        padding: 2em 8em 3em;
    }
}

@media screen and (max-width: 900px) {
    .container {
        padding: 2em 6em 3em;
    }

    .profile-container {
        padding: 1.2em 3em;
        border-radius: 20px;
    }
}

@media screen and (max-width: 800px) {
    .container {
        padding: 2em 5em 3em;
    }

    h2 {
        font-size: 18px;
    }

    label {
        font-size: 12px;
    }

    .inputs {
        width: 90%;
    }

    .pwdBtn {
        width: 45%;
    }
}

@media screen and (max-width: 650px) {
    .container {
        padding: 2em 4em 3em;
    }

    h5 {
        font-size: 13px;
    }

    .profile-container {
        padding: 1.2em 2em;
    }

    button {
        font-size: 11px;
    }
}

@media screen and (max-width: 570px) {
    .container {
        padding: 1.5em 2em 3em;
    }

    h2 {
        font-size: 15px;
    }

    .profile-container {
        padding: 1em 2em;
    }

    .info {
        grid-template-rows: auto auto;
        grid-template-columns: auto;
    }

    .inputs {
        width: 100%;
    }

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

    .pwdBtn {
        width: 100%;
    }
}
@media screen and (max-width: 400px) {
    .profile-container {
        padding: 1em 1.5em;
    }
}
</style>