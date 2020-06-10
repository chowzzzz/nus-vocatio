<template>
    <div class="container">
        <img src="../assets/selfmade/employer.svg" alt="Employer" />
        <form>
            <h2>Create an account</h2>
            <div class="input-container">
                <img src="../assets/mail.svg" alt="Email" />
                <input type="email" v-model="email" name="email" id="email" placeholder="Email" />
            </div>

            <div class="input-container">
                <img src="../assets/user.svg" alt="User" />
                <input
                    type="text"
                    v-model="username"
                    name="username"
                    id="username"
                    placeholder="Username"
                />
            </div>

            <div class="input-container">
                <img src="../assets/lock.svg" alt="Password" />
                <input
                    type="password"
                    v-model="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                />
            </div>
            <button @click="signup">Sign up</button>
        </form>
    </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService";
export default {
    name: "Signup",
    data() {
        return {
            email: "",
            username: "",
            password: ""
        };
    },
    methods: {
        async signup() {
            const response = await AuthenticationService.signup({
                email: this.email,
                username: this.username,
                password: this.password
            });
            console.log(response.data);
        }
    }
};
</script>

<style scoped>
.container {
    text-align: center;
    margin: 2em;
}

h2 {
    font-weight: bold;
    padding: 0.5em;
}

img {
    width: 200px;
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
</style>