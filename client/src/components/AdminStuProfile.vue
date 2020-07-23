<template>
    <div class="form-container">
        <div class="input-container">
            <div class="info-container">
                <h3>Personal Information</h3>
                <div class="inputText">
                    <div class="half">
                        <label for="name">Full Name</label>
                        <br />
                        <input v-model="student.stu_name" type="text" name="name" id="name" />
                    </div>
                    <div class="half">
                        <label for="studID">Student ID</label>
                        <br />
                        <input v-model="student.stu_id" type="text" name="studID" id="studID" />
                    </div>
                </div>
                <div class="inputText">
                    <div class="half">
                        <label for="dob">Date of birth</label>
                        <br />
                        <input v-model="dob" type="date" name="dob" id="dob" />
                    </div>
                    <div class="half">
                        <label for="degree">Degree</label>
                        <br />
                        <input v-model="student.stu_degree" type="text" name="degree" id="degree" />
                    </div>
                </div>
                <div class="inputText">
                    <div class="half year">
                        <label for="year">Current Year</label>
                        <br />
                        <input v-model="student.stu_year" type="text" name="year" id="year" />
                    </div>
                </div>
            </div>

            <div class="contact-container">
                <h3>Contact Information</h3>
                <div class="inputText">
                    <div class="half">
                        <label for="email">Email</label>
                        <br />
                        <input v-model="student.stu_email" type="email" name="email" id="email" />
                    </div>
                    <div class="half">
                        <label for="contact">Contact number</label>
                        <br />
                        <input v-model="student.stu_mobile" type="text" name="contact" id="contact" />
                    </div>
                </div>
                <div class="inputText">
                    <div class="half">
                        <label>Resume</label>
                        <br />
                        <label for="resume" id="uploadFileInput">
                            <span id="uploadFileBtn">
                                <i class="fas fa-file-upload"></i> Upload file
                            </span>
                        </label>
                        <br />
                        <input type="file" name="resume" id="resume" />
                    </div>
                    <div class="half link">
                        <label for="linkedin">Linkedin link</label>
                        <br />
                        <input
                            v-model="student.stu_linkedin"
                            type="text"
                            name="linkedin"
                            id="linked"
                        />
                    </div>
                </div>
            </div>

            <div class="profile-img">
                <h5>Profile photo</h5>
                <img v-if="image" :src="image" alt="profile pic" />

                <button class="uploadBtn">
                    Upload
                    <i class="fas fa-camera"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
export default {
    name: "AdminStuProfile",
    props: ["student"],
    computed: {
        dob() {
            return moment(String(this.student.stu_dob)).format("YYYY-MM-DD");
        },
        image() {
            console.log(this.student.stu_picture);
            return (
                "data:image/jpeg;base64," +
                btoa(
                    this.student.stu_picture.data
                        .map((b) => String.fromCharCode(b))
                        .join("")
                )
            );
        },
    },
};
</script>

<style scoped>
.input-container {
    display: grid;
    grid-template-columns: auto 20%;
    grid-template-rows: auto auto;
    grid-template-areas: "info img" "contact img";
    margin-bottom: 1em;
}

.info-container {
    grid-area: info;
    margin-bottom: 1em;
}

.contact-container {
    grid-area: contact;
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

.year {
    width: 47%;
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
    display: none;
    position: absolute;
}

.uploadBtn {
    position: relative;
}
#uploadFileInput {
    padding: 0.6em 1em;
    margin: 0.5em 1em 0.5em 0;
    border: 1px solid #b8b8b8;
    border-radius: 12px;
    text-align: left;
    box-sizing: border-box;
    font-size: 12px;
    position: absolute;
}

span {
    font-size: 12px;
    display: inline-block;
}

#uploadFileBtn {
    cursor: pointer;
}

@media screen and (max-width: 1150px) {
    .profile-img {
        margin: 0;
    }
}

@media screen and (max-width: 900px) {
}

@media screen and (max-width: 700px) {
}

@media screen and (max-width: 570px) {
    .input-container {
        display: grid;
        grid-template-rows: auto auto auto;
        grid-template-columns: auto;
        grid-template-areas:
            "img"
            "info"
            "contact";
    }

    .profile-img {
        grid-area: img;
        width: 30%;
        padding-bottom: 1em;
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
        text-align: center;
        justify-self: center;
        width: 40%;
    }
}
</style>