import axios from "axios";

const api = axios.create({
    baseURL: 'https://aratu-api.fly.dev'});

export default api;
