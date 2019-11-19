import axios from 'axios';
const AUTH_TOKEN = "15c4859975674a13a5fc9de174a1dee9" ;

const Axios = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines'
})

Axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

export default Axios;