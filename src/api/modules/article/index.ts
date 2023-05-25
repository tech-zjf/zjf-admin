import { AxiosInstance } from "axios";
import { ArticleDetail, ArticleListItem } from "./interface";
import { GetListParams } from "@/api/interface";

class ArticleApi {
  axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  /** 图文列表 */
  async getArticleList(params: GetListParams): Promise<ArticleListItem[]> {
    const { data } = await this.axios.get(`/article`, {
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
