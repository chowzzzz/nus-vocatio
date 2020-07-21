<template>
    <div class="parent-container">
        <h2>Student Register</h2>
        <form class="input-container" @submit.prevent="register">
            <div class="info-container">
                <div class="inputText">
                    <div class="half">
                        <label for="email">NUS Email ID</label>
                        <br />
                        <input v-model="$v.stu_email.model" type="text" name="email" id="email" />
                    </div>
                    <div class="half">
                        <label for="studID">Student ID</label>
                        <br />
                        <input v-model="$v.stu_id.model" type="text" name="studID" id="studID" />
                    </div>
                </div>
                <div class="inputText">
                    <div class="half">
                        <label for="password">Password</label>
                        <br />
                        <input v-model="$v.stu_id.model" type="text" name="password" id="password" />
                    </div>
                    <div class="half">
                        <label for="confirmPwd">Confirm Password</label>
                        <br />
                        <input
                            v-model="$v.stu_id.model"
                            type="text"
                            name="confirmPwd"
                            id="confirmPwd"
                        />
                    </div>
                </div>
                <div class="inputText">
                    <div class="half">
                        <label for="name">Full Name</label>
                        <br />
                        <input v-model="$v.stu_name.model" type="text" name="name" id="name" />
                    </div>

                    <div class="half">
                        <label for="contact">Contact number</label>
                        <br />
                        <input
                            v-model="$v.stu_number.model"
                            type="text"
                            name="contact"
                            id="contact"
                        />
                    </div>
                </div>
                <div class="inputText">
                    <div class="half">
                        <label for="dob">Date of birth</label>
                        <br />
                        <input v-model="$v.stu_dob.model" type="date" name="dob" id="dob" />
                    </div>
                    <div class="half">
                        <label for="degree">Degree</label>
                        <br />
                        <input v-model="$v.stu_degree.model" type="text" name="degree" id="degree" />
                    </div>
                </div>
                <div class="inputText">
                    <div class="half year">
                        <label for="year">Current Year</label>
                        <br />
                        <input v-model="$v.stu_year.model" type="text" name="year" />
                    </div>

                    <div class="half">
                        <label for="linkedin">Linkedin link</label>
                        <br />
                        <input
                            v-model="$v.stu_linkedin.model"
                            type="text"
                            name="linkedin"
                            id="linked"
                        />
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
                <img v-if="selectedPicture" :src="url" alt="profile pic" />
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
            </div>
        </form>
    </div>
</template>

<script>
const { required, maxLength, helpers } = window.validators;

export default {
    name: "StudentRegister",
    data() {
        return {
            stu_name: "",
            stu_id: "",
            stu_dob: "",
            stu_degree: "",
            stu_year: "",
            stu_email: "",
            stu_number: "",
            stu_linkedin: "",
            selectedFile: null,
            fileName: "",
            errorColor: "#000",
            selectedPicture: null,
            url: null
        };
    },
    validations: {
        stu_name: {
            required
        },
        stu_id: {
            required,
            maxLength: maxLength(9)
        },
        stu_dob: {
            required
        },
        stu_degree: {
            required
        },
        stu_year: {
            required
        },
        stu_email: {
            required,
            email
        },
        stu_number: "",
        stu_linkedin: ""
    },
    methods: {
        selectFile() {
            if (this.$refs.file.files[0].type.match("application.*")) {
                this.errorColor = "#000";
                this.selectedFile = this.$refs.file.files[0];
                this.fileName = this.selectedFile.name;
            } else {
                this.errorColor = "red";
                this.fileName =
                    "File type not supported. Only upload pdf/doc files.";
            }
        },
        selectPicture() {
            this.selectedPicture = this.$refs.picture.files[0];
            const reader = new FileReader();
            reader.onload = e => {
                this.url = e.target.result;
            };

            reader.readAsDataURL(this.$refs.picture.files[0]);
        },
        register() {
            console.log("hi");
        }
    }
};
</script>

<style scoped>
h2 {
    text-align: center;
}

.parent-container {
    margin: 1em 4em 3em;
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
    /* border: 1px solid #b8b8b8; */
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
    width: 100%;
    box-sizing: border-box;
    font-size: 12x;
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

@media screen and (max-width: 1150px) {
    .profile-img {
        margin: 0;
    }
}

@media screen and (max-width: 900px) {
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
        width: 40%;
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
}
</style>