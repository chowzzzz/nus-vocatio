<template>
    <div>
        <hide-at :breakpoints="{small: 400, medium: 701}" breakpoint="mediumAndBelow">
            <side-filter-menu
                @searching="search"
                @filteredTypes="filterTypes"
                @filteredFac="filterFac"
                @filteredSalary="filterSalary"
                :searchKey="searchKeyword"
            />
        </hide-at>
        <div class="jobListings">
            <div class="jobs">
                <div class="job-header">
                    <h2>Job Listings</h2>
                    <show-at :breakpoints="{small: 400, medium: 701}" breakpoint="mediumAndBelow">
                        <side-filter-menu-mobile
                            @searching="search"
                            @filteredTypes="filterTypes"
                            @filteredFac="filterFac"
                            @filteredSalary="filterSalary"
                            :searchKey="searchKeyword"
                        />
                    </show-at>
                    <hide-at :breakpoints="{small: 400, medium: 701}" breakpoint="mediumAndBelow">
                        <div class="select">
                            <select v-model="sort" id="sort">
                                <option value="1">Most Recent</option>
                                <option value="2">Title</option>
                                <option value="3">Salary: High to Low</option>
                                <option value="4">Salary: Low to High</option>
                            </select>
                        </div>
                    </hide-at>
                </div>
                <ul v-if="pairs && jobs">
                    <li
                        v-for="pair in pairs"
                        :key="pair.job.id"
                        @click="navigateTo({name: 'job-details', params: {jobID: pair.job.id}})"
                    >
                        <div class="job-img">
                            <img :src="pair.coLogo" alt="company logo" />
                        </div>
                        <div class="job-title">
                            <h4>{{ pair.job.post_title }}</h4>
                            <p>{{ pair.company }}</p>
                            <p id="desc">{{ pair.job.post_short_des }}</p>
                            <p id="filters">
                                <span id="type">{{ pair.job.post_type }}</span>
                                <span id="faculty">{{ pair.job.post_faculty }}</span>
                            </p>
                        </div>
                        <div class="job-side-title">
                            <p id="date">{{ pair.job.post_createdAt | formatDate }}</p>
                            <p id="salary">${{ pair.job.post_pay }}</p>
                        </div>
                    </li>
                </ul>
                <p v-else class="error">There are no job posts</p>
            </div>
        </div>
        <ScrollToTopBtn />
    </div>
</template>

<script>
import SideFilterMenu from "../../components/SideFilterMenu.vue";
import SideFilterMenuMobile from "../../components/SideFilterMenuMobile.vue";
import ScrollToTopBtn from "../../components/ScrollToTopBtn.vue";
import { mapGetters } from "vuex";
import { showAt, hideAt } from "vue-breakpoints";

export default {
    name: "AdminPosts",
    components: {
        SideFilterMenu,
        SideFilterMenuMobile,
        ScrollToTopBtn,
        hideAt,
        showAt,
    },
    data() {
        return {
            searchKeyword: "",
            checkedTypes: [],
            checkedFac: [],
            salary: [],
            sort: 1,
        };
    },
    computed: {
        ...mapGetters(["allJobs", "getJobsBySearch"]),
        ...mapGetters("employers", ["getEmpById"]),
        jobs() {
            let jobs = this.allJobs;
            if (
                this.searchKeyword.length > 0 ||
                this.checkedTypes.length > 0 ||
                this.checkedFac.length > 0 ||
                this.salary.length > 0
            ) {
                jobs = this.getJobsBySearch(
                    this.searchKeyword,
                    this.checkedTypes,
                    this.checkedFac,
                    this.salary
                );
            }
            if (this.sort == 2) {
                jobs.sort((a, b) => {
                    const post1 = a.post_title.toUpperCase();
                    const post2 = b.post_title.toUpperCase();
                    if (post1 < post2) {
                        return -1;
                    }
                    if (post1 > post2) {
                        return 1;
                    }

                    return 0;
                });
            } else if (this.sort == 3) {
                jobs.sort((a, b) => b.post_pay - a.post_pay);
            } else if (this.sort == 4) {
                jobs.sort((a, b) => a.post_pay - b.post_pay);
            } else {
                jobs.sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                );
            }

            return jobs;
        },
        pairs() {
            const pairs = this.jobs.map((job) => {
                if (job.employerId) {
                    const employer = this.getEmpById(job.employerId);
                    return {
                        job: job,
                        company: employer.emp_company,
                        coLogo: employer.emp_logo,
                    };
                } else {
                    return null;
                }
            });
            if (pairs) return pairs;
            else return null;
        },
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },
        search(searchKeyword) {
            this.searchKeyword = searchKeyword;
        },
        filterTypes(checkedTypes) {
            this.checkedTypes = checkedTypes;
        },
        filterFac(checkedFac) {
            this.checkedFac = checkedFac;
        },
        filterSalary(salary) {
            this.salary = salary;
        },
    },
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
    min-height: 120vh;
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

.error {
    text-align: center;
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
        min-height: 100vh;
    }

    .job-header {
        align-items: start;
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