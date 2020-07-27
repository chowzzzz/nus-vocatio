<template>
    <div class="parent-container">
        <h2>Employer Register</h2>
        <form enctype="multipart/form-data" class="input-container" @submit.prevent="register">
            <div class="company-container">
                <h3>Company Information</h3>
                <div class="inputText">
                    <div class="half">
                        <label for="coName">Company Name</label>
                        <br />
                        <input v-model="employer.emp_company" type="text" name="coName" id="coName" />
                        <br />
                    </div>
                    <div class="half">
                        <label for="coRegNo">Company Reg. No.</label>
                        <br />
                        <input
                            v-model="employer.emp_coRegNo"
                            type="text"
                            name="coRegNo"
                            id="coRegNo"
                        />
                        <br />
                    </div>
                </div>
                <div class="inputText">
                    <div class="half">
                        <label for="coNo">Company No.</label>
                        <br />
                        <input v-model="employer.emp_coContact" type="text" name="coNo" id="coNo" />
                        <br />
                    </div>
                    <div class="half">
                        <label for="coEmail">Company Email</label>
                        <br />
                        <input
                            v-model="employer.emp_coEmail"
                            type="email"
                            name="coEmail"
                            id="coEmail"
                        />
                        <br />
                    </div>
                </div>
                <div class="inputText">
                    <div class="full">
                        <label for="coAdd">Company Address</label>
                        <br />
                        <input v-model="employer.emp_coAddress" type="text" name="coAdd" id="coAdd" />
                        <br />
                    </div>
                </div>
                <div class="inputText">
                    <div class="half">
                        <label for="coCountry">Country</label>
                        <br />
                        <input
                            v-model="employer.emp_coCountry"
                            type="text"
                            name="coCountry"
                            id="coCountry"
                        />
                        <br />
                    </div>
                    <div class="half">
                        <label for="coWeb">Company Website</label>
                        <br />
                        <input v-model="employer.emp_website" type="text" name="coWeb" id="coWeb" />
                    </div>
                </div>
            </div>

            <div class="coLogo">
                <h5>Company Logo</h5>
                <img v-if="employer.emp_logo" :src="logo_url" alt="logo" />
                <img v-else :src="require('../../assets/selfmade/picture.svg')" alt="profile pic" />

                <button class="uploadBtn" type="button">
                    <input
                        type="file"
                        accept="image/*"
                        name="logo"
                        id="logo"
                        ref="logo"
                        @change="selectLogo"
                    />
                    Upload
                    <i class="fas fa-camera"></i>
                </button>
            </div>

            <div class="coDesc">
                <label for="coDesc">Company Description</label>
                <br />
                <textarea v-model="employer.emp_coDes" name="coDesc" id="coDesc" rows="10"></textarea>
            </div>

            <div class="employer-container">
                <h3>Employer Information</h3>
                <div class="inputText">
                    <div class="half">
                        <label for="empName">Name</label>
                        <br />
                        <input v-model="employer.emp_name" type="text" name="empName" id="empName" />
                        <br />
                    </div>
                    <div class="half">
                        <label for="salutation">Title/Salutation</label>
                        <br />
                        <div class="select">
                            <select
                                v-model="employer.emp_salutation"
                                name="salutation"
                                id="salutation"
                            >
                                <option value="default" selected></option>
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Miss">Miss</option>
                                <option value="Dr.">Dr.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Prof.">Prof.</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="inputText">
                    <div class="half">
                        <label for="empContactNo">Contact No.</label>
                        <br />
                        <input
                            v-model="employer.emp_mobile"
                            type="text"
                            name="empContactNo"
                            id="empContactNo"
                        />
                        <br />
                    </div>
                    <div class="half">
                        <label for="empEmail">Email</label>
                        <br />
                        <input
                            v-model="employer.emp_email"
                            type="email"
                            name="empEmail"
                            id="empEmail"
                        />
                        <br />
                    </div>
                </div>
                <div class="inputText">
                    <div class="half">
                        <label for="empPwd">Password</label>
                        <br />
                        <input
                            v-model="employer.emp_password"
                            type="password"
                            name="empPwd"
                            id="empPwd"
                        />
                        <br />
                    </div>
                    <div class="half">
                        <label for="confirmPwd">Confirm Password</label>
                        <br />
                        <input
                            v-model="employer.confirmPwd"
                            type="password"
                            name="confirmPwd"
                            id="confirmPwd"
                        />
                        <br />
                    </div>
                </div>
                <div class="inputText">
                    <div class="half singleHalf">
                        <label for="empLinkedIn">LinkedIn Link</label>
                        <br />
                        <input
                            v-model="employer.emp_linkedin"
                            type="text"
                            name="empLinkedIn"
                            id="empLinkedIn"
                        />
                        <br />
                    </div>
                </div>
            </div>
            <div class="empPicture">
                <h5>Profile Photo</h5>
                <img v-if="employer.emp_picture" :src="picture_url" alt="profile pic" />
                <img v-else :src="require('../../assets/selfmade/picture.svg')" alt="profile pic" />

                <button class="uploadBtn" type="button">
                    <input
                        type="file"
                        accept="image/*"
                        name="picture"
                        id="picture"
                        ref="picture"
                        @change="selectPicture"
                    />
                    Upload
                    <i class="fas fa-camera"></i>
                </button>
            </div>
            <div class="submit">
                <button type="submit" id="submitBtn">Register</button>
                <!-- <p
                    class="statusMsg error"
                    v-if="submitStatus === 'ERROR'"
                >Please fill the form correctly.</p>-->
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "EmployerRegister",
    data() {
        return {
            employer: {
                emp_company: "",
                emp_coRegNo: "",
                emp_coContact: "",
                emp_coEmail: "",
                emp_coAddress: "",
                emp_coCountry: "",
                emp_website: "",
                emp_logo: null,
                emp_coDes: "",
                emp_name: "",
                emp_salutation: "",
                emp_mobile: "",
                emp_email: "",
                emp_linkedin: "",
                emp_picture: null,
                emp_password: "",
                confirmPwd: "",
            },
            logo_url: null,
            picture_url: null,
        };
    },
    methods: {
        ...mapActions(["addEmployer"]),
        selectLogo() {
            console.log(this.$refs.logo.files[0]);
            this.employer.emp_logo = this.$refs.logo.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                this.logo_url = e.target.result;
            };

            reader.readAsDataURL(this.$refs.logo.files[0]);
        },
        selectPicture() {
            this.employer.emp_picture = this.$refs.picture.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                this.picture_url = e.target.result;
            };

            reader.readAsDataURL(this.$refs.picture.files[0]);
        },
        register() {
            /* this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = "ERROR";
            } else { */
            const emp = new FormData();
            emp.append("emp_company", this.employer.emp_company);
            emp.append("emp_coRegNo", this.employer.emp_coRegNo);
            emp.append("emp_coContact", this.employer.emp_coContact);
            emp.append("emp_coEmail", this.employer.emp_coEmail);
            emp.append("emp_coAddress", this.employer.emp_coAddress);
            emp.append("emp_coCountry", this.employer.emp_coCountry);
            emp.append("emp_website", this.employer.emp_website);
            emp.append("emp_logo", this.employer.emp_logo);
            emp.append("emp_coDes", this.employer.emp_coDes);
            emp.append("emp_name", this.employer.emp_name);
            emp.append("emp_salutation", this.employer.emp_salutation);
            emp.append("emp_mobile", this.employer.emp_mobile);
            emp.append("emp_email", this.employer.emp_email);
            emp.append("emp_linkedin", this.employer.emp_linkedin);
            emp.append("emp_picture", this.employer.emp_picture);
            emp.append("emp_password", this.employer.emp_password);

            console.log("registering");
            this.addEmployer(emp)
                .then(() => {
                    console.log("success");
                    this.$swal({
                        text: "Registered successfully!",
                        buttons: {
                            close: {
                                value: "close",
                                text: "Close",
                            },
                        },
                        icon: "success",
                    }) /* .then((value) => {
                        if (value === "close")
                            this.$router.push("/login/employer");
                    }) */;
                })
                .catch((err) => {
                    console.log(err.response.data.error);
                    this.$swal({
                        text: "Error registering employer",
                        buttons: {
                            close: {
                                value: "close",
                                text: "Close",
                            },
                        },
                        icon: "warning",
                    });
                });
            // }
        },
    },
};
</script>

<style scoped>
h2 {
    text-align: center;
}

.parent-container {
    margin: 1em 15em 3em;
}
.input-container {
    display: grid;
    grid-template-columns: auto 20%;
    grid-template-rows: auto auto;
    grid-template-areas:
        "co coLogo"
        "coDes coDes"
        "emp img"
        "btn btn";
    margin: 1em 0;
    border: 1px solid #e6e6e6;
    border-radius: 12px;
    padding: 2em;
}

.company-container {
    grid-area: co;
}

.coLogo {
    grid-area: coLogo;
    margin-bottom: 1em;
}

.employer-container {
    grid-area: emp;
}

.empPicture {
    grid-area: img;
}

.submit {
    grid-area: btn;
}

.inputText {
    display: flex;
    margin-right: 1em;
    margin-bottom: 0.5em;
}

h3 {
    text-decoration: underline;
    margin-bottom: 0.5em;
}

.half {
    width: 50%;
    margin-right: 1em;
}

.singleHalf {
    width: 47%;
}

.full {
    width: 100%;
    margin-right: 1em;
}

.coLogo,
.empPicture {
    margin: 0 0 0 1em;
}

.coLogo img,
.empPicture img {
    width: 100%;
    border: 1px solid #e2e2e2;
    margin-top: 0.5em;
}

input[type="file"] {
    opacity: 0;
    position: absolute;
}

.uploadBtn {
    position: relative;
}

#picture,
#logo {
    position: absolute;
    left: 0;
}

#uploadFileInput {
    padding: 0.6em 1em;
    margin: 0 1em 0.5em 0;
    border: 1px solid #b8b8b8;
    border-radius: 12px;
    text-align: left;
    box-sizing: border-box;
    font-size: 12px;
}

.submit {
    grid-area: btn;
    justify-self: center;
    width: 30%;
}

#submitBtn {
    width: 100%;
    border: none;
    outline: none;
    transition-duration: 0.4s;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    font-weight: 600;
    padding: 1em;
    background: #d6ead6;
    color: #5a845a;
    border-radius: 10px;
    margin: 1em 0;
}

.coDesc {
    grid-area: coDes;
    margin-bottom: 1em;
}

h5 {
    text-decoration: underline;
}

@media screen and (max-width: 1150px) {
    .parent-container {
        margin: 1em 8em 3em;
    }
    .coLogo,
    .empPicture {
        margin: 0;
    }
}

@media screen and (max-width: 900px) {
    .parent-container {
        margin: 1em 4em 3em;
    }
}

@media screen and (max-width: 700px) {
    .parent-container {
        margin: 0 2em 3em;
    }
    .input-container {
        padding: 1em 2em 2em;
    }
}

@media screen and (max-width: 570px) {
    .input-container {
        display: grid;
        grid-template-rows: auto auto auto auto auto auto;
        grid-template-columns: auto;
        grid-template-areas:
            "coLogo"
            "co"
            "coDes"
            "img"
            "emp"
            "btn";
    }

    .coLogo,
    .empPicture {
        width: 35%;
        padding-bottom: 1em;
        text-align: center;
        justify-self: center;
    }

    .inputText {
        margin: 0;
    }

    .mobile-show {
        background: #f2dadd;
        padding: 0.8em;
        border-radius: 50%;
        float: right;
        margin-top: -50px;
        z-index: 2;
        position: relative;
        border: none;
        outline: none;
        cursor: pointer;
    }
}

@media screen and (max-width: 450px) {
    h3 {
        text-align: center;
    }

    .coLogo,
    .empPicture {
        width: 40%;
    }
}
</style>