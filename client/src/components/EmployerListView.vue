<template>
    <div>
        <div class="posts">
            <div class="posting-title">
                <h2>{{ title }}</h2>
                <div class="side">
                    <div class="select">
                        <select v-model="sort" id="sort">
                            <option value="1">Most Recent</option>
                            <option v-if="home" value="2">Title</option>
                            <option v-else value="2">Name</option>
                            <option v-if="home" value="3">Salary: High to Low</option>
                            <option v-if="home" value="4">Salary: Low to High</option>
                        </select>
                    </div>
                    <div id="add">
                        <router-link to="/jobPosts-add" v-if="home">
                            <img src="../assets/selfmade/add.svg" alt="add post" />
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="postings">
                <ul v-if="posts">
                    <li
                        v-for="post in posts"
                        :key="post.id"
                        v-bind:class="{
                        removed: post.post_status === 4 || post.status === 3
                    }"
                        @click="navigateTo({path: `/${path}/${post.id}`, query: { appID: post.appID }})"
                    >
                        <div class="post-img">
                            <img v-if="home" :src="post.emp_logo" alt="logo" />
                            <img v-else :src="post.stu_picture" alt="student picture" />
                        </div>
                        <div class="post-title">
                            <div class="tags">
                                <span
                                    id="post-id"
                                    v-if="home"
                                    v-bind:class="{
                                        grey: post.post_status === 4} "
                                >Posting ID#{{ post.id }}</span>
                                <span
                                    id="post-id"
                                    v-else
                                    v-bind:class="{
                                        grey: post.status === 3} "
                                >Student ID#{{ post.id }}</span>

                                <span
                                    id="status"
                                    v-if="home"
                                    v-bind:class="{
                                        green: post.post_status === 1,
                                        red: post.post_status === 2 || post.post_status === 3,
                                        grey: post.post_status === 0 || post.post_status === 4
                            }"
                                >{{ post.post_status | postStatus }}</span>
                                <span
                                    id="status"
                                    v-else
                                    v-bind:class="{
                                        green: post.status === 1,
                                        blue: post.status === 2,
                                        grey: post.status === 3
                            }"
                                >{{ post.status | appStatus }}</span>
                            </div>
                            <h3 v-if="home">{{ post.post_title }}</h3>
                            <h3 v-else>{{ post.stu_name }}</h3>
                        </div>
                        <div class="date">
                            <p v-if="home">{{ post.createdAt | formatDate }}</p>
                            <p v-else>{{ post.applyDate | formatDate }}</p>
                        </div>
                        <div class="number">
                            <h2 v-if="home" class="noOfApplicants">{{ post.post_applicants }}</h2>
                            <p v-else>
                                <img src="../assets/left.svg" alt="click" />
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <ScrollToTopBtn />
        </div>
    </div>
</template>

<script>
import ScrollToTopBtn from "./ScrollToTopBtn.vue";

export default {
    name: "EmployerListView",
    components: {
        ScrollToTopBtn,
    },
    props: ["title", "allPosts", "path", "home"],
    data() {
        return {
            sort: 1,
        };
    },
    computed: {
        posts() {
            let posts = this.allPosts;
            // console.log(posts);
            if (this.home) {
                posts.forEach((post) => {
                    if (
                        post !== undefined
                        // && post.emp_logo.data !== undefined
                    ) {
                        /*  post.emp_logo =
                        "data:image/jpeg;base64," +
                        btoa(
                            post.emp_logo.data
                                .map((b) => String.fromCharCode(b))
                                .join("")
                        ); */
                    }
                });

                if (this.sort == 2) {
                    posts.sort((a, b) => {
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
                    posts.sort((a, b) => b.post_pay - a.post_pay);
                } else if (this.sort == 4) {
                    posts.sort((a, b) => a.post_pay - b.post_pay);
                } else {
                    posts.sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    );
                }
            } else {
                posts.forEach((post) => {
                    if (
                        post !== undefined &&
                        post.stu_picture.data !== undefined
                    ) {
                        // change this
                        post.stu_picture =
                            "data:image/jpeg;base64," +
                            btoa(
                                post.stu_picture.data
                                    .map((b) => String.fromCharCode(b))
                                    .join("")
                            );
                    }
                });

                if (this.sort == 2) {
                    posts.sort((a, b) => {
                        const post1 = a.stu_name.toUpperCase();
                        const post2 = b.stu_name.toUpperCase();
                        if (post1 < post2) {
                            return -1;
                        }
                        if (post1 > post2) {
                            return 1;
                        }

                        return 0;
                    });
                } else {
                    posts.sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    );
                }
            }

            return posts;
        },
    },
    /* watch: {
        posts: function (loadedPosts) {
            if (this.home) {
                loadedPosts.forEach((post) => {
                    // change this
                    post.emp_logo =
                        "data:image/jpeg;base64," +
                        btoa(
                            post.emp_logo.data
                                .map((b) => String.fromCharCode(b))
                                .join("")
                        );
                });
            } else {
                loadedPosts.forEach((post) => {
                    // change this
                    post.stu_picture =
                        "data:image/jpeg;base64," +
                        btoa(
                            post.stu_picture.data
                                .map((b) => String.fromCharCode(b))
                                .join("")
                        );
                });
            }
        },
    }, */
    filters: {
        postStatus(value) {
            let status;
            switch (value) {
                case 1:
                    status = "ACCEPTING APPLICATIONS";
                    break;
                case 2:
                    status = "NOT ACCEPTING APPLICATIONS";
                    break;
                case 3:
                    status = "MAX APPLICATIONS";
                    break;
                case 4:
                    status = "REMOVED";
                    break;
                default:
                    status = "PENDING";
                    break;
            }
            return status;
        },
        appStatus(value) {
            let status;
            switch (value) {
                case 1:
                    status = "ACCEPTED";
                    break;
                case 2:
                    status = "PENDING";
                    break;
                case 3:
                    status = "REJECTED";
                    break;
                default:
                    status = "";
                    break;
            }
            return status;
        },
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        },
    },
};
</script>

<style scoped>
.posts {
    padding: 1.5em 4em 3em;
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
    height: 30px;
}

#add {
    margin-left: 10px;
    align-self: center;
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
    background: url("../assets/down.svg") 92% / 6% #cfcfcf no-repeat;
    transition-duration: 0.4s;
}

.select select::-ms-expand {
    display: none;
}

.select select:hover,
.select select:focus {
    color: #000;
    background: url("../assets/down.svg") 92% / 6% #b8b8b8 no-repeat;
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
    grid-template-columns: 90px auto 75px;
    grid-template-rows: 30px 50px;
    grid-template-areas:
        "img title date"
        "img title number";
    align-items: center;
    border-radius: 12px;
    z-index: 1;
}

.removed {
    background: #e6e6e6;
    filter: grayscale(1);
}

.post-img {
    grid-area: img;
}

.post-img img {
    height: 80px;
    border: 1px solid #e2e2e2;
}

.post-title {
    margin-right: 0.5em;
    grid-area: title;
}

.tags {
    display: flex;
    flex-wrap: wrap;
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

#post-id {
    background: #f2f2f2;
    color: #a3a3a3;
}

.grey {
    background: #a3a3a3;
    color: #eceff3;
}

.green {
    background: #d6ead6;
    color: #5a845a;
}

.blue {
    background: #c1e2f5;
    color: #2b839e;
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

.number p {
    text-align: right;
}

.number img {
    width: 25px;
    transform: rotate(180deg);
}

@media screen and (max-width: 700px) {
    .posts {
        padding: 1.5em 0 4em;
    }

    li {
        grid-template-rows: 10px 70px;
        grid-template-columns: 90px auto 55px;
    }

    .posting-title {
        margin: 0 2em;
    }

    .tags,
    .date {
        font-size: 11px;
    }

    #post-id,
    #status {
        padding: 0.2em 0.9em;
    }

    .noOfApplicants {
        font-size: 18px;
        border-radius: 20px;
    }
}

@media screen and (max-width: 570px) {
    h2 {
        font-size: 22px;
    }

    .post-img img {
        width: 65px;
        height: 65px;
    }

    li {
        grid-template-columns: 80px auto 55px;
    }
}
@media screen and (max-width: 450px) {
    h2 {
        font-size: 18px;
    }

    ul {
        margin-top: 1em;
    }

    li {
        margin-top: 0;
        border-top: 0.5px #e6e6e6 solid;
        border-bottom: 0.5px #e6e6e6 solid;
    }

    .select {
        width: 130px;
    }

    .select select {
        padding: 7px 15px;
        font-size: 11px;
    }

    .post-img img {
        width: 50px;
        height: 50px;
    }

    li {
        grid-template-rows: 10px 50px;
        grid-template-columns: 65px auto 45px;
    }

    .tags {
        font-size: 8px;
    }

    .date {
        font-size: 9px;
    }

    .post-title h3 {
        font-size: 13px;
    }

    .noOfApplicants {
        font-size: 14px;
        border-radius: 20px;
        padding: 5px;
    }

    #post-id,
    #status {
        padding: 0.1em 1em;
    }
}
</style>