<template>
    <div>
        <sideFilterMenu />
        <div class="jobListings">
            <div class="jobs">
                <h4>Job Listings</h4>
                <ul>
                    <li v-for="job in allJobs" :key="job.id">
                        {{ job.title }}
                        <br />
                        {{ job.employer }}
                        <br />
                        {{ job.description }}
                        <br />
                        {{ job.type }} {{ job.faculty }}
                        <br />
                        {{ job.salary }}
                        <br />
                        {{ job.date }}
                        <br />
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
    computed: mapGetters(["allJobs"])
};
</script>

<style scoped>
.jobListings {
    margin-left: 20%;
    padding: 2em;
    background: #f2f2f2;
}

li {
    list-style-type: none;
    margin-top: 2em;
    background: #fff;
    padding: 1em;
}
</style>