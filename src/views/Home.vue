<template>
    <div>
        <div class="register-container">
            <h2>Welcome to NUSVocatio</h2>
            <h3>I am a</h3>
            <div class="register-buttons">
                <div class="button">
                    <router-link to="/login/student">
                        <img src="../assets/selfmade/student.svg" alt="Student" />
                        <p>Student</p>
                    </router-link>
                </div>
                <div class="button">
                    <router-link to="/login/employer">
                        <img src="../assets/selfmade/employer.svg" alt="Employer" />
                        <p>Employer</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBarLogin from "../components/NavBarLogin.vue";

export default {
    name: "Home",
    component: {
        NavBarLogin
    }
};
</script>

<style scoped>
.register-container {
    text-align: center;
    margin: 0 5em;
}

h2 {
    margin-bottom: 1em;
}

.register-buttons {
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 1em;
}

img {
    width: 65%;
}

p {
    padding-top: 1em;
    font-weight: 600;
}

a {
    color: #000;
    text-decoration: none;
}

@media screen and (max-width: 570px) {
    .register-container {
        margin: 0 2em;
    }

    .register-buttons {
        grid-template-columns: auto;
        grid-template-rows: 50% 50%;
        padding: 1em;
    }

    h2 {
        font-size: 20px;
        margin-bottom: 0.5em;
    }

    h3 {
        font-size: 15px;
        margin-bottom: 0.5em;
    }

    .button {
        margin: 0 1em;
    }

    p {
        padding-top: 0.5em;
        padding-bottom: 2em;
        font-size: 13px;
    }

    img {
        width: 60%;
    }
}

@media screen and (max-width: 400px) {
    .register-container {
        margin: 0 1em;
    }

    h2 {
        font-size: 16px;
    }

    h3 {
        font-size: 11px;
    }

    p {
        font-size: 11px;
    }

    img {
        width: 60%;
    }
}
</style>