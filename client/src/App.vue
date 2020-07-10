<template>
    <div id="app">
        <navBar />
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
    name: "NusVocatio",
    components: {
        navBar: NavBar
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap");
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.container {
    background: #f8fbff;
    height: 100%;
    padding-bottom: 2em;
}

h1,
h2,
h3,
h4,
h5 {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
}

ul,
p,
a,
input[type="text"],
input[type="number"],
input[type="email"],
input[type="password"],
input[type="date"] {
    margin: 0;
    padding: 0;
    font-size: 0.9em;
    line-height: 1.6em;
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
}

.title {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 1.8em;
}

label {
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    color: #464646;
    font-size: 14px;
}

input[type="text"],
input[type="number"],
input[type="email"],
input[type="password"],
input[type="date"],
textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 0.5em 0.8em;
    margin: 0.5em 0;
    border: 1px solid #b8b8b8;
    border-radius: 12px;
    font-size: 80%;
    font-family: "Open Sans", sans-serif;
}

input[type="text"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
input[type="date"]:focus,
textarea:focus {
    outline: none;
}

.select {
    overflow: hidden;
    width: 100%;
}

.select select {
    display: inline-block;
    width: 100%;
    cursor: pointer;
    padding: 0.6em 0.8em;
    padding-right: 3em;
    margin: 0 0 0.5em;
    outline: 0;
    border: 0;
    border-radius: 12px;
    border: 1px solid #b8b8b8;
    color: #5c5c5c;
    font-family: "Open Sans", sans-serif;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url("./assets/down.svg") 95% / 4% #ffffff no-repeat;
    transition-duration: 0.4s;
}

.select select::-ms-expand {
    display: none;
}

.select select:hover,
.select select:focus {
    color: #000;
    background: url("./assets/down.svg") 95% / 4% #ffffff no-repeat;
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

textarea {
    width: 100%;
    resize: none;
}

.mobile-show {
    display: none;
}

.uploadBtn {
    padding: 0.8em;
}

.uploadBtn,
.updateBtn {
    width: 100%;
    border: none;
    outline: none;
    transition-duration: 0.4s;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    font-weight: 600;
}

.uploadBtn:hover {
    background: #6b6b6b;
    color: #fff;
}

.updateBtn {
    padding: 1em;
    background: #d6ead6;
    color: #5a845a;
    border-radius: 10px;
    margin: 1em 0;
}

.updateBtn:hover {
    background: #78aa78;
    color: #fff;
}

.uploadBtn:hover .fa-camera {
    color: #fff;
}

.fa-camera {
    float: right;
    color: #145468;
    font-size: 15px;
    transition-duration: 0.4s;
}

@media screen and (max-width: 1150px) {
    h3 {
        font-size: 16px;
    }

    label,
    h5 {
        font-size: 12px;
    }
}

@media screen and (max-width: 900px) {
}

@media screen and (max-width: 700px) {
    h3 {
        font-size: 14px;
    }

    input[type="text"],
    input[type="number"],
    input[type="email"],
    input[type="password"],
    input[type="date"],
    textarea,
    select,
    .updateBtn,
    .uploadBtn {
        font-size: 11px;
    }
}

@media screen and (max-width: 570px) {
    label,
    h5 {
        font-size: 11px;
    }

    input[type="text"],
    input[type="number"],
    input[type="email"],
    input[type="password"],
    input[type="date"],
    textarea,
    select,
    .updateBtn,
    .uploadBtn {
        font-size: 10px;
    }

    input[type="text"],
    input[type="number"],
    input[type="email"],
    input[type="password"],
    input[type="date"],
    textarea {
        margin-bottom: 0.8em;
        border-radius: 10px;
    }

    .mobile-show {
        display: inherit;
    }

    .mobile-hide {
        display: none;
    }
}

@media screen and (max-width: 450px) {
    label,
    h5,
    .uploadBtn {
        font-size: 9px;
    }

    input[type="text"],
    input[type="number"],
    input[type="email"],
    input[type="password"],
    input[type="date"],
    textarea,
    select,
    .updateBtn {
        font-size: 8px;
    }

    input[type="text"],
    input[type="number"],
    input[type="email"],
    input[type="password"],
    input[type="date"],
    textarea {
        margin-bottom: 0.5em;
        border-radius: 8px;
    }
}
</style>
