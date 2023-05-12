import { AxiosInstance } from "axios";
import { ArticleDetail } from "./interface";

class ArticleApi {
  axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  /** 图文列表 */
  async getArticleList(params: any): Promise<ArticleDetail[]> {
    const { data } = await this.axios.get(`/article/list`, {
      params,
    });
    return data;
  }

  /** 图文详情 */
  async getArticleDetail(articleId: number): Promise<ArticleDetail> {
    const { data } = await this.axios.get(`/article/${articleId}`);
    return data;
  }
}

export default ArticleApi;
