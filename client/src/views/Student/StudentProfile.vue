<template>
    <div class="profile">
        <form enctype="multipart/form-data" @submit.prevent>
            <div v-if="student" class="profile-info">
                <h1>Hello, {{ student.stu_name }}</h1>
                <div class="profile-img">
                    <img :src="student.stu_picture" alt="student profile picture" />
                    <button class="uploadBtn mobile-hide">
                        Upload
                        <i class="fas fa-camera"></i>
                    </button>
                    <button class="mobile-show">
                        <i class="fas fa-camera"></i>
                    </button>
                </div>

                <div class="personal-info">
                    <form>
                        <h4>Personal Information</h4>
                        <label for="name">Full name</label>
                        <br />
                        <input v-model="student.stu_name" type="text" name="name" id="name" />
                        <br />

                        <label for="studID">Student ID</label>
                        <br />
                        <input v-model="student.stu_id" type="text" name="studID" id="studID" />
                        <br />

                        <label for="dob">Date of birth</label>
                        <br />
                        <input v-model="dob" type="date" name="dob" id="dob" />
                        <br />

                        <label for="degree">Degree</label>
                        <br />
                        <input v-model="student.stu_degree" type="text" name="degree" id="degree" />
                        <br />

                        <label for="year">Current Year</label>
                        <br />
                        <input v-model="student.stu_year" type="text" name="year" id="year" />
                        <br />

                        <h4>Contact Information</h4>
                        <label for="email">Email</label>
                        <br />
                        <input v-model="student.stu_email" type="email" name="email" id="email" />
                        <br />

                        <label for="contact">Contact number</label>
                        <br />
                        <input v-model="student.stu_mobile" type="text" name="contact" id="contact" />
                        <br />

                        <h4>Resume and links</h4>
                        <label>Resume file</label>
                        <br />
                        <label for="resume" id="uploadFileInput">
                            <span id="uploadFileBtn">
                                <i class="fas fa-file-upload"></i> Upload file
                            </span>
                        </label>
                        <br />
                        <input type="file" name="resume" id="resume" />
                        <br />

                        <label for="linkedin">Linkedin link</label>
                        <br />
                        <input
                            v-model="student.stu_linkedin"
                            type="text"
                            name="linkedin"
                            id="linked"
                        />
                        <br />

                        <button type="submit" class="updateBtn">Update Information</button>
                    </form>
                </div>

                <div class="side">
                    <div class="pwd">
                        <h4>Password Management</h4>
                        <label for="oldPwd">Old Password</label>
                        <br />
                        <input type="password" name="oldPwd" id="oldPwd" placeholder="Old password" />
                        <label for="newPwd">New Password</label>
                        <br />
                        <input type="password" name="newPwd" id="newPwd" placeholder="New password" />

                        <button type="submit" class="updateBtn">Update Password</button>
                    </div>
                    <!-- <div class="status">
                    <h4>Current status</h4>
                    </div>-->
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";

export default {
    name: "StudentProfile",
    computed: {
        ...mapGetters("students", ["getStuById"]),
        student() {
            // change this
            const student = this.getStuById(30);
            /* if (
                student !== undefined &&
                student.stu_picture.data !== undefined
            ) {
                // change this
                student.stu_picture =
                    "data:image/jpeg;base64," +
                    btoa(
                        student.stu_picture.data
                            .map((b) => String.fromCharCode(b))
                            .join("")
                    );
            } */
            return student;
        },
        dob() {
            return moment(String(this.student.stu_dob)).format("YYYY-MM-DD");
        },
    },
    /* watch: {
        student: function (loadedStudent) {
            loadedStudent.forEach((student) => {
                // change this
                student.stu_picture =
                    "data:image/jpeg;base64," +
                    btoa(
                        student.stu_picture.data
                            .map((b) => String.fromCharCode(b))
                            .join("")
                    );
            });
        },
    }, */
};
</script>

<style scoped>
.profile {
    display: flex;
    justify-content: center;
    margin: 2em 3em 3em;
}

.profile-info {
    display: grid;
    grid-template-columns: 20% 28em auto;
    grid-template-rows: 60px auto;
    grid-template-areas:
        "title title title"
        "img info pwd";
}

h1 {
    grid-area: title;
}

.profile-img {
    margin-right: 0.5em;
    grid-area: img;
}

.profile-img img {
    width: 100%;
}

.personal-info,
.pwd,
.status {
    border: 1px solid #b8b8b8;
    padding: 1em 2em;
    text-align: center;
}

.pwd {
    margin-bottom: 1em;
}

.personal-info {
    margin: 0 1em;
    grid-area: info;
}

.side {
    margin-left: 0.5em;
    grid-area: pwd;
}

h4 {
    text-align: left;
    margin: 0.3em 0;
    color: #979797;
    font-size: 14px;
}

label {
    float: left;
    color: #b8b8b8;
    font-size: 12px;
    margin: 5px 0;
}

input {
    width: 100%;
    box-sizing: border-box;
    padding: 0.5em;
    margin: 0 0 0.5em;
    border: 1px solid #b8b8b8;
    border-radius: 5px;
}

input:focus {
    outline: none;
}

::placeholder {
    color: #b8b8b8;
    opacity: 1;
    font-size: 12px;
}

input[type="date"] {
    font-family: "Open sans", sans-serif;
}

input[type="file"] {
    display: none;
}

#uploadFileInput {
    padding: 0.5em;
    margin: 0 0 0.5em;
    border: 1px solid #b8b8b8;
    border-radius: 5px;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
    font-size: 12x;
}

#uploadFileBtn {
    float: right;
    cursor: pointer;
}

@media screen and (max-width: 1150px) {
    .profile-info {
        grid-template-columns: 20% 41% 39%;
    }

    .personal-info,
    .pwd,
    .status {
        padding: 1em 1.5em;
    }

    input {
        border: 0.5px solid #b8b8b8;
    }
}

@media screen and (max-width: 800px) {
    .profile-info {
        grid-template-columns: 250px auto;
        grid-template-rows: 40px 300px auto;
        grid-template-areas:
            "title title"
            "img info"
            "pwd info";
    }

    h1 {
        font-size: 1.5em;
    }

    .profile-img {
        margin: 0;
    }

    .personal-info,
    .pwd,
    .status {
        border: 0.5px solid #b8b8b8;
        padding: 1em 1.2em;
    }

    .side {
        margin: 1em 0 0;
        grid-area: pwd;
    }
}

@media screen and (max-width: 650px) {
    .profile-info {
        grid-template-columns: 200px auto;
        grid-template-rows: 40px 250px auto;
    }
}

@media screen and (max-width: 570px) {
    .profile-info {
        grid-template-columns: auto;
        grid-template-rows: auto auto auto auto;
        grid-template-areas:
            "img"
            "title"
            "info"
            "pwd";
    }

    .profile-img {
        width: 50%;
        justify-self: center;
    }

    .profile-img img {
        border-radius: 50%;
        z-index: 1;
    }

    .profile-img .mobile-show {
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

    h1 {
        text-align: center;
        margin: 0.5em 0 0.8em;
        font-size: 1.4em;
    }

    .fa-camera {
        color: #af6675;
    }

    .personal-info,
    .side {
        margin: 0 0 1em;
    }
}
</style>