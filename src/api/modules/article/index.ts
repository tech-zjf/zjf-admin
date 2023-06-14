import { AxiosInstance } from "axios";
import { ArticleDetail, ArticleListItem, CreateArticle } from "./interface";
import { GetListParams } from "@/api/interface";

class ArticleApi {
  axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  /** 文章列表 */
  async getArticleList(params: GetListParams): Promise<ArticleListItem[]> {
    const { data } = await this.axios.get(`/article`, {
      params,
    });
    return data;
  }

  /** 文章详情 */
  async getArticleDetail(articleId: number): Promise<ArticleDetail> {
    const { data } = await this.axios.get(`/article/${articleId}`);
    return data;
  }

  /** 创建文章 */
  async createArticle(params: CreateArticle): Promise<{ articleId: number }> {
    const { data } = await this.axios.post(`/article`, {
      ...params,
    });
    return data;
  }
}

export default ArticleApi;
