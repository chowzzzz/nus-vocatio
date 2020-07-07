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

            <employer-profile-comp></employer-profile-comp>

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

export default {
    name: "EmployerProfile",
    components: {
        EmployerProfileComp,
        ChangePassword
    }
};
</script>

<style scoped>
.container {
    padding: 3em 11em;
    background: #f8fbff;
    height: 100%;
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