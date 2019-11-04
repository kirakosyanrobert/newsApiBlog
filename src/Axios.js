import axios from 'axios';
const AUTH_TOKEN = "d8b7a350d87e4fb69cb4953b532738cd";

const Axios = axios.create({
    baseURL: 'https://newsapi.org/v2/'
})

Axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

export default Axios;