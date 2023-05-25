import { ArticleListItem } from "./modules/article/interface";
import { PostListItem } from "./modules/post/interface";
import { VideoListItem } from "./modules/video/interface";

export interface ApiResponse<T> {
  code: number;
  message?: string;
  data: T;
}

export enum OrderByEnum {
  CREATE_TIME = "createTime",
  LIKE = "like",
}

export enum OrderEnum {
  DESC = "DESC",
  ASC = "ASC",
}

export interface GetListParams {
  page: number;
  pageSize: number;
  orderBy: OrderByEnum;
  order: OrderEnum;
}

export type HomeFeedList = ArticleListItem[] | VideoListItem[] | PostListItem[];
