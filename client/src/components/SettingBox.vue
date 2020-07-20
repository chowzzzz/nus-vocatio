<template>
    <div class="indiv-setting" id="status">
        <span>{{ info.title }}</span>
        <label class="switch">
            <input type="checkbox" v-model="info.checked" />
            <span class="slider"></span>
        </label>
    </div>
</template>

<script>
export default {
    name: "SettingBox",
    props: ["info"]
};
</script>

<style scoped>
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
}

@media screen and (max-width: 500px) {
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