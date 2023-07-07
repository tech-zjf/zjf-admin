import { AxiosInstance } from "axios";
import http from "./http";
import ArticleApi from "./modules/article";
import VideoApi from "./modules/video";
import { UserApi } from "./modules/user";
import { LoginApi } from "./modules/login";
import { CategoryApi } from "./modules/category";
import { UploadApi } from './modules/upload'
import ViewApi from "./modules/views";
import LikeApi from "./modules/likes";

class Api {
  article: ArticleApi;
  video: VideoApi;
  user: UserApi;
  login: LoginApi;
  category: CategoryApi;
  upload: UploadApi
  view: ViewApi
  like: LikeApi
  constructor(axios: AxiosInstance) {
    this.article = new ArticleApi(axios);
    this.video = new VideoApi(axios);
    this.user = new UserApi(axios);
    this.login = new LoginApi(axios);
    this.category = new CategoryApi(axios);
    this.upload = new UploadApi(axios);
    this.view = new ViewApi(axios)
    this.like = new LikeApi(axios)
  }
}

const $request = new Api(http);

export default $request;
