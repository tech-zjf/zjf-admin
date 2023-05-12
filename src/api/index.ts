import { AxiosInstance } from "axios";
import http from "./http";
import ArticleApi from "./module/article";
import VideoApi from "./module/video";
import { UserApi } from "./module/user";

class Api {
  article: ArticleApi;
  video: VideoApi;
  user: UserApi;
  constructor(axios: AxiosInstance) {
    this.article = new ArticleApi(axios);
    this.video = new VideoApi(axios);
    this.user = new UserApi(axios);
  }
}

const $request = new Api(http);

export default $request;
