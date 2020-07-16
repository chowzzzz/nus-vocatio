<template>
    <div class="job-container">
        <div class="img-box job-title">
            <img :src="require(`../assets/selfmade/${employer.emp_logo}`)" alt="company logo" />
        </div>
        <div class="job-main-title-container job-title">
            <h1>{{ job.title }}</h1>
            <p>{{ employer.emp_company }}</p>
            <p class="filters">
                <span id="type">{{ job.post_type }}</span>
                <span id="faculty">{{ job.post_faculty }}</span>
            </p>
        </div>

        <div class="job-side-title-container job-title">
            <p id="salary" v-if="job.post_pay != null">Salary: ${{ job.post_pay }}</p>
            <a href="#">Contract Term</a>
        </div>

        <div class="job-description-container">
            <h3>Job description</h3>
            <p id="desc">{{ job.post_longdesc }}</p>
            <h3>Requirements</h3>
            <ul>
                <li
                    v-for="requirement in job.post_requirements"
                    :key="requirement.req"
                >{{ requirement.req }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "JobListing",
    data() {
        const job = this.$store.getters.getJobById(this.$route.params.jobID);
        return {
            job: job,
            employer: this.$store.getters.getEmpById(job.employerId)
        };
    }
};
</script>

<style scoped>
p,
li {
    margin: 0;
    font-size: 14px;
}

.job-container {
    display: grid;
    grid-template-columns: 110px auto 150px;
    grid-template-rows: 90px auto;
    grid-template-areas:
        "img title side"
        "desc desc desc";
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
    font-size: 22px;
}

.job-side-title-container {
    grid-area: side;
    text-align: right;
    justify-self: end;
    margin: 0 1em 0 0;
}

#salary {
    font-size: 16px;
    font-weight: 600;
}

.job-description-container {
    grid-area: desc;
    margin: 2em 1em 4em;
}

h3 {
    margin-bottom: 0.5em;
    font-size: 18px;
}

#desc {
    margin-bottom: 1.5em;
}

ul {
    margin-left: 1em;
}

.filters {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.5em;
}

#type,
#faculty {
    margin-right: 0.8em;
    margin-bottom: 0.1em;
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
        grid-template-columns: 110px auto 150px;
    }
}

@media screen and (max-width: 950px) {
    .job-container {
        grid-template-columns: 110px auto 120px;
    }
}

@media screen and (max-width: 800px) {
    .job-container {
        grid-template-columns: 100px 55% auto;
        grid-template-rows: 65px auto;
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

    .side {
        margin-top: 1em;
    }
}

@media screen and (max-width: 570px) {
    .job-container {
        grid-template-columns: 80px auto;
        grid-template-rows: 80px auto auto;
        grid-template-areas:
            "img title"
            "side side"
            "desc desc";
    }

    .job-side-title-container {
        text-align: left;
        justify-self: start;
    }

    .job-description-container {
        margin: 1em 0 1em;
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
    h1 {
        font-size: 1em;
    }
}
</style>