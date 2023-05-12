import { AxiosInstance } from "axios";
import http from "./http";
import ArticleApi from "./module/article";
import VideoApi from "./module/video";
import { UserApi } from "./module/user";
import { LoginApi } from "./module/login";

class Api {
  article: ArticleApi;
  video: VideoApi;
  user: UserApi;
  login: LoginApi;
  constructor(axios: AxiosInstance) {
    this.article = new ArticleApi(axios);
    this.video = new VideoApi(axios);
    this.user = new UserApi(axios);
    this.login = new LoginApi(axios);
  }
}

const $request = new Api(http);

export default $request;
