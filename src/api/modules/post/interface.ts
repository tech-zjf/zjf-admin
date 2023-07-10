import { CONTENT_TYPE } from "@/constant";
import { CategoryDetail } from "../category/interface";
import { AuthorDetailResponse } from "../user/interface";

export interface PostDetailResponse {
  id: number;
  type: CONTENT_TYPE;
  author: AuthorDetailResponse;
  content: string;
  createTime: string;
  isLike: boolean;
  viewCount: number;
  likeCount: number;
  attachments: string[];
  category: CategoryDetail;
}

export interface PostListItem extends PostDetailResponse { }
