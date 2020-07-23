<template>
    <div v-if="post" class="form-container">
        <div class="input-container">
            <div class="left">
                <label for="job-title">Job Designation</label>
                <br />
                <input v-model="post.post_title" type="text" name="job-title" id="job-title" />
                <br />

                <label for="industry">Industry</label>
                <br />
                <div class="select">
                    <select v-model="post.post_industry" name="industry" id="industry">
                        <option value="default" selected></option>
                        <option value="Aerospace">Aerospace</option>
                        <option value="Consumer Business">Consumer Business</option>
                        <option value="Creative Industries">Creative Industries</option>
                        <option value="Education">Education</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Energy &amp; Chemicals">Energy &amp; Chemicals</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Healthcare">Healthcare</option>
                        <option
                            value="Information &amp; Communications Technology"
                        >Information &amp; Communications Technology</option>
                        <option value="Law">Law</option>
                        <option
                            value="Logistics &amp; Supply Chain Management"
                        >Logistics &amp; Supply Chain Management</option>
                        <option
                            value="Oil &amp; Gas Equipment and Services"
                        >Oil &amp; Gas Equipment and Services</option>
                        <option value="Medical Technology">Medical Technology</option>
                        <option value="Natural Resources">Natural Resources</option>
                        <option
                            value="Pharmaceuticals and Biotechnology"
                        >Pharmaceuticals and Biotechnology</option>
                        <option value="Professional Services">Professional Services</option>
                        <option value="Transport">Transport</option>
                        <option
                            value="Urban Solutions &amp; Sustainability"
                        >Urban Solutions &amp; Sustainability</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <label for="salary">Salary amount</label>
                <br />
                <input
                    v-model.number="post.post_pay"
                    type="number"
                    name="salary"
                    id="salary"
                    min="0.00"
                    step="1"
                    max="10000.00"
                />
                <br />

                <label for="max">Max. no. of applicants</label>
                <br />
                <input
                    v-model="post.post_max_applicants"
                    type="number"
                    name="max"
                    id="max"
                    min="1"
                    step="1"
                />
                <br />
            </div>

            <div class="right">
                <label for="type">Type of job</label>
                <br />
                <div class="select">
                    <select v-model="post.post_type" name="type" id="type">
                        <option value="default" selected></option>
                        <option value="Internship">Internship</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Research studies">Research studies</option>
                        <option value="Surveys">Surveys</option>
                    </select>
                </div>

                <label for="faculty">Faculty</label>
                <br />
                <div class="select">
                    <select v-model="post.post_faculty" name="faculty" id="faculty">
                        <option value="default" selected></option>
                        <option value="FASS">FASS</option>
                        <option value="Business">Business</option>
                        <option value="Computing">Computing</option>
                        <option value="Dentistry">Dentistry</option>
                        <option value="Design and Environment">Design and Environment</option>
                        <option value="Duke-NUS Medical School">Duke-NUS Medical School</option>
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
                        <option value="University Scholars Programme">University Scholars Programme</option>
                        <option value="Yale-NUS">Yale-NUS</option>
                    </select>
                </div>

                <label>Contract Terms</label>
                <label for="contract" id="uploadFileInput">
                    <span id="uploadFileBtn">
                        <i class="fas fa-file-upload"></i> Upload file
                    </span>
                </label>
                <br />
                <input type="file" name="contract" id="contract" />
                <br />

                <label for="expiry">Apply by:</label>
                <br />
                <input v-model="post.post_expiry" type="date" name="expiry" id="expiry" />
                <br />
            </div>
        </div>

        <label for="shortdesc">Short Job Description</label>
        <br />
        <textarea v-model="post.post_short_des" name="shortdesc" id="shortdesc" rows="5"></textarea>
        <br />
        <label for="desc">Job Description</label>
        <br />
        <textarea v-model="post.post_long_des" name="desc" id="desc" cols="50" rows="10"></textarea>
        <br />
        <label for="requirements">Job Requirements</label>
        <br />
        <textarea
            v-model="post.post_requirements"
            name="requirements"
            id="requirements"
            cols="50"
            rows="10"
        ></textarea>
        <br />
    </div>
</template>

<script>
import moment from "moment";

export default {
    name: "JobForm",
    data() {
        let jobID = "";

        if (this.$route.params.jobID !== undefined) {
            jobID = this.$route.params.jobID;
        }
        return {
            jobID: jobID,
        };
    },
    computed: {
        post() {
            let post = {
                post_title: "",
                post_industry: "",
                post_pay: "",
                post_max_applicants: "",
                post_type: "",
                post_faculty: "",
                post_short_des: "",
                post_long_des: "",
                post_expiry: "",
                post_requirements: "",
            };

            if (this.$route.params.jobID !== undefined) {
                const jobpost = this.$store.getters.getJobById(
                    this.$route.params.jobID
                );
                console.log(jobpost);
                post.post_title = jobpost.post_title;
                post.post_industry = jobpost.post_industry;
                post.post_pay = jobpost.post_pay;
                post.post_max_applicants = jobpost.post_max_applicants;
                post.post_type = jobpost.post_type;
                post.post_faculty = jobpost.post_faculty;
                post.post_short_des = jobpost.post_short_des;
                post.post_long_des = jobpost.post_long_des;
                post.post_expiry = moment(String(jobpost.post_expiry)).format(
                    "YYYY-MM-DD"
                );
                post.post_requirements = jobpost.post_requirements.split("\\n");
                post.post_requirements.pop();
                console.log(post.post_expiry);
            }

            return post;
        },
    },
};
</script>

<style scoped>
.form-container {
    margin: 1em 0;
    padding: 1.5em 4em;
    background: #fff;
    border-radius: 25px;
}

label {
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    color: #464646;
    font-size: 14px;
}

.input-container {
    display: flex;
    margin-bottom: 1em;
}

.left {
    margin-right: 2em;
}

input,
textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 0.5em 0.8em;
    margin: 0 0 0.5em;
    border: 1px solid #b8b8b8;
    border-radius: 12px;
    font-size: 80%;
    font-family: "Open Sans", sans-serif;
}

input:focus,
textarea:focus {
    outline: none;
}

input[type="date"] {
    font-family: "Open sans", sans-serif;
}

input[type="file"] {
    display: none;
}

#uploadFileInput {
    float: left;
    padding: 0.6em 0.8em;
    margin: 0 0 0.5em;
    border: 1px solid #b8b8b8;
    border-radius: 12px;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
}

#uploadFileBtn {
    float: right;
    cursor: pointer;
}

.select {
    overflow: hidden;
    width: 100%;
}

.select select {
    display: inline-block;
    width: 100%;
    cursor: pointer;
    padding: 0.6em 0.8em;
    padding-right: 3em;
    margin: 0 0 0.5em;
    outline: 0;
    border: 0;
    border-radius: 12px;
    border: 1px solid #b8b8b8;
    color: #5c5c5c;
    font-family: "Open Sans", sans-serif;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url("../assets/down.svg") 95% / 4% #ffffff no-repeat;
    transition-duration: 0.4s;
}

.select select::-ms-expand {
    display: none;
}

.select select:hover,
.select select:focus {
    color: #000;
    background: url("../assets/down.svg") 95% / 4% #ffffff no-repeat;
}

.select select:disabled {
    opacity: 0.5;
    pointer-events: none;
}

.select__arrow {
    position: absolute;
    top: 16px;
    right: 15px;
    width: 0;
    height: 0;
    pointer-events: none;
    border-style: solid;
    border-width: 8px 5px 0 5px;
    border-color: #7b7b7b transparent transparent transparent;
}
.select select:hover ~ .select__arrow,
.select select:focus ~ .select__arrow {
    border-top-color: #000;
}
.select select:disabled ~ .select__arrow {
    border-top-color: #ccc;
}

textarea {
    width: 100%;
    resize: none;
}

@media screen and (max-width: 900px) {
    .form-container {
        padding: 1.5em 2em;
    }
}

@media screen and (max-width: 570px) {
    .form-container {
        padding: 1em 2.5em;
    }

    .input-container {
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto;
    }

    label {
        font-size: 12px;
    }

    input,
    textarea,
    select,
    #uploadFileInput {
        font-size: 11px;
    }

    .left {
        margin: 0;
    }

    input {
        margin-bottom: 0.8em;
    }
}

@media screen and (max-width: 450px) {
    .form-container {
        padding: 1em 2em;
        border-radius: 0;
    }
}
</style>