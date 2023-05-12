import { AxiosInstance } from "axios";
import { AuthorDetailResponse } from "./interface";

export class UserApi {
  axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getUserInfo(uid: string): Promise<AuthorDetailResponse> {
    const user: AuthorDetailResponse = await this.axios.get(`/user/${uid}`);
    return user;
  }
}
