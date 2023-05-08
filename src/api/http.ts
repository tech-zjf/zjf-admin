import axios from "axios";
import ApiConfig from "./config";

const isProd = process.env.ENV === "prod";

const http = axios.create({
  timeout: 2000,
  baseURL: isProd ? ApiConfig.PROD_BASE_URL : ApiConfig.DEV_BASE_URL,
});

http.interceptors.request.use((config) => {
  return config;
});

http.interceptors.response.use((response) => {
  return response;
});

export default http;
