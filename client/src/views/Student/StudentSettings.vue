<template>
    <div class="container">
        <div class="title-container">
            <img src="../../assets/settings.svg" alt="settings" />
            <h2>Settings</h2>
        </div>

        <div class="settings-container">
            <p style="color: #b8b8b8">Send me an email when:</p>
            <div class="settings">
                <div class="indiv-setting" id="status">
                    <span>there is a status change in my application</span>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="indiv-setting" id="jobs">
                    <span>there are new jobs</span>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="indiv-setting" id="news">
                    <span>there is newsletter</span>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="indiv-setting" id="sub">
                    <span>Subscribe me to NUSVocatio newsletter</span>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider sub-slider"></span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Settings"
};
</script>

<style scoped>
.container {
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

.indiv-setting {
    background: #f2f2f2;
    padding: 2em 1.5em;
    width: 80%;
    margin: 0.5em;
    height: 20px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* toggle button */
.switch {
    position: relative;
    width: 45px;
    height: 25px;
    flex-shrink: 0;
    margin-left: 1em;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 34px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

input:checked + .slider {
    background-color: #6794ad;
}

input:focus + .slider {
    box-shadow: 0 0 1px #6794ad;
}

input:checked + .sub-slider {
    background-color: #dfbbc0;
}

input:focus + .sub-slider {
    box-shadow: 0 0 1px #dfbbc0;
}

input:checked + .slider:before {
    -webkit-transform: translateX(19px);
    -ms-transform: translateX(19px);
    transform: translateX(19px);
}

@media screen and (max-width: 1150px) {
    span {
        font-size: 0.9em;
    }

    .settings-container {
        margin: 3em 0;
    }

    .indiv-setting {
        width: 90%;
        margin: 0.5em 0;
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
    .container {
        margin: 2em 2.5em;
    }

    .indiv-setting {
        width: 88%;
    }
}

@media screen and (max-width: 400px) {
    .indiv-setting {
        width: 83%;
    }
}
</style>