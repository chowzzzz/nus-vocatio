<template>
    <div class="form-container">
        <div class="input-container">
            <div class="left">
                <label for="job-title">Job Designation</label>
                <br />
                <input type="text" name="job-title" id="job-title" />
                <br />

                <label for="industry">Industry</label>
                <br />
                <div class="select">
                    <select name="industry" id="industry">
                        <option value="default" selected></option>
                        <option value="aerospace">Aerospace</option>
                        <option value="consumerbiz">Consumer Business</option>
                        <option value="creative">Creative Industries</option>
                        <option value="edu">Education</option>
                        <option value="electronics">Electronics</option>
                        <option value="energy">Energy &amp; Chemicals</option>
                        <option value="engin">Engineering</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="IT">Information &amp; Communications Technology</option>
                        <option value="law">Law</option>
                        <option value="logistics">Logistics &amp; Supply Chain Management</option>
                        <option value="oil">Oil &amp; Gas Equipment and Services</option>
                        <option value="medicalTech">Medical Technology</option>
                        <option value="naturalResources">Natural Resources</option>
                        <option value="pharm">Pharmaceuticals and Biotechnology</option>
                        <option value="services">Professional Services</option>
                        <option value="transport">Transport</option>
                        <option value="sustainability">Urban Solutions &amp; Sustainability</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <label for="department">Division/Department</label>
                <br />
                <input type="text" name="department" id="department" />
                <br />

                <label for="salary">Salary amount</label>
                <br />
                <input type="number" name="salary" id="salary" min="0.00" step="1" max="10000.00" />
                <br />

                <label for="max">Max. no. of applicants</label>
                <br />
                <input type="number" name="max" id="max" min="1" step="1" />
                <br />
            </div>

            <div class="right">
                <label for="type">Type of job</label>
                <br />
                <div class="select">
                    <select name="type" id="type">
                        <option value="default" selected></option>
                        <option value="all">All types</option>
                        <option value="internship">Internship</option>
                        <option value="parttime">Part-time</option>
                        <option value="research">Research studies</option>
                        <option value="surveys">Surveys</option>
                    </select>
                </div>

                <label for="faculty">Faculty</label>
                <br />
                <div class="select">
                    <select name="faculty" id="faculty">
                        <option value="default" selected></option>
                        <option value="fass">FASS</option>
                        <option value="ba">Business</option>
                        <option value="soc">Computing</option>
                        <option value="soc">Dentistry</option>
                        <option value="sde">Design and Environment</option>
                        <option value="sde">Duke-NUS Medical School</option>
                        <option value="engin">Engineering</option>
                        <option value="law">Law</option>
                        <option value="med">Medicine</option>
                        <option value="music">Music</option>
                        <option value="publicHealth">Public Health</option>
                        <option value="publicPolicy">Public Policy</option>
                        <option value="scle">School of Continuing and Lifelong Education</option>
                        <option value="fos">Science</option>
                        <option value="usp">University Scholars Programme</option>
                        <option value="yale">Yale-NUS</option>
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
                <input type="date" name="expiry" id="expiry" />
                <br />
            </div>
        </div>

        <label for="shortdesc">Short Job Description</label>
        <br />
        <textarea name="shortdesc" id="shortdesc" rows="5"></textarea>
        <br />
        <label for="desc">Job Description</label>
        <br />
        <textarea name="desc" id="desc" cols="50" rows="10"></textarea>
        <br />
        <label for="requirements">Job Requirements</label>
        <br />
        <textarea name="requirements" id="requirements" cols="50" rows="10"></textarea>
        <br />
    </div>
</template>

<script>
export default {
    name: "JobForm"
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