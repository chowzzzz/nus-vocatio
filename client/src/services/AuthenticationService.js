import Api from "./Api";

export default {
    signup(credentials) {
        return Api().post("register", credentials);
    }
};

/* AuthenticationService.register({
    email: 'test@email.com',
    password: '1234'
}) */
