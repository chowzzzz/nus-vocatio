<template>
    <div>
        <hide-at :breakpoints="{small: 400, medium: 701}" breakpoint="mediumAndBelow">
            <sideFilterMenu />
        </hide-at>
        <div class="jobListings">
            <div class="jobs">
                <div class="job-header">
                    <h2>Job Listings</h2>
                    <show-at :breakpoints="{small: 400, medium: 701}" breakpoint="mediumAndBelow">
                        <sideFilterMenuMobile />
                    </show-at>
                    <hide-at :breakpoints="{small: 400, medium: 701}" breakpoint="mediumAndBelow">
                        <div class="select">
                            <select id="sort">
                                <option value="sortby">Sort by</option>
                                <option value="apha">Alphabetical</option>
                                <option value="high">Salary: High to Low</option>
                                <option value="low">Salary: Low to High</option>
                                <option value="recent">Most Recent</option>
                            </select>
                        </div>
                    </hide-at>
                </div>
                <ul>
                    <li
                        v-for="pair in pairs"
                        :key="pair.job.jobID"
                        @click="navigateTo({name: 'job-details', params: {jobID: pair.job.jobID}})"
                    >
                        <div class="job-img">
                            <img src="../../assets/selfmade/picture.svg" alt="company logo" />
                        </div>
                        <div class="job-title">
                            <h4>{{ pair.job.post_title }}</h4>
                            <p>{{ pair.companyName }}</p>
                            <p id="desc">{{ pair.job.post_short_des }}</p>
                            <p id="filters">
                                <span id="type">{{ pair.job.post_type }}</span>
                                <span id="faculty">{{ pair.job.post_faculty }}</span>
                            </p>
                        </div>
                        <div class="job-side-title">
                            <p id="date">{{ pair.job.createdAt | formatDate }}</p>
                            <p id="salary">${{ pair.job.post_pay }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <ScrollToTopBtn />
    </div>
</template>

<script>
import SideFilterMenu from "../../components/SideFilterMenu.vue";
import SideFilterMenuMobile from "../../components/SideFilterMenuMobile.vue";
import ScrollToTopBtn from "../../components/ScrollToTopBtn.vue";
import { mapGetters, mapState, mapActions } from "vuex";
import { showAt, hideAt } from "vue-breakpoints";

export default {
    name: "StudentSearch",
    components: {
        sideFilterMenu: SideFilterMenu,
        sideFilterMenuMobile: SideFilterMenuMobile,
        ScrollToTopBtn,
        hideAt,
        showAt
    },
    methods: {
        ...mapActions(["fetchJobPosts", "fetchEmployers"]),
        navigateTo(route) {
            this.$router.push(route);
        }
    },
    computed: {
        ...mapGetters(["allJobs"]),
        ...mapState(["jobposts"]),
        pairs() {
            return this.allJobs.map(job => {
                console.log(job);
                // console.log(this.$store.getters.getEmpById(job.employerId));
                return {
                    job: job,
                    companyName: this.$store.getters.getEmpById(job.employerId)
                        .emp_company
                };
            });
        }
    },
    created() {
        this.fetchJobPosts();
        this.fetchEmployers();
    }
};
</script>

<style scoped>
.job-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.select {
    overflow: hidden;
    width: 180px;
}

.select select {
    display: inline-block;
    width: 100%;
    cursor: pointer;
    padding: 10px 15px;
    outline: 0;
    border: 0;
    border-radius: 25px;
    color: #5c5c5c;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url("../../assets/down.svg") 92% / 6% #cfcfcf no-repeat;
    transition-duration: 0.4s;
}

.select select::-ms-expand {
    display: none;
}

.select select:hover,
.select select:focus {
    color: #000;
    background: url("../../assets/down.svg") 92% / 6% #b8b8b8 no-repeat;
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

.job-img img {
    width: 100px;
    height: 100px;
    border: 1px solid #b8b8b8;
}

.jobListings {
    margin-left: 20%;
    padding: 2em 2em 4.5em;
    background: #f2f2f2;
    height: calc(100vh + 5em);
}

.job-title {
    margin-right: 0.5em;
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
    grid-template-columns: 125px 70% auto;
    align-items: center;
    z-index: 1;
}

.job-side-title {
    text-align: right;
    align-self: start;
}

#desc {
    line-height: 1.3em;
}

#type,
#faculty {
    margin-top: 0.3em;
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

#filters {
    margin-top: 0.5em;
    display: flex;
    flex-wrap: wrap;
}

@media screen and (max-width: 900px) {
    .jobListings {
        margin-left: 25%;
    }

    li {
        grid-template-columns: 100px 65% auto;
    }

    .job-img img {
        width: 80px;
        height: 80px;
    }
}

@media screen and (max-width: 700px) {
    .jobListings {
        margin-left: 0;
        height: 100vh;
    }

    .job-header {
        align-items: start;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto auto;
        justify-content: inherit;
    }
}

@media screen and (max-width: 570px) {
    li {
        grid-template-columns: 80px 60% auto;
        padding: 1em 1.3em;
    }

    .job-img img {
        width: 65px;
        height: 65px;
    }

    .job-header {
        font-size: 14px;
    }

    h4 {
        font-size: 12px;
    }

    p,
    #salary {
        font-size: 11px;
    }

    #date {
        font-size: 9px;
    }

    #filters {
        font-size: 10px;
    }

    #desc {
        display: none;
    }
}

@media screen and (max-width: 400px) {
    .jobListings {
        padding: 0;
        padding-bottom: 2em;
    }

    .job-header {
        padding: 1em 1.2em;
        font-size: 13px;
    }

    li {
        grid-template-columns: 65px 60% auto;
        margin: 0;
        border-top: 0.5px #e6e6e6 solid;
        border-bottom: 0.5px #e6e6e6 solid;
    }

    .job-img img {
        width: 50px;
        height: 50px;
    }

    h4 {
        font-size: 11px;
    }

    p,
    #salary {
        font-size: 10px;
    }

    #date {
        font-size: 8px;
    }

    #filters {
        font-size: 9px;
    }
}
</style>