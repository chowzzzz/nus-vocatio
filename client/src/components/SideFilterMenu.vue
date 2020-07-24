<template>
    <div class="side-filter-menu title filter-visible">
        <div class="filter-block">
            <h4 id="filter-title">
                <img src="../assets/filter.svg" alt="filter" /> Filters
            </h4>
        </div>
        <div class="filter-block">
            <h4 class="filter-content-title">
                Search
                <i class="fas fa-search"></i>
            </h4>
            <div class="filter-content">
                <student-search-bar @searching="search" :searchKey="searchKey" />
            </div>
        </div>
        <div class="filter-block">
            <h4 class="filter-content-title">
                Types
                <img src="../assets/down.svg" alt="Down" class="down" />
            </h4>
            <ul class="filter-content">
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedTypes"
                        @change="checkTypes"
                        value="Internship"
                        id="intern"
                    />
                    <label for="intern">Internship</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedTypes"
                        @change="checkTypes"
                        value="Part-time"
                        id="part-time"
                    />
                    <label for="part-time">Part-time</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedTypes"
                        @change="checkTypes"
                        value="Research studies"
                        id="research"
                    />
                    <label for="research">Research studies</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedTypes"
                        @change="checkTypes"
                        value="Surveys"
                        id="surveys"
                    />
                    <label for="surveys">Surveys</label>
                </li>
            </ul>
        </div>
        <div class="filter-block">
            <h4 class="filter-content-title">
                Faculty
                <img src="../assets/down.svg" alt="Down" class="down" />
            </h4>
            <ul class="filter-content">
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedFac"
                        @change="checkFac"
                        value="All"
                        name="all"
                        id="all"
                    />
                    <label for="all">All</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedFac"
                        @change="checkFac"
                        value="FASS"
                        name="fass"
                        id="fass"
                    />
                    <label for="fass">FASS</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedFac"
                        @change="checkFac"
                        value="Business"
                        name="ba"
                        id="ba"
                    />
                    <label for="ba">Business</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedFac"
                        @change="checkFac"
                        value="Computing"
                        name="soc"
                        id="soc"
                    />
                    <label for="soc">Computing</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedFac"
                        @change="checkFac"
                        value="Dentistry"
                        name="dentistry"
                        id="dentistry"
                    />
                    <label for="soc">Dentistry</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedFac"
                        @change="checkFac"
                        value="Design and Environment"
                        name="sde"
                        id="sde"
                    />
                    <label for="sde">Design and Environment</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedFac"
                        @change="checkFac"
                        value="Duke-NUS Medical School"
                        name="duke"
                        id="duke"
                    />
                    <label for="duke">Duke-NUS Medical School</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedFac"
                        @change="checkFac"
                        value="Engineering"
                        name="engin"
                        id="engin"
                    />
                    <label for="engin">Engineering</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedFac"
                        @change="checkFac"
                        value="Law"
                        name="law"
                        id="law"
                    />
                    <label for="law">Law</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedFac"
                        @change="checkFac"
                        value="Medicine"
                        name="med"
                        id="med"
                    />
                    <label for="med">Medicine</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedFac"
                        @change="checkFac"
                        value="Music"
                        name="music"
                        id="music"
                    />
                    <label for="music">Music</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedFac"
                        @change="checkFac"
                        value="Public Health"
                        name="publicHealth"
                        id="publicHealth"
                    />
                    <label for="publicHealth">Public Health</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedFac"
                        @change="checkFac"
                        value="Public Policy"
                        name="publicPolicy"
                        id="publicPolicy"
                    />
                    <label for="publicPolicy">Public Policy</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedFac"
                        @change="checkFac"
                        value="School of Continuing and Lifelong Education"
                        name="scle"
                        id="scle"
                    />
                    <label for="scle">School of Continuing and Lifelong Education</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedFac"
                        @change="checkFac"
                        value="Science"
                        name="fos"
                        id="fos"
                    />
                    <label for="fos">Science</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedFac"
                        @change="checkFac"
                        value="University Scholars Programme"
                        name="usp"
                        id="usp"
                    />
                    <label for="usp">University Scholars Programme</label>
                </li>
                <li>
                    <input
                        type="checkbox"
                        v-model="checkedFac"
                        @change="checkFac"
                        value="Yale-NUS"
                        name="yale"
                        id="yale"
                    />
                    <label for="yale">Yale-NUS</label>
                </li>
            </ul>
        </div>
        <div class="filter-block">
            <h4 class="filter-content-title">
                Salary
                <img src="../assets/down.svg" alt="Down" class="down" />
            </h4>
            <div class="filter-content">
                <vue-slider
                    v-model="salary"
                    :max="5000"
                    :interval="100"
                    :lazy="true"
                    :absorb="true"
                    :contained="true"
                    :tooltip-formatter="formatter"
                    :enable-cross="false"
                    @change="filterSalary"
                />
                <!-- <input type="range" name="salarySlider" id="salarySlider" min="0" max="3000" /> -->
            </div>
        </div>
    </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import StudentSearchBar from "./StudentSearchBar.vue";

export default {
    name: "SideFilterMenu",
    components: {
        StudentSearchBar,
        VueSlider,
    },
    props: ["searchKey"],
    data() {
        return {
            salary: [0, 5000],
            formatter: (v) =>
                `$${("" + v).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
            checkedTypes: [],
            checkedFac: [],
        };
    },
    methods: {
        search(searchKeyword) {
            this.$emit("searching", searchKeyword);
        },
        checkTypes() {
            this.$emit("filteredTypes", this.checkedTypes);
        },
        checkFac() {
            this.$emit("filteredFac", this.checkedFac);
        },
        filterSalary(value) {
            console.log(value);
            this.$emit("filteredSalary", this.salary);
        },
    },
};
</script>

<style scoped>
.side-filter-menu {
    position: absolute;
    width: 20%;
    z-index: 1;
    overflow-x: hidden;
}

#filter-title {
    font-size: 0.6em;
}

h4,
ul {
    font-size: 0.5em;
}

.filter-block {
    border-bottom: 1px solid #e6e6e6;
    padding: 0.3em 0.8em;
}

.filter-content-title {
    display: flex;
    justify-content: space-between;
}

img {
    width: 0.7em;
}

ul {
    list-style-type: none;
    margin-top: 5px;
}

li {
    font-size: 0.7em;
}

vue-slider {
    width: 90%;
}

@media screen and (max-width: 900px) {
    .side-filter-menu {
        width: 25%;
    }
}
</style>