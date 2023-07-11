import { GetListParams } from "@/api/interface";
import { AuthorDetailResponse } from "../user/interface";

/** 
 * 评论类型
  */
export enum ViewTypeEnum {
  /** 
   * 文章 
   */
  ARTICLE = 1,
  /** 
   * 视频
   */
  VIDEO = 2,
  /**
   * 帖子
   */
  POST = 3,
  /**
   * 评论
   */
  VIEW = 4
}

export const ViewTypeMap = new Map([
  [ViewTypeEnum.ARTICLE, 'article'],
  [ViewTypeEnum.VIDEO, 'video'],
  [ViewTypeEnum.POST, 'post'],
  [ViewTypeEnum.VIEW, 'view'],
])

export interface ViewItemResponse {
  id: number;
  author: AuthorDetailResponse;
  createTime: string;
  isLike: boolean;
  likeCount: number;
  viewCount: number;
  parentAuthor?: AuthorDetailResponse | null;
  child: ViewItemResponse[];
  content: string,
  active: boolean
}

export interface FindViews extends GetListParams {
  relationType: ViewTypeEnum,
  parentId: number,
}

export interface CreateView {
  content: string,
  relationType: ViewTypeEnum,
  parentId: number,
}