<template>
    <div>
        <button id="backBtn" @click="$router.go(-1)">
            <img src="../../assets/left.svg" alt="back button" /> Back to jobs
        </button>
        <div class="job-container">
            <div class="img-box job-title">
                <img :src="require(`../../assets/selfmade/${employer.logo}`)" alt="company logo" />
            </div>
            <div class="job-main-title-container job-title">
                <h1>{{ job.title }}</h1>
                <p>{{ employer.companyName }}</p>
                <p class="filters">
                    <span id="type">{{ job.type }}</span>
                    <span id="faculty">{{ job.faculty }}</span>
                </p>
            </div>

            <div class="job-side-title-container job-title">
                <p id="salary" v-if="job.salary != null">Salary: {{ job.salary }}</p>
                <a href="#">Contract Term</a>
            </div>

            <div class="job-description-container">
                <h3>Job description</h3>
                <p id="desc">{{ job.description }}</p>
                <h3>Requirements</h3>
                <ul>
                    <li
                        v-for="requirement in job.requirements"
                        :key="requirement.req"
                    >{{ requirement.req }}</li>
                </ul>
            </div>

            <employerContact />
        </div>
    </div>
</template>

<script>
import EmployerContact from "../../components/EmployerContactSideMenu.vue";

export default {
    name: "StudentJobListing",
    components: {
        employerContact: EmployerContact
    },
    data() {
        const job = this.$store.getters.getJobById(this.$route.params.jobId);
        return {
            job: job,
            employer: this.$store.getters.getEmpById(job.empID)
        };
    }
};
</script>


<style scoped>
#backBtn {
    margin: 2em 3em 0;
    border: none;
    padding: 0.5em 1em;
    border-radius: 25px;
    outline: none;
    background: #d0e1eb;
    color: #2b839e;
    transition-duration: 0.4s;
    cursor: pointer;
}

#backBtn:hover {
    background-color: #47a1bd;
    color: #fff;
}

#backBtn img {
    padding-top: 3px;
    width: 10px;
    border: none;
}

.job-container {
    margin: 1.5em 3em;
}

p,
li {
    margin: 0;
    font-size: 0.9em;
}

.job-container {
    display: grid;
    grid-template-columns: 110px 45% 150px auto;
    grid-template-rows: 90px auto;
    grid-template-areas:
        "img title side contact"
        "desc desc desc contact";
}

.job-title {
    justify-self: start;
}

.img-box img {
    width: 80%;
    border: 1px solid #b8b8b8;
}

.img-box {
    grid-area: img;
}

.job-main-title-container {
    grid-area: title;
}

h1 {
    font-size: 1.8em;
}

.job-side-title-container {
    grid-area: side;
    text-align: right;
    justify-self: end;
    margin: 0 1em 0 0;
}

#salary {
    font-size: 1em;
    font-weight: 600;
}

.job-description-container {
    grid-area: desc;
    margin: 2em 1em;
}

h3 {
    margin-bottom: 0.5em;
    font-size: 1.1em;
}

#desc {
    margin-bottom: 1.5em;
}

ul {
    margin-left: 1em;
}

.filters {
    margin-top: 0.5em;
}

#type,
#faculty {
    margin-right: 0.8em;
    border: none;
    padding: 0.2em 1em;
    border-radius: 25px;
    outline: none;
    transition-duration: 0.4s;
    cursor: pointer;
}

#type {
    background: #d6ead6;
    color: #5a845a;
}

#faculty {
    background: #d0e1eb;
    color: #2b839e;
}

@media screen and (max-width: 1150px) {
    .job-container {
        grid-template-columns: 110px 60% auto;
        grid-template-rows: 90px auto auto;
        grid-template-areas:
            "img title side"
            "desc desc desc"
            "contact contact contact";
    }
}

@media screen and (max-width: 800px) {
    .job-container {
        grid-template-columns: 100px 55% auto;
        grid-template-rows: 65px auto auto;
    }

    h1 {
        font-size: 1.4em;
    }

    h3 {
        font-size: 1em;
    }

    .img-box img {
        width: 75%;
    }

    #salary {
        font-size: 0.9em;
    }

    p,
    li,
    a {
        font-size: 0.8em;
    }
}

@media screen and (max-width: 570px) {
    .job-container {
        grid-template-columns: 80px auto;
        grid-template-rows: 80px auto auto auto;
        grid-template-areas:
            "img title"
            "side side"
            "desc desc"
            "contact contact";
        margin: 1.5em 2em;
    }

    #backBtn {
        display: none;
    }

    .job-side-title-container {
        text-align: left;
        justify-self: start;
    }

    .job-description-container {
        margin: 1em 0 2em;
    }

    h1 {
        font-size: 1.2em;
    }

    h3 {
        font-size: 0.9em;
    }

    #salary {
        font-size: 0.8em;
    }

    p,
    li,
    a {
        font-size: 0.7em;
    }
}

@media screen and (max-width: 400px) {
    .job-container {
        grid-template-columns: 80px auto;
        grid-template-rows: 80px auto auto auto;
        margin: 1.5em;
    }

    h1 {
        font-size: 1em;
    }
}
</style>