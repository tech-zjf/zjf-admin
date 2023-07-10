import { CONTENT_TYPE } from "@/constant";
import { CategoryDetail } from "../category/interface";
import { AuthorDetailResponse } from "../user/interface";
/** 文章详情 */
export interface ArticleDetail {
  id: number;
  type: CONTENT_TYPE;
  author: AuthorDetailResponse;
  title: string;
  content: string;
  createTime: string;
  isLike: boolean;
  viewCount: number;
  likeCount: number;
  poster: string;
  category: CategoryDetail;
}

export interface ArticleListItem extends ArticleDetail { }

export interface CreateArticle {
  title: string;
  content: string;
  poster: string;
  categoryId: number
}
