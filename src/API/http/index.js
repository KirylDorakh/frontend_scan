import axios from "axios";

const BASE_URL = "https://gateway.scan-interfax.ru/api/v1";

const $api = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
})