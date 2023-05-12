import { AxiosInstance } from "axios";
import http from "./http";
import ArticleApi from "./modules/article";
import VideoApi from "./modules/video";
import { UserApi } from "./modules/user";
import { LoginApi } from "./modules/login";

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
