<template>
    <div class="menu" :style="{ 'align-self': align }">
        <div class="btns">
            <span @click="toggleFilter">
                <i class="fas fa-filter"></i>
            </span>
            <span @click="toggleSearch">
                <i class="fas fa-search"></i>
            </span>
        </div>
        <div class="search">
            <student-search-bar
                @searching="search"
                :searchKey="searchKey"
                :style="{ display: searchBar }"
            />
        </div>

        <div class="filterPopup" :style="{ display: popup }">
            <form>
                <div class="filterHeader">
                    <span class="closeBtn" @click="toggleFilter">
                        <i class="fas fa-times"></i>
                    </span>
                    <h3>Filters</h3>
                    <input type="reset" value="Reset" />
                </div>
                <div class="filter-block">
                    <h4 class="filter-content-title">Types</h4>

                    <div class="filter-one">
                        <div class="filter">
                            <input
                                type="checkbox"
                                v-model="checkedTypes"
                                @change="checkTypes"
                                value="Internship"
                                name="intern"
                                id="intern"
                            />
                            <label for="intern">Internship</label>
                        </div>

                        <div class="filter">
                            <input
                                type="checkbox"
                                v-model="checkedTypes"
                                @change="checkTypes"
                                value="Part-time"
                                name="part-time"
                                id="part-time"
                            />
                            <label for="part-time">Part-time</label>
                        </div>
                    </div>

                    <div class="filter-two">
                        <div class="filter">
                            <input
                                type="checkbox"
                                v-model="checkedTypes"
                                @change="checkTypes"
                                value="Research studies"
                                name="research"
                                id="research"
                            />
                            <label for="research">Research studies</label>
                        </div>

                        <div class="filter">
                            <input
                                type="checkbox"
                                v-model="checkedTypes"
                                @change="checkTypes"
                                value="Surveys"
                                name="surveys"
                                id="surveys"
                            />
                            <label for="surveys">Surveys</label>
                        </div>
                    </div>
                </div>

                <div class="filter-block">
                    <h4 class="filter-content-title">Faculty</h4>
                    <div class="filter-one">
                        <div class="filter">
                            <input type="checkbox" name="fass" id="fass" />
                            <label for="fass">FASS</label>
                        </div>
                        <div class="filter">
                            <input type="checkbox" name="ba" id="ba" />
                            <label for="ba">Business</label>
                        </div>
                        <div class="filter">
                            <input type="checkbox" name="soc" id="soc" />
                            <label for="soc">Computing</label>
                        </div>
                        <div class="filter">
                            <input type="checkbox" name="dentistry" id="dentistry" />
                            <label for="soc">Dentistry</label>
                        </div>
                        <div class="filter">
                            <input type="checkbox" name="sde" id="sde" />
                            <label for="sde">Design and Environment</label>
                        </div>
                        <div class="filter">
                            <input type="checkbox" name="duke" id="duke" />
                            <label for="sde">Duke-NUS Medical School</label>
                        </div>
                        <div class="filter">
                            <input type="checkbox" name="engin" id="engin" />
                            <label for="engin">Engineering</label>
                        </div>
                        <div class="filter">
                            <input type="checkbox" name="law" id="law" />
                            <label for="law">Law</label>
                        </div>
                    </div>

                    <div class="filter-two">
                        <div class="filter">
                            <input type="checkbox" name="med" id="med" />
                            <label for="med">Medicine</label>
                        </div>
                        <div class="filter">
                            <input type="checkbox" name="music" id="music" />
                            <label for="music">Music</label>
                        </div>
                        <div class="filter">
                            <input type="checkbox" name="publicHealth" id="publicHealth" />
                            <label for="publicHealth">Public Health</label>
                        </div>
                        <div class="filter">
                            <input type="checkbox" name="publicPolicy" id="publicPolicy" />
                            <label for="publicPolicy">Public Policy</label>
                        </div>
                        <div class="filter">
                            <input type="checkbox" name="scle" id="scle" />
                            <label for="fos">School of Continuing and Lifelong Education</label>
                        </div>
                        <div class="filter">
                            <input type="checkbox" name="fos" id="fos" />
                            <label for="fos">Science</label>
                        </div>
                        <div class="filter">
                            <input type="checkbox" name="usp" id="usp" />
                            <label for="fos">University Scholars Programme</label>
                        </div>
                        <div class="filter">
                            <input type="checkbox" name="yale" id="yale" />
                            <label for="fos">Yale-NUS</label>
                        </div>
                    </div>
                </div>

                <div class="filter-slider-block">
                    <h4 class="filter-content-title">Salary</h4>
                    <div class="filter-slider-content">
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
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import StudentSearchBar from "./StudentSearchBar.vue";
export default {
    name: "SideFilterMenuMobile",
    components: {
        StudentSearchBar,
        VueSlider,
    },
    props: ["searchKey"],
    data() {
        return {
            searchBar: "none",
            popup: "none",
            align: "center",
            salary: [0, 5000],
            formatter: (v) =>
                `$${("" + v).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
            checkedTypes: [],
            checkedFac: [],
        };
    },
    methods: {
        toggleSearch() {
            this.searchBar == "none"
                ? (this.searchBar = "block") && (this.align = "start")
                : (this.searchBar = "none") && (this.align = "center");
        },
        toggleFilter() {
            this.popup == "none"
                ? (this.popup = "block")
                : (this.popup = "none");
        },
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
            this.salary = value;
            this.$emit("filteredSalary", this.salary);
        },
    },
};
</script>

<style scoped>
.filterPopup {
    position: fixed;
    z-index: 99;
    bottom: 0;
    left: 0;
    background: white;
    width: 100%;
    height: 100%;
}

.filterHeader {
    background: #af6675;
    padding: 1.2em 1.5em;
    display: flex;
    justify-content: space-between;
    color: white;
}

.closeBtn {
    cursor: pointer;
}

.btns {
    text-align: right;
}

.fa-filter {
    margin-right: 1em;
}

input[type="reset"] {
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    color: white;
}

.filter-block {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas:
        "title title"
        "one two";
    margin: 1.2em 2em;
}

.filter-content-title {
    grid-area: title;
}

.filter {
    margin: 0.5em 0 0.5em 2em;
}

input[type="checkbox"] {
    margin: 0 31px 0 -24px;
}

label {
    margin: 0 21px 0 -19px;
    font-size: 14px;
}

.filter-slider-block {
    margin: 1.5em 2em;
}

.filter-slider-content {
    text-align: center;
    margin: 0.5em 0;
}

#salarySlider {
    width: 80%;
}

@media screen and (max-width: 570px) {
    h4 {
        font-size: 15px;
    }

    label {
        font-size: 13px;
    }
}

@media screen and (max-width: 570px) {
    h4 {
        font-size: 13px;
    }

    label {
        font-size: 12px;
    }
}
</style>