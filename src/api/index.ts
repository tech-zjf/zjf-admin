import { AxiosInstance } from "axios";
import http from "./http";
import ArticleApi from "./module/article";
import VideoApi from "./module/video";

class Api {
  article: ArticleApi;
  video: VideoApi;
  constructor(axios: AxiosInstance) {
    this.article = new ArticleApi(axios);
    this.video = new VideoApi(axios);
  }
}

export default new Api(http);
