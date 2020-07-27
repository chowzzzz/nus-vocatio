<template>
    <div class="set-container">
        <div class="title-container">
            <img src="../../assets/settings.svg" alt="settings" />
            <h2>Settings</h2>
        </div>

        <div v-if="student" class="settings-container">
            <p>Send me an email when:</p>
            <div class="settings">
                <setting-box
                    v-for="setting in settings"
                    :key="setting.id"
                    :setting="setting"
                    v-bind:id="setting.id"
                    @settingsChecked="checked"
                ></setting-box>
            </div>
        </div>
    </div>
</template>

<script>
import SettingBox from "../../components/SettingBox.vue";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Settings",
    components: {
        SettingBox,
    },
    computed: {
        ...mapGetters("students", ["getStuById"]),
        student() {
            // change this
            const student = this.getStuById(30);
            return student;
        },
        settings() {
            let settings = [
                {
                    id: "status",
                    checked: this.student.stu_status_change,
                    title: "there is a status change in my application",
                },
                {
                    id: "jobs",
                    checked: this.student.stu_new_jobs,
                    title: "there are new jobs",
                },
                {
                    id: "news",
                    checked: this.student.stu_news_letter,
                    title: "there is newsletter",
                },
                {
                    id: "subs",
                    checked: this.student.stu_subscription,
                    title: "Subscribe me to NUSVocatio newsletter",
                },
            ];
            return settings;
        },
    },
    methods: {
        ...mapActions("students", ["updateStudent"]),
        checked(checkedStatus, id) {
            switch (id) {
                case "status":
                    this.student.stu_status_change = checkedStatus;
                    this.updateStudent(this.student).catch((err) =>
                        console.log(err)
                    );
                    break;
                case "jobs":
                    this.student.stu_new_jobs = checkedStatus;
                    this.updateStudent(this.student).catch((err) =>
                        console.log(err)
                    );
                    break;
                case "news":
                    this.student.stu_news_letter = checkedStatus;
                    this.updateStudent(this.student).catch((err) =>
                        console.log(err)
                    );
                    break;
                case "subs":
                    this.student.stu_subscription = checkedStatus;
                    this.updateStudent(this.student).catch((err) =>
                        console.log(err)
                    );
                    break;
            }
        },
    },
};
</script>

<style scoped>
.set-container {
    margin: 2em 4em;
}

.title-container {
    display: flex;
}

.title-container img {
    width: 25px;
    margin-right: 0.6em;
}

.settings-container {
    margin: 3em 2em;
}

.settings {
    display: grid;
    grid-template-columns: 50% auto;
    grid-template-rows: auto auto auto;
    grid-template-areas:
        "status subs"
        "jobs subs"
        "news subs";
}

p {
    color: #b8b8b8;
}

#status {
    grid-area: status;
}
#jobs {
    grid-area: jobs;
}
#news {
    grid-area: news;
}
#sub {
    grid-area: subs;
}

@media screen and (max-width: 1150px) {
    span {
        font-size: 0.9em;
    }

    .settings-container {
        margin: 3em 0;
    }

    #sub {
        margin: 0.5em 0 0 1.5em;
    }
}

@media screen and (max-width: 860px) {
    .settings-container {
        margin: 2em 0;
    }

    .settings {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto auto auto;
        grid-template-areas:
            "status"
            "jobs"
            "news"
            "subs";
    }

    #sub {
        margin: 2em 0;
    }
}

@media screen and (max-width: 500px) {
    .set-container {
        margin: 2em 2.5em;
    }
}
</style>