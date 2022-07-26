import axios from "axios";
import Cookies from "js-cookie";



const api = axios.create({
    baseURL: "http://localhost:5000/v1",
});
api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = "Bearer " + Cookies.get("token");
    }
    return config;
})

export const booksApi = api