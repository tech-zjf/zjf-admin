import { OrderByEnum } from "@/api/interface";

/** 首页中心区域tab列表 */
export const HomeMainTabs = [
  {
    label: "最热",
    key: OrderByEnum.LIKE,
  },
  {
    label: "最新",
    key: OrderByEnum.CREATE_TIME,
  },
];

/** 首页侧边栏枚举 */
export enum HomeLeftMenutabsEnum {
  RECOMMEND = "recommend",
  ARTICLE = "article",
  VIDEO = "video",
  POST = "post",
}

/** 首页侧边栏 */
export const HomeLeftMenus = [
  {
    title: "推荐",
    key: HomeLeftMenutabsEnum.RECOMMEND,
    icon: "icon-tuijian",
  },
  {
    title: "文章",
    key: HomeLeftMenutabsEnum.ARTICLE,
    icon: "icon-article",
  },
  {
    title: "视频",
    key: HomeLeftMenutabsEnum.VIDEO,
    icon: "icon-video",
  },
  {
    title: "帖子",
    key: HomeLeftMenutabsEnum.POST,
    icon: "icon-tiezi",
  },
];
