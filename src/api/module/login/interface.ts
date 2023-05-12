import { AuthorDetailResponse } from "../user/interface";

export interface LoginParams {
  phone: string;
  code: string;
}

export interface LoginResponse {
  user: AuthorDetailResponse;
  token: string;
}
