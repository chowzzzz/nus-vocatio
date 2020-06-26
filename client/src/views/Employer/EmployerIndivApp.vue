<template>
    <div>
        <back-btn title="applicants" />

        <div class="container">
            <div class="prevNext" id="prev">
                <router-link to="/">
                    <img src="../../assets/left.svg" alt="previous" />
                </router-link>
            </div>

            <div class="stu-container">
                <div class="stu-title">
                    <div class="stu-img">
                        <img src="../../assets/selfmade/avatar.svg" alt="avatar" />
                    </div>
                    <div class="stu-tags">
                        <p id="app-id">Application ID#{{ application.appID }}</p>
                        <p
                            id="status"
                            v-bind:class="{
                            green: application.status === 'ACCEPTED',
                            blue: application.status === 'PENDING',
                            grey: application.status === 'REJECTED'}"
                        >{{ application.status }}</p>
                    </div>
                    <div class="stu-name">
                        <h2>{{ student.name }}</h2>
                        <p>Student ID: {{ student.stuID }}</p>
                    </div>
                </div>

                <div class="stu-info">
                    <h4>Personal Information</h4>
                    <p>D.O.B.: {{ student.dob | formatDate }}</p>
                    <p>Degree: {{ student.degree }}</p>
                    <p>Current year: {{ student.year }}</p>
                </div>

                <div class="stu-contact">
                    <h4>Contact Information</h4>
                    <p>Phone no.: {{ student.number }}</p>
                    <p>Email: {{ student.email }}</p>
                </div>

                <div class="links">
                    <h4>Resume and Links</h4>
                    <p>
                        Resume: file.pdf
                        <span class="uploadFileBtn">
                            <i class="fas fa-file-upload"></i>
                        </span>
                    </p>
                    <p>
                        LinkedIn Link:
                        <a href="www.linkedin.com">{{ student.linkedIn }}</a>
                    </p>
                </div>

                <div class="btns">
                    <button id="acceptBtn">Accept</button>
                    <button>Reject</button>
                </div>
            </div>

            <div class="prevNext" id="next">
                <router-link to="/">
                    <img src="../../assets/left.svg" alt="next" />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import BackBtn from "../../components/BackBtn.vue";
export default {
    name: "EmployerIndivApp",
    components: {
        BackBtn
    },
    data() {
        const appID = this.$route.query.appID;
        const application = this.$store.getters.getAppById(appID);

        const stuID = this.$route.params.stuID;
        const student = this.$store.getters.getStuById(stuID);
        return {
            application: application,
            student: student
        };
    },
    beforeCreate() {
        document.body.className = "bg";
    }
};
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: auto auto auto;
    margin: 2em auto 3em;
}

.prevNext img {
    width: 15px;
    margin-top: 1em;
}

#prev {
    justify-self: end;
}

#next img {
    transform: rotate(180deg);
}

.stu-container {
    background: white;
    padding: 2em 3em;
    margin: 0 2em;
    display: grid;
    grid-template-columns: auto 300px;
    grid-template-rows: 110px auto auto;
    grid-template-areas:
        "title title"
        "info links"
        "contact btns";
}

.stu-title {
    grid-area: title;
    display: grid;
    grid-template-columns: 130px auto;
    grid-template-rows: 40px auto;
    grid-template-areas:
        "img tags"
        "img name";
}

.stu-img {
    grid-area: img;
}

.stu-img img {
    width: 110px;
}

.stu-tags {
    grid-area: tags;
    display: flex;
    flex-wrap: wrap;
}

#app-id,
#status {
    margin-right: 0.8em;
    margin-bottom: 0.8em;
    border: none;
    padding: 0.2em 1em;
    border-radius: 25px;
    outline: none;
    transition-duration: 0.4s;
    cursor: pointer;
}

#app-id {
    background: #f2f2f2;
    color: #a3a3a3;
}

.grey {
    background: #a3a3a3;
    color: #eceff3;
}

.green,
#acceptBtn {
    background: #d6ead6;
    color: #5a845a;
}

.blue {
    background: #c1e2f5;
    color: #2b839e;
}

.stu-name {
    grid-area: name;
}

.stu-info {
    grid-area: info;
    padding: 1em 0 1.5em;
}

.stu-contact {
    grid-area: contact;
}

h4 {
    margin-bottom: 0.3em;
}

.links {
    grid-area: links;
}

.btns {
    display: flex;
    flex-wrap: wrap;
    grid-area: btns;
    justify-self: center;
    align-self: center;
}

.btns button {
    margin: 0.5em 0;
    border: none;
    padding: 1em;
    border-radius: 12px;
    outline: none;
    background: #f2dadd;
    color: #af6675;
    transition-duration: 0.4s;
    cursor: pointer;
    font-weight: bold;
    width: 300px;
    font-size: 80%;
}

.btns button:hover {
    background-color: #d398a5;
    color: #fff;
}

#acceptBtn:hover {
    background: #78aa78;
    color: #fff;
}
</style>