import { AuthorDetailResponse } from "../user/interface";

export interface PostDetailResponse {
  id: number;
  type: string;
  author: AuthorDetailResponse;
  content: string;
  createTime: string;
  isLike: boolean;
  viewCount: number;
  likeCount: number;
  attachments: string[];
}