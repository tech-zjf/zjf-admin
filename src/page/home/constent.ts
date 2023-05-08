/** 首页中心区域tab类型枚举 */
export enum HomeMainTabsEnum {
  HOT = "hot",
  CREATIME = "createTime",
}
/** 首页中心区域tab列表 */
export const HomeMainTabs = [
  {
    label: "最热",
    key: HomeMainTabsEnum.HOT,
  },
  {
    label: "最新",
    key: HomeMainTabsEnum.CREATIME,
  },
];
