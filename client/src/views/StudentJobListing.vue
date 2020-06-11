<template>
    <div>
        <button id="backBtn" @click="$router.go(-1)">
            <img src="../assets/left.svg" alt="back button" /> Back to jobs
        </button>
        <div class="job-container">
            <!-- <div class="job-title-container"> -->
            <div class="img-box job-title">
                <img src="../assets/selfmade/picture.svg" alt="company logo" />
            </div>
            <div class="job-main-title-container job-title">
                <h1>{{ job.title }}</h1>
                <p>{{ job.employer }}</p>
                <p>
                    <span class="type">{{ job.type }}</span>
                    <span class="faculty">{{ job.faculty }}</span>
                </p>
            </div>

            <div class="job-side-title-container job-title">
                <p id="salary" v-if="job.salary != null">Salary: {{ job.salary }}</p>
                <a href="#">Contract Term</a>
            </div>
            <!-- </div> -->
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
            <p>{{employer.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "StudentJobListing",
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
    grid-template-columns: 110px 50% 150px;
    grid-template-rows: 80px auto;
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
    font-size: 1.8em;
}

.job-side-title-container {
    grid-area: side;
    text-align: right;
    justify-self: end;
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
</style>