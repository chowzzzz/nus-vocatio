<template>
    <div class="form-container">
        <h3>Company Information</h3>
        <div class="input-container">
            <div class="company-container">
                <div class="inputText">
                    <div class="half">
                        <label for="coName">Company Name</label>
                        <br />
                        <input v-model="employer.companyName" type="text" name="coName" id="coName" />
                        <br />
                    </div>
                    <div class="half">
                        <label for="coRegNo">Company Reg. No.</label>
                        <br />
                        <input v-model="employer.coRegNo" type="text" name="coRegNo" id="coRegNo" />
                        <br />
                    </div>
                </div>
                <div class="inputText">
                    <div class="half">
                        <label for="coNo">Company No.</label>
                        <br />
                        <input v-model="employer.coNo" type="text" name="coNo" id="coNo" />
                        <br />
                    </div>
                    <div class="half">
                        <label for="coEmail">Company Email</label>
                        <br />
                        <input v-model="employer.coEmail" type="email" name="coEmail" id="coEmail" />
                        <br />
                    </div>
                </div>
                <div class="inputText">
                    <div class="full">
                        <label for="coAdd">Company Address</label>
                        <br />
                        <input v-model="employer.coAdd" type="text" name="coAdd" id="coAdd" />
                        <br />
                    </div>
                </div>
                <div class="inputText">
                    <div class="half">
                        <label for="coCountry">Country</label>
                        <br />
                        <input
                            v-model="employer.coCountry"
                            type="text"
                            name="coCountry"
                            id="coCountry"
                        />
                        <br />
                    </div>
                    <div class="half">
                        <label for="coWeb">Company Website</label>
                        <br />
                        <input v-model="employer.coDesc" type="text" name="coWeb" id="coWeb" />
                    </div>
                </div>
            </div>

            <div class="coLogo">
                <h5>Company Logo</h5>
                <img :src="require(`../assets/${employer.coLogo}`)" alt="company logo" />
                <button class="uploadBtn">
                    Upload
                    <i class="fas fa-camera"></i>
                </button>
            </div>

            <div class="coDesc">
                <label for="coDesc">Company Description</label>
                <br />
                <textarea v-model="employer.website" name="coDesc" id="coDesc" rows="10"></textarea>
            </div>
        </div>

        <h3>Employer Information</h3>
        <div class="input-container">
            <div class="employer-container">
                <div class="inputText">
                    <div class="half">
                        <label for="empName">Name</label>
                        <br />
                        <input v-model="employer.name" type="text" name="empName" id="empName" />
                        <br />
                    </div>
                    <div class="half">
                        <label for="salutation">Title/Salutation</label>
                        <br />
                        <div class="select">
                            <select v-model="employer.salutation" name="salutation" id="salutation">
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
                            v-model="employer.contactNo"
                            type="text"
                            name="empContactNo"
                            id="empContactNo"
                        />
                        <br />
                    </div>
                    <div class="half">
                        <label for="empEmail">Email</label>
                        <br />
                        <input v-model="employer.email" type="email" name="empEmail" id="empEmail" />
                        <br />
                    </div>
                </div>
                <div class="inputText">
                    <div class="half" id="link">
                        <label for="empLinkedIn">LinkedIn Link</label>
                        <br />
                        <input
                            v-model="employer.linkedin"
                            type="text"
                            name="empLinkedIn"
                            id="empLinkedIn"
                        />
                        <br />
                    </div>
                </div>
            </div>

            <div class="empLogo">
                <h5>Profile Photo</h5>
                <img :src="require(`../assets/${employer.avatar}`)" alt="profile photo" />
                <button class="uploadBtn">
                    Upload
                    <i class="fas fa-camera"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmployerProfileComp",
    props: ["employer"]
};
</script>

<style scoped>
.input-container {
    display: grid;
    grid-template-columns: auto 20%;
    grid-template-rows: auto;
    margin-bottom: 1em;
    margin-top: 0.8em;
}

.inputText {
    display: flex;
    margin-right: 1em;
    margin-bottom: 0.5em;
}

h3 {
    text-decoration: underline;
}

.half {
    width: 50%;
    margin-right: 1em;
}

#link {
    width: 47%;
}

.full {
    width: 100%;
    margin-right: 1em;
}

.coLogo,
.empLogo {
    margin: 0 0 0 1em;
}

.coLogo img,
.empLogo img {
    width: 100%;
    /* border: 1px solid #b8b8b8; */
    margin-top: 0.5em;
}

.coDesc {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
}

@media screen and (max-width: 1150px) {
    .coLogo,
    .empLogo {
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
            "inputs"
            "desc";
    }

    .coLogo,
    .empLogo {
        grid-area: img;
        width: 30%;
        padding-bottom: 1em;
    }

    .inputText {
        margin: 0;
    }

    .company-container {
        grid-area: inputs;
    }

    .coDesc {
        grid-area: desc;
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
    .empLogo {
        text-align: center;
        justify-self: center;
        width: 40%;
    }
}
</style>