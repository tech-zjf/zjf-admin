import { AuthorDetailResponse } from "../user/interface";
/** 文章详情 */
export interface ArticleDetail {
  id: number;
  type: string;
  author: AuthorDetailResponse;
  title: string;
  content: string;
  createTime: string;
  isLike: boolean;
  viewCount: number;
  likeCount: number;
  poster: string;
}

export interface ArticleListItem extends ArticleDetail {}
