import { AuthorDetailResponse } from "../user/interface";

export interface ViewItemResponse {
  id: number;
  author: AuthorDetailResponse;
  createTime: string;
  isLike: boolean;
  likeCount: number;
  viewCount: number;
  parentAuthor?: AuthorDetailResponse;
  children: ViewItemResponse[];
}
