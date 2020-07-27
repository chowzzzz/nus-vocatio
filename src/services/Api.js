import axios from "axios";

export default () => {
    return axios.create({
        baseURL: `https://nusvocatio-server.herokuapp.com/`,
        headers: {
            "Content-type": "application/json"
        }
    });
};
