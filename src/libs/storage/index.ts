import { AuthorDetailResponse } from "@/api/modules/user/interface";
import { TOKEN, USER_INFO } from "./constant";

const storage = window.localStorage;

/** 设置用户信息 */
export const setUserInfo = (user?: AuthorDetailResponse) => {
  if (!user) {
    storage.removeItem(USER_INFO);
    return;
  }
  storage.setItem(USER_INFO, JSON.stringify(user));
};

/** 获取用户信息 */
export const getUserInfo = () => {
  const userInfo = storage.getItem(USER_INFO) || "";
  return JSON.parse(userInfo);
};

/** 设置token */
export const setToken = (token?: string) => {
  if (!token) {
    storage.removeItem(TOKEN);
    return;
  }
  storage.setItem(TOKEN, token);
};

/** 获取token */
export const getToken = () => {
  const token = storage.getItem(TOKEN) || "";
  return token;
};
