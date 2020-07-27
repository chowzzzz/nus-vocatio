<template>
    <div class="parent-container">
        <h2>Student Register</h2>
        <form enctype="multipart/form-data" class="input-container" @submit.prevent="register">
            <div class="info-container">
                <div class="inputText">
                    <div class="half">
                        <label for="name">Full Name</label>
                        <br />
                        <input
                            v-model.lazy="$v.student.stu_name.$model"
                            type="text"
                            name="name"
                            id="name"
                        />

                        <div
                            class="error"
                            v-if="!$v.student.stu_name.required && $v.student.stu_name.$dirty"
                        >*Field is required</div>
                    </div>

                    <div class="half">
                        <label for="studID">Student ID</label>
                        <br />
                        <input
                            v-model.lazy="$v.student.stu_id.$model"
                            type="text"
                            name="studID"
                            id="studID"
                        />

                        <div
                            class="error"
                            v-if="!$v.student.stu_id.required && $v.student.stu_id.$dirty"
                        >*Field is required</div>
                        <div
                            class="error"
                            v-if="(!$v.student.stu_id.maxLength || !$v.student.stu_id.verifyId) && $v.student.stu_id.$dirty"
                        >*Please enter valid student ID</div>
                    </div>
                </div>
                <div class="inputText">
                    <div class="half">
                        <label for="email">NUS Email ID</label>
                        <br />
                        <input
                            v-model.lazy="$v.student.stu_email.$model"
                            type="text"
                            name="email"
                            id="email"
                        />

                        <div
                            class="error"
                            v-if="!$v.student.stu_email.required && $v.student.stu_email.$dirty"
                        >*Field is required</div>
                        <div
                            class="error"
                            v-if="!$v.student.stu_email.email && $v.student.stu_email.$dirty"
                        >*Invalid email</div>
                    </div>

                    <div class="half">
                        <label for="contact">Contact number</label>
                        <br />
                        <input
                            v-model.lazy="$v.student.stu_mobile.$model"
                            type="text"
                            name="contact"
                            id="contact"
                        />

                        <div
                            class="error"
                            v-if="!$v.student.stu_mobile.required && $v.student.stu_mobile.$dirty"
                        >*Field is required</div>
                        <div
                            class="error"
                            v-if="!$v.student.stu_mobile.numeric && $v.student.stu_mobile.$dirty"
                        >*Invalid number</div>
                    </div>
                </div>
                <div class="inputText">
                    <div class="half">
                        <label for="password">Password</label>
                        <br />
                        <input
                            v-model.lazy="$v.student.stu_password.$model"
                            type="password"
                            name="password"
                            id="password"
                        />
                        <div
                            class="error"
                            v-if="!$v.student.stu_password.required && $v.student.stu_password.$dirty"
                        >*Field is required</div>
                        <div
                            class="error"
                            v-if="!$v.student.stu_password.minLength && $v.student.stu_password.$dirty"
                        >*Password must be at least 8 characters</div>
                    </div>
                    <div class="half">
                        <label for="confirmPwd">Confirm Password</label>
                        <br />
                        <input
                            v-model.lazy="$v.student.confirmPwd.$model"
                            type="password"
                            name="confirmPwd"
                            id="confirmPwd"
                        />
                        <div
                            class="error"
                            v-if="!$v.student.confirmPwd.required && $v.student.confirmPwd.$dirty"
                        >*Field is required</div>
                        <div
                            class="error"
                            v-if="!$v.student.confirmPwd.sameAsPassword && $v.student.confirmPwd.$dirty"
                        >*Password needs to be the same</div>
                    </div>
                </div>

                <div class="inputText">
                    <div class="half singleHalf">
                        <label for="dob">Date of birth</label>
                        <br />
                        <input
                            v-model.lazy="$v.student.stu_dob.$model"
                            type="date"
                            name="dob"
                            id="dob"
                        />

                        <div
                            class="error"
                            v-if="!$v.student.stu_dob.required && $v.student.stu_dob.$dirty"
                        >*Field is required</div>
                    </div>
                </div>
                <div class="inputText">
                    <div class="half">
                        <label for="faculty">Faculty</label>
                        <br />
                        <div class="select">
                            <select
                                v-model="student.stu_faculty"
                                name="stu_faculty"
                                id="stu_faculty"
                            >
                                <option value selected></option>
                                <option value="FASS">FASS</option>
                                <option value="Business">Business</option>
                                <option value="Computing">Computing</option>
                                <option value="Dentistry">Dentistry</option>
                                <option value="Design and Environment">Design and Environment</option>
                                <option value="Duke-NUS Medical Schoo">Duke-NUS Medical School</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Law">Law</option>
                                <option value="Medicine">Medicine</option>
                                <option value="Music">Music</option>
                                <option value="Public Health">Public Health</option>
                                <option value="Public Policy">Public Policy</option>
                                <option
                                    value="School of Continuing and Lifelong Education"
                                >School of Continuing and Lifelong Education</option>
                                <option value="Science">Science</option>
                                <option
                                    value="University Scholars Programme"
                                >University Scholars Programme</option>
                                <option value="Yale-NU">Yale-NUS</option>
                            </select>
                        </div>
                        <div
                            class="error"
                            v-if="!$v.student.stu_faculty.required && $v.student.stu_faculty.$dirty"
                        >*Field is required</div>
                    </div>
                    <div class="half">
                        <label for="degree">Degree</label>
                        <br />
                        <input
                            v-model.lazy="$v.student.stu_degree.$model"
                            type="text"
                            name="degree"
                            id="degree"
                        />
                        <div
                            class="error"
                            v-if="!$v.student.stu_degree.required && $v.student.stu_degree.$dirty"
                        >*Field is required</div>
                    </div>
                </div>
                <div class="inputText">
                    <div class="half year">
                        <label for="year">Current Year</label>
                        <br />
                        <input v-model.lazy="$v.student.stu_year.$model" type="text" name="year" />
                        <div
                            class="error"
                            v-if="!$v.student.stu_year.required && $v.student.stu_year.$dirty"
                        >*Field is required</div>
                        <div
                            class="error"
                            v-if="(!$v.student.stu_year.maxLength || !$v.student.stu_year.numeric) && $v.student.stu_year.$dirty"
                        >*Invalid year of study</div>
                    </div>

                    <div class="half">
                        <label for="linkedin">Linkedin link</label>
                        <br />
                        <input
                            v-model.lazy="$v.student.stu_linkedin.$model"
                            type="text"
                            name="linkedin"
                            id="linked"
                        />
                        <div
                            class="error"
                            v-if="!$v.student.stu_linkedin.required && $v.student.stu_linkedin.$dirty"
                        >*Field is required</div>
                    </div>
                </div>

                <div class="inputText">
                    <div>
                        <label>Resume</label>
                        <br />
                        <label for="resume" id="uploadFileInput">
                            <span id="uploadFileBtn">
                                <i class="fas fa-file-upload"></i> Upload file
                            </span>
                        </label>
                        <span v-bind:style="{ color : errorColor }">{{ fileName }}</span>
                        <br />
                        <input
                            type="file"
                            name="resume"
                            id="resume"
                            ref="file"
                            @change="selectFile"
                        />
                    </div>
                </div>
            </div>

            <div class="profile-img">
                <h5>Profile photo</h5>
                <img v-if="student.stu_picture" :src="url" alt="profile pic" />
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
                <p
                    class="statusMsg error"
                    v-if="submitStatus === 'ERROR'"
                >Please fill the form correctly.</p>
            </div>
        </form>
    </div>
</template>

<script>
import {
    required,
    maxLength,
    minLength,
    email,
    sameAs,
    numeric,
} from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
    name: "StudentRegister",
    data() {
        return {
            student: {
                stu_name: "",
                stu_id: "",
                stu_password: "",
                confirmPwd: "",
                stu_dob: "",
                stu_faculty: "",
                stu_degree: "",
                stu_year: "",
                stu_email: "",
                stu_mobile: "",
                stu_linkedin: "",
                stu_resume: null,
                stu_picture: null,
            },
            fileName: "",
            errorColor: "#000",
            url: null,
            submitStatus: null,
        };
    },
    validations: {
        student: {
            stu_name: {
                required,
            },
            stu_id: {
                required,
                maxLength: maxLength(9),
                verifyId(id) {
                    return /^[A-Z]\d{7}[A-Z]$/.test(id);
                },
            },
            stu_password: {
                required,
                minLength: minLength(8),
            },
            confirmPwd: {
                required,
                sameAsPassword: sameAs("stu_password"),
            },
            stu_dob: {
                required,
            },
            stu_faculty: {
                required,
            },
            stu_degree: {
                required,
            },
            stu_year: {
                required,
                maxLength: maxLength(1),
                numeric,
            },
            stu_email: {
                required,
                email,
            },
            stu_mobile: {
                required,
                numeric,
            },
            stu_linkedin: {
                required,
            },
        },
    },
    methods: {
        ...mapActions("students", ["addStudent"]),
        selectFile() {
            if (this.$refs.file.files[0].type.match("application.*")) {
                this.errorColor = "#000";
                this.student.stu_resume = this.$refs.file.files.item(0);
                console.log(this.student.stu_resume);
                this.fileName = this.student.stu_resume.name;
            } else {
                this.errorColor = "red";
                this.fileName =
                    "File type not supported. Only upload pdf/doc files.";
            }
        },
        selectPicture() {
            console.log(this.$refs.picture.files[0]);
            this.student.stu_picture = this.$refs.picture.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                this.url = e.target.result;
            };

            reader.readAsDataURL(this.$refs.picture.files[0]);
        },
        register() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = "ERROR";
            } else {
                const stu = new FormData();
                stu.append("stu_name", this.student.stu_name);
                stu.append("stu_id", this.student.stu_id);
                stu.append("stu_password", this.student.stu_password);
                stu.append("confirmPwd", this.student.confirmPwd);
                stu.append("stu_dob", this.student.stu_dob);
                stu.append("stu_faculty", this.student.stu_faculty);
                stu.append("stu_degree", this.student.stu_degree);
                stu.append("stu_year", this.student.stu_year);
                stu.append("stu_email", this.student.stu_email);
                stu.append("stu_mobile", this.student.stu_mobile);
                stu.append("stu_linkedin", this.student.stu_linkedin);
                stu.append("stu_resume", this.student.stu_resume);
                stu.append("stu_picture", this.student.stu_picture);

                console.log("registering");
                this.addStudent(stu)
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
                        }).then((value) => {
                            if (value === "close") this.$router.push("/");
                        });
                    })
                    .catch((err) => {
                        console.log(err.response.data.error);
                        this.$swal({
                            text: err.response.data.error,
                            buttons: {
                                close: {
                                    value: "close",
                                    text: "Close",
                                },
                            },
                            icon: "warning",
                        });
                    });
            }
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
        "info img"
        "btn btn";
    margin: 1em 0;
    border: 1px solid #e6e6e6;
    border-radius: 12px;
    padding: 2em;
}

.info-container {
    grid-area: info;
    margin-bottom: 1em;
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

.profile-img {
    margin: 0 0 0 1em;
    grid-area: img;
}

.profile-img img {
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

#picture {
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

span {
    font-size: 12px;
    display: inline-block;
}

#uploadFileBtn {
    cursor: pointer;
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

h5 {
    text-decoration: underline;
}

.singleHalf {
    width: 47%;
}

@media screen and (max-width: 1150px) {
    .parent-container {
        margin: 1em 8em 3em;
    }

    .profile-img {
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
        grid-template-rows: auto auto auto;
        grid-template-columns: auto;
        grid-template-areas:
            "img"
            "info"
            "btn";
    }

    .profile-img {
        grid-area: img;
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
    .profile-img {
        width: 40%;
    }
}
</style>