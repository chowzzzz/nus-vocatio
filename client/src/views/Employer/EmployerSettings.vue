<template>
    <div class="set-container">
        <div class="title-container">
            <img src="../../assets/settings.svg" alt="settings" />
            <h2>Settings</h2>
        </div>

        <div class="settings-container">
            <p>Send me an email when:</p>
            <div class="settings">
                <setting-box id="status" title="a new student has applied"></setting-box>
                <setting-box id="jobs" title="my posting has reached maximum applicants"></setting-box>
                <setting-box id="news" title="there is newsletter"></setting-box>
                <setting-box id="sub" title="Subscribe me to NUSVocatio newsletter"></setting-box>
            </div>
        </div>
    </div>
</template>

<script>
import SettingBox from "../../components/SettingBox.vue";

export default {
    name: "EmployerSettings",
    components: {
        SettingBox
    }
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