import { AuthorDetailResponse } from "@/api/modules/user/interface";
import { ARTICLE_CONTENT, THEME, TOKEN, USER_INFO } from "./constant";

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
  const userInfo = storage.getItem(USER_INFO) || "{}";
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

/** 设置发布文章内容 */
export const setArticleContent = (content?: string) => {
  if (!content) {
    storage.removeItem(ARTICLE_CONTENT);
    return;
  }
  storage.setItem(ARTICLE_CONTENT, content);
};

/** 获取发布文章内容 */
export const getArticleContent = () => {
  const articleContent = storage.getItem(ARTICLE_CONTENT) || "";
  return articleContent;
};

/** 设置主题 */
export const setTheme = (type?: 'dark' | 'light') => {
  if (!type) {
    storage.removeItem(THEME);
    return;
  }
  storage.setItem(THEME, type);
};

/** 获取主题 */
export const getTheme = () => {
  const theme = storage.getItem(THEME) || "";
  return theme;
};