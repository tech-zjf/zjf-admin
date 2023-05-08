import { AuthorDetailResponse } from "../user/interface";

/** 视频详情 */
export interface VideoDetail {
  id: number;
  type: string;
  author: AuthorDetailResponse;
  title: string;
  desc: string;
  createTime: string;
  isLike: boolean;
  viewCount: number;
  likeCount: number;
  poster: string;
  video: string;
}
