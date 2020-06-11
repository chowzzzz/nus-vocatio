<template>
    <div>
        <sideFilterMenu />
        <div class="jobListings">
            <div class="jobs">
                <h3>Job Listings</h3>
                <ul>
                    <li
                        v-for="job in allJobs"
                        :key="job.jobID"
                        @click="navigateTo({name: 'job-details', params: {jobId: job.jobID}})"
                    >
                        <div class="job-img">
                            <img src="../assets/selfmade/picture.svg" alt="company logo" />
                        </div>
                        <div class="job-title">
                            <h4>{{ job.title }}</h4>
                            <p>{{ job.employer }}</p>
                            <p id="desc">{{ job.description }}</p>
                            <p>
                                <span id="type">{{ job.type }}</span>
                                <span id="faculty">{{ job.faculty }}</span>
                            </p>
                        </div>
                        <div class="job-side-title">
                            <p id="date">{{ job.date | formatDate }}</p>
                            <p id="salary">{{ job.salary }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import SideFilterMenu from "../components/SideFilterMenu.vue";
import { mapGetters } from "vuex";

export default {
    name: "StudentSearch",
    components: {
        sideFilterMenu: SideFilterMenu
    },
    computed: mapGetters(["allJobs"]),
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        }
    }
};
</script>

<style scoped>
.job-img img {
    width: 100px;
    height: 100px;
    border: 1px solid #b8b8b8;
}

.jobListings {
    margin-left: 20%;
    padding: 2em;
    background: #f2f2f2;
}

p {
    margin: 0;
}

li {
    list-style-type: none;
    margin-top: 1em;
    background: #fff;
    padding: 1.2em 1.8em;
    cursor: pointer;
    display: grid;
    grid-template-columns: 15% 70% 15%;
    align-items: center;
}

.job-side-title {
    text-align: right;
    align-self: start;
}

#desc {
    margin-bottom: 0.8em;
    line-height: 1.3em;
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

#date {
    color: #979797;
    font-size: 0.8em;
}

#salary {
    font-size: 1em;
}
</style>