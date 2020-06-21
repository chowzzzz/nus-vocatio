<template>
    <div class="posts">
        <div class="posting-title">
            <h2>Postings</h2>
            <div class="side">
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
                <a href="#">
                    <img src="../../assets/selfmade/add.svg" alt="add post" />
                </a>
            </div>
        </div>
        <div class="postings">
            <ul>
                <li v-for="post in posts" :key="post.jobID">
                    <div class="post-img">
                        <img src="../../assets/selfmade/picture.svg" alt="company logo" />
                    </div>
                    <div class="post-title">
                        <p id="tags">
                            <span id="post-id">Posting ID#{{ post.jobID }}</span>
                            <span
                                id="status"
                                v-bind:class="{
                                green: post.status === 'Accepting applications',
                                red: post.status === 'Not accepting applications' || post.status === 'Max applications',
                                grey: post.status === 'Removed'
                            }"
                            >{{ post.status | upperCase }}</span>
                        </p>
                        <h3>{{ post.title }}</h3>
                    </div>
                    <div class="date">
                        <p>{{ post.date | formatDate }}</p>
                    </div>
                    <div class="number">
                        <h2 class="noOfApplicants">{{ post.applicants }}</h2>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmployerHome",
    data() {
        return {
            posts: this.$store.getters.getJobByEmpId(1)
        };
    },
    filters: {
        upperCase(value) {
            return value.toUpperCase();
        }
    }
};
</script>

<style scoped>
.posts {
    padding: 2em 4em;
    background: #f8fbff;
}

.posting-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.side {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
}

.posting-title img,
.posting-title a {
    width: 30px;
    margin-right: 10px;
}

.select {
    overflow: hidden;
    width: 180px;
    margin-right: 10px;
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

li {
    list-style-type: none;
    margin-top: 1em;
    background: #fff;
    padding: 1.2em 1.8em;
    cursor: pointer;
    display: grid;
    grid-template-columns: 90px auto 80px;
    grid-template-rows: 30px 50px;
    grid-template-areas:
        "img title date"
        "img title number";
    align-items: center;
    z-index: 1;
}

.post-img {
    grid-area: img;
}

.post-img img {
    width: 70px;
    height: 70px;
    border: 1px solid #b8b8b8;
}

.post-title {
    margin-right: 0.5em;
    grid-area: title;
}

#post-id,
#status {
    margin-top: 0.3em;
    margin-right: 0.8em;
    border: none;
    padding: 0.2em 1em;
    border-radius: 25px;
    outline: none;
    transition-duration: 0.4s;
    cursor: pointer;
}

#post-id,
.grey {
    background: #f2f2f2;
    color: #a3a3a3;
}

.green {
    background: #d6ead6;
    color: #5a845a;
}

.red {
    background: #f2dadd;
    color: #af6675;
}

h3 {
    margin-top: 0.5em;
}

.date {
    text-align: right;
    grid-area: date;
    align-self: start;
}

.number {
    grid-area: number;
    text-align: center;
}

.noOfApplicants {
    padding: 10px;
    background: #c1e2f5;
    color: #2b839e;
    border-radius: 18px;
}
</style>