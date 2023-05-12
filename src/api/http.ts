import axios from "axios";
import { ApiCode } from "./config";

const http = axios.create({
  timeout: 2000,
  baseURL: import.meta.env.VITE_BASE_URL,
});

http.interceptors.request.use((config) => {
  return config;
});

http.interceptors.response.use((response) => {
  const { code, data } = response.data;
  if (code == ApiCode.SUCCESS) {
    return data;
  }
  return data;
});

export default http;
