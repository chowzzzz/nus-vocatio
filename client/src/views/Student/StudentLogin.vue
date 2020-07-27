<template>
    <div class="parent-container">
        <div class="login-container">
            <img src="../../assets/selfmade/student.svg" alt="Student Login" id="stu-img" />
            <h2>Student Login</h2>
            <div class="input-container">
                <img src="../../assets/user.svg" alt="Email" />
                <input
                    type="email"
                    v-model="email"
                    name="email"
                    id="email"
                    placeholder="NUS email ID"
                />
            </div>
            <div class="input-container">
                <img src="../../assets/lock.svg" alt="Password" />
                <input
                    type="password"
                    v-model="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                />
            </div>
            <button @click="login()">Login</button>
            <div class="register">
                <p>Don't have an account yet?</p>
                <router-link to="/register/student">
                    <p>Create an account</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
// import { required, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
    name: "StudentLogin",
    data() {
        return {
            email: "",
            password: "",
        };
    },
    /* validations: {
        email: {
            required
        },
        password: {
            required
        }
    }, */
    methods: {
        ...mapActions("students", ["loginStudent"]),
        login() {
            let email = this.email;
            let password = this.password;
            this.loginStudent({ email, password })
                .then(() => {
                    this.$router.push("/");
                })
                .catch((err) => console.log(err));
        },
    },
};
</script>

<style scoped>
.parent-container {
    display: grid;
    height: calc(100vh - 220px);
}

.login-container {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#stu-img {
    width: 80%;
    margin-bottom: 1.5em;
}

.input-container {
    display: flex;
    justify-content: center;
}

.input-container img {
    width: 20px;
    padding: 5px;
}

input {
    margin: 8px;
    border: none;
    border-bottom: 1px solid #e6e6e6;
    padding: 5px 0;
    border-radius: 0;
    width: 200px;
}

input:focus {
    outline: none;
}

button {
    margin: 1.5em;
    padding: 0.8em 3em;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    background: #dddddd;
    outline: none;
    transition-duration: 0.4s;
}

button:hover {
    background: #b8b8b8;
    color: #fff;
}

.register {
    text-align: center;
}

a {
    color: #5a845a;
}

@media screen and (max-width: 570px) {
    .parent-container {
        height: calc(100vh - 160px);
    }

    h2 {
        font-size: 20px;
    }

    input {
        width: 150px;
    }

    button,
    p {
        font-size: 11px;
    }
}

@media screen and (max-width: 400px) {
    .parent-container {
        height: calc(100vh - 175px);
    }
}
</style>