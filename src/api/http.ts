import axios from "axios";
import { ApiCode } from "./constant";
import { message } from "antd";
import { getToken } from "@/libs/storage";

const http = axios.create({
  timeout: 2000,
  baseURL: import.meta.env.VITE_BASE_URL,
});

http.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

http.interceptors.response.use((response) => {
  const { code } = response.data;
  if (code == ApiCode.SUCCESS) {
    return Promise.resolve(response.data);
  } else {
    message.error("请求失败，请联系管理员");
    return Promise.reject(response.data);
  }
});

export default http;
