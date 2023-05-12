import axios from "axios";
import { ApiCode } from "./config";
import { message } from "antd";

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
    return Promise.resolve(data);
  } else {
    message.error("请求失败，请联系管理员");
    return Promise.reject(data);
  }
});

export default http;
