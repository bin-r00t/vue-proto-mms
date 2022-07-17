import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
});

instance.interceptors.response.use(
    function (response) {
        // code
        return response.data;
    },
    function (error) {
        // code
        return error;
    }
);

export default instance;
